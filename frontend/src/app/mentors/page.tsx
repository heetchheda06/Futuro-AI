'use client';

import React, { useState, useMemo } from 'react';
import { AppShell } from '../../components/shell/AppShell';
import { useAuth } from '../../context/AuthContext';
import {
  Users,
  Search,
  Sparkles,
  Star,
  MapPin,
  Briefcase,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ExternalLink,
  Clock,
  X,
  MessageSquare,
  BadgeCheck
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { MENTORS_DATA, MentorData } from '../../data/mentorsData';

export default function MentorsPage() {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [activeBookingMentor, setActiveBookingMentor] = useState<MentorData | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedDate, setSelectedDate] = useState('2026-08-18');
  const [selectedTime, setSelectedTime] = useState('18:00');

  const industries = [
    'All',
    'Artificial Intelligence',
    'Cloud & Infrastructure',
    'Design & UI/UX',
    'Data Science & Analytics',
    'Cybersecurity',
    'Software Engineering',
    'Engineering Leadership & Strategy',
  ];

  const filteredMentors = useMemo(() => {
    return MENTORS_DATA.filter((m) => {
      const matchesSearch =
        searchQuery === '' ||
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesIndustry = selectedIndustry === 'All' || m.industry === selectedIndustry;

      return matchesSearch && matchesIndustry;
    });
  }, [searchQuery, selectedIndustry]);

  const handleConfirmBooking = () => {
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setActiveBookingMentor(null);
    }, 2500);
  };

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        {/* Header Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Badge variant="violet" size="sm" icon={<Users className="w-3.5 h-3.5 text-indigo-400" />}>
                Verified Industry Mentors ({MENTORS_DATA.length} Active Mentors)
              </Badge>
              <Badge variant="emerald" size="sm">
                1-on-1 Strategic Guidance
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-outfit text-white">
              Futuro Mentors Directory
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Connect with 7 verified staff engineers, technical directors, principal architects, and researchers from Google DeepMind, AWS, Microsoft, Meta, Cisco, Stripe, and Swiggy.
            </p>
          </div>

          {/* Directory Quick Stats */}
          <div className="grid grid-cols-3 gap-3 text-center sm:text-left min-w-[280px]">
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-indigo-300 font-bold block">Mentors</span>
              <span className="text-xl sm:text-2xl font-black text-white font-outfit">{MENTORS_DATA.length}</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-indigo-300 font-bold block">Avg Rating</span>
              <span className="text-xl sm:text-2xl font-black text-amber-400 font-outfit">4.9 ★</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-indigo-300 font-bold block">Sessions</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400 font-outfit">790+</span>
            </div>
          </div>
        </div>

        {/* Search & Industry Filter Toolbar */}
        <Card variant="default" className="p-4 sm:p-6 space-y-4 bg-white border-slate-200 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search mentors by name, company, role, or skills (e.g. Priya, DeepMind, System Design, AWS)..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-8 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Industry Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100">
            <div className="flex flex-wrap gap-2">
              {industries.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedIndustry === ind
                      ? 'bg-indigo-600 text-white shadow-2xs'
                      : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>

            <div className="text-xs text-slate-500 font-semibold">
              Showing <span className="text-indigo-600 font-extrabold">{filteredMentors.length}</span> of {MENTORS_DATA.length} mentors
            </div>
          </div>
        </Card>

        {/* Empty Search Result */}
        {filteredMentors.length === 0 && (
          <Card variant="default" className="p-12 text-center space-y-3 bg-white border-slate-200">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-outfit">No Mentors Found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              No verified industry mentors matched your current search filters. Try resetting search query or selecting a different industry.
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedIndustry('All');
              }}
            >
              Reset Filters
            </Button>
          </Card>
        )}

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredMentors.map((mentor) => (
            <Card
              key={mentor.id}
              variant="interactive"
              className="p-6 flex flex-col justify-between bg-white border-slate-200 rounded-3xl shadow-xs hover:border-indigo-300 hover:shadow-md transition-all space-y-4"
            >
              <div className="space-y-3">
                {/* Header Profile */}
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <img
                      src={mentor.avatar}
                      alt={mentor.name}
                      className="w-16 h-16 rounded-2xl object-cover border border-indigo-100 shadow-2xs shrink-0"
                    />
                    <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" title="Active & Available" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 font-outfit">{mentor.name}</h3>
                      <Badge variant="emerald" size="sm" icon={<BadgeCheck className="w-3.5 h-3.5 text-emerald-600" />}>
                        Verified
                      </Badge>
                    </div>
                    <p className="text-xs font-bold text-indigo-600">
                      {mentor.role} @ <span className="text-slate-900 font-extrabold">{mentor.company}</span>
                    </p>
                    <div className="text-[11px] text-slate-500 flex items-center space-x-2 font-medium">
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{mentor.location}</span>
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center space-x-1 font-mono">
                        <Briefcase className="w-3 h-3 text-slate-400" />
                        <span>{mentor.experienceYears} yrs exp</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bio Callout */}
                <p className="text-xs text-slate-600 leading-relaxed font-medium bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  {mentor.bio}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {mentor.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-xl text-[10px] bg-slate-100 text-slate-700 font-bold border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Actions Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center space-x-1 text-xs text-amber-600 font-extrabold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    <span>{mentor.rating.toFixed(1)} ({mentor.reviewsCount} reviews)</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium block">
                    {mentor.sessionsGiven} 1-on-1 sessions completed
                  </span>
                </div>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    setActiveBookingMentor(mentor);
                    setSelectedTopic(mentor.topics[0] || '1-on-1 Strategic Mentorship');
                  }}
                  leftIcon={<Calendar className="w-3.5 h-3.5" />}
                  className="font-bold text-xs bg-indigo-600 hover:bg-indigo-500 shadow-2xs"
                >
                  Book 1-on-1 Session
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* 1-on-1 Booking Modal */}
        {activeBookingMentor && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in overflow-y-auto">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-lg w-full my-8 space-y-6 shadow-2xl">
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center space-x-3">
                  <img
                    src={activeBookingMentor.avatar}
                    alt={activeBookingMentor.name}
                    className="w-12 h-12 rounded-2xl object-cover border border-indigo-200"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-outfit">
                      Book Session with {activeBookingMentor.name}
                    </h3>
                    <p className="text-xs font-semibold text-indigo-600">
                      {activeBookingMentor.role} @ {activeBookingMentor.company}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveBookingMentor(null)}
                  className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {bookingSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-extrabold text-slate-900 font-outfit">Session Request Sent!</h4>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto font-medium">
                    Your 1-on-1 mentorship session request with <strong>{activeBookingMentor.name}</strong> on <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong> has been confirmed. Check your email for calendar invite link!
                  </p>
                </div>
              ) : (
                <div className="space-y-4 text-xs">
                  {/* Select Topic */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800 uppercase tracking-wider text-[10px] block">
                      Select Session Topic
                    </label>
                    <select
                      value={selectedTopic}
                      onChange={(e) => setSelectedTopic(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs text-slate-900 font-semibold focus:outline-none focus:border-indigo-500"
                    >
                      {activeBookingMentor.topics.map((t, idx) => (
                        <option key={idx} value={t}>
                          {t}
                        </option>
                      ))}
                      <option value="Resume & Portfolio Review">Resume & Portfolio Review</option>
                      <option value="Mock Technical System Design Interview">Mock Technical System Design Interview</option>
                    </select>
                  </div>

                  {/* Select Date & Time */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-800 uppercase tracking-wider text-[10px] block">
                        Date
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs text-slate-900 font-semibold focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-800 uppercase tracking-wider text-[10px] block">
                        Time Slot (45 min)
                      </label>
                      <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs text-slate-900 font-semibold focus:outline-none focus:border-indigo-500"
                      >
                        <option value="17:00">05:00 PM IST</option>
                        <option value="18:00">06:00 PM IST</option>
                        <option value="19:30">07:30 PM IST</option>
                        <option value="21:00">09:00 PM IST</option>
                      </select>
                    </div>
                  </div>

                  {/* Session Summary Callout */}
                  <div className="p-3 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-slate-700 space-y-1">
                    <div className="flex items-center justify-between font-bold text-indigo-900">
                      <span>45-Minute Strategic Call</span>
                      <span>Free for Futuro Users</span>
                    </div>
                    <p className="text-[11px] text-slate-600">
                      Includes personalized feedback, 1-on-1 Q&A, and post-session written action points.
                    </p>
                  </div>

                  {/* Modal Footer */}
                  <div className="flex items-center justify-end space-x-2 pt-4 border-t border-slate-200">
                    <Button variant="secondary" size="sm" onClick={() => setActiveBookingMentor(null)}>
                      Cancel
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleConfirmBooking}
                      className="bg-indigo-600 hover:bg-indigo-500 font-bold"
                    >
                      Confirm Session Booking
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
