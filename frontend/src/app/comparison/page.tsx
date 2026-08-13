'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { 
  GitCompare, ArrowRight, TrendingUp, Clock, Award, 
  CheckCircle2, IndianRupee, Brain, ListCollapse 
} from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface CareerPath {
  _id: string;
  title: string;
  description: string;
  salaryRange: {
    min: number;
    max: number;
    currency: string;
    avg: number;
  };
  growthPotential: string;
  growthRate: number;
  demandLevel: 'High' | 'Medium' | 'Low';
  requiredSkills: string[];
  recommendedPath: string[];
  workLifeBalance: number;
  difficultyLevel: number;
  category: string;
}

export default function CareerComparison() {
  const [allCareers, setAllCareers] = useState<CareerPath[]>([]);
  const [careerA, setCareerA] = useState<string>('');
  const [careerB, setCareerB] = useState<string>('');
  const [dataA, setDataA] = useState<CareerPath | null>(null);
  const [dataB, setDataB] = useState<CareerPath | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCareersList();
  }, []);

  const fetchCareersList = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/careers`);
      if (response.ok) {
        const data = await response.json();
        setAllCareers(data);
        if (data.length >= 2) {
          setCareerA(data[0].title);
          setCareerB(data[1].title);
          fetchComparison(data[0].title, data[1].title);
        }
      }
    } catch (err) {
      const fallbacks = getFallbackCareers();
      setAllCareers(fallbacks);
      setCareerA(fallbacks[0].title);
      setCareerB(fallbacks[1].title);
      setDataA(fallbacks[0]);
      setDataB(fallbacks[1]);
    }
  };

  const fetchComparison = async (titleA: string, titleB: string) => {
    if (!titleA || !titleB) return;
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${API_BASE_URL}/careers/compare?careerA=${encodeURIComponent(titleA)}&careerB=${encodeURIComponent(titleB)}`);
      if (response.ok) {
        const data = await response.json();
        setDataA(data.first);
        setDataB(data.second);
      } else {
        throw new Error('Comparison API failed');
      }
    } catch (err) {
      const matchA = allCareers.find(c => c.title === titleA) || null;
      const matchB = allCareers.find(c => c.title === titleB) || null;
      setDataA(matchA);
      setDataB(matchB);
    } finally {
      setLoading(false);
    }
  };

  const handleCompare = (e: React.FormEvent) => {
    e.preventDefault();
    if (careerA === careerB) {
      setError('Please select two different careers to compare.');
      return;
    }
    fetchComparison(careerA, careerB);
  };

  const getOverlapSkills = () => {
    if (!dataA || !dataB) return [];
    return dataA.requiredSkills.filter(s => 
      dataB.requiredSkills.some(sb => sb.toLowerCase() === s.toLowerCase())
    );
  };

  const getUniqueSkills = (primary: CareerPath, secondary: CareerPath) => {
    return primary.requiredSkills.filter(s => 
      !secondary.requiredSkills.some(sb => sb.toLowerCase() === s.toLowerCase())
    );
  };

  const overlap = getOverlapSkills();
  const uniqueA = dataA && dataB ? getUniqueSkills(dataA, dataB) : [];
  const uniqueB = dataA && dataB ? getUniqueSkills(dataB, dataA) : [];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Banner header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-[#635BFF] text-xs font-semibold mb-3">
            <GitCompare className="h-3.5 w-3.5" />
            <span>Side-by-Side Evaluation</span>
          </div>
          <h1 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Career Comparison <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">Matrix</span>
          </h1>
          <p className="text-xs text-slate-500 leading-relaxed">
            Compare compensation bands, skill overlaps, learning curves, and work-life balance scores across target professions.
          </p>
        </div>

        {/* Selection bar */}
        <form onSubmit={handleCompare} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Career Path A</label>
              <select
                value={careerA}
                onChange={(e) => setCareerA(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#635BFF] text-xs font-semibold text-slate-900"
              >
                {allCareers.map(c => (
                  <option key={c._id || c.title} value={c.title}>{c.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Career Path B</label>
              <select
                value={careerB}
                onChange={(e) => setCareerB(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#635BFF] text-xs font-semibold text-slate-900"
              >
                {allCareers.map(c => (
                  <option key={c._id || c.title} value={c.title}>{c.title}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col justify-end pt-2 md:pt-4">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 bg-[#635BFF] hover:bg-[#5146E5] text-white font-semibold rounded-xl text-xs active:scale-98 transition-all shadow-md shadow-indigo-500/15 flex items-center justify-center space-x-1.5 cursor-pointer disabled:opacity-50"
            >
              <span>{loading ? 'Comparing...' : 'Compare Roles'}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </form>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl mb-6 font-medium">
            {error}
          </div>
        )}

        {/* Comparison grid details */}
        {loading ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#635BFF] mx-auto" />
            <p className="text-xs text-slate-500 mt-4 font-semibold">Comparing metrics...</p>
          </div>
        ) : dataA && dataB ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card Career A */}
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden"
              >
                <span className="px-2.5 py-1 rounded-lg bg-purple-50 text-[#635BFF] text-[10px] font-bold uppercase mb-3 inline-block border border-purple-100">
                  {dataA.category}
                </span>
                <h3 className="font-outfit text-2xl font-extrabold text-slate-900 mb-1">{dataA.title === 'AI Engineer' ? 'AI Engineer / ML Engineer' : dataA.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {dataA.description}
                </p>

                <div className="space-y-2.5">
                  <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <span className="text-slate-500 font-medium flex items-center"><IndianRupee className="h-3.5 w-3.5 mr-1 text-slate-400" /> Avg Salary</span>
                    <span className="font-bold text-slate-900">₹{dataA.salaryRange.min}–{dataA.salaryRange.max} LPA</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <span className="text-slate-500 font-medium flex items-center"><TrendingUp className="h-3.5 w-3.5 mr-1 text-slate-400" /> Growth Rate</span>
                    <span className="font-bold text-emerald-600">{dataA.growthPotential} (+{dataA.growthRate}%)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <span className="text-slate-500 font-medium flex items-center"><Clock className="h-3.5 w-3.5 mr-1 text-slate-400" /> Work-Life Balance</span>
                    <span className="font-bold text-[#635BFF]">{dataA.workLifeBalance} / 10</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <span className="text-slate-500 font-medium flex items-center"><Award className="h-3.5 w-3.5 mr-1 text-slate-400" /> Learning Curve</span>
                    <span className="font-bold text-slate-900">Level {dataA.difficultyLevel} / 10</span>
                  </div>
                </div>
              </motion.div>

              {/* Card Career B */}
              <motion.div 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden"
              >
                <span className="px-2.5 py-1 rounded-lg bg-cyan-50 text-cyan-700 text-[10px] font-bold uppercase mb-3 inline-block border border-cyan-100">
                  {dataB.category}
                </span>
                <h3 className="font-outfit text-2xl font-extrabold text-slate-900 mb-1">{dataB.title === 'AI Engineer' ? 'AI Engineer / ML Engineer' : dataB.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {dataB.description}
                </p>

                <div className="space-y-2.5">
                  <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <span className="text-slate-500 font-medium flex items-center"><IndianRupee className="h-3.5 w-3.5 mr-1 text-slate-400" /> Avg Salary</span>
                    <span className="font-bold text-slate-900">₹{dataB.salaryRange.min}–{dataB.salaryRange.max} LPA</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <span className="text-slate-500 font-medium flex items-center"><TrendingUp className="h-3.5 w-3.5 mr-1 text-slate-400" /> Growth Rate</span>
                    <span className="font-bold text-emerald-600">{dataB.growthPotential} (+{dataB.growthRate}%)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <span className="text-slate-500 font-medium flex items-center"><Clock className="h-3.5 w-3.5 mr-1 text-slate-400" /> Work-Life Balance</span>
                    <span className="font-bold text-cyan-600">{dataB.workLifeBalance} / 10</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <span className="text-slate-500 font-medium flex items-center"><Award className="h-3.5 w-3.5 mr-1 text-slate-400" /> Learning Curve</span>
                    <span className="font-bold text-slate-900">Level {dataB.difficultyLevel} / 10</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Skills Intersection Review */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4"
            >
              <h3 className="font-outfit text-base font-bold text-slate-900 flex items-center space-x-2">
                <Brain className="h-4 w-4 text-[#635BFF]" />
                <span>Skills Overlap & Unique Competencies</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Unique to A */}
                <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100">
                  <h4 className="font-bold text-[11px] uppercase tracking-wider text-[#635BFF] mb-2.5">
                    Unique to {dataA.title}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {uniqueA.map((s, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-white text-xs font-semibold text-slate-700 border border-slate-200">
                        {s}
                      </span>
                    ))}
                    {uniqueA.length === 0 && <span className="text-xs text-slate-400 italic">No unique skills.</span>}
                  </div>
                </div>

                {/* Overlap */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-[11px] uppercase tracking-wider text-slate-700 mb-2.5">
                    Shared Skills (Common Core)
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {overlap.map((s, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-[#635BFF] text-white text-xs font-semibold shadow-xs">
                        {s}
                      </span>
                    ))}
                    {overlap.length === 0 && <span className="text-xs text-slate-400 italic">No overlapping skills.</span>}
                  </div>
                </div>

                {/* Unique to B */}
                <div className="p-4 rounded-xl bg-cyan-50/50 border border-cyan-100">
                  <h4 className="font-bold text-[11px] uppercase tracking-wider text-cyan-700 mb-2.5">
                    Unique to {dataB.title}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {uniqueB.map((s, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-white text-xs font-semibold text-slate-700 border border-slate-200">
                        {s}
                      </span>
                    ))}
                    {uniqueB.length === 0 && <span className="text-xs text-slate-400 italic">No unique skills.</span>}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Path Details Comparisons */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4"
            >
              <h3 className="font-outfit text-base font-bold text-slate-900 flex items-center space-x-2">
                <ListCollapse className="h-4 w-4 text-[#635BFF]" />
                <span>Learning Roadmap Milestone Comparison</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-[11px] uppercase tracking-wider text-[#635BFF] mb-2.5">{dataA.title} Path</h4>
                  <ul className="space-y-2 text-xs">
                    {dataA.recommendedPath.map((step, i) => (
                      <li key={i} className="flex items-start space-x-2 text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[11px] uppercase tracking-wider text-cyan-700 mb-2.5">{dataB.title} Path</h4>
                  <ul className="space-y-2 text-xs">
                    {dataB.recommendedPath.map((step, i) => (
                      <li key={i} className="flex items-start space-x-2 text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-cyan-600 shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-xs text-slate-500">Please select two careers to generate comparative indexes.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

function getFallbackCareers(): CareerPath[] {
  return [
    {
      _id: '1',
      title: 'Software Engineer',
      description: 'Design, write, and test code for applications, systems, or services. Engineers build scalable infrastructures and robust web apps.',
      salaryRange: { min: 8, max: 15, currency: 'INR', avg: 11.5 },
      growthPotential: 'High',
      growthRate: 25,
      demandLevel: 'High',
      requiredSkills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Algorithms', 'Databases', 'System Design', 'Git'],
      recommendedPath: [
        'Learn fundamental programming concepts in Python or TypeScript.',
        'Build core HTML/CSS and frontend skills (React/Next.js).',
        'Understand backend web servers, APIs, and databases.',
        'Study data structures, algorithms, and git-based workflows.'
      ],
      workLifeBalance: 7,
      difficultyLevel: 6,
      category: 'Engineering'
    },
    {
      _id: '2',
      title: 'Data Scientist',
      description: 'Use statistics, math, and machine learning models to analyze complex datasets and extract strategic business insights.',
      salaryRange: { min: 12, max: 18, currency: 'INR', avg: 15 },
      growthPotential: 'Exponential',
      growthRate: 35,
      demandLevel: 'High',
      requiredSkills: ['Python', 'SQL', 'Machine Learning', 'Statistics', 'Pandas/NumPy', 'Data Visualization', 'Big Data'],
      recommendedPath: [
        'Master SQL for data extraction and Python analysis scripts.',
        'Learn linear algebra, probability, and statistics.',
        'Acquire pandas, numpy, and matplotlib visualization capabilities.',
        'Study core ML concepts (regressions, classifications).'
      ],
      workLifeBalance: 8,
      difficultyLevel: 8,
      category: 'Data & AI'
    },
    {
      _id: '3',
      title: 'AI Engineer',
      description: 'Develop and deploy cutting-edge artificial intelligence systems, large language models (LLMs), neural networks, and computer vision pipelines.',
      salaryRange: { min: 12, max: 20, currency: 'INR', avg: 16 },
      growthPotential: 'Exponential',
      growthRate: 48,
      demandLevel: 'High',
      requiredSkills: ['Python', 'Deep Learning', 'PyTorch/TensorFlow', 'LLMs', 'Transformers', 'APIs', 'Docker', 'Cloud Compute'],
      recommendedPath: [
        'Learn advanced Python programming and machine learning basics.',
        'Dive into neural networks, PyTorch/TensorFlow, and deep learning architectures.',
        'Master prompt engineering, fine-tuning LLMs, and RAG.',
        'Learn deployment skills using FastAPI and Docker.'
      ],
      workLifeBalance: 6,
      difficultyLevel: 9,
      category: 'Data & AI'
    },
    {
      _id: '4',
      title: 'Cyber Security Analyst',
      description: 'Protect network environments, critical infrastructure, data integrity, and operational servers from active cyber attacks, intrusions, and breaches.',
      salaryRange: { min: 8, max: 15, currency: 'INR', avg: 11.5 },
      growthPotential: 'High',
      growthRate: 32,
      demandLevel: 'High',
      requiredSkills: ['Networking', 'Linux', 'Firewalls', 'Ethical Hacking', 'SIEM', 'Cryptography', 'CompTIA Security+'],
      recommendedPath: [
        'Understand TCP/IP protocols, subnetting, and Linux administration.',
        'Learn to audit code and network interfaces for vulnerabilities.',
        'Obtain foundational certifications like CompTIA Security+.',
        'Practice virtual labs testing network security controls.'
      ],
      workLifeBalance: 7,
      difficultyLevel: 7,
      category: 'Security'
    },
    {
      _id: '5',
      title: 'UI/UX Designer',
      description: 'Design intuitive interfaces, screen mockups, branding layouts, user flows, and wireframes to ensure excellent human-computer interaction.',
      salaryRange: { min: 7, max: 14, currency: 'INR', avg: 10.5 },
      growthPotential: 'Medium',
      growthRate: 16,
      demandLevel: 'Medium',
      requiredSkills: ['Figma', 'Wireframing', 'User Research', 'Prototyping', 'Visual Design', 'Design Systems', 'Typography'],
      recommendedPath: [
        'Learn Figma toolsets and core user experience principles.',
        'Understand typography, spacing, contrast grids, and layouts.',
        'Conduct user interviews, persona creation, and user journey maps.',
        'Master wireframing, high-fidelity mockups, and interactive prototyping.'
      ],
      workLifeBalance: 8,
      difficultyLevel: 5,
      category: 'Design'
    },
    {
      _id: '6',
      title: 'Product Manager',
      description: 'Oversee product lifecycles, coordinate development sprints, formulate feature roadmaps, and bridge gaps between engineering, design, and business teams.',
      salaryRange: { min: 18, max: 35, currency: 'INR', avg: 26.5 },
      growthPotential: 'High',
      growthRate: 20,
      demandLevel: 'High',
      requiredSkills: ['Agile/Scrum', 'Product Strategy', 'Analytics', 'UX Principles', 'Market Research', 'Roadmapping', 'Jira'],
      recommendedPath: [
        'Gain domain expertise in engineering, business, or design.',
        'Learn agile methodologies, backlog pruning, and sprint planning.',
        'Understand product analytics tools (Mixpanel, SQL).',
        'Build soft skills: written coordination, presenting, cross-functional leading.'
      ],
      workLifeBalance: 7,
      difficultyLevel: 7,
      category: 'Management'
    },
    {
      _id: '7',
      title: 'Digital Marketer',
      description: 'Design online advertising campaigns, optimize organic search engine placements (SEO), run email newsletters, and grow user acquisition.',
      salaryRange: { min: 5, max: 10, currency: 'INR', avg: 7.5 },
      growthPotential: 'Medium',
      growthRate: 12,
      demandLevel: 'Medium',
      requiredSkills: ['SEO', 'Google Analytics', 'Content Writing', 'Copywriting', 'Social Media Ads', 'Email Marketing', 'A/B Testing'],
      recommendedPath: [
        'Learn search engine optimization (SEO) principles and keywords.',
        'Understand copywriting and write short blogs or newsletters.',
        'Obtain certifications in Google Analytics and Google/Meta Ads.',
        'Manage social channels and execute minor paid advertising campaigns.'
      ],
      workLifeBalance: 8,
      difficultyLevel: 4,
      category: 'Marketing'
    }
  ];
}
