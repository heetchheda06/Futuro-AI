'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '../../components/shell/AppShell';
import { useAuth } from '../../context/AuthContext';
import {
  GraduationCap,
  Sparkles,
  Search,
  ExternalLink,
  Award,
  Clock,
  Star,
  CheckCircle2,
  Filter,
  Plus,
  Tag
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

export default function CoursesPage() {
  const { user } = useAuth();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProvider, setSelectedProvider] = useState('All');

  const categories = ['All', 'Technology & AI', 'Data & Analytics', 'Design & UI/UX', 'Business & Leadership', 'Cybersecurity', 'Engineering', 'Marketing'];
  const providers = ['All', 'Coursera', 'DeepLearning.AI', 'edX', 'NPTEL', 'YouTube', 'Fast.ai', 'Google', 'Harvard CS50'];

  const courses = [
    {
      id: 'c-1',
      title: 'Machine Learning Specialization',
      provider: 'Coursera',
      category: 'Technology & AI',
      match: 96,
      why: 'Directly closes your Python and Supervised ML skill gap.',
      duration: '3 Months (4 hrs/wk)',
      level: 'Intermediate',
      price: 'Free Audit / Paid Cert',
      rating: 4.9,
      url: 'https://coursera.org',
      certificate: true,
    },
    {
      id: 'c-2',
      title: 'Production LLM Application Architecture',
      provider: 'DeepLearning.AI',
      category: 'Technology & AI',
      match: 94,
      why: 'Taught by top AI researchers addressing streaming vector search latency.',
      duration: '4 Weeks',
      level: 'Advanced',
      price: 'Free',
      rating: 4.8,
      url: 'https://deeplearning.ai',
      certificate: true,
    },
    {
      id: 'c-3',
      title: 'CS50x: Introduction to Computer Science',
      provider: 'Harvard CS50',
      category: 'Technology & AI',
      match: 95,
      why: 'Gold standard foundational computer science algorithms & systems course.',
      duration: '10 Weeks',
      level: 'Beginner',
      price: 'Free',
      rating: 5.0,
      url: 'https://cs50.harvard.edu',
      certificate: true,
    },
    {
      id: 'c-4',
      title: 'Practical Deep Learning for Coders',
      provider: 'Fast.ai',
      category: 'Technology & AI',
      match: 93,
      why: 'Hands-on code-first neural net training and model deployment.',
      duration: '7 Weeks',
      level: 'Intermediate',
      price: 'Free',
      rating: 4.9,
      url: 'https://fast.ai',
      certificate: false,
    },
    {
      id: 'c-5',
      title: 'Google UX Design Professional Certificate',
      provider: 'Google',
      category: 'Design & UI/UX',
      match: 90,
      why: 'Comprehensive UX research, wireframing, and Figma design system labs.',
      duration: '6 Months',
      level: 'Beginner',
      price: 'Paid Cert',
      rating: 4.8,
      url: 'https://coursera.org/google-ux',
      certificate: true,
    },
    {
      id: 'c-6',
      title: 'Advanced SQL & Relational Indexing',
      provider: 'NPTEL',
      category: 'Data & Analytics',
      match: 88,
      why: 'Closes query optimization and indexing gaps for backend engineers.',
      duration: '8 Weeks',
      level: 'Intermediate',
      price: 'Free',
      rating: 4.7,
      url: 'https://nptel.ac.in',
      certificate: true,
    },
    {
      id: 'c-7',
      title: 'Cybersecurity Fundamentals & Threat Hunting',
      provider: 'edX',
      category: 'Cybersecurity',
      match: 87,
      why: 'Covers penetration testing, network packet inspection, and SIEM tooling.',
      duration: '6 Weeks',
      level: 'Beginner',
      price: 'Free Audit',
      rating: 4.7,
      url: 'https://edx.org',
      certificate: true,
    },
    {
      id: 'c-8',
      title: 'Technology Entrepreneurship & GTM Strategy',
      provider: 'Coursera',
      category: 'Business & Leadership',
      match: 85,
      why: 'Learn product-market fit, VC pitching, and SaaS unit economics.',
      duration: '4 Weeks',
      level: 'Intermediate',
      price: 'Free Audit',
      rating: 4.8,
      url: 'https://coursera.org',
      certificate: true,
    }
  ];

  const filtered = courses.filter((c) => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) || c.why.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesProvider = selectedProvider === 'All' || c.provider === selectedProvider;
    return matchesSearch && matchesCategory && matchesProvider;
  });

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Badge variant="violet" size="sm" icon={<GraduationCap className="w-3.5 h-3.5 text-indigo-600" />}>
                Multi-Disciplinary Course Ecosystem
              </Badge>
              <Badge variant="emerald" size="sm">{courses.length} Curated Courses</Badge>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-outfit mt-1">
              Course & Learning Benchmark Ecosystem
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Discover top-rated free and certified courses tailored to bridge your exact skill gaps.
            </p>
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <Card variant="elevated" className="p-4 bg-white border-slate-200 shadow-2xs space-y-3 rounded-3xl">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses by topic, skill gap, or title..."
              className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-900 focus:outline-none focus:border-indigo-500 font-medium"
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Card>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <Card key={course.id} variant="interactive" className="p-6 space-y-4 flex flex-col justify-between bg-white border-slate-200 rounded-3xl shadow-xs">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="violet" size="sm">{course.provider}</Badge>
                  <span className="text-xs font-extrabold text-indigo-600 font-outfit">{course.match}% Futuro Match</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 font-outfit leading-snug">{course.title}</h3>
                
                <p className="text-xs text-slate-600 leading-relaxed bg-indigo-50/50 p-2.5 rounded-xl border border-indigo-100">
                  <strong className="text-indigo-900 font-bold block mb-0.5">Why recommended:</strong>
                  {course.why}
                </p>

                <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500 pt-1">
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 font-semibold text-slate-700">{course.price}</span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{course.duration}</span>
                  </span>
                  <span className="flex items-center space-x-1 text-amber-600 font-bold ml-auto">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>{course.rating}</span>
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex gap-2">
                <a href={course.url} target="_blank" rel="noreferrer" className="flex-1">
                  <Button variant="secondary" size="sm" className="w-full" rightIcon={<ExternalLink className="w-3 h-3" />}>
                    View Course
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
