'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export interface UserType {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'professional' | 'admin';
  targetCareer?: string;
  currentSkills: string[];
  experienceLevel?: string;
  profileImage?: string;
  education?: {
    degree?: string;
    field?: string;
    school?: string;
    gradYear?: number;
  };
}

interface AuthContextType {
  user: UserType | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role?: string) => Promise<void>;
  googleLogin: (email: string, name: string, googleId: string, imageUrl?: string) => Promise<void>;
  logout: () => void;
  updateProfile: (profileData: Partial<UserType>) => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  // Helper to make fetch calls with authorization token
  const fetchWithAuth = async (endpoint: string, options: RequestInit = {}) => {
    const activeToken = token || localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      ...(activeToken ? { 'Authorization': `Bearer ${activeToken}` } : {}),
      ...(options.headers || {})
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.message || 'API request failed');
    }

    return response.json();
  };

  useEffect(() => {
    const verifyToken = async () => {
      const savedToken = localStorage.getItem('token');
      if (savedToken) {
        try {
          setToken(savedToken);
          // Load user details
          const response = await fetch(`${API_BASE_URL}/auth/me`, {
            headers: { 'Authorization': `Bearer ${savedToken}` }
          });

          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
          } else {
            // Token invalid or expired
            localStorage.removeItem('token');
            setToken(null);
            setUser(null);
          }
        } catch (error) {
          console.error('Session recovery failed. Offline fallback mode.', error);
          // Recover with a dummy offline session for testing
          const localUser = localStorage.getItem('offline_user');
          if (localUser) {
            setUser(JSON.parse(localUser));
          }
        }
      }
      setLoading(false);
    };

    verifyToken();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const data = await fetchWithAuth('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });

      localStorage.setItem('token', data.token);
      setToken(data.token);
      setUser(data.user);
      router.push('/dashboard');
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const register = async (name: string, email: string, password: string, role: string = 'student') => {
    try {
      const data = await fetchWithAuth('/auth/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, password, role })
      });

      localStorage.setItem('token', data.token);
      setToken(data.token);
      setUser(data.user);
      router.push('/dashboard');
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const googleLogin = async (email: string, name: string, googleId: string, imageUrl?: string) => {
    try {
      const data = await fetchWithAuth('/auth/google', {
        method: 'POST',
        body: JSON.stringify({ email, name, googleId, imageUrl })
      });

      localStorage.setItem('token', data.token);
      setToken(data.token);
      setUser(data.user);
      router.push('/dashboard');
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('offline_user');
    setToken(null);
    setUser(null);
    router.push('/');
  };

  const updateProfile = async (profileData: Partial<UserType>) => {
    try {
      const data = await fetchWithAuth('/auth/profile', {
        method: 'PUT',
        body: JSON.stringify(profileData)
      });
      setUser(data.user);
    } catch (error) {
      // Local offline fallback update
      if (user) {
        const updated = { ...user, ...profileData };
        setUser(updated);
        localStorage.setItem('offline_user', JSON.stringify(updated));
      }
      console.warn('API Profile update failed. Saved changes locally.', error);
    }
  };

  const refreshProfile = async () => {
    try {
      const userData = await fetchWithAuth('/auth/me');
      setUser(userData);
    } catch (error) {
      console.error('Failed to refresh user profile data.', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        register,
        googleLogin,
        logout,
        updateProfile,
        refreshProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
