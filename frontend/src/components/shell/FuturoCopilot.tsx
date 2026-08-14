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

/**
 * Custom inline formatting parser for bold text (**bold**) and inline tags (`code`)
 */
const parseInlineFormatting = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-bold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={index} className="px-1.5 py-0.5 mx-0.5 rounded-md bg-indigo-100/90 text-indigo-700 font-mono text-[11px] font-semibold border border-indigo-200/60 inline-block">
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
};

/**
 * Executive markdown text renderer removing raw symbols like **, `, and ###
 */
const formatMessageContent = (content: string) => {
  const lines = content.split('\n');
  return lines.map((line, idx) => {
    // Header parsing
    if (line.startsWith('### ')) {
      return (
        <h4 key={idx} className="font-bold text-sm text-indigo-950 mt-2.5 mb-1 font-outfit">
          {parseInlineFormatting(line.replace('### ', ''))}
        </h4>
      );
    }

    // Numbered list parsing (e.g. 1. **Title**: Description)
    const listMatch = line.match(/^(\d+)\.\s+(.*)/);
    if (listMatch) {
      const num = listMatch[1];
      const rest = listMatch[2];
      return (
        <div key={idx} className="flex items-start space-x-2.5 my-2 pl-0.5">
          <span className="w-4 h-4 shrink-0 rounded-full bg-indigo-600 text-white font-bold text-[10px] flex items-center justify-center mt-0.5 shadow-2xs">
            {num}
          </span>
          <div className="flex-1 text-slate-800 leading-relaxed">
            {parseInlineFormatting(rest)}
          </div>
        </div>
      );
    }

    // Bullet points parsing (e.g. - Item or * Item)
    const bulletMatch = line.match(/^[-*]\s+(.*)/);
    if (bulletMatch) {
      return (
        <div key={idx} className="flex items-start space-x-2 my-1.5 pl-2">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
          <div className="flex-1 text-slate-800 leading-relaxed">
            {parseInlineFormatting(bulletMatch[1])}
          </div>
        </div>
      );
    }

    if (!line.trim()) {
      return <div key={idx} className="h-1" />;
    }

    return (
      <p key={idx} className="my-1 text-slate-800 leading-relaxed">
        {parseInlineFormatting(line)}
      </p>
    );
  });
};

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
              className={`p-4 rounded-2xl text-slate-800 ${
                msg.role === 'ai'
                  ? 'bg-violet-50/80 border border-violet-200 shadow-2xs'
                  : 'bg-slate-100 border border-slate-200 ml-6 font-medium text-slate-900'
              }`}
            >
              <div className="flex items-center space-x-1.5 font-bold text-[10px] text-slate-400 mb-1.5">
                <span>{msg.role === 'ai' ? '✦ FUTURO COPILOT' : 'YOU'}</span>
              </div>
              <div className="space-y-1">
                {formatMessageContent(msg.text)}
              </div>
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
                className="whitespace-nowrap px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-600 transition-colors border border-slate-200 cursor-pointer shrink-0 font-medium"
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
              className="flex-1 px-4 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-900 font-medium"
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
