'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, Search, ExternalLink, ShieldCheck, CheckCircle2, 
  Clock, Calendar, Sparkles, Filter, Check, ArrowUpRight, 
  HelpCircle, Eye, AlertCircle
} from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface Certification {
  id: string;
  name: string;
  provider: string;
  category: string;
  level: string;
  examCode?: string;
  description: string;
  skills: string[];
  priceNote: string;
  validity: string;
  prerequisites?: string[];
  officialUrl: string;
  verificationUrl: string;
  estimatedPrepWeeks: number;
}

export default function CertificationsHubPage() {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [userProgressMap, setUserProgressMap] = useState<Record<string, any>>({});
  const [verifyModalCert, setVerifyModalCert] = useState<Certification | null>(null);
  const [certificateInputId, setCertificateInputId] = useState('');

  const PROVIDERS = ['All', 'AWS', 'Google Cloud', 'Microsoft', 'Cisco', 'CompTIA', 'Meta', 'NVIDIA', 'Linux Foundation', 'Docker', 'HashiCorp', 'Salesforce', 'Oracle'];
  const LEVELS = ['All', 'Foundational', 'Associate', 'Professional', 'Specialty', 'Expert'];
  const CATEGORIES = ['All', 'Cloud', 'AI & ML', 'Cybersecurity', 'DevOps', 'Software Engineering', 'Networking', 'Data'];

  useEffect(() => {
    fetchCertifications();
    const saved = localStorage.getItem('cert_progress_map');
    if (saved) {
      try { setUserProgressMap(JSON.parse(saved)); } catch (e) {}
    }
  }, [selectedProvider, selectedLevel, selectedCategory]);

  const fetchCertifications = async () => {
    setLoading(true);
    try {
      let url = `${API_BASE_URL}/certifications?q=${encodeURIComponent(searchQuery)}&provider=${selectedProvider}&level=${selectedLevel}&category=${selectedCategory}`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setCertifications(data.certifications || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = (certId: string, status: string) => {
    const updated = { ...userProgressMap, [certId]: { status, updatedAt: new Date().toISOString() } };
    setUserProgressMap(updated);
    localStorage.setItem('cert_progress_map', JSON.stringify(updated));
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchCertifications();
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold mb-2 border border-amber-200">
              <Award className="h-3.5 w-3.5" />
              <span>Verified Industry Standards (30+ Credentials)</span>
            </div>
            <h1 className="font-outfit text-3xl font-extrabold text-slate-900 tracking-tight">
              Industry <span className="bg-gradient-to-r from-amber-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Certification Hub</span>
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Validate your technical capabilities with recognized credentials from AWS, Google Cloud, Microsoft, Cisco, CompTIA, and Meta.
            </p>
          </div>
        </div>

        {/* Search & Provider Filter Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-8 space-y-3">
          <form onSubmit={handleSearchSubmit} className="flex gap-2">
            <div className="relative flex-grow">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search certifications by name, skill, or exam code (e.g., SAA-C03, CKA, Security+)..."
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

          {/* Provider Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-1 pr-1">Provider:</span>
            {PROVIDERS.map(prov => (
              <button
                key={prov}
                type="button"
                onClick={() => setSelectedProvider(prov.toLowerCase())}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedProvider === prov.toLowerCase()
                    ? 'bg-[#635BFF] text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {prov}
              </button>
            ))}
          </div>

          {/* Level & Category Filters */}
          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100">
            <div className="flex items-center space-x-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase">Level:</span>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value.toLowerCase())}
                className="text-xs bg-slate-50 border border-slate-200 text-slate-700 py-1 px-2 rounded-lg focus:outline-none"
              >
                {LEVELS.map(lvl => (
                  <option key={lvl} value={lvl.toLowerCase()}>{lvl}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value.toLowerCase())}
                className="text-xs bg-slate-50 border border-slate-200 text-slate-700 py-1 px-2 rounded-lg focus:outline-none"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        {loading ? (
          <div className="text-center py-24 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#635BFF] mx-auto" />
            <p className="text-xs text-slate-500 mt-3 font-semibold">Loading certified credentials...</p>
          </div>
        ) : certifications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => {
              const userStatus = userProgressMap[cert.id]?.status || 'Not Started';
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-purple-200 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-800 text-[10px] font-bold border border-amber-200">
                        {cert.provider}
                      </span>
                      <div className="flex items-center space-x-1.5">
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-semibold">
                          {cert.level}
                        </span>
                        {cert.examCode && (
                          <span className="px-2 py-0.5 rounded bg-purple-50 text-[#635BFF] text-[10px] font-mono font-bold border border-purple-100">
                            {cert.examCode}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Name */}
                    <h3 className="font-outfit text-base font-bold text-slate-900 leading-snug mb-2 group-hover:text-[#635BFF] transition-colors">
                      {cert.name}
                    </h3>

                    <p className="text-xs text-slate-500 line-clamp-3 mb-4 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills Covered */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {cert.skills.slice(0, 4).map((skill, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-purple-50 text-[#635BFF] text-[9px] font-bold border border-purple-100">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Meta info */}
                    <div className="space-y-1 text-[11px] text-slate-500 mb-4 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Validity:</span>
                        <span className="font-semibold text-slate-700">{cert.validity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Estimated Prep:</span>
                        <span className="font-semibold text-slate-700">~{cert.estimatedPrepWeeks} Weeks</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Fee Policy:</span>
                        <span className="font-semibold text-slate-700">{cert.priceNote}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions & Status Selector */}
                  <div className="pt-3 border-t border-slate-100 space-y-3">
                    {/* User Preparation Status */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Your Status:</span>
                      <select
                        value={userStatus}
                        onChange={(e) => handleStatusChange(cert.id, e.target.value)}
                        className={`text-[11px] font-bold py-1 px-2.5 rounded-lg border focus:outline-none cursor-pointer ${
                          userStatus === 'Completed' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                          userStatus === 'Preparing' ? 'bg-purple-50 text-[#635BFF] border-purple-200' :
                          userStatus === 'Exam Scheduled' ? 'bg-amber-50 text-amber-800 border-amber-200' :
                          'bg-slate-50 text-slate-600 border-slate-200'
                        }`}
                      >
                        <option value="Not Started">Not Started</option>
                        <option value="Planning">Planning</option>
                        <option value="Preparing">Preparing</option>
                        <option value="Exam Scheduled">Exam Scheduled</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={cert.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-grow py-2 px-3 bg-[#635BFF] hover:bg-[#5146E5] text-white text-xs font-bold rounded-xl shadow-xs transition-all flex items-center justify-center space-x-1"
                      >
                        <span>Official Exam Page</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                      <button
                        type="button"
                        onClick={() => setVerifyModalCert(cert)}
                        className="p-2 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl text-xs font-bold transition-all"
                        title="Official Credential Verification"
                      >
                        <ShieldCheck className="h-4 w-4 text-emerald-600" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <Award className="h-10 w-10 text-slate-300 mx-auto mb-2" />
            <h3 className="font-outfit text-base font-bold text-slate-800 mb-1">No Certifications Found</h3>
            <p className="text-xs text-slate-500 mb-4">Try clearing your filters or searching for another certification.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedProvider('all');
                setSelectedLevel('all');
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#635BFF] text-white rounded-xl text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Verification Modal Dialog */}
        <AnimatePresence>
          {verifyModalCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setVerifyModalCert(null)}
                className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white border border-slate-200 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative z-10 p-6 sm:p-8 space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <span className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                    <ShieldCheck className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-outfit text-base font-bold text-slate-900">Official Certificate Verification</h3>
                    <p className="text-xs text-slate-500">{verifyModalCert.name}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                  Futuro AI verifies credentials directly via official registry portals (such as Credly, Accredible, or official vendor verification databases) without storing counterfeit claims.
                </p>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-600">Enter Certificate Badge / Credential ID:</label>
                  <input
                    type="text"
                    value={certificateInputId}
                    onChange={(e) => setCertificateInputId(e.target.value)}
                    placeholder="e.g. AWS-SEC-94827519 or Credly URL ID..."
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#635BFF] focus:outline-none"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setVerifyModalCert(null)}
                    className="px-4 py-2 border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-semibold text-slate-700"
                  >
                    Close
                  </button>
                  <a
                    href={verifyModalCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs flex items-center space-x-1"
                  >
                    <span>Verify on Official Provider Portal</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
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
