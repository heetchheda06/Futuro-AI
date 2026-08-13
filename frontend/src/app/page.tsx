'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Sparkles,
  Compass,
  Target,
  Zap,
  FileText,
  MessageSquare,
  GraduationCap,
  Flame,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Award,
  Layers,
  Users,
  Building2,
  BookOpen
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { CircularGauge } from '../components/ui/CircularGauge';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans select-none">
      <Navbar />

      <main className="flex-1 space-y-20 py-12">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 text-center relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="ambient-glow-bg top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-indigo-100/60 to-cyan-100/40" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Your AI-Powered Career Operating System</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 font-outfit tracking-tight leading-[1.1]">
              Build Your Future <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-700 to-cyan-600">
                With Precision AI.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
              Futuro AI continuously evaluates your skills, builds targeted 90-day roadmaps, conducts voice mock interviews, and powers your technical career trajectory.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <Link href="/register" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-md shadow-indigo-500/20">
                  <span>Get Started Free</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <Link href="/career-navigator" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <span>Explore Career Navigator</span>
                </Button>
              </Link>
            </div>

            {/* Micro Stats */}
            <div className="pt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-500 font-semibold">
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>1,200+ Role Benchmarks</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                <span>ATS Resume Scanner</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                <span>Voice Mock Interviewer</span>
              </span>
            </div>
          </div>

          {/* Interactive HUD Card Preview */}
          <div className="mt-12 max-w-4xl mx-auto">
            <Card variant="elevated" className="p-6 sm:p-8 bg-white border-slate-200 shadow-md">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-left">
                <div className="space-y-3 flex-1">
                  <Badge variant="violet" size="sm">Live Career Telemetry HUD</Badge>
                  <h3 className="text-xl font-bold text-slate-900 font-outfit">
                    Full Stack AI Engineer Trajectory
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Target Goal: Senior AI Architect in 24 months. Your highest leverage opportunity is mastering vector search embeddings & distributed locks.
                  </p>

                  <div className="flex flex-wrap gap-2 text-xs pt-2">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                      ✓ Python 3.12 (95%)
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 font-bold border border-indigo-200">
                      ✓ FastAPI (88%)
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 font-bold border border-amber-200">
                      ○ Vector Search (27% Gap)
                    </span>
                  </div>
                </div>

                <div className="shrink-0 flex items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <CircularGauge score={82} size={130} label="Readiness" sublabel="+8% this month" />
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Feature Pillars Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <Badge variant="violet" size="sm">Complete Career OS Ecosystem</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-outfit">
              Everything You Need to Scale Your Career
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="interactive" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-outfit">Career Navigator & Graph</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Step-by-step career path progression and multi-tier interactive skill network graphs.
              </p>
              <Link href="/career-navigator" className="inline-flex items-center text-xs font-bold text-indigo-600 hover:text-indigo-700 pt-2">
                <span>Explore Navigator →</span>
              </Link>
            </Card>

            <Card variant="interactive" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center text-violet-600">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-outfit">Resume AI Workspace</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                In-memory ATS keyword scanner and bullet enhancer tailored to top tech hiring bars.
              </p>
              <Link href="/resume" className="inline-flex items-center text-xs font-bold text-violet-600 hover:text-violet-700 pt-2">
                <span>Scan Resume ATS →</span>
              </Link>
            </Card>

            <Card variant="interactive" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-outfit">AI Mock Interview Cockpit</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Voice & webcam mock interview drills with STAR method metrics and downloadable PDF reports.
              </p>
              <Link href="/ai-interviewer" className="inline-flex items-center text-xs font-bold text-cyan-600 hover:text-cyan-700 pt-2">
                <span>Enter AI Cockpit →</span>
              </Link>
            </Card>
          </div>
        </section>

        {/* Call To Action Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="glowing" className="p-8 sm:p-12 text-center space-y-6 bg-gradient-to-r from-violet-50 via-white to-cyan-50 border-violet-200">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-outfit tracking-tight">
              Ready to Control Your Technical Trajectory?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              Join thousands of engineers using Futuro AI to close skill gaps, build high-impact projects, and land top-tier offers.
            </p>
            <div className="pt-2">
              <Link href="/register">
                <Button variant="primary" size="lg" className="shadow-md shadow-indigo-500/20">
                  <span>Create Free Account</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
