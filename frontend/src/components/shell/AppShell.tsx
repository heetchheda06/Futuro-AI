'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { CommandPalette } from './CommandPalette';
import { FuturoCopilot } from './FuturoCopilot';
import { NotificationCenter } from './NotificationCenter';
import {
  LayoutDashboard,
  Compass,
  GraduationCap,
  Bot,
  User,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const pathname = usePathname();
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  // Global keyboard shortcut (⌘K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const mobileNavItems = [
    { label: 'Home', href: '/dashboard', icon: LayoutDashboard },
    { label: 'Career', href: '/career-navigator', icon: Compass },
    { label: 'AI Tools', href: '/ai-career-hub', icon: Bot },
    { label: 'Learn', href: '/courses', icon: GraduationCap },
    { label: 'Profile', href: '/profile', icon: User },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex select-none">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300 lg:pl-64">
        {/* Top Bar */}
        <TopBar
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
          onToggleCopilot={() => setIsCopilotOpen((prev) => !prev)}
          onToggleNotifications={() => setIsNotificationsOpen((prev) => !prev)}
        />

        {/* Page Body Container */}
        <main className="flex-1 pb-20 lg:pb-8">
          {children}
        </main>
      </div>

      {/* Floating AI Copilot Button */}
      {!isCopilotOpen && (
        <button
          onClick={() => setIsCopilotOpen(true)}
          className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-40 flex items-center space-x-2 px-4 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-md shadow-indigo-500/20 active:scale-95 transition-all cursor-pointer border border-indigo-500 group"
          title="Open Futuro AI Copilot"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <Bot className="w-4 h-4" />
          <span className="hidden sm:inline">Ask Futuro AI</span>
        </button>
      )}

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />

      {/* AI Copilot Side Drawer */}
      <FuturoCopilot
        isOpen={isCopilotOpen}
        onClose={() => setIsCopilotOpen(false)}
      />

      {/* Notification Center Flyout */}
      <NotificationCenter
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
      />

      {/* Mobile Bottom Navigation Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-2 flex justify-around items-center shadow-md">
        {mobileNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl text-[10px] font-medium transition-colors ${
                isActive
                  ? 'text-indigo-600 font-bold'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Icon className={`w-5 h-5 mb-0.5 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
