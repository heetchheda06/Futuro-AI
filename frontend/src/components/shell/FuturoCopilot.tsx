'use client';

import React, { useState } from 'react';
import { Bot, X, Sparkles, Send, RefreshCw, Trash2, ArrowRight } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { useAuth } from '../../context/AuthContext';

interface FuturoCopilotProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  role: 'ai' | 'user';
  text: string;
}

export function FuturoCopilot({ isOpen, onClose }: FuturoCopilotProps) {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'ai',
      text: `Hello ${user?.name || 'User'}! I am Futuro AI, your personal Career Copilot. How can I help optimize your career trajectory today?`,
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const quickPrompts = [
    'Analyze my skills',
    'What should I learn?',
    'Improve my resume',
    'Generate a project',
    'Prepare me for interviews',
  ];

  const handleSend = async (promptText?: string) => {
    const textToSend = promptText || input;
    if (!textToSend.trim() || loading) return;

    const newMsgs: Message[] = [...messages, { role: 'user', text: textToSend }];
    setMessages(newMsgs);
    setInput('');
    setLoading(true);

    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
      const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

      const response = await fetch(`${apiBase}/chats`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        },
        body: JSON.stringify({ message: textToSend })
      });

      if (response.ok) {
        const data = await response.json();
        const aiText = data.aiMessage?.content || data.message;
        if (aiText) {
          setMessages([...newMsgs, { role: 'ai', text: aiText }]);
          setLoading(false);
          return;
        }
      }
    } catch (err) {
      console.warn('Backend chat API request failed, using intelligent client fallback:', err);
    }

    // Dynamic Intelligent Response Fallback
    const lower = textToSend.toLowerCase().trim();
    let reply = '';
    if (lower === 'hi' || lower === 'hello' || lower === 'hey' || lower.startsWith('hi ') || lower.startsWith('hello ')) {
      reply = `Hello ${user?.name || 'there'}! 👋 I am Futuro AI, your personal Career Copilot. How can I assist you with your career goals today?`;
    } else if (lower.includes('resume') || lower.includes('cv')) {
      reply = `To create an ATS-optimized resume:\n\n1. **Use Action Verbs**: Start bullets with strong impact verbs.\n2. **Quantify Metrics**: Highlight measurable outputs (e.g., "Boosted retention by 25%").\n3. **Try AI Builder**: Switch to **Build Resume** mode on the \`/resume\` page to generate & download your A4 PDF!`;
    } else if (lower.includes('interview')) {
      reply = `For interview preparation:\n\n1. Use the **STAR Framework** (Situation, Task, Action, Result).\n2. Practice mock coding & behavioral sessions on the \`/interview-prep\` tool.\n3. Tailor your core stories to match key requirements for ${user?.targetCareer || 'your desired role'}.`;
    } else {
      reply = `Futuro AI Guidance for "${textToSend}":\n\n1. **Career Alignment**: Tailored specifically for your trajectory as ${user?.targetCareer || 'Full Stack AI Engineer'}.\n2. **Recommended Action**: Deepen hands-on practice, generate projects on \`/ai-tools/project-generator\`, and review target skill benchmarks.`;
    }

    setMessages([...newMsgs, { role: 'ai', text: reply }]);
    setLoading(false);
  };

  const handleClear = () => {
    setMessages([
      {
        role: 'ai',
        text: `Hello ${user?.name || 'User'}! I am Futuro AI, your personal Career Copilot. How can I help optimize your career trajectory today?`,
      },
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex justify-end animate-in fade-in">
      <div className="bg-white border-l border-slate-200 w-full max-w-md h-full flex flex-col justify-between p-6 shadow-2xl space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <h3 className="text-base font-bold text-slate-900 font-outfit">Futuro AI</h3>
                <Badge variant="violet" size="sm">Copilot</Badge>
              </div>
              <span className="text-[10px] text-slate-500 font-medium">Your Career Intelligence Assistant</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <button
              onClick={handleClear}
              title="Clear Conversation"
              className="p-1.5 rounded-xl bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto space-y-3 p-1 text-xs">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-4 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                msg.role === 'ai'
                  ? 'bg-violet-50/80 border border-violet-200 text-slate-800 shadow-2xs'
                  : 'bg-slate-100 border border-slate-200 text-slate-900 ml-6'
              }`}
            >
              <div className="flex items-center space-x-1.5 font-bold text-[10px] text-slate-400 mb-1">
                <span>{msg.role === 'ai' ? '✦ FUTURO COPILOT' : 'YOU'}</span>
              </div>
              {msg.text}
            </div>
          ))}

          {loading && (
            <div className="p-4 rounded-2xl bg-violet-50/80 border border-violet-200 text-slate-600 flex items-center space-x-2 text-xs">
              <RefreshCw className="w-4 h-4 animate-spin text-indigo-600" />
              <span>Futuro AI is generating your response...</span>
            </div>
          )}
        </div>

        {/* Quick Suggestions & Input */}
        <div className="space-y-3 pt-3 border-t border-slate-200">
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 text-[11px] scrollbar-none">
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(p)}
                className="whitespace-nowrap px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-600 transition-colors border border-slate-200 cursor-pointer shrink-0"
              >
                {p}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Futuro AI anything about your career..."
              className="flex-1 px-4 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-900"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-50 transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
