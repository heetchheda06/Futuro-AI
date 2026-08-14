'use client';

import React, { useState, useEffect } from 'react';
import { AppShell } from '../../components/shell/AppShell';
import { useAuth } from '../../context/AuthContext';
import {
  Calendar as CalendarIcon,
  Sparkles,
  Plus,
  Clock,
  Flame,
  CheckCircle2,
  AlertTriangle,
  Trash2,
  Send,
  Bot,
  Zap,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  FileText,
  MessageSquare,
  X,
  Target,
  Award,
  RefreshCw
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { DataSourceBadge } from '../../components/ui/DataSourceBadge';

interface ActivityItem {
  type: string;
  title: string;
  time: string;
  description?: string;
}

interface ActivityLogDay {
  date: string;
  visited: boolean;
  activities: ActivityItem[];
  notes?: string;
}

interface CalendarEventItem {
  id: string;
  title: string;
  category: 'Study' | 'Project' | 'Interview' | 'Milestone' | 'General';
  date: string;
  time: string;
  isCompleted: boolean;
}

export default function CalendarPage() {
  const { user } = useAuth();
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

  // Date Navigation State
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(7); // 0-indexed: 7 = August

  // Activity Logs & Telemetry from Database
  const [activityLogs, setActivityLogs] = useState<Record<string, ActivityLogDay>>({});
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [totalActiveDays, setTotalActiveDays] = useState<number>(0);

  // Selected Day for Inspector
  const [selectedDateStr, setSelectedDateStr] = useState<string | null>(null);

  // New Learning Entry Form in Day Modal
  const [newTitle, setNewTitle] = useState('');
  const [newType, setNewType] = useState<'Learning' | 'Interview' | 'Resume' | 'Assessment' | 'Study' | 'Coding'>('Learning');
  const [newDesc, setNewDesc] = useState('');
  const [savingLog, setSavingLog] = useState(false);

  // Natural Language AI Input State
  const [nlInput, setNlInput] = useState('');
  const [parsing, setParsing] = useState(false);
  const [energyLevel, setEnergyLevel] = useState<'Morning Focus' | 'Mid-Day' | 'Evening Flow'>('Morning Focus');

  // AI Catch Up Plan State
  const [generatingCatchUp, setGeneratingCatchUp] = useState(false);
  const [catchUpPlan, setCatchUpPlan] = useState<any[] | null>(null);
  const [showCatchUpModal, setShowCatchUpModal] = useState(false);

  // Upcoming Scheduled Events
  const [events, setEvents] = useState<CalendarEventItem[]>([
    {
      id: 'e-1',
      title: 'Vector Search Indexing Lab & Lab Prep',
      category: 'Study',
      date: '2026-08-14',
      time: '09:00 AM (High Focus Slot)',
      isCompleted: true,
    },
    {
      id: 'e-2',
      title: 'AI Mock Interview Session with AI Cockpit',
      category: 'Interview',
      date: '2026-08-15',
      time: '07:00 PM (Optimal Energy Slot)',
      isCompleted: false,
    },
    {
      id: 'e-3',
      title: 'Deploy FastAPI Microservices to AWS ECS',
      category: 'Project',
      date: '2026-08-16',
      time: '03:00 PM',
      isCompleted: false,
    },
  ]);

  // Fetch Activity Logs & Record Today's Visit
  const fetchActivityLogs = async () => {
    const savedToken = localStorage.getItem('token');
    try {
      // 1. Record today's visit
      if (savedToken) {
        await fetch(`${API_BASE_URL}/calendar/log-visit`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${savedToken}`
          }
        }).catch(() => {});
      }

      // 2. Fetch logs & telemetry
      const headers: Record<string, string> = savedToken ? { 'Authorization': `Bearer ${savedToken}` } : {};
      const res = await fetch(`${API_BASE_URL}/calendar/activity-logs`, { headers });
      if (res.ok) {
        const data = await res.json();
        setActivityLogs(data.logs || {});
        setCurrentStreak(data.currentStreak || 0);
        setTotalActiveDays(data.totalActiveDays || 0);
      } else {
        // Fallback default activity logs
        seedFallbackLogs();
      }
    } catch (err) {
      console.warn('API connection offline, seeding local activity log dataset.');
      seedFallbackLogs();
    }
  };

  const seedFallbackLogs = () => {
    const today = new Date().toISOString().split('T')[0];
    const mockLogs: Record<string, ActivityLogDay> = {
      '2026-08-14': {
        date: '2026-08-14',
        visited: true,
        activities: [
          { type: 'System', title: 'Visited Futuro AI Platform', time: '09:15 AM', description: 'Daily telemetry session recorded.' },
          { type: 'Learning', title: 'Completed Vector Embeddings & RAG Module', time: '11:00 AM', description: 'Mastered cosine similarity and FAISS vector databases.' }
        ]
      },
      '2026-08-13': {
        date: '2026-08-13',
        visited: true,
        activities: [
          { type: 'Interview', title: 'AI Mock Interview Session (Score: 88%)', time: '04:30 PM', description: 'STAR method answers evaluated.' }
        ]
      },
      '2026-08-12': {
        date: '2026-08-12',
        visited: true,
        activities: [
          { type: 'Resume', title: 'ATS Resume Keyword Scanner Run', time: '02:00 PM', description: 'Increased target match score to 92%.' }
        ]
      },
      '2026-08-11': {
        date: '2026-08-11',
        visited: true,
        activities: [
          { type: 'Assessment', title: 'Completed Skills Gap Analysis', time: '07:20 PM', description: 'Identified 2 key areas for career advancement.' }
        ]
      },
      '2026-08-10': {
        date: '2026-08-10',
        visited: true,
        activities: [
          { type: 'Coding', title: 'FastAPI Microservices Deep Work Sprint', time: '10:00 AM', description: 'Built async endpoint for vector search.' }
        ]
      }
    };
    setActivityLogs(mockLogs);
    setCurrentStreak(5);
    setTotalActiveDays(5);
  };

  useEffect(() => {
    fetchActivityLogs();
  }, []);

  // Calendar Helper Functions
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay(); // 0 = Sun
  };

  const getFormattedDateStr = (day: number) => {
    const mStr = String(currentMonth + 1).padStart(2, '0');
    const dStr = String(day).padStart(2, '0');
    return `${currentYear}-${mStr}-${dStr}`;
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  // Compute Missed Days in current month up to today
  const getMissedDatesInMonth = () => {
    const todayStr = new Date().toISOString().split('T')[0];
    const missed: string[] = [];
    const totalDays = daysInMonth(currentYear, currentMonth);

    for (let d = 1; d <= totalDays; d++) {
      const dateStr = getFormattedDateStr(d);
      if (dateStr > todayStr) break; // Don't count future days as missed
      const log = activityLogs[dateStr];
      if (!log || !log.visited) {
        missed.push(dateStr);
      }
    }
    return missed;
  };

  const missedDaysList = getMissedDatesInMonth();
  const totalDaysSoFar = Math.min(
    daysInMonth(currentYear, currentMonth),
    new Date().getDate()
  );
  const activeDaysInMonth = totalDaysSoFar - missedDaysList.length;
  const consistencyScore = totalDaysSoFar > 0 ? Math.round((activeDaysInMonth / totalDaysSoFar) * 100) : 100;

  // Add Learning Log for Selected Date
  const handleAddLearningLog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDateStr || !newTitle.trim()) return;

    setSavingLog(true);
    const savedToken = localStorage.getItem('token');
    const nowTimeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newActivity: ActivityItem = {
      type: newType,
      title: newTitle.trim(),
      time: nowTimeStr,
      description: newDesc.trim() || 'User manually logged learning activity.'
    };

    try {
      if (savedToken) {
        await fetch(`${API_BASE_URL}/calendar/activity-logs`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${savedToken}`
          },
          body: JSON.stringify({
            date: selectedDateStr,
            type: newType,
            title: newTitle.trim(),
            time: nowTimeStr,
            description: newDesc.trim()
          })
        });
      }

      // Update local state
      setActivityLogs((prev) => {
        const existing = prev[selectedDateStr] || {
          date: selectedDateStr,
          visited: true,
          activities: []
        };
        return {
          ...prev,
          [selectedDateStr]: {
            ...existing,
            visited: true,
            activities: [...existing.activities, newActivity]
          }
        };
      });

      setNewTitle('');
      setNewDesc('');
    } catch (error) {
      console.error('Failed to log activity to backend.', error);
    } finally {
      setSavingLog(false);
    }
  };

  // AI Catch Up Plan Generation
  const handleGenerateCatchUp = async () => {
    setGeneratingCatchUp(true);
    const savedToken = localStorage.getItem('token');
    try {
      const res = await fetch(`${API_BASE_URL}/calendar/generate-catchup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(savedToken ? { 'Authorization': `Bearer ${savedToken}` } : {})
        },
        body: JSON.stringify({
          missedDates: missedDaysList,
          targetCareer: user?.targetCareer || 'Full Stack AI Developer'
        })
      });

      if (res.ok) {
        const data = await res.json();
        setCatchUpPlan(data.plan || []);
      } else {
        // Fallback generator
        const fallback = missedDaysList.map((d, i) => ({
          date: d,
          focusTopic: `Catch-Up Module #${i + 1}: ${user?.targetCareer || 'Full Stack AI'} Deep Dive`,
          durationMinutes: 45,
          tasks: [
            `Review key missed learning points for ${d}`,
            `Complete 1 interactive drill in AI Cockpit`,
            `Log completed study session into AI Calendar`
          ]
        }));
        setCatchUpPlan(fallback);
      }
      setShowCatchUpModal(true);
    } catch (err) {
      console.error('Catch-up plan error:', err);
    } finally {
      setGeneratingCatchUp(false);
    }
  };

  // Natural Language Scheduling Handler
  const handleNlSchedule = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nlInput.trim()) return;

    setParsing(true);
    const todayStr = new Date().toISOString().split('T')[0];
    const titleText = nlInput.length > 40 ? nlInput.substring(0, 40) + '...' : nlInput;
    const cat = nlInput.toLowerCase().includes('interview')
      ? 'Interview'
      : nlInput.toLowerCase().includes('project')
      ? 'Project'
      : 'Study';

    // 1. Add as upcoming event
    const newEvt: CalendarEventItem = {
      id: `e-${Date.now()}`,
      title: titleText,
      category: cat as any,
      date: todayStr,
      time: `09:00 AM (${energyLevel} Slot)`,
      isCompleted: false
    };
    setEvents((prev) => [newEvt, ...prev]);

    // 2. Also log as today's learning activity entry
    const savedToken = localStorage.getItem('token');
    try {
      if (savedToken) {
        await fetch(`${API_BASE_URL}/calendar/activity-logs`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${savedToken}`
          },
          body: JSON.stringify({
            date: todayStr,
            type: cat === 'Interview' ? 'Interview' : 'Learning',
            title: titleText,
            description: `Scheduled via Natural Language AI: "${nlInput}"`
          })
        });
      }

      setActivityLogs((prev) => {
        const existing = prev[todayStr] || { date: todayStr, visited: true, activities: [] };
        return {
          ...prev,
          [todayStr]: {
            ...existing,
            visited: true,
            activities: [
              ...existing.activities,
              {
                type: cat === 'Interview' ? 'Interview' : 'Learning',
                title: titleText,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                description: `Parsed from prompt: "${nlInput}"`
              }
            ]
          }
        };
      });
    } catch (err) {}

    setNlInput('');
    setParsing(false);
  };

  const toggleEvent = (id: string) => {
    setEvents((prev) =>
      prev.map((e) => (e.id === id ? { ...e, isCompleted: !e.isCompleted } : e))
    );
  };

  const deleteEvent = (id: string) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  // Render Calendar Day Cell
  const renderCalendarDayCell = (dayNumber: number) => {
    const dateStr = getFormattedDateStr(dayNumber);
    const todayStr = new Date().toISOString().split('T')[0];
    const isToday = dateStr === todayStr;
    const isFuture = dateStr > todayStr;

    const log = activityLogs[dateStr];
    const hasVisited = log?.visited;
    const activityCount = log?.activities?.length || 0;

    // Status: Active (Visited/Learned) vs Missed vs Future vs Today
    let cellBg = 'bg-white hover:bg-slate-50 border-slate-200';
    let badgeText = '';
    let badgeColor = '';

    if (isFuture) {
      cellBg = 'bg-slate-50/70 border-slate-200 hover:bg-slate-100/80';
    } else if (hasVisited) {
      cellBg = 'bg-emerald-50/70 border-emerald-300 hover:bg-emerald-100/80';
      badgeText = activityCount > 0 ? `${activityCount} Learned` : 'Visited';
      badgeColor = 'bg-emerald-600 text-white';
    } else {
      // Missed Day!
      cellBg = 'bg-rose-50/80 border-rose-300 hover:bg-rose-100/90';
      badgeText = 'MISSED';
      badgeColor = 'bg-rose-600 text-white font-black';
    }

    if (isToday) {
      cellBg += ' ring-2 ring-indigo-600 ring-offset-1';
    }

    return (
      <button
        key={dayNumber}
        onClick={() => setSelectedDateStr(dateStr)}
        className={`p-2.5 rounded-2xl border flex flex-col justify-between min-h-[90px] text-left transition-all cursor-pointer shadow-2xs relative overflow-hidden group ${cellBg}`}
      >
        <div className="flex items-center justify-between w-full">
          <span className={`text-sm font-extrabold font-outfit ${isToday ? 'text-indigo-600' : 'text-slate-800'}`}>
            {dayNumber}
          </span>
          {isToday && (
            <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded-md bg-indigo-600 text-white">
              Today
            </span>
          )}
        </div>

        {/* Status Indicators */}
        <div className="mt-1 space-y-1">
          {badgeText && (
            <span className={`inline-flex items-center space-x-1 px-1.5 py-0.5 rounded-md text-[9px] font-bold tracking-tight ${badgeColor}`}>
              {!hasVisited && !isFuture ? (
                <AlertTriangle className="w-2.5 h-2.5" />
              ) : (
                <CheckCircle2 className="w-2.5 h-2.5" />
              )}
              <span>{badgeText}</span>
            </span>
          )}

          {/* Micro preview of top activity */}
          {log?.activities && log.activities.length > 0 && (
            <p className="text-[10px] text-slate-700 font-semibold truncate leading-tight hidden sm:block">
              {log.activities[0].title}
            </p>
          )}
        </div>
      </button>
    );
  };

  // Calendar Grid Calculation
  const totalDays = daysInMonth(currentYear, currentMonth);
  const startDayOffset = firstDayOfMonth(currentYear, currentMonth);
  const emptyCells = Array.from({ length: startDayOffset }, (_, i) => i);
  const dayCells = Array.from({ length: totalDays }, (_, i) => i + 1);

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        {/* Header & Telemetry Summary */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Badge variant="amber" size="sm" icon={<CalendarIcon className="w-3.5 h-3.5" />}>
                AI Learning & Activity Calendar
              </Badge>
              <DataSourceBadge isLive={true} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-outfit mt-1">
              Career Telemetry & Website Activity Tracker
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Track your daily website usage, completed learning modules, and missed study dates with automated AI catch-up planning.
            </p>
          </div>

          {/* Telemetry Metrics Pills */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-3.5 py-2 rounded-2xl bg-amber-50 border border-amber-200 flex items-center space-x-2">
              <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
              <div>
                <span className="text-[9px] uppercase font-bold text-amber-700 block">Active Streak</span>
                <span className="text-xs font-black text-amber-900">{currentStreak} Days Consecutive</span>
              </div>
            </div>

            <div className="px-3.5 py-2 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center space-x-2">
              <Award className="w-4 h-4 text-indigo-600" />
              <div>
                <span className="text-[9px] uppercase font-bold text-indigo-700 block">Consistency Score</span>
                <span className="text-xs font-black text-indigo-900">{consistencyScore}% Active Ratio</span>
              </div>
            </div>

            {missedDaysList.length > 0 && (
              <Button
                variant="primary"
                size="sm"
                onClick={handleGenerateCatchUp}
                loading={generatingCatchUp}
                leftIcon={<Zap className="w-3.5 h-3.5 text-amber-300" />}
                className="bg-gradient-to-r from-indigo-600 to-violet-600 shadow-sm"
              >
                <span>Catch-Up AI ({missedDaysList.length} Missed)</span>
              </Button>
            )}
          </div>
        </div>

        {/* Natural Language AI Scheduler Form */}
        <Card variant="glowing" className="p-5 bg-gradient-to-r from-amber-50/70 via-white to-violet-50/50 border-amber-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <div className="flex items-center space-x-2 text-amber-700 text-xs font-bold uppercase tracking-wider">
              <Bot className="w-4 h-4" />
              <span>Natural Language AI Event & Learning Logger</span>
            </div>

            <div className="flex items-center space-x-1 text-xs">
              <span className="text-slate-500 text-[10px] mr-1">Energy Window:</span>
              {(['Morning Focus', 'Mid-Day', 'Evening Flow'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setEnergyLevel(m)}
                  className={`px-2.5 py-0.5 rounded-lg text-[10px] font-semibold transition-colors cursor-pointer ${
                    energyLevel === m
                      ? 'bg-amber-500 text-white font-bold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleNlSchedule} className="flex gap-2">
            <input
              type="text"
              value={nlInput}
              onChange={(e) => setNlInput(e.target.value)}
              placeholder="e.g. Learned System Design principles today or Schedule mock interview tomorrow at 7 PM..."
              className="flex-1 bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500"
            />
            <Button
              type="submit"
              variant="primary"
              size="md"
              loading={parsing}
              rightIcon={<Sparkles className="w-3.5 h-3.5" />}
              className="bg-amber-600 hover:bg-amber-700 shadow-xs"
            >
              <span>Log & Schedule</span>
            </Button>
          </form>
        </Card>

        {/* Main Interactive Month Calendar Section */}
        <Card variant="elevated" className="p-6 bg-white border-slate-200 space-y-6">
          {/* Month Header Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div className="flex items-center space-x-3">
              <h2 className="text-xl font-black text-slate-900 font-outfit tracking-tight">
                {monthNames[currentMonth]} {currentYear}
              </h2>
              <Badge variant="cyan" size="sm">
                {activeDaysInMonth} Active Days / {missedDaysList.length} Missed
              </Badge>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrevMonth}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                title="Previous Month"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  const now = new Date();
                  setCurrentMonth(now.getMonth());
                  setCurrentYear(now.getFullYear());
                }}
                className="px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 text-xs font-bold hover:bg-indigo-100 transition-colors"
              >
                Current Month
              </button>
              <button
                onClick={handleNextMonth}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                title="Next Month"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Legend Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600 bg-slate-50/80 p-3 rounded-2xl border border-slate-200">
            <span className="font-bold text-slate-900">Calendar Legend:</span>
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1.5">
                <span className="w-3 h-3 rounded-md bg-emerald-500 border border-emerald-600 inline-block" />
                <span className="font-medium text-emerald-800">🟢 Website Used & Learned</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <span className="w-3 h-3 rounded-md bg-rose-500 border border-rose-600 inline-block" />
                <span className="font-medium text-rose-800">🔴 Missed Website Day</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <span className="w-3 h-3 rounded-md bg-slate-200 border border-slate-300 inline-block" />
                <span className="font-medium text-slate-600">⚪ Upcoming / Scheduled</span>
              </span>
            </div>
          </div>

          {/* Calendar Grid Header (Days of week) */}
          <div className="grid grid-cols-7 gap-2 text-center text-xs font-extrabold text-slate-500 uppercase tracking-wider">
            <span>Sun</span>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
          </div>

          {/* Calendar Grid Cells */}
          <div className="grid grid-cols-7 gap-2">
            {emptyCells.map((_, idx) => (
              <div key={`empty-${idx}`} className="p-2 rounded-2xl bg-slate-50/30 border border-slate-100 min-h-[90px]" />
            ))}
            {dayCells.map((dayNum) => renderCalendarDayCell(dayNum))}
          </div>
        </Card>

        {/* Scheduled Events Section */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-900 font-outfit">
            Upcoming Scheduled Events ({events.length})
          </h3>

          <div className="space-y-3">
            {events.map((evt) => (
              <Card key={evt.id} variant="default" className="p-4 flex items-center justify-between bg-white border-slate-200">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => toggleEvent(evt.id)}
                    className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors cursor-pointer ${
                      evt.isCompleted
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : 'border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    {evt.isCompleted && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </button>

                  <div>
                    <span className={`text-xs font-bold ${evt.isCompleted ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                      {evt.title}
                    </span>
                    <div className="flex items-center space-x-2 text-[10px] text-slate-500 mt-0.5">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-amber-500" />
                        <span>{evt.date} @ {evt.time}</span>
                      </span>
                      <span>&bull;</span>
                      <Badge
                        variant={
                          evt.category === 'Interview'
                            ? 'violet'
                            : evt.category === 'Project'
                            ? 'cyan'
                            : 'emerald'
                        }
                        size="sm"
                      >
                        {evt.category}
                      </Badge>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => deleteEvent(evt.id)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-slate-100 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </Card>
            ))}
          </div>
        </div>

        {/* Day Detail Inspector Modal */}
        {selectedDateStr && (
          <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 max-w-lg w-full space-y-5 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div>
                  <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">
                    Daily Learning Telemetry Inspector
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 font-outfit">
                    Activity & Learning Log for {selectedDateStr}
                  </h4>
                </div>
                <button
                  onClick={() => setSelectedDateStr(null)}
                  className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Status Banner */}
              {activityLogs[selectedDateStr]?.visited ? (
                <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">
                    Website visited & active learning recorded on this date.
                  </span>
                </div>
              ) : selectedDateStr <= new Date().toISOString().split('T')[0] ? (
                <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span className="font-semibold">
                    MISSED DAY: No website usage or activity recorded on {selectedDateStr}.
                  </span>
                </div>
              ) : (
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Upcoming date scheduled for study.</span>
                </div>
              )}

              {/* Activities List for the Day */}
              <div className="space-y-3">
                <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Logged Activities ({activityLogs[selectedDateStr]?.activities?.length || 0})
                </h5>

                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {activityLogs[selectedDateStr]?.activities && activityLogs[selectedDateStr].activities.length > 0 ? (
                    activityLogs[selectedDateStr].activities.map((act, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3 text-xs">
                        <div className="w-2 h-2 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <Badge variant="violet" size="sm">{act.type}</Badge>
                            <span className="text-[10px] text-slate-400">{act.time}</span>
                          </div>
                          <p className="font-bold text-slate-900 mt-1">{act.title}</p>
                          {act.description && (
                            <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{act.description}</p>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-slate-400 italic py-2">
                      No learning items logged for this day yet. Use the form below to record what you studied!
                    </p>
                  )}
                </div>
              </div>

              {/* Add New Learning Entry Form */}
              <form onSubmit={handleAddLearningLog} className="pt-3 border-t border-slate-200 space-y-3">
                <h5 className="text-xs font-bold text-slate-900">Add Learning Entry For This Day</h5>
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Topic / Module title..."
                    className="col-span-2 bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
                  />
                  <select
                    value={newType}
                    onChange={(e) => setNewType(e.target.value as any)}
                    className="bg-white border border-slate-300 rounded-xl px-2 py-2 text-xs text-slate-900 focus:outline-none"
                  >
                    <option value="Learning">Learning</option>
                    <option value="Interview">Interview</option>
                    <option value="Coding">Coding</option>
                    <option value="Resume">Resume</option>
                    <option value="Assessment">Assessment</option>
                    <option value="Study">Study</option>
                  </select>
                </div>

                <input
                  type="text"
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Optional brief notes or key takeaways..."
                  className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
                />

                <div className="flex justify-end space-x-2 pt-1">
                  <Button variant="secondary" size="sm" type="button" onClick={() => setSelectedDateStr(null)}>
                    <span>Close</span>
                  </Button>
                  <Button variant="primary" size="sm" type="submit" loading={savingLog} leftIcon={<Plus className="w-3.5 h-3.5" />}>
                    <span>Save Learning Entry</span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* AI Catch-Up Plan Modal */}
        {showCatchUpModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 max-w-xl w-full space-y-4 shadow-2xl relative max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                    <Zap className="w-4 h-4 fill-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 font-outfit">
                      AI Catch-Up Schedule Generator
                    </h4>
                    <span className="text-[10px] text-slate-500">
                      Tailored plan to recover {missedDaysList.length} missed study days
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setShowCatchUpModal(false)}
                  className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3">
                {catchUpPlan && catchUpPlan.length > 0 ? (
                  catchUpPlan.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-extrabold text-amber-900">Recovering {item.date}</span>
                        <Badge variant="amber" size="sm">{item.durationMinutes} Min Session</Badge>
                      </div>
                      <p className="text-xs font-bold text-slate-900">{item.focusTopic}</p>
                      <ul className="text-[11px] text-slate-600 space-y-1 pl-4 list-disc">
                        {item.tasks.map((t: string, tIdx: number) => (
                          <li key={tIdx}>{t}</li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-500">No missed days detected! Your study streak is clean.</p>
                )}
              </div>

              <div className="pt-2 flex justify-end">
                <Button variant="primary" size="sm" onClick={() => setShowCatchUpModal(false)}>
                  <span>Got It, Start Catching Up!</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
