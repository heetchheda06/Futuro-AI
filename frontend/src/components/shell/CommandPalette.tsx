'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search,
  X,
  Sparkles,
  Compass,
  GraduationCap,
  BookOpen,
  Users,
  Building2,
  FileText,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { Badge } from '../ui/Badge';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { label: 'Navigate to AI Career Hub', href: '/ai-career-hub', category: 'AI Tools', icon: Sparkles },
    { label: 'Launch AI Mock Interview Cockpit', href: '/ai-interviewer', category: 'AI Tools', icon: MessageSquare },
    { label: 'Build ATS-Compliant Resume with AI', href: '/resume?mode=builder', category: 'AI Tools', icon: FileText },
    { label: 'Scan Resume for ATS Score', href: '/resume?mode=analyze', category: 'AI Tools', icon: FileText },
    { label: 'Explore Skill & Career Network Graph', href: '/career-graph', category: 'Career', icon: Compass },
    { label: 'View 90-Day Milestone Roadmap', href: '/roadmap', category: 'Career', icon: Compass },
    { label: 'Browse Courses Marketplace', href: '/courses', category: 'Learning', icon: GraduationCap },
    { label: 'Search Internet Archive Ebook Library', href: '/ebooks', category: 'Learning', icon: BookOpen },
    { label: 'Search Verified Mentors', href: '/mentors', category: 'Discover', icon: Users },
    { label: 'Compare Colleges & NIRF Benchmarks', href: '/colleges', category: 'Discover', icon: Building2 },
  ];

  const filteredActions = actions.filter((a) =>
    query ? a.label.toLowerCase().includes(query.toLowerCase()) || a.category.toLowerCase().includes(query.toLowerCase()) : true
  );

  const handleSelect = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-start justify-center pt-20 px-4 animate-in fade-in">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-xl w-full shadow-2xl overflow-hidden space-y-3 p-4">
        {/* Search Bar */}
        <div className="flex items-center space-x-3 px-3 py-2 border-b border-slate-200">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search feature..."
            className="flex-1 bg-transparent text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-slate-100 text-slate-400 hover:text-slate-700"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto space-y-1 p-1 text-xs">
          {filteredActions.map((action, i) => {
            const Icon = action.icon;
            return (
              <div
                key={i}
                onClick={() => handleSelect(action.href)}
                className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 cursor-pointer transition-all"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">{action.label}</span>
                    <span className="text-[10px] text-slate-400">{action.category}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-slate-400 text-[10px]">
                  <span>Open</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
