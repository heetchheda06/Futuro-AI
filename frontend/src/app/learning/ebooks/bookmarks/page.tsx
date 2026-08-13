'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bookmark, ArrowLeft, Trash2, BookOpen, ExternalLink, 
  Search, Clock, ArrowRight, Library 
} from 'lucide-react';

interface EbookBookmarkItem {
  id: string;
  title: string;
  author: string;
  coverUrl?: string;
  year?: number | string;
  subjects?: string[];
  formats?: string[];
  sourceUrl: string;
}

export default function EbookBookmarksPage() {
  const [bookmarks, setBookmarks] = useState<EbookBookmarkItem[]>([]);
  const [readingProgressMap, setReadingProgressMap] = useState<Record<string, any>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'reading' | 'completed'>('all');

  useEffect(() => {
    loadBookmarks();
  }, []);

  const loadBookmarks = () => {
    const ids: string[] = JSON.parse(localStorage.getItem('ebook_bookmarks') || '[]');
    const cachedItems: Record<string, any> = JSON.parse(localStorage.getItem('ebook_saved_items') || '{}');
    const progress: Record<string, any> = JSON.parse(localStorage.getItem('ebook_reading_progress') || '{}');
    setReadingProgressMap(progress);

    const items: EbookBookmarkItem[] = ids.map(id => {
      if (cachedItems[id]) return cachedItems[id];
      return {
        id,
        title: 'Saved Educational Resource',
        author: 'Open Library / Internet Archive',
        sourceUrl: `https://openlibrary.org/works/${id}`
      };
    });

    setBookmarks(items);
  };

  const removeBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = bookmarks.filter(b => b.id !== id);
    setBookmarks(updated);
    const updatedIds = updated.map(b => b.id);
    localStorage.setItem('ebook_bookmarks', JSON.stringify(updatedIds));
  };

  const filteredBookmarks = bookmarks.filter(book => {
    const matchesQ = !searchQuery || 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      book.author.toLowerCase().includes(searchQuery.toLowerCase());

    const prog = readingProgressMap[book.id]?.status || 'want_to_read';
    const matchesStatus = filterStatus === 'all' || 
      (filterStatus === 'reading' && prog === 'reading') || 
      (filterStatus === 'completed' && prog === 'completed');

    return matchesQ && matchesStatus;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <Link
          href="/learning/ebooks"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-[#635BFF] mb-6 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to eBooks Library</span>
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-purple-50 text-[#635BFF] text-xs font-semibold mb-2 border border-purple-100">
              <Bookmark className="h-3.5 w-3.5" />
              <span>Personal Knowledge Vault</span>
            </div>
            <h1 className="font-outfit text-3xl font-extrabold text-slate-900 tracking-tight">
              Saved <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">eBooks & Reading List</span>
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Manage your bookmarked textbooks, review your reading percentage, and continue where you left off.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-6 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter saved bookmarks..."
              className="w-full pl-10 pr-4 py-2 text-xs text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#635BFF] focus:outline-none"
            />
          </div>

          <div className="flex gap-1.5">
            {[
              { id: 'all', label: 'All Saved' },
              { id: 'reading', label: 'Currently Reading' },
              { id: 'completed', label: 'Completed' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilterStatus(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filterStatus === tab.id
                    ? 'bg-[#635BFF] text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bookmarks List */}
        {filteredBookmarks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredBookmarks.map((book) => {
                const prog = readingProgressMap[book.id]?.progress || 0;
                const status = readingProgressMap[book.id]?.status || 'want_to_read';

                return (
                  <motion.div
                    key={book.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start space-x-3 mb-3">
                        <div className="w-16 h-22 rounded-lg bg-slate-100 overflow-hidden flex-shrink-0 border border-slate-200 flex items-center justify-center">
                          {book.coverUrl ? (
                            <img src={book.coverUrl} alt={book.title} className="w-full h-full object-cover" />
                          ) : (
                            <BookOpen className="h-6 w-6 text-purple-300" />
                          )}
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-outfit text-sm font-bold text-slate-900 leading-snug line-clamp-2 mb-1">
                            {book.title}
                          </h3>
                          <p className="text-xs text-slate-500 line-clamp-1 mb-2">
                            {book.author}
                          </p>
                          <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                            status === 'completed' ? 'bg-emerald-50 text-emerald-700' :
                            status === 'reading' ? 'bg-purple-50 text-[#635BFF]' : 'bg-slate-100 text-slate-600'
                          }`}>
                            {status === 'completed' ? 'Completed' : status === 'reading' ? 'Reading' : 'Want to Read'}
                          </span>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="space-y-1 mb-4">
                        <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400">
                          <span>Reading Progress</span>
                          <span className="text-[#635BFF]">{prog}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-[#635BFF] rounded-full transition-all duration-300" style={{ width: `${prog}%` }} />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 gap-2">
                      <Link
                        href={`/learning/ebooks/${book.id}`}
                        className="flex-grow py-2 px-3 rounded-xl bg-purple-50 hover:bg-[#635BFF] text-[#635BFF] hover:text-white text-xs font-bold transition-all text-center"
                      >
                        Continue Reading
                      </Link>
                      <button
                        type="button"
                        onClick={(e) => removeBookmark(book.id, e)}
                        className="p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                        title="Remove Bookmark"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <Bookmark className="h-10 w-10 text-slate-300 mx-auto mb-2" />
            <h3 className="font-outfit text-base font-bold text-slate-800 mb-1">No Saved eBooks</h3>
            <p className="text-xs text-slate-500 mb-4">You haven't bookmarked any textbooks yet. Browse the library to add books!</p>
            <Link
              href="/learning/ebooks"
              className="px-5 py-2.5 bg-[#635BFF] text-white rounded-xl text-xs font-bold shadow-xs inline-block"
            >
              Browse eBooks Library
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
