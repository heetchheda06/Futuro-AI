'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, BookOpen, GraduationCap, Award, Users, 
  Building2, Compass, X, ArrowRight, Sparkles 
} from 'lucide-react';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'books' | 'courses' | 'certifications' | 'mentors' | 'colleges' | 'careers'>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Quick navigation helpers
  const handleSelect = (url: string) => {
    onClose();
    router.push(url);
  };

  const sampleResults = [
    { title: 'Designing Data-Intensive Applications', category: 'books', type: 'eBook', url: '/learning/ebooks', icon: BookOpen, tag: 'eBook' },
    { title: 'Machine Learning Specialization', category: 'courses', type: 'Course', url: '/learning/courses', icon: GraduationCap, tag: 'Coursera' },
    { title: 'AWS Certified Solutions Architect – Associate', category: 'certifications', type: 'Certification', url: '/learning/certifications', icon: Award, tag: 'AWS' },
    { title: 'Priya Sharma (Staff AI Researcher, DeepMind)', category: 'mentors', type: 'Mentor', url: '/mentors', icon: Users, tag: 'Mentor' },
    { title: 'Indian Institute of Technology Bombay (IIT Bombay)', category: 'colleges', type: 'College', url: '/colleges', icon: Building2, tag: 'IIT' },
    { title: 'AI Engineer Career Path', category: 'careers', type: 'Career', url: '/explorer', icon: Compass, tag: 'Career' },
    { title: 'Full Stack Web Development Masterclass', category: 'courses', type: 'Course', url: '/learning/courses', icon: GraduationCap, tag: 'YouTube' },
    { title: 'Google Cloud Professional Cloud Architect', category: 'certifications', type: 'Certification', url: '/learning/certifications', icon: Award, tag: 'Google Cloud' }
  ];

  const filteredResults = sampleResults.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesQuery = !query || item.title.toLowerCase().includes(query.toLowerCase()) || item.type.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          className="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
        >
          {/* Search Header */}
          <div className="p-4 border-b border-slate-100 flex items-center space-x-3">
            <Search className="h-5 w-5 text-slate-400" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search across books, courses, certifications, mentors, colleges..."
              className="flex-grow text-sm text-slate-800 placeholder-slate-400 bg-transparent border-none outline-none font-medium"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold text-slate-400 bg-slate-100 rounded border border-slate-200">
              ESC
            </kbd>
          </div>

          {/* Category Chips */}
          <div className="px-4 py-2.5 bg-slate-50/70 border-b border-slate-100 flex flex-wrap gap-1.5 overflow-x-auto text-xs">
            {[
              { id: 'all', label: 'All Results' },
              { id: 'books', label: 'Books' },
              { id: 'courses', label: 'Courses' },
              { id: 'certifications', label: 'Certifications' },
              { id: 'mentors', label: 'Mentors' },
              { id: 'colleges', label: 'Colleges' },
              { id: 'careers', label: 'Careers' }
            ].map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#635BFF] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Results List */}
          <div className="max-h-96 overflow-y-auto p-2 divide-y divide-slate-50">
            {filteredResults.length > 0 ? (
              filteredResults.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelect(item.url)}
                    className="w-full text-left p-3 rounded-xl hover:bg-slate-50 flex items-center justify-between group transition-colors cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="p-2 rounded-lg bg-purple-50 text-[#635BFF] group-hover:bg-[#635BFF] group-hover:text-white transition-colors">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="text-xs font-bold text-slate-800 group-hover:text-[#635BFF] transition-colors line-clamp-1">
                          {item.title}
                        </div>
                        <div className="text-[10px] text-slate-400 font-medium">
                          {item.type} &bull; <span className="text-[#635BFF] font-semibold">{item.tag}</span>
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-[#635BFF] group-hover:translate-x-0.5 transition-all" />
                  </button>
                );
              })
            ) : (
              <div className="text-center py-10">
                <Search className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                <p className="text-xs text-slate-600 font-semibold">No direct matches found</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Try searching for a different skill, course, or certification keyword.</p>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <div className="flex items-center space-x-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[#635BFF]" />
              <span>Futuro AI Unified Knowledge Base</span>
            </div>
            <span>Use ↑ ↓ to navigate</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
