'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Search,
  Bot,
  Bell,
  Plus,
  User,
  Sparkles,
  ChevronDown,
  LogOut,
  Settings,
  Target,
  FileText,
  Calendar
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface TopBarProps {
  onOpenCommandPalette: () => void;
  onToggleCopilot: () => void;
  onToggleNotifications: () => void;
}

export function TopBar({
  onOpenCommandPalette,
  onToggleCopilot,
  onToggleNotifications,
}: TopBarProps) {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showQuickAdd, setShowQuickAdd] = useState(false);

  // Format page title from pathname
  const getPageTitle = () => {
    if (pathname === '/dashboard') return 'Career Intelligence Command Center';
    if (pathname === '/career-navigator') return 'Career Navigator & Trajectory';
    if (pathname === '/career-graph') return 'Skill & Career Network Graph';
    if (pathname === '/recommendations') return 'Personalized AI Recommendations';
    if (pathname === '/roadmap') return '90-Day Milestone Roadmap';
    if (pathname === '/skill-gap') return 'Competency Radar & Skill Gap Matrix';
    if (pathname === '/ai-career-hub') return 'Central Intelligence Core';
    if (pathname === '/ai-interviewer') return 'AI Mock Interviewer Cockpit';
    if (pathname === '/resume') return 'Resume AI Workspace';
    if (pathname === '/learning-helper') return 'Futuro AI Tutor';
    if (pathname === '/english-helper') return 'Futuro Communicate';
    if (pathname === '/ai-tools/project-generator') return 'AI Project Blueprint Generator';
    if (pathname === '/courses') return 'Course Marketplace';
    if (pathname === '/ebooks') return 'Internet Archive Technical Library';
    if (pathname === '/interview-prep') return 'Interview Question Decks';
    if (pathname === '/study-spaces') return 'Study Space Finder';
    if (pathname === '/career-updates') return 'Futuro Pulse Market Signals';
    if (pathname === '/news') return 'Industry News Digest';
    if (pathname === '/community') return 'Engineering Discussion Network';
    if (pathname === '/mentors') return 'Futuro Verified Mentors';
    if (pathname === '/colleges') return 'College Intelligence';
    if (pathname === '/calendar') return 'Futuro Planner & Scheduler';
    if (pathname === '/profile') return 'Career Identity Profile';
    return 'Futuro AI';
  };

  return (
    <header className="sticky top-0 z-30 h-16 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-2xs px-4 sm:px-6 flex items-center justify-between">
      {/* Route Title & Breadcrumb */}
      <div>
        <h1 className="text-sm font-extrabold text-slate-900 font-outfit">
          {getPageTitle()}
        </h1>
        <span className="text-[10px] text-slate-500 font-medium">
          Home &rarr; {pathname.replace('/', '') || 'dashboard'}
        </span>
      </div>

      {/* Right Controls */}
      <div className="flex items-center space-x-3">
        {/* Command Search Trigger */}
        <button
          onClick={onOpenCommandPalette}
          className="hidden md:flex items-center space-x-3 px-3 py-1.5 rounded-xl bg-slate-100/80 hover:bg-slate-100 border border-slate-200 text-xs text-slate-500 transition-colors cursor-pointer"
        >
          <Search className="w-3.5 h-3.5 text-slate-400" />
          <span>Search Futuro AI...</span>
          <kbd className="px-1.5 py-0.5 rounded-md bg-white text-[10px] font-mono text-slate-400 border border-slate-200">
            ⌘ K
          </kbd>
        </button>

        {/* AI Copilot Button */}
        <Button
          variant="ai"
          size="sm"
          onClick={onToggleCopilot}
          leftIcon={<Sparkles className="w-3.5 h-3.5 text-violet-600" />}
        >
          <span>AI Copilot</span>
        </Button>

        {/* Quick Add Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowQuickAdd(!showQuickAdd)}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            title="Quick Add Action"
          >
            <Plus className="w-4 h-4" />
          </button>

          {showQuickAdd && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-2xl shadow-lg p-1.5 z-50 text-xs space-y-0.5 animate-in fade-in">
              <Link
                href="/roadmap"
                onClick={() => setShowQuickAdd(false)}
                className="flex items-center space-x-2 px-3 py-2 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              >
                <Target className="w-4 h-4 text-indigo-600" />
                <span>+ New Milestone Goal</span>
              </Link>
              <Link
                href="/calendar"
                onClick={() => setShowQuickAdd(false)}
                className="flex items-center space-x-2 px-3 py-2 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              >
                <Calendar className="w-4 h-4 text-amber-500" />
                <span>+ Schedule Study Event</span>
              </Link>
              <Link
                href="/resume?mode=builder"
                onClick={() => setShowQuickAdd(false)}
                className="flex items-center space-x-2 px-3 py-2 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              >
                <FileText className="w-4 h-4 text-indigo-600" />
                <span>+ Build Resume AI</span>
              </Link>
              <Link
                href="/resume?mode=analyze"
                onClick={() => setShowQuickAdd(false)}
                className="flex items-center space-x-2 px-3 py-2 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              >
                <FileText className="w-4 h-4 text-cyan-600" />
                <span>+ Scan Resume ATS</span>
              </Link>
            </div>
          )}
        </div>

        {/* Notifications Button */}
        <button
          onClick={onToggleNotifications}
          className="relative p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-violet-600" />
        </button>

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center space-x-2 p-1 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-2xs">
              {user?.name ? user.name.charAt(0) : 'H'}
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
          </button>

          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-2xl shadow-lg p-1.5 z-50 text-xs space-y-0.5 animate-in fade-in">
              <Link
                href="/profile"
                onClick={() => setShowUserMenu(false)}
                className="flex items-center space-x-2 px-3 py-2 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              >
                <User className="w-4 h-4 text-slate-500" />
                <span>Profile & Identity</span>
              </Link>
              <button
                onClick={() => {
                  setShowUserMenu(false);
                  logout();
                }}
                className="w-full flex items-center space-x-2 px-3 py-2 rounded-xl text-rose-600 hover:bg-rose-50 cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
