'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { AppShell } from '../../components/shell/AppShell';
import {
  Sparkles,
  Zap,
  TrendingUp,
  Award,
  CheckCircle2,
  ArrowRight,
  Flame,
  FileText,
  MessageSquare,
  Milestone,
  Target,
  Clock,
  Briefcase,
  Compass,
  GraduationCap,
  Calendar,
  Layers,
  HelpCircle,
  RefreshCw
} from 'lucide-react';
import { CircularGauge } from '../../components/ui/CircularGauge';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Skeleton } from '../../components/ui/Skeleton';
import { DataSourceBadge } from '../../components/ui/DataSourceBadge';
import { ActivityHeatmap } from '../../components/ActivityHeatmap';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export default function DashboardPage() {
  const { user, token } = useAuth();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [latestResume, setLatestResume] = useState<any>(null);
  const [skillGap, setSkillGap] = useState<any>(null);
  const [goals, setGoals] = useState<any[]>([]);
  const [feed, setFeed] = useState<any[]>([]);

  // Determine dynamic target role & top match from user profile / assessment
  const topAssessmentMatch = user?.assessmentResults?.[0]?.careerTitle;
  const targetRole = topAssessmentMatch || user?.targetCareer || (user?.interests?.includes('Coding') ? 'AI Engineer' : 'Career Discovery Mode');

  const userSkillsCount = user?.skillsWithLevel?.length || user?.currentSkills?.length || 0;
  const userInterestsCount = user?.interests?.length || user?.subjectsEnjoyed?.length || 0;

  useEffect(() => {
    fetchDashboardData();
  }, [user]);

  const fetchDashboardData = async () => {
    setLoading(true);
    const activeToken = token || localStorage.getItem('token');
    const headers: Record<string, string> = activeToken ? { Authorization: `Bearer ${activeToken}` } : {};

    try {
      // Resume latest
      try {
        const resRes = await fetch(`${API_BASE_URL}/resumes/latest`, { headers });
        if (resRes.ok) setLatestResume(await resRes.json());
      } catch (e) {}

      // Skill Gap
      try {
        const gapRes = await fetch(`${API_BASE_URL}/careers/skill-gap`, { headers });
        if (gapRes.ok) setSkillGap(await gapRes.json());
      } catch (e) {}

      // Goals
      try {
        const goalsRes = await fetch(`${API_BASE_URL}/goals`, { headers });
        if (goalsRes.ok) setGoals(await goalsRes.json());
      } catch (e) {}

      // Feed
      try {
        const feedRes = await fetch(`${API_BASE_URL}/feed?limit=4`);
        if (feedRes.ok) setFeed(await feedRes.json());
      } catch (e) {}
    } catch (err) {
      console.warn('Dashboard running on local telemetry simulation.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        {/* Top Hero Section: Greeting & Answer to "WHERE AM I?" */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Greeting & Trajectory Card */}
          <Card variant="elevated" className="lg:col-span-2 relative overflow-hidden bg-white border-slate-200 shadow-sm p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-[11px] font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Matched Path: {targetRole}</span>
                  </div>
                  {user?.education?.degree && (
                    <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold border border-slate-200">
                      🎓 {user.education.degree} ({user.education.field || 'Student'})
                    </span>
                  )}
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-outfit tracking-tight">
                  Good morning, {user?.name ? user.name.split(' ')[0] : 'User'}.
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
                  Welcome to your personalized career discovery dashboard. You have <strong className="text-indigo-600 font-bold">{userSkillsCount} verified skills</strong> and <strong className="text-indigo-600 font-bold">{userInterestsCount} career interests</strong> tracked.
                </p>

                <div className="pt-2 flex items-center space-x-2">
                  <DataSourceBadge isLive={true} />
                  <span className="text-[10px] text-slate-400 font-medium">&bull; Onboarding Profile Active</span>
                </div>
              </div>

              {/* Readiness Circular Gauge */}
              <div className="shrink-0 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                <CircularGauge score={userSkillsCount > 0 ? Math.min(95, 60 + userSkillsCount * 6) : 75} size={135} label="Readiness" sublabel="Career Alignment" />
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-200 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 block">Acquired Skills</span>
                <span className="text-base font-extrabold text-indigo-600">{userSkillsCount} Skills</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 block">Tracked Interests</span>
                <span className="text-base font-extrabold text-cyan-600">{userInterestsCount} Topics</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 block">Career Matches</span>
                <span className="text-base font-extrabold text-emerald-600">{user?.assessmentResults?.length || 6} Roles</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 block">Active Streak</span>
                <span className="text-base font-extrabold text-amber-600 flex items-center space-x-1">
                  <Flame className="w-3.5 h-3.5 fill-amber-500" />
                  <span>7 Days</span>
                </span>
              </div>
            </div>
          </Card>

          {/* Right Spotlight Card: "YOUR NEXT BEST MOVE" */}
          <Card variant="glowing" className="p-6 flex flex-col justify-between bg-gradient-to-br from-violet-50/90 via-white to-cyan-50/50 border-violet-200">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="violet" size="sm" icon={<Zap className="w-3.5 h-3.5" />}>
                  Your Recommended Action
                </Badge>
                <span className="text-[10px] font-bold text-indigo-600">Top Priority</span>
              </div>

              {userSkillsCount === 0 ? (
                <>
                  <h3 className="text-base font-bold text-slate-900 font-outfit leading-snug">
                    &ldquo;Complete the Career Discovery Assessment to uncover your high-fit role recommendations.&rdquo;
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Answer 5 quick interactive questions to map your problem-solving style to high-paying careers.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-base font-bold text-slate-900 font-outfit leading-snug">
                    &ldquo;Explore career possibilities and analyze missing skills for {targetRole}.&rdquo;
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Compare your verified skills against industry benchmarks and build your portfolio blueprint.
                  </p>
                </>
              )}
            </div>

            <div className="pt-6 space-y-2">
              <Link href={userSkillsCount === 0 ? "/assessment" : "/explorer"}>
                <Button variant="primary" size="sm" className="w-full">
                  <span>{userSkillsCount === 0 ? "Take Assessment →" : "Discover Careers →"}</span>
                </Button>
              </Link>
              <Link href="/profile">
                <Button variant="secondary" size="sm" className="w-full">
                  <span>View Career Profile</span>
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        {/* Section 2: 365-Day Activity Heatmap */}
        <ActivityHeatmap />

        {/* Section 3: User Onboarding & Discovery Synthesis */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Onboarding Highlights */}
          <Card variant="default" className="lg:col-span-2 p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <h3 className="text-sm font-bold text-slate-900 font-outfit uppercase tracking-wider">
                  Your Career Discovery Profile
                </h3>
              </div>
              <Link href="/profile" className="text-xs font-semibold text-indigo-600 hover:underline">Edit Profile →</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Acquired Skills */}
              <div className="p-4 rounded-xl bg-violet-50/70 border border-violet-200 text-xs space-y-2">
                <span className="font-extrabold text-indigo-700 uppercase tracking-wider text-[10px] block">
                  ✦ Active Skills & Proficiencies
                </span>
                {(user?.skillsWithLevel?.length || 0) > 0 ? (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {user?.skillsWithLevel?.map((s, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-white border border-indigo-200 text-slate-800 font-bold">
                        {s.name} ({s.level})
                      </span>
                    ))}
                  </div>
                ) : (user?.currentSkills?.length || 0) > 0 ? (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {user?.currentSkills?.map((s, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-white border border-indigo-200 text-slate-800 font-bold">
                        {s}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-500 italic">No skills added yet. Add skills in Profile or take Assessment!</p>
                )}
                <Link href="/career-graph" className="inline-flex items-center text-xs font-bold text-indigo-600 hover:text-indigo-700 pt-1">
                  <span>View Skill Graph →</span>
                </Link>
              </div>

              {/* Interests & Subjects */}
              <div className="p-4 rounded-xl bg-cyan-50/70 border border-cyan-200 text-xs space-y-2">
                <span className="font-extrabold text-cyan-700 uppercase tracking-wider text-[10px] block">
                  ✦ Career Interests & Subjects
                </span>
                {(user?.interests?.length || 0) > 0 || (user?.subjectsEnjoyed?.length || 0) > 0 ? (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {[...(user?.interests || []), ...(user?.subjectsEnjoyed || [])].map((item, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-white border border-cyan-200 text-slate-800 font-bold">
                        {item}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-500 italic">No interests selected during onboarding.</p>
                )}
                <Link href="/recommendations" className="inline-flex items-center text-xs font-bold text-cyan-600 hover:text-cyan-700 pt-1">
                  <span>View Recommended Roles →</span>
                </Link>
              </div>
            </div>
          </Card>

          {/* Quick Access Market Pulse */}
          <Card variant="default" className="p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-1.5">
                <Flame className="w-3.5 h-3.5 text-rose-500" />
                <span>Market Telemetry</span>
              </span>
              <Link href="/career-updates" className="text-[11px] font-bold text-indigo-600 hover:text-indigo-700">
                View All →
              </Link>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[10px] text-slate-500 font-bold uppercase">Hiring Signal</span>
                <p className="font-bold text-slate-900 leading-snug">Senior AI Engineers command +35% salary premium in Q3.</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[10px] text-slate-500 font-bold uppercase">Tech Shift</span>
                <p className="font-bold text-slate-900 leading-snug">Enterprise adoption of vector search engines up +64% YoY.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
