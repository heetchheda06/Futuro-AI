'use client';

import React from 'react';

export interface CircularGaugeProps {
  score: number;
  maxScore?: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  sublabel?: string;
  showPercent?: boolean;
}

export function CircularGauge({
  score,
  maxScore = 100,
  size = 120,
  strokeWidth = 10,
  label = 'Readiness',
  sublabel,
  showPercent = true,
}: CircularGaugeProps) {
  const percentage = Math.min(100, Math.max(0, (score / maxScore) * 100));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex flex-col items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E2E8F0"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress Arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gauge-light-gradient)"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id="gauge-light-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Inner Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-2xl font-black text-slate-900 font-outfit tracking-tight">
          {score}
          {showPercent && <span className="text-xs text-slate-500 font-normal">%</span>}
        </span>
        {label && <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{label}</span>}
      </div>
      {sublabel && <span className="text-xs text-slate-600 mt-2 font-medium">{sublabel}</span>}
    </div>
  );
}
