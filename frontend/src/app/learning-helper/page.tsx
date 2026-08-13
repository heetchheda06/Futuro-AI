'use client';

import React, { useState } from 'react';
import { AppShell } from '../../components/shell/AppShell';
import {
  GraduationCap,
  Sparkles,
  Play,
  CheckCircle2,
  HelpCircle,
  Code,
  BookOpen,
  ArrowRight,
  RefreshCw,
  Send
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { DataSourceBadge } from '../../components/ui/DataSourceBadge';

export default function LearningHelperPage() {
  const [query, setQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const codeSnippet = `import pgvector
import numpy as np

# Compute cosine similarity between 1536-dim embeddings
def vector_cosine_similarity(vec_a, vec_b):
    dot_product = np.dot(vec_a, vec_b)
    norm_a = np.linalg.norm(vec_a)
    norm_b = np.linalg.norm(vec_b)
    return dot_product / (norm_a * norm_b)
`;

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Badge variant="emerald" size="sm" icon={<GraduationCap className="w-3.5 h-3.5 text-emerald-600" />}>
                Step-by-Step AI Educator
              </Badge>
              <DataSourceBadge isLive={true} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-outfit mt-1">
              Futuro AI Tutor & Interactive Code Lab
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Break down complex technical algorithms, run code simulations, and test your understanding.
            </p>
          </div>
        </div>

        {/* Layout: Code Sandbox & Quiz Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Code Sandbox (7 Cols) */}
          <Card variant="elevated" className="lg:col-span-7 p-6 bg-white border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4 text-indigo-600" />
                <h3 className="text-sm font-bold text-slate-900 font-outfit">
                  Interactive Python Sandbox: Vector Cosine Similarity
                </h3>
              </div>
              <Badge variant="violet" size="sm">Python 3.12</Badge>
            </div>

            <div className="rounded-xl bg-slate-900 text-slate-100 p-4 font-mono text-xs overflow-x-auto shadow-inner border border-slate-800">
              <pre>{codeSnippet}</pre>
            </div>

            <div className="flex justify-end pt-2">
              <Button variant="primary" size="sm" leftIcon={<Play className="w-3.5 h-3.5" />}>
                Execute Sandbox Code
              </Button>
            </div>
          </Card>

          {/* Adaptive Concept Quiz (5 Cols) */}
          <Card variant="elevated" className="lg:col-span-5 p-6 bg-white border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center space-x-2">
                <HelpCircle className="w-4 h-4 text-emerald-600" />
                <h3 className="text-sm font-bold text-slate-900 font-outfit">Concept Check Quiz</h3>
              </div>
              <Badge variant="emerald" size="sm">+15 XP</Badge>
            </div>

            <div className="space-y-3 text-xs">
              <p className="font-bold text-slate-900">
                Which indexing algorithm is best suited for low-latency nearest-neighbor search across 10M+ vector embeddings?
              </p>

              <div className="space-y-2">
                {[
                  { id: 1, text: 'HNSW (Hierarchical Navigable Small World)' },
                  { id: 2, text: 'Full Table Scan B-Tree' },
                  { id: 3, text: 'Unindexed Linear Search' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedOption(opt.id)}
                    className={`w-full text-left p-3 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                      selectedOption === opt.id
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {opt.text}
                  </button>
                ))}
              </div>

              {selectedOption === 1 && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold animate-in fade-in">
                  ✓ Correct! HNSW constructs multi-layer graph indexes for sub-millisecond retrieval.
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
