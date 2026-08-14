'use client';

import React, { useState, useMemo } from 'react';
import { AppShell } from '../../components/shell/AppShell';
import {
  Newspaper,
  Sparkles,
  Flame,
  ArrowRight,
  ExternalLink,
  Search,
  Clock,
  BookOpen,
  CheckCircle2,
  X,
  Layers,
  TrendingUp,
  Tag
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { NEWS_ARTICLES, NewsArticle } from '../../data/newsData';

export default function NewsPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalArticle, setActiveModalArticle] = useState<NewsArticle | null>(null);

  const categories = [
    'All',
    'AI & Engineering',
    'Cloud & Infrastructure',
    'Career Strategy',
    'Web Development',
    'Cybersecurity',
    'Big Data & Analytics',
    'UI/UX & Design',
    'Software Engineering',
    'Open Source',
  ];

  const filteredArticles = useMemo(() => {
    return NEWS_ARTICLES.filter((art) => {
      const matchesSearch =
        search === '' ||
        art.title.toLowerCase().includes(search.toLowerCase()) ||
        art.desc.toLowerCase().includes(search.toLowerCase()) ||
        art.category.toLowerCase().includes(search.toLowerCase()) ||
        art.keyTakeaways.some((k) => k.toLowerCase().includes(search.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const getCategoryBadgeVariant = (cat: string) => {
    switch (cat) {
      case 'AI & Engineering':
        return 'violet';
      case 'Cloud & Infrastructure':
        return 'cyan';
      case 'Career Strategy':
        return 'emerald';
      case 'Web Development':
        return 'rose';
      case 'Cybersecurity':
        return 'amber';
      case 'Big Data & Analytics':
        return 'cyan';
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
              <Badge variant="violet" size="sm" icon={<Newspaper className="w-3.5 h-3.5 text-indigo-400" />}>
                Futuro News Engine ({NEWS_ARTICLES.length} Digests)
              </Badge>
              <Badge variant="emerald" size="sm">
                Updated Daily
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-outfit text-white">
              Industry News, Trends & Engineering Insights
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Curated technical digests, architectural benchmarks, cybersecurity updates, and software engineering career trends.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3 text-center sm:text-left min-w-[280px]">
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-indigo-300 font-bold block">Articles</span>
              <span className="text-xl sm:text-2xl font-black text-white font-outfit">{NEWS_ARTICLES.length}</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-indigo-300 font-bold block">Categories</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400 font-outfit">8+</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-indigo-300 font-bold block">Sources</span>
              <span className="text-xl sm:text-2xl font-black text-amber-400 font-outfit">Verified</span>
            </div>
          </div>
        </div>

        {/* Filter Controls & Search Toolbar */}
        <Card variant="default" className="p-4 sm:p-6 space-y-4 bg-white border-slate-200 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search news by topic, keyword, category, or trend (e.g. Agentic AI, FastAPI, System Design)..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-8 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-medium"
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

            <div className="text-xs text-slate-500 font-semibold">
              Showing <span className="text-indigo-600 font-extrabold">{filteredArticles.length}</span> of {NEWS_ARTICLES.length} digests
            </div>
          </div>
        </Card>

        {/* Empty Search Result */}
        {filteredArticles.length === 0 && (
          <Card variant="default" className="p-12 text-center space-y-3 bg-white border-slate-200">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
              <Newspaper className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-outfit">No News Digests Found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              No technical digests matched your current search filters. Try clearing search query or selecting a different category.
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setSearch('');
                setSelectedCategory('All');
              }}
            >
              Reset Filters
            </Button>
          </Card>
        )}

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((item) => (
            <Card
              key={item.id}
              variant="interactive"
              className="p-6 flex flex-col justify-between bg-white border-slate-200 rounded-3xl shadow-xs hover:border-indigo-300 hover:shadow-md transition-all space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant={getCategoryBadgeVariant(item.category)} size="sm">
                    {item.category}
                  </Badge>
                  <div className="flex items-center space-x-2 text-[10px] text-slate-400 font-semibold">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{item.time}</span>
                    </span>
                    <span>&bull;</span>
                    <span>{item.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 font-outfit leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>

                {/* Key Takeaways Box */}
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 text-xs">
                  <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider block">
                    Key Highlights
                  </span>
                  <ul className="space-y-1 text-[11px] text-slate-700 font-medium">
                    {item.keyTakeaways.slice(0, 2).map((takeaway, tIdx) => (
                      <li key={tIdx} className="flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <span className="text-[10px] text-slate-400 font-bold truncate">
                  Source: {item.source}
                </span>

                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setActiveModalArticle(item)}
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="font-bold text-xs"
                >
                  Read Digest
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Detailed Article Modal */}
        {activeModalArticle && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in overflow-y-auto">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-2xl w-full my-8 space-y-6 shadow-2xl">
              {/* Header */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-200">
                <div className="space-y-1 pr-6">
                  <div className="flex items-center space-x-2">
                    <Badge variant={getCategoryBadgeVariant(activeModalArticle.category)} size="sm">
                      {activeModalArticle.category}
                    </Badge>
                    <span className="text-xs text-slate-400 font-semibold">&bull; {activeModalArticle.time}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-outfit leading-tight mt-2">
                    {activeModalArticle.title}
                  </h2>
                </div>
                <button
                  onClick={() => setActiveModalArticle(null)}
                  className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-1 text-indigo-700">
                    Full Technical Executive Summary
                  </h4>
                  <p className="bg-indigo-50/50 p-4 rounded-2xl border border-indigo-100 text-slate-800 font-medium">
                    {activeModalArticle.fullSummary}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-2 text-indigo-700">
                    Actionable Key Takeaways
                  </h4>
                  <div className="space-y-2">
                    {activeModalArticle.keyTakeaways.map((point, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-slate-800">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <span className="text-xs text-slate-500 font-medium">
                  Source: <strong className="text-slate-800">{activeModalArticle.source}</strong>
                </span>

                <div className="flex space-x-2">
                  <Button variant="secondary" size="sm" onClick={() => setActiveModalArticle(null)}>
                    Close
                  </Button>
                  <a href={activeModalArticle.sourceUrl} target="_blank" rel="noreferrer">
                    <Button
                      variant="primary"
                      size="sm"
                      className="bg-indigo-600 hover:bg-indigo-500 font-bold"
                      rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                    >
                      Visit Publisher
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
