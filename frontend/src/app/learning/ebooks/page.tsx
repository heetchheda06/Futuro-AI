'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Search, Bookmark, BookmarkCheck, ExternalLink, 
  Sparkles, Filter, ChevronLeft, ChevronRight, CheckCircle2, 
  Clock, ArrowRight, Library, FileText
} from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface EbookItem {
  id: string;
  title: string;
  author: string;
  coverUrl?: string;
  year?: number | string;
  subjects: string[];
  formats: ('PDF' | 'EPUB' | 'TXT' | 'Read Online')[];
  language: string;
  description?: string;
  source: string;
  sourceUrl: string;
  readingTimeMinutes?: number;
}

export default function EbooksLibraryPage() {
  const router = useRouter();
  const [books, setBooks] = useState<EbookItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('computer science');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedFormat, setSelectedFormat] = useState('all');
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  const GENRES = [
    { id: 'all', label: 'All Genres' },
    { id: 'algorithms', label: 'Algorithms' },
    { id: 'artificial intelligence', label: 'Artificial Intelligence' },
    { id: 'software engineering', label: 'Software Engineering' },
    { id: 'system design', label: 'System Design' },
    { id: 'web development', label: 'Web Development' },
    { id: 'data science', label: 'Data Science' },
    { id: 'ui/ux', label: 'UI/UX Design' }
  ];

  useEffect(() => {
    // Load local bookmarks
    const saved = localStorage.getItem('ebook_bookmarks');
    if (saved) {
      try {
        setBookmarkedIds(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [page, selectedGenre]);

  const fetchBooks = async (customQuery?: string) => {
    setLoading(true);
    const queryToUse = customQuery !== undefined ? customQuery : searchQuery;

    try {
      let url = `${API_BASE_URL}/ebooks/search?q=${encodeURIComponent(queryToUse)}&page=${page}&limit=12`;
      if (selectedGenre !== 'all') {
        url += `&genre=${encodeURIComponent(selectedGenre)}`;
      }

      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setBooks(data.books || []);
        setTotalResults(data.total || 0);
      }
    } catch (err) {
      console.error('Error fetching ebooks, falling back to local list', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchBooks(searchQuery);
  };

  const toggleBookmark = (book: EbookItem, e: React.MouseEvent) => {
    e.stopPropagation();
    let updated: string[];
    const isBookmarked = bookmarkedIds.includes(book.id);

    if (isBookmarked) {
      updated = bookmarkedIds.filter(id => id !== book.id);
      showToast(`Removed "${book.title.slice(0, 20)}..." from bookmarks`);
    } else {
      updated = [...bookmarkedIds, book.id];
      showToast(`Saved "${book.title.slice(0, 20)}..." to bookmarks`);
      
      // Save book item payload in local storage bookmarks cache
      const storedCache = JSON.parse(localStorage.getItem('ebook_saved_items') || '{}');
      storedCache[book.id] = book;
      localStorage.setItem('ebook_saved_items', JSON.stringify(storedCache));
    }

    setBookmarkedIds(updated);
    localStorage.setItem('ebook_bookmarks', JSON.stringify(updated));
  };

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* Toast Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-6 z-50 bg-[#635BFF] text-white px-4 py-2.5 rounded-xl shadow-lg text-xs font-bold flex items-center space-x-2"
          >
            <CheckCircle2 className="h-4 w-4 text-emerald-300" />
            <span>{notification}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Header Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-purple-50 text-[#635BFF] text-xs font-semibold mb-2 border border-purple-100">
              <Library className="h-3.5 w-3.5" />
              <span>Internet Archive / Open Library Integration</span>
            </div>
            <h1 className="font-outfit text-3xl font-extrabold text-slate-900 tracking-tight">
              Technical & Career <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">eBooks Library</span>
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Read free open-access textbooks, system design references, algorithm handbooks, and software guides.
            </p>
          </div>

          <Link
            href="/learning/ebooks/bookmarks"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#635BFF] hover:border-purple-200 text-xs font-bold transition-all shadow-xs"
          >
            <Bookmark className="h-4 w-4 text-[#635BFF]" />
            <span>Saved Bookmarks ({bookmarkedIds.length})</span>
          </Link>
        </div>

        {/* Search & Genre Filter Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-8 space-y-3">
          <form onSubmit={handleSearchSubmit} className="flex gap-2">
            <div className="relative flex-grow">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by book title, author, or subject (e.g., Python, Algorithms, Clean Code)..."
                className="w-full pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#635BFF] focus:outline-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#635BFF] hover:bg-[#5146E5] text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer"
            >
              Search
            </button>
          </form>

          {/* Genre Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-1 pr-1 flex items-center">
              <Filter className="h-3 w-3 mr-1" />
              Genre:
            </span>
            {GENRES.map(genre => (
              <button
                key={genre.id}
                type="button"
                onClick={() => {
                  setSelectedGenre(genre.id);
                  setPage(1);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedGenre === genre.id
                    ? 'bg-[#635BFF] text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {genre.label}
              </button>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        {loading ? (
          <div className="text-center py-24 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#635BFF] mx-auto" />
            <p className="text-xs text-slate-500 mt-3 font-semibold">Retrieving eBooks from Internet Archive catalog...</p>
          </div>
        ) : books.length > 0 ? (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
              {books.map((book) => {
                const isBookmarked = bookmarkedIds.includes(book.id);
                return (
                  <motion.div
                    key={book.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-purple-200 hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Cover Image */}
                      <div className="relative w-full h-48 bg-slate-100 rounded-xl overflow-hidden mb-3 border border-slate-100">
                        {book.coverUrl ? (
                          <img
                            src={book.coverUrl}
                            alt={book.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-purple-50 text-[#635BFF]">
                            <BookOpen className="h-10 w-10" />
                          </div>
                        )}

                        {/* Bookmark Button */}
                        <button
                          type="button"
                          onClick={(e) => toggleBookmark(book, e)}
                          className="absolute top-2 right-2 p-2 rounded-xl bg-white/90 backdrop-blur-md shadow-xs text-slate-600 hover:text-[#635BFF] transition-colors cursor-pointer"
                          title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Book'}
                        >
                          {isBookmarked ? (
                            <BookmarkCheck className="h-4 w-4 text-[#635BFF]" />
                          ) : (
                            <Bookmark className="h-4 w-4" />
                          )}
                        </button>
                      </div>

                      {/* Title & Author */}
                      <h3 className="font-outfit text-sm font-bold text-slate-900 leading-snug line-clamp-2 mb-1 group-hover:text-[#635BFF] transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-1 mb-2">
                        {book.author}
                      </p>

                      {/* Formats and Subjects */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {book.formats.map((fmt, i) => (
                          <span key={i} className="px-1.5 py-0.2 rounded bg-purple-50 text-[#635BFF] text-[9px] font-bold border border-purple-100">
                            {fmt}
                          </span>
                        ))}
                        {book.year && (
                          <span className="px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 text-[9px] font-semibold">
                            {book.year}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                      <Link
                        href={`/learning/ebooks/${book.id}`}
                        className="flex-grow py-2 px-3 rounded-xl bg-slate-50 hover:bg-purple-50 text-slate-700 hover:text-[#635BFF] text-xs font-bold transition-all text-center"
                      >
                        Details & Reader
                      </Link>
                      <a
                        href={book.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-colors"
                        title="Open on Open Library"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-xs text-slate-500 font-medium">
                Page <strong className="text-slate-800">{page}</strong> &bull; Showing {books.length} entries
              </span>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  disabled={page <= 1}
                  onClick={() => setPage(p => Math.max(p - 1, 1))}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 text-xs font-bold text-slate-700 flex items-center space-x-1 cursor-pointer"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                  <span>Prev</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPage(p => p + 1)}
                  className="px-3 py-1.5 rounded-xl bg-[#635BFF] hover:bg-[#5146E5] text-white text-xs font-bold flex items-center space-x-1 cursor-pointer shadow-xs"
                >
                  <span>Next</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <BookOpen className="h-10 w-10 text-slate-300 mx-auto mb-2" />
            <h3 className="font-outfit text-base font-bold text-slate-800 mb-1">No eBooks Found</h3>
            <p className="text-xs text-slate-500 mb-4">Try adjusting your search query or selecting a different genre filter.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('computer science');
                setSelectedGenre('all');
                setPage(1);
                fetchBooks('computer science');
              }}
              className="px-4 py-2 bg-[#635BFF] text-white rounded-xl text-xs font-semibold cursor-pointer"
            >
              Reset Catalog Filter
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
