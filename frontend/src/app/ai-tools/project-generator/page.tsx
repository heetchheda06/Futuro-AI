'use client';

import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wrench, Sparkles, Code2, Server, Database, Bot, 
  Cloud, ArrowRight, CheckCircle2, Copy, Download, 
  ExternalLink, Layers, Terminal, BookOpen, Clock, 
  Flame, RefreshCw
} from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export default function AIProjectGeneratorPage() {
  const { user } = useAuth();

  // Form State
  const [careerGoal, setCareerGoal] = useState(user?.targetCareer || 'AI Engineer');
  const [skillLevel, setSkillLevel] = useState<'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'>('Intermediate');
  const [complexity, setComplexity] = useState<'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'>('Intermediate');
  const [domain, setDomain] = useState('Full Stack AI Applications');
  const [timeWeeks, setTimeWeeks] = useState(4);
  const [currentSkills, setCurrentSkills] = useState(user?.currentSkills?.join(', ') || 'React, Python, TypeScript, SQL');
  const [preferredTech, setPreferredTech] = useState('Next.js, FastAPI, PostgreSQL, Gemini API');

  // Generator State
  const [generating, setGenerating] = useState(false);
  const [blueprint, setBlueprint] = useState<any>(null);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'steps' | 'architecture' | 'stack'>('overview');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setGenerating(true);

    try {
      const res = await fetch(`${API_BASE_URL}/projects/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          careerGoal,
          currentSkills: currentSkills.split(',').map(s => s.trim()).filter(Boolean),
          skillLevel,
          complexity,
          projectDomain: domain,
          timeAvailableWeeks: timeWeeks,
          preferredTechnologies: preferredTech.split(',').map(s => s.trim()).filter(Boolean)
        })
      });

      if (res.ok) {
        const data = await res.json();
        setBlueprint(data.blueprint);
        setActiveTab('overview');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setGenerating(false);
    }
  };

  const handleCopyMarkdown = () => {
    if (!blueprint) return;
    const md = `# ${blueprint.title}

## Problem Statement
${blueprint.problemStatement}

## Why This Project
${blueprint.whyThisProject}

## Recommended Tech Stack
- **Frontend**: ${blueprint.recommendedStack?.frontend?.join(', ')}
- **Backend**: ${blueprint.recommendedStack?.backend?.join(', ')}
- **Database**: ${blueprint.recommendedStack?.database?.join(', ')}
- **AI/ML**: ${blueprint.recommendedStack?.ai?.join(', ')}
- **Deployment**: ${blueprint.recommendedStack?.deployment?.join(', ')}

## Architecture Overview
${blueprint.architectureOverview}

## Implementation Steps
${blueprint.implementationSteps?.map((s: any) => `### Step ${s.step}: ${s.title}\n${s.description}\nKey Tasks:\n${s.keyTasks?.map((k: string) => `- [ ] ${k}`).join('\n')}`).join('\n\n')}

## Skills You'll Learn
${blueprint.skillsLearned?.map((sk: string) => `- ${sk}`).join('\n')}
`;

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-purple-50 text-[#635BFF] text-xs font-semibold mb-2 border border-purple-100">
              <Wrench className="h-3.5 w-3.5" />
              <span>Context-Aware AI Portfolio Blueprint Generator</span>
            </div>
            <h1 className="font-outfit text-3xl font-extrabold text-slate-900 tracking-tight">
              AI Project <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">Generator</span>
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Generate production-grade portfolio project blueprints with curated tech stacks, step-by-step implementation tasks, and architectural blueprints aligned with your career goal.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 sticky top-24">
              <div className="flex items-center space-x-2 pb-3 border-b border-slate-100">
                <Sparkles className="h-4 w-4 text-[#635BFF]" />
                <h3 className="font-outfit text-sm font-bold text-slate-900">Project Parameters</h3>
              </div>

              <form onSubmit={handleGenerate} className="space-y-3.5">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700">Target Career Track:</label>
                  <input
                    type="text"
                    required
                    value={careerGoal}
                    onChange={(e) => setCareerGoal(e.target.value)}
                    placeholder="e.g. AI Engineer, Full Stack Developer..."
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#635BFF] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700">Your Current Skills:</label>
                  <input
                    type="text"
                    value={currentSkills}
                    onChange={(e) => setCurrentSkills(e.target.value)}
                    placeholder="e.g. React, Python, PostgreSQL..."
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#635BFF] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700">Complexity:</label>
                    <select
                      value={complexity}
                      onChange={(e) => setComplexity(e.target.value as any)}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none"
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                      <option value="Expert">Expert</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700">Timeline (Weeks):</label>
                    <select
                      value={timeWeeks}
                      onChange={(e) => setTimeWeeks(parseInt(e.target.value, 10))}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none"
                    >
                      <option value="2">2 Weeks (Sprint)</option>
                      <option value="4">4 Weeks (Standard)</option>
                      <option value="8">8 Weeks (Comprehensive)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700">Preferred Tech Stack / Tools:</label>
                  <input
                    type="text"
                    value={preferredTech}
                    onChange={(e) => setPreferredTech(e.target.value)}
                    placeholder="e.g. Next.js, FastAPI, Docker, PyTorch..."
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#635BFF] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={generating}
                  className="w-full py-3 px-4 bg-[#635BFF] hover:bg-[#5146E5] text-white text-xs font-bold rounded-xl shadow-md shadow-indigo-500/20 transition-all flex items-center justify-center space-x-1.5 disabled:opacity-50 cursor-pointer"
                >
                  {generating ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      <span>Synthesizing Architecture...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      <span>Generate Project Blueprint</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Blueprint Viewer */}
          <div className="lg:col-span-2 space-y-6">
            {blueprint ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6"
              >
                {/* Top Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-[#635BFF] text-xs font-bold border border-purple-100">
                        {blueprint.difficulty} Difficulty
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold border border-cyan-100">
                        {blueprint.estimatedTime}
                      </span>
                    </div>
                    <h2 className="font-outfit text-2xl font-extrabold text-slate-900 leading-tight">
                      {blueprint.title}
                    </h2>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={handleCopyMarkdown}
                      className="px-3.5 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all flex items-center space-x-1.5 shadow-2xs"
                    >
                      <Copy className="h-3.5 w-3.5" />
                      <span>{copied ? 'Copied Markdown!' : 'Copy README'}</span>
                    </button>
                  </div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex gap-1.5 border-b border-slate-100 pb-2">
                  {[
                    { id: 'overview', label: 'Overview & Problem' },
                    { id: 'stack', label: 'Recommended Stack' },
                    { id: 'architecture', label: 'Architecture' },
                    { id: 'steps', label: 'Step-by-Step Implementation' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        activeTab === tab.id
                          ? 'bg-[#635BFF] text-white shadow-xs'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab 1: Overview */}
                {activeTab === 'overview' && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-outfit text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Problem Statement
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                        {blueprint.problemStatement}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-outfit text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Why This Project Stands Out
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed bg-purple-50/50 p-3.5 rounded-xl border border-purple-100">
                        {blueprint.whyThisProject}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-outfit text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Key Skills You Will Master
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {blueprint.skillsLearned?.map((skill: string, i: number) => (
                          <div key={i} className="flex items-center space-x-2 text-xs text-slate-700 p-2 bg-slate-50 rounded-lg border border-slate-100">
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Tech Stack */}
                {activeTab === 'stack' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                      <div className="flex items-center space-x-2 text-[#635BFF] font-bold text-xs">
                        <Code2 className="h-4 w-4" />
                        <span>Frontend</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {blueprint.recommendedStack?.frontend?.map((tech: string, i: number) => (
                          <span key={i} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                      <div className="flex items-center space-x-2 text-cyan-600 font-bold text-xs">
                        <Server className="h-4 w-4" />
                        <span>Backend</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {blueprint.recommendedStack?.backend?.map((tech: string, i: number) => (
                          <span key={i} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                      <div className="flex items-center space-x-2 text-amber-600 font-bold text-xs">
                        <Database className="h-4 w-4" />
                        <span>Database & Cache</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {blueprint.recommendedStack?.database?.map((tech: string, i: number) => (
                          <span key={i} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                      <div className="flex items-center space-x-2 text-emerald-600 font-bold text-xs">
                        <Cloud className="h-4 w-4" />
                        <span>Cloud & Deployment</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {blueprint.recommendedStack?.deployment?.map((tech: string, i: number) => (
                          <span key={i} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Architecture */}
                {activeTab === 'architecture' && (
                  <div className="space-y-4">
                    <h4 className="font-outfit text-xs font-bold uppercase tracking-wider text-slate-400">
                      System Topology & Data Flow
                    </h4>
                    <div className="p-5 bg-slate-900 text-cyan-300 font-mono text-xs rounded-2xl border border-slate-800 leading-relaxed shadow-inner overflow-x-auto">
                      {blueprint.architectureOverview}
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                      <h5 className="text-xs font-bold text-slate-800">Key Architectural Safeguards</h5>
                      <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                        <li>Connection pooling and async non-blocking I/O for high concurrency.</li>
                        <li>Token bucket rate limiting to protect external AI/LLM API budgets.</li>
                        <li>Decoupled client state with optimistic updates for fluid UX.</li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Tab 4: Step-by-Step Implementation */}
                {activeTab === 'steps' && (
                  <div className="space-y-4">
                    {blueprint.implementationSteps?.map((step: any) => (
                      <div key={step.step} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="w-6 h-6 rounded-full bg-[#635BFF] text-white text-xs font-bold flex items-center justify-center">
                            {step.step}
                          </span>
                          <h4 className="font-outfit text-sm font-bold text-slate-900">{step.title}</h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed pl-8">
                          {step.description}
                        </p>
                        <div className="pl-8 pt-1 space-y-1">
                          {step.keyTasks?.map((task: string, tIndex: number) => (
                            <div key={tIndex} className="flex items-center space-x-2 text-xs text-slate-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                              <span>{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ) : (
              <div className="bg-white p-12 rounded-3xl border border-slate-200 shadow-sm text-center py-24 space-y-3">
                <div className="p-4 bg-purple-50 text-[#635BFF] rounded-2xl w-16 h-16 mx-auto flex items-center justify-center">
                  <Wrench className="h-8 w-8" />
                </div>
                <h3 className="font-outfit text-lg font-bold text-slate-900">No Blueprint Generated Yet</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                  Configure your target career, complexity level, and tech stack preferences on the left, then click <strong>Generate Project Blueprint</strong>.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
