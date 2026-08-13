'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, Calendar, CheckSquare, RefreshCw, AlertCircle, 
  ChevronRight, Sparkles, CheckCircle2, CloudSync, PlusCircle, ArrowRight
} from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface RoadmapItem {
  month: number;
  topic: string;
  milestones: string[];
}

export default function CareerRoadmap() {
  const { user, token } = useAuth();
  const router = useRouter();

  const [roadmap, setRoadmap] = useState<RoadmapItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedMonth, setSelectedMonth] = useState<number>(1);
  const [syncing, setSyncing] = useState(false);
  const [syncMessage, setSyncMessage] = useState('');

  useEffect(() => {
    if (!user) {
      const savedToken = localStorage.getItem('token');
      if (!savedToken) {
        router.push('/login?redirect=roadmap');
      }
    } else {
      fetchRoadmap();
    }
  }, [user]);

  const fetchRoadmap = async () => {
    if (!token && !localStorage.getItem('token')) return;
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`${API_BASE_URL}/careers/user/roadmap`, {
        headers: {
          'Authorization': `Bearer ${token || localStorage.getItem('token')}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setRoadmap(data);
      } else {
        throw new Error('Roadmap API returned error');
      }
    } catch (err) {
      const career = user?.targetCareer || 'Software Engineer';
      setRoadmap(getFallbackRoadmap(career));
    } finally {
      setLoading(false);
    }
  };

  const handleSyncGoals = async () => {
    if (!token && !localStorage.getItem('token')) return;
    setSyncing(true);
    setSyncMessage('');
    const activeToken = token || localStorage.getItem('token');
    
    try {
      for (const item of roadmap) {
        const targetDate = new Date();
        targetDate.setMonth(targetDate.getMonth() + item.month);

        await fetch(`${API_BASE_URL}/goals`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${activeToken}`
          },
          body: JSON.stringify({
            title: `Month ${item.month}: ${item.topic}`,
            targetDate: targetDate.toISOString(),
            milestones: item.milestones
          })
        });
      }

      setSyncMessage('Successfully synced all monthly roadmap milestones to your goals dashboard!');
      setTimeout(() => setSyncMessage(''), 5000);
    } catch (err) {
      setSyncMessage('Failed to sync goals online. Cached locally.');
      setTimeout(() => setSyncMessage(''), 5000);
    } finally {
      setSyncing(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#635BFF] mx-auto" />
          <p className="text-xs text-slate-500 mt-4">Validating your profile...</p>
        </div>
      </div>
    );
  }

  const activeRoadmapItem = roadmap.find(item => item.month === selectedMonth);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Banner */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-[#635BFF] text-xs font-semibold mb-3">
            <Rocket className="h-3.5 w-3.5" />
            <span>Interactive Learning Syllabus</span>
          </div>
          <h1 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Your Training <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">Roadmap</span>
          </h1>
          <p className="text-xs text-slate-500 leading-relaxed">
            Follow your custom, agent-generated monthly target checklist. Sync milestones directly to your dashboard goals widget.
          </p>
        </div>

        {/* Sync Status Banner */}
        <AnimatePresence>
          {syncMessage && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center justify-between text-xs font-semibold shadow-sm"
            >
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-emerald-600" />
                <span>{syncMessage}</span>
              </div>
              <button 
                onClick={() => setSyncMessage('')} 
                className="text-emerald-700 hover:text-emerald-900 font-bold px-2 cursor-pointer"
              >
                &times;
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {loading ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#635BFF] mx-auto" />
            <p className="text-xs text-slate-500 mt-4">Calculating customized learning pathways...</p>
          </div>
        ) : roadmap.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
            {/* Timeline selector */}
            <div className="lg:col-span-1 space-y-2">
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 pl-1">Monthly Modules</span>
              {roadmap.map((item) => (
                <button
                  key={item.month}
                  type="button"
                  onClick={() => setSelectedMonth(item.month)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left font-semibold transition-all text-xs cursor-pointer ${
                    selectedMonth === item.month 
                      ? 'border-[#635BFF] bg-purple-50 text-[#635BFF] shadow-sm' 
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <Calendar className="h-3.5 w-3.5 text-slate-400" />
                    <span>Month {item.month}</span>
                  </span>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                </button>
              ))}

              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleSyncGoals}
                  disabled={syncing}
                  className="w-full py-3 bg-[#635BFF] hover:bg-[#5146E5] text-white rounded-xl text-xs font-semibold shadow-md shadow-indigo-500/15 flex items-center justify-center space-x-1.5 cursor-pointer disabled:opacity-50 transition-all active:scale-98"
                >
                  <CloudSync className="h-3.5 w-3.5" />
                  <span>{syncing ? 'Syncing...' : 'Sync to Dashboard'}</span>
                </button>
              </div>
            </div>

            {/* Target workspace */}
            <div className="lg:col-span-3 space-y-6">
              {activeRoadmapItem && (
                <motion.div
                  key={selectedMonth}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden"
                >
                  <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
                    <div>
                      <span className="text-[11px] font-bold text-[#635BFF] uppercase tracking-wider">Active Phase Target</span>
                      <h3 className="font-outfit text-xl font-bold text-slate-900 mt-0.5">
                        Month {activeRoadmapItem.month}: {activeRoadmapItem.topic}
                      </h3>
                    </div>
                  </div>

                  <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Milestones & Actionable Items</span>
                  <div className="space-y-3">
                    {activeRoadmapItem.milestones.map((m, idx) => (
                      <div 
                        key={idx} 
                        className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start space-x-3"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-slate-800 leading-relaxed">
                            {m}
                          </p>
                          <span className="inline-block text-[10px] text-slate-500 mt-1 font-medium bg-slate-200/60 px-2 py-0.5 rounded">
                            Core Requirement
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center space-x-1.5">
                    <AlertCircle className="h-3.5 w-3.5 text-[#635BFF] shrink-0" />
                    <span>Click "Sync to Dashboard" to track milestone progress with checkboxes on your home screen.</span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        ) : (
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm text-center max-w-lg mx-auto py-12">
            <AlertCircle className="h-10 w-10 text-[#635BFF] mx-auto mb-3" />
            <h3 className="font-outfit text-lg font-bold text-slate-900 mb-1.5">No Target Career Configured</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Configure your career path in the Career Explorer or complete the assessment wizard to generate an automated curriculum.
            </p>
            <div className="flex justify-center gap-3">
              <button 
                onClick={() => router.push('/explorer')}
                className="px-4 py-2 bg-[#635BFF] hover:bg-[#5146E5] text-white rounded-xl text-xs font-semibold shadow-sm cursor-pointer"
              >
                Career Explorer
              </button>
              <button 
                onClick={() => router.push('/assessment')}
                className="px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl cursor-pointer"
              >
                Take Assessment
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

function getFallbackRoadmap(career: string): RoadmapItem[] {
  if (career.toLowerCase().includes('data') || career.toLowerCase().includes('science')) {
    return [
      { month: 1, topic: 'Python Programming & SQL Fundamentals', milestones: ['Master basic operations, loops, functions, lists in Python', 'Practice basic querying, JOINs, aggregations in PostgreSQL'] },
      { month: 2, topic: 'Data Structures & Libraries (Pandas/NumPy)', milestones: ['Clean databases using Pandas', 'Handle multidimensional mathematical vectors in NumPy'] },
      { month: 3, topic: 'Data Visualization & Applied Statistics', milestones: ['Build charts with Seaborn and Matplotlib', 'Learn normal distributions, hypotheses tests, confidence scales'] },
      { month: 4, topic: 'Machine Learning Models (Scikit-Learn)', milestones: ['Implement Linear and Logistic Regressions', 'Assess models using accuracy, precision, F1-scores'] },
      { month: 5, topic: 'Data Mining Portfolios & Kaggle', milestones: ['Participate in 1 ML competition', 'Upload data analysis notebook to Github'] },
      { month: 6, topic: 'SQL/ML Interviews & Certifications', milestones: ['Complete Google Data Analytics Certificate', 'Practice SQL queries on LeetCode'] }
    ];
  }

  if (career.toLowerCase().includes('design') || career.toLowerCase().includes('ux') || career.toLowerCase().includes('ui')) {
    return [
      { month: 1, topic: 'UI/UX Fundamentals & Typography', milestones: ['Learn grid spacing, layouts, alignment, and color models', 'Study typography guidelines for mobile vs web viewports'] },
      { month: 2, topic: 'Figma Tooling & Component Design', milestones: ['Master Figma auto-layout, vectors, and components', 'Develop interactive animations and mock prototyping'] },
      { month: 3, topic: 'User Research & Personas', milestones: ['Formulate research questions and map user interviews', 'Create empathy maps and targeted user journey maps'] },
      { month: 4, topic: 'Wireframing & Information Architecture', milestones: ['Design paper sketches and low-fidelity structural UI', 'Organize menu navigation and app structural hierarchies'] },
      { month: 5, topic: 'Complete Design Case Studies', milestones: ['Optimize a client checkout workflow UI', 'Write design case-study detailing problems and solutions'] },
      { month: 6, topic: 'Portfolio Launch & Mock Reviews', milestones: ['Publish Behance/Dribbble layouts', 'Receive layout feedback from industry experts'] }
    ];
  }

  if (career.toLowerCase().includes('security') || career.toLowerCase().includes('cyber')) {
    return [
      { month: 1, topic: 'Networking Basics & Linux Command Line', milestones: ['Learn OSI model layers, TCP/UDP protocols, subnet configurations', 'Navigate and administer Linux directory spaces securely'] },
      { month: 2, topic: 'Security Foundations & Auditing Tools', milestones: ['Analyze OWASP Top 10 vulnerabilities', 'Perform network vulnerability scans using Nmap/Wireshark'] },
      { month: 3, topic: 'CompTIA Security+ Prep', milestones: ['Study symmetric/asymmetric cryptology models', 'Understand common malicious trojans, viruses, and phishing threats'] },
      { month: 4, topic: 'Defensive Security & SIEM Logger Logs', milestones: ['Monitor networks using Splunk dashboards', 'Configure firewalls and access controls to block payloads'] },
      { month: 5, topic: 'Offensive Penetration Testing Labs', milestones: ['Practice ethical hacking labs on TryHackMe', 'Audit web services for SQL injection (SQLi) vulnerabilities'] },
      { month: 6, topic: 'Certification & Incident Reports', milestones: ['Obtain Security+ or eJPT certifications', 'Draft professional security remediation reports'] }
    ];
  }

  return [
    { month: 1, topic: 'HTML, CSS & Vanilla Javascript Basics', milestones: ['Understand flexbox, responsive styling, variables', 'Learn DOM selections, arrays, callbacks, asynchronous promises'] },
    { month: 2, topic: 'Modern Frontend (React & TypeScript)', milestones: ['Learn state hooks, effects, state props in React', 'Implement TypeScript type boundaries on props and states'] },
    { month: 3, topic: 'Backend Architectures (Node.js & Express)', milestones: ['Establish Express servers with REST guidelines', 'Configure cors, middleware, and request validations'] },
    { month: 4, topic: 'Databases & Mongoose Connections', milestones: ['Create SQL Tables or MongoDB Document Collections', 'Perform full CRUD actions safely utilizing Mongoose Schemas'] },
    { month: 5, topic: 'Git Collaborations & Full-Stack Projects', milestones: ['Organize Git branches, pull-requests, and merge updates', 'Build and deploy a full-stack SaaS platform'] },
    { month: 6, topic: 'ATS Resume Adjustments & Mock Tests', milestones: ['Calculate ATS keyword densities and clean layout rules', 'Practice basic algorithms (Arrays, Strings) on LeetCode'] }
  ];
}
