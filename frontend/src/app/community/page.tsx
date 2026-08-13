'use client';

import React, { useState } from 'react';
import { AppShell } from '../../components/shell/AppShell';
import { Users, Sparkles, ThumbsUp, MessageSquare, Bookmark, Search, Plus } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<'trending' | 'interviews' | 'questions'>('trending');

  const posts = [
    {
      author: 'Aarav Patel',
      role: 'Software Engineer @ Stripe',
      title: 'How I passed the AI & System Design loop at a Tier-1 FinTech firm',
      content: 'Sharing my 30-day preparation breakdown: focused heavily on asynchronous request queues, rate limiting, and vector DB indexing...',
      upvotes: 142,
      comments: 38,
      tag: 'Interview Experience',
    },
    {
      author: 'Priya Sharma',
      role: 'Staff AI Researcher',
      title: 'Tips for transitioning from Full Stack Dev to AI Infrastructure Engineer',
      content: 'The most important shift is understanding low-latency model serving, GPU memory constraints, and token streaming protocols...',
      upvotes: 218,
      comments: 54,
      tag: 'Career Transition',
    },
  ];

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Badge variant="violet" size="sm" icon={<Users className="w-3.5 h-3.5 text-indigo-600" />}>
                Futuro Community
              </Badge>
              <span className="text-xs text-slate-500 font-semibold">&bull; Peer & Engineer Discussion Network</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-outfit mt-1">
              Community Network
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Connect with fellow ambitious engineers, share interview experiences, ask technical questions, and learn from industry peers.
            </p>
          </div>

          <Button variant="primary" size="sm" leftIcon={<Plus className="w-4 h-4" />}>
            New Discussion Post
          </Button>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center space-x-1.5 bg-white p-2 rounded-2xl border border-slate-200 text-xs overflow-x-auto">
          {[
            { id: 'trending', label: 'Trending Discussions' },
            { id: 'interviews', label: 'Interview Logs' },
            { id: 'questions', label: 'Q&A Help' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === t.id
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Posts */}
        <div className="space-y-4">
          {posts.map((post, idx) => (
            <Card key={idx} variant="elevated" className="p-6 space-y-3 bg-white border-slate-200 rounded-3xl shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-xs font-extrabold shadow-xs">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{post.author}</h4>
                    <span className="text-[10px] text-slate-500 font-medium">{post.role}</span>
                  </div>
                </div>
                <Badge variant="violet" size="sm">{post.tag}</Badge>
              </div>

              <h3 className="text-base font-bold text-slate-900 font-outfit">
                {post.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {post.content}
              </p>

              <div className="flex items-center space-x-6 pt-3 border-t border-slate-100 text-xs text-slate-500">
                <button className="flex items-center space-x-1.5 hover:text-indigo-600 transition-colors font-semibold cursor-pointer">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{post.upvotes} Upvotes</span>
                </button>
                <button className="flex items-center space-x-1.5 hover:text-indigo-600 transition-colors font-semibold cursor-pointer">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{post.comments} Comments</span>
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
