'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Search, Sparkles, Filter, Star, MapPin, 
  Briefcase, CheckCircle2, MessageSquare, ExternalLink, 
  ArrowUpRight, Calendar, ArrowRight, ShieldCheck, Heart
} from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  experienceYears: number;
  location: string;
  bio: string;
  skills: string[];
  avatar: string;
  rating: number;
  reviewsCount: number;
  sessionsGiven: number;
  linkedinUrl: string;
  topics: string[];
  available: boolean;
  featured?: boolean;
}

export default function MentorDiscoveryPage() {
  const { user } = useAuth();
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [aiMatches, setAiMatches] = useState<any[]>([]);
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const INDUSTRIES = [
    { id: 'all', label: 'All Industries' },
    { id: 'artificial intelligence', label: 'AI & Machine Learning' },
    { id: 'cloud', label: 'Cloud & Infrastructure' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'data science', label: 'Data Science' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'software engineering', label: 'Software Engineering' }
  ];

  useEffect(() => {
    fetchMentors();
    fetchAIMatches();
  }, [selectedIndustry]);

  const fetchMentors = async () => {
    setLoading(true);
    try {
      let url = `${API_BASE_URL}/mentors?q=${encodeURIComponent(searchQuery)}&industry=${selectedIndustry}`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setMentors(data.mentors || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchAIMatches = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/mentors/match`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          targetCareer: user?.targetCareer || 'Software Engineer',
          currentSkills: user?.currentSkills || ['React', 'Python', 'Machine Learning'],
          industryPreference: 'Technology',
          experienceLevel: user?.experienceLevel || 'Entry Level'
        })
      });
      if (res.ok) {
        const data = await res.json();
        setAiMatches(data.matchedMentors || []);
      }
    } catch (e) {}
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchMentors();
  };

  const handleBookSession = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedMentor(null);
    }, 2500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-semibold mb-2 border border-cyan-100">
              <Users className="h-3.5 w-3.5" />
              <span>Verified Industry Mentor Network</span>
            </div>
            <h1 className="font-outfit text-3xl font-extrabold text-slate-900 tracking-tight">
              Mentor <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Discovery & AI Matching</span>
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Connect with senior engineers, AI researchers, product leaders, and design directors for 1-on-1 portfolio feedback, career roadmap reviews, and interview prep.
            </p>
          </div>
        </div>

        {/* AI Matches Banner */}
        {aiMatches.length > 0 && (
          <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-50/90 via-indigo-50/60 to-cyan-50/60 border border-purple-100 shadow-sm mb-8 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="p-1.5 rounded-lg bg-[#635BFF] text-white">
                  <Sparkles className="h-4 w-4" />
                </span>
                <span className="font-outfit text-sm font-bold text-slate-900">
                  Top AI Mentor Matches for {user?.targetCareer || 'Software Engineer'}
                </span>
              </div>
              <span className="text-[11px] font-bold text-[#635BFF] bg-white px-2.5 py-1 rounded-lg border border-purple-100 shadow-2xs">
                Matched to Your Career Trajectory
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {aiMatches.slice(0, 3).map((matchItem, idx) => {
                const m: Mentor = matchItem.mentor;
                return (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-purple-100 shadow-2xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <img src={m.avatar} alt={m.name} className="w-10 h-10 rounded-xl object-cover border border-slate-100" />
                          <div>
                            <h4 className="font-outfit text-xs font-bold text-slate-900 leading-snug">{m.name}</h4>
                            <p className="text-[10px] text-slate-500 font-semibold">{m.company}</p>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {matchItem.matchScore}% Match
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-2 mb-2 leading-relaxed">
                        {matchItem.matchReasons?.[0] || m.bio}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedMentor(m)}
                      className="w-full mt-2 py-1.5 bg-purple-50 hover:bg-[#635BFF] text-[#635BFF] hover:text-white text-xs font-bold rounded-lg transition-colors text-center cursor-pointer"
                    >
                      Request Mentorship
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Search & Industry Filter Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-8 space-y-3">
          <form onSubmit={handleSearchSubmit} className="flex gap-2">
            <div className="relative flex-grow">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search mentors by name, role, company, or topic (e.g. Google, Deep Learning, System Design)..."
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

          {/* Industry Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-1 pr-1">Industry:</span>
            {INDUSTRIES.map(ind => (
              <button
                key={ind.id}
                type="button"
                onClick={() => setSelectedIndustry(ind.id)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedIndustry === ind.id
                    ? 'bg-[#635BFF] text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {ind.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mentors Grid */}
        {loading ? (
          <div className="text-center py-24 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#635BFF] mx-auto" />
            <p className="text-xs text-slate-500 mt-3 font-semibold">Loading verified mentor directory...</p>
          </div>
        ) : mentors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-purple-200 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Profile Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src={mentor.avatar}
                      alt={mentor.name}
                      className="w-14 h-14 rounded-2xl object-cover border border-slate-200 shadow-xs group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <div className="flex items-center space-x-1.5 mb-0.5">
                        <h3 className="font-outfit text-base font-bold text-slate-900 leading-tight group-hover:text-[#635BFF] transition-colors">
                          {mentor.name}
                        </h3>
                        <span title="Verified Professional">
                          <ShieldCheck className="h-4 w-4 text-[#635BFF]" />
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        {mentor.role}
                      </p>
                      <p className="text-[11px] font-bold text-[#635BFF]">
                        @{mentor.company}
                      </p>
                    </div>
                  </div>

                  {/* Rating & Sessions Stats */}
                  <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl mb-4 text-xs">
                    <div className="flex items-center space-x-1 text-amber-500 font-bold">
                      <Star className="h-3.5 w-3.5 fill-amber-400" />
                      <span>{mentor.rating}</span>
                      <span className="text-slate-400 font-normal">({mentor.reviewsCount})</span>
                    </div>
                    <span className="text-slate-400">&bull;</span>
                    <span className="text-slate-600 font-semibold">{mentor.experienceYears} Yrs Exp</span>
                    <span className="text-slate-400">&bull;</span>
                    <span className="text-slate-600 font-semibold">{mentor.sessionsGiven} Sessions</span>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-slate-500 line-clamp-3 mb-4 leading-relaxed">
                    {mentor.bio}
                  </p>

                  {/* Mentoring Topics */}
                  <div className="space-y-1 mb-4">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mentoring Topics</span>
                    <div className="flex flex-wrap gap-1">
                      {mentor.topics.map((t, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-purple-50 text-[#635BFF] text-[9px] font-bold border border-purple-100">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedMentor(mentor)}
                    className="flex-grow py-2.5 px-4 bg-[#635BFF] hover:bg-[#5146E5] text-white text-xs font-bold rounded-xl shadow-xs transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Book 1:1 Session</span>
                  </button>
                  <a
                    href={mentor.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
                    title="Search on LinkedIn"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <Users className="h-10 w-10 text-slate-300 mx-auto mb-2" />
            <h3 className="font-outfit text-base font-bold text-slate-800 mb-1">No Mentors Found</h3>
            <p className="text-xs text-slate-500 mb-4">Try clearing your filters or searching for another mentor domain.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedIndustry('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#635BFF] text-white rounded-xl text-xs font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Booking Dialog Modal */}
        <AnimatePresence>
          {selectedMentor && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedMentor(null)}
                className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white border border-slate-200 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative z-10 p-6 sm:p-8 space-y-4"
              >
                {bookingSuccess ? (
                  <div className="text-center py-8 space-y-3">
                    <div className="p-3 bg-emerald-50 text-emerald-600 rounded-full w-14 h-14 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="font-outfit text-lg font-bold text-slate-900">Mentorship Request Dispatched!</h3>
                    <p className="text-xs text-slate-500">
                      Your session inquiry has been sent to {selectedMentor.name}. You will receive a calendar invite once confirmed.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleBookSession} className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                      <img src={selectedMentor.avatar} alt={selectedMentor.name} className="w-12 h-12 rounded-xl object-cover" />
                      <div>
                        <h3 className="font-outfit text-base font-bold text-slate-900">Book 1:1 with {selectedMentor.name}</h3>
                        <p className="text-xs text-slate-500">{selectedMentor.role} at {selectedMentor.company}</p>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">What would you like guidance on?</label>
                      <select className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#635BFF] focus:outline-none">
                        {selectedMentor.topics.map((t, i) => (
                          <option key={i} value={t}>{t}</option>
                        ))}
                        <option value="Resume Review">Resume & Portfolio Review</option>
                        <option value="Mock Technical Drill">Mock Technical Interview</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Brief background or specific questions:</label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Tell the mentor about your target goals and specific hurdles..."
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#635BFF] focus:outline-none resize-none"
                      />
                    </div>

                    <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => setSelectedMentor(null)}
                        className="px-4 py-2 border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-semibold text-slate-700 cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 bg-[#635BFF] hover:bg-[#5146E5] text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
                      >
                        Confirm Booking Request
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
