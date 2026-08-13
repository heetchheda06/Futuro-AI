'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { GlobalSearchModal } from './GlobalSearchModal';
import { 
  LogOut, LayoutDashboard, Menu, X, Brain, Newspaper, Rocket, 
  Compass, ArrowRight, BookOpen, GraduationCap, Award, Users, 
  Building2, Calendar, Sparkles, ChevronDown, Search, Wrench, 
  Briefcase, FileText, Bot
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Dropdown states
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-6">
              <Link href="/" className="flex items-center space-x-2.5 group">
                <span className="p-2 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-500/15 group-hover:scale-105 transition-transform duration-200">
                  <Brain className="h-5 w-5" />
                </span>
                <span className="font-outfit font-extrabold text-xl tracking-tight text-slate-900">
                  FUTURO<span className="text-[#635BFF]">.AI</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {/* Career Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('career')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-[#635BFF] hover:bg-slate-50 transition-colors cursor-pointer">
                  <span>Career</span>
                  <ChevronDown className="h-3 w-3 text-slate-400" />
                </button>

                {activeDropdown === 'career' && (
                  <div className="absolute top-full left-0 w-64 p-2 bg-white rounded-2xl border border-slate-200 shadow-xl grid gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                    <Link
                      href="/explorer"
                      className="flex items-center space-x-2.5 p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#635BFF] transition-colors"
                    >
                      <Compass className="h-4 w-4 text-[#635BFF]" />
                      <div>
                        <div className="text-xs font-bold">Career Explorer</div>
                        <div className="text-[10px] text-slate-400">Discover 50+ career paths & salaries</div>
                      </div>
                    </Link>
                    <Link
                      href="/comparison"
                      className="flex items-center space-x-2.5 p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#635BFF] transition-colors"
                    >
                      <Briefcase className="h-4 w-4 text-cyan-500" />
                      <div>
                        <div className="text-xs font-bold">Compare Careers</div>
                        <div className="text-[10px] text-slate-400">Side-by-side growth & compensation</div>
                      </div>
                    </Link>
                    <Link
                      href="/career-simulator"
                      className="flex items-center space-x-2.5 p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#635BFF] transition-colors"
                    >
                      <Rocket className="h-4 w-4 text-amber-500" />
                      <div>
                        <div className="text-xs font-bold">Career Simulator</div>
                        <div className="text-[10px] text-slate-400">Interactive workplace roleplay HUD</div>
                      </div>
                    </Link>
                    <Link
                      href="/feed"
                      className="flex items-center space-x-2.5 p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#635BFF] transition-colors"
                    >
                      <Newspaper className="h-4 w-4 text-emerald-500" />
                      <div>
                        <div className="text-xs font-bold">Career News Feed</div>
                        <div className="text-[10px] text-slate-400">Personalized market & hiring signals</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* AI Tools Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('ai-tools')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-[#635BFF] hover:bg-slate-50 transition-colors cursor-pointer">
                  <span>AI Tools</span>
                  <ChevronDown className="h-3 w-3 text-slate-400" />
                </button>

                {activeDropdown === 'ai-tools' && (
                  <div className="absolute top-full left-0 w-72 p-2 bg-white rounded-2xl border border-slate-200 shadow-xl grid gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                    <Link
                      href="/ai-tools/project-generator"
                      className="flex items-center space-x-2.5 p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#635BFF] transition-colors"
                    >
                      <Wrench className="h-4 w-4 text-[#635BFF]" />
                      <div>
                        <div className="text-xs font-bold flex items-center space-x-1.5">
                          <span>AI Project Generator</span>
                          <span className="px-1.5 py-0.2 bg-purple-50 text-[#635BFF] text-[9px] font-extrabold rounded">NEW</span>
                        </div>
                        <div className="text-[10px] text-slate-400">Tailored portfolio blueprints & stacks</div>
                      </div>
                    </Link>
                    <Link
                      href="/chatbot"
                      className="flex items-center space-x-2.5 p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#635BFF] transition-colors"
                    >
                      <Bot className="h-4 w-4 text-cyan-500" />
                      <div>
                        <div className="text-xs font-bold">AI Career Mentor</div>
                        <div className="text-[10px] text-slate-400">24/7 intelligent career advisor</div>
                      </div>
                    </Link>
                    <Link
                      href="/resume"
                      className="flex items-center space-x-2.5 p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#635BFF] transition-colors"
                    >
                      <FileText className="h-4 w-4 text-emerald-500" />
                      <div>
                        <div className="text-xs font-bold">Resume ATS Analyzer</div>
                        <div className="text-[10px] text-slate-400">Instant score & keyword optimization</div>
                      </div>
                    </Link>
                    <Link
                      href="/resume-builder"
                      className="flex items-center space-x-2.5 p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#635BFF] transition-colors"
                    >
                      <FileText className="h-4 w-4 text-pink-500" />
                      <div>
                        <div className="text-xs font-bold">Smart Resume Builder</div>
                        <div className="text-[10px] text-slate-400">Print-ready A4 resume generator</div>
                      </div>
                    </Link>
                    <Link
                      href="/interview"
                      className="flex items-center space-x-2.5 p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#635BFF] transition-colors"
                    >
                      <Sparkles className="h-4 w-4 text-amber-500" />
                      <div>
                        <div className="text-xs font-bold">AI Interview Coach</div>
                        <div className="text-[10px] text-slate-400">Mock technical & HR STAR drills</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Learning Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('learning')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-[#635BFF] hover:bg-slate-50 transition-colors cursor-pointer">
                  <span>Learning</span>
                  <ChevronDown className="h-3 w-3 text-slate-400" />
                </button>

                {activeDropdown === 'learning' && (
                  <div className="absolute top-full left-0 w-64 p-2 bg-white rounded-2xl border border-slate-200 shadow-xl grid gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                    <Link
                      href="/learning"
                      className="flex items-center space-x-2.5 p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#635BFF] transition-colors"
                    >
                      <BookOpen className="h-4 w-4 text-[#635BFF]" />
                      <div>
                        <div className="text-xs font-bold">Learning Hub</div>
                        <div className="text-[10px] text-slate-400">Unified curriculum & progress</div>
                      </div>
                    </Link>
                    <Link
                      href="/learning/ebooks"
                      className="flex items-center space-x-2.5 p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#635BFF] transition-colors"
                    >
                      <BookOpen className="h-4 w-4 text-cyan-500" />
                      <div>
                        <div className="text-xs font-bold">eBooks Library</div>
                        <div className="text-[10px] text-slate-400">Internet Archive educational books</div>
                      </div>
                    </Link>
                    <Link
                      href="/learning/courses"
                      className="flex items-center space-x-2.5 p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#635BFF] transition-colors"
                    >
                      <GraduationCap className="h-4 w-4 text-emerald-500" />
                      <div>
                        <div className="text-xs font-bold">Course Discovery</div>
                        <div className="text-[10px] text-slate-400">NPTEL, Coursera, AWS & YouTube</div>
                      </div>
                    </Link>
                    <Link
                      href="/learning/certifications"
                      className="flex items-center space-x-2.5 p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#635BFF] transition-colors"
                    >
                      <Award className="h-4 w-4 text-amber-500" />
                      <div>
                        <div className="text-xs font-bold">Certification Hub</div>
                        <div className="text-[10px] text-slate-400">30+ Industry credentials & verification</div>
                      </div>
                    </Link>
                    <Link
                      href="/roadmap"
                      className="flex items-center space-x-2.5 p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#635BFF] transition-colors"
                    >
                      <Compass className="h-4 w-4 text-purple-500" />
                      <div>
                        <div className="text-xs font-bold">Milestone Roadmap</div>
                        <div className="text-[10px] text-slate-400">Step-by-step career path</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Opportunities Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('opportunities')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-[#635BFF] hover:bg-slate-50 transition-colors cursor-pointer">
                  <span>Opportunities</span>
                  <ChevronDown className="h-3 w-3 text-slate-400" />
                </button>

                {activeDropdown === 'opportunities' && (
                  <div className="absolute top-full left-0 w-64 p-2 bg-white rounded-2xl border border-slate-200 shadow-xl grid gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                    <Link
                      href="/colleges"
                      className="flex items-center space-x-2.5 p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#635BFF] transition-colors"
                    >
                      <Building2 className="h-4 w-4 text-[#635BFF]" />
                      <div>
                        <div className="text-xs font-bold">College Discovery</div>
                        <div className="text-[10px] text-slate-400">45+ IITs, NITs, BITS & Comparison</div>
                      </div>
                    </Link>
                    <Link
                      href="/mentors"
                      className="flex items-center space-x-2.5 p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#635BFF] transition-colors"
                    >
                      <Users className="h-4 w-4 text-cyan-500" />
                      <div>
                        <div className="text-xs font-bold">Mentor Discovery</div>
                        <div className="text-[10px] text-slate-400">Industry engineers & AI Matching</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Productivity Links */}
              <Link
                href="/calendar"
                className="flex items-center space-x-1 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-[#635BFF] hover:bg-slate-50 transition-colors"
              >
                <Calendar className="h-3.5 w-3.5 text-[#635BFF]" />
                <span>AI Calendar</span>
              </Link>
            </nav>

            {/* Global Search Trigger + Auth Controls */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Search Button */}
              <button
                type="button"
                onClick={() => setSearchModalOpen(true)}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-100/80 hover:bg-slate-100 text-slate-500 hover:text-slate-700 text-xs font-medium transition-all cursor-pointer border border-slate-200/60 shadow-2xs"
                title="Global Search"
              >
                <Search className="h-3.5 w-3.5 text-slate-400" />
                <span className="hidden sm:inline">Search everything...</span>
                <kbd className="hidden sm:inline-block px-1.5 py-0.2 text-[9px] font-bold text-slate-400 bg-white rounded border border-slate-200">
                  ⌘K
                </kbd>
              </button>

              {/* Auth Buttons */}
              {user ? (
                <div className="flex items-center space-x-2 border-l border-slate-200 pl-3">
                  <Link
                    href="/dashboard"
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-purple-50 text-[#635BFF] text-xs font-bold hover:bg-purple-100 transition-colors"
                  >
                    <LayoutDashboard className="h-3.5 w-3.5" />
                    <span className="hidden md:inline">Dashboard</span>
                  </Link>
                  <button
                    type="button"
                    onClick={logout}
                    className="p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 cursor-pointer transition-colors"
                    title="Logout"
                  >
                    <LogOut className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2 border-l border-slate-200 pl-3">
                  <Link
                    href="/login"
                    className="text-xs font-semibold text-slate-700 hover:text-slate-900 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    className="inline-flex items-center space-x-1 px-3 py-1.5 text-xs font-semibold text-white bg-[#635BFF] hover:bg-[#5146E5] rounded-xl shadow-xs active:scale-98 transition-all"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              )}

              {/* Mobile menu toggle */}
              <div className="flex items-center lg:hidden">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Toggle Navigation Menu"
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">Career & AI</div>
              <div className="grid grid-cols-2 gap-1.5">
                <Link
                  href="/explorer"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-purple-50 text-xs font-semibold text-slate-700 hover:text-[#635BFF] flex items-center space-x-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Compass className="h-3.5 w-3.5 text-[#635BFF]" />
                  <span>Careers</span>
                </Link>
                <Link
                  href="/comparison"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-purple-50 text-xs font-semibold text-slate-700 hover:text-[#635BFF] flex items-center space-x-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Briefcase className="h-3.5 w-3.5 text-cyan-500" />
                  <span>Compare</span>
                </Link>
                <Link
                  href="/ai-tools/project-generator"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-purple-50 text-xs font-semibold text-slate-700 hover:text-[#635BFF] flex items-center space-x-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Wrench className="h-3.5 w-3.5 text-amber-500" />
                  <span>AI Projects</span>
                </Link>
                <Link
                  href="/chatbot"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-purple-50 text-xs font-semibold text-slate-700 hover:text-[#635BFF] flex items-center space-x-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Bot className="h-3.5 w-3.5 text-emerald-500" />
                  <span>AI Mentor</span>
                </Link>
              </div>
            </div>

            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">Learning & Opportunities</div>
              <div className="grid grid-cols-2 gap-1.5">
                <Link
                  href="/learning"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-purple-50 text-xs font-semibold text-slate-700 hover:text-[#635BFF] flex items-center space-x-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <BookOpen className="h-3.5 w-3.5 text-[#635BFF]" />
                  <span>Learning Hub</span>
                </Link>
                <Link
                  href="/learning/ebooks"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-purple-50 text-xs font-semibold text-slate-700 hover:text-[#635BFF] flex items-center space-x-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <BookOpen className="h-3.5 w-3.5 text-cyan-500" />
                  <span>eBooks</span>
                </Link>
                <Link
                  href="/learning/courses"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-purple-50 text-xs font-semibold text-slate-700 hover:text-[#635BFF] flex items-center space-x-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <GraduationCap className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Courses</span>
                </Link>
                <Link
                  href="/learning/certifications"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-purple-50 text-xs font-semibold text-slate-700 hover:text-[#635BFF] flex items-center space-x-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Award className="h-3.5 w-3.5 text-amber-500" />
                  <span>Certifications</span>
                </Link>
                <Link
                  href="/colleges"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-purple-50 text-xs font-semibold text-slate-700 hover:text-[#635BFF] flex items-center space-x-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Building2 className="h-3.5 w-3.5 text-indigo-500" />
                  <span>Colleges</span>
                </Link>
                <Link
                  href="/mentors"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-purple-50 text-xs font-semibold text-slate-700 hover:text-[#635BFF] flex items-center space-x-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Users className="h-3.5 w-3.5 text-pink-500" />
                  <span>Mentors</span>
                </Link>
                <Link
                  href="/calendar"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-purple-50 text-xs font-semibold text-slate-700 hover:text-[#635BFF] flex items-center space-x-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Calendar className="h-3.5 w-3.5 text-purple-500" />
                  <span>AI Calendar</span>
                </Link>
                <Link
                  href="/dashboard"
                  className="p-2.5 rounded-xl bg-purple-50 text-xs font-bold text-[#635BFF] flex items-center space-x-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LayoutDashboard className="h-3.5 w-3.5" />
                  <span>Dashboard</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <GlobalSearchModal 
        isOpen={searchModalOpen} 
        onClose={() => setSearchModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;
