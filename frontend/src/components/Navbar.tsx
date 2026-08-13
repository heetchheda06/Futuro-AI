'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import {
  Sparkles,
  LayoutDashboard,
  Compass,
  Zap,
  GraduationCap,
  Flame,
  ArrowRight,
  Menu,
  X,
  Bot,
  FileText,
  MessageSquare,
  Milestone,
  Target
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-2xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-xs shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
                <span className="font-outfit font-black text-lg">F</span>
              </div>
              <div className="flex flex-col">
                <span className="font-outfit font-extrabold text-lg tracking-tight text-slate-900">
                  FUTURO<span className="text-indigo-600">.AI</span>
                </span>
                <span className="text-[9px] font-semibold text-slate-500 tracking-wider uppercase -mt-1">
                  Career Operating System
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link
              href="/career-navigator"
              className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Navigator
            </Link>
            <Link
              href="/skill-gap"
              className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Skill Gap
            </Link>
            <Link
              href="/resume"
              className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Resume AI
            </Link>
            <Link
              href="/ai-interviewer"
              className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              AI Interviewer
            </Link>
            <Link
              href="/courses"
              className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Courses
            </Link>
            <Link
              href="/career-updates"
              className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Market Pulse
            </Link>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <Link
                href="/dashboard"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs shadow-indigo-500/20 transition-all hover:scale-102"
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Launch OS</span>
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs shadow-indigo-500/20 transition-all hover:scale-102"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 animate-in fade-in duration-150 shadow-md">
          <Link
            href="/career-navigator"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center space-x-2 p-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100"
          >
            <Compass className="w-4 h-4 text-indigo-600" />
            <span>Career Navigator</span>
          </Link>
          <Link
            href="/skill-gap"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center space-x-2 p-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100"
          >
            <Target className="w-4 h-4 text-cyan-600" />
            <span>Skill Gap Analysis</span>
          </Link>
          <Link
            href="/resume"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center space-x-2 p-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100"
          >
            <FileText className="w-4 h-4 text-emerald-600" />
            <span>Resume AI</span>
          </Link>
          <Link
            href="/ai-interviewer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center space-x-2 p-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100"
          >
            <MessageSquare className="w-4 h-4 text-amber-600" />
            <span>AI Mock Interviewer</span>
          </Link>
          <Link
            href="/courses"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center space-x-2 p-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100"
          >
            <GraduationCap className="w-4 h-4 text-indigo-600" />
            <span>Courses Marketplace</span>
          </Link>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
            {user ? (
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold"
              >
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2 rounded-xl text-xs font-semibold text-slate-700 border border-slate-300 bg-white"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold"
                >
                  Get Started Free
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
