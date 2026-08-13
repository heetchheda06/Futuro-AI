'use client';

import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'violet' | 'cyan' | 'emerald' | 'amber' | 'rose' | 'neutral';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export function Badge({
  children,
  variant = 'violet',
  size = 'sm',
  icon,
  className = '',
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-bold tracking-wide rounded-full border select-none';

  const variantStyles = {
    violet: 'bg-violet-50 text-violet-700 border-violet-200',
    cyan: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    amber: 'bg-amber-50 text-amber-700 border-amber-200',
    rose: 'bg-rose-50 text-rose-700 border-rose-200',
    neutral: 'bg-slate-100 text-slate-700 border-slate-200',
  };

  const sizeStyles = {
    sm: 'text-[10px] px-2.5 py-0.5 gap-1 uppercase',
    md: 'text-xs px-3 py-1 gap-1.5',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {icon}
      <span>{children}</span>
    </span>
  );
}
