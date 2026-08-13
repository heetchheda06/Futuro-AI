'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Rocket, Briefcase, Award, TrendingUp, Sparkles, AlertCircle, Play,
  Send, RefreshCw, Star, ShieldAlert, Users, Brain, HeartPulse, HardHat, ChevronRight, MessageSquare, BookOpen, Activity, ArrowRight, User
} from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface Stats {
  technical: number;
  leadership: number;
  stress: number;
  network: number;
}

interface GameState {
  career: string;
  level: number;
  title: string;
  xp: number;
  salary: number;
  stats: Stats;
  day: number;
  history: string[];
}

interface Choice {
  id: string;
  text: string;
  consequence: string;
  statsImpact: Stats & { xp: number; salary: number };
}

interface GameEvent {
  isInterview: boolean;
  scenario?: string;
  choices?: Choice[];
  question?: string;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export default function CareerSimulator() {
  const { user, token } = useAuth();
  const router = useRouter();

  // Onboarding / Setup Game States
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // Game Play States
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [currentEvent, setCurrentEvent] = useState<GameEvent | null>(null);
  const [feedbackText, setFeedbackText] = useState<string>('');
  const [interviewAnswer, setInterviewAnswer] = useState<string>('');
  const [lastActionConsequence, setLastActionConsequence] = useState<string>('');
  
  // AI Mentor Chat States
  const [showMentor, setShowMentor] = useState<boolean>(false);
  const [mentorInput, setMentorInput] = useState<string>('');
  const [mentorChat, setMentorChat] = useState<ChatMessage[]>([]);
  const [mentorLoading, setMentorLoading] = useState<boolean>(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (!user && !savedToken) {
      router.push('/login?redirect=career-simulator');
    }
  }, [user]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [mentorChat]);

  const handleStartGame = async (careerName: string) => {
    setLoading(true);
    setFeedbackText('');
    setLastActionConsequence('');
    
    const fallbackState = {
      career: careerName,
      level: 1,
      title: careerName === 'Software Engineer' ? 'Junior Software Engineer' 
            : careerName === 'Doctor' ? 'Medical Resident'
            : careerName === 'Entrepreneur' ? 'Founder (Seed Stage)'
            : 'UI/UX Designer',
      xp: 0,
      salary: careerName === 'Software Engineer' ? 65000 
            : careerName === 'Doctor' ? 55000
            : careerName === 'Entrepreneur' ? 40000
            : 58000,
      stats: {
        technical: careerName === 'Software Engineer' ? 25 : careerName === 'Doctor' ? 30 : careerName === 'Entrepreneur' ? 15 : 20,
        leadership: careerName === 'Software Engineer' ? 10 : careerName === 'Doctor' ? 10 : careerName === 'Entrepreneur' ? 25 : 10,
        stress: careerName === 'Software Engineer' ? 15 : careerName === 'Doctor' ? 25 : careerName === 'Entrepreneur' ? 20 : 12,
        network: careerName === 'Software Engineer' ? 12 : careerName === 'Doctor' ? 10 : careerName === 'Entrepreneur' ? 20 : 15
      },
      day: 1,
      history: []
    };

    try {
      const response = await fetch(`${API_BASE_URL}/simulator/start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token || localStorage.getItem('token')}`
        },
        body: JSON.stringify({ career: careerName })
      });

