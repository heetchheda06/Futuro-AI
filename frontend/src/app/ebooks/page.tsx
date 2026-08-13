'use client';

import React, { useState } from 'react';
import { AppShell } from '../../components/shell/AppShell';
import {
  BookOpen,
  Sparkles,
  Search,
  Bookmark,
  ExternalLink,
  Flame,
  CheckCircle2,
  BookmarkCheck
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

export default function EbooksPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'bookmarks'>('all');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(['b-1']);

  const categories = ['All', 'Systems & Architecture', 'AI & Machine Learning', 'Data & SQL', 'Design & UI/UX', 'Business & Growth'];

  const books = [
    {
      id: 'b-1',
      title: 'Designing Data-Intensive Applications',
      author: 'Martin Kleppmann',
      category: 'Systems & Architecture',
      year: '2017',
      format: 'PDF / EPUB',
      desc: 'The definitive guide to distributed systems, replication, partitioning, and consistency models.',
      url: 'https://archive.org',
    },
    {
      id: 'b-2',
      title: 'Database Internals: Storage & Indexing',
      author: 'Alex Petrov',
      category: 'Data & SQL',
      year: '2019',
      format: 'PDF',
      desc: 'Comprehensive analysis of B-Trees, LSM-Trees, immutable storage, and distributed concensus.',
      url: 'https://archive.org',
    },
    {
      id: 'b-3',
      title: 'Deep Learning with Python',
      author: 'François Chollet',
      category: 'AI & Machine Learning',
      year: '2021',
      format: 'PDF',
      desc: 'Hands-on neural network concepts and Keras/TensorFlow architectures written by Keras creator.',
      url: 'https://archive.org',
    },
    {
      id: 'b-4',
      title: 'Refactoring UI',
      author: 'Adam Wathan & Steve Schoger',
      category: 'Design & UI/UX',
      year: '2018',
      format: 'PDF',
      desc: 'Practical design guidelines for software developers building beautiful user interfaces.',
      url: 'https://refactoringui.com',
    },
    {
      id: 'b-5',
      title: 'The Lean Startup',
      author: 'Eric Ries',
      category: 'Business & Growth',
      year: '2011',
      format: 'PDF / EPUB',
      desc: 'How today\'s entrepreneurs use continuous innovation to create radically successful businesses.',
      url: 'https://archive.org',
    }
  ];

  const toggleBookmark = (id: string) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(bookmarkedIds.filter(bId => bId !== id));
    } else {
      setBookmarkedIds([...bookmarkedIds, id]);
    }
  };

  const filtered = books.filter((b) => {
    const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase()) || b.author.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || b.category === selectedCategory;
    const matchesTab = activeTab === 'all' || bookmarkedIds.includes(b.id);
    return matchesSearch && matchesCategory && matchesTab;
  });

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Badge variant="violet" size="sm" icon={<BookOpen className="w-3.5 h-3.5 text-indigo-600" />}>
                Knowledge Library Engine
              </Badge>
              <Badge variant="emerald" size="sm">{books.length} Classic Ebooks</Badge>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-outfit mt-1">
              Futuro Digital Ebook Library
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Access engineering handbooks, computer science classics, design systems, and business guides.
            </p>
          </div>
        </div>

        {/* Search & Category Bar */}
        <Card variant="elevated" className="p-4 bg-white border-slate-200 shadow-2xs space-y-3 rounded-3xl">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search ebooks by title or author..."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-900 focus:outline-none focus:border-indigo-500 font-medium"
              />
            </div>

            <div className="flex items-center space-x-1.5 bg-slate-100 p-1 rounded-xl text-xs shrink-0">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  activeTab === 'all' ? 'bg-indigo-600 text-white shadow-2xs' : 'text-slate-600'
                }`}
              >
                All Ebooks
              </button>
              <button
                onClick={() => setActiveTab('bookmarks')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  activeTab === 'bookmarks' ? 'bg-indigo-600 text-white shadow-2xs' : 'text-slate-600'
                }`}
              >
                Bookmarks ({bookmarkedIds.length})
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
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

        {/* Book Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((b) => {
            const isBookmarked = bookmarkedIds.includes(b.id);
            return (
              <Card key={b.id} variant="interactive" className="p-6 space-y-4 flex flex-col justify-between bg-white border-slate-200 rounded-3xl shadow-xs">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="violet" size="sm">{b.format}</Badge>
                    <span className="text-[10px] text-slate-400 font-mono">Pub: {b.year}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-outfit">{b.title}</h3>
                  <p className="text-xs text-indigo-600 font-semibold">Author: {b.author}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
                  <button
                    onClick={() => toggleBookmark(b.id)}
                    className={`text-xs font-semibold flex items-center space-x-1 cursor-pointer transition-colors ${
                      isBookmarked ? 'text-indigo-600 font-bold' : 'text-slate-500 hover:text-indigo-600'
                    }`}
                  >
                    {isBookmarked ? <BookmarkCheck className="w-4 h-4 text-indigo-600" /> : <Bookmark className="w-4 h-4" />}
                    <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
                  </button>
                  <a href={b.url} target="_blank" rel="noreferrer">
                    <Button variant="primary" size="sm" rightIcon={<ExternalLink className="w-3.5 h-3.5" />}>
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
