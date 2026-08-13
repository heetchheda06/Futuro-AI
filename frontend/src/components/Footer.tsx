import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 text-xs text-slate-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center space-x-2.5 mb-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-extrabold text-sm shadow-2xs">
                F
              </div>
              <span className="font-outfit font-extrabold text-base tracking-tight text-slate-900">
                FUTURO<span className="text-indigo-600">.AI</span>
              </span>
            </Link>
            <p className="text-slate-500 leading-relaxed max-w-xs">
              Your AI-Powered Career Operating System. Navigate, learn, prepare, and level up with real-time intelligence.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 font-outfit uppercase tracking-wider mb-3">Career OS</h4>
            <ul className="space-y-2">
              <li><Link href="/career-navigator" className="hover:text-indigo-600 transition-colors">Career Navigator</Link></li>
              <li><Link href="/career-graph" className="hover:text-indigo-600 transition-colors">Skill Network Graph</Link></li>
              <li><Link href="/skill-gap" className="hover:text-indigo-600 transition-colors">Skill Gap Intelligence</Link></li>
              <li><Link href="/roadmap" className="hover:text-indigo-600 transition-colors">90-Day Roadmap</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 font-outfit uppercase tracking-wider mb-3">AI Suite</h4>
            <ul className="space-y-2">
              <li><Link href="/ai-career-hub" className="hover:text-indigo-600 transition-colors">AI Career Hub</Link></li>
              <li><Link href="/ai-interviewer" className="hover:text-indigo-600 transition-colors">AI Mock Interviewer</Link></li>
              <li><Link href="/resume" className="hover:text-indigo-600 transition-colors">Resume AI Workspace</Link></li>
              <li><Link href="/learning-helper" className="hover:text-indigo-600 transition-colors">Futuro AI Tutor</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 font-outfit uppercase tracking-wider mb-3">Discovery</h4>
            <ul className="space-y-2">
              <li><Link href="/courses" className="hover:text-indigo-600 transition-colors">Courses Marketplace</Link></li>
              <li><Link href="/ebooks" className="hover:text-indigo-600 transition-colors">Technical Ebooks</Link></li>
              <li><Link href="/colleges" className="hover:text-indigo-600 transition-colors">College Intelligence</Link></li>
              <li><Link href="/mentors" className="hover:text-indigo-600 transition-colors">Futuro Mentors</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px]">
          <span>© 2026 Futuro AI Platform Inc. All rights reserved.</span>
          <div className="flex items-center space-x-4 mt-2 sm:mt-0">
            <span className="hover:text-slate-800 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-800 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-800 cursor-pointer">Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
