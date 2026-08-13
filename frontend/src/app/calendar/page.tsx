'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar as CalendarIcon, Plus, ChevronLeft, ChevronRight, 
  Sparkles, CheckCircle2, Circle, Clock, Flame, BookOpen, 
  Award, Trash2, Edit2, X, AlertCircle, RefreshCw
} from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface CalendarEventItem {
  id: string;
  title: string;
  description?: string;
  category: 'Study' | 'Project' | 'Interview' | 'Milestone' | 'General';
  date: string; // YYYY-MM-DD
  time?: string;
  durationMinutes?: number;
  isCompleted: boolean;
}

export default function AICalendarPage() {
  const { user } = useAuth();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<CalendarEventItem[]>([]);
  const [selectedDay, setSelectedDay] = useState<number>(new Date().getDate());
  
  // Event Modal
  const [showEventModal, setShowEventModal] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventCategory, setNewEventCategory] = useState<'Study' | 'Project' | 'Interview' | 'Milestone' | 'General'>('Study');
  const [newEventTime, setNewEventTime] = useState('10:00');
  const [newEventDescription, setNewEventDescription] = useState('');

  // AI Schedule Generator Modal
  const [showAiModal, setShowAiModal] = useState(false);
  const [aiGoal, setAiGoal] = useState('');
  const [aiDays, setAiDays] = useState(30);
  const [generatingAiSchedule, setGeneratingAiSchedule] = useState(false);
  const [streak, setStreak] = useState(7);

  // Initial Sample Events
  useEffect(() => {
    const savedEvents = localStorage.getItem('user_calendar_events');
    if (savedEvents) {
      try {
        setEvents(JSON.parse(savedEvents));
        return;
      } catch (e) {}
    }

    const todayStr = new Date().toISOString().split('T')[0];
    const initialEvents: CalendarEventItem[] = [
      {
        id: 'event-1',
        title: 'Deep Learning: Backprop Math Revision',
        description: 'Review matrix gradients and chain rule derivation for MLP layers.',
        category: 'Study',
        date: todayStr,
        time: '09:00',
        durationMinutes: 90,
        isCompleted: true
      },
      {
        id: 'event-2',
        title: 'Work on RAG AI Document Assistant Project',
        description: 'Complete chunking pipeline and pgvector embedding storage.',
        category: 'Project',
        date: todayStr,
        time: '14:00',
        durationMinutes: 120,
        isCompleted: false
      },
      {
        id: 'event-3',
        title: 'Mock Technical Interview Drill #2',
        description: 'Practice dynamic programming STAR framework with AI Coach.',
        category: 'Interview',
        date: todayStr,
        time: '17:30',
        durationMinutes: 45,
        isCompleted: false
      }
    ];

    setEvents(initialEvents);
    localStorage.setItem('user_calendar_events', JSON.stringify(initialEvents));
  }, []);

  const saveEvents = (updated: CalendarEventItem[]) => {
    setEvents(updated);
    localStorage.setItem('user_calendar_events', JSON.stringify(updated));
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEventTitle) return;

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(selectedDay).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;

    const newEvent: CalendarEventItem = {
      id: `event-${Date.now()}`,
      title: newEventTitle,
      description: newEventDescription,
      category: newEventCategory,
      date: dateStr,
      time: newEventTime,
      durationMinutes: 60,
      isCompleted: false
    };

    saveEvents([...events, newEvent]);
    setShowEventModal(false);
    setNewEventTitle('');
    setNewEventDescription('');
  };

  const handleToggleComplete = (id: string) => {
    const updated = events.map(ev => ev.id === id ? { ...ev, isCompleted: !ev.isCompleted } : ev);
    saveEvents(updated);
  };

  const handleDeleteEvent = (id: string) => {
    const updated = events.filter(ev => ev.id !== id);
    saveEvents(updated);
  };

  const handleGenerateAiPlan = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneratingAiSchedule(true);

    try {
      const res = await fetch(`${API_BASE_URL}/calendar/suggest-schedule`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          goal: aiGoal || `${user?.targetCareer || 'AWS Cloud'} Preparation`,
          timeframeDays: aiDays,
          dailyHours: 2
        })
      });

      if (res.ok) {
        const data = await res.json();
        const plan = data.suggestion?.weeklyPlan || [];
        
        // Convert weekly plan to concrete upcoming events
        const newAiEvents: CalendarEventItem[] = [];
        const baseDate = new Date();

        plan.forEach((wk: any, wIndex: number) => {
          wk.suggestedEvents?.forEach((sev: any, sIndex: number) => {
            const evDate = new Date(baseDate);
            evDate.setDate(baseDate.getDate() + (wIndex * 7) + (sIndex * 2));
            const dateStr = evDate.toISOString().split('T')[0];

            newAiEvents.push({
              id: `ai-plan-${Date.now()}-${wIndex}-${sIndex}`,
              title: sev.title,
              description: sev.description,
              category: sev.category || 'Study',
              date: dateStr,
              time: '10:00',
              durationMinutes: sev.durationMinutes || 60,
              isCompleted: false
            });
          });
        });

        saveEvents([...events, ...newAiEvents]);
        setShowAiModal(false);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setGeneratingAiSchedule(false);
    }
  };

  // Days in month calculation
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay(); // 0 = Sun

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const selectedDateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(selectedDay).padStart(2, '0')}`;
  const selectedDayEvents = events.filter(e => e.date === selectedDateStr);

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'Study': return 'bg-purple-50 text-[#635BFF] border-purple-200';
      case 'Project': return 'bg-cyan-50 text-cyan-700 border-cyan-200';
      case 'Interview': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Milestone': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Header Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-purple-50 text-[#635BFF] text-xs font-semibold mb-2 border border-purple-100">
              <CalendarIcon className="h-3.5 w-3.5" />
              <span>AI Productivity & Study Schedule</span>
            </div>
            <h1 className="font-outfit text-3xl font-extrabold text-slate-900 tracking-tight">
              AI Calendar & <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">Daily Focus</span>
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Organize study blocks, generate automated 30-day certification timelines with Gemini, and maintain your learning streak.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setShowAiModal(true)}
              className="px-4 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              <Sparkles className="h-4 w-4" />
              <span>Generate AI Study Plan</span>
            </button>
            <button
              type="button"
              onClick={() => setShowEventModal(true)}
              className="px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold shadow-xs transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              <Plus className="h-4 w-4 text-[#635BFF]" />
              <span>Add Event</span>
            </button>
          </div>
        </div>

        {/* Top Streak Meter & Widgets */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-rose-50 text-rose-500">
              <Flame className="h-6 w-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Streak</span>
              <div className="font-outfit font-extrabold text-2xl text-slate-900 leading-tight">
                {streak} <span className="text-sm font-semibold text-rose-500">Days Active 🔥</span>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-purple-50 text-[#635BFF]">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Today's Focus Time</span>
              <div className="font-outfit font-extrabold text-2xl text-slate-900 leading-tight">
                4.2 <span className="text-sm font-semibold text-slate-500">Hours Planned</span>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Tasks Completed</span>
              <div className="font-outfit font-extrabold text-2xl text-slate-900 leading-tight">
                {events.filter(e => e.isCompleted).length} / {events.length} <span className="text-sm font-semibold text-emerald-600">Done</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Calendar + Day Focus Split */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Month Calendar Grid (2 Cols) */}
          <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            {/* Month Header Navigation */}
            <div className="flex items-center justify-between">
              <h2 className="font-outfit text-xl font-extrabold text-slate-900">
                {monthNames[month]} {year}
              </h2>
              <div className="flex items-center space-x-1">
                <button
                  type="button"
                  onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
                  className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentDate(new Date())}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-bold text-slate-700 cursor-pointer"
                >
                  Today
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
                  className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Days of Week */}
            <div className="grid grid-cols-7 text-center text-xs font-bold text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-100">
              <span>Sun</span>
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
            </div>

            {/* Calendar Grid Cells */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2">
              {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                <div key={`empty-${i}`} className="h-20 sm:h-24 p-1 rounded-xl bg-slate-50/50" />
              ))}

              {Array.from({ length: daysInMonth }).map((_, i) => {
                const dayNum = i + 1;
                const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
                const dayEvents = events.filter(e => e.date === dateKey);
                const isSelected = selectedDay === dayNum;
                const isToday = new Date().getDate() === dayNum && new Date().getMonth() === month && new Date().getFullYear() === year;

                return (
                  <button
                    key={`day-${dayNum}`}
                    type="button"
                    onClick={() => setSelectedDay(dayNum)}
                    className={`h-20 sm:h-24 p-1.5 sm:p-2 rounded-xl text-left border transition-all flex flex-col justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-purple-50/60 border-[#635BFF] shadow-xs'
                        : 'bg-white border-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-bold ${
                        isToday ? 'px-1.5 py-0.2 rounded-full bg-[#635BFF] text-white' : isSelected ? 'text-[#635BFF]' : 'text-slate-700'
                      }`}>
                        {dayNum}
                      </span>
                      {dayEvents.length > 0 && (
                        <span className="text-[10px] font-bold text-slate-400">
                          {dayEvents.length}
                        </span>
                      )}
                    </div>

                    {/* Dot badges for events */}
                    <div className="space-y-1 overflow-hidden">
                      {dayEvents.slice(0, 2).map((ev) => (
                        <div
                          key={ev.id}
                          className={`text-[9px] font-bold px-1 py-0.2 rounded truncate ${getCategoryBadgeColor(ev.category)}`}
                        >
                          {ev.title}
                        </div>
                      ))}
                      {dayEvents.length > 2 && (
                        <span className="text-[8px] font-bold text-slate-400">+{dayEvents.length - 2} more</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Day Focus & Task Checklist */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h3 className="font-outfit text-base font-bold text-slate-900">
                    Day Schedule
                  </h3>
                  <p className="text-xs text-slate-500">
                    {monthNames[month]} {selectedDay}, {year}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowEventModal(true)}
                  className="p-1.5 rounded-lg bg-purple-50 text-[#635BFF] hover:bg-purple-100"
                  title="Add Event to Day"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              {/* Event List */}
              {selectedDayEvents.length > 0 ? (
                <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                  {selectedDayEvents.map((ev) => (
                    <div
                      key={ev.id}
                      className={`p-3 rounded-xl border transition-all flex items-start space-x-3 ${
                        ev.isCompleted ? 'bg-slate-50 border-slate-200 opacity-60' : 'bg-white border-slate-200'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => handleToggleComplete(ev.id)}
                        className="mt-0.5 text-slate-400 hover:text-emerald-600 transition-colors cursor-pointer"
                      >
                        {ev.isCompleted ? (
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        ) : (
                          <Circle className="h-4 w-4" />
                        )}
                      </button>

                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-1">
                          <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold border ${getCategoryBadgeColor(ev.category)}`}>
                            {ev.category}
                          </span>
                          <span className="text-[10px] text-slate-400 font-semibold">{ev.time}</span>
                        </div>
                        <h4 className={`text-xs font-bold text-slate-900 leading-snug ${ev.isCompleted ? 'line-through' : ''}`}>
                          {ev.title}
                        </h4>
                        {ev.description && (
                          <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                            {ev.description}
                          </p>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => handleDeleteEvent(ev.id)}
                        className="text-slate-300 hover:text-red-500 p-1 transition-colors"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <CalendarIcon className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                  <p className="text-xs text-slate-600 font-semibold">No tasks scheduled for this day</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Click "Add Event" or generate an AI study plan.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Add Event Modal */}
        <AnimatePresence>
          {showEventModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowEventModal(false)}
                className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white border border-slate-200 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative z-10 p-6 space-y-4"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="font-outfit text-base font-bold text-slate-900">Add Calendar Task</h3>
                  <button onClick={() => setShowEventModal(false)} className="text-slate-400 hover:text-slate-600">
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <form onSubmit={handleAddEvent} className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Task Title:</label>
                    <input
                      type="text"
                      required
                      value={newEventTitle}
                      onChange={(e) => setNewEventTitle(e.target.value)}
                      placeholder="e.g. Study System Design Chapters 4-5..."
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#635BFF] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Category:</label>
                      <select
                        value={newEventCategory}
                        onChange={(e) => setNewEventCategory(e.target.value as any)}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none"
                      >
                        <option value="Study">Study</option>
                        <option value="Project">Project</option>
                        <option value="Interview">Interview</option>
                        <option value="Milestone">Milestone</option>
                        <option value="General">General</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Time:</label>
                      <input
                        type="time"
                        value={newEventTime}
                        onChange={(e) => setNewEventTime(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Notes & Description:</label>
                    <textarea
                      rows={2}
                      value={newEventDescription}
                      onChange={(e) => setNewEventDescription(e.target.value)}
                      placeholder="Optional notes or subtasks..."
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#635BFF] focus:outline-none resize-none"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setShowEventModal(false)}
                      className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#635BFF] text-white rounded-xl text-xs font-bold shadow-xs"
                    >
                      Schedule Task
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* AI Schedule Generator Modal */}
        <AnimatePresence>
          {showAiModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowAiModal(false)}
                className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white border border-slate-200 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative z-10 p-6 sm:p-8 space-y-4"
              >
                <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                  <span className="p-2.5 rounded-xl bg-purple-50 text-[#635BFF]">
                    <Sparkles className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-outfit text-base font-bold text-slate-900">AI Study Schedule Generator</h3>
                    <p className="text-xs text-slate-500">Powered by Gemini & Career Intelligence</p>
                  </div>
                </div>

                <form onSubmit={handleGenerateAiPlan} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">What are you preparing for?</label>
                    <input
                      type="text"
                      required
                      value={aiGoal}
                      onChange={(e) => setAiGoal(e.target.value)}
                      placeholder="e.g. AWS Solutions Architect Associate, FAANG React Interview..."
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#635BFF] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Target Timeframe (Days):</label>
                    <div className="flex gap-2">
                      {[15, 30, 60, 90].map(days => (
                        <button
                          key={days}
                          type="button"
                          onClick={() => setAiDays(days)}
                          className={`flex-1 py-1.5 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                            aiDays === days
                              ? 'bg-[#635BFF] text-white border-[#635BFF] shadow-xs'
                              : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {days} Days
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-purple-50/50 rounded-xl border border-purple-100 text-[11px] text-slate-600 leading-relaxed">
                    Gemini will synthesize a weekly structured plan with milestone self-assessments, lab sessions, and revision blocks added directly to your calendar.
                  </div>

                  <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setShowAiModal(false)}
                      className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={generatingAiSchedule}
                      className="px-5 py-2 bg-[#635BFF] hover:bg-[#5146E5] text-white rounded-xl text-xs font-bold shadow-xs flex items-center space-x-1.5 disabled:opacity-50"
                    >
                      {generatingAiSchedule && <RefreshCw className="h-3.5 w-3.5 animate-spin" />}
                      <span>{generatingAiSchedule ? 'Synthesizing Plan...' : 'Generate & Add to Calendar'}</span>
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
