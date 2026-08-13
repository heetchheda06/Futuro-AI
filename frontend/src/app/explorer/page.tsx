'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Briefcase, TrendingUp, Award, Clock, AlertTriangle, 
  ChevronRight, Compass, Sparkles, Star, BookOpen, CheckCircle2 
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

export default function CareerExplorer() {
  const { user, token, updateProfile } = useAuth();
  const router = useRouter();

  const [careers, setCareers] = useState<CareerPath[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCareer, setSelectedCareer] = useState<CareerPath | null>(null);
  const [updatingCareer, setUpdatingCareer] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const categories = ['All', 'Engineering', 'Data & AI', 'Security', 'Design', 'Management', 'Marketing'];

  useEffect(() => {
    fetchCareers();
  }, [selectedCategory]);

  const fetchCareers = async () => {
    setLoading(true);
    try {
      let url = `${API_BASE_URL}/careers`;
      const params = new URLSearchParams();
      if (selectedCategory !== 'All') {
        params.append('category', selectedCategory);
      }
      if (params.toString()) {
        url += `?${params.toString()}`;
      }

      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setCareers(data);
      }
    } catch (err) {
      setCareers(getFallbackCareers());
    } finally {
      setLoading(false);
    }
  };

  const handleSelectTargetCareer = async (careerTitle: string) => {
    if (!token && !localStorage.getItem('token')) {
      router.push('/login?redirect=explorer');
      return;
    }
    setUpdatingCareer(true);
    try {
      await updateProfile({ targetCareer: careerTitle });
      showToast(`Successfully set ${careerTitle} as your target career!`);
    } catch (err) {
      showToast('Could not save target career.');
    } finally {
      setUpdatingCareer(false);
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  const filteredCareers = careers.filter(c => 
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Toast */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-20 right-4 z-50 bg-[#635BFF] text-white px-5 py-3 rounded-2xl shadow-xl font-bold flex items-center space-x-2 text-xs"
            >
              <Sparkles className="h-4 w-4 text-cyan-200" />
              <span>{toastMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Banner */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-[#635BFF] text-xs font-semibold mb-3">
            <Compass className="h-3.5 w-3.5" />
            <span>Interactive Industry Catalog</span>
          </div>
          <h1 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Explore Trending <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">Careers</span>
          </h1>
          <p className="text-xs text-slate-500 leading-relaxed">
            Gain deep insights into industry compensation, skill prerequisites, learning curves, and market growth forecasts.
          </p>
        </div>

        {/* Filters Controls */}
        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search careers, skills, or titles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#635BFF] text-xs text-slate-900 placeholder-slate-400"
            />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat 
                    ? 'bg-[#635BFF] text-white shadow-sm' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Explorer Content */}
        {loading ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#635BFF] mx-auto" />
            <p className="text-xs text-slate-500 mt-4 font-semibold">Loading industry catalog...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCareers.map((c, idx) => (
              <motion.div
                key={c._id || idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-200 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-2 py-0.5 rounded-md bg-purple-50 text-[#635BFF] text-[10px] font-bold uppercase tracking-wide border border-purple-100">
                      {c.category}
                    </span>
                    <span className="flex items-center space-x-1 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">
                      <TrendingUp className="h-3 w-3" />
                      <span>+{c.growthRate}% Yr</span>
                    </span>
                  </div>

                  <h3 className="font-outfit text-lg font-bold text-slate-900 mb-1 group-hover:text-[#635BFF] transition-colors">
                    {c.title === 'AI Engineer' ? 'AI Engineer / ML Engineer' : c.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed mb-5">
                    {c.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 mb-5">
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Avg Salary</span>
                      <span className="font-outfit font-bold text-xs text-slate-800">
                        ₹{c.salaryRange.min}–{c.salaryRange.max} LPA
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Market Demand</span>
                      <span className="font-outfit font-bold text-xs text-[#635BFF]">
                        {c.demandLevel}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 pt-3.5 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setSelectedCareer(c)}
                    className="flex-grow py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-all text-center cursor-pointer"
                  >
                    View Breakdown
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelectTargetCareer(c.title)}
                    disabled={updatingCareer}
                    className={`p-2 rounded-xl transition-all border cursor-pointer ${
                      user?.targetCareer === c.title 
                        ? 'bg-[#635BFF] border-[#635BFF] text-white' 
                        : 'border-slate-200 text-slate-400 hover:text-[#635BFF] hover:bg-purple-50'
                    }`}
                    title="Set as Target Career"
                  >
                    <Star className={`h-4 w-4 ${user?.targetCareer === c.title ? 'fill-current text-white' : ''}`} />
                  </button>
                </div>
              </motion.div>
            ))}

            {filteredCareers.length === 0 && (
              <div className="col-span-full text-center py-12 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <AlertTriangle className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                <p className="text-xs text-slate-500">No career paths match your query filters.</p>
              </div>
            )}
          </div>
        )}

        {/* Modal Detail Panel */}
        <AnimatePresence>
          {selectedCareer && (
            <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="bg-white border border-slate-200 rounded-2xl w-full max-w-2xl shadow-2xl p-6 sm:p-8 relative overflow-hidden"
              >
                <button 
                  type="button"
                  onClick={() => setSelectedCareer(null)}
                  className="absolute top-4 right-4 h-7 w-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 text-sm font-bold transition-all cursor-pointer"
                >
                  &times;
                </button>

                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-purple-50 text-[#635BFF] text-[10px] font-bold uppercase border border-purple-100">
                    {selectedCareer.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase border border-emerald-100">
                    Growth: +{selectedCareer.growthRate}%
                  </span>
                </div>

                <h2 className="font-outfit text-2xl font-bold text-slate-900 mb-2">{selectedCareer.title === 'AI Engineer' ? 'AI Engineer / ML Engineer' : selectedCareer.title}</h2>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {selectedCareer.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <Clock className="h-4 w-4 text-[#635BFF] mx-auto mb-1" />
                    <span className="block text-[10px] text-slate-400 uppercase font-semibold">Work-Life Balance</span>
                    <span className="font-outfit font-bold text-xs text-slate-900">{selectedCareer.workLifeBalance} / 10 Rating</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <Award className="h-4 w-4 text-[#635BFF] mx-auto mb-1" />
                    <span className="block text-[10px] text-slate-400 uppercase font-semibold">Learning Curve</span>
                    <span className="font-outfit font-bold text-xs text-slate-900">Level {selectedCareer.difficultyLevel} / 10</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <TrendingUp className="h-4 w-4 text-[#635BFF] mx-auto mb-1" />
                    <span className="block text-[10px] text-slate-400 uppercase font-semibold">Salary Range</span>
                    <span className="font-outfit font-bold text-xs text-slate-900">
                      ₹{selectedCareer.salaryRange.min}–{selectedCareer.salaryRange.max} LPA
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                  <div>
                    <h4 className="font-bold text-[11px] uppercase tracking-wider text-slate-500 mb-2 flex items-center space-x-1">
                      <Star className="h-3.5 w-3.5 text-[#635BFF]" />
                      <span>Required Key Skills</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCareer.requiredSkills.map((s, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-[11px] uppercase tracking-wider text-slate-500 mb-2 flex items-center space-x-1">
                      <BookOpen className="h-3.5 w-3.5 text-[#635BFF]" />
                      <span>Path Highlights</span>
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {selectedCareer.recommendedPath.map((step, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex justify-end gap-2.5 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setSelectedCareer(null)}
                    className="px-4 py-2 border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-semibold text-slate-700 cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      handleSelectTargetCareer(selectedCareer.title);
                      setSelectedCareer(null);
                    }}
                    className="px-4 py-2 bg-[#635BFF] hover:bg-[#5146E5] text-white font-semibold rounded-xl text-xs shadow-md shadow-indigo-500/15 cursor-pointer"
                  >
                    Set as Active Target Career
                  </button>
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
