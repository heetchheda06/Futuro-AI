import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import { AuthProvider } from '../context/AuthContext';
import { ThemeProvider } from '../context/ThemeContext';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Futuro AI | Your AI-Powered Career Intelligence Mentor',
  description: 'Discover your ideal career path, identify skill gaps, generate custom learning roadmaps, analyze resumes, and practice mock interviews using Artificial Intelligence.',
  openGraph: {
    title: 'Futuro AI - AI-Powered Career Intelligence Mentor',
    description: 'Find your dream career path with custom AI roadmaps, ATS reviews, and mock coaching.',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans h-full bg-[#F8FAFC] text-slate-900 antialiased selection:bg-purple-100 selection:text-indigo-700`}>
        <ThemeProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
