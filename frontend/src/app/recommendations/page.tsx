'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '../../components/shell/AppShell';
import { useAuth } from '../../context/AuthContext';
import {
  Sparkles,
  Award,
  Briefcase,
  GraduationCap,
  Layers,
  ArrowRight,
  HelpCircle,
  TrendingUp,
  Target,
  CheckCircle2,
  Check,
  PlusCircle,
  Compass,
  BookOpen,
  Code
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

export default function RecommendationsPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'all' | 'matches' | 'explore' | 'skills' | 'courses' | 'projects'>('all');

  const userSkills = (user?.currentSkills || []).map(s => s.toLowerCase());

  const recommendations = [
    {
      type: 'matches',
      badge: 'Top Career Match',
      title: 'Full Stack AI Engineer',
      meta: 'Average Comp: ₹12 - ₹28 LPA &bull; 92% Trajectory Fit',
      reasons: [
        '✓ Strong programming foundation',
        '✓ High market hiring spike (+52% YoY)',
        '✓ Matches interest in AI automation'
      ],
      why: 'Recommended because your programming foundation and interest profile align closely with full-stack AI development workflows.',
      actionText: 'Explore Career Details',
      actionHref: '/explorer'
    },
    {
      type: 'explore',
      badge: 'Career to Explore',
      title: 'Data Scientist & Analytics Lead',
      meta: 'Average Comp: ₹10 - ₹24 LPA &bull; 86% Trajectory Fit',
      reasons: [
        '✓ Strong analytical mindset',
        '✓ High demand across fintech and health tech'
      ],
      why: 'Recommended as an adjacent high-growth career path based on your mathematical and analytical problem-solving preferences.',
      actionText: 'Explore Career Details',
      actionHref: '/explorer'
    },
    {
      type: 'skills',
      badge: 'High Impact Skill to Develop',
      title: 'Vector Search Indexing (HNSW / pgvector)',
      meta: 'Demand: +84% YoY &bull; Estimated Effort: 2 Weeks',
      reasons: [
        '✓ Highest leverage opportunity to boost resume shortlist rate',
        '✓ Required in 84% of AI Engineer job postings'
      ],
      why: 'Recommended because 84% of senior AI engineering job postings this month require production vector search optimizations.',
      actionText: 'Analyze Skill Gap',
      actionHref: '/skill-gap'
    },
    {
      type: 'courses',
      badge: 'Curated Course Match',
      title: 'Production LLM Application Architecture',
      meta: 'Provider: Coursera / DeepLearning.AI &bull; 96% Alignment',
      reasons: [
        '✓ Addresses system evaluation & streaming latency',
        '✓ Taught by top industry AI researchers'
      ],
      why: 'Recommended because it directly addresses missing production system design and latency evaluation frameworks.',
      actionText: 'Explore Courses',
      actionHref: '/courses'
    },
    {
      type: 'projects',
      badge: 'High-Signal Portfolio Project',
      title: 'Multi-Agent Autonomous Synthesis Hub',
      meta: 'Tech: Next.js 15, FastAPI, Gemini 2.5 Flash, Vector Search',
      reasons: [
        '✓ Demonstrates end-to-end multi-agent orchestration',
        '✓ High portfolio impact for tech interviews'
      ],
      why: 'Recommended because hiring managers prioritize verifiable asynchronous agent orchestration in candidate repositories.',
      actionText: 'Generate Project Blueprint',
      actionHref: '/ai-tools/project-generator'
    }
  ];

  const filtered = recommendations.filter(
    (item) => activeTab === 'all' || item.type === activeTab
  );

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Badge variant="violet" size="sm" icon={<Sparkles className="w-3.5 h-3.5 text-indigo-600" />}>
                Futuro AI Career Intelligence
              </Badge>
              <Badge variant="emerald" size="sm">5 Recommendations Generated</Badge>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-outfit mt-1">
              Personalized Career Recommendations
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Every recommendation is backed by transparent matching evidence, market telemetry, and clear next steps.
            </p>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center space-x-1.5 bg-white p-2 rounded-2xl border border-slate-200 text-xs overflow-x-auto">
          {[
            { id: 'all', label: 'All Recommendations' },
            { id: 'matches', label: 'Best Matches' },
            { id: 'explore', label: 'Careers to Explore' },
            { id: 'skills', label: 'Skills to Develop' },
            { id: 'courses', label: 'Courses for You' },
            { id: 'projects', label: 'Projects to Build' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* List of Recommendations */}
        <div className="space-y-4">
          {filtered.map((item, idx) => (
            <Card key={idx} variant="elevated" className="p-6 space-y-4 bg-white border-slate-200 rounded-3xl shadow-xs">
              <div className="flex items-center justify-between">
                <Badge variant="violet" size="sm">{item.badge}</Badge>
                <span className="text-[11px] text-slate-500 font-medium" dangerouslySetInnerHTML={{ __html: item.meta }} />
              </div>

              <h3 className="text-lg font-bold text-slate-900 font-outfit">
                {item.title}
              </h3>

              {/* Explainability Card: WHY ARE YOU RECOMMENDING THIS TO ME? */}
              <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-xs space-y-2">
                <div className="flex items-center space-x-1.5 text-indigo-900 font-bold uppercase tracking-wider text-[10px]">
                  <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Why is Futuro AI recommending this to me?</span>
                </div>
                <p className="text-slate-700 leading-relaxed font-medium">
                  {item.why}
                </p>

                {item.reasons.length > 0 && (
                  <div className="pt-2 border-t border-indigo-100 flex flex-wrap gap-2">
                    {item.reasons.map((r, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg text-[11px] bg-white text-indigo-700 border border-indigo-200 font-bold">
                        {r}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-2 flex justify-end">
                <Link href={item.actionHref}>
                  <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                    {item.actionText}
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
