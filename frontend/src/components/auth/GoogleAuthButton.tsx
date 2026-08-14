'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { auth, provider, GOOGLE_CLIENT_ID } from '../../lib/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

interface GoogleAuthButtonProps {
  mode?: 'login' | 'register';
  onError?: (message: string) => void;
  className?: string;
}

declare global {
  interface Window {
    google?: any;
  }
}

export const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({
  mode = 'login',
  onError,
  className = ''
}) => {
  const { googleLogin } = useAuth();
  const [loading, setLoading] = useState(false);

  // Load Google Identity Services SDK as a fail-safe
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.google?.accounts?.id) return;

    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const parseJwt = (token: string) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (e) {
      return null;
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    if (onError) onError('');

    try {
      // Method 1: Try Firebase Auth popup
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;

      if (user && user.email) {
        console.log("Successfully signed in via Firebase Auth:", user.displayName);
        await googleLogin(
          user.email,
          user.displayName || user.email.split('@')[0],
          user.uid,
          user.photoURL || undefined
        );
        return;
      }
    } catch (firebaseErr: any) {
      console.warn("Firebase popup auth note:", firebaseErr.message || firebaseErr);

      if (firebaseErr.code === 'auth/popup-closed-by-user' || firebaseErr.code === 'auth/cancelled-popup-request') {
        if (onError) onError('Google Sign-In popup was closed before completing authentication.');
        setLoading(false);
        return;
      }

      // Method 2: Fallback to Google Identity Services (GIS) OAuth Web Client ID
      if (typeof window !== 'undefined' && window.google?.accounts?.id) {
        try {
          window.google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_ID,
            callback: async (response: any) => {
              if (response.credential) {
                const payload = parseJwt(response.credential);
                if (payload && payload.email) {
                  console.log("Successfully signed in via Google Identity Services:", payload.name);
                  await googleLogin(
                    payload.email,
                    payload.name || payload.email.split('@')[0],
                    payload.sub || 'g_' + Date.now(),
                    payload.picture || undefined
                  );
                }
              }
            }
          });

          window.google.accounts.id.prompt((notification: any) => {
            if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
              if (onError) {
                onError('Please allow Google Account popups or check browser permissions.');
              }
            }
          });
          return;
        } catch (gisErr: any) {
          console.error("GIS Sign-In error:", gisErr);
        }
      }

      let userMsg = firebaseErr.message || 'Google Authentication failed. Please try again.';
      if (firebaseErr.code === 'auth/popup-blocked') {
        userMsg = 'Google Sign-In popup was blocked by your browser. Please allow popups for this site.';
      } else if (firebaseErr.code === 'auth/unauthorized-domain') {
        userMsg = 'Please authorize your website domain in Firebase Console -> Authentication -> Settings -> Authorized domains.';
      }

      if (onError) onError(userMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleSignIn}
      disabled={loading}
      className={`w-full py-2.5 px-4 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold transition-all shadow-2xs flex items-center justify-center space-x-2.5 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    >
      {loading ? (
        <div className="w-4 h-4 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
      ) : (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          />
        </svg>
      )}
      <span>
        {loading
          ? 'Connecting Google Account...'
          : mode === 'login'
          ? 'Sign in with Google'
          : 'Sign up with Google'}
      </span>
    </button>
  );
};
