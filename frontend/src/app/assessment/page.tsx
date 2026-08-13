'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Brain, ArrowRight, ArrowLeft, Send, Sparkles, Award, Target, CheckCircle2, Compass, Layers, UserCheck } from 'lucide-react';
import { Button } from '../../components/ui/Button';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const questions = [
  {
    id: 'problemTypes',
    title: 'What type of problems do you enjoy solving?',
    subtitle: 'Choose the core challenges that make you lose track of time.',
    type: 'multiselect',
    options: [
      'Technical & Software Logic (Building apps, debugs, APIs)',
      'Data & Analytics (Finding hidden patterns in numbers)',
      'Human & Communication (Helping, mentoring, or negotiating)',
      'Visual & Design (Crafting aesthetics, layouts, and UX)',
      'Physical & Hardware Systems (Robotics, circuits, structural build)',
      'Strategic & Business Growth (Pitches, market models, startups)'
    ]
  },
  {
    id: 'primaryAction',
    title: 'Would you rather build, analyze, help, manage, or create?',
    subtitle: 'Select the primary verbs that best describe your ideal daily work.',
    type: 'select',
    options: [
      'Build something real (Write code, develop systems, craft hardware)',
      'Analyze & Investigate (Evaluate data, find insights, audit security)',
      'Help & Educate (Teach students, advise clients, support users)',
      'Manage & Lead (Guide teams, manage product roadmaps, start companies)',
      'Create & Design (Express visual branding, design user interfaces)'
    ]
  },
  {
    id: 'activityInterest',
    title: 'Which activity sounds most exciting to you?',
    subtitle: 'Pick the scenario that feels most fulfilling.',
    type: 'select',
    options: [
      'Training an AI model to automate repetitive task workflows',
      'Designing an interactive mobile app interface that users love',
      'Investigating & preventing a simulated cyber hack breach',
      'Pitching a novel tech product idea to investors and customers',
      'Building an autonomous robot rover for real-world exploration',
      'Analyzing financial market valuation models for investment'
    ]
  },
  {
    id: 'favoriteSubjects',
    title: 'Which academic subjects do you enjoy most?',
    subtitle: 'Select all subjects you naturally feel drawn towards.',
    type: 'multiselect',
    options: [
      'Computer Science & Programming',
      'Mathematics & Logic',
      'Statistics & Data Analysis',
      'Design, Visual Arts & Media',
      'Economics, Finance & Business',
      'Physics & Engineering Mechanics',
      'Psychology & Human Behavior',
      'Biotechnology & Medical Sciences'
    ]
  },
  {
    id: 'workSystemPreference',
    title: 'Do you prefer working with people, information, technology, design, or physical systems?',
    subtitle: 'Where is your primary focus best aligned?',
    type: 'select',
    options: [
      'Technology & Software Systems',
      'Information, Data & Statistics',
      'Design & Visual Aesthetics',
      'People, Teams & Leadership',
      'Physical Systems & Engineering Hardware'
    ]
  }
];

