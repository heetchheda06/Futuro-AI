'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Send, Trash2, HelpCircle, RefreshCw, 
  ArrowDown, User, Bot, AlertTriangle 
} from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface Message {
  _id?: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt?: string;
}

export default function CareerChatbot() {
  const { user, token } = useAuth();
  const router = useRouter();

  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [loadingHistory, setLoadingHistory] = useState(true);
  const [sending, setSending] = useState(false);
  const [clearing, setClearing] = useState(false);
  const [error, setError] = useState('');

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    { title: 'Resume ATS guidelines', text: 'What are the main guidelines to make my resume pass ATS trackers?' },
    { title: 'Data Scientist roadmap', text: 'Can you map out a custom 6-month roadmap to become a Data Scientist?' },
    { title: 'STAR interview strategy', text: 'How do I answer behavioral interview questions using the STAR framework?' },
    { title: 'Security certifications', text: 'What certifications should I take to become a Cyber Security Analyst?' }
  ];

  useEffect(() => {
    if (!user) {
      const savedToken = localStorage.getItem('token');
      if (!savedToken) {
        router.push('/login?redirect=chatbot');
      }
    } else {
      fetchChatHistory();
    }
  }, [user]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, sending]);

  const fetchChatHistory = async () => {
    if (!token && !localStorage.getItem('token')) return;
    setLoadingHistory(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/chats`, {
        headers: {
          'Authorization': `Bearer ${token || localStorage.getItem('token')}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      }
    } catch (err) {
      loadMockWelcome();
    } finally {
      setLoadingHistory(false);
    }
  };

  const loadMockWelcome = () => {
    setMessages([
      {
        role: 'assistant',
        content: `Hello! I'm **Futuro AI**, your personal career mentor. I can help you:
- Explore trending professions (e.g. Data Scientist, UI/UX Designer)
- Map out personalized training roadmaps
- Analyze skills gaps to get hired
- Grade your resume against ATS tracking algorithms
- Simulate HR and Technical interviews

*What career queries can I assist you with today?*`
      }
    ]);
  };

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;
    setSending(true);
    setError('');

    const userMsg: Message = { role: 'user', content: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    const activeToken = token || localStorage.getItem('token');

    try {
      const response = await fetch(`${API_BASE_URL}/chats`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${activeToken}`
        },
        body: JSON.stringify({ message: textToSend })
      });

      if (response.ok) {
        const data = await response.json();
        setMessages(prev => {
          const filtered = prev.slice(0, prev.length - 1);
          return [...filtered, data.userMessage, data.aiMessage];
        });
      } else {
        throw new Error('Chat API error');
      }
    } catch (err) {
      simulateLocalResponse(textToSend);
    } finally {
      setSending(false);
    }
  };

  const simulateLocalResponse = (query: string) => {
    setTimeout(() => {
      const lower = query.toLowerCase();
      let aiContent = '';

      if (lower.includes('software') || lower.includes('developer') || lower.includes('programmer')) {
        aiContent = `### How to Become a Software Engineer\n\nSoftware engineering is an excellent career choice. Here is the typical learning path:\n1. **Learn a core language**: JavaScript/TypeScript or Python.\n2. **Understand databases**: Master relational databases (SQL) and NoSQL (MongoDB).\n3. **Learn Web Frameworks**: React for Frontend, Express/Node.js for Backend.\n4. **Work on Projects**: Build 2-3 functional web apps and host them on GitHub.\n\n*Would you like to build a personalized roadmap or analyze your current skills for this role?*`;
      } else if (lower.includes('data scientist') || lower.includes('data science') || lower.includes('machine learning')) {
        aiContent = `### Transitioning to Data Science\n\nData Scientists analyze complex data structures. To get started:\n- **Python & SQL**: Essential for querying data.\n- **Math & Statistics**: Deep focus on probability distributions, regression, and matrix mathematics.\n- **Data Cleaning**: Pandas, NumPy libraries are fundamental.\n- **Machine Learning**: Scikit-Learn, PyTorch, models validation.\n\n*You can take our Career Assessment in the dashboard to see if your personality traits fit this field!*`;
      } else if (lower.includes('resume') || lower.includes('ats')) {
        aiContent = `### Resume/ATS Guidelines\n\nTo pass Application Tracking Systems (ATS):\n- **Use a simple, clean layout**: Single column layouts parse best. Avoid complex multi-column floating blocks.\n- **Integrate keywords**: Look at job descriptions and naturally weave required skills into your text.\n- **Quantify details**: Write sentences like: *"Maintained React app, reducing query load by 20%"* rather than *"Worked on React"*.\n\n*Upload your current resume in our **Resume ATS Analyzer** to receive an instant evaluation!*`;
      } else if (lower.includes('interview') || lower.includes('practice')) {
        aiContent = `### Preparing for Interviews\n\nWe offer an interactive **AI Interview Coach** tailored for HR, Technical, and Behavioral sessions. Focus on:\n- **STAR framework** (Situation, Task, Action, Result) for behavioral prompts.\n- **Data structures and system patterns** for tech coding reviews.\n- **Clear articulation and confidence metrics**.\n\n*Go to the Interview Coach tab to start a live mock session!*`;
      } else {
        aiContent = `I can help you review your learning objectives, detail the differences between roles like Product Manager vs AI Engineer, and draft structural outline cover letters.\n\nCould you specify what career target you are aiming for?`;
      }

      const aiMsg: Message = { role: 'assistant', content: aiContent };
      setMessages(prev => [...prev, aiMsg]);
    }, 1200);
  };

  const handleClearHistory = async () => {
    if (!token && !localStorage.getItem('token')) return;
    setClearing(true);
    const activeToken = token || localStorage.getItem('token');

    try {
      await fetch(`${API_BASE_URL}/chats`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${activeToken}`
        }
      });
      setMessages([]);
      loadMockWelcome();
    } catch (err) {
      setMessages([]);
      loadMockWelcome();
    } finally {
      setClearing(false);
    }
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const renderMessageContent = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      if (line.startsWith('### ')) {
        return <h4 key={idx} className="font-outfit font-bold text-sm mt-2.5 mb-1.5 text-[#635BFF]">{line.replace('### ', '')}</h4>;
      }
      
      if (line.startsWith('- ') || line.startsWith('* ')) {
        const formatted = formatBoldText(line.substring(2));
        return (
          <li key={idx} className="ml-4 list-disc text-xs text-slate-700 leading-relaxed mb-1">
            {formatted}
          </li>
        );
      }
      
      if (/^\d+\.\s+/.test(line)) {
        const content = line.replace(/^\d+\.\s+/, '');
        const formatted = formatBoldText(content);
        return (
          <li key={idx} className="ml-4 list-decimal text-xs text-slate-700 leading-relaxed mb-1">
            {formatted}
          </li>
        );
      }

      if (!line.trim()) {
        return <div key={idx} className="h-1.5" />;
      }

      const formatted = formatBoldText(line);
      return <p key={idx} className="text-xs text-slate-700 leading-relaxed mb-1">{formatted}</p>;
    });
  };

  const formatBoldText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      
      const italicParts = part.split(/(\*.*?\*)/g);
      return italicParts.map((ip, j) => {
        if (ip.startsWith('*') && ip.endsWith('*')) {
          return <em key={j} className="italic text-slate-500">{ip.slice(1, -1)}</em>;
        }
        return ip;
      });
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex flex-col items-center">
        {/* Banner */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-[#635BFF] text-xs font-semibold mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>AI Career Counselor</span>
          </div>
          <h1 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Futuro AI <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">Mentor Chat</span>
          </h1>
          <p className="text-xs text-slate-500 leading-relaxed">
            Ask any question regarding industry trends, skill roadmaps, cover letters, certifications, or interview questions.
          </p>
        </div>

        {/* Chat Interface Workspace */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-6 items-start flex-grow">
          
          {/* Side Quick Prompts */}
          <div className="lg:col-span-1 space-y-3">
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 pl-1">Suggested Prompts</span>
            <div className="grid grid-cols-1 gap-2">
              {quickPrompts.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendMessage(q.text)}
                  disabled={sending}
                  className="p-3.5 text-left rounded-xl bg-white border border-slate-200 hover:border-purple-200 hover:bg-purple-50/40 text-xs font-semibold shadow-xs transition-all active:scale-98 cursor-pointer disabled:opacity-50"
                >
                  <span className="block text-[#635BFF] font-bold mb-0.5">{q.title}</span>
                  <span className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">{q.text}</span>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={handleClearHistory}
              disabled={clearing || messages.length === 0}
              className="w-full py-2.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 rounded-xl text-xs font-semibold active:scale-98 transition-all flex items-center justify-center space-x-1.5 cursor-pointer disabled:opacity-50 shadow-xs"
            >
              <Trash2 className="h-3.5 w-3.5" />
              <span>{clearing ? 'Clearing...' : 'Clear History'}</span>
            </button>
          </div>

          {/* Messages View */}
          <div className="lg:col-span-3 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col h-[560px] overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div className="flex items-center space-x-2.5">
                <span className="h-8 w-8 rounded-full bg-purple-100 text-[#635BFF] flex items-center justify-center font-bold">
                  <Bot className="h-4 w-4" />
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Futuro AI Mentor</h4>
                  <span className="text-[10px] text-emerald-600 font-semibold flex items-center mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse" />
                    Active Online
                  </span>
                </div>
              </div>
            </div>

            {/* Chat Body */}
            <div ref={chatContainerRef} className="flex-grow p-5 overflow-y-auto space-y-3.5">
              {loadingHistory ? (
                <div className="text-center py-10">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#635BFF] mx-auto" />
                  <p className="text-xs text-slate-400 mt-2">Loading conversation...</p>
                </div>
              ) : (
                messages.map((m, idx) => {
                  const isUser = m.role === 'user';
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${isUser ? 'justify-end' : 'justify-start'} items-start space-x-2`}
                    >
                      {!isUser && (
                        <span className="h-7 w-7 rounded-full bg-purple-50 text-[#635BFF] flex items-center justify-center shrink-0 mt-0.5">
                          <Bot className="h-3.5 w-3.5" />
                        </span>
                      )}
                      <div className={`p-4 rounded-2xl max-w-[85%] text-xs shadow-xs leading-relaxed ${
                        isUser 
                          ? 'bg-[#635BFF] text-white rounded-tr-none' 
                          : 'bg-slate-50 border border-slate-200/80 text-slate-800 rounded-tl-none'
                      }`}>
                        {isUser ? m.content : renderMessageContent(m.content)}
                      </div>
                      {isUser && (
                        <span className="h-7 w-7 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                          <User className="h-3.5 w-3.5" />
                        </span>
                      )}
                    </motion.div>
                  );
                })
              )}

              {sending && (
                <div className="flex justify-start items-center space-x-2">
                  <span className="h-7 w-7 rounded-full bg-purple-50 text-[#635BFF] flex items-center justify-center shrink-0">
                    <Bot className="h-3.5 w-3.5" />
                  </span>
                  <div className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-2xl rounded-tl-none text-xs flex items-center space-x-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputText); }}
              className="p-3.5 border-t border-slate-100 flex gap-2 bg-white"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask mentor anything about roadmaps, salaries, skills, or interviews..."
                className="flex-grow px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#635BFF] text-xs text-slate-900 placeholder-slate-400"
              />
              <button
                type="submit"
                disabled={sending || !inputText.trim()}
                className="px-4 py-2.5 bg-[#635BFF] hover:bg-[#5146E5] text-white rounded-xl transition-all active:scale-98 disabled:opacity-50 cursor-pointer shadow-md shadow-indigo-500/15"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
