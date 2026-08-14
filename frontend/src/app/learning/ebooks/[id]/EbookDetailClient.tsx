'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import { motion } from 'framer-motion';
import { 
  BookOpen, ArrowLeft, ExternalLink, Bookmark, BookmarkCheck, 
  Clock, Calendar, FileText, CheckCircle2, Sparkles, Share2, 
  Download, Eye, AlertCircle
} from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export default function EbookDetailClient() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const [book, setBook] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [readingProgress, setReadingProgress] = useState(0);
  const [readingStatus, setReadingStatus] = useState<'want_to_read' | 'reading' | 'completed'>('want_to_read');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (id) {
      fetchBookDetail();
      loadSavedProgress();
    }
  }, [id]);

  const loadSavedProgress = () => {
    const progressMap = JSON.parse(localStorage.getItem('ebook_reading_progress') || '{}');
    if (progressMap[id]) {
      setReadingProgress(progressMap[id].progress || 0);
      setReadingStatus(progressMap[id].status || 'want_to_read');
    }
    const bookmarks: string[] = JSON.parse(localStorage.getItem('ebook_bookmarks') || '[]');
    setIsBookmarked(bookmarks.includes(id));
  };

  const fetchBookDetail = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/ebooks/${id}`);
      if (res.ok) {
        const data = await res.json();
        setBook(data.book);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProgress = (newVal: number) => {
    setReadingProgress(newVal);
    let newStatus = readingStatus;
    if (newVal === 100) newStatus = 'completed';
    else if (newVal > 0) newStatus = 'reading';
    setReadingStatus(newStatus);

    const progressMap = JSON.parse(localStorage.getItem('ebook_reading_progress') || '{}');
    progressMap[id] = { progress: newVal, status: newStatus, lastReadAt: new Date().toISOString() };
    localStorage.setItem('ebook_reading_progress', JSON.stringify(progressMap));

    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const handleStatusChange = (status: 'want_to_read' | 'reading' | 'completed') => {
    setReadingStatus(status);
    let prog = readingProgress;
    if (status === 'completed') prog = 100;
    else if (status === 'want_to_read') prog = 0;
    else if (status === 'reading' && prog === 0) prog = 25;
    setReadingProgress(prog);

    const progressMap = JSON.parse(localStorage.getItem('ebook_reading_progress') || '{}');
    progressMap[id] = { progress: prog, status, lastReadAt: new Date().toISOString() };
    localStorage.setItem('ebook_reading_progress', JSON.stringify(progressMap));
  };

  const toggleBookmark = () => {
    const bookmarks: string[] = JSON.parse(localStorage.getItem('ebook_bookmarks') || '[]');
    let updated: string[];
    if (bookmarks.includes(id)) {
      updated = bookmarks.filter(bId => bId !== id);
      setIsBookmarked(false);
    } else {
      updated = [...bookmarks, id];
      setIsBookmarked(true);
      if (book) {
        const storedCache = JSON.parse(localStorage.getItem('ebook_saved_items') || '{}');
        storedCache[book.id] = book;
        localStorage.setItem('ebook_saved_items', JSON.stringify(storedCache));
      }
    }
    localStorage.setItem('ebook_bookmarks', JSON.stringify(updated));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#635BFF] mx-auto" />
          <p className="text-xs text-slate-500 mt-4 font-semibold">Loading eBook details...</p>
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center p-6">
          <div className="text-center bg-white p-8 rounded-2xl border border-slate-200 max-w-md">
            <AlertCircle className="h-8 w-8 text-amber-500 mx-auto mb-2" />
            <h2 className="font-outfit text-lg font-bold text-slate-900 mb-1">Book Not Found</h2>
            <p className="text-xs text-slate-500 mb-4">The requested eBook catalog entry could not be retrieved.</p>
            <Link href="/learning/ebooks" className="px-4 py-2 bg-[#635BFF] text-white text-xs font-bold rounded-xl">
              Back to eBooks Library
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Back Link */}
        <Link
          href="/learning/ebooks"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-[#635BFF] mb-6 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to eBooks Library</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Left Column: Cover & Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24 space-y-5">
              <div className="w-full h-80 rounded-xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner flex items-center justify-center">
                {book.coverUrl ? (
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <BookOpen className="h-16 w-16 text-purple-300" />
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <a
                  href={book.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#635BFF] hover:bg-[#5146E5] text-white text-xs font-bold shadow-md shadow-indigo-500/20 transition-all flex items-center justify-center space-x-2"
                >
                  <Eye className="h-4 w-4" />
                  <span>Read on Open Library / Archive</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                <button
                  type="button"
                  onClick={toggleBookmark}
                  className={`w-full py-2.5 px-4 rounded-xl border text-xs font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                    isBookmarked
                      ? 'bg-purple-50 border-purple-200 text-[#635BFF]'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {isBookmarked ? <BookmarkCheck className="h-4 w-4 text-[#635BFF]" /> : <Bookmark className="h-4 w-4" />}
                  <span>{isBookmarked ? 'Bookmarked' : 'Save to Bookmarks'}</span>
                </button>
              </div>

              {/* Formats Available */}
              <div className="pt-4 border-t border-slate-100">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Available Formats</span>
                <div className="flex flex-wrap gap-1.5">
                  {book.formats?.map((fmt: string, i: number) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-purple-50 text-[#635BFF] text-[10px] font-bold border border-purple-100">
                      {fmt}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Metadata, Description & Reading Progress */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title & Author Info */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-[#635BFF] text-xs font-semibold border border-purple-100">
                  Open Educational Resource
                </span>
                {book.year && (
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                    Published {book.year}
                  </span>
                )}
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                  {book.language || 'English'}
                </span>
              </div>

              <h1 className="font-outfit text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {book.title}
              </h1>

              <p className="text-sm font-semibold text-slate-600">
                By <span className="text-[#635BFF] font-bold">{book.author}</span>
              </p>

              {/* Reading Progress Tracker Widget */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-[#635BFF]" />
                    <span className="text-xs font-bold text-slate-800">Your Reading Progress</span>
                  </div>
                  <span className="text-xs font-extrabold text-[#635BFF]">{readingProgress}%</span>
                </div>

                {/* Progress Bar & Slider */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={readingProgress}
                  onChange={(e) => handleUpdateProgress(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#635BFF]"
                />

                {/* Status Toggle Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => handleStatusChange('want_to_read')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      readingStatus === 'want_to_read'
                        ? 'bg-slate-800 text-white'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Want to Read
                  </button>
                  <button
                    type="button"
                    onClick={() => handleStatusChange('reading')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      readingStatus === 'reading'
                        ? 'bg-[#635BFF] text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Reading Currently
                  </button>
                  <button
                    type="button"
                    onClick={() => handleStatusChange('completed')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      readingStatus === 'completed'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Completed
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="pt-2">
                <h3 className="font-outfit text-sm font-bold text-slate-900 mb-2">Book Overview</h3>
                <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line">
                  {book.description || 'Comprehensive curriculum study material and technical handbook.'}
                </p>
              </div>

              {/* Subjects */}
              <div className="pt-2">
                <h3 className="font-outfit text-sm font-bold text-slate-900 mb-2">Subject Topics</h3>
                <div className="flex flex-wrap gap-1.5">
                  {book.subjects?.map((sub: string, i: number) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
                      #{sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
