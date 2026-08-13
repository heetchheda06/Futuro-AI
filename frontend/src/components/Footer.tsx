import React from 'react';
import Link from 'next/link';
import { Brain, Mail, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center space-x-2.5 text-white">
              <span className="p-2 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-500/20">
                <Brain className="h-5 w-5" />
              </span>
              <span className="font-outfit font-extrabold text-xl tracking-tight">
                FUTURO<span className="text-[#635BFF]">.AI</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Empowering students and modern professionals to build a career that is ready for the future through intelligent career assessments, customized roadmaps, and AI-driven coaching.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" aria-label="Twitter">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" aria-label="GitHub">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" aria-label="LinkedIn">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-4 font-outfit">Platform</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/#features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/explorer" className="hover:text-white transition-colors">
                  Career Explorer
                </Link>
              </li>
              <li>
                <Link href="/comparison" className="hover:text-white transition-colors">
                  Comparison Matrix
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white transition-colors">
                  User Dashboard
                </Link>
              </li>
              <li>
                <Link href="/feed" className="hover:text-white transition-colors">
                  Industry News Feed
                </Link>
              </li>
            </ul>
          </div>

          {/* AI Tools Links */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-4 font-outfit">AI Copilots</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/assessment" className="hover:text-white transition-colors">
                  Career Assessment
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-white transition-colors">
                  ATS Resume Checker
                </Link>
              </li>
              <li>
                <Link href="/resume-builder" className="hover:text-white transition-colors">
                  Smart Resume Builder
                </Link>
              </li>
              <li>
                <Link href="/interview" className="hover:text-white transition-colors">
                  AI Mock Interview Coach
                </Link>
              </li>
              <li>
                <Link href="/chatbot" className="hover:text-white transition-colors">
                  Career AI Mentor
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="hover:text-white transition-colors">
                  Skill Roadmaps
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-4 font-outfit">Stay Informed</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Get monthly insights on high-demand tech skills, market salary shifts, and hiring trends.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
              <input
                type="email"
                placeholder="you@domain.com"
                required
                className="w-full px-3.5 py-2 text-xs bg-slate-800/90 text-white rounded-l-xl focus:outline-none focus:ring-1 focus:ring-purple-500 border border-slate-700 placeholder-slate-500"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-[#635BFF] text-white text-xs font-semibold rounded-r-xl hover:bg-[#5146E5] transition-colors shrink-0"
              >
                Join
              </button>
            </form>
            <div className="flex items-center space-x-2 text-xs text-slate-400 pt-1">
              <Mail className="h-3.5 w-3.5 text-slate-500" />
              <span>support@futuroai.com</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>&copy; {new Date().getFullYear()} Futuro AI Platform. Built for the next generation of builders.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
