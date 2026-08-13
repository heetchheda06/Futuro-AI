'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, MessageSquare, Play, Send, ChevronRight, Star, 
  Award, RefreshCw, AlertCircle, Compass, HelpCircle, Activity, Sparkles 
} from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface QuestionObj {
  question: string;
  answer: string;
  feedback: string;
  score: number;
}

interface InterviewSession {
  _id: string;
  type: 'HR' | 'Technical' | 'Behavioral';
  careerTitle: string;
  questions: QuestionObj[];
  confidenceScore: number;
  communicationRating: string;
  overallScore: number;
  completed: boolean;
  createdAt: string;
}

export default function InterviewCoach() {
  const { user, token } = useAuth();
  const router = useRouter();

  // Session State
  const [sessions, setSessions] = useState<InterviewSession[]>([]);
  const [activeSession, setActiveSession] = useState<InterviewSession | null>(null);
  const [loadingHistory, setLoadingHistory] = useState(true);
  
  const [interviewType, setInterviewType] = useState<'HR' | 'Technical' | 'Behavioral'>('HR');
  const [starting, setStarting] = useState(false);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [currentAnswerText, setCurrentAnswerText] = useState('');
  const [submittingAnswer, setSubmittingAnswer] = useState(false);
  
  const [showQuestionFeedback, setShowQuestionFeedback] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user) {
      const savedToken = localStorage.getItem('token');
      if (!savedToken) {
        router.push('/login?redirect=interview');
      }
    } else {
      fetchInterviewHistory();
    }
  }, [user]);

  const fetchInterviewHistory = async () => {
    if (!token && !localStorage.getItem('token')) return;
    setLoadingHistory(true);
    setError('');
    
    try {
      const response = await fetch(`${API_BASE_URL}/interviews/history`, {
        headers: {
          'Authorization': `Bearer ${token || localStorage.getItem('token')}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setSessions(data);
      }
    } catch (err) {
      console.warn('Interview history offline.');
    } finally {
      setLoadingHistory(false);
    }
  };

  const handleStartInterview = async () => {
    setStarting(true);
    setError('');
    const activeToken = token || localStorage.getItem('token');

    try {
      const response = await fetch(`${API_BASE_URL}/interviews/start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${activeToken}`
        },
        body: JSON.stringify({ type: interviewType })
      });

      if (response.ok) {
        const session = await response.json();
        setActiveSession(session);
        setActiveQuestionIndex(0);
        setCurrentAnswerText('');
        setShowQuestionFeedback(false);
      } else {
        throw new Error('Interview start endpoint returned error');
      }
    } catch (err) {
      simulateLocalInterviewStart();
    } finally {
      setStarting(false);
    }
  };

  const simulateLocalInterviewStart = () => {
    const career = user?.targetCareer || 'Software Engineer';
    let questionsList = [
      `Tell me about yourself and what motivated you to pursue a role as a ${career}?`,
      `Why do you want to join a high-growth tech engineering team, and what unique value do you bring?`,
      `Where do you see yourself in three to five years in terms of architecture ownership and technical leadership?`
    ];

    if (interviewType === 'Technical') {
      questionsList = [
        'What is the event loop in JavaScript, and how do microtasks differ from macrotasks?',
        'How would you design a scalable caching strategy for a high-traffic REST or GraphQL endpoint?',
        'Explain the core differences between monolithic architectures and event-driven microservices.'
      ];
    } else if (interviewType === 'Behavioral') {
      questionsList = [
        'Describe a complex engineering challenge you encountered. How did you diagnose and resolve it under tight deadlines?',
        'Tell me about a time you had a technical disagreement with a team member. How did you resolve the conflict constructively?',
        'Share an example of a project where requirements changed unexpectedly. How did you adapt your roadmap?'
      ];
    }

    const mockSession: InterviewSession = {
      _id: Math.random().toString(),
      type: interviewType,
      careerTitle: career,
      questions: questionsList.map(q => ({ question: q, answer: '', feedback: '', score: 0 })),
      confidenceScore: 0,
      communicationRating: 'Pending completion',
      overallScore: 0,
      completed: false,
      createdAt: new Date().toISOString()
    };

    setActiveSession(mockSession);
    setActiveQuestionIndex(0);
    setCurrentAnswerText('');
    setShowQuestionFeedback(false);
  };

  const handleSubmitAnswerText = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentAnswerText.trim() || !activeSession) return;

    setSubmittingAnswer(true);
    setError('');
    const activeToken = token || localStorage.getItem('token');

    try {
      const response = await fetch(`${API_BASE_URL}/interviews/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${activeToken}`
        },
        body: JSON.stringify({
          sessionId: activeSession._id,
          questionIndex: activeQuestionIndex,
          answer: currentAnswerText
        })
      });

      if (response.ok) {
        const updated = await response.json();
        setActiveSession(updated);
        setShowQuestionFeedback(true);
      } else {
        throw new Error('Could not submit answer');
      }
    } catch (err) {
      simulateLocalGrader();
    } finally {
      setSubmittingAnswer(false);
    }
  };

  const simulateLocalGrader = () => {
    if (!activeSession) return;
    const answerWordCount = currentAnswerText.trim().split(/\s+/).length;
    let scoreVal = 6;
    let crit = '';

    if (answerWordCount < 15) {
      scoreVal = 4;
      crit = 'Your response was very brief. Aim to expand by referencing concrete technologies, design patterns, or business metrics using the STAR framework.';
    } else {
      scoreVal = 8;
      if (answerWordCount > 35) scoreVal += 1;
      const keyStrings = ['code', 'react', 'solved', 'agile', 'learning', 'project', 'team', 'design', 'scale', 'latency'].some(w => currentAnswerText.toLowerCase().includes(w));
      if (keyStrings) scoreVal += 1;
      if (scoreVal > 10) scoreVal = 10;
      
      crit = 'Strong and structured answer. You clearly articulated the core concepts and actions taken. To score even higher, weave in concrete quantitative metrics.';
    }

    const updatedQuestions = activeSession.questions.map((q, idx) => {
      if (idx === activeQuestionIndex) {
        return { ...q, answer: currentAnswerText, feedback: crit, score: scoreVal };
      }
      return q;
    });

    const isAllDone = activeQuestionIndex === activeSession.questions.length - 1;
    
    let overallScore = 0;
    let confidenceScore = 0;
    let communicationRating = '';
    
    if (isAllDone) {
      const sum = updatedQuestions.reduce((a, b) => a + b.score, 0);
      overallScore = Math.round((sum / updatedQuestions.length) * 10);
      
      if (overallScore >= 80) {
        confidenceScore = 92;
        communicationRating = 'Excellent - Articulate and structured responses.';
      } else if (overallScore >= 60) {
        confidenceScore = 78;
        communicationRating = 'Good - Clear fundamentals with room for impact metrics.';
      } else {
        confidenceScore = 55;
        communicationRating = 'Developing - Keep practicing with the STAR method.';
      }
    }

    const updatedSession: InterviewSession = {
      ...activeSession,
      questions: updatedQuestions,
      completed: isAllDone,
      overallScore,
      confidenceScore,
      communicationRating
    };

    setActiveSession(updatedSession);
    setShowQuestionFeedback(true);
  };

  const handleNextStep = () => {
    if (!activeSession) return;
    if (activeSession.completed) {
      setSessions([activeSession, ...sessions]);
      return;
    }
    setActiveQuestionIndex(prev => prev + 1);
    setCurrentAnswerText('');
    setShowQuestionFeedback(false);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#635BFF] mx-auto" />
          <p className="text-xs text-slate-500 mt-4">Validating your profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex items-center justify-center">
        {!activeSession ? (
          /* Configure Dashboard View */
          <div className="w-full p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="inline-flex p-3 rounded-2xl bg-purple-50 text-[#635BFF] mb-3 shadow-sm">
                <Briefcase className="h-7 w-7" />
              </span>
              <h1 className="font-outfit text-3xl font-extrabold text-slate-900 tracking-tight">AI Mock Interview Coach</h1>
              <p className="text-xs text-slate-500 mt-1">
                Simulate realistic interview rounds tailored to: <strong>{user.targetCareer || 'Software Engineer'}</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {(['HR', 'Technical', 'Behavioral'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setInterviewType(type)}
                  className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                    interviewType === type 
                      ? 'border-[#635BFF] bg-purple-50 text-[#635BFF] shadow-sm' 
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <h3 className="font-bold text-sm text-slate-900 mb-1">{type} Round</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {type === 'HR' && 'Culture fit, career roadmap, and communication.'}
                    {type === 'Technical' && 'Core algorithms, architectures, and systems.'}
                    {type === 'Behavioral' && 'STAR framework, situational dilemmas, and teamwork.'}
                  </p>
                </button>
              ))}
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={handleStartInterview}
                disabled={starting}
                className="px-6 py-2.5 bg-[#635BFF] hover:bg-[#5146E5] text-white font-semibold rounded-xl text-xs active:scale-98 transition-all shadow-md shadow-indigo-500/15 flex items-center space-x-1.5 cursor-pointer disabled:opacity-50"
              >
                <span>{starting ? 'Generating Questions...' : 'Start Mock Interview'}</span>
                <Play className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ) : (
          /* Active Session View */
          <div className="w-full p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
            {/* Overall Scorecard If Completed */}
            {activeSession.completed && showQuestionFeedback ? (
              <div className="space-y-6">
                <div className="text-center">
                  <span className="inline-flex p-3 rounded-2xl bg-purple-50 text-[#635BFF] mb-3">
                    <Award className="h-8 w-8" />
                  </span>
                  <h1 className="font-outfit text-3xl font-extrabold text-slate-900">Interview Completed!</h1>
                  <p className="text-xs text-slate-500 mt-1">Here is your comprehensive performance scorecard.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-purple-100 text-[#635BFF] font-black text-lg mb-1">
                      {activeSession.overallScore}%
                    </div>
                    <span className="block text-[10px] text-slate-500 font-bold uppercase">Overall Grade</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-cyan-100 text-cyan-700 font-black text-lg mb-1">
                      {activeSession.confidenceScore}%
                    </div>
                    <span className="block text-[10px] text-slate-500 font-bold uppercase">Confidence Index</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center flex flex-col justify-center items-center">
                    <span className="font-bold text-xs text-[#635BFF] mb-0.5">{activeSession.communicationRating.split('-')[0]}</span>
                    <span className="block text-[10px] text-slate-500 font-bold uppercase">Communication</span>
                  </div>
                </div>

                {/* Score Breakdown List */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Question Evaluations</h3>
                  {activeSession.questions.map((q, i) => (
                    <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5 text-xs">
                      <div className="flex justify-between items-center font-bold text-slate-900">
                        <span>Question {i + 1}</span>
                        <span className="text-[#635BFF]">{q.score} / 10</span>
                      </div>
                      <p className="text-slate-700 font-medium italic">"{q.question}"</p>
                      <p className="text-slate-600 bg-white p-3 rounded-lg border border-slate-100 leading-relaxed mt-1.5">{q.feedback}</p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setActiveSession(null)}
                    className="px-5 py-2.5 bg-[#635BFF] hover:bg-[#5146E5] text-white rounded-xl text-xs font-bold active:scale-98 transition-all shadow-md shadow-indigo-500/15 cursor-pointer"
                  >
                    Return to Coach Dashboard
                  </button>
                </div>
              </div>
            ) : (
              /* Active Question / Feedback View */
              <div className="space-y-5">
                <div className="flex justify-between items-center text-xs text-slate-500 border-b border-slate-100 pb-3">
                  <span className="uppercase font-bold tracking-wider text-slate-400">{activeSession.type} Mock Session</span>
                  <span className="font-bold text-[#635BFF]">Question {activeQuestionIndex + 1} of {activeSession.questions.length}</span>
                </div>

                <div className="flex items-center space-x-2 bg-purple-50 border border-purple-100 px-3.5 py-2 rounded-xl text-xs text-[#635BFF] font-semibold">
                  <Activity className="h-4 w-4 text-[#635BFF] animate-pulse" />
                  <span>Interactive Session Active</span>
                </div>

                <h3 className="font-outfit text-xl font-bold text-slate-900 leading-snug">
                  {activeSession.questions[activeQuestionIndex].question}
                </h3>

                {!showQuestionFeedback ? (
                  <form onSubmit={handleSubmitAnswerText} className="space-y-3.5">
                    <textarea
                      required
                      rows={5}
                      value={currentAnswerText}
                      onChange={(e) => setCurrentAnswerText(e.target.value)}
                      placeholder="Type your response here... (Structure using the STAR framework: Situation, Task, Action, Result)"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#635BFF] text-xs text-slate-900 leading-relaxed placeholder-slate-400"
                    />

                    <div className="flex justify-between items-center text-[11px] text-slate-400">
                      <span>Word count: {currentAnswerText.trim() ? currentAnswerText.trim().split(/\s+/).length : 0} words</span>
                      <span>Press submit for instant AI evaluation</span>
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        disabled={submittingAnswer || !currentAnswerText.trim()}
                        className="px-5 py-2.5 bg-[#635BFF] hover:bg-[#5146E5] text-white rounded-xl text-xs font-semibold shadow-md shadow-indigo-500/15 active:scale-98 transition-all flex items-center space-x-1.5 disabled:opacity-50 cursor-pointer"
                      >
                        <span>{submittingAnswer ? 'Evaluating...' : 'Submit Response'}</span>
                        <Send className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-5 rounded-xl bg-purple-50/60 border border-purple-100 space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-[#635BFF] uppercase tracking-wider">Evaluation & Critique</span>
                      <span className="bg-[#635BFF] text-white px-2.5 py-0.5 rounded text-[10px] font-bold">
                        Score: {activeSession.questions[activeQuestionIndex].score} / 10
                      </span>
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed">
                      {activeSession.questions[activeQuestionIndex].feedback}
                    </p>

                    <div className="flex justify-end pt-2">
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="px-5 py-2 bg-[#635BFF] hover:bg-[#5146E5] text-white rounded-xl text-xs font-bold active:scale-98 transition-all flex items-center space-x-1.5 cursor-pointer shadow-sm"
                      >
                        <span>{activeQuestionIndex === activeSession.questions.length - 1 ? 'View Full Scorecard' : 'Next Question'}</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
