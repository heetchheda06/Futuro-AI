'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '../../../components/shell/AppShell';
import {
  Layers,
  Sparkles,
  Zap,
  ArrowRight,
  CheckCircle2,
  Code,
  BookOpen,
  Plus,
  RefreshCw,
  Cpu,
  Bot
} from 'lucide-react';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { DataSourceBadge } from '../../../components/ui/DataSourceBadge';

export default function ProjectGeneratorPage() {
  const [targetCareer, setTargetCareer] = useState('Full Stack AI Engineer');
  const [difficulty, setDifficulty] = useState('Advanced');
  const [preferredTech, setPreferredTech] = useState('Next.js 15, FastAPI, pgvector, Redis');
  const [loading, setLoading] = useState(false);

  const projectBlueprint = {
    title: 'Multi-Agent Autonomous Research & Synthesis Hub',
    problem: 'Researchers spend hours aggregating multi-source technical papers and indexing embeddings manually.',
    whyMatters: 'Demonstrates end-to-end multi-agent tool calling, streaming vector search, and rate-limited queueing.',
    difficulty: 'Advanced (Level 4)',
    stack: ['Next.js 15', 'FastAPI', 'pgvector', 'Redis Celery', 'Gemini 2.5 Flash'],
    requiredSkills: ['Vector Search (HNSW)', 'AsyncIO', 'Multi-Agent Orchestration', 'TailwindCSS'],
    features: [
      'Asynchronous web scraper agent with rate limiting',
      'pgvector 1536-dim embedding indexing pipeline',
      'Real-time WebSocket streaming synthesis dashboard',
    ],
    architecture: 'Next.js 15 App Router Frontend <-> FastAPI Gateway <-> Redis Task Queue <-> pgvector Index',
    roadmapSteps: [
      'Phase 1: Setup FastAPI async endpoints & pgvector extension',
      'Phase 2: Build multi-agent web scraper & embedding indexer',
      'Phase 3: Connect WebSocket stream to Next.js HUD dashboard',
    ],
    expectedOutcomes: 'Top 5% portfolio signal demonstrating enterprise AI system architecture.',
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 600);
  };

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Badge variant="violet" size="sm" icon={<Layers className="w-3.5 h-3.5 text-indigo-600" />}>
                Portfolio Architecture Engine
              </Badge>
              <DataSourceBadge isLive={true} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-outfit mt-1">
              AI Project Generator
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Generate complete high-signal portfolio blueprints designed to close your specific skill gaps.
            </p>
          </div>
        </div>

        {/* Input Form Card */}
        <Card variant="elevated" className="p-6 bg-white border-slate-200 shadow-xs space-y-4">
          <form onSubmit={handleGenerate} className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Target Career Role</label>
              <input
                type="text"
                value={targetCareer}
                onChange={(e) => setTargetCareer(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-slate-900 focus:outline-none focus:border-indigo-500 font-medium"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Complexity Level</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-slate-900 focus:outline-none focus:border-indigo-500 font-medium"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Preferred Technologies</label>
              <input
                type="text"
                value={preferredTech}
                onChange={(e) => setPreferredTech(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-slate-900 focus:outline-none focus:border-indigo-500 font-medium"
              />
            </div>

            <div className="sm:col-span-3 flex justify-end">
              <Button variant="primary" size="md" type="submit" loading={loading} rightIcon={<Sparkles className="w-4 h-4" />}>
                Generate Project Blueprint
              </Button>
            </div>
          </form>
        </Card>

        {/* Generated Blueprint Spec Card */}
        <Card variant="elevated" className="p-6 sm:p-8 bg-white border-slate-200 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <Badge variant="violet" size="sm">{projectBlueprint.difficulty}</Badge>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-outfit mt-1">
                {projectBlueprint.title}
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button variant="secondary" size="sm" leftIcon={<RefreshCw className="w-3.5 h-3.5" />}>
                Make Advanced
              </Button>
              <Link href="/roadmap">
                <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Add To Roadmap
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="space-y-2">
              <strong className="text-slate-900 font-bold block uppercase text-[10px]">Problem Statement</strong>
              <p className="text-slate-600 leading-relaxed">{projectBlueprint.problem}</p>
            </div>

            <div className="space-y-2">
              <strong className="text-slate-900 font-bold block uppercase text-[10px]">Why It Matters</strong>
              <p className="text-slate-600 leading-relaxed">{projectBlueprint.whyMatters}</p>
            </div>
          </div>

          {/* Stack Chips */}
          <div className="pt-2">
            <strong className="text-slate-900 font-bold block uppercase text-[10px] mb-2">Recommended Tech Stack</strong>
            <div className="flex flex-wrap gap-2">
              {projectBlueprint.stack.map((stk, i) => (
                <span key={i} className="px-3 py-1 rounded-xl text-xs bg-indigo-50 text-indigo-700 border border-indigo-200 font-bold">
                  {stk}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
