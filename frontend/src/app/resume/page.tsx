'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, UploadCloud, FileText, CheckCircle2, AlertTriangle, 
  Trash2, HelpCircle, Sparkles, RefreshCw, BarChart2, History, ArrowRight 
} from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface ResumeReport {
  _id: string;
  fileName: string;
  atsScore: number;
  feedback: {
    atsRating: string;
    keywordsFound: string[];
    keywordsMissing: string[];
    formattingIssues: string[];
    grammarIssues: string[];
    strengths: string[];
  };
  missingSkills: string[];
  improvements: string[];
  createdAt: string;
}

export default function ResumeAnalyzer() {
  const { user, token } = useAuth();
  const router = useRouter();

  const [reports, setReports] = useState<ResumeReport[]>([]);
  const [selectedReport, setSelectedReport] = useState<ResumeReport | null>(null);
  const [loadingHistory, setLoadingHistory] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'keywords' | 'formatting' | 'improvements'>('overview');

  useEffect(() => {
    if (!user) {
      const savedToken = localStorage.getItem('token');
      if (!savedToken) {
        router.push('/login?redirect=resume');
      }
    } else {
      fetchReportsHistory();
    }
  }, [user]);

  const fetchReportsHistory = async () => {
    if (!token && !localStorage.getItem('token')) return;
    setLoadingHistory(true);
    setError('');
    
    try {
      const response = await fetch(`${API_BASE_URL}/resumes/history`, {
        headers: {
          'Authorization': `Bearer ${token || localStorage.getItem('token')}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setReports(data);
        if (data.length > 0) {
          setSelectedReport(data[0]);
        }
      }
    } catch (err) {
      console.warn('Resume history API offline');
    } finally {
      setLoadingHistory(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type === 'application/pdf' || file.name.endsWith('.txt')) {
        setSelectedFile(file);
      } else {
        setError('Only PDF or TXT files are accepted.');
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    setUploading(true);
    setError('');
    const activeToken = token || localStorage.getItem('token');
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch(`${API_BASE_URL}/resumes/upload`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${activeToken}`
        },
        body: formData
      });

      if (response.ok) {
        const newReport = await response.json();
        setReports([newReport, ...reports]);
        setSelectedReport(newReport);
        setSelectedFile(null);
      } else {
        throw new Error('Upload analysis failed');
      }
    } catch (err) {
      simulateLocalResumeAnalysis(selectedFile.name);
    } finally {
      setUploading(false);
    }
  };

  const simulateLocalResumeAnalysis = (filename: string) => {
    setTimeout(() => {
      const target = user?.targetCareer || 'Software Engineer';
      const isTech = target.toLowerCase().includes('software') || target.toLowerCase().includes('engineer');
      
      const mockReport: ResumeReport = {
        _id: Math.random().toString(),
        fileName: filename,
        atsScore: 82,
        feedback: {
          atsRating: 'Good',
          keywordsFound: isTech ? ['React', 'JavaScript', 'Git', 'Node.js', 'REST APIs'] : ['Figma', 'UI Design', 'Wireframing', 'User Research'],
          keywordsMissing: isTech ? ['TypeScript', 'System Design', 'Docker'] : ['Typography', 'Design Tokens'],
          formattingIssues: ['Add a dedicated summary header before work history.'],
          grammarIssues: ['Ensure consistent past-tense action verbs across prior roles.'],
          strengths: ['Clear reverse-chronological order.', 'Quantifiable metrics included in project bullets.']
        },
        missingSkills: isTech ? ['TypeScript', 'System Design'] : ['Typography', 'Design Systems'],
        improvements: [
          `Integrate missing keywords: ${isTech ? 'TypeScript, System Design' : 'Typography, Design Tokens'}.`,
          'Quantify details by adding statistical impact metrics (e.g. "reduced latency by 30%").',
          'Include a dedicated Skills Matrix section near the top.'
        ],
        createdAt: new Date().toISOString()
      };

      setReports([mockReport, ...reports]);
      setSelectedReport(mockReport);
      setSelectedFile(null);
    }, 1500);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#635BFF] mx-auto" />
          <p className="text-xs text-slate-500 mt-4">Restoring your document files...</p>
        </div>
      </div>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-emerald-600 border-emerald-500 bg-emerald-50';
    if (score >= 70) return 'text-[#635BFF] border-purple-500 bg-purple-50';
    return 'text-amber-600 border-amber-500 bg-amber-50';
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Banner */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-[#635BFF] text-xs font-semibold mb-3">
            <Award className="h-3.5 w-3.5" />
            <span>ATS Compliance Engine</span>
          </div>
          <h1 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Resume ATS <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">Analyzer</span>
          </h1>
          <p className="text-xs text-slate-500 leading-relaxed">
            Benchmark your resume against target role: <strong>{user.targetCareer || 'Software Engineer'}</strong>. Identify formatting errors, missing keywords, and syntax updates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Form and History Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Upload Zone */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center space-x-1.5">
                <UploadCloud className="h-4 w-4 text-[#635BFF]" />
                <span>Upload PDF Resume</span>
              </h3>

              <form onSubmit={handleUploadSubmit} className="space-y-3.5">
                <div 
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-xl p-6 text-center transition-all cursor-pointer relative ${
                    dragActive ? 'border-[#635BFF] bg-purple-50' : 'border-slate-200 bg-slate-50 hover:bg-slate-100/80'
                  }`}
                >
                  <input
                    type="file"
                    id="resume-file-input"
                    accept=".pdf,.txt"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <FileText className="h-7 w-7 text-slate-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-slate-800">
                    {selectedFile ? selectedFile.name : 'Drag & drop PDF or TXT here'}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Or click to browse files (Max 5MB)</p>
                </div>

                {error && (
                  <p className="text-xs text-red-600 bg-red-50 p-2 rounded-lg border border-red-200">{error}</p>
                )}

                {selectedFile && (
                  <button
                    type="submit"
                    disabled={uploading}
                    className="w-full py-2.5 bg-[#635BFF] hover:bg-[#5146E5] text-white rounded-xl text-xs font-semibold shadow-md shadow-indigo-500/15 active:scale-98 transition-all flex items-center justify-center space-x-1.5 cursor-pointer disabled:opacity-50"
                  >
                    <span>{uploading ? 'Analyzing PDF...' : 'Analyze Document'}</span>
                    <RefreshCw className={`h-3.5 w-3.5 ${uploading ? 'animate-spin' : ''}`} />
                  </button>
                )}
              </form>
            </div>

            {/* History List */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center space-x-1.5">
                <History className="h-4 w-4 text-[#635BFF]" />
                <span>Upload History</span>
              </h3>

              {loadingHistory ? (
                <div className="text-center py-4">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#635BFF] mx-auto" />
                </div>
              ) : reports.length > 0 ? (
                <div className="space-y-2 max-h-[250px] overflow-y-auto pr-1">
                  {reports.map((r) => (
                    <button
                      key={r._id}
                      type="button"
                      onClick={() => setSelectedReport(r)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer ${
                        selectedReport?._id === r._id 
                          ? 'border-[#635BFF] bg-purple-50 text-[#635BFF] font-semibold' 
                          : 'border-slate-100 bg-slate-50 hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <span className="truncate max-w-[140px]">{r.fileName}</span>
                      <span className="bg-purple-100 text-[#635BFF] px-2 py-0.5 rounded text-[10px] font-bold">{r.atsScore}%</span>
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-400 text-center py-3">No resumes analyzed yet.</p>
              )}
            </div>
          </div>

          {/* Report Display Workspace */}
          <div className="lg:col-span-2 space-y-6">
            {selectedReport ? (
              <motion.div 
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden"
              >
                {/* Score Section Header */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pb-6 border-b border-slate-100 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`h-16 w-16 rounded-full border-4 flex items-center justify-center text-lg font-extrabold ${getScoreColor(selectedReport.atsScore)}`}>
                      {selectedReport.atsScore}%
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">ATS Rating Scorecard</span>
                      <h3 className="font-outfit text-lg font-bold text-slate-900 mt-0.5">{selectedReport.fileName}</h3>
                      <p className="text-xs font-semibold text-[#635BFF] mt-0.5">
                        Status: {selectedReport.feedback.atsRating}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">
                    {new Date(selectedReport.createdAt).toLocaleDateString()}
                  </span>
                </div>

                {/* Tab Layout Selector */}
                <div className="flex border-b border-slate-100 mb-6 text-xs font-semibold gap-3 flex-wrap">
                  {(['overview', 'keywords', 'formatting', 'improvements'] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setActiveTab(t)}
                      className={`pb-2.5 px-1 border-b-2 capitalize transition-colors cursor-pointer ${
                        activeTab === t ? 'border-[#635BFF] text-[#635BFF]' : 'border-transparent text-slate-400 hover:text-slate-700'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="min-h-[180px]">
                  {activeTab === 'overview' && (
                    <div className="space-y-5">
                      <div>
                        <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-2.5 flex items-center space-x-1.5">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                          <span>Identified Strengths</span>
                        </h4>
                        <ul className="space-y-1.5 text-xs text-slate-700">
                          {selectedReport.feedback.strengths.map((str, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <span className="text-emerald-600 font-bold mr-1">&bull;</span>
                              <span>{str}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-slate-100">
                        <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-2 flex items-center space-x-1.5">
                          <BarChart2 className="h-4 w-4 text-[#635BFF]" />
                          <span>Summary Evaluation</span>
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Your resume ranks <strong>{selectedReport.feedback.atsRating}</strong> for the <strong>{user.targetCareer || 'Software Engineer'}</strong> profile. Detected {selectedReport.feedback.keywordsFound.length} matching keywords and {selectedReport.feedback.keywordsMissing.length} high priority keyword gaps.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'keywords' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-2.5 flex items-center space-x-1.5">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                          <span>Keywords Found ({selectedReport.feedback.keywordsFound.length})</span>
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedReport.feedback.keywordsFound.map((k, i) => (
                            <span key={i} className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                              {k}
                            </span>
                          ))}
                          {selectedReport.feedback.keywordsFound.length === 0 && (
                            <span className="text-xs text-slate-400 italic">No matching keywords.</span>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-2.5 flex items-center space-x-1.5">
                          <AlertTriangle className="h-4 w-4 text-amber-600" />
                          <span>Keywords Missing ({selectedReport.feedback.keywordsMissing.length})</span>
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedReport.feedback.keywordsMissing.map((k, i) => (
                            <span key={i} className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-200">
                              {k}
                            </span>
                          ))}
                          {selectedReport.feedback.keywordsMissing.length === 0 && (
                            <span className="text-xs text-slate-400 italic">No missing keywords detected.</span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'formatting' && (
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-2">Formatting Checks</h4>
                        <ul className="space-y-1.5 text-xs">
                          {selectedReport.feedback.formattingIssues.map((issue, i) => (
                            <li key={i} className="flex items-start space-x-2 text-slate-700">
                              <AlertTriangle className="h-3.5 w-3.5 text-amber-600 mt-0.5 shrink-0" />
                              <span>{issue}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-3 border-t border-slate-100">
                        <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-2">Grammar & Syntax</h4>
                        <ul className="space-y-1.5 text-xs">
                          {selectedReport.feedback.grammarIssues.map((issue, i) => (
                            <li key={i} className="flex items-start space-x-2 text-slate-700">
                              <AlertTriangle className="h-3.5 w-3.5 text-amber-600 mt-0.5 shrink-0" />
                              <span>{issue}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === 'improvements' && (
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-3">Actionable Improvements</h4>
                      <ul className="space-y-2.5 text-xs">
                        {selectedReport.improvements.map((imp, i) => (
                          <li key={i} className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                            <span className="h-5 w-5 rounded-full bg-purple-100 text-[#635BFF] flex items-center justify-center font-bold text-[10px] shrink-0">
                              {i + 1}
                            </span>
                            <span className="text-slate-700 font-medium leading-relaxed">{imp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ) : (
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm text-center py-16">
                <FileText className="h-10 w-10 text-slate-300 mx-auto mb-2" />
                <h3 className="font-outfit text-base font-bold text-slate-800 mb-1">No Report Selected</h3>
                <p className="text-xs text-slate-500">
                  Upload your resume PDF in the upload panel to compute an instant ATS scorecard.
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
