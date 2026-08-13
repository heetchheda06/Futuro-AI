'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { 
  Plus, Trash2, Printer, ArrowLeft, Briefcase, 
  GraduationCap, Code, User, Sparkles, Check, Mail, Phone, Globe, MapPin, Layers 
} from 'lucide-react';

interface JobEntry {
  company: string;
  role: string;
  dates: string;
  description: string;
}

interface EducationEntry {
  school: string;
  degree: string;
  dates: string;
  description: string;
}

interface ProjectEntry {
  name: string;
  tech: string;
  description: string;
}

export default function ResumeBuilder() {
  const { user, token } = useAuth();
  const router = useRouter();

  // Basic Personal Info
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [location, setLocation] = useState('');
  const [summary, setSummary] = useState('');

  // Lists
  const [jobs, setJobs] = useState<JobEntry[]>([]);
  const [education, setEducation] = useState<EducationEntry[]>([]);
  const [projects, setProjects] = useState<ProjectEntry[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState('');

  // Accent Color Theme
  const [accentColor, setAccentColor] = useState('indigo'); // indigo, teal, emerald, slate

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (!user && !savedToken) {
      router.push('/login');
      return;
    }

    if (user) {
      setName(user.name || '');
      setTitle(user.targetCareer || '');
      setEmail(user.email || '');
      setSkills(user.currentSkills || ['React', 'TypeScript', 'Node.js', 'PostgreSQL']);
      setSummary(`Aspiring ${user.targetCareer || 'Software Engineer'} motivated to deliver high-quality system solutions, leverage analytical capabilities, and collaborate within agile teams.`);
      
      setJobs([
        {
          company: 'Futuro Tech Labs',
          role: `${user.targetCareer || 'Software Engineer'} Intern`,
          dates: '2025 - Present',
          description: 'Designed responsive user interfaces and optimized backend queries resulting in a 20% latency reduction. Collaborated on sprint tasks and integrated robust unit test cases.'
        }
      ]);
      setEducation([
        {
          school: 'National University of Technology',
          degree: 'Bachelor of Science in Computer Science',
          dates: '2021 - 2025',
          description: 'Relevant coursework: Algorithms, Database Management Systems, System Architecture. Maintained a cumulative GPA of 3.8/4.0.'
        }
      ]);
      setProjects([
        {
          name: 'AI Career Intelligence Copilot',
          tech: 'Next.js, TypeScript, Node.js, Tailwind CSS',
          description: 'Developed a comprehensive career planner featuring automated resume grading, mock interviews, and responsive learning roadmap tracking.'
        }
      ]);
    }
  }, [user]);

  const handleAddJob = () => {
    setJobs([...jobs, { company: '', role: '', dates: '', description: '' }]);
  };

  const handleRemoveJob = (index: number) => {
    setJobs(jobs.filter((_, idx) => idx !== index));
  };

  const handleUpdateJob = (index: number, fields: Partial<JobEntry>) => {
    setJobs(jobs.map((job, idx) => idx === index ? { ...job, ...fields } : job));
  };

  const handleAddEducation = () => {
    setEducation([...education, { school: '', degree: '', dates: '', description: '' }]);
  };

  const handleRemoveEducation = (index: number) => {
    setEducation(education.filter((_, idx) => idx !== index));
  };

  const handleUpdateEducation = (index: number, fields: Partial<EducationEntry>) => {
    setEducation(education.map((edu, idx) => idx === index ? { ...edu, ...fields } : edu));
  };

  const handleAddProject = () => {
    setProjects([...projects, { name: '', tech: '', description: '' }]);
  };

  const handleRemoveProject = (index: number) => {
    setProjects(projects.filter((_, idx) => idx !== index));
  };

  const handleUpdateProject = (index: number, fields: Partial<ProjectEntry>) => {
    setProjects(projects.map((proj, idx) => idx === index ? { ...proj, ...fields } : proj));
  };

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillName: string) => {
    setSkills(skills.filter(s => s !== skillName));
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#635BFF] mx-auto" />
          <p className="text-xs text-slate-500 mt-4 font-medium">Validating builder session...</p>
        </div>
      </div>
    );
  }

  const getColorClass = () => {
    switch(accentColor) {
      case 'teal': return 'border-teal-600 text-teal-600';
      case 'emerald': return 'border-emerald-600 text-emerald-600';
      case 'slate': return 'border-slate-800 text-slate-800';
      default: return 'border-[#635BFF] text-[#635BFF]';
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full no-print">
        {/* Header Navigation */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
          <div>
            <Link 
              href="/dashboard"
              className="inline-flex items-center text-xs font-semibold text-[#635BFF] hover:underline mb-1.5"
            >
              <ArrowLeft className="h-3.5 w-3.5 mr-1" />
              Back to Dashboard
            </Link>
            <h1 className="font-outfit text-3xl font-extrabold text-slate-900 tracking-tight">
              Smart Resume <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">Builder</span>
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Build a polished, ATS-compliant resume with live print-ready PDF export.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Color Selector */}
            <div className="flex bg-white p-1 rounded-xl border border-slate-200 text-xs font-semibold gap-1 shadow-sm">
              {['indigo', 'teal', 'emerald', 'slate'].map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setAccentColor(c)}
                  className={`px-3 py-1 rounded-lg capitalize transition-all cursor-pointer ${
                    accentColor === c ? 'bg-[#635BFF] text-white shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={handleDownloadPDF}
              className="px-4 py-2 bg-[#635BFF] hover:bg-[#5146E5] text-white font-semibold rounded-xl text-xs active:scale-98 transition-all shadow-md shadow-indigo-500/15 flex items-center space-x-1.5 cursor-pointer"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        {/* Builder Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Dynamic Form Editors (Left Panel) */}
          <div className="space-y-6">
            
            {/* Personal Details Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="font-outfit text-sm font-bold text-slate-900 flex items-center space-x-2 border-b border-slate-100 pb-3">
                <User className="h-4 w-4 text-[#635BFF]" />
                <span>Personal & Contact Info</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 uppercase mb-1">Full Name</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#635BFF] text-xs text-slate-900"
                    placeholder="Alex Rivera"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 uppercase mb-1">Professional Title</label>
                  <input 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#635BFF] text-xs text-slate-900"
                    placeholder="e.g. Frontend Engineer"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 uppercase mb-1">Email Address</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#635BFF] text-xs text-slate-900"
                    placeholder="alex@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 uppercase mb-1">Phone Number</label>
                  <input 
                    type="text" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#635BFF] text-xs text-slate-900"
                    placeholder="+1 (555) 019-2834"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 uppercase mb-1">Portfolio / GitHub</label>
                  <input 
                    type="text" 
                    value={portfolio}
                    onChange={(e) => setPortfolio(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#635BFF] text-xs text-slate-900"
                    placeholder="github.com/alexrivera"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 uppercase mb-1">Location</label>
                  <input 
                    type="text" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#635BFF] text-xs text-slate-900"
                    placeholder="San Francisco, CA"
                  />
                </div>
              </div>
            </div>

            {/* Summary Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <h2 className="font-outfit text-sm font-bold text-slate-900 flex items-center space-x-2 border-b border-slate-100 pb-3">
                <Sparkles className="h-4 w-4 text-[#635BFF]" />
                <span>Professional Summary</span>
              </h2>
              <textarea 
                rows={3}
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#635BFF] text-xs text-slate-900 leading-relaxed"
                placeholder="Highlight your core expertise, career goals, and value proposition..."
              />
            </div>

            {/* Work Experience */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <h2 className="font-outfit text-sm font-bold text-slate-900 flex items-center space-x-2">
                  <Briefcase className="h-4 w-4 text-[#635BFF]" />
                  <span>Work Experience</span>
                </h2>
                <button
                  type="button"
                  onClick={handleAddJob}
                  className="px-2.5 py-1 bg-purple-50 text-[#635BFF] font-semibold rounded-lg text-xs flex items-center space-x-1 hover:bg-purple-100 transition-colors cursor-pointer"
                >
                  <Plus className="h-3 w-3" />
                  <span>Add Role</span>
                </button>
              </div>

              {jobs.map((job, idx) => (
                <div key={idx} className="p-4 border border-slate-200 rounded-xl relative space-y-3 bg-slate-50/50">
                  <button
                    type="button"
                    onClick={() => handleRemoveJob(idx)}
                    className="absolute top-3 right-3 text-slate-400 hover:text-red-600 cursor-pointer"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pr-6">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Company</label>
                      <input 
                        type="text" 
                        value={job.company}
                        onChange={(e) => handleUpdateJob(idx, { company: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs text-slate-900 focus:outline-none focus:border-[#635BFF]"
                        placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Role Title</label>
                      <input 
                        type="text" 
                        value={job.role}
                        onChange={(e) => handleUpdateJob(idx, { role: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs text-slate-900 focus:outline-none focus:border-[#635BFF]"
                        placeholder="e.g. Software Engineer"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Dates Active</label>
                    <input 
                      type="text" 
                      value={job.dates}
                      onChange={(e) => handleUpdateJob(idx, { dates: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs text-slate-900 focus:outline-none focus:border-[#635BFF]"
                      placeholder="e.g. Jan 2024 - Present"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Key Responsibilities & Impact</label>
                    <textarea 
                      rows={2}
                      value={job.description}
                      onChange={(e) => handleUpdateJob(idx, { description: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs text-slate-900 focus:outline-none focus:border-[#635BFF]"
                      placeholder="Detail quantifiable achievements and tech tools used..."
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <h2 className="font-outfit text-sm font-bold text-slate-900 flex items-center space-x-2">
                  <Code className="h-4 w-4 text-[#635BFF]" />
                  <span>Projects</span>
                </h2>
                <button
                  type="button"
                  onClick={handleAddProject}
                  className="px-2.5 py-1 bg-purple-50 text-[#635BFF] font-semibold rounded-lg text-xs flex items-center space-x-1 hover:bg-purple-100 transition-colors cursor-pointer"
                >
                  <Plus className="h-3 w-3" />
                  <span>Add Project</span>
                </button>
              </div>

              {projects.map((proj, idx) => (
                <div key={idx} className="p-4 border border-slate-200 rounded-xl relative space-y-3 bg-slate-50/50">
                  <button
                    type="button"
                    onClick={() => handleRemoveProject(idx)}
                    className="absolute top-3 right-3 text-slate-400 hover:text-red-600 cursor-pointer"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pr-6">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Project Name</label>
                      <input 
                        type="text" 
                        value={proj.name}
                        onChange={(e) => handleUpdateProject(idx, { name: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs text-slate-900 focus:outline-none focus:border-[#635BFF]"
                        placeholder="Project Name"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Tech Stack</label>
                      <input 
                        type="text" 
                        value={proj.tech}
                        onChange={(e) => handleUpdateProject(idx, { tech: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs text-slate-900 focus:outline-none focus:border-[#635BFF]"
                        placeholder="e.g. Next.js, Node.js"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Description</label>
                    <textarea 
                      rows={2}
                      value={proj.description}
                      onChange={(e) => handleUpdateProject(idx, { description: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs text-slate-900 focus:outline-none focus:border-[#635BFF]"
                      placeholder="Describe the problem solved and technical features..."
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <h2 className="font-outfit text-sm font-bold text-slate-900 flex items-center space-x-2">
                  <GraduationCap className="h-4 w-4 text-[#635BFF]" />
                  <span>Education</span>
                </h2>
                <button
                  type="button"
                  onClick={handleAddEducation}
                  className="px-2.5 py-1 bg-purple-50 text-[#635BFF] font-semibold rounded-lg text-xs flex items-center space-x-1 hover:bg-purple-100 transition-colors cursor-pointer"
                >
                  <Plus className="h-3 w-3" />
                  <span>Add School</span>
                </button>
              </div>

              {education.map((edu, idx) => (
                <div key={idx} className="p-4 border border-slate-200 rounded-xl relative space-y-3 bg-slate-50/50">
                  <button
                    type="button"
                    onClick={() => handleRemoveEducation(idx)}
                    className="absolute top-3 right-3 text-slate-400 hover:text-red-600 cursor-pointer"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pr-6">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Institution</label>
                      <input 
                        type="text" 
                        value={edu.school}
                        onChange={(e) => handleUpdateEducation(idx, { school: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs text-slate-900 focus:outline-none focus:border-[#635BFF]"
                        placeholder="University Name"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Degree / Major</label>
                      <input 
                        type="text" 
                        value={edu.degree}
                        onChange={(e) => handleUpdateEducation(idx, { degree: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs text-slate-900 focus:outline-none focus:border-[#635BFF]"
                        placeholder="B.S. in Computer Science"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Dates</label>
                    <input 
                      type="text" 
                      value={edu.dates}
                      onChange={(e) => handleUpdateEducation(idx, { dates: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs text-slate-900 focus:outline-none focus:border-[#635BFF]"
                      placeholder="2021 - 2025"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="font-outfit text-sm font-bold text-slate-900 flex items-center space-x-2 border-b border-slate-100 pb-3">
                <Layers className="h-4 w-4 text-[#635BFF]" />
                <span>Skills & Technologies</span>
              </h2>
              <form onSubmit={handleAddSkill} className="flex gap-2">
                <input 
                  type="text" 
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs text-slate-900 focus:outline-none focus:border-[#635BFF]"
                  placeholder="e.g. Docker, GraphQL, PyTorch"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#635BFF] text-white rounded-xl text-xs font-semibold hover:bg-[#5146E5] flex items-center space-x-1 cursor-pointer"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add</span>
                </button>
              </form>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((s, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-medium text-slate-700 border border-slate-200"
                  >
                    <span>{s}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(s)}
                      className="ml-2 text-slate-400 hover:text-red-600 font-bold cursor-pointer"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Real-time PDF Style Document Preview (Right Panel) */}
          <div className="space-y-4 lg:sticky lg:top-24 h-fit">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 pl-1">Live Document Preview</h3>
            
            {/* Styled Sheet Wrapper */}
            <div 
              id="resume-print-area"
              className="p-8 sm:p-10 bg-white text-slate-900 border border-slate-200 rounded-2xl shadow-lg font-sans w-full max-w-[800px] mx-auto min-h-[900px] flex flex-col justify-between print-full-page"
            >
              <div className="space-y-5">
                {/* Header Block */}
                <div className="text-center space-y-1 pb-3 border-b-2 border-slate-100">
                  <h1 className="font-outfit text-2xl font-bold tracking-tight text-slate-900 capitalize">{name || 'Your Name'}</h1>
                  <h3 className={`text-xs font-bold uppercase tracking-wider ${accentColor === 'slate' ? 'text-slate-600' : `text-[#635BFF]`}`}>
                    {title || 'Professional Title'}
                  </h3>
                  
                  {/* Contacts Line */}
                  <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] text-slate-500 pt-1 font-medium">
                    {email && <span>{email}</span>}
                    {phone && <span>• {phone}</span>}
                    {location && <span>• {location}</span>}
                    {portfolio && <span>• {portfolio}</span>}
                  </div>
                </div>

                {/* Summary */}
                {summary && (
                  <div className="space-y-1">
                    <h2 className={`text-[11px] font-bold uppercase tracking-wider border-b ${getColorClass()} pb-0.5`}>Professional Summary</h2>
                    <p className="text-[11px] text-slate-600 leading-relaxed pt-0.5 whitespace-pre-line">{summary}</p>
                  </div>
                )}

                {/* Experience */}
                {jobs.length > 0 && (
                  <div className="space-y-2.5">
                    <h2 className={`text-[11px] font-bold uppercase tracking-wider border-b ${getColorClass()} pb-0.5`}>Experience</h2>
                    <div className="space-y-2.5">
                      {jobs.map((job, idx) => (
                        <div key={idx} className="space-y-0.5">
                          <div className="flex justify-between items-center text-[11px] font-bold text-slate-900">
                            <span>{job.role || 'Job Role'}</span>
                            <span className="text-[10px] font-normal text-slate-500">{job.dates || 'Dates'}</span>
                          </div>
                          <div className="text-[10px] font-semibold text-slate-600">{job.company || 'Company'}</div>
                          {job.description && (
                            <p className="text-[10.5px] text-slate-600 leading-relaxed pt-0.5 whitespace-pre-line">
                              {job.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Projects */}
                {projects.length > 0 && (
                  <div className="space-y-2.5">
                    <h2 className={`text-[11px] font-bold uppercase tracking-wider border-b ${getColorClass()} pb-0.5`}>Key Projects</h2>
                    <div className="space-y-2.5">
                      {projects.map((proj, idx) => (
                        <div key={idx} className="space-y-0.5">
                          <div className="flex justify-between items-center text-[11px] font-bold text-slate-900">
                            <span>{proj.name || 'Project Name'}</span>
                            <span className="text-[10px] font-semibold text-[#635BFF]">{proj.tech}</span>
                          </div>
                          {proj.description && (
                            <p className="text-[10.5px] text-slate-600 leading-relaxed pt-0.5 whitespace-pre-line">
                              {proj.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Education */}
                {education.length > 0 && (
                  <div className="space-y-2.5">
                    <h2 className={`text-[11px] font-bold uppercase tracking-wider border-b ${getColorClass()} pb-0.5`}>Education</h2>
                    <div className="space-y-2">
                      {education.map((edu, idx) => (
                        <div key={idx} className="space-y-0.5">
                          <div className="flex justify-between items-center text-[11px] font-bold text-slate-900">
                            <span>{edu.degree || 'Degree'}</span>
                            <span className="text-[10px] font-normal text-slate-500">{edu.dates}</span>
                          </div>
                          <div className="text-[10px] font-semibold text-slate-600">{edu.school}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills */}
                {skills.length > 0 && (
                  <div className="space-y-1.5">
                    <h2 className={`text-[11px] font-bold uppercase tracking-wider border-b ${getColorClass()} pb-0.5`}>Skills</h2>
                    <p className="text-[11px] text-slate-600 leading-relaxed pt-0.5">
                      {skills.join(' • ')}
                    </p>
                  </div>
                )}
              </div>

              <div className="text-center text-[9px] text-slate-400 border-t border-slate-100 pt-3 mt-4">
                References available upon request
              </div>
            </div>
          </div>

        </div>
      </main>

      <div className="no-print">
        <Footer />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          body {
            background-color: white !important;
            color: #0f172a !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          nav, footer, .no-print, button, form, input, textarea, select {
            display: none !important;
          }
          .print-full-page {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            margin: 0 !important;
          }
        }
      `}} />
    </div>
  );
}
