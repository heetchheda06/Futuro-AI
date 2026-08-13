'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AppShell } from '../../components/shell/AppShell';
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Sparkles,
  Play,
  RotateCcw,
  CheckCircle2,
  FileText,
  Download,
  AlertCircle,
  MessageSquare,
  Bot,
  ArrowRight
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { DataSourceBadge } from '../../components/ui/DataSourceBadge';

export default function AIInterviewerPage() {
  const [sessionActive, setSessionActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoOn, setVideoOn] = useState(true);
  const [showReport, setShowReport] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (sessionActive && videoOn) {
      navigator.mediaDevices
        ?.getUserMedia({ video: true, audio: true })
        .then((stream) => {
          if (videoRef.current) videoRef.current.srcObject = stream;
        })
        .catch(() => console.log('Camera access simulation active'));
    }
  }, [sessionActive, videoOn]);

  const handleEndSession = () => {
    setSessionActive(false);
    setShowReport(true);
  };

  const handleDownloadPDF = () => {
    alert('Generating PDF Report... Download will start automatically.');
  };

  const handleDownloadJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify({ score: 84, technical: 88, communication: 82, confidence: 76 }));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'Futuro_AI_Interview_Report.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Badge variant="violet" size="sm" icon={<MessageSquare className="w-3.5 h-3.5 text-indigo-600" />}>
                Voice & Video Cockpit
              </Badge>
              <DataSourceBadge isLive={true} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-outfit mt-1">
              AI Mock Interviewer & STAR Analytics
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Practice real-time technical & behavioral interviews with instant diagnostic feedback.
            </p>
          </div>
        </div>

        {/* Interview Cockpit View */}
        {!showReport ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Video Stream Container */}
            <Card variant="elevated" className="lg:col-span-2 p-6 bg-white border-slate-200 shadow-xs space-y-4">
              <div className="relative h-80 rounded-2xl bg-slate-900 overflow-hidden flex items-center justify-center border border-slate-300">
                {videoOn && sessionActive ? (
                  <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center space-y-2 text-slate-400">
                    <Bot className="w-12 h-12 mx-auto text-indigo-400" />
                    <p className="text-xs font-semibold">AI Interviewer Readiness Standby</p>
                  </div>
                )}

                {sessionActive && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-rose-600 text-white text-[10px] font-bold flex items-center space-x-1.5 animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    <span>REC &bull; LIVE SESSION</span>
                  </div>
                )}
              </div>

              {/* Controls Bar */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex space-x-2">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      isMuted ? 'bg-rose-50 text-rose-700 border-rose-200' : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    {isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setVideoOn(!videoOn)}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      !videoOn ? 'bg-rose-50 text-rose-700 border-rose-200' : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    {!videoOn ? <VideoOff className="w-4 h-4" /> : <Video className="w-4 h-4" />}
                  </button>
                </div>

                {!sessionActive ? (
                  <Button variant="primary" size="md" onClick={() => setSessionActive(true)} leftIcon={<Play className="w-4 h-4" />}>
                    Start Interview Session
                  </Button>
                ) : (
                  <Button variant="danger" size="md" onClick={handleEndSession}>
                    End Session & View Report
                  </Button>
                )}
              </div>
            </Card>

            {/* Live Transcript & Question Panel */}
            <Card variant="elevated" className="p-6 bg-white border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 font-outfit pb-3 border-b border-slate-200">
                  Live AI Question & Context
                </h3>

                <div className="p-3.5 rounded-xl bg-violet-50 border border-violet-200 text-xs text-slate-800 space-y-1 mt-3">
                  <strong className="text-indigo-700 font-bold block">Current Question (System Design):</strong>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    &ldquo;How would you design a low-latency vector search indexing pipeline for millions of embeddings? Explain trade-offs between HNSW and IVFFlat.&rdquo;
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500">
                <span>Tip: Structure your response using Situation, Task, Action, and Result (STAR).</span>
              </div>
            </Card>
          </div>
        ) : (
          /* Post-Interview Diagnostic Performance Report */
          <div className="space-y-6">
            <Card variant="elevated" className="p-8 bg-white border-slate-200 shadow-md space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div>
                  <Badge variant="violet" size="sm">Diagnostic Performance Report</Badge>
                  <h2 className="text-2xl font-extrabold text-slate-900 font-outfit mt-1">
                    Interview Evaluation & STAR Scoring
                  </h2>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="secondary" size="sm" onClick={handleDownloadJSON} leftIcon={<Download className="w-3.5 h-3.5" />}>
                    JSON Data
                  </Button>
                  <Button variant="primary" size="sm" onClick={handleDownloadPDF} leftIcon={<FileText className="w-3.5 h-3.5" />}>
                    Download PDF Report
                  </Button>
                </div>
              </div>

              {/* 4 Score Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">Technical Accuracy</span>
                  <span className="text-2xl font-black text-indigo-600 font-outfit">88%</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">Communication Clarity</span>
                  <span className="text-2xl font-black text-cyan-600 font-outfit">82%</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">Confidence Index</span>
                  <span className="text-2xl font-black text-emerald-600 font-outfit">76%</span>
                </div>
                <div className="p-4 rounded-xl bg-violet-50 border border-violet-200 text-center">
                  <span className="text-[10px] text-indigo-700 font-bold uppercase block">Overall STAR Score</span>
                  <span className="text-2xl font-black text-indigo-700 font-outfit">84%</span>
                </div>
              </div>

              <div className="pt-2 flex justify-between">
                <Button variant="secondary" size="sm" onClick={() => setShowReport(false)} leftIcon={<RotateCcw className="w-3.5 h-3.5" />}>
                  Retry Interview Session
                </Button>
                <Link href="/learning-helper">
                  <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                    Practice Weak Areas (Futuro Tutor)
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        )}
      </div>
    </AppShell>
  );
}
