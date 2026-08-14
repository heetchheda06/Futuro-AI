'use client';

import React, { useState, useMemo } from 'react';
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
  Tag,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Layers,
  TrendingUp,
  X,
  Users,
  ShieldCheck
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { COURSES_DATA, CourseData } from '../../data/coursesData';

const ITEMS_PER_PAGE = 18;

export default function CoursesPage() {
  const { user } = useAuth();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProvider, setSelectedProvider] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [sortBy, setSortBy] = useState('match-desc');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    'All',
    'AI & Machine Learning',
    'Web & Mobile Dev',
    'Data Science & Analytics',
    'Cloud & DevOps',
    'Cybersecurity',
    'UI/UX & Design',
    'Business & Product',
    'Software Engineering',
  ];

  const providers = [
    'All',
    'Udemy',
    'Coursera',
    'NPTEL',
    'Skillshare',
    'LinkedIn Learning',
    'edX',
    'Pluralsight',
    'Udacity',
    'DeepLearning.AI',
    'Google',
    'Harvard CS50',
    'Codecademy',
  ];

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  // Filter & Sort logic
  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((c) => {
      const matchesSearch =
        search === '' ||
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.why.toLowerCase().includes(search.toLowerCase()) ||
        c.provider.toLowerCase().includes(search.toLowerCase()) ||
        c.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
      const matchesProvider = selectedProvider === 'All' || c.provider === selectedProvider;
      const matchesLevel = selectedLevel === 'All' || c.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesProvider && matchesLevel;
    }).sort((a, b) => {
      if (sortBy === 'match-desc') return b.match - a.match;
      if (sortBy === 'rating-desc') return b.rating - a.rating;
      if (sortBy === 'title-asc') return a.title.localeCompare(b.title);
      return 0;
    });
  }, [search, selectedCategory, selectedProvider, selectedLevel, sortBy]);

  // Pagination logic
  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);
  const paginatedCourses = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCourses.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredCourses, currentPage]);

  const handleSearchChange = (val: string) => {
    setSearch(val);
    setCurrentPage(1);
  };

  const handleCategoryChange = (val: string) => {
    setSelectedCategory(val);
    setCurrentPage(1);
  };

  const handleProviderChange = (val: string) => {
    setSelectedProvider(val);
    setCurrentPage(1);
  };

  const handleLevelChange = (val: string) => {
    setSelectedLevel(val);
    setCurrentPage(1);
  };

  // Provider badge style helper
  const getProviderBadgeVariant = (provider: string) => {
    switch (provider) {
      case 'Udemy':
        return 'rose';
      case 'Coursera':
        return 'violet';
      case 'NPTEL':
        return 'emerald';
      case 'Skillshare':
        return 'cyan';
      case 'LinkedIn Learning':
        return 'violet';
      case 'edX':
        return 'amber';
      case 'DeepLearning.AI':
        return 'cyan';
      case 'Google':
        return 'emerald';
      default:
        return 'neutral';
    }
  };

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        {/* Header Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Badge variant="violet" size="sm" icon={<GraduationCap className="w-3.5 h-3.5 text-indigo-400" />}>
                Multi-Platform Learning Hub ({COURSES_DATA.length} Courses)
              </Badge>
              <Badge variant="emerald" size="sm">
                12 Top Learning Platforms
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-outfit text-white">
              Course Marketplace & Skill Benchmark Engine
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Curated, high-impact courses from **Udemy, Coursera, NPTEL, Skillshare, LinkedIn Learning, edX, Pluralsight**, and **Harvard CS50** designed to close your target skill gaps.
            </p>
          </div>

          {/* Platform Highlights Stats */}
          <div className="grid grid-cols-3 gap-3 text-center sm:text-left min-w-[280px]">
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-indigo-300 font-bold block">Total Courses</span>
              <span className="text-xl sm:text-2xl font-black text-white font-outfit">{COURSES_DATA.length}</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-indigo-300 font-bold block">Platforms</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400 font-outfit">12</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-indigo-300 font-bold block">Certified</span>
              <span className="text-xl sm:text-2xl font-black text-amber-400 font-outfit">48+</span>
            </div>
          </div>
        </div>

        {/* Filter Controls & Search Toolbar */}
        <Card variant="default" className="p-4 sm:p-6 space-y-4 bg-white border-slate-200 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Search Input */}
            <div className="relative col-span-1 lg:col-span-2">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search by topic, provider, skill, or keyword (e.g. Next.js, LangChain, NPTEL)..."
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800 font-medium"
              />
              {search && (
                <button
                  onClick={() => handleSearchChange('')}
                  className="absolute right-2.5 top-3 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Level Filter */}
            <div className="relative">
              <Layers className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              <select
                value={selectedLevel}
                onChange={(e) => handleLevelChange(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800 font-medium appearance-none cursor-pointer"
              >
                {levels.map((lvl) => (
                  <option key={lvl} value={lvl}>
                    {lvl === 'All' ? 'All Skill Levels' : lvl}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <TrendingUp className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800 font-medium appearance-none cursor-pointer"
              >
                <option value="match-desc">Sort by Futuro AI Match</option>
                <option value="rating-desc">Sort by Highest Rating</option>
                <option value="title-asc">Sort by Title (A-Z)</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Categories:
            </span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
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
          </div>

          {/* Provider Filter Pills */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                Learning Platform:
              </span>
              <span className="text-xs text-slate-500 font-semibold">
                Showing <span className="text-indigo-600 font-extrabold">{filteredCourses.length}</span> of {COURSES_DATA.length} courses
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 overflow-x-auto py-1">
              {providers.map((p) => (
                <button
                  key={p}
                  onClick={() => handleProviderChange(p)}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                    selectedProvider === p
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </Card>

        {/* Empty Search Result */}
        {filteredCourses.length === 0 && (
          <Card variant="default" className="p-12 text-center space-y-3 bg-white border-slate-200">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-outfit">No Courses Found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              No learning programs matched your current search filters. Try clearing search query or selecting a different platform/category.
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setSearch('');
                setSelectedCategory('All');
                setSelectedProvider('All');
                setSelectedLevel('All');
              }}
            >
              Reset All Filters
            </Button>
          </Card>
        )}

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedCourses.map((course) => (
            <Card
              key={course.id}
              variant="interactive"
              className="p-6 space-y-4 flex flex-col justify-between bg-white border-slate-200 rounded-3xl shadow-xs hover:border-indigo-300 hover:shadow-md transition-all"
            >
              <div className="space-y-3">
                {/* Provider & Match */}
                <div className="flex items-center justify-between gap-2">
                  <Badge variant={getProviderBadgeVariant(course.provider)} size="sm">
                    {course.provider}
                  </Badge>
                  <span className="text-xs font-black text-indigo-600 font-outfit bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                    {course.match}% Match
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="text-base font-bold text-slate-900 font-outfit leading-snug">
                  {course.title}
                </h3>

                {/* Why Recommended Callout */}
                <div className="text-xs text-slate-700 leading-relaxed bg-slate-50/80 p-3 rounded-2xl border border-slate-200/80 space-y-1">
                  <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider block">
                    Why Recommended
                  </span>
                  <p className="text-slate-600 font-medium">{course.why}</p>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-slate-100 text-slate-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Course Metadata Row */}
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-indigo-600" />
                    <span className="font-semibold text-slate-700">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1 justify-end text-amber-600 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>{course.rating.toFixed(1)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="font-semibold text-slate-700">{course.level}</span>
                  </div>
                  <div className="flex items-center space-x-1 justify-end">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-slate-500 font-medium truncate">{course.studentsCount}</span>
                  </div>
                </div>
              </div>

              {/* Price & Enroll Footer Button */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[9px] text-slate-400 uppercase font-bold block">Pricing</span>
                  <span className="text-xs font-extrabold text-slate-900">{course.price}</span>
                </div>

                <a href={course.url} target="_blank" rel="noreferrer" className="shrink-0">
                  <Button
                    variant="primary"
                    size="sm"
                    className="font-bold text-xs bg-indigo-600 hover:bg-indigo-500"
                    rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                  >
                    Enroll Now
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 border-t border-slate-200">
            <div className="text-xs text-slate-500 font-semibold">
              Page <span className="font-bold text-slate-900">{currentPage}</span> of{' '}
              <span className="font-bold text-slate-900">{totalPages}</span> ({filteredCourses.length} total learning programs)
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="secondary"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => {
                  setCurrentPage((p) => Math.max(1, p - 1));
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
              >
                <ChevronLeft className="w-4 h-4 mr-1" /> Previous
              </Button>

              <div className="flex items-center space-x-1 px-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pNum) => (
                  <button
                    key={pNum}
                    onClick={() => {
                      setCurrentPage(pNum);
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    className={`w-8 h-8 rounded-xl text-xs font-bold transition-all ${
                      currentPage === pNum
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {pNum}
                  </button>
                ))}
              </div>

              <Button
                variant="secondary"
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() => {
                  setCurrentPage((p) => Math.min(totalPages, p + 1));
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
              >
                Next <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
