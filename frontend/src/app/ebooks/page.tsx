'use client';

import React, { useState, useMemo } from 'react';
import { AppShell } from '../../components/shell/AppShell';
import {
  BookOpen,
  Sparkles,
  Search,
  Bookmark,
  ExternalLink,
  Flame,
  CheckCircle2,
  BookmarkCheck,
  Star,
  FileText,
  Clock,
  Layers,
  X
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { EBOOKS_DATA, EbookData } from '../../data/ebooksData';

export default function EbooksPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'bookmarks'>('all');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(['b-1', 'b-3', 'b-7', 'b-10']);

  const categories = [
    'All',
    'Systems & Architecture',
    'AI & Machine Learning',
    'Data & SQL',
    'Design & UI/UX',
    'Business & Growth',
  ];

  const toggleBookmark = (id: string) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(bookmarkedIds.filter((bId) => bId !== id));
    } else {
      setBookmarkedIds([...bookmarkedIds, id]);
    }
  };

  const filteredBooks = useMemo(() => {
    return EBOOKS_DATA.filter((b) => {
      const matchesSearch =
        search === '' ||
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.author.toLowerCase().includes(search.toLowerCase()) ||
        b.desc.toLowerCase().includes(search.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || b.category === selectedCategory;
      const matchesTab = activeTab === 'all' || bookmarkedIds.includes(b.id);

      return matchesSearch && matchesCategory && matchesTab;
    });
  }, [search, selectedCategory, activeTab, bookmarkedIds]);

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        {/* Header Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Badge variant="violet" size="sm" icon={<BookOpen className="w-3.5 h-3.5 text-indigo-400" />}>
                Knowledge Library Engine ({EBOOKS_DATA.length} Ebooks)
              </Badge>
              <Badge variant="emerald" size="sm">
                Open Access Digital Library
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-outfit text-white">
              Futuro Digital Ebook Library
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Access 20 hand-curated engineering handbooks, computer science classics, system design guides, AI/ML blueprints, design systems, and tech career bestsellers.
            </p>
          </div>

          {/* Library Stats */}
          <div className="grid grid-cols-3 gap-3 text-center sm:text-left min-w-[280px]">
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-indigo-300 font-bold block">Total Ebooks</span>
              <span className="text-xl sm:text-2xl font-black text-white font-outfit">{EBOOKS_DATA.length}</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-indigo-300 font-bold block">Categories</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400 font-outfit">5</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-indigo-300 font-bold block">Saved</span>
              <span className="text-xl sm:text-2xl font-black text-amber-400 font-outfit">{bookmarkedIds.length}</span>
            </div>
          </div>
        </div>

        {/* Search & Category Filter Toolbar */}
        <Card variant="default" className="p-4 sm:p-6 space-y-4 bg-white border-slate-200 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search ebooks by title, author, or keywords (e.g. Kleppmann, System Design, PyTorch)..."
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

            {/* View Mode Toggle: All vs Bookmarks */}
            <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl text-xs shrink-0">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  activeTab === 'all' ? 'bg-indigo-600 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Ebooks ({EBOOKS_DATA.length})
              </button>
              <button
                onClick={() => setActiveTab('bookmarks')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  activeTab === 'bookmarks' ? 'bg-indigo-600 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Bookmarks ({bookmarkedIds.length})
              </button>
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
              Showing <span className="text-indigo-600 font-extrabold">{filteredBooks.length}</span> of {EBOOKS_DATA.length} ebooks
            </div>
          </div>
        </Card>

        {/* Empty Search Result */}
        {filteredBooks.length === 0 && (
          <Card variant="default" className="p-12 text-center space-y-3 bg-white border-slate-200">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-outfit">No Ebooks Found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              No digital books matched your current search filters or bookmarked list. Try clearing search query or switching categories.
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setSearch('');
                setSelectedCategory('All');
                setActiveTab('all');
              }}
            >
              Reset Filters
            </Button>
          </Card>
        )}

        {/* Book Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {filteredBooks.map((b) => {
            const isBookmarked = bookmarkedIds.includes(b.id);
            return (
              <Card
                key={b.id}
                variant="interactive"
                className={`p-6 space-y-4 flex flex-col justify-between bg-white border transition-all ${
                  isBookmarked ? 'border-indigo-300 ring-1 ring-indigo-500/20 bg-indigo-50/10' : 'border-slate-200'
                }`}
              >
                <div className="space-y-3">
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center space-x-2">
                      <Badge variant="violet" size="sm">{b.format}</Badge>
                      <Badge variant="neutral" size="sm">{b.category}</Badge>
                    </div>
                    <div className="flex items-center space-x-1 text-amber-500 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                      <span>{b.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  {/* Title & Author */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-outfit leading-snug">
                      {b.title}
                    </h3>
                    <p className="text-xs text-indigo-600 font-bold mt-0.5">Author: {b.author}</p>
                  </div>

                  {/* Description Callout */}
                  <p className="text-xs text-slate-600 leading-relaxed bg-slate-50/80 p-3 rounded-2xl border border-slate-100">
                    {b.desc}
                  </p>

                  {/* Footer details: Year & Page Count */}
                  <div className="flex items-center space-x-4 text-[11px] text-slate-500">
                    <span className="flex items-center space-x-1 font-mono">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>Pub: {b.year}</span>
                    </span>
                    <span className="flex items-center space-x-1 font-mono">
                      <FileText className="w-3 h-3 text-slate-400" />
                      <span>{b.pages} pages</span>
                    </span>
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="pt-3 border-t border-slate-100 flex justify-between items-center gap-3">
                  <button
                    onClick={() => toggleBookmark(b.id)}
                    className={`text-xs font-bold flex items-center space-x-1.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                      isBookmarked
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {isBookmarked ? (
                      <BookmarkCheck className="w-4 h-4 text-indigo-600" />
                    ) : (
                      <Bookmark className="w-4 h-4 text-slate-500" />
                    )}
                    <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
                  </button>

                  <a href={b.url} target="_blank" rel="noreferrer">
                    <Button
                      variant="primary"
                      size="sm"
                      className="font-bold text-xs bg-indigo-600 hover:bg-indigo-500"
                      rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                    >
                      Read Online
                    </Button>
                  </a>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
