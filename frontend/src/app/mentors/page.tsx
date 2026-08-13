'use client';

import React, { useEffect, useState } from 'react';
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
  ExternalLink
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

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
  available: boolean;
}

export default function MentorsPage() {
  const { user } = useAuth();
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const sampleMentors: Mentor[] = [
    {
      id: 'm-1',
      name: 'Priya Sharma',
      role: 'Staff AI Researcher',
      company: 'Google DeepMind',
      industry: 'Artificial Intelligence',
      experienceYears: 9,
      location: 'Bengaluru / Remote',
      bio: 'Pioneering LLM fine-tuning and retrieval optimization. Passionate about mentoring junior & mid-level engineers.',
      skills: ['PyTorch', 'System Architecture', 'RAG', 'LLMs'],
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      rating: 4.9,
      reviewsCount: 42,
      sessionsGiven: 120,
      available: true,
    },
    {
      id: 'm-2',
      name: 'Rohan Mehta',
      role: 'Principal Cloud Architect',
      company: 'Amazon Web Services',
      industry: 'Cloud & Infrastructure',
      experienceYears: 12,
      location: 'San Francisco / Remote',
      bio: 'Specializing in multi-region Kubernetes clusters, FinOps, and high-availability distributed systems.',
      skills: ['AWS', 'Kubernetes', 'Terraform', 'System Design'],
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      rating: 4.8,
      reviewsCount: 38,
      sessionsGiven: 95,
      available: true,
    },
  ];

  useEffect(() => {
    fetchMentors();
  }, [selectedIndustry]);

  const fetchMentors = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/mentors?industry=${selectedIndustry}`);
      if (res.ok) {
        const data = await res.json();
        if (data && data.length > 0) {
          setMentors(data);
          return;
        }
      }
    } catch (e) {}
    setMentors(sampleMentors);
    setLoading(false);
  };

  const filtered = mentors.filter((m) =>
    searchQuery
      ? m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.role.toLowerCase().includes(searchQuery.toLowerCase())
      : true
  );

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Badge variant="violet" size="sm" icon={<Users className="w-3.5 h-3.5 text-indigo-600" />}>
                Verified Industry Mentors
              </Badge>
              <span className="text-xs text-slate-500 font-semibold">&bull; 1-on-1 Strategic Guidance</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-outfit mt-1">
              Futuro Mentors Directory
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Connect with staff engineers, technical leaders, and researchers from top technology firms for 1-on-1 career advice and resume reviews.
            </p>
          </div>
        </div>

        {/* Search & Industry Filter */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search mentors by name, company, or role..."
              className="w-full bg-white border border-slate-300 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 font-medium"
            />
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((mentor) => (
            <Card key={mentor.id} variant="elevated" className="p-6 flex flex-col justify-between bg-white border-slate-200 rounded-3xl shadow-xs space-y-4">
              <div>
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-14 h-14 rounded-2xl object-cover border border-indigo-200 shadow-xs shrink-0"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-base font-bold text-slate-900 font-outfit">{mentor.name}</h3>
                      <Badge variant="emerald" size="sm">Verified</Badge>
                    </div>
                    <p className="text-xs font-semibold text-indigo-600 mt-0.5">
                      {mentor.role} @ {mentor.company}
                    </p>
                    <span className="text-[11px] text-slate-500 flex items-center space-x-1 mt-0.5 font-medium">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{mentor.location} &bull; {mentor.experienceYears} yrs exp</span>
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4 font-medium">
                  {mentor.bio}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {mentor.skills.map((skill, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded-lg text-[10px] bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-1 text-xs text-amber-600 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{mentor.rating} ({mentor.reviewsCount} reviews)</span>
                </div>
                <Button variant="primary" size="sm" leftIcon={<Calendar className="w-3.5 h-3.5" />}>
                  Book 1-on-1 Session
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
