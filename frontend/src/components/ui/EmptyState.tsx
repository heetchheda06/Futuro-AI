import React from 'react';
import { Button } from './Button';
import { Sparkles } from 'lucide-react';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
  actionHref?: string;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  actionText,
  onAction,
  actionHref,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center p-8 sm:p-12 rounded-2xl bg-white border border-slate-200 shadow-2xs ${className}`}>
      <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-4 shadow-2xs">
        {icon || <Sparkles className="w-7 h-7" />}
      </div>
      <h3 className="text-base font-bold text-slate-900 font-outfit mb-1.5">{title}</h3>
      <p className="text-xs text-slate-600 max-w-sm mb-6 leading-relaxed">{description}</p>
      {actionText && (
        actionHref ? (
          <a href={actionHref}>
            <Button variant="primary" size="sm">
              {actionText}
            </Button>
          </a>
        ) : (
          <Button variant="primary" size="sm" onClick={onAction}>
            {actionText}
          </Button>
        )
      )}
    </div>
  );
};
