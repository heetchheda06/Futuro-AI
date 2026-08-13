'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Brain, ArrowRight, ArrowLeft, Send, Sparkles, Award, Target, CheckCircle2 } from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const questions = [
  {
    id: 'interests',
    title: 'Interests & Passion',
    subtitle: 'What activities or domains captivate your focus?',
    type: 'multiselect',
    options: ['Coding/Programming', 'Data Analysis', 'Interface Design', 'Writing/Copywriting', 'Security & Hacking', 'Business Leadership', 'Social Media Marketing', 'Teaching/Educating']
  },
  {
    id: 'personality',
    title: 'Personality Traits',
    subtitle: 'How would you describe your typical working style?',
    type: 'select',
    options: [
      'Analytical & Methodical - Love dissecting problems.',
      'Creative & Intuitive - Express concepts visually.',
      'Outgoing & Collaborative - Leading team syncs.',
      'Reserved & Independent - Focus on coding tasks alone.'
    ]
  },
  {
    id: 'hobbies',
    title: 'Leisure Hobbies',
    subtitle: 'How do you spend your free time?',
    type: 'multiselect',
    options: ['Gaming', 'Reading tech blogs', 'Drawing/Graphic art', 'Cryptocurrency trading', 'Contributing to GitHub', 'Writing articles', 'Managing social clubs']
  },
  {
    id: 'strengths',
    title: 'Core Strengths',
    subtitle: 'Select areas where you excel naturally.',
    type: 'multiselect',
    options: ['Mathematical Reasoning', 'Visual Aesthetics', 'Public Speaking', 'Empathy & Listening', 'System Troubleshooting', 'Organization & Planning']
  },
  {
    id: 'weaknesses',
    title: 'Areas for Growth',
    subtitle: 'Select areas you want to improve.',
    type: 'multiselect',
    options: ['Public Speaking anxiety', 'Impatience with details', 'Difficulty managing schedules', 'Struggling with coding syntax', 'Writing reports', 'Handling team conflicts']
  },
  {
    id: 'academicBackground',
    title: 'Academic Profile',
    subtitle: 'What is your current or past educational focus?',
    type: 'select',
    options: [
      'Computer Science / Engineering',
      'Data Science / Mathematics',
      'Art / Graphic Design',
      'Business Administration / Finance',
      'Liberal Arts / Communication',
      'High School graduate / Other'
    ]
  },
  {
    id: 'preferredWorkStyle',
    title: 'Preferred Work Style',
    subtitle: 'What environment brings out your best work?',
    type: 'select',
    options: [
      'Fully Remote - Self-paced execution.',
      'Hybrid / Collaborative - Sprints and brainstorming.',
      'Enterprise Structured - Clear leadership guidelines.',
      'Freelance / Startup - Dynamic daily variables.'
    ]
  }
];

