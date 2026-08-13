'use client';

import React, { useState } from 'react';
import { AppShell } from '../../components/shell/AppShell';
import { useAuth, DetailedSkill, UserCertification, UserProject, UserExperience, UserAchievement } from '../../context/AuthContext';
import {
  User,
  Sparkles,
  Award,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  Globe,
  Plus,
  Edit3,
  Layers,
  Heart,
  BookOpen,
  Code,
  ExternalLink,
  Trash2
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

export default function ProfilePage() {
  const { user, updateProfile, addSkill, addCertification, addProject } = useAuth();

  const [activeTab, setActiveTab] = useState<'overview' | 'education' | 'skills' | 'certifications' | 'projects' | 'experience' | 'achievements' | 'interests' | 'social'>('overview');
  
  // Modals state
  const [showSkillModal, setShowSkillModal] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showEduModal, setShowEduModal] = useState(false);

  // Form states for modals
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillLevel, setNewSkillLevel] = useState<'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'>('Intermediate');
  
  const [newCertName, setNewCertName] = useState('');
  const [newCertIssuer, setNewCertIssuer] = useState('');
  const [newCertDate, setNewCertDate] = useState('');
  const [newCertLink, setNewCertLink] = useState('');

  const [newProjName, setNewProjName] = useState('');
  const [newProjDesc, setNewProjDesc] = useState('');
  const [newProjTech, setNewProjTech] = useState('');
  const [newProjGithub, setNewProjGithub] = useState('');
  const [newProjDemo, setNewProjDemo] = useState('');

  const [eduDegree, setEduDegree] = useState(user?.education?.degree || '');
  const [eduBranch, setEduBranch] = useState(user?.education?.field || '');
  const [eduSchool, setEduSchool] = useState(user?.education?.school || '');
  const [eduYear, setEduYear] = useState(user?.education?.gradYear || 2026);

  const handleAddSkillSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;
    await addSkill({ name: newSkillName.trim(), level: newSkillLevel });
    setNewSkillName('');
    setShowSkillModal(false);
  };

  const handleAddCertSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCertName.trim() || !newCertIssuer.trim()) return;
    await addCertification({ name: newCertName.trim(), issuer: newCertIssuer.trim(), date: newCertDate, link: newCertLink });
    setNewCertName('');
    setNewCertIssuer('');
    setShowCertModal(false);
  };

  const handleAddProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjName.trim() || !newProjDesc.trim()) return;
    const techArray = newProjTech.split(',').map(t => t.trim()).filter(Boolean);
    await addProject({ name: newProjName.trim(), description: newProjDesc.trim(), tech: techArray, github: newProjGithub, demo: newProjDemo });
    setNewProjName('');
    setNewProjDesc('');
    setNewProjTech('');
    setShowProjectModal(false);
  };

  const handleSaveEducation = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProfile({
      education: { degree: eduDegree, field: eduBranch, school: eduSchool, gradYear: Number(eduYear) }
    });
    setShowEduModal(false);
  };

  const detailedSkills = user?.skillsWithLevel || [];
  const currentSkills = user?.currentSkills || [];
  const certifications = user?.certifications || [];
  const projects = user?.projects || [];
  const experience = user?.experience || [];
  const achievements = user?.achievements || [];
  const interests = user?.interests || [];
  const subjects = user?.subjectsEnjoyed || [];

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 select-none">
        {/* Header Hero Section */}
        <Card variant="elevated" className="p-6 sm:p-8 bg-white border-slate-200 shadow-sm rounded-3xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center space-x-5">
              <div className="w-20 h-20 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-extrabold text-3xl shadow-lg shadow-indigo-500/20">
                {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-outfit tracking-tight">
                  {user?.name || 'User'}
                </h1>
                <p className="text-xs font-semibold text-indigo-600 mt-0.5">
                  {user?.education?.degree ? `${user.education.degree} in ${user.education.field || 'General'}` : 'Career Explorer & Student'}
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-slate-500">
                  <span className="flex items-center space-x-1">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>{user?.email || 'user@example.com'}</span>
                  </span>
                  {user?.location && (
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{user.location}</span>
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Button variant="secondary" size="sm" onClick={() => setShowEduModal(true)} leftIcon={<Edit3 className="w-3.5 h-3.5" />}>
                Edit Profile Info
              </Button>
              <Button variant="primary" size="sm" onClick={() => setShowSkillModal(true)} leftIcon={<Plus className="w-3.5 h-3.5" />}>
                Add Skill
              </Button>
            </div>
          </div>
        </Card>

        {/* Section Navigation Tabs */}
        <div className="flex overflow-x-auto gap-2 border-b border-slate-200 pb-2 scrollbar-none">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'education', label: 'Education' },
            { id: 'skills', label: `Skills (${currentSkills.length})` },
            { id: 'certifications', label: `Certifications (${certifications.length})` },
            { id: 'projects', label: `Projects (${projects.length})` },
            { id: 'experience', label: 'Experience' },
            { id: 'achievements', label: 'Achievements' },
            { id: 'interests', label: 'Interests & Subjects' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: OVERVIEW */}
        {(activeTab === 'overview' || activeTab === 'education') && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* EDUCATION SECTION */}
            <Card variant="glass" className="p-6 bg-white border-slate-200 shadow-xs rounded-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 font-outfit flex items-center space-x-2">
                  <GraduationCap className="w-4 h-4 text-indigo-600" />
                  <span>EDUCATION</span>
                </h3>
                <button onClick={() => setShowEduModal(true)} className="text-xs font-semibold text-indigo-600 hover:underline">Edit</button>
              </div>

              {user?.education?.degree ? (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-sm font-extrabold text-slate-900 block">{user.education.degree}</span>
                  <span className="text-xs text-indigo-600 font-semibold block">{user.education.field}</span>
                  <span className="text-xs text-slate-500 block">{user.education.school} &bull; Graduating {user.education.gradYear || 2026}</span>
                </div>
              ) : (
                <div className="p-6 text-center border-2 border-dashed border-slate-200 rounded-2xl space-y-2">
                  <p className="text-xs text-slate-500">No education details added yet.</p>
                  <Button variant="secondary" size="sm" onClick={() => setShowEduModal(true)}>Add Education Information →</Button>
                </div>
              )}
            </Card>

            {/* INTERESTS SECTION */}
            <Card variant="glass" className="p-6 bg-white border-slate-200 shadow-xs rounded-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 font-outfit flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span>CAREER INTERESTS & SUBJECTS</span>
                </h3>
              </div>

              {interests.length > 0 || subjects.length > 0 ? (
                <div className="space-y-3">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Domains of Interest</span>
                    <div className="flex flex-wrap gap-1.5">
                      {interests.map((int, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100">
                          {int}
                        </span>
                      ))}
                    </div>
                  </div>

                  {subjects.length > 0 && (
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Subjects Enjoyed</span>
                      <div className="flex flex-wrap gap-1.5">
                        {subjects.map((s, i) => (
                          <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-6 text-center border-2 border-dashed border-slate-200 rounded-2xl space-y-2">
                  <p className="text-xs text-slate-500">No career interests saved yet.</p>
                </div>
              )}
            </Card>
          </div>
        )}

        {/* SKILLS SECTION */}
        {(activeTab === 'overview' || activeTab === 'skills') && (
          <Card variant="glass" className="p-6 bg-white border-slate-200 shadow-xs rounded-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 font-outfit flex items-center space-x-2">
                <Code className="w-4 h-4 text-indigo-600" />
                <span>CURRENT SKILLS & PROFICIENCY</span>
              </h3>
              <Button variant="secondary" size="sm" onClick={() => setShowSkillModal(true)} leftIcon={<Plus className="w-3.5 h-3.5" />}>
                + Add Skill
              </Button>
            </div>

            {detailedSkills.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {detailedSkills.map((sk, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-900 text-xs block">{sk.name}</span>
                      <span className="text-[10px] text-slate-500 block">{sk.howLearned || 'Self-Taught'}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-700 text-[10px] font-extrabold">
                      {sk.level}
                    </span>
                  </div>
                ))}
              </div>
            ) : currentSkills.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {currentSkills.map((sk, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-200">
                    {sk}
                  </span>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center border-2 border-dashed border-slate-200 rounded-2xl space-y-2">
                <p className="text-xs text-slate-600 font-semibold">You haven't added any skills yet.</p>
                <Button variant="primary" size="sm" onClick={() => setShowSkillModal(true)}>
                  Add Your Skills →
                </Button>
              </div>
            )}
          </Card>
        )}

        {/* CERTIFICATIONS SECTION */}
        {(activeTab === 'overview' || activeTab === 'certifications') && (
          <Card variant="glass" className="p-6 bg-white border-slate-200 shadow-xs rounded-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 font-outfit flex items-center space-x-2">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>VERIFIED CERTIFICATIONS</span>
              </h3>
              <Button variant="secondary" size="sm" onClick={() => setShowCertModal(true)} leftIcon={<Plus className="w-3.5 h-3.5" />}>
                + Add Certification
              </Button>
            </div>

            {certifications.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((c, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-900 text-xs block">{c.name}</span>
                      <span className="text-[11px] text-slate-500 block">{c.issuer}</span>
                    </div>
                    {c.link && (
                      <a href={c.link} target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-700">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center border-2 border-dashed border-slate-200 rounded-2xl space-y-2">
                <p className="text-xs text-slate-600 font-semibold">No certifications added yet.</p>
                <Button variant="secondary" size="sm" onClick={() => setShowCertModal(true)}>
                  Add Your First Certification →
                </Button>
              </div>
            )}
          </Card>
        )}

        {/* PROJECTS SECTION */}
        {(activeTab === 'overview' || activeTab === 'projects') && (
          <Card variant="glass" className="p-6 bg-white border-slate-200 shadow-xs rounded-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 font-outfit flex items-center space-x-2">
                <Layers className="w-4 h-4 text-indigo-600" />
                <span>BUILD PROJECTS & PORTFOLIO</span>
              </h3>
              <Button variant="secondary" size="sm" onClick={() => setShowProjectModal(true)} leftIcon={<Plus className="w-3.5 h-3.5" />}>
                + Add Project
              </Button>
            </div>

            {projects.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.map((p, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <h4 className="font-bold text-slate-900 text-xs">{p.name}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">{p.description}</p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {p.tech.map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-semibold text-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center border-2 border-dashed border-slate-200 rounded-2xl space-y-2">
                <p className="text-xs text-slate-600 font-semibold">No portfolio projects added yet.</p>
                <Button variant="secondary" size="sm" onClick={() => setShowProjectModal(true)}>
                  Add Your First Project →
                </Button>
              </div>
            )}
          </Card>
        )}

        {/* MODAL: ADD SKILL */}
        {showSkillModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 w-full max-w-md shadow-2xl space-y-4">
              <h3 className="text-lg font-bold text-slate-900 font-outfit">Add Skill to Profile</h3>
              <form onSubmit={handleAddSkillSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Skill Name</label>
                  <input
                    type="text"
                    required
                    value={newSkillName}
                    onChange={(e) => setNewSkillName(e.target.value)}
                    placeholder="e.g. Python, Machine Learning, React"
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Proficiency Level</label>
                  <select
                    value={newSkillLevel}
                    onChange={(e) => setNewSkillLevel(e.target.value as any)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>
                <div className="flex justify-end space-x-2 pt-3">
                  <Button type="button" variant="secondary" size="sm" onClick={() => setShowSkillModal(false)}>Cancel</Button>
                  <Button type="submit" variant="primary" size="sm">Save Skill</Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL: ADD CERTIFICATION */}
        {showCertModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 w-full max-w-md shadow-2xl space-y-4">
              <h3 className="text-lg font-bold text-slate-900 font-outfit">Add Certification</h3>
              <form onSubmit={handleAddCertSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Certification Title</label>
                  <input
                    type="text"
                    required
                    value={newCertName}
                    onChange={(e) => setNewCertName(e.target.value)}
                    placeholder="e.g. AWS Certified Solutions Architect"
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Issuing Organization</label>
                  <input
                    type="text"
                    required
                    value={newCertIssuer}
                    onChange={(e) => setNewCertIssuer(e.target.value)}
                    placeholder="e.g. Amazon Web Services, Coursera, NPTEL"
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Credential URL (Optional)</label>
                  <input
                    type="url"
                    value={newCertLink}
                    onChange={(e) => setNewCertLink(e.target.value)}
                    placeholder="https://..."
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="flex justify-end space-x-2 pt-3">
                  <Button type="button" variant="secondary" size="sm" onClick={() => setShowCertModal(false)}>Cancel</Button>
                  <Button type="submit" variant="primary" size="sm">Save Certification</Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL: ADD PROJECT */}
        {showProjectModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 w-full max-w-md shadow-2xl space-y-4">
              <h3 className="text-lg font-bold text-slate-900 font-outfit">Add Project</h3>
              <form onSubmit={handleAddProjectSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Project Name</label>
                  <input
                    type="text"
                    required
                    value={newProjName}
                    onChange={(e) => setNewProjName(e.target.value)}
                    placeholder="e.g. AI RAG Knowledge Assistant"
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Short Description</label>
                  <textarea
                    required
                    rows={3}
                    value={newProjDesc}
                    onChange={(e) => setNewProjDesc(e.target.value)}
                    placeholder="Built a vector search API using Next.js and Python..."
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Technologies Used (Comma Separated)</label>
                  <input
                    type="text"
                    value={newProjTech}
                    onChange={(e) => setNewProjTech(e.target.value)}
                    placeholder="Python, React, FastAPI, SQL"
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="flex justify-end space-x-2 pt-3">
                  <Button type="button" variant="secondary" size="sm" onClick={() => setShowProjectModal(false)}>Cancel</Button>
                  <Button type="submit" variant="primary" size="sm">Save Project</Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL: EDIT EDUCATION */}
        {showEduModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 w-full max-w-md shadow-2xl space-y-4">
              <h3 className="text-lg font-bold text-slate-900 font-outfit">Edit Education Info</h3>
              <form onSubmit={handleSaveEducation} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Degree</label>
                  <input
                    type="text"
                    value={eduDegree}
                    onChange={(e) => setEduDegree(e.target.value)}
                    placeholder="e.g. B.Tech, B.Sc"
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Branch / Field</label>
                  <input
                    type="text"
                    value={eduBranch}
                    onChange={(e) => setEduBranch(e.target.value)}
                    placeholder="e.g. Computer Science & Engineering"
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">School / Institution</label>
                  <input
                    type="text"
                    value={eduSchool}
                    onChange={(e) => setEduSchool(e.target.value)}
                    placeholder="e.g. University of Mumbai"
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Graduation Year</label>
                  <input
                    type="number"
                    value={eduYear}
                    onChange={(e) => setEduYear(Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="flex justify-end space-x-2 pt-3">
                  <Button type="button" variant="secondary" size="sm" onClick={() => setShowEduModal(false)}>Cancel</Button>
                  <Button type="submit" variant="primary" size="sm">Save Changes</Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
