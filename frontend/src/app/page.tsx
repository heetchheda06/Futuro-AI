'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import {
  Brain, Rocket, Target, Award,
  ChevronDown, HelpCircle, Send, Star, Users, Briefcase, TrendingUp, Sparkles,
  ArrowRight, CheckCircle2, Bot, Layers, Compass, FileCheck, MessageSquare, Flame
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
} as const;

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } }
} as const;

export default function LandingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeShowcaseTab, setActiveShowcaseTab] = useState<'readiness' | 'ats' | 'interview'>('readiness');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const faqs = [
    { q: 'How does the AI Career Assessment work?', a: 'We evaluate your academic background, preferred work style, technical competencies, strengths, and professional aspirations to generate precise compatibility scores mapped directly to high-growth, real-world tech careers.' },
    { q: 'Is my resume parsed and stored securely?', a: 'Yes. Your uploaded resume is analyzed in-memory using PDF extraction. We evaluate keyword matches, formatting integrity, and ATS compliance scores without ever sharing or distributing your personal contact details.' },
    { q: 'What kind of questions does the AI Interview Coach generate?', a: 'The coach generates structured Technical, Behavioral (STAR framework), and situational HR questions tailored specifically to your target career path (such as AI Engineer, Cloud Architect, or Product Manager).' },
    { q: 'Can I track my long-term milestones and daily progress?', a: 'Yes. The platform tracks daily study streaks, project submissions, and skill mastery milestones inside your personalized, month-by-month career roadmap.' }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('sending');
    setTimeout(() => {
      setContactStatus('success');
      setContactForm({ name: '', email: '', message: '' });
      setTimeout(() => setContactStatus('idle'), 3500);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-slate-900 transition-colors duration-200">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-purple-50/50 via-[#F8FAFC] to-[#F8FAFC]">
        {/* Subtle decorative atmospheric blurs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-purple-200/30 via-indigo-100/40 to-cyan-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* AI Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-[#635BFF] text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#635BFF]" />
              <span>✦ AI-Powered Career Intelligence</span>
            </motion.div>

            {/* Hero Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-outfit text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6"
            >
              Build a Career That’s Ready for the{' '}
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Future.
              </span>
            </motion.h1>

            {/* Hero Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed font-normal"
            >
              Futuro AI uses intelligent career insights to help you discover your strengths, identify the skills you need, and find the right path forward.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-3.5"
            >
              <Link
                href="/register"
                className="w-full sm:w-auto inline-flex justify-center items-center space-x-2 px-7 py-3.5 bg-[#635BFF] hover:bg-[#5146E5] text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 active:scale-98 transition-all text-base"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/explorer"
                className="w-full sm:w-auto inline-flex justify-center items-center px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm active:scale-98 transition-all text-base"
              >
                Explore Futuro AI
              </Link>
            </motion.div>
          </div>

          {/* Hero Product Visual Card Preview */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-14 max-w-4xl mx-auto"
          >
            <div className="p-1 rounded-2xl bg-gradient-to-b from-purple-200 via-slate-200 to-transparent shadow-xl">
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
                {/* Visual Top Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-xl bg-purple-50 text-[#635BFF]">
                      <Brain className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-outfit font-bold text-slate-900 text-base">Career Intelligence Overview</h3>
                      <p className="text-xs text-slate-500">Live AI Evaluation & Match Rate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                      <span>Ready for Next Step</span>
                    </span>
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold">
                      <Flame className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                      <span>12-Day Streak</span>
                    </span>
                  </div>
                </div>

                {/* Visual Grid: Readiness Score & Skill Progress */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 items-center">
                  {/* Readiness Score */}
                  <div className="md:col-span-4 p-5 rounded-xl bg-gradient-to-br from-purple-50/70 to-blue-50/50 border border-purple-100 text-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Career Readiness</span>
                    <div className="font-outfit text-5xl font-black text-[#635BFF] my-2">87<span className="text-2xl text-slate-400 font-semibold">/100</span></div>
                    <span className="inline-block text-xs font-bold text-emerald-600 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                      High Market Demand
                    </span>
                  </div>

                  {/* Skill Competencies */}
                  <div className="md:col-span-8 space-y-3.5">
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                        <span>Python & Machine Learning</span>
                        <span className="text-[#635BFF]">92%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-violet-600 to-[#635BFF] h-full rounded-full" style={{ width: '92%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                        <span>Data Pipelines & SQL</span>
                        <span className="text-cyan-600">84%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 h-full rounded-full" style={{ width: '84%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                        <span>Cloud Architecture (GCP / AWS)</span>
                        <span className="text-sky-600">72%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-cyan-500 to-sky-500 h-full rounded-full" style={{ width: '72%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Recommendation Message */}
                <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start space-x-3">
                  <Bot className="h-5 w-5 text-[#635BFF] shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-600 leading-relaxed">
                    <span className="font-bold text-slate-800">AI Recommendation:</span> You have exceptional data engineering foundations. Complete your <strong>Distributed Systems</strong> milestone to qualify for Senior AI Infrastructure roles.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats Metric Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-10 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm"
          >
            <div className="text-center p-2">
              <div className="font-outfit text-3xl font-extrabold text-[#635BFF]">10k+</div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Users Mentored</div>
            </div>
            <div className="text-center p-2">
              <div className="font-outfit text-3xl font-extrabold text-cyan-600">95%</div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Match Accuracy</div>
            </div>
            <div className="text-center p-2">
              <div className="font-outfit text-3xl font-extrabold text-violet-600">400+</div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Careers Mapped</div>
            </div>
            <div className="text-center p-2">
              <div className="font-outfit text-3xl font-extrabold text-emerald-600">2.5M+</div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Roadmaps Created</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#635BFF] bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
            Intelligent Toolset
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-3 mb-4">
            Everything You Need to Advance Your Career
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Our comprehensive AI ecosystem replaces outdated guesswork with personalized, data-backed guidance.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {/* Card 1 */}
          <motion.div variants={fadeInUp} className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all duration-200 group">
            <span className="inline-flex p-3 rounded-xl bg-purple-50 text-[#635BFF] mb-5 group-hover:scale-105 transition-transform">
              <Brain className="h-6 w-6" />
            </span>
            <h3 className="font-outfit text-xl font-bold text-slate-900 mb-2">AI Career Assessment</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Complete dynamic questionnaires analyzing strengths, personality traits, and work preferences to find matching professions.
            </p>
            <Link href="/assessment" className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#635BFF] hover:text-[#5146E5]">
              <span>Take Assessment</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeInUp} className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all duration-200 group">
            <span className="inline-flex p-3 rounded-xl bg-cyan-50 text-cyan-600 mb-5 group-hover:scale-105 transition-transform">
              <Target className="h-6 w-6" />
            </span>
            <h3 className="font-outfit text-xl font-bold text-slate-900 mb-2">Skill Gap Detection</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Compare your current capability against market requirements for target roles and prioritize what tools to master next.
            </p>
            <Link href="/comparison" className="inline-flex items-center space-x-1.5 text-xs font-bold text-cyan-600 hover:text-cyan-700">
              <span>Analyze Gaps</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={fadeInUp} className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-violet-300 hover:shadow-md transition-all duration-200 group">
            <span className="inline-flex p-3 rounded-xl bg-violet-50 text-violet-600 mb-5 group-hover:scale-105 transition-transform">
              <Rocket className="h-6 w-6" />
            </span>
            <h3 className="font-outfit text-xl font-bold text-slate-900 mb-2">Personalized Roadmaps</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Get an actionable month-by-month learning curriculum with curated courses, practical project tasks, and certifications.
            </p>
            <Link href="/roadmap" className="inline-flex items-center space-x-1.5 text-xs font-bold text-violet-600 hover:text-violet-700">
              <span>View Roadmap</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={fadeInUp} className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 group">
            <span className="inline-flex p-3 rounded-xl bg-blue-50 text-blue-600 mb-5 group-hover:scale-105 transition-transform">
              <FileCheck className="h-6 w-6" />
            </span>
            <h3 className="font-outfit text-xl font-bold text-slate-900 mb-2">Resume Intelligence</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Upload your PDF resume to compute instant ATS scoring, keyword densities, formatting warnings, and direct improvements.
            </p>
            <Link href="/resume" className="inline-flex items-center space-x-1.5 text-xs font-bold text-blue-600 hover:text-blue-700">
              <span>Check ATS Score</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>

          {/* Card 5 */}
          <motion.div variants={fadeInUp} className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all duration-200 group">
            <span className="inline-flex p-3 rounded-xl bg-emerald-50 text-emerald-600 mb-5 group-hover:scale-105 transition-transform">
              <MessageSquare className="h-6 w-6" />
            </span>
            <h3 className="font-outfit text-xl font-bold text-slate-900 mb-2">AI Interview Coach</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Rehearse realistic technical and STAR behavioral interviews with instant question-by-question scoring and feedback.
            </p>
            <Link href="/interview" className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700">
              <span>Start Mock Interview</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>

          {/* Card 6 */}
          <motion.div variants={fadeInUp} className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all duration-200 group">
            <span className="inline-flex p-3 rounded-xl bg-amber-50 text-amber-600 mb-5 group-hover:scale-105 transition-transform">
              <Compass className="h-6 w-6" />
            </span>
            <h3 className="font-outfit text-xl font-bold text-slate-900 mb-2">Career Simulator</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Experience real-world workplace scenarios, make strategic decisions, and understand day-to-day role expectations.
            </p>
            <Link href="/career-simulator" className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-600 hover:text-amber-700">
              <span>Launch Simulator</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* AI Product Showcase / Interactive Tab Preview */}
      <section className="py-20 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#635BFF] bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
              Live Product Demo
            </span>
            <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-3">
              See Futuro AI in Action
            </h2>
            <p className="text-slate-600 text-sm">
              Explore how intelligent data synthesis transforms every phase of your career preparation.
            </p>

            {/* Showcase Tabs */}
            <div className="inline-flex p-1 bg-white rounded-xl border border-slate-200 shadow-sm mt-8">
              <button
                onClick={() => setActiveShowcaseTab('readiness')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeShowcaseTab === 'readiness' ? 'bg-[#635BFF] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Career Readiness
              </button>
              <button
                onClick={() => setActiveShowcaseTab('ats')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeShowcaseTab === 'ats' ? 'bg-[#635BFF] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ATS Resume Review
              </button>
              <button
                onClick={() => setActiveShowcaseTab('interview')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeShowcaseTab === 'interview' ? 'bg-[#635BFF] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Interview Feedback
              </button>
            </div>
          </div>

          {/* Interactive Preview Container */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            {activeShowcaseTab === 'readiness' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                  <div>
                    <h4 className="font-outfit font-bold text-slate-900 text-lg">Target Role: AI Solutions Architect</h4>
                    <p className="text-xs text-slate-500">Market Growth: +48% | Avg Salary: $145,000</p>
                  </div>
                  <span className="px-3 py-1 bg-purple-50 text-[#635BFF] text-xs font-bold rounded-lg border border-purple-100">
                    High Compatibility (87%)
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-xs font-bold text-emerald-700 block mb-2">Verified Strengths</span>
                    <ul className="text-xs text-slate-600 space-y-1.5">
                      <li className="flex items-center space-x-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /><span>Python & PyTorch Models</span></li>
                      <li className="flex items-center space-x-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /><span>Data Ingestion & BigQuery</span></li>
                      <li className="flex items-center space-x-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /><span>API Design & Microservices</span></li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100">
                    <span className="text-xs font-bold text-[#635BFF] block mb-2">Recommended Next Actions</span>
                    <ul className="text-xs text-slate-600 space-y-1.5">
                      <li className="flex items-center space-x-2"><ArrowRight className="h-3.5 w-3.5 text-[#635BFF]" /><span>Kubernetes Container Orchestration</span></li>
                      <li className="flex items-center space-x-2"><ArrowRight className="h-3.5 w-3.5 text-[#635BFF]" /><span>Distributed Model Training</span></li>
                      <li className="flex items-center space-x-2"><ArrowRight className="h-3.5 w-3.5 text-[#635BFF]" /><span>Cloud Security & IAM Governance</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeShowcaseTab === 'ats' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                  <div>
                    <h4 className="font-outfit font-bold text-slate-900 text-lg">ATS Resume Parsing Report</h4>
                    <p className="text-xs text-slate-500">Document: alex_fullstack_resume.pdf</p>
                  </div>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg border border-emerald-200">
                    ATS Score: 92/100
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-xs text-slate-500">Keyword Density</span>
                    <div className="font-bold text-slate-800 text-base mt-0.5">24 / 26 Found</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-xs text-slate-500">Format Integrity</span>
                    <div className="font-bold text-emerald-600 text-base mt-0.5">Passed Cleanly</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-xs text-slate-500">Action Verbs</span>
                    <div className="font-bold text-[#635BFF] text-base mt-0.5">Strong Metrics</div>
                  </div>
                </div>
              </div>
            )}

            {activeShowcaseTab === 'interview' && (
              <div className="space-y-5">
                <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                  <div>
                    <h4 className="font-outfit font-bold text-slate-900 text-lg">Mock Interview Assessment</h4>
                    <p className="text-xs text-slate-500">Topic: STAR Framework (Conflict Resolution)</p>
                  </div>
                  <span className="px-3 py-1 bg-purple-50 text-[#635BFF] text-xs font-bold rounded-lg border border-purple-100">
                    Grade: 9.4 / 10
                  </span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 block mb-1">AI Coach Evaluation:</strong>
                  "Excellent structure using the STAR methodology. You clearly articulated the quantifiable business outcome (30% latency reduction). For your next round, add more emphasis on how you aligned cross-functional stakeholders."
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#635BFF] bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
            Simple 4-Step Process
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-3 mb-4">
            How Futuro AI Guides Your Path
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            From initial exploration to interview readiness, every step is designed to give you clarity and confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 relative">
            <span className="font-outfit text-3xl font-black text-purple-200 block mb-3">01</span>
            <h3 className="font-outfit text-lg font-bold text-slate-900 mb-2">Tell Us About Yourself</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Add your academic background, current skill proficiencies, interests, and target industry goals.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 relative">
            <span className="font-outfit text-3xl font-black text-cyan-200 block mb-3">02</span>
            <h3 className="font-outfit text-lg font-bold text-slate-900 mb-2">Let AI Analyze</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our intelligence engine identifies patterns, competencies, skill gaps, and high-compatibility career matches.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 relative">
            <span className="font-outfit text-3xl font-black text-violet-200 block mb-3">03</span>
            <h3 className="font-outfit text-lg font-bold text-slate-900 mb-2">Discover Your Path</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Explore custom roadmaps, salary projections, real-time market trends, and priority milestones.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 relative">
            <span className="font-outfit text-3xl font-black text-emerald-200 block mb-3">04</span>
            <h3 className="font-outfit text-lg font-bold text-slate-900 mb-2">Take Your Next Step</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Optimize your ATS resume, practice mock coaching questions, and execute your curriculum with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#635BFF] bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
              Trusted by Candidates
            </span>
            <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-3 mb-4">
              Real Impact, Real Careers
            </h2>
            <p className="text-slate-600 text-base">
              See how learners and professionals transitioned into high-demand roles with Futuro AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400" />)}
                </div>
                <p className="text-sm text-slate-600 italic mb-6 leading-relaxed">
                  "The customized roadmap helped me transition from standard HTML/CSS to React and TypeScript in 4 months. The mock interview coach was the final key to passing my technical screens!"
                </p>
              </div>
              <div className="flex items-center space-x-3 pt-4 border-t border-slate-100">
                <div className="h-10 w-10 rounded-full bg-purple-100 text-[#635BFF] font-bold flex items-center justify-center text-sm">
                  AR
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Alex Rivera</h4>
                  <p className="text-xs text-slate-500">Frontend Engineer at TechCorp</p>
                </div>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400" />)}
                </div>
                <p className="text-sm text-slate-600 italic mb-6 leading-relaxed">
                  "I was lost transitioning from sales to product analytics. The personality assessment highlighted Product Management. Futuro AI pointed out exactly what agile methods and tools I had gaps in."
                </p>
              </div>
              <div className="flex items-center space-x-3 pt-4 border-t border-slate-100">
                <div className="h-10 w-10 rounded-full bg-cyan-100 text-cyan-700 font-bold flex items-center justify-center text-sm">
                  SK
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Sarah Kim</h4>
                  <p className="text-xs text-slate-500">Associate PM at SaaS-Corp</p>
                </div>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400" />)}
                </div>
                <p className="text-sm text-slate-600 italic mb-6 leading-relaxed">
                  "The ATS Resume analyzer was an eye-opener. I did not realize how many keywords I missed. I uploaded three drafts until I hit a score of 90%, and got 4 callbacks within the next week."
                </p>
              </div>
              <div className="flex items-center space-x-3 pt-4 border-t border-slate-100">
                <div className="h-10 w-10 rounded-full bg-violet-100 text-violet-700 font-bold flex items-center justify-center text-sm">
                  MJ
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Marcus Johnson</h4>
                  <p className="text-xs text-slate-500">Cyber Security Analyst</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#635BFF] bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
            Got Questions?
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-3 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm">
            Everything you need to know about the Futuro AI intelligence engine.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all shadow-sm"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-slate-900 hover:bg-slate-50/70 transition-colors"
              >
                <span className="flex items-center space-x-3">
                  <HelpCircle className="h-4 w-4 text-[#635BFF]" />
                  <span className="text-sm font-medium">{faq.q}</span>
                </span>
                <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${activeFaq === idx ? 'rotate-180 text-[#635BFF]' : ''}`} />
              </button>
              {activeFaq === idx && (
                <div className="p-5 pt-0 border-t border-slate-100 text-xs text-slate-600 leading-relaxed bg-slate-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final Inspiring CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto p-10 sm:p-14 rounded-3xl bg-gradient-to-tr from-violet-600 via-[#635BFF] to-cyan-600 text-white text-center shadow-xl shadow-indigo-500/15 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Ready to Level Up?</span>
            </span>
            <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Your Future Starts with One Decision.
            </h2>
            <p className="text-purple-100 text-base sm:text-lg mb-8 leading-relaxed">
              Discover where your skills can take you. Join thousands of candidates leveling up their careers with Futuro AI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <Link
                href="/register"
                className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-50 text-[#635BFF] font-bold rounded-xl shadow-lg active:scale-98 transition-all text-sm"
              >
                Start Your Journey →
              </Link>
              <Link
                href="/login?redirect=assessment"
                className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/25 active:scale-98 transition-all text-sm"
              >
                Take Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#635BFF] bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
            Contact Support
          </span>
          <h2 className="font-outfit text-3xl font-extrabold text-slate-900 mt-3 mb-2">
            Get in Touch with Mentors
          </h2>
          <p className="text-slate-600 text-xs">
            Have questions or need enterprise / institution onboarding? Drop our team a note.
          </p>
        </div>

        <form onSubmit={handleContactSubmit} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">Your Name</label>
              <input
                type="text"
                required
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                placeholder="Alex Rivera"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#635BFF] text-sm text-slate-900 placeholder-slate-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">Email Address</label>
              <input
                type="email"
                required
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                placeholder="alex@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#635BFF] text-sm text-slate-900 placeholder-slate-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">Message</label>
            <textarea
              required
              rows={4}
              value={contactForm.message}
              onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
              placeholder="How can we help your career transition?"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#635BFF] text-sm text-slate-900 placeholder-slate-400"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={contactStatus === 'sending'}
              className="flex items-center space-x-2 px-6 py-2.5 bg-[#635BFF] hover:bg-[#5146E5] text-white font-semibold rounded-xl shadow-md shadow-indigo-500/15 active:scale-98 transition-all text-xs disabled:opacity-50 cursor-pointer"
            >
              {contactStatus === 'sending' ? (
                <span>Sending...</span>
              ) : contactStatus === 'success' ? (
                <span>Message Sent Successfully!</span>
              ) : (
                <>
                  <Send className="h-3.5 w-3.5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
}