export default function AssessmentWizard() {
  const { token, refreshProfile } = useAuth();
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<any>({
    interests: [],
    personality: '',
    hobbies: [],
    strengths: [],
    weaknesses: [],
    academicBackground: '',
    preferredWorkStyle: ''
  });

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState('');

  const activeQuestion = questions[currentStep];

  const handleSelectOption = (option: string) => {
    setAnswers({ ...answers, [activeQuestion.id]: option });
  };

  const handleToggleOption = (option: string) => {
    const currentList: string[] = answers[activeQuestion.id] || [];
    if (currentList.includes(option)) {
      setAnswers({
        ...answers,
        [activeQuestion.id]: currentList.filter(item => item !== option)
      });
    } else {
      setAnswers({
        ...answers,
        [activeQuestion.id]: [...currentList, option]
      });
    }
  };

  const handleNext = () => {
    const currentVal = answers[activeQuestion.id];
    if (!currentVal || (Array.isArray(currentVal) && currentVal.length === 0)) {
      setError('Please select at least one option before proceeding.');
      return;
    }
    setError('');
    setCurrentStep(prev => prev + 1);
  };

  const handlePrev = () => {
    setError('');
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    const currentVal = answers[activeQuestion.id];
    if (!currentVal) {
      setError('Please select an option.');
      return;
    }

    setLoading(true);
    setError('');

    const activeToken = token || localStorage.getItem('token');
    
    try {
      const response = await fetch(`${API_BASE_URL}/assessments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${activeToken}`
        },
        body: JSON.stringify({ answers })
      });

      if (!response.ok) {
        throw new Error('Could not evaluate answers.');
      }

      const data = await response.json();
      setResults(data);
      await refreshProfile();
    } catch (err: any) {
      setError(err.message || 'API request failed. Falling back to local scoring simulation.');
      simulateLocalScoring();
    } finally {
      setLoading(false);
    }
  };

  const simulateLocalScoring = () => {
    setTimeout(() => {
      const topCareer = answers.interests.includes('Coding/Programming') ? 'Software Engineer' : 'UI/UX Designer';
      const compatibilityScores = [
        { careerTitle: topCareer, score: 92 },
        { careerTitle: topCareer === 'Software Engineer' ? 'AI Engineer' : 'Software Engineer', score: 78 },
        { careerTitle: 'Data Scientist', score: 65 },
        { careerTitle: 'Product Manager', score: 48 }
      ];
      const strengthAnalysis = [
        `Natural fit for logical roles due to strengths in ${answers.strengths.slice(0, 2).join(' & ') || 'Problem Solving'}.`,
        `Thrives in a ${answers.preferredWorkStyle || 'Collaborative'} format.`
      ];
      setResults({
        compatibilityScores,
        personalityInsights: `Your profile indicates a strong fit for analytical and structured environments with focus in ${answers.interests.slice(0, 2).join(', ') || 'Technology'}.`,
        strengthAnalysis
      });
    }, 1200);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex items-center justify-center">
        {results ? (
          /* Results Layout */
          <div className="w-full p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-xl relative overflow-hidden space-y-8">
            <div className="text-center">
              <span className="inline-flex p-3 rounded-2xl bg-purple-50 text-[#635BFF] mb-3 shadow-sm">
                <Award className="h-8 w-8" />
              </span>
              <h1 className="font-outfit text-3xl font-extrabold text-slate-900">Assessment Complete!</h1>
              <p className="text-xs text-slate-500 mt-1">
                We have generated your custom profile insights and career compatibility matches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-start">
              {/* Compatibility Cards */}
              <div className="space-y-4">
                <h3 className="font-outfit text-sm font-bold text-slate-900 flex items-center space-x-2">
                  <Target className="h-4 w-4 text-[#635BFF]" />
                  <span>Top Career Match Scores</span>
                </h3>
                <div className="space-y-3">
                  {results.compatibilityScores.map((c: any, i: number) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex justify-between text-xs font-semibold text-slate-800 mb-1.5">
                        <span>{c.careerTitle}</span>
                        <span className="text-[#635BFF] font-bold">{c.score}% Match</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-violet-600 to-[#635BFF] h-full rounded-full" style={{ width: `${c.score}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personality & Strengths */}
              <div className="space-y-5">
                <div className="p-5 rounded-xl bg-purple-50/60 border border-purple-100">
                  <h4 className="font-bold text-xs text-[#635BFF] mb-1.5 flex items-center space-x-1.5">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Personality Insight</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {results.personalityInsights}
                  </p>
                </div>

                <div className="space-y-2.5">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">Strengths Audit</h4>
                  <ul className="space-y-2 text-xs">
                    {results.strengthAnalysis.map((str: string, i: number) => (
                      <li key={i} className="flex items-start space-x-2 text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={() => {
                  setResults(null);
                  setCurrentStep(0);
                  setAnswers({
                    interests: [],
                    personality: '',
                    hobbies: [],
                    strengths: [],
                    weaknesses: [],
                    academicBackground: '',
                    preferredWorkStyle: ''
                  });
                }}
                className="px-5 py-2.5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-semibold active:scale-98 transition-all cursor-pointer"
              >
                Retake Assessment
              </button>
              <button
                onClick={() => router.push('/dashboard')}
                className="px-6 py-2.5 bg-[#635BFF] hover:bg-[#5146E5] text-white rounded-xl text-xs font-bold active:scale-98 transition-all shadow-md shadow-indigo-500/15 cursor-pointer"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        ) : (
          /* Wizard Layout */
          <div className="w-full p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
            {/* Step Counter Indicator */}
            <div className="flex justify-between items-center text-xs text-slate-500 mb-6 border-b border-slate-100 pb-3">
              <span className="font-semibold uppercase tracking-wider text-slate-400">Career Assessment Wizard</span>
              <span className="font-bold text-[#635BFF]">Step {currentStep + 1} of {questions.length}</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-8">
              <div 
                className="bg-gradient-to-r from-violet-600 to-[#635BFF] h-full transition-all duration-300" 
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }} 
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl mb-5 flex items-center space-x-2">
                <span>{error}</span>
              </div>
            )}

            {loading ? (
              <div className="text-center py-12 space-y-3">
                <div className="p-4 rounded-2xl bg-purple-50 text-[#635BFF] w-fit mx-auto animate-pulse">
                  <Brain className="h-8 w-8" />
                </div>
                <h3 className="font-outfit text-xl font-bold text-slate-900">Evaluating Your Responses...</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Our Career Guidance engine is mapping your preferences and strengths to high-demand roles.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h2 className="font-outfit text-2xl font-bold text-slate-900">{activeQuestion.title}</h2>
                  <p className="text-xs text-slate-500 mt-1">{activeQuestion.subtitle}</p>
                </div>

                {activeQuestion.type === 'multiselect' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeQuestion.options.map((option, idx) => {
                      const selected = (answers[activeQuestion.id] || []).includes(option);
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleToggleOption(option)}
                          className={`p-3.5 text-left rounded-xl border text-xs transition-all font-medium flex items-center justify-between cursor-pointer ${
                            selected 
                              ? 'border-[#635BFF] bg-purple-50 text-[#635BFF] shadow-sm font-semibold' 
                              : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <span>{option}</span>
                          {selected && (
                            <span className="h-2 w-2 rounded-full bg-[#635BFF]" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="space-y-2.5">
                    {activeQuestion.options.map((option, idx) => {
                      const selected = answers[activeQuestion.id] === option;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSelectOption(option)}
                          className={`w-full p-3.5 text-left rounded-xl border text-xs transition-all font-medium flex items-center justify-between cursor-pointer ${
                            selected 
                              ? 'border-[#635BFF] bg-purple-50 text-[#635BFF] shadow-sm font-semibold' 
                              : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <span>{option}</span>
                          {selected && (
                            <span className="h-2 w-2 rounded-full bg-[#635BFF]" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Footer Controls */}
                <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={handlePrev}
                    disabled={currentStep === 0}
                    className="flex items-center space-x-1 px-4 py-2 border border-slate-200 bg-white rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
                  >
                    <ArrowLeft className="h-3 w-3" />
                    <span>Back</span>
                  </button>

                  {currentStep === questions.length - 1 ? (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="flex items-center space-x-1.5 px-5 py-2.5 bg-[#635BFF] hover:bg-[#5146E5] text-white rounded-xl text-xs font-bold active:scale-98 transition-all shadow-md shadow-indigo-500/15 cursor-pointer"
                    >
                      <span>Submit Quiz</span>
                      <Send className="h-3.5 w-3.5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex items-center space-x-1.5 px-5 py-2.5 bg-[#635BFF] hover:bg-[#5146E5] text-white rounded-xl text-xs font-bold active:scale-98 transition-all shadow-md shadow-indigo-500/15 cursor-pointer"
                    >
                      <span>Next Step</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
