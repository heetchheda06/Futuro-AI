'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '../../components/shell/AppShell';
import {
  Flame,
  Sparkles,
  TrendingUp,
  ExternalLink,
  Bookmark,
  Share2,
  Filter,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

export default function CareerUpdatesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const updates = [
    {
      category: 'hiring_trend',
      title: 'Senior Generative AI Engineers Command +35% Compensation Premium in Q3',
      source: 'Tech Market Intelligence',
      time: '2 hours ago',
      impactScore: 94,
      aiSummary: 'Enterprise software companies are rapidly expanding hiring pipelines for candidates proficient in vector retrieval, fine-tuning, and RAG architectures.',
      relevance: 'Highly Relevant to your AI Engineer career roadmap.',
      tags: ['Generative AI', 'Salaries', 'Hiring Spikes'],
    },
    {
      category: 'new_tech',
      title: 'Google & DeepMind Announce Gemini 2.5 Flash API Upgrades for Real-Time Agents',
      source: 'AI Research Weekly',
      time: '5 hours ago',
      impactScore: 91,
      aiSummary: 'New streaming protocols reduce token latency to under 80ms while expanding native tool execution hooks.',
      relevance: 'Matches your current project blueprint stack.',
      tags: ['Gemini', 'LLM Infrastructure', 'API'],
    },
    {
      category: 'layoff_opportunity',
      title: 'Cloud Infrastructure & SRE Roles Expand Following Enterprise Cloud Migrations',
      source: 'Cloud Weekly',
      time: '1 day ago',
      impactScore: 88,
      aiSummary: 'Despite general tech re-alignments, specialized Kubernetes and Cloud Security roles experience record low candidate supply.',
      relevance: 'Good secondary path option.',
      tags: ['DevOps', 'AWS', 'Kubernetes'],
    },
  ];

  const filtered = updates.filter(
    (u) => activeCategory === 'all' || u.category === activeCategory
  );

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Badge variant="rose" size="sm" icon={<Flame className="w-3.5 h-3.5" />}>
                Futuro Pulse
              </Badge>
              <span className="text-xs text-slate-500 font-semibold">&bull; Real-time Career Telemetry & Market Signals</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-outfit mt-1">
              Career Updates & Market Pulse
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Stay ahead of hiring shifts, salary benchmark changes, and technology disruptions tailored to your target role.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex items-center space-x-1.5 bg-white p-2 rounded-2xl border border-slate-200 text-xs overflow-x-auto">
            {[
              { id: 'all', label: 'All Signals' },
              { id: 'hiring_trend', label: 'Hiring Trends' },
              { id: 'new_tech', label: 'Tech Stack' },
              { id: 'layoff_opportunity', label: 'Opportunities' },
            ].map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === c.id
                    ? 'bg-rose-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Signals List */}
        <div className="space-y-4">
          {filtered.map((item, idx) => (
            <Card key={idx} variant="elevated" className="p-6 space-y-3 bg-white border-slate-200 rounded-3xl shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge variant="rose" size="sm">
                    Impact: {item.impactScore}%
                  </Badge>
                  <span className="text-xs font-bold text-slate-700">{item.source}</span>
                </div>
                <span className="text-[10px] text-slate-400 font-semibold">{item.time}</span>
              </div>

              <h3 className="text-base font-bold text-slate-900 font-outfit leading-relaxed">
                {item.title}
              </h3>

              <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-xs text-slate-700 leading-relaxed font-medium">
                <strong className="text-indigo-900 font-bold block mb-0.5">AI Summary:</strong>
                {item.aiSummary}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs">
                <div className="flex items-center space-x-2 text-indigo-600 font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{item.relevance}</span>
                </div>

                <div className="flex items-center space-x-1.5">
                  {item.tags.map((t, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded-lg text-[10px] bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
