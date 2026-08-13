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

  const handleSend = (promptText?: string) => {
    const textToSend = promptText || input;
    if (!textToSend.trim() || loading) return;

    const newMsgs: Message[] = [...messages, { role: 'user', text: textToSend }];
    setMessages(newMsgs);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      setMessages([
        ...newMsgs,
        {
          role: 'ai',
          text: `Futuro AI Analysis for "${textToSend}":\n\n1. Target Alignment: 94% synergistic with your current career trajectory as ${user?.targetCareer || 'Full Stack AI Engineer'}.\n2. Recommended Action: Strengthen vector search indexing in Week 3 of your roadmap and run 1 mock interview session.`,
        },
      ]);
      setLoading(false);
    }, 700);
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
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
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
            <div className="p-3 rounded-2xl bg-violet-50/80 border border-violet-200 text-xs text-violet-700 flex items-center space-x-2">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Analyzing career context...</span>
            </div>
          )}
        </div>

        {/* Quick Action Chips */}
        <div className="space-y-2 pt-2 border-t border-slate-200">
          <div className="flex flex-wrap gap-1.5">
            {quickPrompts.map((qp, i) => (
              <button
                key={i}
                onClick={() => handleSend(qp)}
                className="px-2.5 py-1 rounded-lg text-[11px] bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-medium cursor-pointer transition-colors"
              >
                {qp}
              </button>
            ))}
          </div>

          {/* Form Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Futuro AI anything about your career..."
              className="flex-1 bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
            <Button variant="primary" size="sm" type="submit" loading={loading}>
              <Send className="w-3.5 h-3.5" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
