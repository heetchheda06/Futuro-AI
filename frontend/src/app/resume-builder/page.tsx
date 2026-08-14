'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ResumeBuilderRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/resume?mode=builder');
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-2xl border border-slate-200 shadow-xs">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto" />
        <p className="text-xs text-slate-600 mt-4 font-semibold">Redirecting to AI Resume Builder...</p>
      </div>
    </div>
  );
}