export default function AssessmentWizard() {
  const { user, token, updateProfile, refreshProfile } = useAuth();
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<any>({
    problemTypes: [],
    primaryAction: '',
    activityInterest: '',
    favoriteSubjects: [],
    workSystemPreference: ''
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

    // Generate dynamic matches based on answers
    setTimeout(async () => {
      let matches = [
        { title: 'AI Engineer', percent: 92, reason: 'Strong affinity for software logic, AI automation, and mathematical foundations.' },
        { title: 'Data Scientist', percent: 88, reason: 'High alignment with analytical investigation and statistical data modeling.' },
        { title: 'Full Stack Software Engineer', percent: 85, reason: 'Matches preference for building scalable web apps end-to-end.' },
        { title: 'Cybersecurity Analyst', percent: 79, reason: 'Fits investigative mindset and threat prevention interest.' },
        { title: 'Product Manager', percent: 74, reason: 'High match for leading team roadmaps and product strategy.' },
        { title: 'UI/UX Designer', percent: 70, reason: 'Good alignment with visual design and user experience crafting.' }
      ];

      if (answers.primaryAction.includes('Create & Design')) {
        matches.unshift({ title: 'UI/UX Designer', percent: 94, reason: 'Exceptional match for visual design, user experience crafting, and digital mockups.' });
      } else if (answers.primaryAction.includes('Analyze')) {
        matches.unshift({ title: 'Data Scientist', percent: 93, reason: 'Exceptional match for quantitative investigation and predictive modeling.' });
      }

      setResults({
        matches,
        insights: `Based on your responses, your natural work style thrives when working with ${answers.workSystemPreference || 'Technology & Data'}. You show high potential in roles that combine ${answers.problemTypes[0] || 'Software Logic'} with active problem solving.`
      });

      // Update user profile with assessment results
      await updateProfile({
        assessmentResults: matches.map(m => ({ careerTitle: m.title, score: m.percent, reason: m.reason })),
        interests: Array.from(new Set([...(user?.interests || []), ...(answers.favoriteSubjects || [])]))
      });

      setLoading(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-slate-900 select-none">
      <Navbar />

      <main className="flex-grow max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex items-center justify-center">
        {results ? (
          /* Results Screen */
          <div className="w-full p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden space-y-8">
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mx-auto mb-3 shadow-xs">
                <Sparkles className="h-7 w-7" />
              </div>
              <h1 className="font-outfit text-3xl font-extrabold text-slate-900">YOUR CAREER MATCHES</h1>
              <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                Futuro AI has evaluated your problem-solving style, preferred activities, and favorite subjects to generate your recommended career possibilities.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-xs text-slate-700 leading-relaxed">
                <span className="font-bold text-indigo-900 block mb-1">AI Intelligence Summary</span>
                {results.insights}
              </div>

              <div className="space-y-3">
                {results.matches.map((c: any, i: number) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-900">
                      <span className="text-sm font-outfit">{c.title}</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-extrabold border border-emerald-200">
                        {c.percent}% Match
                      </span>
                    </div>
                    
                    <p className="text-[11px] text-slate-500">{c.reason}</p>

                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${c.percent}%` }} />
                    </div>

                    <div className="flex items-center justify-end space-x-2 pt-2 text-[11px]">
                      <Link href="/explorer" className="font-semibold text-indigo-600 hover:text-indigo-700 flex items-center space-x-1">
                        <span>Explore Career</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-2.5 justify-end">
              <button
                onClick={() => {
                  setResults(null);
                  setCurrentStep(0);
                  setAnswers({
                    problemTypes: [],
                    primaryAction: '',
                    activityInterest: '',
                    favoriteSubjects: [],
                    workSystemPreference: ''
                  });
                }}
                className="px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-semibold transition-all cursor-pointer"
              >
                Try Another Path
              </button>

              <Link href="/explorer">
                <Button variant="secondary" size="sm">
                  Compare Careers
                </Button>
              </Link>

              <Link href="/dashboard">
                <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Explore Recommended Dashboard
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          /* Interactive Assessment Wizard */
          <div className="w-full p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
            {/* Step Counter Indicator */}
            <div className="flex justify-between items-center text-xs text-slate-500 mb-6 border-b border-slate-100 pb-3">
              <span className="font-bold uppercase tracking-wider text-slate-400">Futuro Career Discovery Assessment</span>
              <span className="font-bold text-indigo-600">Question {currentStep + 1} of {questions.length}</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-8 border border-slate-200">
              <div 
                className="bg-indigo-600 h-full transition-all duration-300 rounded-full" 
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }} 
              />
            </div>

            {error && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl mb-5 flex items-center space-x-2">
                <span>{error}</span>
              </div>
            )}

            {loading ? (
              <div className="text-center py-12 space-y-3">
                <div className="p-4 rounded-2xl bg-indigo-50 text-indigo-600 w-fit mx-auto animate-pulse">
                  <Brain className="h-8 w-8" />
                </div>
                <h3 className="font-outfit text-xl font-bold text-slate-900">Evaluating Your Career Possibilities...</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Futuro AI is cross-referencing your preferences with market opportunities across Technology, AI, Design, and Management.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h2 className="font-outfit text-xl sm:text-2xl font-bold text-slate-900">{activeQuestion.title}</h2>
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
                          className={`p-3.5 text-left rounded-2xl border text-xs transition-all font-semibold flex items-center justify-between cursor-pointer ${
                            selected 
                              ? 'border-indigo-500 bg-indigo-50 text-indigo-900 shadow-xs' 
                              : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <span>{option}</span>
                          {selected && (
                            <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0 ml-2" />
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
                          className={`w-full p-3.5 text-left rounded-2xl border text-xs transition-all font-semibold flex items-center justify-between cursor-pointer ${
                            selected 
                              ? 'border-indigo-500 bg-indigo-50 text-indigo-900 shadow-xs' 
                              : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <span>{option}</span>
                          {selected && (
                            <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0 ml-2" />
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
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span>Back</span>
                  </button>

                  {currentStep === questions.length - 1 ? (
                    <Button
                      type="button"
                      variant="primary"
                      size="sm"
                      onClick={handleSubmit}
                      rightIcon={<Sparkles className="h-3.5 w-3.5" />}
                    >
                      Generate My Career Matches
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      variant="primary"
                      size="sm"
                      onClick={handleNext}
                      rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
                    >
                      Next Question
                    </Button>
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
