'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '../../components/shell/AppShell';
import {
  Compass,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Target,
  Award,
  TrendingUp,
  Layers,
  ChevronRight
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { DataSourceBadge } from '../../components/ui/DataSourceBadge';

export default function CareerNavigatorPage() {
  const [selectedRole, setSelectedRole] = useState('Full Stack AI Engineer');

  const stages = [
    {
      phase: 'Phase 1',
      title: 'Foundations & Core Engineering',
      duration: 'Months 1 - 3',
      status: 'completed',
      milestones: [
        'Master Python 3.12, AsyncIO, and Data Structures',
        'Build REST & GraphQL APIs with FastAPI & Pydantic',
        'Relational Schema Design & SQL Optimization (PostgreSQL)',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'AI Microservices & Vector Search',
      duration: 'Months 4 - 6',
      status: 'current',
      milestones: [
        'Vector Embeddings & Distributed Search Indexing (HNSW / pgvector)',
        'RAG Architecture & Contextual Grounding Pipelines',
        'Asynchronous Task Queueing with Redis & Celery',
      ],
    },
    {
      phase: 'Phase 3',
      title: 'Multi-Agent Orchestration & Deployment',
      duration: 'Months 7 - 9',
      status: 'upcoming',
      milestones: [
        'Stateful Multi-Agent Workflows & Tool Calling',
        'Containerization & Cloud Infrastructure (Docker & AWS ECS)',
        'System Evaluation, Latency Benchmarking & MLOps Monitoring',
      ],
    },
    {
      phase: 'Phase 4',
      title: 'Senior Systems Architect & Offer Negotiation',
      duration: 'Months 10 - 12',
      status: 'upcoming',
      milestones: [
        'End-to-End System Design Interviews & Tradeoff Defense',
        'Public Portfolio Showcase & Technical Architecture Reviews',
        'Executive Offer Negotiation & Compensation Benchmarking',
      ],
    },
  ];

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Badge variant="violet" size="sm" icon={<Compass className="w-3.5 h-3.5 text-indigo-600" />}>
                Career Navigator Engine
              </Badge>
              <DataSourceBadge isLive={true} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-outfit mt-1">
              Career Trajectory & Stage Navigator
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Follow a clear, verified step-by-step career path from foundational skills to senior architect offer readiness.
            </p>
          </div>

          <Link href="/skill-gap">
            <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              <span>View Skill Gap Matrix</span>
            </Button>
          </Link>
        </div>

        {/* Career Stage Timeline List */}
        <div className="space-y-4">
          {stages.map((stage, idx) => (
            <Card key={idx} variant="elevated" className="p-6 space-y-4 bg-white border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
                <div className="flex items-center space-x-3">
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                      stage.status === 'completed'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : stage.status === 'current'
                        ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                        : 'bg-slate-100 text-slate-500 border border-slate-200'
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">{stage.phase}</span>
                      <span className="text-slate-300">&bull;</span>
                      <span className="text-xs text-slate-500">{stage.duration}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 font-outfit">{stage.title}</h3>
                  </div>
                </div>

                <Badge
                  variant={
                    stage.status === 'completed'
                      ? 'emerald'
                      : stage.status === 'current'
                      ? 'violet'
                      : 'neutral'
                  }
                  size="sm"
                >
                  {stage.status === 'completed' ? 'Completed' : stage.status === 'current' ? 'In Progress' : 'Upcoming'}
                </Badge>
              </div>

              <div className="space-y-2 text-xs">
                {stage.milestones.map((m, mIdx) => (
                  <div key={mIdx} className="flex items-start space-x-2.5 text-slate-700">
                    <CheckCircle2
                      className={`w-4 h-4 shrink-0 mt-0.5 ${
                        stage.status === 'completed'
                          ? 'text-emerald-600'
                          : stage.status === 'current'
                          ? 'text-indigo-600'
                          : 'text-slate-300'
                      }`}
                    />
                    <span className="leading-relaxed">{m}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
