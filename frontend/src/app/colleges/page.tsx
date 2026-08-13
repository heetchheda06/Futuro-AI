'use client';

import React, { useState } from 'react';
import { AppShell } from '../../components/shell/AppShell';
import {
  Building2,
  Sparkles,
  MapPin,
  Award,
  TrendingUp,
  X,
  ExternalLink,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { DataSourceBadge } from '../../components/ui/DataSourceBadge';

export default function CollegesPage() {
  const [showComparisonModal, setShowComparisonModal] = useState(false);

  const colleges = [
    {
      id: 'col-1',
      name: 'Indian Institute of Technology (IIT) Bombay',
      location: 'Mumbai, Maharashtra',
      nirf: '#3 Engineering',
      exams: ['JEE Advanced'],
      avgLpa: '₹23.5 LPA',
      highestLpa: '₹1.4 CPA',
      tuition: '₹8.5 Lakhs Total',
      redditSentiment: '94% Positive (Top Placements & Research Labs)',
      match: 94,
    },
    {
      id: 'col-2',
      name: 'BITS Pilani (Pilani Campus)',
      location: 'Pilani, Rajasthan',
      nirf: '#11 Engineering',
      exams: ['BITSAT'],
      avgLpa: '₹20.8 LPA',
      highestLpa: '₹60 LPA',
      tuition: '₹19.5 Lakhs Total',
      redditSentiment: '91% Positive (No Reservation, Excellent Practice School)',
      match: 91,
    },
  ];

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Badge variant="violet" size="sm" icon={<Building2 className="w-3.5 h-3.5 text-indigo-600" />}>
                Higher Education Intelligence
              </Badge>
              <DataSourceBadge isLive={true} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-outfit mt-1">
              College Intelligence & Comparison Matrix
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Compare NIRF benchmarks, entrance cutoffs, tuition fees, placement averages, and student sentiment.
            </p>
          </div>

          <Button variant="primary" size="md" onClick={() => setShowComparisonModal(true)}>
            Side-by-Side Compare (2 Selected)
          </Button>
        </div>

        {/* College List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {colleges.map((col) => (
            <Card key={col.id} variant="interactive" className="p-6 space-y-4 bg-white border-slate-200">
              <div className="flex items-start justify-between">
                <div>
                  <Badge variant="violet" size="sm" className="mb-1">{col.nirf}</Badge>
                  <h3 className="text-lg font-bold text-slate-900 font-outfit">{col.name}</h3>
                  <span className="text-xs text-slate-500 flex items-center space-x-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{col.location}</span>
                  </span>
                </div>
                <span className="text-xs font-extrabold text-indigo-600 font-outfit">{col.match}% Match</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 block">Average Placement</span>
                  <span className="font-extrabold text-emerald-600">{col.avgLpa}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 block">Highest Package</span>
                  <span className="font-extrabold text-indigo-600">{col.highestLpa}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-violet-50/70 border border-violet-200 text-xs text-slate-800 space-y-1">
                <span className="text-[10px] font-bold text-indigo-700 uppercase block">Student Sentiment Digest</span>
                <p className="text-slate-700 font-semibold">{col.redditSentiment}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Side-by-Side Comparison Modal */}
        {showComparisonModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-3xl w-full space-y-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 font-outfit">
                  Side-by-Side College Comparison
                </h3>
                <button
                  onClick={() => setShowComparisonModal(false)}
                  className="p-1.5 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                {colleges.map((c) => (
                  <div key={c.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <h4 className="font-bold text-slate-900 font-outfit text-sm">{c.name}</h4>
                    <div className="space-y-1 text-slate-700">
                      <p><strong>NIRF:</strong> {c.nirf}</p>
                      <p><strong>Average LPA:</strong> <span className="text-emerald-600 font-bold">{c.avgLpa}</span></p>
                      <p><strong>Tuition Fees:</strong> {c.tuition}</p>
                      <p><strong>Exams:</strong> {c.exams.join(', ')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
