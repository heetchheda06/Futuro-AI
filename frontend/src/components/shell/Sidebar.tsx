'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Compass,
  Zap,
  Target,
  FileText,
  MessageSquare,
  GraduationCap,
  Briefcase,
  Layers,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  User,
  Calendar,
  Flame,
  Search,
  BookOpen,
  MapPin,
  Newspaper,
  Users,
  Building2,
  ChevronDown
} from 'lucide-react';
import { Badge } from '../ui/Badge';
import { useAuth } from '../../context/AuthContext';

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
}

interface NavGroup {
  groupName: string;
  items: NavItem[];
}

export function Sidebar() {
  const { user } = useAuth();
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    HOME: true,
    CAREER: true,
    'AI TOOLS': true,
    LEARNING: true,
    DISCOVER: true,
    PRODUCTIVITY: true,
  });

  const toggleGroup = (groupName: string) => {
    setOpenGroups((prev) => ({ ...prev, [groupName]: !prev[groupName] }));
  };

  const navGroups: NavGroup[] = [
    {
      groupName: 'HOME',
      items: [{ label: 'Dashboard', href: '/dashboard', icon: Home }],
    },
    {
      groupName: 'CAREER',
      items: [
        { label: 'Career Navigator', href: '/career-navigator', icon: Compass },
        { label: 'Skill Graph', href: '/career-graph', icon: Layers },
        { label: 'Recommendations', href: '/recommendations', icon: Sparkles },
        { label: 'Roadmap', href: '/roadmap', icon: Target },
        { label: 'Skill Gap', href: '/skill-gap', icon: Zap },
      ],
    },
    {
      groupName: 'AI TOOLS',
      items: [
        { label: 'AI Career Hub', href: '/ai-career-hub', icon: Zap, badge: 'Core' },
        { label: 'AI Interviewer', href: '/ai-interviewer', icon: MessageSquare },
        { label: 'Resume AI', href: '/resume', icon: FileText },
        { label: 'Learning Tutor', href: '/learning-helper', icon: GraduationCap },
        { label: 'Futuro Communicate', href: '/english-helper', icon: MessageSquare },
        { label: 'Project Generator', href: '/ai-tools/project-generator', icon: Layers },
      ],
    },
    {
      groupName: 'LEARNING',
      items: [
        { label: 'Courses', href: '/courses', icon: GraduationCap },
        { label: 'Ebook Library', href: '/ebooks', icon: BookOpen },
        { label: 'Interview Prep', href: '/interview-prep', icon: Briefcase },
        { label: 'Study Spaces', href: '/study-spaces', icon: MapPin },
      ],
    },
    {
      groupName: 'DISCOVER',
      items: [
        { label: 'Career Updates', href: '/career-updates', icon: Flame, badge: 'Pulse' },
        { label: 'News', href: '/news', icon: Newspaper },
        { label: 'Community', href: '/community', icon: Users },
        { label: 'Mentors', href: '/mentors', icon: Users },
        { label: 'Colleges', href: '/colleges', icon: Building2 },
      ],
    },
    {
      groupName: 'PRODUCTIVITY',
      items: [
        { label: 'Planner', href: '/calendar', icon: Calendar },
        { label: 'Profile Identity', href: '/profile', icon: User },
      ],
    },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen bg-white border-r border-slate-200 shadow-xs transition-all duration-300 flex flex-col justify-between select-none ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Brand Header */}
      <div>
        <div className="h-16 px-4 flex items-center justify-between border-b border-slate-200">
          <Link href="/dashboard" className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-extrabold text-sm shadow-xs shadow-indigo-500/20">
              F
            </div>
            {!isCollapsed && (
              <span className="text-base font-black tracking-tight text-slate-900 font-outfit">
                Futuro <span className="text-indigo-600 font-bold">AI</span>
              </span>
            )}
          </Link>

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation List */}
        <div className="p-3 space-y-4 overflow-y-auto max-h-[calc(100vh-8rem)]">
          {navGroups.map((group) => {
            const isOpen = openGroups[group.groupName] !== false;
            return (
              <div key={group.groupName} className="space-y-1">
                {!isCollapsed && (
                  <button
                    onClick={() => toggleGroup(group.groupName)}
                    className="w-full flex items-center justify-between px-2.5 py-1 text-[10px] font-bold text-slate-500 uppercase tracking-wider hover:text-slate-800 transition-colors cursor-pointer"
                  >
                    <span>{group.groupName}</span>
                    <ChevronDown
                      className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-0' : '-rotate-90'}`}
                    />
                  </button>
                )}

                {(isOpen || isCollapsed) && (
                  <div className="space-y-0.5">
                    {group.items.map((item) => {
                      const isActive = pathname === item.href;
                      const Icon = item.icon;

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`relative flex items-center space-x-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-150 ${
                            isActive
                              ? 'bg-violet-50 text-indigo-700 font-bold shadow-2xs'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                          } ${isCollapsed ? 'justify-center px-0' : ''}`}
                          title={isCollapsed ? item.label : undefined}
                        >
                          {/* Active Left Indicator */}
                          {isActive && (
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-indigo-600 rounded-r-full" />
                          )}
                          <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                          {!isCollapsed && <span className="truncate">{item.label}</span>}
                          {!isCollapsed && item.badge && (
                            <span className="ml-auto px-1.5 py-0.5 rounded-full text-[9px] font-extrabold bg-violet-100 text-violet-700 border border-violet-200">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Profile Mini Summary */}
      {!isCollapsed && (
        <div className="p-3 border-t border-slate-200 bg-slate-50/50">
          <Link href="/profile" className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-white transition-colors">
            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-2xs overflow-hidden shrink-0">
              {user?.profileImage ? (
                <img src={user.profileImage} alt={user.name || 'User'} className="w-full h-full object-cover" />
              ) : (
                user?.name ? user.name.charAt(0).toUpperCase() : 'U'
              )}
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-xs font-bold text-slate-900 truncate block">{user?.name || 'User'}</span>
              <span className="text-[10px] text-slate-500 truncate block">{user?.targetCareer || 'Career Explorer'}</span>
            </div>
          </Link>
        </div>
      )}
    </aside>
  );
}
