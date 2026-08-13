'use client';

import React from 'react';

interface DataSourceBadgeProps {
  isLive?: boolean;
  label?: string;
  className?: string;
}

export function DataSourceBadge({ isLive = true, label, className = '' }: DataSourceBadgeProps) {
  return (
    <div
      className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
        isLive
          ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
          : 'bg-amber-50 border-amber-200 text-amber-700'
      } ${className}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          isLive ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
        }`}
      />
      <span>{label ? label : isLive ? 'LIVE DATA' : 'DEMO / FALLBACK DATA'}</span>
    </div>
  );
}
