'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '../../components/shell/AppShell';
import {
  Target,
  Sparkles,
  CheckCircle2,
  Clock,
  Plus,
  ArrowRight,
  Flame,
  Zap,
  Trash2,
  Layers
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { DataSourceBadge } from '../../components/ui/DataSourceBadge';

export default function RoadmapPage() {
  const [milestones, setMilestones] = useState([
    {
      id: 'm-1',
      title: 'Complete SQL & Relational Indexing Masterclass',
      category: 'Database',
      timeframe: 'TODAY',
      status: 'completed',
      description: 'Master B-tree indexes, execution plans, and query optimizations.',
    },
    {
      id: 'm-2',
      title: 'Build Vector Search Microservice with pgvector',
      category: 'AI Engineering',
      timeframe: '30 DAYS',
      status: 'current',
      description: 'Implement HNSW vector search indexing with streaming OpenAI/Gemini embeddings.',
    },
    {
      id: 'm-3',
      title: 'Deploy FastAPI Microservice Cluster to AWS ECS',
      category: 'Cloud & MLOps',
      timeframe: '60 DAYS',
      status: 'upcoming',
      description: 'Configure Docker multi-stage builds, ECS Fargate, and Redis rate limiting queues.',
    },
    {
      id: 'm-4',
      title: 'Complete 3 Voice AI Mock Interviews & STAR Drills',
      category: 'Interview Prep',
      timeframe: '90 DAYS',
      status: 'upcoming',
      description: 'Reach 85%+ overall STAR method score across system design tradeoffs.',
    },
  ]);

  const toggleMilestone = (id: string) => {
    setMilestones((prev) =>
      prev.map((m) =>
        m.id === id
          ? { ...m, status: m.status === 'completed' ? 'upcoming' : 'completed' }
          : m
      )
    );
  };

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Badge variant="violet" size="sm" icon={<Target className="w-3.5 h-3.5 text-indigo-600" />}>
                90-Day Milestone Execution
              </Badge>
              <DataSourceBadge isLive={true} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-outfit mt-1">
              Personalized Career Roadmap
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Track your 30-60-90 day milestone trajectory to ensure on-time career goal completion.
            </p>
          </div>

          <Link href="/calendar">
            <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              <span>Schedule In Planner</span>
            </Button>
          </Link>
        </div>

        {/* Timeline List */}
        <div className="relative space-y-6 before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200">
          {milestones.map((item, idx) => (
            <div key={item.id} className="relative pl-12">
              {/* Milestone Circle Marker */}
              <div
                onClick={() => toggleMilestone(item.id)}
                className={`absolute left-4 top-5 -translate-x-1/2 w-5 h-5 rounded-full border flex items-center justify-center cursor-pointer transition-all ${
                  item.status === 'completed'
                    ? 'bg-emerald-500 border-emerald-600 text-white shadow-2xs'
                    : item.status === 'current'
                    ? 'bg-indigo-600 border-indigo-700 text-white shadow-2xs'
                    : 'bg-white border-slate-300'
                }`}
              >
                {item.status === 'completed' && <CheckCircle2 className="w-3.5 h-3.5" />}
              </div>

              <Card variant="elevated" className="p-6 space-y-3 bg-white border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        item.timeframe === 'TODAY'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : item.timeframe === '30 DAYS'
                          ? 'bg-violet-50 text-violet-700 border border-violet-200'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      {item.timeframe}
                    </span>
                    <Badge variant="cyan" size="sm">{item.category}</Badge>
                  </div>

                  <button
                    onClick={() => toggleMilestone(item.id)}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-900 cursor-pointer"
                  >
                    {item.status === 'completed' ? 'Mark Incomplete' : 'Mark Completed'}
                  </button>
                </div>

                <h3 className={`text-base font-bold font-outfit ${item.status === 'completed' ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
