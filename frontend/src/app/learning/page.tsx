'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { 
  BookOpen, GraduationCap, Award, Compass, Sparkles, 
  ArrowRight, CheckCircle2, Clock, Bookmark, TrendingUp, 
  Search, ArrowUpRight, Flame, Target, Library
} from 'lucide-react';

export default function LearningHubPage() {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    savedBooksCount: 3,
    activeCoursesCount: 2,
    plannedCertsCount: 1,
    weeklyStudyHours: 8.5
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white p-8 sm:p-12 mb-10 shadow-xl">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-96 h-96 bg-[#635BFF]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-cyan-300 text-xs font-semibold mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Unified Knowledge Ecosystem</span>
            </div>
            <h1 className="font-outfit text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Futuro <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Learning Hub</span>
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Access curated technical eBooks, accredited university courses, verified industry certifications, and AI-personalized learning pathways tailored for {user?.targetCareer || 'Software Engineers'}.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/learning/courses"
                className="px-5 py-2.5 rounded-xl bg-[#635BFF] hover:bg-[#5146E5] text-white text-xs font-bold shadow-lg shadow-indigo-500/25 transition-all flex items-center space-x-1.5"
              >
                <GraduationCap className="h-4 w-4" />
                <span>Explore Courses</span>
              </Link>
              <Link
                href="/learning/ebooks"
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-bold transition-all flex items-center space-x-1.5"
              >
                <BookOpen className="h-4 w-4" />
                <span>Browse eBooks</span>
              </Link>
              <Link
                href="/learning/certifications"
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-bold transition-all flex items-center space-x-1.5"
              >
                <Award className="h-4 w-4" />
                <span>Certification Hub</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Learning Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="p-2 rounded-xl bg-purple-50 text-[#635BFF] w-fit mb-3">
              <BookOpen className="h-4 w-4" />
            </div>
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Saved eBooks</span>
            <span className="font-outfit font-extrabold text-xl text-slate-900 mt-0.5 block">{stats.savedBooksCount}</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="p-2 rounded-xl bg-cyan-50 text-cyan-600 w-fit mb-3">
              <GraduationCap className="h-4 w-4" />
            </div>
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Courses</span>
            <span className="font-outfit font-extrabold text-xl text-slate-900 mt-0.5 block">{stats.activeCoursesCount}</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-600 w-fit mb-3">
              <Award className="h-4 w-4" />
            </div>
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Target Certifications</span>
            <span className="font-outfit font-extrabold text-xl text-slate-900 mt-0.5 block">{stats.plannedCertsCount}</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 w-fit mb-3">
              <Clock className="h-4 w-4" />
            </div>
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Weekly Learning</span>
            <span className="font-outfit font-extrabold text-xl text-slate-900 mt-0.5 block">{stats.weeklyStudyHours} hrs</span>
          </div>
        </div>

        {/* 3 Main Pillars Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-outfit text-xl font-bold text-slate-900">Core Learning Pillars</h2>
              <p className="text-xs text-slate-500">Access thousands of verified resources organized by learning format.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* eBook Library Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-200 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-3 rounded-xl bg-purple-50 text-[#635BFF] group-hover:scale-105 transition-transform">
                    <BookOpen className="h-6 w-6" />
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600">
                    Internet Archive API
                  </span>
                </div>
                <h3 className="font-outfit text-lg font-bold text-slate-900 mb-2 group-hover:text-[#635BFF] transition-colors">
                  eBooks Library
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Search, read, and bookmark classic computer science textbooks, system design handbooks, algorithm manuals, and UX design guides.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <span className="px-2 py-0.5 rounded bg-slate-50 text-slate-600 text-[10px] font-semibold border border-slate-100">PDF & EPUB</span>
                  <span className="px-2 py-0.5 rounded bg-slate-50 text-slate-600 text-[10px] font-semibold border border-slate-100">Reading Progress</span>
                  <span className="px-2 py-0.5 rounded bg-slate-50 text-slate-600 text-[10px] font-semibold border border-slate-100">Bookmarks</span>
                </div>
              </div>
              <Link
                href="/learning/ebooks"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-[#635BFF] text-slate-700 hover:text-white text-xs font-bold transition-all flex items-center justify-center space-x-1.5"
              >
                <span>Browse eBooks</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Course Discovery Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-3 rounded-xl bg-cyan-50 text-cyan-600 group-hover:scale-105 transition-transform">
                    <GraduationCap className="h-6 w-6" />
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-50 text-cyan-700">
                    5 Major Providers
                  </span>
                </div>
                <h3 className="font-outfit text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                  Course Discovery Engine
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Unified catalog aggregating NPTEL IIT courses, Coursera specializations, AWS Educate, Google Cloud Skills Boost, and top YouTube series.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <span className="px-2 py-0.5 rounded bg-slate-50 text-slate-600 text-[10px] font-semibold border border-slate-100">NPTEL</span>
                  <span className="px-2 py-0.5 rounded bg-slate-50 text-slate-600 text-[10px] font-semibold border border-slate-100">Coursera</span>
                  <span className="px-2 py-0.5 rounded bg-slate-50 text-slate-600 text-[10px] font-semibold border border-slate-100">AWS & Google Cloud</span>
                </div>
              </div>
              <Link
                href="/learning/courses"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-cyan-600 text-slate-700 hover:text-white text-xs font-bold transition-all flex items-center justify-center space-x-1.5"
              >
                <span>Discover Courses</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Certification Hub Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-200 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-3 rounded-xl bg-amber-50 text-amber-600 group-hover:scale-105 transition-transform">
                    <Award className="h-6 w-6" />
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700">
                    30+ Credentials
                  </span>
                </div>
                <h3 className="font-outfit text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                  Certification Hub
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Explore verified certifications from AWS, Google Cloud, Microsoft, Cisco, CompTIA, and Meta. Track your preparation timeline and verify badge IDs.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <span className="px-2 py-0.5 rounded bg-slate-50 text-slate-600 text-[10px] font-semibold border border-slate-100">Official Links</span>
                  <span className="px-2 py-0.5 rounded bg-slate-50 text-slate-600 text-[10px] font-semibold border border-slate-100">Exam Codes</span>
                  <span className="px-2 py-0.5 rounded bg-slate-50 text-slate-600 text-[10px] font-semibold border border-slate-100">Verification</span>
                </div>
              </div>
              <Link
                href="/learning/certifications"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-amber-600 text-slate-700 hover:text-white text-xs font-bold transition-all flex items-center justify-center space-x-1.5"
              >
                <span>View Certifications</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* AI Personalized Recommendation Banner */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start space-x-4">
            <span className="p-3 rounded-xl bg-purple-50 text-[#635BFF] flex-shrink-0">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-outfit text-base font-bold text-slate-900">Customized Learning Path</h3>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold">Matched to Profile</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Based on your target career as a <strong className="text-slate-800">{user?.targetCareer || 'Software Engineer'}</strong>, our AI recommends starting with <em>Designing Data-Intensive Applications</em> and the <em>AWS Solutions Architect</em> track.
              </p>
            </div>
          </div>
          <Link
            href="/roadmap"
            className="px-5 py-2.5 bg-[#635BFF] hover:bg-[#5146E5] text-white rounded-xl text-xs font-bold transition-all whitespace-nowrap shadow-xs"
          >
            View Full Roadmap
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
