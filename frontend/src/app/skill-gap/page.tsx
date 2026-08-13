'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '../../components/shell/AppShell';
import { useAuth } from '../../context/AuthContext';
import {
  Zap,
  Sparkles,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  Target,
  Layers,
  HelpCircle,
  BookOpen,
  Code
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { DataSourceBadge } from '../../components/ui/DataSourceBadge';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

export default function SkillGapPage() {
  const { user } = useAuth();
  const [targetRole, setTargetRole] = useState(user?.targetCareer || 'Full Stack AI Engineer');

  // Defined required skills for target career roles
  const careerSkillRequirements: Record<string, { required: string[]; recommendedCourses: string[]; recommendedProjects: string[] }> = {
    'Full Stack AI Engineer': {
      required: ['Python', 'React / Next.js', 'FastAPI', 'Vector Search (HNSW)', 'SQL & PostgreSQL', 'System Design'],
      recommendedCourses: ['Production LLM Architecture', 'Full Stack Next.js & FastAPI Mastery'],
      recommendedProjects: ['RAG Search Assistant', 'Multi-Agent Autonomous Hub']
    },
    'AI / ML Engineer': {
      required: ['Python', 'PyTorch', 'Machine Learning', 'Deep Learning', 'Transformers', 'MLOps'],
      recommendedCourses: ['Deep Learning Specialization', 'Practical MLOps on Cloud'],
      recommendedProjects: ['Custom Transformer Fine-tuning', 'Real-time Object Detector API']
    },
    'Data Scientist': {
      required: ['Python', 'SQL', 'Pandas & NumPy', 'Statistics', 'Scikit-Learn', 'Data Visualization'],
      recommendedCourses: ['Applied Data Science with Python', 'Advanced SQL & Data Analytics'],
      recommendedProjects: ['Customer Churn Prediction Dashboard', 'Financial Market Risk Model']
    },
    'UI/UX Designer': {
      required: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Usability Testing'],
      recommendedCourses: ['Google UX Design Professional Certificate', 'Advanced Figma Design Systems'],
      recommendedProjects: ['FinTech Mobile App Redesign', 'Design System Library & Tokens']
    }
  };

  const selectedCareerInfo = careerSkillRequirements[targetRole] || careerSkillRequirements['Full Stack AI Engineer'];
  const userOwnedSkills = (user?.currentSkills || []).map(s => s.toLowerCase());

  // Compare owned vs required
  const ownedList: string[] = [];
  const missingList: string[] = [];

  selectedCareerInfo.required.forEach(req => {
    const isOwned = userOwnedSkills.some(u => u.includes(req.toLowerCase()) || req.toLowerCase().includes(u));
    if (isOwned) {
      ownedList.push(req);
    } else {
      missingList.push(req);
    }
  });

  const skillCoveragePercent = Math.round((ownedList.length / selectedCareerInfo.required.length) * 100);

  // Radar Data calculation
  const radarData = selectedCareerInfo.required.map(req => {
    const isOwned = userOwnedSkills.some(u => u.includes(req.toLowerCase()) || req.toLowerCase().includes(u));
    return {
      subject: req.split(' ')[0],
      current: isOwned ? 85 : 30,
      target: 90
    };
  });

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Badge variant="violet" size="sm" icon={<Zap className="w-3.5 h-3.5 text-indigo-600" />}>
                Dynamic Skill Gap Matrix
              </Badge>
              <Badge variant="emerald" size="sm">
                {skillCoveragePercent}% Skill Coverage
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-outfit mt-1">
              Skill Gap Intelligence Matrix
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Compare your current verified skills against industry benchmarks for your target career path.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center space-x-3 text-xs">
            <span className="text-slate-500 font-semibold">TARGET ROLE:</span>
            <select
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              className="font-bold text-slate-900 font-outfit bg-transparent focus:outline-none cursor-pointer"
            >
              {Object.keys(careerSkillRequirements).map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
            <Badge variant="violet" size="sm">{skillCoveragePercent}% MATCH</Badge>
          </div>
        </div>

        {/* Radar Chart & Owned vs Missing Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Radar Overlay */}
          <Card variant="elevated" className="p-6 bg-white border-slate-200 shadow-xs space-y-4 rounded-3xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 font-outfit">Competency Radar Overlay</h3>
              <div className="flex items-center space-x-3 text-[10px]">
                <span className="flex items-center space-x-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                  <span className="text-slate-600">Your Skills</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-slate-600">Required Level</span>
                </span>
              </div>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#E2E8F0" />
                  <PolarAngleAxis dataKey="subject" stroke="#475569" fontSize={11} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#CBD5E1" fontSize={9} />
                  <Radar name="Your Skills" dataKey="current" stroke="#4F46E5" fill="#4F46E5" fillOpacity={0.25} />
                  <Radar name="Target Role" dataKey="target" stroke="#10B981" fill="#10B981" fillOpacity={0.15} />
                  <Tooltip contentStyle={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0', borderRadius: '12px', fontSize: '11px', color: '#0F172A' }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Owned vs Missing Breakdown */}
          <Card variant="elevated" className="p-6 bg-white border-slate-200 shadow-xs space-y-4 rounded-3xl">
            <h3 className="text-sm font-bold text-slate-900 font-outfit pb-3 border-b border-slate-200 flex items-center justify-between">
              <span>Required Skill Status</span>
              <span className="text-xs text-slate-500 font-normal">{ownedList.length} of {selectedCareerInfo.required.length} Acquired</span>
            </h3>

            <div className="space-y-4 text-xs">
              {/* Owned Skills */}
              <div>
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-2 flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Owned Skills ({ownedList.length})</span>
                </span>
                {ownedList.length > 0 ? (
                  <div className="flex flex-wrap gap-1.5">
                    {ownedList.map((sk, i) => (
                      <span key={i} className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                        {sk}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-400 italic">No matching skills acquired yet. Complete tasks or add skills to profile!</p>
                )}
              </div>

              {/* Missing Skills */}
              <div>
                <span className="text-[10px] font-bold text-rose-700 uppercase tracking-wider block mb-2 flex items-center space-x-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                  <span>Skills To Develop ({missingList.length})</span>
                </span>
                {missingList.length > 0 ? (
                  <div className="flex flex-wrap gap-1.5">
                    {missingList.map((sk, i) => (
                      <span key={i} className="px-3 py-1 rounded-xl bg-rose-50 text-rose-800 border border-rose-200 font-bold">
                        {sk}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-emerald-600 font-bold">Awesome! You have acquired all required skills for this target career!</p>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* Explainability & Action Bridge */}
        <Card variant="glowing" className="p-6 bg-white border-indigo-100 shadow-sm rounded-3xl space-y-4">
          <div className="flex items-center space-x-2 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Futuro AI Skill Gap Diagnostics</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-2">
              <strong className="text-indigo-900 font-bold block uppercase tracking-wider text-[10px]">
                Recommended Bridge Courses
              </strong>
              <div className="space-y-1.5">
                {selectedCareerInfo.recommendedCourses.map((c, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-white border border-indigo-100 font-semibold text-slate-800">
                    <span>{c}</span>
                    <Link href="/courses" className="text-indigo-600 text-[11px] font-bold hover:underline">Enroll →</Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-2">
              <strong className="text-indigo-900 font-bold block uppercase tracking-wider text-[10px]">
                Recommended Portfolio Projects
              </strong>
              <div className="space-y-1.5">
                {selectedCareerInfo.recommendedProjects.map((p, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-white border border-indigo-100 font-semibold text-slate-800">
                    <span>{p}</span>
                    <Link href="/ai-tools/project-generator" className="text-indigo-600 text-[11px] font-bold hover:underline">Build →</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
