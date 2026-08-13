'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Search, Sparkles, Filter, MapPin, 
  GraduationCap, Award, ArrowUpRight, Check, X, 
  Layers, ExternalLink, Globe, IndianRupee, ShieldCheck, 
  Compass, Eye
} from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface College {
  id: string;
  name: string;
  shortName: string;
  city: string;
  state: string;
  type: string;
  establishedYear: number;
  nirfRank?: number;
  globalRank?: string;
  courses: string[];
  feesAnnualINR: string;
  placement: {
    averageLPA: string;
    highestLPA: string;
    topRecruiters: string[];
  };
  entranceExams: string[];
  campusSizeAcres?: number;
  website: string;
  virtualTourUrl?: string;
  image: string;
  description: string;
  accreditation: string;
}

export default function CollegesDiscoveryPage() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedState, setSelectedState] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState('all');

  // Comparison State
  const [comparedCollegeIds, setComparedCollegeIds] = useState<string[]>([]);
  const [showComparisonModal, setShowComparisonModal] = useState(false);

  const TYPES = ['All', 'IIT', 'NIT', 'IIIT', 'BITS', 'Government', 'Private', 'International'];

  useEffect(() => {
    fetchColleges();
  }, [selectedType, selectedState, selectedCourse]);

  const fetchColleges = async () => {
    setLoading(true);
    try {
      let url = `${API_BASE_URL}/colleges?q=${encodeURIComponent(searchQuery)}&type=${selectedType}&state=${selectedState}&course=${selectedCourse}`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setColleges(data.colleges || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchColleges();
  };

  const toggleCompare = (collegeId: string) => {
    if (comparedCollegeIds.includes(collegeId)) {
      setComparedCollegeIds(comparedCollegeIds.filter(id => id !== collegeId));
    } else {
      if (comparedCollegeIds.length >= 4) {
        alert('You can compare a maximum of 4 colleges simultaneously.');
        return;
      }
      setComparedCollegeIds([...comparedCollegeIds, collegeId]);
    }
  };

  const comparedCollegesList = colleges.filter(c => comparedCollegeIds.includes(c.id));

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Header Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-purple-50 text-[#635BFF] text-xs font-semibold mb-2 border border-purple-100">
              <Building2 className="h-3.5 w-3.5" />
              <span>45+ Verified Premier Engineering Institutions</span>
            </div>
            <h1 className="font-outfit text-3xl font-extrabold text-slate-900 tracking-tight">
              College <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">Recommendations & Comparison</span>
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Explore NIRF rankings, verified placement packages, fee structures, entrance exams, and official campus virtual tours for top IITs, NITs, IIITs, BITS, and Global Universities.
            </p>
          </div>

          {comparedCollegeIds.length > 0 && (
            <button
              type="button"
              onClick={() => setShowComparisonModal(true)}
              className="px-4 py-2.5 bg-[#635BFF] hover:bg-[#5146E5] text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 transition-all flex items-center space-x-2 cursor-pointer"
            >
              <Layers className="h-4 w-4" />
              <span>Compare Selected ({comparedCollegeIds.length}/4)</span>
            </button>
          )}
        </div>

        {/* Search & Type Filter Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-8 space-y-3">
          <form onSubmit={handleSearchSubmit} className="flex gap-2">
            <div className="relative flex-grow">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search colleges by name, city, state, or course (e.g., IIT Bombay, Pilani, Computer Science, JEE)..."
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

          {/* Type Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-1 pr-1">Type:</span>
            {TYPES.map(t => (
              <button
                key={t}
                type="button"
                onClick={() => setSelectedType(t.toLowerCase())}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedType === t.toLowerCase()
                    ? 'bg-[#635BFF] text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Colleges Grid */}
        {loading ? (
          <div className="text-center py-24 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#635BFF] mx-auto" />
            <p className="text-xs text-slate-500 mt-3 font-semibold">Loading verified college records...</p>
          </div>
        ) : colleges.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colleges.map((college) => {
              const isSelectedForCompare = comparedCollegeIds.includes(college.id);
              return (
                <motion.div
                  key={college.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-purple-200 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Header */}
                    <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-100 mb-4 border border-slate-100">
                      <img
                        src={college.image}
                        alt={college.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-white/95 backdrop-blur-md shadow-xs text-[#635BFF] border border-purple-100">
                        {college.type}
                      </span>
                      {college.nirfRank && (
                        <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-600 text-white shadow-xs">
                          NIRF #{college.nirfRank}
                        </span>
                      )}
                      {college.globalRank && !college.nirfRank && (
                        <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md text-[10px] font-bold bg-indigo-600 text-white shadow-xs">
                          {college.globalRank}
                        </span>
                      )}
                    </div>

                    {/* Title & Location */}
                    <h3 className="font-outfit text-base font-bold text-slate-900 leading-snug mb-1 group-hover:text-[#635BFF] transition-colors">
                      {college.name}
                    </h3>
                    <div className="flex items-center space-x-1 text-xs text-slate-500 mb-3">
                      <MapPin className="h-3.5 w-3.5 text-slate-400 flex-shrink-0" />
                      <span>{college.city}, {college.state}</span>
                    </div>

                    {/* Stats Matrix Grid */}
                    <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 rounded-xl mb-4 text-xs">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">Avg Package</span>
                        <span className="font-bold text-emerald-700">{college.placement.averageLPA}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">Highest CTC</span>
                        <span className="font-bold text-slate-800">{college.placement.highestLPA}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">Annual Tuition</span>
                        <span className="font-semibold text-slate-700">{college.feesAnnualINR}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">Entrance Exam</span>
                        <span className="font-semibold text-slate-700">{college.entranceExams[0] || 'Direct'}</span>
                      </div>
                    </div>

                    {/* Courses Pills */}
                    <div className="space-y-1 mb-4">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Key Programs</span>
                      <div className="flex flex-wrap gap-1">
                        {college.courses.slice(0, 3).map((cr, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-purple-50 text-[#635BFF] text-[9px] font-bold border border-purple-100">
                            {cr}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions & Compare Toggle */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => toggleCompare(college.id)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all flex items-center space-x-1 cursor-pointer ${
                        isSelectedForCompare
                          ? 'bg-purple-50 border-purple-300 text-[#635BFF]'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {isSelectedForCompare ? <Check className="h-3.5 w-3.5 text-[#635BFF]" /> : <Layers className="h-3.5 w-3.5" />}
                      <span>{isSelectedForCompare ? 'Selected' : 'Compare'}</span>
                    </button>

                    <div className="flex items-center space-x-1">
                      {college.virtualTourUrl && (
                        <a
                          href={college.virtualTourUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl border border-slate-200 hover:bg-purple-50 hover:text-[#635BFF] text-slate-600 transition-colors"
                          title="View Official Virtual Tour"
                        >
                          <Eye className="h-3.5 w-3.5" />
                        </a>
                      )}
                      <a
                        href={college.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-[#635BFF] hover:bg-[#5146E5] text-white transition-colors"
                        title="Open Official Website"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <Building2 className="h-10 w-10 text-slate-300 mx-auto mb-2" />
            <h3 className="font-outfit text-base font-bold text-slate-800 mb-1">No Institutions Found</h3>
            <p className="text-xs text-slate-500 mb-4">Try resetting your state or institution type filter.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedType('all');
                setSelectedState('all');
                setSelectedCourse('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#635BFF] text-white rounded-xl text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Multi-College Comparison Modal */}
        <AnimatePresence>
          {showComparisonModal && comparedCollegesList.length > 0 && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowComparisonModal(false)}
                className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white border border-slate-200 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative z-10 p-6 sm:p-8 space-y-6"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center space-x-2.5">
                    <span className="p-2.5 rounded-xl bg-purple-50 text-[#635BFF]">
                      <Layers className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-outfit text-xl font-bold text-slate-900">Side-by-Side Institution Comparison</h3>
                      <p className="text-xs text-slate-500">Comparing {comparedCollegesList.length} selected institutions</p>
                    </div>
                  </div>
                  <button onClick={() => setShowComparisonModal(false)} className="p-2 rounded-xl text-slate-400 hover:text-slate-600">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Comparison Matrix Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="p-3 bg-slate-50 font-bold text-slate-500 w-44">Metric</th>
                        {comparedCollegesList.map(c => (
                          <th key={c.id} className="p-3 bg-purple-50/50 font-outfit text-sm font-bold text-slate-900 min-w-52">
                            {c.shortName}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 font-semibold text-slate-500">Institution Type</td>
                        {comparedCollegesList.map(c => (
                          <td key={c.id} className="p-3 font-bold text-[#635BFF]">{c.type}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-500">NIRF / Global Ranking</td>
                        {comparedCollegesList.map(c => (
                          <td key={c.id} className="p-3 font-bold text-slate-800">
                            {c.nirfRank ? `NIRF Rank #${c.nirfRank}` : c.globalRank || 'N/A'}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-500">Location</td>
                        {comparedCollegesList.map(c => (
                          <td key={c.id} className="p-3 text-slate-700">{c.city}, {c.state}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-500">Average Placement Package</td>
                        {comparedCollegesList.map(c => (
                          <td key={c.id} className="p-3 font-bold text-emerald-700">{c.placement.averageLPA}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-500">Highest Placement CTC</td>
                        {comparedCollegesList.map(c => (
                          <td key={c.id} className="p-3 font-bold text-slate-900">{c.placement.highestLPA}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-500">Annual Tuition Fees</td>
                        {comparedCollegesList.map(c => (
                          <td key={c.id} className="p-3 text-slate-700">{c.feesAnnualINR}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-500">Accepted Entrance Exams</td>
                        {comparedCollegesList.map(c => (
                          <td key={c.id} className="p-3 text-slate-700">{c.entranceExams.join(', ')}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-500">Campus Area</td>
                        {comparedCollegesList.map(c => (
                          <td key={c.id} className="p-3 text-slate-700">{c.campusSizeAcres ? `${c.campusSizeAcres} Acres` : 'N/A'}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-500">Official Portal</td>
                        {comparedCollegesList.map(c => (
                          <td key={c.id} className="p-3">
                            <a href={c.website} target="_blank" rel="noopener noreferrer" className="text-[#635BFF] font-bold hover:underline inline-flex items-center space-x-1">
                              <span>Visit Website</span>
                              <ArrowUpRight className="h-3 w-3" />
                            </a>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-end pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setComparedCollegeIds([])}
                    className="px-4 py-2 text-xs font-bold text-red-600 hover:bg-red-50 rounded-xl mr-2"
                  >
                    Clear Comparison Selection
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowComparisonModal(false)}
                    className="px-5 py-2 bg-[#635BFF] text-white rounded-xl text-xs font-bold shadow-xs"
                  >
                    Close Comparison
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
