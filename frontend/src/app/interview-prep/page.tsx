'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '../../components/shell/AppShell';
import {
  Briefcase,
  Sparkles,
  MessageSquare,
  Award,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Bot,
  HelpCircle
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

export default function InterviewPrepPage() {
  const [activeDomain, setActiveDomain] = useState<'ai' | 'sysdesign' | 'behavioral' | 'dsa'>('ai');

  const questionDecks = [
    {
      domain: 'ai',
      question: 'Explain how Retrieval-Augmented Generation (RAG) differs from Fine-Tuning a Large Language Model.',
      answer: 'RAG dynamically injects retrieved context from external knowledge bases into the prompt at runtime, ideal for real-time data and lowering hallucination. Fine-tuning modifies internal model weights, ideal for adapting tone, formatting, and domain vocabulary.',
      difficulty: 'Intermediate',
      frequency: 'High Demand',
    },
    {
      domain: 'ai',
      question: 'How do vector databases perform fast similarity search over high-dimensional embeddings?',
      answer: 'Vector databases utilize Approximate Nearest Neighbor (ANN) indexing algorithms like HNSW (Hierarchical Navigable Small World) or IVFFlat (Inverted File Index) to trade slight precision for exponential search speedups (O(log N) instead of linear scan).',
      difficulty: 'Advanced',
      frequency: 'Very High',
    },
    {
      domain: 'sysdesign',
      question: 'How do you prevent the Thundering Herd Problem when multiple workers refresh a shared cache key simultaneously?',
      answer: 'Utilize Mutex Locks / Distributed Locks (Redlock), Probabilistic Early Expiration (XFetch algorithm), or Background Refresh Workers so only one thread recomputes the expensive cache item.',
      difficulty: 'Advanced',
      frequency: 'High Demand',
    },
    {
      domain: 'behavioral',
      question: 'Tell me about a time you had to pivot technical architecture mid-project due to unpredicted constraints.',
      answer: 'Structure with STAR: Situation (high p99 API latency during load test), Task (migrate synchronous model calls), Action (built an asynchronous Redis queue with worker pool), Result (reduced latency by 65% and met launch SLA).',
      difficulty: 'Behavioral',
      frequency: 'Universal',
    },
  ];

  const filtered = questionDecks.filter((q) => q.domain === activeDomain);

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Badge variant="violet" size="sm" icon={<Briefcase className="w-3.5 h-3.5" />}>
                Interview Preparation Decks
              </Badge>
              <span className="text-xs text-slate-400">&bull; Curated Question Bank & STAR Guides</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-outfit mt-1">
              Interview Prep Center
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              Master high-probability technical, system design, and behavioral questions verified by staff engineers and hiring managers.
            </p>
          </div>

          <Link href="/ai-interviewer">
            <Button variant="ai" size="sm">
              <MessageSquare className="w-4 h-4 mr-1.5" />
              <span>Launch Mock Voice Cockpit</span>
            </Button>
          </Link>
        </div>

        {/* Domain filter tabs */}
        <div className="flex items-center space-x-1.5 bg-[#111726] p-1.5 rounded-2xl border border-white/[0.08] text-xs overflow-x-auto">
          {[
            { id: 'ai', label: 'AI & Machine Learning' },
            { id: 'sysdesign', label: 'System Design' },
            { id: 'behavioral', label: 'STAR Behavioral' },
            { id: 'dsa', label: 'Algorithms & Data Structures' },
          ].map((d) => (
            <button
              key={d.id}
              onClick={() => setActiveDomain(d.id as any)}
              className={`px-4 py-2 rounded-xl font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                activeDomain === d.id
                  ? 'bg-violet-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* Question Cards */}
        <div className="space-y-4">
          {filtered.map((item, idx) => (
            <Card key={idx} variant="interactive" className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="violet" size="sm">{item.difficulty}</Badge>
                <span className="text-[11px] font-bold text-emerald-400">
                  {item.frequency}
                </span>
              </div>

              <h3 className="text-base font-bold text-white font-outfit leading-relaxed">
                {item.question}
              </h3>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-white/[0.06] text-xs text-slate-300 leading-relaxed font-mono">
                <strong className="text-violet-300 font-bold block mb-1">Architectural Answer Blueprint:</strong>
                {item.answer}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
