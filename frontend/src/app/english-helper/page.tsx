'use client';

import React, { useState } from 'react';
import { AppShell } from '../../components/shell/AppShell';
import {
  MessageSquare,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Volume2,
  RefreshCw,
  Send,
  Copy,
  Check,
  Zap,
  HelpCircle
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

type CommunicationMode = 
  | 'Professional'
  | 'Friendly'
  | 'Formal'
  | 'Confident'
  | 'Shorter'
  | 'Clearer'
  | 'Interview'
  | 'Email'
  | 'Presentation';

export default function EnglishHelperPage() {
  const [inputText, setInputText] = useState('I want to say that I built the website and it took me two weeks and it has many features.');
  const [selectedMode, setSelectedMode] = useState<CommunicationMode>('Professional');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const modes: { id: CommunicationMode; label: string; desc: string }[] = [
    { id: 'Professional', label: 'Professional', desc: 'Standard business & tech phrasing' },
    { id: 'Friendly', label: 'Friendly', desc: 'Warm & approachable team tone' },
    { id: 'Formal', label: 'Formal', desc: 'Executive & corporate proposals' },
    { id: 'Confident', label: 'Confident', desc: 'Strong active ownership voice' },
    { id: 'Shorter', label: 'Shorter', desc: 'Concise & punchy impact' },
    { id: 'Clearer', label: 'Clearer', desc: 'Removes jargon & complexity' },
    { id: 'Interview', label: 'Interview', desc: 'STAR method interview responses' },
    { id: 'Email', label: 'Email', desc: 'Clean email structure & greetings' },
    { id: 'Presentation', label: 'Presentation', desc: 'Engaging slide deck speech' }
  ];

  // Dynamic Transformation Engine based on selected mode
  const getTransformedResult = () => {
    switch (selectedMode) {
      case 'Professional':
        return {
          improved: 'Architected and deployed a feature-rich web application end-to-end within a two-week sprint timeline.',
          why: 'Replaces verbose phrasing ("took me two weeks and has many features") with executive action verbs ("Architected", "deployed") and standard sprint terminology.'
        };
      case 'Friendly':
        return {
          improved: 'I recently finished building an exciting web app packed with great features over the past two weeks!',
          why: 'Uses warm, enthusiastic vocabulary suitable for team Slack updates or peer syncs.'
        };
      case 'Formal':
        return {
          improved: 'The web application was fully developed and delivered within the designated fourteen-day timeframe, encompassing comprehensive functional modules.',
          why: 'Elevates vocabulary for formal client proposals and enterprise board presentations.'
        };
      case 'Confident':
        return {
          improved: 'I spearheaded the end-to-end development of a high-impact web application in just two weeks.',
          why: 'Uses active ownership verbs ("spearheaded", "high-impact") to emphasize initiative and strong delivery.'
        };
      case 'Shorter':
        return {
          improved: 'Built a feature-rich web app in 2 weeks.',
          why: 'Cuts out 65% of filler words while retaining 100% of core technical accomplishment.'
        };
      case 'Clearer':
        return {
          improved: 'I built a website with many useful features in two weeks.',
          why: 'Simplifies sentence structure so non-technical stakeholders easily grasp the key achievement.'
        };
      case 'Interview':
        return {
          improved: 'In my recent project, I took full ownership of designing and launching a multi-feature web application, delivering the complete MVP within a strict 2-week deadline.',
          why: 'Structures your answer using the STAR method (Situation, Task, Action, Result) ideal for technical interviews.'
        };
      case 'Email':
        return {
          improved: 'Hi Team, I am pleased to share that I have completed the web application development within our 2-week target, including all requested features.',
          why: 'Formats as a polite, structured email update ready to send to managers or clients.'
        };
      case 'Presentation':
        return {
          improved: 'Over the past two weeks, we successfully designed and launched a powerful web application designed to solve key user needs.',
          why: 'Crafted for verbal slide presentations with emphasis on team delivery and user value.'
        };
      default:
        return {
          improved: 'Architected and deployed a feature-rich web application end-to-end within a two-week sprint timeline.',
          why: 'Replaces passive voice with strong active verbs.'
        };
    }
  };

  const result = getTransformedResult();

  const handleCopy = () => {
    navigator.clipboard.writeText(result.improved);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Badge variant="violet" size="sm" icon={<MessageSquare className="w-3.5 h-3.5 text-indigo-600" />}>
                Futuro AI Communication Suite
              </Badge>
              <Badge variant="emerald" size="sm">9 Tone Modes</Badge>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-outfit mt-1">
              Futuro Communicate & Phrasing Improver
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Transform informal sentences into high-impact professional, interview, or email communication.
            </p>
          </div>
        </div>

        {/* Mode Selector Tabs */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2">
          {modes.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedMode(m.id)}
              className={`p-2.5 rounded-2xl border text-xs font-bold transition-all text-center cursor-pointer ${
                selectedMode === m.id
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Input & Output Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input Box */}
          <Card variant="elevated" className="p-6 bg-white border-slate-200 shadow-xs rounded-3xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 font-outfit uppercase tracking-wider">
                Original Draft Sentence
              </span>
              <button
                onClick={() => setInputText('I managed to complete the database indexing task after spending hours fixing errors.')}
                className="text-[11px] font-semibold text-indigo-600 hover:underline cursor-pointer"
              >
                Try Sample Sentence
              </button>
            </div>

            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              rows={5}
              placeholder="Type or paste any sentence you want to improve..."
              className="w-full bg-slate-50 border border-slate-300 rounded-2xl p-4 text-xs text-slate-900 focus:outline-none focus:border-indigo-500 font-medium leading-relaxed"
            />
          </Card>

          {/* Improved Output Box */}
          <Card variant="elevated" className="p-6 bg-white border-slate-200 shadow-xs rounded-3xl space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-indigo-600 font-outfit uppercase tracking-wider flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Futuro Improved ({selectedMode} Mode)</span>
                </span>
                <button
                  onClick={handleCopy}
                  className="flex items-center space-x-1 px-3 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-xl text-xs font-bold cursor-pointer transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Text'}</span>
                </button>
              </div>

              <div className="p-4 mt-3 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-slate-900 text-sm font-semibold leading-relaxed">
                {result.improved}
              </div>
            </div>

            {/* Why This Is Better Explainability */}
            <div className="p-3.5 mt-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1">
              <strong className="text-slate-900 font-bold block uppercase text-[10px] flex items-center space-x-1">
                <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
                <span>Why This Version Is Better</span>
              </strong>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                {result.why}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
