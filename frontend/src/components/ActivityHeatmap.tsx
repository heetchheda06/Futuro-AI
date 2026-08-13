'use client';

import React, { useState } from 'react';
import { Flame, Calendar, Sparkles, CheckCircle2, Clock, X } from 'lucide-react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

interface ActivityDay {
  date: string;
  count: number;
  activities: { type: string; title: string; time: string }[];
}

export function ActivityHeatmap() {
  const [selectedDay, setSelectedDay] = useState<ActivityDay | null>(null);

  // Generate 52 weeks of activity data
  const weeks: ActivityDay[][] = Array.from({ length: 52 }, (_, wIdx) =>
    Array.from({ length: 7 }, (_, dIdx) => {
      const dayNum = wIdx * 7 + dIdx;
      const count = (dayNum * 7 + 3) % 5;
      const dateStr = `2026-${String(Math.floor(dayNum / 30) + 1).padStart(2, '0')}-${String((dayNum % 30) + 1).padStart(2, '0')}`;
      
      const sampleActivities = [
        { type: 'Learning', title: 'Completed Vector Search Lab Module', time: '10:30 AM' },
        { type: 'Interview', title: 'AI Mock Interview Cockpit Session (88% STAR)', time: '02:15 PM' },
        { type: 'Coding', title: 'FastAPI Microservice Async Pipeline Edit', time: '05:45 PM' },
        { type: 'Resume', title: 'ATS Resume Scan & Bullet Point Enhancement', time: '08:10 PM' },
      ];

      return {
        date: dateStr,
        count,
        activities: sampleActivities.slice(0, Math.max(1, count)),
      };
    })
  );

  const getHeatmapColor = (count: number) => {
    if (count === 0) return 'bg-slate-100 border-slate-200';
    if (count === 1) return 'bg-indigo-100 border-indigo-200 text-indigo-700';
    if (count === 2) return 'bg-indigo-300 border-indigo-400 text-indigo-900';
    if (count === 3) return 'bg-indigo-600 border-indigo-500 text-white';
    return 'bg-cyan-500 border-cyan-400 text-slate-950 font-bold shadow-xs';
  };

  return (
    <Card variant="elevated" className="p-6 space-y-6">
      {/* Header & Summary Statistics */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <Badge variant="violet" size="sm" icon={<Flame className="w-3.5 h-3.5 text-indigo-600" />}>
              365-Day Activity Engine
            </Badge>
            <span className="text-xs text-slate-500">&bull; Verified Career Telemetry</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 font-outfit mt-1">
            Career Activity & Streak Heatmap
          </h3>
        </div>

        {/* Stats Pills */}
        <div className="flex items-center space-x-3 text-xs">
          <div className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <span className="text-[10px] text-slate-500 block">Current Streak</span>
            <span className="font-extrabold text-amber-600 flex items-center justify-center space-x-1">
              <Flame className="w-3.5 h-3.5 fill-amber-500" />
              <span>7 Days</span>
            </span>
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <span className="text-[10px] text-slate-500 block">Longest Streak</span>
            <span className="font-extrabold text-indigo-600">24 Days</span>
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <span className="text-[10px] text-slate-500 block">Total Active Days</span>
            <span className="font-extrabold text-cyan-600">142 Days</span>
          </div>
        </div>
      </div>

      {/* Heatmap Grid */}
      <div className="overflow-x-auto pb-2">
        <div className="inline-flex gap-1 min-w-[720px]">
          {weeks.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-1">
              {week.map((day, dIdx) => (
                <button
                  key={dIdx}
                  onClick={() => setSelectedDay(day)}
                  className={`w-3 h-3 rounded-xs border transition-transform hover:scale-125 cursor-pointer ${getHeatmapColor(
                    day.count
                  )}`}
                  title={`${day.date}: ${day.count} activities completed`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Heatmap Legend */}
      <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-200">
        <div className="flex items-center space-x-4">
          <span>Tracking: Learning &bull; Coding &bull; Projects &bull; Resume &bull; Interviews &bull; Roadmap</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>Less</span>
          <span className="w-2.5 h-2.5 rounded-xs bg-slate-100 border border-slate-200" />
          <span className="w-2.5 h-2.5 rounded-xs bg-indigo-100 border border-indigo-200" />
          <span className="w-2.5 h-2.5 rounded-xs bg-indigo-300 border border-indigo-400" />
          <span className="w-2.5 h-2.5 rounded-xs bg-cyan-500 border border-cyan-400" />
          <span>More</span>
        </div>
      </div>

      {/* Day Inspector Modal */}
      {selectedDay && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 max-w-md w-full space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">
                  Daily Telemetry Inspector
                </span>
                <h4 className="text-base font-bold text-slate-900 font-outfit">
                  Activity Log for {selectedDay.date}
                </h4>
              </div>
              <button
                onClick={() => setSelectedDay(null)}
                className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2.5 text-xs max-h-60 overflow-y-auto">
              {selectedDay.activities.map((act, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-600 mt-1.5 shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <Badge variant="violet" size="sm">{act.type}</Badge>
                      <span className="text-[10px] text-slate-500">{act.time}</span>
                    </div>
                    <p className="text-slate-900 font-semibold mt-1">{act.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-end">
              <Button variant="secondary" size="sm" onClick={() => setSelectedDay(null)}>
                <span>Close Inspector</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
