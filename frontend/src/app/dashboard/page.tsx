'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {
  User as UserIcon, Brain, Rocket, Award, CheckCircle2,
  ListTodo, Settings, ChevronRight, HelpCircle, Briefcase, Plus, Save, Sparkles, FileText, Newspaper, GraduationCap, ArrowRight, Flame
} from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export default function Dashboard() {
  const { user, token, logout, updateProfile, refreshProfile } = useAuth();
  const router = useRouter();

  // Dashboard Stats States
  const [latestAssessment, setLatestAssessment] = useState<any>(null);
  const [latestResume, setLatestResume] = useState<any>(null);
  const [goals, setGoals] = useState<any[]>([]);
  const [skillGap, setSkillGap] = useState<any>(null);
  const [latestFeed, setLatestFeed] = useState<any[]>([]);
  const [loadingStats, setLoadingStats] = useState(true);

  // Profile Edit States
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editCareer, setEditCareer] = useState(user?.targetCareer || '');
  const [newSkill, setNewSkill] = useState('');
  const [skillsList, setSkillsList] = useState<string[]>(user?.currentSkills || []);
  const [editExperience, setEditExperience] = useState(user?.experienceLevel || 'Entry Level');

  useEffect(() => {
    if (!user) {
      const savedToken = localStorage.getItem('token');
      if (!savedToken) {
        router.push('/login');
      }
    } else {
      setEditCareer(user.targetCareer || '');
      setSkillsList(user.currentSkills || []);
      setEditExperience(user.experienceLevel || 'Entry Level');
      fetchDashboardStats();
    }
  }, [user]);

  const fetchDashboardStats = async () => {
    if (!token && !localStorage.getItem('token')) return;
    setLoadingStats(true);
    const headers = { 'Authorization': `Bearer ${token || localStorage.getItem('token')}` };

    try {
      // Latest Assessment
      const assRes = await fetch(`${API_BASE_URL}/assessments/latest`, { headers });
      if (assRes.ok) {
        setLatestAssessment(await assRes.json());
      }

      // Latest Resume
      const resRes = await fetch(`${API_BASE_URL}/resumes/latest`, { headers });
      if (resRes.ok) {
        setLatestResume(await resRes.json());
      }

      // Goals
      const goalRes = await fetch(`${API_BASE_URL}/goals`, { headers });
      if (goalRes.ok) {
        setGoals(await goalRes.json());
      }

      // Skill Gap
      const gapRes = await fetch(`${API_BASE_URL}/careers/user/skill-gap`, { headers });
      if (gapRes.ok) {
        setSkillGap(await gapRes.json());
      }

      // Career News Feed
      try {
        const feedRes = await fetch(`${API_BASE_URL}/feed`, { headers });
        if (feedRes.ok) {
          const feedData = await feedRes.json();
          setLatestFeed(feedData.feed?.slice(0, 2) || []);
        } else {
          throw new Error('Feed API returned error');
        }
      } catch (err) {
        setLatestFeed(getFallbackFeedPreview(user?.targetCareer || 'Software Engineer'));
      }
    } catch (error) {
      setSkillGap({
        targetCareerTitle: user?.targetCareer || 'Software Engineer',
        existingSkills: user?.currentSkills || ['JavaScript', 'HTML'],
        missingSkills: ['TypeScript', 'React', 'Git', 'System Design'],
        learningPriorities: ['TypeScript', 'React'],
        improvementSuggestions: ['Build a lightweight typescript application or take a NextJS certificate.']
      });
    } finally {
      setLoadingStats(false);
    }
  };

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkill.trim() && !skillsList.includes(newSkill.trim())) {
      setSkillsList([...skillsList, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkillsList(skillsList.filter(s => s !== skillToRemove));
  };

  const handleSaveProfile = async () => {
    await updateProfile({
      targetCareer: editCareer,
      currentSkills: skillsList,
      experienceLevel: editExperience
    });
    setIsEditingProfile(false);
    fetchDashboardStats();
  };

  const handleToggleMilestone = async (goalId: string, milestoneIndex: number) => {
    const updatedGoals = goals.map(g => {
      if (g._id === goalId) {
        const milestones = g.milestones.map((m: any, idx: number) => 
          idx === milestoneIndex ? { ...m, completed: !m.completed } : m
        );
        const completedCount = milestones.filter((m: any) => m.completed).length;
        const progress = Math.round((completedCount / milestones.length) * 100);
        return { ...g, milestones, progress, completed: progress === 100 };
      }
      return g;
    });
    setGoals(updatedGoals);

    const targetGoal = updatedGoals.find(g => g._id === goalId);
    if (targetGoal) {
      try {
        await fetch(`${API_BASE_URL}/goals/${goalId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token || localStorage.getItem('token')}`
          },
          body: JSON.stringify({ milestones: targetGoal.milestones })
        });
      } catch (err) {
        console.warn('Could not persist goal update');
      }
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#635BFF] mx-auto" />
          <p className="text-xs text-slate-500 mt-4 font-medium">Loading dashboard session...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Welcome Header */}
        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm mb-8 relative overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-[#635BFF] to-cyan-500" />
          
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#635BFF] bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-100">
                Career Cockpit
              </span>
              <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold">
                <Flame className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                <span>Streak Active</span>
              </span>
            </div>
            <h1 className="font-outfit text-3xl font-extrabold text-slate-900">
              Welcome back, {user.name}!
            </h1>
            <p className="text-xs text-slate-500 mt-1.5 max-w-xl leading-relaxed">
              {user.targetCareer 
                ? `You are preparing for your milestone as a ${user.targetCareer}. Follow your skills roadmap below.`
                : 'Configure your target career or take the assessment to generate customized roadmap milestones.'
              }
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 shrink-0">
            <button
              onClick={() => setIsEditingProfile(!isEditingProfile)}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition-all active:scale-98 flex items-center space-x-1.5 cursor-pointer"
            >
              <Settings className="h-3.5 w-3.5" />
              <span>{isEditingProfile ? 'Close Edit' : 'Edit Profile'}</span>
            </button>
            <Link
              href="/resume-builder"
              className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold rounded-xl text-xs transition-all active:scale-98 flex items-center space-x-1.5 shadow-sm"
            >
              <FileText className="h-3.5 w-3.5 text-emerald-600" />
              <span>Resume Builder</span>
            </Link>
            <Link
              href="/assessment"
              className="px-4 py-2 bg-[#635BFF] hover:bg-[#5146E5] text-white font-semibold rounded-xl text-xs shadow-md shadow-indigo-500/15 transition-all active:scale-98 flex items-center space-x-1.5"
            >
              <Brain className="h-3.5 w-3.5" />
              <span>Take Assessment</span>
            </Link>
          </div>
        </div>

        {/* Profile Settings Panel (Collapsible) */}
        {isEditingProfile && (
          <div className="p-7 rounded-2xl bg-white border border-purple-200 shadow-md mb-8 space-y-5 animate-in fade-in duration-200">
            <h2 className="font-outfit text-lg font-bold text-slate-900 flex items-center space-x-2">
              <UserIcon className="h-4 w-4 text-[#635BFF]" />
              <span>Configure Career & Skill Profile</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">Target Career</label>
                <select
                  value={editCareer}
                  onChange={(e) => setEditCareer(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#635BFF] text-xs text-slate-900"
                >
                  <option value="">-- Complete assessment or select role --</option>
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="AI Engineer">AI Engineer</option>
                  <option value="Data Scientist">Data Scientist</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="Cyber Security Analyst">Cyber Security Analyst</option>
                  <option value="Product Manager">Product Manager</option>
                  <option value="Cloud Architect">Cloud Architect</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">Experience Level</label>
                <select
                  value={editExperience}
                  onChange={(e) => setEditExperience(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#635BFF] text-xs text-slate-900"
                >
                  <option value="Entry Level">Entry Level (Student / Intern)</option>
                  <option value="Mid Level">Mid Level (1-4 Years)</option>
                  <option value="Senior Level">Senior Level (5+ Years)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">My Current Skills</label>
              <form onSubmit={handleAddSkill} className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="e.g. TypeScript, PyTorch, Docker"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#635BFF] text-xs text-slate-900 placeholder-slate-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#635BFF] hover:bg-[#5146E5] text-white rounded-xl text-xs font-semibold flex items-center space-x-1 cursor-pointer"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add</span>
                </button>
              </form>
              <div className="flex flex-wrap gap-2">
                {skillsList.map((s, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3 py-1 rounded-lg bg-slate-100 text-xs font-medium text-slate-700 border border-slate-200"
                  >
                    <span>{s}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(s)}
                      className="ml-2 text-slate-400 hover:text-red-500 cursor-pointer font-bold"
                    >
                      &times;
                    </button>
                  </span>
                ))}
                {skillsList.length === 0 && (
                  <span className="text-xs text-slate-400 italic">No skills added yet.</span>
                )}
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={handleSaveProfile}
                className="px-5 py-2.5 bg-[#635BFF] hover:bg-[#5146E5] text-white rounded-xl font-semibold text-xs flex items-center space-x-1.5 shadow-sm cursor-pointer"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        )}

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main 2-Column Section */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Assessment Compatibility Card */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-outfit text-base font-bold text-slate-900 flex items-center space-x-2">
                  <Brain className="h-4 w-4 text-[#635BFF]" />
                  <span>Career Compatibility Matches</span>
                </h3>
                {latestAssessment && (
                  <span className="text-xs text-slate-400">Assessed on {new Date(latestAssessment.createdAt).toLocaleDateString()}</span>
                )}
              </div>

              {latestAssessment ? (
                <div className="space-y-5">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {latestAssessment.personalityInsights}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {latestAssessment.compatibilityScores.slice(0, 4).map((c: any, idx: number) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                        <div className="flex justify-between text-xs font-semibold text-slate-800 mb-2">
                          <span>{c.careerTitle}</span>
                          <span className="text-[#635BFF] font-bold">{c.score}% Fit</span>
                        </div>
                        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-violet-600 to-[#635BFF] h-full rounded-full" style={{ width: `${c.score}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {latestAssessment.strengthAnalysis?.length > 0 && (
                    <div className="pt-4 border-t border-slate-100">
                      <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Key Strengths Identified</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {latestAssessment.strengthAnalysis.map((str: string, i: number) => (
                          <li key={i} className="flex items-center space-x-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                            <span>{str}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Brain className="h-10 w-10 text-slate-300 mx-auto mb-3" />
                  <p className="text-xs text-slate-500 font-medium">No assessment completed yet.</p>
                  <Link
                    href="/assessment"
                    className="inline-flex items-center space-x-1.5 px-4 py-2 bg-[#635BFF] hover:bg-[#5146E5] text-white font-semibold rounded-xl text-xs mt-3 shadow-sm"
                  >
                    <span>Take Career Quiz</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              )}
            </div>

            {/* Learning Roadmap Snapshot */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-5">
                <h3 className="font-outfit text-base font-bold text-slate-900 flex items-center space-x-2">
                  <Rocket className="h-4 w-4 text-cyan-600" />
                  <span>Personalized Roadmap Curriculum</span>
                </h3>
                {user.targetCareer && (
                  <Link href="/roadmap" className="text-xs font-semibold text-[#635BFF] hover:underline flex items-center">
                    <span>Full Roadmap</span>
                    <ChevronRight className="h-3 w-3 ml-0.5" />
                  </Link>
                )}
              </div>

              {user.targetCareer ? (
                <div className="space-y-4">
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Customized learning trajectory curated for <strong>{user.targetCareer}</strong>.
                  </p>
                  <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-100 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-xs text-slate-900">Month 1: Core Fundamentals & System Design</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Master key architecture paradigms and hands-on coding tests</p>
                    </div>
                    <Link href="/roadmap" className="px-3.5 py-1.5 bg-[#635BFF] hover:bg-[#5146E5] text-white rounded-lg text-xs font-semibold shadow-sm shrink-0">
                      Open Module
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="text-center py-6">
                  <Rocket className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                  <p className="text-xs text-slate-500">Select a career in settings or take assessment to generate roadmap.</p>
                </div>
              )}
            </div>

            {/* Market Intelligence Feed */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-5">
                <h3 className="font-outfit text-base font-bold text-slate-900 flex items-center space-x-2">
                  <Newspaper className="h-4 w-4 text-slate-500" />
                  <span>Industry Signals & Hiring Trends</span>
                </h3>
                <Link href="/feed" className="text-xs font-semibold text-[#635BFF] hover:underline flex items-center">
                  <span>View All</span>
                  <ChevronRight className="h-3 w-3 ml-0.5" />
                </Link>
              </div>

              {latestFeed.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {latestFeed.map((item, idx) => (
                    <Link
                      key={idx}
                      href="/feed"
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-purple-200 hover:bg-purple-50/20 transition-all block group"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="inline-block px-2 py-0.5 bg-purple-100 text-[#635BFF] text-[10px] font-bold rounded">
                          {item.category === 'industry_update' ? 'Update' :
                           item.category === 'hiring_trend' ? 'Trend' :
                           item.category === 'new_tech' ? 'Tech' : 'Notice'}
                        </span>
                        <span className="text-[10px] text-slate-400">{item.date}</span>
                      </div>
                      <h4 className="font-bold text-xs text-slate-900 line-clamp-1 group-hover:text-[#635BFF] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                        {item.summary}
                      </p>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-400 text-center py-4">No recent signals found.</p>
              )}
            </div>
          </div>

          {/* Sidebar 1-Column Section */}
          <div className="space-y-8">
            
            {/* ATS Resume Rating */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
              <h3 className="font-outfit text-base font-bold text-slate-900 flex items-center justify-center space-x-2 mb-5">
                <Award className="h-4 w-4 text-emerald-600" />
                <span>Resume ATS Rating</span>
              </h3>

              {latestResume ? (
                <div>
                  <div className="inline-flex items-center justify-center h-20 w-20 rounded-full border-4 border-emerald-500 text-2xl font-black text-emerald-600 mb-3 bg-emerald-50">
                    {latestResume.atsScore}%
                  </div>
                  <h4 className="font-bold text-xs text-slate-800">Status: {latestResume.feedback?.atsRating || 'Good'}</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Found {latestResume.feedback?.keywordsFound?.length || 0} keywords, {latestResume.feedback?.keywordsMissing?.length || 0} gaps.
                  </p>
                  <Link
                    href="/resume"
                    className="inline-block px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs mt-4 transition-colors"
                  >
                    View ATS Details
                  </Link>
                </div>
              ) : (
                <div className="py-4">
                  <Award className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                  <p className="text-xs text-slate-500">No resume analyzed yet.</p>
                  <Link
                    href="/resume"
                    className="inline-block px-4 py-2 bg-[#635BFF] hover:bg-[#5146E5] text-white font-semibold rounded-xl text-xs mt-3 shadow-sm"
                  >
                    Analyze PDF
                  </Link>
                </div>
              )}
            </div>

            {/* Milestone Goal Tracker */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-outfit text-base font-bold text-slate-900 flex items-center space-x-2">
                  <ListTodo className="h-4 w-4 text-[#635BFF]" />
                  <span>Milestone Checklist</span>
                </h3>
              </div>

              <div className="space-y-3.5">
                {goals.length > 0 ? (
                  goals.slice(0, 3).map((g) => (
                    <div key={g._id} className="border-b border-slate-100 pb-3 last:border-b-0">
                      <div className="flex justify-between items-center text-xs font-semibold text-slate-800 mb-1.5">
                        <span>{g.title}</span>
                        <span className="text-[#635BFF]">{g.progress}%</span>
                      </div>
                      <div className="space-y-1">
                        {g.milestones.slice(0, 2).map((m: any, idx: number) => (
                          <label key={idx} className="flex items-center space-x-2 text-xs text-slate-600 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={m.completed}
                              onChange={() => handleToggleMilestone(g._id, idx)}
                              className="rounded border-slate-300 text-[#635BFF] focus:ring-purple-500"
                            />
                            <span className={m.completed ? 'line-through text-slate-400' : ''}>{m.title}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4">
                    <p className="text-xs text-slate-500">No active milestone goals.</p>
                    <Link href="/roadmap" className="inline-block text-xs font-semibold text-[#635BFF] hover:underline mt-1.5">
                      Create goals from roadmaps
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* AI Quick Actions Shortcuts */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">AI Copilots</h3>
              
              <div className="space-y-1.5 text-xs font-medium">
                <Link
                  href="/resume-builder"
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-purple-50/60 text-slate-700 hover:text-[#635BFF] transition-all group"
                >
                  <span className="flex items-center space-x-2.5">
                    <FileText className="h-4 w-4 text-emerald-600" />
                    <span>Smart Resume Builder</span>
                  </span>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  href="/interview"
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-purple-50/60 text-slate-700 hover:text-[#635BFF] transition-all group"
                >
                  <span className="flex items-center space-x-2.5">
                    <Briefcase className="h-4 w-4 text-cyan-600" />
                    <span>AI Mock Interview</span>
                  </span>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  href="/chatbot"
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-purple-50/60 text-slate-700 hover:text-[#635BFF] transition-all group"
                >
                  <span className="flex items-center space-x-2.5">
                    <Sparkles className="h-4 w-4 text-[#635BFF]" />
                    <span>Career AI Mentor</span>
                  </span>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  href="/marksheet-analysis"
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-purple-50/60 text-slate-700 hover:text-[#635BFF] transition-all group"
                >
                  <span className="flex items-center space-x-2.5">
                    <GraduationCap className="h-4 w-4 text-purple-600" />
                    <span>Marksheet Analyzer</span>
                  </span>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  href="/comparison"
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-purple-50/60 text-slate-700 hover:text-[#635BFF] transition-all group"
                >
                  <span className="flex items-center space-x-2.5">
                    <Settings className="h-4 w-4 text-pink-600" />
                    <span>Comparison Matrix</span>
                  </span>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function getFallbackFeedPreview(career: string) {
  const c = career.toLowerCase();
  if (c.includes('ai') || c.includes('machine') || c.includes('learning')) {
    return [
      {
        id: 'openai-gpt5-release-preview',
        category: 'new_tech',
        title: 'OpenAI Releases Enhanced Agentic Models',
        summary: 'New architectural advancements in autonomous multi-step reasoning.',
        date: '2 hours ago'
      },
      {
        id: 'ai-salaries-climb-2026-preview',
        category: 'hiring_trend',
        title: 'AI Solutions Architect Compensation Rises by 35%',
        summary: 'Specialized enterprise AI developers commanding top market offers.',
        date: 'Yesterday'
      }
    ];
  }
  return [
    {
      id: 'react-19-production-adoption-preview',
      category: 'new_tech',
      title: 'React 19 Enterprise Adoption Accelerates',
      summary: 'Development teams shifting to modern compiler-based optimization.',
      date: '3 hours ago'
    },
    {
      id: 'tech-hiring-market-recovery-preview',
      category: 'hiring_trend',
      title: 'Tech Hiring Index Surges for Full-Stack Roles',
      summary: 'Reports indicate strong growth in cloud and frontend positions.',
      date: 'Yesterday'
    }
  ];
}
