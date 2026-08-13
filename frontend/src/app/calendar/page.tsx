'use client';

import React, { useState } from 'react';
import { AppShell } from '../../components/shell/AppShell';
import { useAuth } from '../../context/AuthContext';
import {
  Calendar as CalendarIcon,
  Sparkles,
  Plus,
  Clock,
  Flame,
  CheckCircle2,
  Trash2,
  Send,
  Bot,
  Zap
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { DataSourceBadge } from '../../components/ui/DataSourceBadge';

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
  const [nlInput, setNlInput] = useState('');
  const [parsing, setParsing] = useState(false);
  const [energyLevel, setEnergyLevel] = useState<'Morning Focus' | 'Mid-Day' | 'Evening Flow'>('Morning Focus');

  const [events, setEvents] = useState<CalendarEventItem[]>([
    {
      id: 'e-1',
      title: 'Vector Search Indexing Lab & Lab Prep',
      category: 'Study',
      date: '2026-08-14',
      time: '09:00 AM (High Focus Slot)',
      isCompleted: false,
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

  const smartSuggestions = [
    {
      title: 'Best Time To Study (Algorithms & System Design)',
      recommendedSlot: 'Tomorrow, 08:30 AM - 10:00 AM',
      reasoning: 'Matches your peak cognitive focus window before daily meeting schedules.',
      category: 'Study',
    },
    {
      title: 'Best Time To Practice (AI Mock Interview)',
      recommendedSlot: 'Friday, 06:30 PM - 07:30 PM',
      reasoning: 'Zero calendar conflicts identified across your upcoming 48 hours.',
      category: 'Interview',
    },
    {
      title: 'Best Time For Coding (Project Blueprint Implementation)',
      recommendedSlot: 'Saturday, 10:00 AM - 01:00 PM',
      reasoning: 'Extended 3-hour deep work window for unbroken code flow.',
      category: 'Project',
    },
  ];

  const handleNlSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nlInput.trim()) return;

    setParsing(true);
    setTimeout(() => {
      const newEvt: CalendarEventItem = {
        id: `e-${Date.now()}`,
        title: nlInput.length > 35 ? nlInput.substring(0, 35) + '...' : nlInput,
        category: nlInput.toLowerCase().includes('interview')
          ? 'Interview'
          : nlInput.toLowerCase().includes('project')
          ? 'Project'
          : 'Study',
        date: new Date().toISOString().split('T')[0],
        time: '09:00 AM (AI Energy Slot)',
        isCompleted: false,
      };
      setEvents((prev) => [newEvt, ...prev]);
      setNlInput('');
      setParsing(false);
    }, 600);
  };

  const handleAddSuggestion = (sug: any) => {
    const newEvt: CalendarEventItem = {
      id: `e-${Date.now()}`,
      title: sug.title,
      category: sug.category as any,
      date: new Date().toISOString().split('T')[0],
      time: sug.recommendedSlot,
      isCompleted: false,
    };
    setEvents((prev) => [newEvt, ...prev]);
  };

  const toggleEvent = (id: string) => {
    setEvents((prev) =>
      prev.map((e) => (e.id === id ? { ...e, isCompleted: !e.isCompleted } : e))
    );
  };

  const deleteEvent = (id: string) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Badge variant="amber" size="sm" icon={<CalendarIcon className="w-3.5 h-3.5" />}>
                Smart AI Scheduler
              </Badge>
              <DataSourceBadge isLive={true} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-outfit mt-1">
              Futuro Planner & Energy-Aware Scheduler
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Schedule study blocks, mock interview drills, and project milestones optimized for your energy levels.
            </p>
          </div>

          <div className="flex items-center space-x-2 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 text-amber-700 text-xs font-bold">
            <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>7-Day Study Streak Active</span>
          </div>
        </div>

        {/* Natural Language AI Scheduler Form */}
        <Card variant="glowing" className="p-5 bg-gradient-to-r from-amber-50/70 via-white to-violet-50/50 border-amber-200">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2 text-amber-700 text-xs font-bold uppercase tracking-wider">
              <Bot className="w-4 h-4" />
              <span>Natural Language AI Event Parser</span>
            </div>

            {/* Energy Level Selector */}
            <div className="flex items-center space-x-1 text-xs">
              <span className="text-slate-500 text-[10px] mr-1">Energy Mode:</span>
              {(['Morning Focus', 'Mid-Day', 'Evening Flow'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setEnergyLevel(m)}
                  className={`px-2.5 py-0.5 rounded-lg text-[10px] font-semibold transition-colors cursor-pointer ${
                    energyLevel === m
                      ? 'bg-amber-500 text-white font-bold'
                      : 'bg-slate-100 text-slate-600'
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
              placeholder="e.g. Schedule mock interview preparation tomorrow at 7 PM..."
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
              <span>AI Schedule</span>
            </Button>
          </form>
        </Card>

        {/* Scheduled Events List */}
        <div>
          <h3 className="text-sm font-bold text-slate-900 font-outfit mb-3">
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
      </div>
    </AppShell>
  );
}
