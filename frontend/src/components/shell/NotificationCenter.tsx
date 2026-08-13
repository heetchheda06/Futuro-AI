'use client';

import React, { useState } from 'react';
import { Bell, X, Sparkles, Check, Settings, Shield } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface NotificationCenterProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotificationCenter({ isOpen, onClose }: NotificationCenterProps) {
  const [showConfig, setShowConfig] = useState(false);
  const [preferences, setPreferences] = useState({
    calendarReminders: true,
    roadmapMilestones: true,
    marketPulse: true,
    interviewReminders: true,
    courseRecommendations: false,
  });

  const notifications = [
    {
      id: 1,
      title: 'Skill Gap Telemetry Updated',
      desc: 'Mastering Vector Embeddings will close your largest 27% gap for target senior roles.',
      time: '10m ago',
      unread: true,
    },
    {
      id: 2,
      title: 'Mock Interview Feedback Ready',
      desc: 'Your STAR framework score reached 92% on system design tradeoffs.',
      time: '1h ago',
      unread: true,
    },
    {
      id: 3,
      title: 'Market Signal Alert',
      desc: 'Senior AI Engineer salaries increased +35% YoY in Q3 tech hiring reports.',
      time: '3h ago',
      unread: false,
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex justify-end animate-in fade-in">
      <div className="bg-white border-l border-slate-200 w-full max-w-sm h-full flex flex-col justify-between p-6 shadow-2xl space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center space-x-2">
            <Bell className="w-5 h-5 text-indigo-600" />
            <h3 className="text-base font-bold text-slate-900 font-outfit">Notifications</h3>
            <Badge variant="violet" size="sm">2 Unread</Badge>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowConfig(!showConfig)}
              className="p-1.5 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
              title="FCM Notification Preferences"
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Configuration View */}
        {showConfig ? (
          <div className="flex-1 space-y-4 text-xs overflow-y-auto">
            <div className="p-3.5 rounded-xl bg-violet-50 border border-violet-200 text-slate-800 space-y-1">
              <strong className="text-violet-700 font-bold block">FCM Infrastructure Preferences</strong>
              <p className="text-[11px] text-slate-600">Configure Cloud Messaging notification channels.</p>
            </div>

            <div className="space-y-3 pt-2">
              {[
                { id: 'calendarReminders', label: 'Calendar Reminders & Study Events' },
                { id: 'roadmapMilestones', label: 'Career Roadmap Milestones' },
                { id: 'marketPulse', label: 'Market Pulse & Salary Signals' },
                { id: 'interviewReminders', label: 'Mock Interview Practice Reminders' },
                { id: 'courseRecommendations', label: 'Course Recommendations' },
              ].map((item) => {
                const key = item.id as keyof typeof preferences;
                return (
                  <label key={item.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
                    <span className="text-slate-800 font-semibold">{item.label}</span>
                    <input
                      type="checkbox"
                      checked={preferences[key]}
                      onChange={(e) => setPreferences({ ...preferences, [key]: e.target.checked })}
                      className="accent-indigo-600 w-4 h-4 rounded-md"
                    />
                  </label>
                );
              })}
            </div>

            <Button variant="primary" size="sm" className="w-full mt-4" onClick={() => setShowConfig(false)}>
              <span>Save Preferences</span>
            </Button>
          </div>
        ) : (
          /* Notifications List */
          <div className="flex-1 space-y-3 overflow-y-auto">
            {notifications.map((n) => (
              <div
                key={n.id}
                className={`p-3.5 rounded-2xl border text-xs space-y-1 transition-all ${
                  n.unread
                    ? 'bg-violet-50/70 border-violet-200 text-slate-900'
                    : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">{n.title}</span>
                  <span className="text-[10px] text-slate-500">{n.time}</span>
                </div>
                <p className="text-slate-600 leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        )}

        <div className="pt-3 border-t border-slate-200 flex justify-between items-center text-[11px] text-slate-500">
          <span>Futuro FCM Telemetry Active</span>
          <button className="hover:text-slate-900 cursor-pointer">Mark all read</button>
        </div>
      </div>
    </div>
  );
}
