'use client';

import React from 'react';
import { AppShell } from '../../components/shell/AppShell';
import { Newspaper, Sparkles, Flame, ArrowRight, ExternalLink } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

export default function NewsPage() {
  const articles = [
    {
      title: 'The Shift from Prompt Engineering to Agentic Workflow Orchestration',
      category: 'AI & Engineering',
      time: '3 hours ago',
      desc: 'Why top engineering teams are building autonomous tool-calling loops instead of relying on single static prompts.',
    },
    {
      title: 'State of Cloud Microservices 2026: Asynchronous Frameworks Take Center Stage',
      category: 'Cloud & Infrastructure',
      time: '6 hours ago',
      desc: 'Benchmark study showing FastAPI and Go microservices delivering 40% higher throughput per server cluster.',
    },
    {
      title: 'Top 10 Technical Interview Tradeoffs Asked at Tier-1 Tech Firms',
      category: 'Career Strategy',
      time: '1 day ago',
      desc: 'Detailed breakdown of caching, database indexing, and event queue tradeoffs frequently evaluated in senior interviews.',
    },
  ];

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Badge variant="violet" size="sm" icon={<Newspaper className="w-3.5 h-3.5 text-indigo-600" />}>
                Futuro News
              </Badge>
              <span className="text-xs text-slate-500 font-semibold">&bull; Tech & Engineering Digest</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-outfit mt-1">
              Industry News & Insights
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Curated articles and technical digests summarizing key developments in software engineering and artificial intelligence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((item, idx) => (
            <Card key={idx} variant="elevated" className="p-6 flex flex-col justify-between bg-white border-slate-200 rounded-3xl shadow-xs space-y-4">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="violet" size="sm">{item.category}</Badge>
                  <span className="text-[10px] text-slate-400 font-semibold">{item.time}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 font-outfit mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4 font-medium">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Button variant="secondary" size="sm" className="w-full" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Read Summary
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
