'use client';

import React, { useState, useMemo } from 'react';
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
  ArrowRight,
  Search,
  X,
  Target,
  DollarSign,
  Briefcase,
  Zap,
  Activity
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { CAREER_SIGNALS_DATA, CareerSignal } from '../../data/careerUpdatesData';

export default function CareerUpdatesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [search, setSearch] = useState<string>('');
  const [activeModalSignal, setActiveModalSignal] = useState<CareerSignal | null>(null);

  const categories = [
    { id: 'all', label: 'All Signals' },
    { id: 'hiring_trend', label: 'Hiring Trends' },
    { id: 'new_tech', label: 'Tech Stack' },
    { id: 'layoff_opportunity', label: 'Opportunities' },
    { id: 'skill_demand', label: 'Skill Demand' },
  ];

  const filteredSignals = useMemo(() => {
    return CAREER_SIGNALS_DATA.filter((s) => {
      const matchesCategory = activeCategory === 'all' || s.category === activeCategory;
      const matchesSearch =
        search === '' ||
        s.title.toLowerCase().includes(search.toLowerCase()) ||
        s.aiSummary.toLowerCase().includes(search.toLowerCase()) ||
        s.source.toLowerCase().includes(search.toLowerCase()) ||
        s.tags.some((t) => t.toLowerCase().includes(search.toLowerCase())) ||
        s.targetRoles.some((r) => r.toLowerCase().includes(search.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const getImpactBadgeColor = (score: number) => {
    if (score >= 90) return 'rose';
    if (score >= 85) return 'amber';
    return 'violet';
  };

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        {/* Header Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Badge variant="rose" size="sm" icon={<Flame className="w-3.5 h-3.5 text-rose-400" />}>
                Futuro Pulse ({CAREER_SIGNALS_DATA.length} Active Signals)
              </Badge>
              <Badge variant="emerald" size="sm">
                Real-time Telemetry
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-outfit text-white">
              Career Updates & Market Pulse
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Stay ahead of hiring shifts, salary benchmark changes, high-impact technology disruptions, and skill demand spikes tailored to your target role.
            </p>
          </div>

          {/* Quick Telemetry Stats */}
          <div className="grid grid-cols-3 gap-3 text-center sm:text-left min-w-[280px]">
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-rose-300 font-bold block">Telemetry Feeds</span>
              <span className="text-xl sm:text-2xl font-black text-white font-outfit">{CAREER_SIGNALS_DATA.length}</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-rose-300 font-bold block">Avg Comp Surge</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400 font-outfit">+28%</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-rose-300 font-bold block">Accuracy</span>
              <span className="text-xl sm:text-2xl font-black text-amber-400 font-outfit">98.4%</span>
            </div>
          </div>
        </div>

        {/* Search & Category Filter Toolbar */}
        <Card variant="default" className="p-4 sm:p-6 space-y-4 bg-white border-slate-200 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search market signals by keyword, technology, role, or tag (e.g. Generative AI, Rust, PostgreSQL, System Design)..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-8 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 font-medium"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === c.id
                      ? 'bg-rose-600 text-white shadow-2xs'
                      : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="text-xs text-slate-500 font-semibold">
              Showing <span className="text-rose-600 font-extrabold">{filteredSignals.length}</span> of {CAREER_SIGNALS_DATA.length} market signals
            </div>
          </div>
        </Card>

        {/* Empty Search Result */}
        {filteredSignals.length === 0 && (
          <Card variant="default" className="p-12 text-center space-y-3 bg-white border-slate-200">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-outfit">No Market Signals Found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              No telemetry signals matched your current search filters. Try resetting search query or selecting a different signal category.
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setSearch('');
                setActiveCategory('all');
              }}
            >
              Reset Filters
            </Button>
          </Card>
        )}

        {/* Signals List */}
        <div className="space-y-4">
          {filteredSignals.map((item) => (
            <Card
              key={item.id}
              variant="interactive"
              className="p-6 space-y-4 bg-white border-slate-200 rounded-3xl shadow-xs hover:border-rose-300 hover:shadow-md transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <Badge variant={getImpactBadgeColor(item.impactScore)} size="sm">
                    IMPACT: {item.impactScore}%
                  </Badge>
                  <span className="text-xs font-bold text-slate-800">{item.source}</span>
                  {item.salaryDelta && (
                    <Badge variant="emerald" size="sm" icon={<DollarSign className="w-3 h-3 text-emerald-600" />}>
                      {item.salaryDelta}
                    </Badge>
                  )}
                </div>
                <span className="text-[10px] text-slate-400 font-semibold">{item.time}</span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-outfit leading-relaxed">
                {item.title}
              </h3>

              <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-xs text-slate-700 leading-relaxed font-medium">
                <strong className="text-indigo-900 font-bold block mb-0.5">AI Telemetry Summary:</strong>
                {item.aiSummary}
              </div>

              {/* Target Roles & Hashtags Footer */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
                <div className="flex items-center space-x-2 text-indigo-600 font-bold">
                  <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>{item.relevance}</span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center space-x-1">
                    {item.tags.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-lg text-[10px] bg-slate-100 text-slate-700 font-semibold border border-slate-200"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setActiveModalSignal(item)}
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    className="font-bold text-xs bg-slate-100 hover:bg-rose-50 hover:text-rose-600"
                  >
                    Read Telemetry & Action Plan
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Detailed Signal Breakdown Modal */}
        {activeModalSignal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in overflow-y-auto">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-2xl w-full my-8 space-y-6 shadow-2xl">
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-200">
                <div className="space-y-1 pr-6">
                  <div className="flex items-center space-x-2">
                    <Badge variant={getImpactBadgeColor(activeModalSignal.impactScore)} size="sm">
                      Impact Score: {activeModalSignal.impactScore}%
                    </Badge>
                    <span className="text-xs text-slate-400 font-semibold">&bull; {activeModalSignal.time}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-outfit leading-tight mt-2">
                    {activeModalSignal.title}
                  </h2>
                  <p className="text-xs text-indigo-600 font-bold">Source: {activeModalSignal.source}</p>
                </div>
                <button
                  onClick={() => setActiveModalSignal(null)}
                  className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {/* Salary & Role Impact Callout */}
                {activeModalSignal.salaryDelta && (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider block">
                        Estimated Salary Impact
                      </span>
                      <span className="text-base font-extrabold text-emerald-900 font-outfit">
                        {activeModalSignal.salaryDelta}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider block">
                        Target Roles
                      </span>
                      <span className="text-xs font-bold text-emerald-950">
                        {activeModalSignal.targetRoles.join(', ')}
                      </span>
                    </div>
                  </div>
                )}

                {/* Market Telemetry Analysis */}
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-1.5 text-rose-600 flex items-center space-x-1.5">
                    <Activity className="w-4 h-4" />
                    <span>In-Depth Market Analysis</span>
                  </h4>
                  <p className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-slate-800 font-medium text-xs sm:text-sm">
                    {activeModalSignal.fullBreakdown}
                  </p>
                </div>

                {/* Actionable Steps */}
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-2 text-rose-600 flex items-center space-x-1.5">
                    <Target className="w-4 h-4" />
                    <span>Actionable Career Steps for Your Resume & Interviews</span>
                  </h4>
                  <div className="space-y-2">
                    {activeModalSignal.actionSteps.map((step, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-indigo-50/50 border border-indigo-100">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-slate-800">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <div className="flex items-center space-x-1.5">
                  {activeModalSignal.tags.map((t, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-lg text-[10px] bg-slate-100 text-slate-700 font-bold">
                      #{t}
                    </span>
                  ))}
                </div>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setActiveModalSignal(null)}
                  className="bg-rose-600 hover:bg-rose-500 font-bold"
                >
                  Close Telemetry Report
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