      if (response.ok) {
        const data = await response.json();
        setGameState(data.state);
        setCurrentEvent(data.event);
        setIsPlaying(true);
        setMentorChat([
          { role: 'assistant', content: `Welcome to your simulator as a ${data.state.title}! I am your AI Mentor. Ask me any questions about building skills, getting promoted, or balancing your workload.` }
        ]);
      } else {
        throw new Error('Fallback to client side engine');
      }
    } catch (err) {
      setGameState(fallbackState);
      setCurrentEvent(generateClientEvent(careerName, 1, fallbackState.stats));
      setIsPlaying(true);
      setMentorChat([
        { role: 'assistant', content: `Welcome to your simulator as a ${fallbackState.title}! I am your AI Mentor. I will guide you through choices, promotions, and stats.` }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleChoiceAction = async (choiceId: string) => {
    if (!gameState || !currentEvent || loading) return;
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/simulator/action`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token || localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          state: gameState,
          actionType: 'choice',
          choiceId
        })
      });

      if (response.ok) {
        const data = await response.json();
        setGameState(data.state);
        setCurrentEvent(data.event);
        setLastActionConsequence(data.consequence);
        setFeedbackText(data.feedback || '');
      } else {
        throw new Error('Local fallback choice execution');
      }
    } catch (err) {
      const choice = currentEvent.choices?.find(c => c.id === choiceId);
      if (choice) {
        const stats = { ...gameState.stats };
        stats.technical = Math.min(100, Math.max(0, stats.technical + choice.statsImpact.technical));
        stats.leadership = Math.min(100, Math.max(0, stats.leadership + choice.statsImpact.leadership));
        stats.stress = Math.min(100, Math.max(0, stats.stress + choice.statsImpact.stress));
        stats.network = Math.min(100, Math.max(0, stats.network + choice.statsImpact.network));

        let xp = Math.min(100, gameState.xp + choice.statsImpact.xp);
        let day = gameState.day + 1;
        let salary = gameState.salary + choice.statsImpact.salary;

        const nextState = {
          ...gameState,
          stats,
          xp,
          day,
          salary,
          history: [...gameState.history, choice.text]
        };

        setGameState(nextState);
        setLastActionConsequence(choice.consequence);
        setFeedbackText('');

        if (xp >= 100) {
          setCurrentEvent({
            isInterview: true,
            question: getLocalInterviewQuestion(nextState.career, nextState.level)
          });
        } else {
          setCurrentEvent(generateClientEvent(nextState.career, nextState.level, nextState.stats));
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const handleInterviewSubmit = async () => {
    if (!gameState || !currentEvent || loading || !interviewAnswer.trim()) return;
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/simulator/action`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token || localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          state: gameState,
          actionType: 'interview',
          currentQuestion: currentEvent.question,
          interviewAnswer
        })
      });

      if (response.ok) {
        const data = await response.json();
        setGameState(data.state);
        setLastActionConsequence(data.feedback);
        setFeedbackText(data.passed ? 'PROMOTION GRANTED!' : 'REVIEW DEFERRED');
        setCurrentEvent(data.event);
      } else {
        throw new Error('Local grading fallback');
      }
    } catch (err) {
      const wordCount = interviewAnswer.trim().split(/\s+/).length;
      const passed = wordCount >= 12;
      const feedback = passed 
        ? `Your answer demonstrated solid technical insight and leadership. You have been promoted with a 30% salary raise!` 
        : `Your response was too brief. The board has deferred your review. Keep practicing your key competencies.`;

      let level = gameState.level;
      let title = gameState.title;
      let salary = gameState.salary;
      let xp = gameState.xp;
      const stats = { ...gameState.stats };

      if (passed) {
        level = Math.min(10, level + 1);
        const titles = getCareerTitles(gameState.career);
        title = titles[level - 1];
        xp = 0;
        salary = Math.floor(salary * 1.3);
        stats.leadership = Math.min(100, stats.leadership + 10);
        stats.technical = Math.min(100, stats.technical + 8);
        stats.stress = Math.max(0, stats.stress - 15);
      } else {
        stats.stress = Math.min(100, stats.stress + 10);
        xp = Math.max(0, xp - 20);
      }

      const nextState = {
        ...gameState,
        level,
        title,
        salary,
        xp,
        stats,
        day: gameState.day + 1
      };

      setGameState(nextState);
      setLastActionConsequence(feedback);
      setFeedbackText(passed ? 'PROMOTION GRANTED!' : 'REVIEW DEFERRED');
      setCurrentEvent(generateClientEvent(nextState.career, nextState.level, nextState.stats));
    } finally {
      setLoading(false);
      setInterviewAnswer('');
    }
  };

  const handleSendMentorMessage = async () => {
    if (!gameState || !mentorInput.trim() || mentorLoading) return;
    const userMsg = mentorInput.trim();
    setMentorInput('');
    setMentorLoading(true);

    const updatedChat = [...mentorChat, { role: 'user', content: userMsg } as ChatMessage];
    setMentorChat(updatedChat);

    try {
      const response = await fetch(`${API_BASE_URL}/simulator/mentor`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token || localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          career: gameState.career,
          state: gameState,
          chatHistory: updatedChat.slice(-6),
          query: userMsg
        })
      });

      if (response.ok) {
        const data = await response.json();
        setMentorChat([...updatedChat, { role: 'assistant', content: data.advice }]);
      } else {
        throw new Error('Local mentor fallback');
      }
    } catch (err) {
      setTimeout(() => {
        let advice = `Try balancing your skills. Your Stress is at ${gameState.stats.stress}%. Prioritize lower-stress choices or networking to build team momentum.`;
        if (userMsg.toLowerCase().includes('stress')) {
          advice = `High stress (${gameState.stats.stress}%) can lead to burnout. Select balanced actions to keep stress in the safe zone under 60%.`;
        } else if (userMsg.toLowerCase().includes('salary') || userMsg.toLowerCase().includes('promote')) {
          advice = `Reach 100% XP to unlock the board review interview. Make sure your Technical (${gameState.stats.technical}%) and Leadership (${gameState.stats.leadership}%) attributes are elevated.`;
        }
        setMentorChat([...updatedChat, { role: 'assistant', content: advice }]);
      }, 400);
    } finally {
      setMentorLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full relative">
        
        {/* Onboarding Screen (Game Not Started) */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="max-w-4xl mx-auto py-6"
            >
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-[#635BFF] text-xs font-semibold mb-3">
                  <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                  <span>AI Career Scenario Engine</span>
                </span>
                <h1 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                  Futuro <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">Career Simulator</span>
                </h1>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Experience real-world workplace scenarios. Face strategic dilemmas, manage key competencies, pass promotion interviews, and climb the ranks.
                </p>
              </div>

              {/* Career Selection Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                {[
                  {
                    id: 'Software Engineer',
                    desc: 'Build scalable products, manage technical debt, and design system architectures.',
                    icon: <Brain className="h-5 w-5 text-[#635BFF]" />,
                    badge: 'Tech Track'
                  },
                  {
                    id: 'Doctor',
                    desc: 'Diagnose critical patient cases under pressure and lead clinical care teams.',
                    icon: <HeartPulse className="h-5 w-5 text-cyan-600" />,
                    badge: 'Healthcare'
                  },
                  {
                    id: 'Entrepreneur',
                    desc: 'Manage company runway, hire key engineering talent, and negotiate seed venture funding.',
                    icon: <TrendingUp className="h-5 w-5 text-amber-600" />,
                    badge: 'Startups'
                  },
                  {
                    id: 'Designer',
                    desc: 'Create scalable design systems, lead user research, and craft pixel-perfect interfaces.',
                    icon: <Sparkles className="h-5 w-5 text-purple-600" />,
                    badge: 'Product Design'
                  }
                ].map((track) => (
                  <button
                    key={track.id}
                    type="button"
                    onClick={() => setSelectedCareer(track.id)}
                    className={`p-6 rounded-2xl border text-left transition-all cursor-pointer ${
                      selectedCareer === track.id
                        ? 'border-[#635BFF] bg-purple-50/60 shadow-md ring-2 ring-purple-500/20'
                        : 'border-slate-200 bg-white hover:bg-slate-50 shadow-sm'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                        {track.icon}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {track.badge}
                      </span>
                    </div>
                    <h3 className="font-outfit text-base font-bold text-slate-900 mb-1">{track.id}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{track.desc}</p>
                  </button>
                ))}
              </div>

              {/* Start CTA */}
              <div className="text-center">
                <button
                  type="button"
                  disabled={!selectedCareer || loading}
                  onClick={() => selectedCareer && handleStartGame(selectedCareer)}
                  className="px-8 py-3.5 bg-[#635BFF] hover:bg-[#5146E5] disabled:opacity-50 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/15 active:scale-98 transition-all inline-flex items-center space-x-2 cursor-pointer text-xs"
                >
                  {loading ? (
                    <RefreshCw className="h-4 w-4 animate-spin" />
                  ) : (
                    <Play className="h-4 w-4 fill-current" />
                  )}
                  <span>{loading ? 'Initializing Engine...' : 'Launch Simulation'}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Active Simulation Game Screen */}
        <AnimatePresence>
          {isPlaying && gameState && currentEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-2 items-start"
            >
              
              {/* Left Column: Player Stats Sheet HUD (4 cols) */}
              <div className="lg:col-span-4 space-y-5">
                
                {/* HUD Header Card */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-[#635BFF] to-cyan-500" />
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#635BFF] bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                      {gameState.career} Track
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Day {gameState.day}</span>
                  </div>

                  <h2 className="font-outfit text-xl font-extrabold text-slate-900 leading-snug">{gameState.title}</h2>
                  <p className="text-[11px] font-semibold text-slate-500 mt-0.5">Tier {gameState.level} of 10</p>
                  
                  <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
                    <span className="text-slate-500">Compensation:</span>
                    <span className="font-outfit font-extrabold text-slate-900 text-sm">${gameState.salary.toLocaleString()} / yr</span>
                  </div>
                </div>

                {/* XP / Promotion Progress Bar */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-slate-700">Promotion Eligibility (XP)</span>
                    <span className="text-xs font-extrabold text-[#635BFF]">{gameState.xp}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-violet-600 to-[#635BFF] rounded-full transition-all duration-300"
                      style={{ width: `${gameState.xp}%` }}
                    />
                  </div>
                  {gameState.xp >= 100 ? (
                    <span className="block text-xs font-bold text-emerald-600 mt-2 flex items-center">
                      <Award className="h-3.5 w-3.5 mr-1" />
                      XP Maxed! Promotion Review Active.
                    </span>
                  ) : (
                    <span className="block text-[11px] text-slate-400 mt-1.5">
                      Earn 100% XP to unlock your next rank promotion.
                    </span>
                  )}
                </div>

                {/* Attribute Metrics */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-1.5">
                    <Activity className="h-4 w-4 text-[#635BFF]" />
                    <span>Attribute Metrics</span>
                  </h3>

                  <div className="space-y-3">
                    {/* Technical Skill */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                        <span className="flex items-center">
                          <Brain className="h-3.5 w-3.5 mr-1.5 text-blue-600" /> Technical Skill
                        </span>
                        <span>{gameState.stats.technical}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: `${gameState.stats.technical}%` }} />
                      </div>
                    </div>

                    {/* Leadership */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                        <span className="flex items-center">
                          <Award className="h-3.5 w-3.5 mr-1.5 text-amber-600" /> Leadership
                        </span>
                        <span>{gameState.stats.leadership}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-600 rounded-full" style={{ width: `${gameState.stats.leadership}%` }} />
                      </div>
                    </div>

                    {/* Network */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                        <span className="flex items-center">
                          <Users className="h-3.5 w-3.5 mr-1.5 text-emerald-600" /> Network
                        </span>
                        <span>{gameState.stats.network}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-600 rounded-full" style={{ width: `${gameState.stats.network}%` }} />
                      </div>
                    </div>

                    {/* Stress */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                        <span className="flex items-center">
                          <ShieldAlert className="h-3.5 w-3.5 mr-1.5 text-rose-600" /> Stress Level
                        </span>
                        <span className={gameState.stats.stress >= 70 ? 'text-rose-600 font-bold' : ''}>{gameState.stats.stress}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${gameState.stats.stress >= 70 ? 'bg-rose-600' : 'bg-rose-400'}`} style={{ width: `${gameState.stats.stress}%` }} />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setShowMentor(true)}
                      className="w-full py-2.5 bg-purple-50 hover:bg-purple-100 border border-purple-100 text-[#635BFF] rounded-xl text-xs font-semibold transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Ask AI Mentor Advice</span>
                    </button>
                  </div>
                </div>

                {/* Reset Option */}
                <button
                  type="button"
                  onClick={() => {
                    setIsPlaying(false);
                    setGameState(null);
                    setCurrentEvent(null);
                    setLastActionConsequence('');
                  }}
                  className="text-xs font-semibold text-slate-400 hover:text-slate-700 transition-colors w-full text-center py-1 cursor-pointer"
                >
                  Quit Simulation / Select New Track
                </button>
              </div>

              {/* Right Column: Scenario / Challenge Workspace (8 cols) */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Consequence Notification Alert */}
                <AnimatePresence mode="popLayout">
                  {lastActionConsequence && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className={`p-4 rounded-xl border flex items-start space-x-3 text-xs leading-relaxed ${
                        feedbackText.includes('PROMOTION') 
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                          : feedbackText.includes('DEFERRED')
                          ? 'bg-amber-50 border-amber-200 text-amber-800'
                          : 'bg-purple-50/70 border-purple-100 text-slate-700'
                      }`}
                    >
                      <div className="p-1 rounded-lg mt-0.5 shrink-0">
                        {feedbackText.includes('PROMOTION') ? <Award className="h-4 w-4 text-emerald-600" /> : <Activity className="h-4 w-4 text-[#635BFF]" />}
                      </div>
                      <div>
                        {feedbackText && (
                          <h4 className="font-bold text-xs uppercase tracking-wider mb-0.5">
                            {feedbackText}
                          </h4>
                        )}
                        <p>{lastActionConsequence}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Decision Board Card */}
                <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm min-h-[380px] flex flex-col justify-between">
                  
                  {currentEvent.isInterview ? (
                    <div className="space-y-5">
                      <div className="flex items-center space-x-2">
                        <span className="p-1.5 rounded-lg bg-purple-50 text-[#635BFF]">
                          <Award className="h-4 w-4" />
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#635BFF]">
                          Promotion Board Review
                        </span>
                      </div>
                      
                      <h3 className="font-outfit text-xl font-bold text-slate-900 leading-snug">
                        {currentEvent.question}
                      </h3>

                      <textarea
                        disabled={loading}
                        value={interviewAnswer}
                        onChange={(e) => setInterviewAnswer(e.target.value)}
                        placeholder="Type your detailed answer here... (minimum 12 words required)"
                        className="w-full h-32 px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#635BFF] resize-none leading-relaxed"
                      />
                      <div className="flex justify-between items-center text-[11px] text-slate-400">
                        <span>Answer length: {interviewAnswer.trim() ? interviewAnswer.trim().split(/\s+/).length : 0} words</span>
                        <span>Minimum: 12 words</span>
                      </div>

                      <div className="pt-3">
                        <button
                          type="button"
                          disabled={loading || !interviewAnswer.trim() || interviewAnswer.trim().split(/\s+/).length < 12}
                          onClick={handleInterviewSubmit}
                          className="w-full py-3 bg-[#635BFF] hover:bg-[#5146E5] disabled:opacity-50 text-white font-semibold rounded-xl shadow-md shadow-indigo-500/15 active:scale-98 transition-all flex items-center justify-center space-x-1.5 cursor-pointer text-xs"
                        >
                          {loading ? (
                            <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                          ) : (
                            <Send className="h-3.5 w-3.5" />
                          )}
                          <span>{loading ? 'Evaluating...' : 'Submit to Board'}</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#635BFF] bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                            Daily Decision &bull; Day {gameState.day}
                          </span>
                        </div>

                        <h3 className="font-outfit text-lg font-bold text-slate-900 leading-relaxed mb-6">
                          {currentEvent.scenario}
                        </h3>

                        {/* Choices */}
                        <div className="space-y-3">
                          {currentEvent.choices?.map((choice) => (
                            <button
                              key={choice.id}
                              type="button"
                              disabled={loading}
                              onClick={() => handleChoiceAction(choice.id)}
                              className="w-full p-4 rounded-xl bg-slate-50 hover:bg-purple-50/50 border border-slate-200 text-left hover:border-purple-200 transition-all flex items-start space-x-3 cursor-pointer group"
                            >
                              <span className="px-2 py-1 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-600 group-hover:text-[#635BFF] group-hover:border-purple-200 shrink-0">
                                {choice.id}
                              </span>
                              <div className="flex-grow">
                                <p className="text-xs font-semibold text-slate-800 leading-snug">
                                  {choice.text}
                                </p>
                                
                                <div className="flex flex-wrap gap-1 mt-2">
                                  {choice.statsImpact.technical !== 0 && (
                                    <span className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 text-[10px] font-semibold border border-blue-100">
                                      {choice.statsImpact.technical > 0 ? '+' : ''}{choice.statsImpact.technical}% Tech
                                    </span>
                                  )}
                                  {choice.statsImpact.leadership !== 0 && (
                                    <span className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 text-[10px] font-semibold border border-amber-100">
                                      {choice.statsImpact.leadership > 0 ? '+' : ''}{choice.statsImpact.leadership}% Lead
                                    </span>
                                  )}
                                  {choice.statsImpact.network !== 0 && (
                                    <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-semibold border border-emerald-100">
                                      {choice.statsImpact.network > 0 ? '+' : ''}{choice.statsImpact.network}% Network
                                    </span>
                                  )}
                                  {choice.statsImpact.stress !== 0 && (
                                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-semibold border ${
                                      choice.statsImpact.stress > 0 ? 'bg-rose-50 text-rose-600 border-rose-100' : 'bg-emerald-50 text-emerald-700 border-emerald-100'
                                    }`}>
                                      {choice.statsImpact.stress > 0 ? '+' : ''}{choice.statsImpact.stress}% Stress
                                    </span>
                                  )}
                                  {choice.statsImpact.xp > 0 && (
                                    <span className="px-1.5 py-0.5 rounded bg-purple-50 text-[#635BFF] text-[10px] font-bold border border-purple-100">
                                      +{choice.statsImpact.xp}% XP
                                    </span>
                                  )}
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {loading && (
                        <div className="flex items-center space-x-1.5 text-xs text-slate-400 justify-center">
                          <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                          <span>Generating next scenario...</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Floating AI Mentor Sidebar Drawer */}
              <AnimatePresence>
                {showMentor && (
                  <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setShowMentor(false)}
                      className="absolute inset-0 bg-slate-900/30 backdrop-blur-xs"
                    />

                    <motion.div
                      initial={{ x: '100%' }}
                      animate={{ x: 0 }}
                      exit={{ x: '100%' }}
                      transition={{ type: 'tween', duration: 0.25 }}
                      className="relative w-full max-w-md bg-white border-l border-slate-200 shadow-2xl h-full flex flex-col justify-between z-10"
                    >
                      {/* Header */}
                      <div className="p-5 border-b border-slate-100 flex justify-between items-center">
                        <div className="flex items-center space-x-2.5">
                          <span className="p-2 rounded-xl bg-purple-50 text-[#635BFF]">
                            <BookOpen className="h-4 w-4" />
                          </span>
                          <div>
                            <h3 className="font-outfit font-bold text-sm text-slate-900 leading-tight">AI Career Mentor</h3>
                            <span className="text-[10px] text-slate-400">Simulator Strategy Advisor</span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setShowMentor(false)}
                          className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 font-bold text-sm cursor-pointer"
                        >
                          &times;
                        </button>
                      </div>

                      {/* Chat Messages */}
                      <div className="flex-grow p-5 overflow-y-auto space-y-3.5">
                        {mentorChat.map((msg, i) => (
                          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                              msg.role === 'user'
                                ? 'bg-[#635BFF] text-white rounded-tr-none'
                                : 'bg-slate-50 border border-slate-200/80 text-slate-800 rounded-tl-none'
                            }`}>
                              {msg.content}
                            </div>
                          </div>
                        ))}
                        {mentorLoading && (
                          <div className="flex justify-start">
                            <div className="bg-slate-50 border border-slate-200 text-slate-500 p-3 rounded-2xl text-xs rounded-tl-none flex items-center space-x-1.5">
                              <RefreshCw className="h-3 w-3 animate-spin" />
                              <span>Mentor is typing...</span>
                            </div>
                          </div>
                        )}
                        <div ref={chatEndRef} />
                      </div>

                      {/* Form Input */}
                      <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                        <div className="flex space-x-2">
                          <input
                            disabled={mentorLoading}
                            value={mentorInput}
                            onChange={(e) => setMentorInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMentorMessage()}
                            type="text"
                            placeholder="Ask mentor for recommendations..."
                            className="flex-grow px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#635BFF] text-slate-900"
                          />
                          <button
                            type="button"
                            disabled={mentorLoading || !mentorInput.trim()}
                            onClick={handleSendMentorMessage}
                            className="p-2.5 bg-[#635BFF] hover:bg-[#5146E5] disabled:opacity-50 text-white rounded-xl shadow-md transition-all active:scale-98 cursor-pointer"
                          >
                            <Send className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>

            </motion.div>
          )}
        </AnimatePresence>

      </main>

      <Footer />
    </div>
  );
}

function generateClientEvent(career: string, level: number, stats: Stats): GameEvent {
  const software = [
    {
      scenario: 'You find a critical memory leak in the production docker containers, but your shift is ending.',
      choices: [
        {
          id: 'A',
          text: 'Stay late at the office and fix the docker memory leak yourself.',
          consequence: 'Container leak resolved! Your technical competency rises, but your stress climbs.',
          statsImpact: { technical: 12, leadership: 0, stress: 15, network: 0, xp: 20, salary: 100 }
        },
        {
          id: 'B',
          text: 'Document the bug in JIRA issues and coordinate a handover with the incoming support team.',
          consequence: 'Good communication. The team fixes it collectively. Net value increases.',
          statsImpact: { technical: 5, leadership: 10, stress: 5, network: 8, xp: 15, salary: 0 }
        },
        {
          id: 'C',
          text: 'Go home on time and deal with the JIRA tickets tomorrow morning.',
          consequence: 'You sleep well, though the servers experience a minor lag during the night.',
          statsImpact: { technical: 0, leadership: 0, stress: -10, network: 0, xp: 5, salary: 0 }
        }
      ]
    },
    {
      scenario: 'A major customer demands a custom database vector module that bypasses the core platform API limits.',
      choices: [
        {
          id: 'A',
          text: 'Spend hours coding a custom database extension just for this client.',
          consequence: 'Client is happy, though system complexity is now high.',
          statsImpact: { technical: 15, leadership: 0, stress: 18, network: 5, xp: 15, salary: 300 }
        },
        {
          id: 'B',
          text: 'Lead a product review session to integrate the requirements directly into the main API framework.',
          consequence: 'Stunning system architectural design! Management praises your foresight.',
          statsImpact: { technical: 8, leadership: 15, stress: 10, network: 10, xp: 25, salary: 500 }
        },
        {
          id: 'C',
          text: 'Politely refuse the request, suggesting they use standard web hooks.',
          consequence: 'Keeps backend code clean and manageable. Saved stress.',
          statsImpact: { technical: 5, leadership: 5, stress: -5, network: 0, xp: 10, salary: 0 }
        }
      ]
    }
  ];

  const doctor = [
    {
      scenario: 'A triage emergency has two patients needing immediate attention: a child with high fever and an elderly person with acute breath shortness.',
      choices: [
        {
          id: 'A',
          text: 'Treat the elderly patient yourself while instructing a nurse to prioritize the child.',
          consequence: 'Both patients stabilize. The emergency team works efficiently.',
          statsImpact: { technical: 15, leadership: 10, stress: 20, network: 5, xp: 25, salary: 200 }
        },
        {
          id: 'B',
          text: 'Delegate both cases to junior residents to test their decision-making skills.',
          consequence: 'Residents handle it with minor guidance. Your leadership increases.',
          statsImpact: { technical: 5, leadership: 18, stress: 10, network: 8, xp: 20, salary: 100 }
        },
        {
          id: 'C',
          text: 'Call the chief on-call consultant to take over decision-making.',
          consequence: 'Safe call, though it limits your direct clinical growth.',
          statsImpact: { technical: 0, leadership: 0, stress: -10, network: 10, xp: 8, salary: 0 }
        }
      ]
    }
  ];

  const entrepreneur = [
    {
      scenario: 'A key team engineer is poached by a competitor offering double their current salary. You have limited cash reserve.',
      choices: [
        {
          id: 'A',
          text: 'Match the salary offer by reducing your marketing budget to keep them.',
          consequence: 'Code progress is secure, but user acquisition slows down.',
          statsImpact: { technical: 5, leadership: 10, stress: 15, network: 0, xp: 15, salary: -500 }
        },
        {
          id: 'B',
          text: 'Offer them 5% stock options vesting over 4 years to align interests.',
          consequence: 'They stay! Equity is diluted, but you preserve valuable cash runway.',
          statsImpact: { technical: 0, leadership: 15, stress: 10, network: 10, xp: 20, salary: 0 }
        },
        {
          id: 'C',
          text: 'Let them leave and start hiring a talented contractor from your network.',
          consequence: 'Temporary lag in roadmap delivery, but you keep control of capital.',
          statsImpact: { technical: 10, leadership: 5, stress: 20, network: 15, xp: 15, salary: 500 }
        }
      ]
    }
  ];

  const designer = [
    {
      scenario: 'The engineering team claims your auto-layout component spacing specifications are too complex to code.',
      choices: [
        {
          id: 'A',
          text: 'Redesign the component frames using standard grid guidelines.',
          consequence: 'Smooth developer handoff, though layout becomes a bit generic.',
          statsImpact: { technical: 12, leadership: 5, stress: 10, network: 5, xp: 15, salary: 100 }
        },
        {
          id: 'B',
          text: 'Set up an interactive alignment call to code-pair the CSS structures together.',
          consequence: 'Excellent rapport built! Developers now respect your design patterns.',
          statsImpact: { technical: 8, leadership: 18, stress: 15, network: 15, xp: 25, salary: 300 }
        },
        {
          id: 'C',
          text: 'Insist on pixel-perfection and tell them to stick to the Figma schema.',
          consequence: 'Product looks great, though relations with engineering are slightly strained.',
          statsImpact: { technical: 5, leadership: 5, stress: 20, network: -5, xp: 10, salary: 0 }
        }
      ]
    }
  ];

  let pool = software;
  if (career === 'Doctor') pool = doctor;
  else if (career === 'Entrepreneur') pool = entrepreneur;
  else if (career === 'Designer') pool = designer;

  const item = pool[Math.floor(Math.random() * pool.length)];
  return { isInterview: false, ...item };
}

function getLocalInterviewQuestion(career: string, currentLevel: number): string {
  const milestoneQuestions: Record<string, string[]> = {
    'Software Engineer': [
      'Describe how you design a caching layer to optimize heavy read queries on a relational database.',
      'Explain what a memory leak in Node.js is, and how you profile/debug it.',
      'As a Senior Engineer candidate, how do you handle technical debt vs building client features?'
    ],
    'Doctor': [
      'A patient has sudden severe chest pain. Walk us through your triage diagnostic flow.',
      'How do you manage a clinical emergency when a patient’s medical history is unknown?',
      'How do you deliver a difficult diagnosis to a family in an empathetic yet professional manner?'
    ],
    'Entrepreneur': [
      'What core metrics do you show venture capitalists to prove Product-Market Fit (PMF)?',
      'How do you handle letting go of a co-founder who is no longer scaling with the startup?',
      'Explain how you negotiate seed funding terms without losing company voting control.'
    ],
    'Designer': [
      'How do you construct and coordinate a design system that scales across mobile and web platforms?',
      'Walk us through how you conduct user testing to redesign a legacy client checkout flow.',
      'How do you balance high-fidelity styling requirements with strict web accessibility guidelines?'
    ]
  };

  const list = milestoneQuestions[career] || milestoneQuestions['Software Engineer'];
  const index = Math.min(list.length - 1, Math.floor((currentLevel - 1) / 3));
  return list[index];
}

function getCareerTitles(career: string): string[] {
  return [
    'Intern Rank',
    'Junior Rank',
    'Associate Rank',
    'Mid-Level Rank',
    'Senior Rank',
    'Lead Rank',
    'Staff Rank',
    'Principal Rank',
    'VP Rank',
    'Director / Executive'
  ];
}
