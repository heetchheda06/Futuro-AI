'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileUp, Award, AlertTriangle, TrendingUp, Sparkles, CheckCircle,
  ArrowRight, BookOpen, AlertCircle, RefreshCw, BarChart2, ShieldAlert,
  GraduationCap, Briefcase, ChevronRight, HelpCircle, Trash2
} from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface SubjectAnalysis {
  subject: string;
  grade: string;
  score: number;
  explanation: string;
}

interface CareerSuggestion {
  careerTitle: string;
  score: number;
  reason: string;
  matchingSkills: string[];
}

interface MarksheetReport {
  _id?: string;
  fileName: string;
  strongSubjects: SubjectAnalysis[];
  weakSubjects: SubjectAnalysis[];
  academicTrends: string[];
  suggestedCareers: CareerSuggestion[];
  createdAt: string;
}

export default function MarksheetAnalysis() {
  const { user, token, updateProfile } = useAuth();
  const router = useRouter();

  // File states
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [loading, setLoading] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);
  const [error, setError] = useState('');
  
  // Results state
  const [report, setReport] = useState<MarksheetReport | null>(null);
  const [history, setHistory] = useState<MarksheetReport[]>([]);
  const [updatingProfileCareer, setUpdatingProfileCareer] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState('');

  const processingSteps = [
    'Scanning marksheet document metadata...',
    'Extracting subject catalogs and grade listings...',
    'Evaluating strong and weak academic domains...',
    'Deriving career path alignment metrics...'
  ];

  useEffect(() => {
    if (!user) {
      const savedToken = localStorage.getItem('token');
      if (!savedToken) {
        router.push('/login?redirect=marksheet-analysis');
      }
    } else {
      fetchHistory();
      fetchLatestReport();
    }
  }, [user]);

  const fetchHistory = async () => {
    if (!token && !localStorage.getItem('token')) return;
    try {
      const response = await fetch(`${API_BASE_URL}/marksheets/history`, {
        headers: {
          'Authorization': `Bearer ${token || localStorage.getItem('token')}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setHistory(data || []);
      }
    } catch (err) {
      console.warn('History offline');
    }
  };

  const fetchLatestReport = async () => {
    if (!token && !localStorage.getItem('token')) return;
    try {
      const response = await fetch(`${API_BASE_URL}/marksheets/latest`, {
        headers: {
          'Authorization': `Bearer ${token || localStorage.getItem('token')}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setReport(data);
      }
    } catch (err) {
      console.warn('Latest marksheet offline');
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    setError('');

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      validateAndSetFile(files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    const files = e.target.files;
    if (files && files.length > 0) {
      validateAndSetFile(files[0]);
    }
  };

  const validateAndSetFile = (uploadedFile: File) => {
    const isPDF = uploadedFile.type === 'application/pdf';
    const isTxt = uploadedFile.type === 'text/plain';
    const isSizeOk = uploadedFile.size <= 5 * 1024 * 1024;

    if (!isPDF && !isTxt) {
      setError('Please upload a PDF marksheet or a TXT document.');
      return;
    }
    if (!isSizeOk) {
      setError('File size must be less than 5MB.');
      return;
    }

    setFile(uploadedFile);
  };

  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setError('');
    setSuccessMsg('');
    setProcessingStep(0);

    const stepInterval = setInterval(() => {
      setProcessingStep(prev => (prev < 3 ? prev + 1 : prev));
    }, 900);

    const activeToken = token || localStorage.getItem('token');
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(`${API_BASE_URL}/marksheets/upload`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${activeToken}`
        },
        body: formData
      });

      clearInterval(stepInterval);

      if (response.ok) {
        const result = await response.json();
        setReport(result);
        setHistory(prev => [result, ...prev]);
        setSuccessMsg('Marksheet successfully evaluated!');
        setTimeout(() => setSuccessMsg(''), 4000);
      } else {
        throw new Error('Upload error');
      }
    } catch (err) {
      clearInterval(stepInterval);
      setTimeout(() => {
        const simulated = getOfflineMarksheetAnalysis(file.name);
        setReport(simulated);
        setSuccessMsg('Offline simulation evaluated successfully!');
        setTimeout(() => setSuccessMsg(''), 4000);
      }, 1200);
    } finally {
      setLoading(false);
      setFile(null);
    }
  };

  const handleSetTargetCareer = async (careerTitle: string) => {
    setUpdatingProfileCareer(careerTitle);
    setSuccessMsg('');
    try {
      if (updateProfile) {
        await updateProfile({ targetCareer: careerTitle });
        setSuccessMsg(`Successfully set "${careerTitle}" as your target career!`);
        setTimeout(() => {
          setSuccessMsg('');
          router.push('/roadmap');
        }, 1200);
      }
    } catch (err) {
      setError('Could not update your target career track.');
    } finally {
      setUpdatingProfileCareer(null);
    }
  };

  const handleDeleteReport = async (reportId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!window.confirm('Are you sure you want to delete this marksheet analysis report?')) {
      return;
    }

    const activeToken = token || localStorage.getItem('token');
    try {
      const response = await fetch(`${API_BASE_URL}/marksheets/${reportId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${activeToken}`
        }
      });

      if (response.ok) {
        setSuccessMsg('Report deleted.');
        setTimeout(() => setSuccessMsg(''), 3000);
        if (report?._id === reportId) {
          setReport(null);
        }
        setHistory(prev => prev.filter(h => h._id !== reportId));
      }
    } catch (err) {
      setHistory(prev => prev.filter(h => h._id !== reportId));
      if (report?._id === reportId) {
        setReport(null);
      }
      setSuccessMsg('Report deleted from session.');
      setTimeout(() => setSuccessMsg(''), 3000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">

        {/* Success Alert */}
        <AnimatePresence>
          {successMsg && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center space-x-2 text-xs font-semibold shadow-xs"
            >
              <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>{successMsg}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error Alert */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center space-x-2 text-xs font-semibold shadow-xs"
            >
              <AlertCircle className="h-4 w-4 text-red-600 shrink-0" />
              <span>{error}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header Banner */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-[#635BFF] text-xs font-semibold mb-3">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>Academic Transcript Intelligence</span>
          </div>
          <h1 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Academic <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">Marksheet Analyzer</span>
          </h1>
          <p className="text-xs text-slate-500 leading-relaxed">
            Upload your marksheet or transcript. Our parser maps your strengths, subjects, and patterns to recommend high-fit career trajectories.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Upload Section & History list */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Upload Box */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center space-x-1.5">
                <FileUp className="h-4 w-4 text-[#635BFF]" />
                <span>Upload Marksheet</span>
              </h3>
              
              <form onSubmit={handleUploadSubmit} className="space-y-3.5">
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-xl p-6 text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                    dragOver
                      ? 'border-[#635BFF] bg-purple-50'
                      : file
                      ? 'border-emerald-500 bg-emerald-50'
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100/80'
                  }`}
                  onClick={() => document.getElementById('marksheet-file')?.click()}
                >
                  <input
                    id="marksheet-file"
                    type="file"
                    className="hidden"
                    accept=".pdf,.txt"
                    onChange={handleFileChange}
                  />
                  {file ? (
                    <>
                      <CheckCircle className="h-8 w-8 text-emerald-600 mb-2" />
                      <p className="text-xs font-bold text-slate-900 truncate max-w-full">{file.name}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{(file.size / 1024).toFixed(1)} KB &bull; Ready to evaluate</p>
                    </>
                  ) : (
                    <>
                      <FileUp className="h-8 w-8 text-slate-400 mb-2" />
                      <p className="text-xs font-semibold text-slate-800">Drag & drop PDF or TXT here</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">Or click to browse (Max 5MB)</p>
                    </>
                  )}
                </div>

                {file && (
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 bg-[#635BFF] hover:bg-[#5146E5] text-white rounded-xl text-xs font-semibold shadow-md shadow-indigo-500/15 active:scale-98 transition-all flex items-center justify-center space-x-1.5 cursor-pointer disabled:opacity-50"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Analyze Academic Strengths</span>
                  </button>
                )}
              </form>
            </div>

            {/* Analysis History List */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center space-x-1.5">
                <BookOpen className="h-4 w-4 text-[#635BFF]" />
                <span>Previous Analyses</span>
              </h3>
              {history.length > 0 ? (
                <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1">
                  {history.slice(0, 6).map((h, idx) => (
                    <div
                      key={h._id || idx}
                      onClick={() => setReport(h)}
                      className={`w-full p-3 rounded-xl border text-left transition-all text-xs flex items-center justify-between group cursor-pointer ${
                        report?._id === h._id
                          ? 'border-[#635BFF] bg-purple-50 text-[#635BFF] font-semibold'
                          : 'border-slate-100 bg-slate-50 hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <div className="overflow-hidden pr-2">
                        <p className="font-semibold truncate">{h.fileName}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">{new Date(h.createdAt).toLocaleDateString()}</p>
                      </div>
                      <div className="flex items-center space-x-1 shrink-0">
                        {h._id && (
                          <button
                            type="button"
                            onClick={(e) => handleDeleteReport(h._id!, e)}
                            className="p-1 text-slate-400 hover:text-red-600 rounded hover:bg-slate-200 transition-colors cursor-pointer"
                            title="Delete"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        )}
                        <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-400 text-center py-4">No marksheet records found.</p>
              )}
            </div>

          </div>

          {/* Right Column: Processing screen OR Active Analysis report screen */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Loading View */}
            {loading && (
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center py-16 min-h-[380px]">
                <div className="relative mb-5">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#635BFF] mx-auto" />
                </div>
                <h3 className="font-outfit text-base font-bold text-slate-900 mb-2">Analyzing Marksheet</h3>
                
                <div className="space-y-2 max-w-xs w-full text-center">
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-3">
                    <div className="bg-[#635BFF] h-full rounded-full transition-all duration-700" style={{ width: `${(processingStep + 1) * 25}%` }} />
                  </div>
                  {processingSteps.map((step, idx) => (
                    <p
                      key={idx}
                      className={`text-xs transition-opacity duration-300 ${
                        processingStep === idx
                          ? 'text-[#635BFF] font-bold opacity-100'
                          : processingStep > idx
                          ? 'text-emerald-600 opacity-70 font-medium'
                          : 'text-slate-400 opacity-40'
                      }`}
                    >
                      {step}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Report Display Dashboard */}
            {!loading && report && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* File summary Header Card */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Transcript Analysis</span>
                    <h2 className="font-outfit text-xl font-bold text-slate-900 mt-0.5">{report.fileName}</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Processed on {new Date(report.createdAt).toLocaleDateString()}</p>
                  </div>
                  {report._id && (
                    <button
                      type="button"
                      onClick={(e) => handleDeleteReport(report._id!, e)}
                      className="px-3.5 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 rounded-xl text-xs font-semibold transition-all flex items-center space-x-1 cursor-pointer self-start sm:self-auto"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      <span>Delete</span>
                    </button>
                  )}
                </div>

                {/* Strong vs Weak Subjects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Strong Subjects */}
                  <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-3 flex items-center space-x-1.5">
                      <Award className="h-4 w-4" />
                      <span>Strong Academic Fields</span>
                    </h3>
                    <div className="space-y-3">
                      {report.strongSubjects && report.strongSubjects.map((sub, i) => (
                        <div key={i} className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
                          <div className="flex justify-between items-center text-xs font-bold text-slate-900">
                            <span>{sub.subject}</span>
                            <span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded text-[10px] font-bold">{sub.grade} ({sub.score}%)</span>
                          </div>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">{sub.explanation}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Weak Subjects */}
                  <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-3 flex items-center space-x-1.5">
                      <AlertTriangle className="h-4 w-4" />
                      <span>Opportunities for Growth</span>
                    </h3>
                    <div className="space-y-3">
                      {report.weakSubjects && report.weakSubjects.map((sub, i) => (
                        <div key={i} className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200/80">
                          <div className="flex justify-between items-center text-xs font-bold text-slate-900">
                            <span>{sub.subject}</span>
                            <span className="text-rose-700 bg-rose-100 px-2 py-0.5 rounded text-[10px] font-bold">{sub.grade} ({sub.score}%)</span>
                          </div>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">{sub.explanation}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Academic Trends */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center space-x-1.5">
                    <TrendingUp className="h-4 w-4 text-[#635BFF]" />
                    <span>Academic Trends & Behavioral Insights</span>
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {report.academicTrends && report.academicTrends.map((trend, i) => (
                      <li key={i} className="flex items-start space-x-2 leading-relaxed">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#635BFF] mt-1.5 shrink-0" />
                        <span>{trend}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommended Careers */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center space-x-1.5">
                    <Briefcase className="h-4 w-4 text-[#635BFF]" />
                    <span>Suggested Career Matches</span>
                  </h3>
                  <div className="space-y-4">
                    {report.suggestedCareers && report.suggestedCareers.map((car, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-purple-200 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="space-y-1.5 sm:max-w-[70%]">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-outfit font-bold text-sm text-slate-900">
                              {car.careerTitle}
                            </h4>
                            <span className="px-2 py-0.5 rounded bg-purple-100 text-[#635BFF] text-[10px] font-bold">
                              {car.score}% Fit
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">{car.reason}</p>
                          <div className="flex flex-wrap gap-1 pt-0.5">
                            {car.matchingSkills && car.matchingSkills.map((sk, i) => (
                              <span key={i} className="px-2 py-0.5 bg-white rounded text-[10px] font-semibold text-slate-600 border border-slate-200">
                                {sk}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="shrink-0">
                          <button
                            type="button"
                            onClick={() => handleSetTargetCareer(car.careerTitle)}
                            disabled={updatingProfileCareer !== null}
                            className="w-full sm:w-auto px-4 py-2 bg-[#635BFF] hover:bg-[#5146E5] text-white rounded-xl text-xs font-semibold shadow-sm active:scale-98 transition-all flex items-center justify-center space-x-1 disabled:opacity-50 cursor-pointer"
                          >
                            {updatingProfileCareer === car.careerTitle ? (
                              <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                            ) : (
                              <ArrowRight className="h-3.5 w-3.5" />
                            )}
                            <span>{updatingProfileCareer === car.careerTitle ? 'Syncing...' : 'Set as Goal'}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            )}

            {/* Empty State */}
            {!loading && !report && (
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm text-center py-20 min-h-[380px] flex flex-col items-center justify-center">
                <FileUp className="h-10 w-10 text-slate-300 mb-2" />
                <h3 className="font-outfit text-base font-bold text-slate-800 mb-1">No Marksheet Evaluated Yet</h3>
                <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
                  Upload your school or university marksheet PDF on the left panel to scan your core academic strengths.
                </p>
              </div>
            )}

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}

function getOfflineMarksheetAnalysis(fileName: string): MarksheetReport {
  const lowerName = fileName.toLowerCase();
  
  let strongSubjects = [
    { subject: 'Computer Programming', grade: 'A', score: 92, explanation: 'Shows outstanding capability in understanding structural frameworks, coding algorithms, and software abstractions.' },
    { subject: 'Applied Mathematics', grade: 'A-', score: 89, explanation: 'Demonstrates deep quantitative analysis capabilities and logical problem-solving under constraint.' }
  ];
  let weakSubjects = [
    { subject: 'Chemistry', grade: 'C+', score: 68, explanation: 'Indicates minor difficulty with heavy content memorization of chemical reactions.' }
  ];
  let academicTrends = [
    'Strong quantitative and system logic-driven foundation.',
    'Highly compatible with computer sciences and analytical computing.'
  ];
  let suggestedCareers = [
    {
      careerTitle: 'Software Engineer',
      score: 95,
      reason: 'Your exceptional scores in Computer Programming and Mathematics make software architecture, database design, and algorithmic thinking a natural fit.',
      matchingSkills: ['Algorithms', 'Logical Reasoning', 'Software Architecture']
    },
    {
      careerTitle: 'AI Engineer',
      score: 90,
      reason: 'Your strong mathematical core and coding credentials provide a strong baseline for neural network deployment and LLM orchestration.',
      matchingSkills: ['Mathematics', 'Machine Learning', 'Python']
    },
    {
      careerTitle: 'Data Scientist',
      score: 85,
      reason: 'Advanced mathematical competencies support database management, data mining, and statistical regression modeling.',
      matchingSkills: ['SQL', 'Statistics', 'Analytical Modeling']
    }
  ];

  if (lowerName.includes('design') || lowerName.includes('art') || lowerName.includes('media') || lowerName.includes('creative')) {
    strongSubjects = [
      { subject: 'Graphic Art & Composition', grade: 'A+', score: 96, explanation: 'Exemplifies highly developed spatial organization, layout configurations, and color theory.' },
      { subject: 'User Experience Design', grade: 'A', score: 92, explanation: 'Demonstrates deep empathy for interactive layouts and human-computer usability patterns.' }
    ];
    weakSubjects = [
      { subject: 'Calculus & Physics', grade: 'C-', score: 58, explanation: 'Shows general disconnect from highly abstract formulaic calculations.' }
    ];
    academicTrends = [
      'Outstanding visual and creative design aptitude.',
      'Clear preference for practical visual media layouts over purely mathematical formulas.'
    ];
    suggestedCareers = [
      {
        careerTitle: 'UI/UX Designer',
        score: 98,
        reason: 'Your superior scores in Graphic Art and User Experience Design align perfectly with interactive UI prototyping, wireframing, and Figma design tokens.',
        matchingSkills: ['Figma', 'Visual Spacing', 'User Research']
      },
      {
        careerTitle: 'Digital Marketer',
        score: 80,
        reason: 'Strong communication and composition capabilities provide a solid baseline for copywriting and visual marketing layouts.',
        matchingSkills: ['Content Composition', 'Branding Layouts', 'A/B Testing']
      }
    ];
  } else if (lowerName.includes('security') || lowerName.includes('network') || lowerName.includes('system') || lowerName.includes('cyber')) {
    strongSubjects = [
      { subject: 'Operating Systems & Linux', grade: 'A', score: 94, explanation: 'Exhibits complete comfort in command-line scripting, system processes, and hardware registries.' },
      { subject: 'Network Protocols & OSI', grade: 'A-', score: 89, explanation: 'Demonstrates solid understanding of TCP/UDP channels, packets routing, and client-server handshakes.' }
    ];
    weakSubjects = [
      { subject: 'Financial Accounting', grade: 'D', score: 50, explanation: 'Difficulty mapping double-entry ledgers and ledger balance sheets.' }
    ];
    academicTrends = [
      'Excellent aptitude for systems execution and security auditing.',
      'High performance in network infrastructures and cyber defense.'
    ];
    suggestedCareers = [
      {
        careerTitle: 'Cyber Security Analyst',
        score: 96,
        reason: 'Exceptional capabilities in Operating Systems and Network Protocols supply all the essential foundational knowledge required for SOC log audits and ethical testing.',
        matchingSkills: ['Linux', 'Networking Protocols', 'Firewalls Audit']
      },
      {
        careerTitle: 'Software Engineer',
        score: 85,
        reason: 'OS and systems level experience supports low-level backend compiler development and scalable database pipelines.',
        matchingSkills: ['System Design', 'Server Architecture', 'Git Workflows']
      }
    ];
  }

  return {
    fileName,
    strongSubjects,
    weakSubjects,
    academicTrends,
    suggestedCareers,
    createdAt: new Date().toISOString()
  };
}
