'use client';

import React from 'react';

export interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
}

export function Skeleton({ className = '', variant = 'text' }: SkeletonProps) {
  const base = 'animate-pulse bg-slate-200/80 rounded-xl';
  const variantClass = variant === 'circular' ? 'rounded-full' : variant === 'text' ? 'h-4 w-full rounded-md' : 'rounded-2xl';

  return <div className={`${base} ${variantClass} ${className}`} />;
}
