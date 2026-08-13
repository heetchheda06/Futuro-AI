'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '../../components/shell/AppShell';
import {
  Sparkles,
  Zap,
  MessageSquare,
  FileText,
  GraduationCap,
  Layers,
  ArrowRight,
  Bot,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { DataSourceBadge } from '../../components/ui/DataSourceBadge';

export default function AICareerHubPage() {
  const [activeTab, setActiveTab] = useState<'interview' | 'resume' | 'tutor' | 'project'>('interview');

  const tools = [
    {
      id: 'interview',
      title: 'AI Mock Interviewer Cockpit',
      badge: 'Voice & STAR Metrics',
      desc: 'Simulate high-stakes technical & behavioral interviews with real-time feedback and downloadable PDF reports.',
      href: '/ai-interviewer',
      icon: MessageSquare,
      accent: 'violet',
    },
    {
      id: 'resume',
      title: 'Resume AI Workspace',
      badge: 'ATS Scanner & Rewriter',
      desc: 'In-memory ATS keyword optimization, score circular gauge, and high-impact bullet rewriting.',
      href: '/resume',
      icon: FileText,
      accent: 'cyan',
    },
    {
      id: 'tutor',
      title: 'Futuro AI Tutor & Code Lab',
      badge: 'Interactive Learning',
      desc: 'Step-by-step technical problem solver, code execution sandbox, and adaptive concept quizzes.',
      href: '/learning-helper',
      icon: GraduationCap,
      accent: 'emerald',
    },
    {
      id: 'project',
      title: 'AI Project Generator Engine',
      badge: 'Architecture Blueprints',
      desc: 'Generate complete end-to-end portfolio project blueprints tailored to your specific skill gaps.',
      href: '/ai-tools/project-generator',
      icon: Layers,
      accent: 'amber',
    },
  ];

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Badge variant="violet" size="sm" icon={<Zap className="w-3.5 h-3.5 text-indigo-600" />}>
                Central Intelligence Core
              </Badge>
              <DataSourceBadge isLive={true} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-outfit mt-1">
              Futuro AI Career Hub
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Access your complete suite of specialized AI career tools in one connected intelligence hub.
            </p>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Card key={tool.id} variant="interactive" className="p-6 space-y-4 flex flex-col justify-between bg-white border-slate-200">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <Badge variant={tool.accent as any} size="sm">{tool.badge}</Badge>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-outfit">{tool.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{tool.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex justify-end">
                  <Link href={tool.href}>
                    <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                      Launch Tool
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
