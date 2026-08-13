'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Compass,
  GraduationCap,
  BookOpen,
  Heart,
  Briefcase,
  Award,
  Zap
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';

export default function OnboardingPage() {
  const { user, updateProfile } = useAuth();
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [saving, setSaving] = useState(false);

  // Discovery Form State
  const [degree, setDegree] = useState('B.Tech / B.E.');
  const [field, setField] = useState('Computer Science & Engineering');
  const [school, setSchool] = useState('State University');
  const [gradYear, setGradYear] = useState(2026);

  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'Artificial Intelligence & ML', 'Web Development', 'Problem Solving'
  ]);
  
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([
    'Computer Science', 'Mathematics', 'Logic & Design'
  ]);

  const [selectedSkills, setSelectedSkills] = useState<string[]>([
    'Python', 'JavaScript', 'SQL', 'Problem Solving'
  ]);

  const [selectedStrengths, setSelectedStrengths] = useState<string[]>([
    'Analytical Thinking', 'Creative Coding', 'Team Collaboration'
  ]);

  const [selectedWorkTypes, setSelectedWorkTypes] = useState<string[]>([
    'Building & Coding Solutions', 'Analyzing Data & Finding Patterns', 'Designing User Experiences'
  ]);

  const popularInterests = [
    'Artificial Intelligence & ML', 'Web Development', 'Mobile Apps',
    'Cybersecurity & Hacking', 'Data Analysis & Insights', 'Cloud Systems & DevOps',
    'UI/UX Design', 'Finance & Markets', 'Product & Management', 'Biotech & Health Data',
    'Robotics & Embedded Hardware', 'Scientific Research'
  ];

  const popularSubjects = [
    'Computer Science', 'Mathematics', 'Physics', 'Statistics',
    'Economics', 'Design & Visual Arts', 'Business Studies', 'Psychology',
    'Electronics', 'Biology / Biotechnology', 'Logic & Problem Solving'
  ];

  const popularSkills = [
    'Python', 'JavaScript', 'TypeScript', 'React', 'SQL', 'C++', 'Java',
    'Data Analysis', 'Figma / UI Design', 'Git', 'AWS', 'Machine Learning', 'Excel / Sheets'
  ];

  const popularStrengths = [
    'Analytical Thinking', 'Creative Coding', 'Team Collaboration',
    'Logical Reasoning', 'Visual Aesthetics', 'Communication & Pitching',
    'Research & Learning Fast', 'System Architecture'
  ];

  const popularWorkTypes = [
    'Building & Coding Solutions',
    'Analyzing Data & Finding Patterns',
    'Designing User Experiences',
    'Securing Systems & Networks',
    'Managing Projects & Product Vision',
    'Solving Complex Mathematical Problems',
    'Mentoring & Helping People'
  ];

  const toggleItem = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, item: string) => {
    setList(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  };

  const handleFinish = async () => {
    setSaving(true);
    try {
      await updateProfile({
        education: {
          degree,
          field,
          school,
          gradYear: Number(gradYear),
        },
        interests: selectedInterests,
        subjectsEnjoyed: selectedSubjects,
        currentSkills: selectedSkills,
        strengths: selectedStrengths,
        preferredWorkType: selectedWorkTypes
      });
      router.push('/explorer');
    } catch (err) {
      console.error('Career Discovery Onboarding profile save error:', err);
      router.push('/explorer');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-slate-900 select-none">
      <Navbar />
      <div className="flex-1 max-w-3xl w-full mx-auto py-12 px-4 sm:px-6 relative">

        {/* Progress Stepper Header */}
        <div className="mb-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Futuro AI Career Discovery &bull; Step {step} of 5</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-outfit">
            {step === 1 && 'Academic & Education Profile'}
            {step === 2 && 'What Are You Interested In?'}
            {step === 3 && 'What Are Your Current Skills & Strengths?'}
            {step === 4 && 'What Kind of Work Sounds Exciting?'}
            {step === 5 && 'Synthesizing Your Career Matches'}
          </h1>
          
          <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
            {step === 1 && 'Tell us about your background so Futuro AI can contextualize career options for you.'}
            {step === 2 && 'Select topics and subjects you truly enjoy learning or exploring.'}
            {step === 3 && 'Choose skills you already have or feel comfortable using.'}
            {step === 4 && 'Tell us what type of problem solving or environment fits your personality.'}
            {step === 5 && 'We are generating your personalized career compatibility matrix!'}
          </p>

          {/* Stepper bar */}
          <div className="w-full bg-slate-200 h-2 rounded-full mt-6 overflow-hidden border border-slate-300">
            <div
              className="bg-indigo-600 h-full transition-all duration-300 rounded-full"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Card */}
        <Card variant="glass" className="relative z-10 p-6 sm:p-8 bg-white border-slate-200 shadow-xl rounded-3xl">
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Degree / Qualification</label>
                  <input
                    type="text"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    placeholder="e.g. B.Tech, B.Sc, B.Com, High School"
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Branch / Specialization</label>
                  <input
                    type="text"
                    value={field}
                    onChange={(e) => setField(e.target.value)}
                    placeholder="e.g. Computer Science, Mechanical, Finance"
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">College / School / University</label>
                  <input
                    type="text"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    placeholder="e.g. Mumbai University"
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Expected Graduation Year</label>
                  <input
                    type="number"
                    value={gradYear}
                    onChange={(e) => setGradYear(Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span>What domains are you interested in?</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularInterests.map((interest) => {
                    const selected = selectedInterests.includes(interest);
                    return (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleItem(selectedInterests, setSelectedInterests, interest)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          selected
                            ? 'bg-indigo-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                        }`}
                      >
                        {selected && '✓ '}
                        {interest}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                  <BookOpen className="w-4 h-4 text-indigo-600" />
                  <span>What subjects do you enjoy most?</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularSubjects.map((subj) => {
                    const selected = selectedSubjects.includes(subj);
                    return (
                      <button
                        key={subj}
                        type="button"
                        onClick={() => toggleItem(selectedSubjects, setSelectedSubjects, subj)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          selected
                            ? 'bg-violet-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                        }`}
                      >
                        {selected && '✓ '}
                        {subj}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>What skills do you already have?</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularSkills.map((sk) => {
                    const selected = selectedSkills.includes(sk);
                    return (
                      <button
                        key={sk}
                        type="button"
                        onClick={() => toggleItem(selectedSkills, setSelectedSkills, sk)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          selected
                            ? 'bg-indigo-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                        }`}
                      >
                        {selected && '✓ '}
                        {sk}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>What are your key strengths?</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularStrengths.map((str) => {
                    const selected = selectedStrengths.includes(str);
                    return (
                      <button
                        key={str}
                        type="button"
                        onClick={() => toggleItem(selectedStrengths, setSelectedStrengths, str)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          selected
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                        }`}
                      >
                        {selected && '✓ '}
                        {str}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                <Briefcase className="w-4 h-4 text-indigo-600" />
                <span>What kind of work sounds most interesting to you?</span>
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {popularWorkTypes.map((work) => {
                  const selected = selectedWorkTypes.includes(work);
                  return (
                    <div
                      key={work}
                      onClick={() => toggleItem(selectedWorkTypes, setSelectedWorkTypes, work)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                        selected
                          ? 'bg-indigo-50 border-indigo-500 text-slate-900 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold">{work}</span>
                        {selected && <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4 text-center py-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white mx-auto shadow-lg shadow-indigo-500/20">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-outfit">
                Career Discovery Engine Ready
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Futuro AI has mapped your interests, academic background, current skills, and strengths to find multiple high-match career paths across Technology, AI, Design, Business, and Science.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2 mt-4">
                <div className="flex justify-between">
                  <span className="text-slate-500">Degree & Field:</span>
                  <span className="font-semibold text-slate-900">{degree} ({field})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Selected Interests:</span>
                  <span className="font-semibold text-indigo-600">{selectedInterests.join(', ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Starting Skills:</span>
                  <span className="font-semibold text-emerald-700">{selectedSkills.length} skills added</span>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200">
            {step > 1 ? (
              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={() => setStep(step - 1)}
                leftIcon={<ArrowLeft className="w-3.5 h-3.5" />}
              >
                Back
              </Button>
            ) : (
              <div />
            )}

            {step < 5 ? (
              <Button
                type="button"
                variant="primary"
                size="sm"
                onClick={() => setStep(step + 1)}
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Continue
              </Button>
            ) : (
              <Button
                type="button"
                variant="primary"
                size="md"
                onClick={handleFinish}
                loading={saving}
                rightIcon={<Sparkles className="w-4 h-4" />}
              >
                Discover My Career Opportunities →
              </Button>
            )}
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
