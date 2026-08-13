'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../../../context/AuthContext';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Search, ExternalLink, Sparkles, Filter, 
  Clock, Award, Star, Users, CheckCircle2, Bookmark, 
  BookmarkCheck, Play, ArrowUpRight
} from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface Course {
  id: string;
  title: string;
  provider: 'NPTEL' | 'Coursera' | 'AWS Educate' | 'Google Cloud' | 'YouTube';
  description: string;
  thumbnail: string;
  url: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: string;
  price: string;
  skills: string[];
  certificateAvailable: boolean;
  instructor?: string;
  rating?: number;
  enrollmentsCount?: number;
  source: string;
}

export default function CoursesDiscoveryPage() {
  const { user } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [aiRecommendations, setAiRecommendations] = useState<any>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  const PROVIDERS = [
    { id: 'all', label: 'All Providers' },
    { id: 'nptel', label: 'NPTEL / SWAYAM' },
    { id: 'coursera', label: 'Coursera' },
    { id: 'aws', label: 'AWS Educate' },
    { id: 'google', label: 'Google Cloud' },
    { id: 'youtube', label: 'YouTube' }
  ];

  useEffect(() => {
    fetchCourses();
    fetchAIRecommendations();
    const saved = localStorage.getItem('course_bookmarks');
    if (saved) {
      try { setBookmarkedIds(JSON.parse(saved)); } catch (e) {}
    }
  }, [selectedProvider, selectedLevel, selectedPrice]);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      let url = `${API_BASE_URL}/courses/search?q=${encodeURIComponent(searchQuery)}&provider=${selectedProvider}&level=${selectedLevel}&price=${selectedPrice}`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setCourses(data.courses || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchAIRecommendations = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/courses/recommend`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          targetCareer: user?.targetCareer || 'Software Engineer',
          currentSkills: user?.currentSkills || ['Python', 'JavaScript'],
          skillGaps: ['Machine Learning', 'Cloud Architecture', 'System Design']
        })
      });
      if (res.ok) {
        const data = await res.json();
        setAiRecommendations(data);
      }
    } catch (e) {}
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchCourses();
  };

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    let updated: string[];
    if (bookmarkedIds.includes(id)) {
      updated = bookmarkedIds.filter(bId => bId !== id);
    } else {
      updated = [...bookmarkedIds, id];
    }
    setBookmarkedIds(updated);
    localStorage.setItem('course_bookmarks', JSON.stringify(updated));
  };

  const getProviderBadgeColor = (provider: string) => {
    switch (provider) {
      case 'NPTEL': return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'Coursera': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'AWS Educate': return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Google Cloud': return 'bg-cyan-50 text-cyan-700 border-cyan-200';
      case 'YouTube': return 'bg-red-50 text-red-700 border-red-200';
      default: return 'bg-purple-50 text-[#635BFF] border-purple-100';
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-semibold mb-2 border border-cyan-100">
              <GraduationCap className="h-3.5 w-3.5" />
              <span>Normalized Multi-Provider Course Engine</span>
            </div>
            <h1 className="font-outfit text-3xl font-extrabold text-slate-900 tracking-tight">
              Course <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Discovery Engine</span>
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Explore accredited courses and free tracks across NPTEL, Coursera, AWS Educate, Google Cloud, and top educational series.
            </p>
          </div>
        </div>

        {/* AI Recommendations Banner */}
        {aiRecommendations && (
          <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-50/90 via-indigo-50/60 to-cyan-50/60 border border-purple-100 shadow-sm mb-8 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="p-1.5 rounded-lg bg-[#635BFF] text-white">
                  <Sparkles className="h-4 w-4" />
                </span>
                <span className="font-outfit text-sm font-bold text-slate-900">
                  AI Tailored Curriculum for {aiRecommendations.careerGoal}
                </span>
              </div>
              <span className="text-[11px] font-bold text-[#635BFF] bg-white px-2.5 py-1 rounded-lg border border-purple-100 shadow-2xs">
                Matches Your Skill Gaps
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {aiRecommendations.rationale}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {aiRecommendations.recommendedCourses?.map((rec: Course) => (
                <div key={rec.id} className="p-3 bg-white rounded-xl border border-purple-100 shadow-2xs flex flex-col justify-between">
                  <div>
                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold border ${getProviderBadgeColor(rec.provider)} inline-block mb-1.5`}>
                      {rec.provider}
                    </span>
                    <h4 className="font-outfit text-xs font-bold text-slate-900 line-clamp-2 leading-snug mb-1">
                      {rec.title}
                    </h4>
                  </div>
                  <a
                    href={rec.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[#635BFF] hover:underline flex items-center space-x-1 mt-2 pt-2 border-t border-slate-50"
                  >
                    <span>View Course</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search & Provider Tabs Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-8 space-y-3">
          <form onSubmit={handleSearchSubmit} className="flex gap-2">
            <div className="relative flex-grow">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, skills, or topics (e.g. Deep Learning, React, AWS Cloud, Python)..."
                className="w-full pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#635BFF] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#635BFF] hover:bg-[#5146E5] text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer"
            >
              Search
            </button>
          </form>

          {/* Provider Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-1 pr-1">Provider:</span>
            {PROVIDERS.map(prov => (
              <button
                key={prov.id}
                type="button"
                onClick={() => setSelectedProvider(prov.id)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedProvider === prov.id
                    ? 'bg-[#635BFF] text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {prov.label}
              </button>
            ))}

            <div className="h-4 w-px bg-slate-200 mx-2" />

            {/* Level Selector */}
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="text-xs bg-slate-50 border border-slate-200 text-slate-700 py-1 px-2.5 rounded-lg focus:outline-none"
            >
              <option value="all">All Difficulty Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>

        {/* Courses Grid */}
        {loading ? (
          <div className="text-center py-24 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#635BFF] mx-auto" />
            <p className="text-xs text-slate-500 mt-3 font-semibold">Aggregating courses across providers...</p>
          </div>
        ) : courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => {
              const isBookmarked = bookmarkedIds.includes(course.id);
              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-purple-200 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-100 mb-4 border border-slate-100">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <span className={`absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md text-[10px] font-bold border backdrop-blur-md shadow-xs ${getProviderBadgeColor(course.provider)} bg-white/95`}>
                        {course.provider}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => toggleBookmark(course.id, e)}
                        className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-white/90 backdrop-blur-md shadow-xs text-slate-600 hover:text-[#635BFF] transition-colors cursor-pointer"
                        title="Bookmark Course"
                      >
                        {isBookmarked ? <BookmarkCheck className="h-4 w-4 text-[#635BFF]" /> : <Bookmark className="h-4 w-4" />}
                      </button>
                    </div>

                    {/* Metadata Header */}
                    <div className="flex items-center space-x-2 text-[10px] font-semibold text-slate-400 mb-1.5">
                      <span>{course.category}</span>
                      <span>&bull;</span>
                      <span className="text-slate-600">{course.level}</span>
                      <span>&bull;</span>
                      <span>{course.duration}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-outfit text-base font-bold text-slate-900 leading-snug line-clamp-2 mb-1.5 group-hover:text-[#635BFF] transition-colors">
                      {course.title}
                    </h3>

                    {course.instructor && (
                      <p className="text-xs font-semibold text-slate-500 mb-2">
                        Instructor: <span className="text-slate-700">{course.instructor}</span>
                      </p>
                    )}

                    <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Skills Covered */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {course.skills.slice(0, 4).map((skill, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-purple-50 text-[#635BFF] text-[9px] font-bold border border-purple-100">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      {course.price}
                    </span>
                    <a
                      href={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-4 py-2 bg-[#635BFF] hover:bg-[#5146E5] text-white text-xs font-bold rounded-xl shadow-xs transition-all"
                    >
                      <span>Continue on {course.provider}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <GraduationCap className="h-10 w-10 text-slate-300 mx-auto mb-2" />
            <h3 className="font-outfit text-base font-bold text-slate-800 mb-1">No Courses Match Filters</h3>
            <p className="text-xs text-slate-500 mb-4">Try clearing your filters or changing the search keyword.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedProvider('all');
                setSelectedLevel('all');
                setSelectedPrice('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#635BFF] text-white rounded-xl text-xs font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
