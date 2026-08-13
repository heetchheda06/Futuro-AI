'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '../../components/shell/AppShell';
import {
  FileText,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Download,
  Upload,
  RefreshCw,
  Zap,
  ArrowRight
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { CircularGauge } from '../../components/ui/CircularGauge';
import { DataSourceBadge } from '../../components/ui/DataSourceBadge';
import { useAuth } from '../../context/AuthContext';

export default function ResumePage() {
  const { user } = useAuth();
  const [analyzing, setAnalyzing] = useState(false);
  const [atsScore, setAtsScore] = useState(91);

  const bulletPoints = [
    {
      original: 'Built AI backend endpoints using Python and FastAPI.',
      enhanced: 'Architected asynchronous FastAPI microservices handling 10,000+ RPM with sub-50ms latency using pgvector and Redis caching.',
      impact: '+28% Keyword Match Density',
    },
    {
      original: 'Worked on database queries and system design.',
      enhanced: 'Designed PostgreSQL relational schemas and B-tree indexes, reducing p99 query latency by 45% across production datasets.',
      impact: '+18% Quantified Achievement Impact',
    },
  ];

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Badge variant="violet" size="sm" icon={<FileText className="w-3.5 h-3.5 text-indigo-600" />}>
                ATS Keyword & Bullet Optimizer
              </Badge>
              <DataSourceBadge isLive={true} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-outfit mt-1">
              Resume AI Workspace & ATS Scanner
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Scan, score, and rewrite bullet points tailored specifically to top tier hiring manager keywords.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="secondary" size="sm" leftIcon={<Upload className="w-3.5 h-3.5" />}>
              Upload PDF
            </Button>
            <Button variant="primary" size="sm" leftIcon={<Download className="w-3.5 h-3.5" />}>
              Export Resume PDF
            </Button>
          </div>
        </div>

        {/* Layout: Left Controls, Right Paper Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Controls & Bullet Enhancer (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* ATS Score Overview Card */}
            <Card variant="elevated" className="p-6 bg-white border-slate-200 shadow-xs flex items-center justify-between">
              <div className="space-y-2">
                <Badge variant="violet" size="sm">ATS Verification Verdict</Badge>
                <h3 className="text-lg font-bold text-slate-900 font-outfit">
                  High Candidate Match Score
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
                  Your resume matches 91% of core requirements for Senior AI & Backend Engineering positions.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 shrink-0">
                <CircularGauge score={atsScore} size={110} label="ATS Score" showPercent={false} />
              </div>
            </Card>

            {/* AI Bullet Enhancer Box */}
            <Card variant="elevated" className="p-6 bg-white border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 font-outfit">
                  AI High-Impact Bullet Rewriter
                </h3>
                <Badge variant="cyan" size="sm">Quantified Impact</Badge>
              </div>

              <div className="space-y-4 text-xs">
                {bulletPoints.map((bp, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase">
                      <span>Original Draft</span>
                      <span className="text-emerald-600">{bp.impact}</span>
                    </div>
                    <p className="text-slate-500 line-through">{bp.original}</p>

                    <div className="pt-2 border-t border-slate-200">
                      <span className="text-[10px] text-indigo-600 font-bold uppercase block mb-1">
                        ✦ Futuro AI Enhanced Bullet
                      </span>
                      <p className="text-slate-900 font-semibold leading-relaxed">{bp.enhanced}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Document Preview Paper (5 Cols) */}
          <div className="lg:col-span-5">
            <Card variant="elevated" className="p-8 bg-white border-slate-300 shadow-md space-y-6 text-slate-900 text-xs min-h-[520px]">
              {/* Paper Header */}
              <div className="border-b border-slate-200 pb-4 text-center space-y-1">
                <h2 className="text-xl font-bold font-outfit text-slate-900">{user?.name?.toUpperCase() || 'ALEX SMITH'}</h2>
                <p className="text-[11px] text-slate-600">{user?.email || 'user@example.com'} &bull; github.com/user &bull; {user?.location || 'Mumbai, India'}</p>
                <p className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider pt-1">
                  Full Stack AI & Systems Engineer
                </p>
              </div>

              {/* Summary */}
              <div className="space-y-1">
                <h4 className="font-bold uppercase tracking-wider text-[10px] text-slate-400 border-b border-slate-200 pb-0.5">
                  Professional Summary
                </h4>
                <p className="text-slate-700 leading-relaxed text-[11px]">
                  High-leverage AI Engineer proficient in Python, FastAPI, React, SQL, and Vector Search retrieval architectures. Experienced in building multi-agent AI systems and low-latency microservices.
                </p>
              </div>

              {/* Technical Skills */}
              <div className="space-y-1">
                <h4 className="font-bold uppercase tracking-wider text-[10px] text-slate-400 border-b border-slate-200 pb-0.5">
                  Technical Skills
                </h4>
                <p className="text-slate-700 leading-relaxed text-[11px]">
                  <strong>Languages & Frameworks:</strong> Python, TypeScript, React, Next.js, FastAPI, Node.js<br />
                  <strong>Databases & AI:</strong> PostgreSQL, pgvector, Redis, PyTorch, RAG Architecture
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
