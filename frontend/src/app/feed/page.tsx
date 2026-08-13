'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Newspaper, RefreshCw, AlertCircle, ChevronRight, Sparkles,
  Bookmark, BookmarkCheck, Share2, Award, Cpu, TrendingUp,
  Globe, Briefcase, Zap, HelpCircle, CheckCircle, Flame
} from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface FeedItem {
  id: string;
  category: 'industry_update' | 'hiring_trend' | 'new_tech' | 'layoff_opportunity';
  title: string;
  summary: string;
  content: string;
  source: string;
  date: string;
  impactScore: number;
  relevanceExplanation: string;
  tags: string[];
  actionUrl?: string;
  actionText?: string;
}

export default function CareerNewsFeed() {
  const { user, token } = useAuth();
  const router = useRouter();

  const [feed, setFeed] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<FeedItem | null>(null);
  const [expandedRelevanceId, setExpandedRelevanceId] = useState<string | null>(null);
  const [showShareNotification, setShowShareNotification] = useState(false);

  useEffect(() => {
    if (!user) {
      const savedToken = localStorage.getItem('token');
      if (!savedToken) {
        router.push('/login?redirect=feed');
      }
    } else {
      fetchFeed(false);
      const savedBookmarks = localStorage.getItem('bookmarked_feeds');
      if (savedBookmarks) {
        try {
          setBookmarkedIds(JSON.parse(savedBookmarks));
        } catch (e) {
          console.error('Error parsing bookmarks', e);
        }
      }
    }
  }, [user]);

  const fetchFeed = async (forceRefresh = false) => {
    if (!token && !localStorage.getItem('token')) return;
    if (forceRefresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }
    setError('');

    try {
      const url = `${API_BASE_URL}/feed${forceRefresh ? '?refresh=true' : ''}`;
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token || localStorage.getItem('token')}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setFeed(data.feed || []);
      } else {
        throw new Error('Feed error');
      }
    } catch (err) {
      setTimeout(() => {
        setFeed(getOfflineFeed(user?.targetCareer || 'Software Engineer', user?.currentSkills || []));
      }, 500);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleToggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    let updatedBookmarks: string[];
    if (bookmarkedIds.includes(id)) {
      updatedBookmarks = bookmarkedIds.filter(bid => bid !== id);
    } else {
      updatedBookmarks = [...bookmarkedIds, id];
    }
    setBookmarkedIds(updatedBookmarks);
    localStorage.setItem('bookmarked_feeds', JSON.stringify(updatedBookmarks));
  };

  const handleShare = (item: FeedItem, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin}/feed#${item.id}`);
      setShowShareNotification(true);
      setTimeout(() => setShowShareNotification(false), 3000);
    }
  };

  const toggleExpandRelevance = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedRelevanceId(expandedRelevanceId === id ? null : id);
  };

  const filteredFeed = feed.filter(item => {
    if (activeCategory === 'bookmarks') {
      return bookmarkedIds.includes(item.id);
    }
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'industry_update':
        return <Globe className="h-3.5 w-3.5 text-blue-600" />;
      case 'hiring_trend':
        return <TrendingUp className="h-3.5 w-3.5 text-emerald-600" />;
      case 'new_tech':
        return <Zap className="h-3.5 w-3.5 text-amber-600" />;
      case 'layoff_opportunity':
        return <Briefcase className="h-3.5 w-3.5 text-purple-600" />;
      default:
        return <Newspaper className="h-3.5 w-3.5 text-[#635BFF]" />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'industry_update':
        return 'Industry Update';
      case 'hiring_trend':
        return 'Hiring Signal';
      case 'new_tech':
        return 'Technology';
      case 'layoff_opportunity':
        return 'Market Opportunity';
      default:
        return 'News Update';
    }
  };

  const getImpactBadgeColor = (score: number) => {
    if (score >= 90) return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    if (score >= 80) return 'bg-purple-50 text-[#635BFF] border-purple-100';
    return 'bg-slate-100 text-slate-700 border-slate-200';
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#635BFF] mx-auto" />
          <p className="text-xs text-slate-500 mt-4 font-semibold">Personalizing your feed...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Share Alert */}
        <AnimatePresence>
          {showShareNotification && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-20 right-4 z-50 bg-[#635BFF] text-white px-5 py-3 rounded-2xl shadow-xl font-bold flex items-center space-x-2 text-xs"
            >
              <CheckCircle className="h-4 w-4 text-emerald-300" />
              <span>Link copied to clipboard!</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-[#635BFF] text-xs font-semibold mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>AI Career Intelligence</span>
          </div>
          <h1 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Personalized <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">Career News Feed</span>
          </h1>
          <p className="text-xs text-slate-500 leading-relaxed mb-4">
            Curated industry reports and hiring developments aligned with your target trajectory: <strong className="text-slate-900">{user.targetCareer || 'Software Engineer'}</strong>.
          </p>

          <div className="inline-flex flex-wrap justify-center items-center gap-1.5 p-2 bg-white rounded-xl border border-slate-200 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 pl-1">Target Profile:</span>
            <span className="px-2 py-0.5 rounded-lg bg-purple-50 text-[#635BFF] text-xs font-semibold border border-purple-100">
              {user.targetCareer || 'Software Engineer'}
            </span>
            <span className="px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100">
              {user.experienceLevel || 'Entry Level'}
            </span>
          </div>
        </div>

        {/* Navigation & Controls */}
        <div className="flex flex-col md:flex-row gap-3 justify-between items-stretch md:items-center mb-6 pb-4 border-b border-slate-200">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 overflow-x-auto">
            {[
              { id: 'all', label: 'All Feeds', count: feed.length },
              { id: 'industry_update', label: 'Industry Updates', count: feed.filter(f => f.category === 'industry_update').length },
              { id: 'hiring_trend', label: 'Hiring Signals', count: feed.filter(f => f.category === 'hiring_trend').length },
              { id: 'new_tech', label: 'Technology', count: feed.filter(f => f.category === 'new_tech').length },
              { id: 'layoff_opportunity', label: 'Opportunities', count: feed.filter(f => f.category === 'layoff_opportunity').length },
              { id: 'bookmarks', label: 'Saved', count: bookmarkedIds.length }
            ].map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center space-x-1 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#635BFF] text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {cat.id === 'bookmarks' && <Bookmark className="h-3 w-3" />}
                <span>{cat.label}</span>
                {cat.count > 0 && (
                  <span className={`inline-flex items-center justify-center px-1.5 py-0.2 rounded text-[10px] font-bold ${
                    activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {cat.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Sync Button */}
          <button
            type="button"
            onClick={() => fetchFeed(true)}
            disabled={refreshing || loading}
            className="px-3.5 py-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-xl text-xs font-semibold active:scale-98 transition-all flex items-center justify-center space-x-1.5 disabled:opacity-50 cursor-pointer shadow-xs"
          >
            <RefreshCw className={`h-3 w-3 ${refreshing ? 'animate-spin' : ''}`} />
            <span>{refreshing ? 'Syncing...' : 'Sync Updates'}</span>
          </button>
        </div>

        {/* Content Feed Section */}
        {loading ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#635BFF] mx-auto" />
            <p className="text-xs text-slate-500 mt-3">Curating articles for your target trajectory...</p>
          </div>
        ) : filteredFeed.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredFeed.map((item, idx) => {
              const isBookmarked = bookmarkedIds.includes(item.id);
              const isExpanded = expandedRelevanceId === item.id;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(idx * 0.04, 0.2) }}
                  onClick={() => setSelectedItem(item)}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-purple-200 hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-1.5">
                        <span className="p-1 rounded-md bg-slate-50 border border-slate-100">
                          {getCategoryIcon(item.category)}
                        </span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                          {getCategoryLabel(item.category)}
                        </span>
                      </div>

                      <div className="flex items-center space-x-1.5">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${getImpactBadgeColor(item.impactScore)}`}>
                          {item.impactScore}% Fit
                        </span>
                        <button
                          type="button"
                          onClick={(e) => handleToggleBookmark(item.id, e)}
                          className="p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-[#635BFF] transition-colors cursor-pointer"
                        >
                          {isBookmarked ? (
                            <BookmarkCheck className="h-4 w-4 text-[#635BFF]" />
                          ) : (
                            <Bookmark className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Title & Summary */}
                    <h3 className="font-outfit text-base font-bold mb-1.5 text-slate-900 leading-snug group-hover:text-[#635BFF] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-3 mb-4 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <div>
                    {/* Relevance Explainer */}
                    <div className="mb-3 border-t border-slate-100 pt-2.5">
                      <button
                        type="button"
                        onClick={(e) => toggleExpandRelevance(item.id, e)}
                        className="flex items-center space-x-1 text-[11px] font-bold text-[#635BFF] hover:underline cursor-pointer"
                      >
                        <Flame className="h-3 w-3 text-rose-500" />
                        <span>AI Trajectory Analysis</span>
                        <ChevronRight className={`h-3 w-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="text-xs text-slate-600 mt-1.5 bg-purple-50/50 p-2.5 rounded-xl border border-purple-100 leading-relaxed">
                              {item.relevanceExplanation}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 pt-1">
                      <div className="flex items-center space-x-1.5">
                        <span className="text-slate-600">{item.source}</span>
                        <span>&bull;</span>
                        <span>{item.date}</span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => handleShare(item, e)}
                        className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                        title="Share"
                      >
                        <Share2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm text-center max-w-md mx-auto py-16">
            <Bookmark className="h-8 w-8 text-slate-300 mx-auto mb-2" />
            <h3 className="font-outfit text-base font-bold text-slate-800 mb-1">No Articles Found</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              {activeCategory === 'bookmarks'
                ? "You haven't bookmarked any news items yet."
                : "No personalized news articles match this filter category."}
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className="px-4 py-2 bg-[#635BFF] hover:bg-[#5146E5] text-white rounded-xl text-xs font-semibold transition-all shadow-sm cursor-pointer"
            >
              Browse All Feeds
            </button>
          </div>
        )}

        {/* Detail Modal Dialog */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItem(null)}
                className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white border border-slate-200 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative z-10 p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Top Meta */}
                  <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                    <div className="flex items-center space-x-2">
                      <span className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                        {getCategoryIcon(selectedItem.category)}
                      </span>
                      <div>
                        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-0.5">
                          {getCategoryLabel(selectedItem.category)}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          {selectedItem.source} &bull; {selectedItem.date}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${getImpactBadgeColor(selectedItem.impactScore)}`}>
                        {selectedItem.impactScore}% Match
                      </span>
                      <button
                        type="button"
                        onClick={() => setSelectedItem(null)}
                        className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-800 text-sm font-bold cursor-pointer"
                      >
                        &times;
                      </button>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="font-outfit text-xl sm:text-2xl font-bold mb-3 text-slate-900 leading-tight">
                    {selectedItem.title}
                  </h2>

                  {/* Highlight */}
                  <div className="p-3.5 bg-purple-50/50 border-l-3 border-[#635BFF] rounded-r-xl mb-4 text-xs text-slate-700 italic leading-relaxed">
                    "{selectedItem.summary}"
                  </div>

                  {/* Body */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 whitespace-pre-line">
                    {selectedItem.content}
                  </p>

                  {/* Relevance */}
                  <div className="p-3.5 rounded-xl bg-purple-50/40 border border-purple-100 mb-4">
                    <span className="block text-[10px] font-bold text-[#635BFF] uppercase tracking-wider mb-1 flex items-center">
                      <Flame className="h-3 w-3 text-rose-500 mr-1" />
                      <span>Futuro AI Personal Insights</span>
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {selectedItem.relevanceExplanation}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {selectedItem.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold border border-slate-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="flex justify-end gap-2 border-t border-slate-100 pt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedItem(null)}
                    className="px-4 py-2 border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-semibold text-slate-700 cursor-pointer"
                  >
                    Close
                  </button>
                  {selectedItem.actionUrl && (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedItem(null);
                        router.push(selectedItem.actionUrl || '/');
                      }}
                      className="px-4 py-2 bg-[#635BFF] hover:bg-[#5146E5] text-white rounded-xl text-xs font-semibold shadow-md shadow-indigo-500/15 flex items-center space-x-1 cursor-pointer"
                    >
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>{selectedItem.actionText || 'Take Action'}</span>
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

function getOfflineFeed(career: string, skills: string[]): FeedItem[] {
  const c = career.toLowerCase();
  
  if (c.includes('ai') || c.includes('machine') || c.includes('learning')) {
    return [
      {
        id: 'openai-gpt5-release-offline',
        category: 'industry_update',
        title: 'OpenAI Launches Multi-Agent Frameworks for High-Volume Systems',
        summary: 'The new model features native reasoning loops capable of running autonomous sequences with minimal oversight.',
        content: 'OpenAI has officially unveiled updated enterprise architectures with breakthrough upgrades in chain-of-thought processing and agent orchestration. API pricing and latency have decreased, driving widespread adoption of custom fine-tuned models.',
        source: 'Wired',
        date: '2 hours ago',
        impactScore: 95,
        relevanceExplanation: 'Highly impactful because your goal is to be an AI Engineer and understanding model integrations is vital.',
        tags: ['AI', 'LLMs', 'Orchestration'],
        actionUrl: '/roadmap',
        actionText: 'Update Roadmap',
      },
      {
        id: 'ai-salaries-climb-2026-offline',
        category: 'hiring_trend',
        title: 'AI Engineering Compensation Surges by 35% Across Tech Hubs',
        summary: 'Hiring data indicates specialized AI developers command substantial salary premiums over general full-stack profiles.',
        content: 'A comprehensive salary report from Hired indicates that compensation packages for AI and Deep Learning engineers have climbed across enterprise sectors as organizations scale custom RAG architectures.',
        source: 'Bloomberg Tech',
        date: 'Yesterday',
        impactScore: 90,
        relevanceExplanation: 'Validates that your target career of AI Engineer commands the highest market valuations.',
        tags: ['AI', 'Salaries', 'Jobs'],
        actionUrl: '/explorer',
        actionText: 'Explore Career Specs',
      },
      {
        id: 'pytorch-edge-optimization-offline',
        category: 'new_tech',
        title: 'PyTorch 2.6 Released with Optimized Edge Inference Architecture',
        summary: 'The release introduces quantization kernels for fast edge and browser-based AI execution.',
        content: 'The PyTorch team has launched version 2.6 with specialized quantization kernels designed for edge runtimes, reducing memory footprints by over 40% on consumer client devices.',
        source: 'Futuro Intelligence',
        date: '3 days ago',
        impactScore: 82,
        relevanceExplanation: 'Excellent for expanding your deep learning skills. Check your roadmap for PyTorch milestones.',
        tags: ['PyTorch', 'Deep Learning', 'Edge AI'],
        actionUrl: '/roadmap',
        actionText: 'View PyTorch Path',
      }
    ];
  }

  return [
    {
      id: 'react-19-production-adoption-offline',
      category: 'new_tech',
      title: 'React 19 Achieves Wide Enterprise Adoption Across Tech Platforms',
      summary: 'Development teams are shifting to compiler-based memoization, reducing client bundle sizes.',
      content: 'React 19 has achieved widespread stability across enterprise applications. The compiler automatically optimizes rendering cycles, eliminating boilerplate hooks and standardizing Server Actions.',
      source: 'TechCrunch',
      date: '3 hours ago',
      impactScore: 95,
      relevanceExplanation: 'Highly relevant for your React and JavaScript skills path. Check your roadmap.',
      tags: ['React 19', 'JavaScript', 'Frontend'],
      actionUrl: '/roadmap',
      actionText: 'Update React Skills',
    },
    {
      id: 'tech-hiring-market-recovery-offline',
      category: 'hiring_trend',
      title: 'Mid-Market Tech Companies Re-ignite Hiring for Full-Stack Developers',
      summary: 'Hiring reports indicate a 20% increase in job postings for junior and mid-level web developers.',
      content: 'A quarterly review of active job platforms shows a distinct rise in mid-market hiring activities for engineers who can build interfaces, connect databases, and manage CI/CD pipelines.',
      source: 'Bloomberg Tech',
      date: 'Yesterday',
      impactScore: 90,
      relevanceExplanation: 'Validates your career path as a Developer, showing an improving hiring market.',
      tags: ['Hiring', 'Full Stack', 'Jobs'],
      actionUrl: '/explorer',
      actionText: 'Check Career Trends',
    },
    {
      id: 'typescript-5-release-offline',
      category: 'new_tech',
      title: 'TypeScript 5.8 Released with Major Type-Checking Optimizations',
      summary: 'Compilation times are reduced by 25% with new strict parameter controls.',
      content: 'Microsoft has launched TypeScript 5.8, focusing heavily on build-time speedups and stricter control checks for asynchronous function callbacks.',
      source: 'Dev.to',
      date: '2 days ago',
      impactScore: 85,
      relevanceExplanation: 'TypeScript boundaries are key to your engineering track. Optimize your skills.',
      tags: ['TypeScript', 'JavaScript', 'IDE Tools'],
      actionUrl: '/roadmap',
      actionText: 'Learn TypeScript',
    },
    {
      id: 'stripe-engineering-expansion-offline',
      category: 'layoff_opportunity',
      title: 'Stripe Raises Massive Series I Funding, Expands Engineering Headcount',
      summary: 'The payment processor is launching global remote hiring sprints for API development.',
      content: 'Stripe has completed a huge financing round to support expanding billing infrastructures, seeking developers experienced in APIs, backend security, and microservices.',
      source: 'VentureBeat',
      date: 'Yesterday',
      impactScore: 87,
      relevanceExplanation: 'A major hiring window. Tailor your resume to fit Stripe API and backend criteria.',
      tags: ['Stripe', 'Hiring', 'APIs'],
      actionUrl: '/resume',
      actionText: 'Optimize Resume for Stripe',
    }
  ];
}
