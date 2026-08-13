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
  title: 'Futuro AI — Your AI-Powered Career Operating System',
  description: 'Futuro AI transforms your skills, ambition, and career goals into an intelligent, actionable roadmap with AI career navigation, resume intelligence, and mock interview coaching.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Futuro AI — Your AI-Powered Career Operating System',
    description: 'Personalized career roadmaps, skill gap intelligence, resume analysis, and realistic AI mock interviews.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light h-full scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans h-full bg-[#F8FAFC] text-slate-900 antialiased selection:bg-indigo-100 selection:text-indigo-900`}>
        <ThemeProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
