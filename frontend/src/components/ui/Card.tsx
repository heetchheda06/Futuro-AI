'use client';

import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'glass' | 'interactive' | 'glowing';
  children: React.ReactNode;
}

export function Card({
  children,
  variant = 'default',
  className = '',
  ...props
}: CardProps) {
  const baseStyles = 'rounded-2xl transition-all duration-200 border';

  const variantStyles = {
    default: 'bg-white border-slate-200 shadow-2xs text-slate-900',
    elevated: 'bg-white border-slate-200 shadow-sm shadow-slate-900/5 text-slate-900',
    glass: 'bg-white/80 backdrop-blur-md border-slate-200 shadow-xs text-slate-900',
    interactive: 'bg-white border-slate-200 shadow-2xs hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5 text-slate-900 cursor-pointer',
    glowing: 'bg-violet-50/70 border-violet-200/80 shadow-xs shadow-violet-500/10 text-slate-900',
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}
