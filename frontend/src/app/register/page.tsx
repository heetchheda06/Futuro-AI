'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Brain, User, Mail, Lock, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';

export default function RegisterPage() {
  const { register, googleLogin } = useAuth();
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'student' | 'professional'>('student');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await register(name, email, password, role);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Registration failed. Please check inputs.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    try {
      await googleLogin(
        'heet.demo@gmail.com',
        'Heet Demo User',
        'google-mock-id-12345',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80'
      );
      router.push('/dashboard');
    } catch (err: any) {
      setError('Google Sign-In failed.');
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full p-8 rounded-2xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
          {/* Subtle top brand accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-[#635BFF] to-cyan-500" />

          <div className="text-center mb-8 pt-2">
            <span className="inline-flex p-3 rounded-2xl bg-purple-50 text-[#635BFF] mb-3 shadow-sm">
              <Brain className="h-7 w-7" />
            </span>
            <h1 className="font-outfit text-2xl font-extrabold tracking-tight text-slate-900">Create an Account</h1>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Embark on an AI-guided professional career path.
            </p>
          </div>

          {error && (
            <div className="flex items-center space-x-2 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs mb-5">
              <ShieldAlert className="h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Rivera"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#635BFF] text-sm text-slate-900 placeholder-slate-400 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@example.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#635BFF] text-sm text-slate-900 placeholder-slate-400 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#635BFF] text-sm text-slate-900 placeholder-slate-400 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">I am a</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setRole('student')}
                  className={`py-2.5 rounded-xl font-semibold text-xs border transition-all cursor-pointer ${
                    role === 'student'
                      ? 'border-[#635BFF] bg-purple-50 text-[#635BFF] shadow-sm'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  Student
                </button>
                <button
                  type="button"
                  onClick={() => setRole('professional')}
                  className={`py-2.5 rounded-xl font-semibold text-xs border transition-all cursor-pointer ${
                    role === 'professional'
                      ? 'border-[#635BFF] bg-purple-50 text-[#635BFF] shadow-sm'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  Professional
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex justify-center items-center space-x-2 py-3 bg-[#635BFF] hover:bg-[#5146E5] disabled:opacity-50 text-white font-semibold rounded-xl shadow-md shadow-indigo-500/15 active:scale-98 transition-all text-sm cursor-pointer mt-3"
            >
              <span>{loading ? 'Creating Account...' : 'Register'}</span>
              {!loading && <ArrowRight className="h-4 w-4" />}
            </button>
          </form>

          <div className="relative my-6 text-center">
            <hr className="border-slate-200" />
            <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-xs text-slate-400">
              or register with
            </span>
          </div>

          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full py-2.5 border border-slate-200 bg-white hover:bg-slate-50 rounded-xl font-semibold text-xs text-slate-700 flex items-center justify-center space-x-2.5 cursor-pointer transition-all shadow-sm active:scale-98"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.69c-.29 1.5-.14 3.01-1.04 4.19v3.48h6.63c3.88-3.57 6.46-8.83 6.46-14.52z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-6.63-3.48c-1.84 1.25-4.19 1.99-6.93 1.99-5.33 0-9.84-3.6-11.45-8.45H.28v3.58C3.28 20.31 8.24 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M.55 11.15c-.41-1.25-.64-2.58-.64-3.95s.23-2.7.64-3.95V.28H.28C-1.02 2.87-1.78 5.86-1.78 9s.76 6.13 2.06 8.72l6.27-4.85-6-1.72z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 8.24 0 3.28 3.69.28 9.38l6.27 4.85c1.61-4.85 6.12-8.48 11.45-8.48z"
              />
            </svg>
            <span>Register with Google</span>
          </button>

          <p className="text-center text-xs text-slate-500 mt-6">
            Already have an account?{' '}
            <Link href="/login" className="text-[#635BFF] hover:underline font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
