'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { 
  Users, BarChart2, Briefcase, Award, TrendingUp, 
  HelpCircle, RefreshCw, IndianRupee, Settings, ShieldCheck 
} from 'lucide-react';
import { 
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, 
  Tooltip, CartesianGrid, BarChart, Bar, Cell 
} from 'recharts';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface AnalyticsData {
  totalUsers: number;
  assessmentsTaken: number;
  resumesAnalyzed: number;
  activeInterviews: number;
  revenueMonthly: number;
  userRegistrationsOverTime: { date: string; count: number }[];
  careerPopularity: { name: string; value: number }[];
}

export default function AdminDashboard() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`${API_BASE_URL}/admin/analytics`);
      if (response.ok) {
        const result = await response.json();
        setData(result);
      } else {
        throw new Error('Analytics API error');
      }
    } catch (err) {
      setData(getMockAnalytics());
    } finally {
      setLoading(false);
    }
  };

  const COLORS = ['#635BFF', '#06B6D4', '#10B981', '#F59E0B', '#EC4899', '#8B5CF6'];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Banner */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-[#635BFF] text-xs font-semibold mb-3">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Platform Operations Hub</span>
          </div>
          <h1 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Admin Analytics <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">Console</span>
          </h1>
          <p className="text-xs text-slate-500 leading-relaxed">
            Monitor real-time user registrations, completed career assessments, resume ATS scans, and role distribution metrics.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#635BFF] mx-auto" />
            <p className="text-xs text-slate-500 mt-4 font-semibold">Compiling analytics metrics...</p>
          </div>
        ) : data ? (
          <div className="space-y-6">
            {/* Quick Counters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="p-2 rounded-xl bg-purple-50 text-[#635BFF] w-fit mb-3">
                  <Users className="h-4 w-4" />
                </div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Users</span>
                <span className="font-outfit font-extrabold text-xl text-slate-900 mt-0.5 block">{data.totalUsers.toLocaleString()}</span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="p-2 rounded-xl bg-cyan-50 text-cyan-600 w-fit mb-3">
                  <BarChart2 className="h-4 w-4" />
                </div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Assessments</span>
                <span className="font-outfit font-extrabold text-xl text-slate-900 mt-0.5 block">{data.assessmentsTaken.toLocaleString()}</span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 w-fit mb-3">
                  <Award className="h-4 w-4" />
                </div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Resumes Scanned</span>
                <span className="font-outfit font-extrabold text-xl text-slate-900 mt-0.5 block">{data.resumesAnalyzed.toLocaleString()}</span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="p-2 rounded-xl bg-pink-50 text-pink-600 w-fit mb-3">
                  <Briefcase className="h-4 w-4" />
                </div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mock Interviews</span>
                <span className="font-outfit font-extrabold text-xl text-slate-900 mt-0.5 block">{data.activeInterviews.toLocaleString()}</span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm col-span-2 sm:col-span-1">
                <div className="p-2 rounded-xl bg-amber-50 text-amber-600 w-fit mb-3">
                  <IndianRupee className="h-4 w-4" />
                </div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Simulated MRR</span>
                <span className="font-outfit font-extrabold text-xl text-slate-900 mt-0.5 block">₹{data.revenueMonthly.toLocaleString()}</span>
              </div>

            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* User Registration Over Time */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 pl-1">
                  User Registrations Growth
                </h3>
                <div className="h-[280px] w-full text-xs font-medium">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data.userRegistrationsOverTime}>
                      <defs>
                        <linearGradient id="regGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#635BFF" stopOpacity={0.25}/>
                          <stop offset="95%" stopColor="#635BFF" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" opacity={0.8} />
                      <XAxis dataKey="date" stroke="#94A3B8" fontSize={11} />
                      <YAxis stroke="#94A3B8" fontSize={11} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#FFFFFF', 
                          borderColor: '#E2E8F0',
                          borderRadius: '12px',
                          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                          color: '#0F172A',
                          fontSize: '12px'
                        }} 
                      />
                      <Area type="monotone" dataKey="count" stroke="#635BFF" strokeWidth={2.5} fillOpacity={1} fill="url(#regGrad)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Career Popularity Chart */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 pl-1">
                  Target Career Distribution
                </h3>
                <div className="h-[280px] w-full text-xs font-medium">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data.careerPopularity} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" opacity={0.8} />
                      <XAxis type="number" stroke="#94A3B8" fontSize={11} />
                      <YAxis dataKey="name" type="category" width={110} stroke="#94A3B8" fontSize={10} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#FFFFFF', 
                          borderColor: '#E2E8F0',
                          borderRadius: '12px',
                          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                          color: '#0F172A',
                          fontSize: '12px'
                        }} 
                      />
                      <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                        {data.careerPopularity.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

            </div>
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-xs text-slate-500">Could not sync operations analytics.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

function getMockAnalytics(): AnalyticsData {
  return {
    totalUsers: 1420,
    assessmentsTaken: 954,
    resumesAnalyzed: 412,
    activeInterviews: 189,
    revenueMonthly: 4500,
    userRegistrationsOverTime: [
      { date: 'Jan', count: 210 },
      { date: 'Feb', count: 320 },
      { date: 'Mar', count: 480 },
      { date: 'Apr', count: 680 },
      { date: 'May', count: 950 },
      { date: 'Jun', count: 1420 }
    ],
    careerPopularity: [
      { name: 'Software Engineer', value: 450 },
      { name: 'AI Engineer', value: 320 },
      { name: 'Data Scientist', value: 280 },
      { name: 'UI/UX Designer', value: 190 },
      { name: 'Cyber Security', value: 120 },
      { name: 'Others', value: 60 }
    ]
  };
}
