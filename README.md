# 🚀 Futuro AI — Intelligent Career, Learning & Productivity Ecosystem

[![Live Demo](https://img.shields.io/badge/Live_Demo-futuro--ai--8ef47.web.app-4F46E5?style=for-the-badge&logo=firebase)](https://futuro-ai-8ef47.web.app)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Futuro--AI-181717?style=for-the-badge&logo=github)](https://github.com/heetchheda06/Futuro-AI)
[![Backend API](https://img.shields.io/badge/Backend_API-Render-46E3B7?style=for-the-badge&logo=render)](https://futuro-ai-backend.onrender.com)

**Futuro AI** is a next-generation, AI-driven career guidance, skill analytics, learning discovery, and job preparation ecosystem. Built with **Next.js App Router, React 19, TypeScript, Tailwind CSS, Node.js Express, Firebase Authentication, and Google Gemini AI**, Futuro AI empowers students and professionals to discover target career trajectories, generate ATS-compliant resumes, practice live mock interviews, and build custom learning roadmaps.

---

## 🌐 Live Platform & Links

- 🔗 **Live Hosted Web Application**: [https://futuro-ai-8ef47.web.app](https://futuro-ai-8ef47.web.app)
- 💻 **GitHub Repository**: [https://github.com/heetchheda06/Futuro-AI](https://github.com/heetchheda06/Futuro-AI)
- ⚙️ **Production Backend API Server**: [https://futuro-ai-backend.onrender.com](https://futuro-ai-backend.onrender.com)

---

## 👥 Team

| Member | Role | College |
| :--- | :--- | :--- |
| **Heet Chheda** | Full Stack Developer | MCT Rajiv Gandhi Institute of Technology |
| **Shardul Dalvi** | Backend Developer | MCT Rajiv Gandhi Institute of Technology |
| **Aryan Keni** | Frontend Developer | MCT Rajiv Gandhi Institute of Technology |
| **Falgun Patel** | UI/UX & Documentation | Universal College of Engineering, Mumbai |

---

## 🌟 Key Features

### 1. 🛠️ AI Resume Builder & ATS Analyzer
- **Dual-Mode System**: Switch seamlessly between **Build Resume** and **Analyze ATS** modes.
- **AI Summary & Bullet Generator**: Generate professional executive summaries and high-impact action bullets powered by Gemini AI.
- **5 Accent Color Themes**: Personalize resume designs with `indigo`, `teal`, `emerald`, `rose`, or `slate` themes.
- **Real-Time A4 PDF Export**: Instant `@media print` A4 document preview and 1-click PDF download.

### 2. 🔑 Authentic Google Authentication
- **OAuth 2.0 Integration**: Built with Firebase Web SDK (`GoogleAuthProvider`) and explicit account picker parameters (`prompt: 'select_account consent'`).
- **Secure JWT Session Management**: Signed JWT tokens stored in HTTP headers with local session persistent syncing.

### 3. 🤖 Futuro AI Copilot
- **Live Conversational Intelligence**: Powered by Google Gemini API (`gemini-1.5-flash`) for real-time, human-like career advice.
- **Executive Formatting**: Clean custom markdown parser rendering bold titles, indigo code pills, and numbered lists without raw syntax characters.

### 4. 🎯 Career Intelligence & Skill Gap Analytics
- **Career Explorer (`/explorer`)**: Database of 50+ modern career paths with salary bands, demand growth meters, and skill prerequisites.
- **Career Comparison (`/comparison`)**: Side-by-side matrix comparing salary trajectories, learning curves, and skills overlap.
- **Interactive Career Simulator (`/career-simulator`)**: Workplace dilemma roleplay HUD tracking Technical, Leadership, Network, and Stress metrics.

### 5. 🎙️ AI Mock Interview Coach (`/interview-prep`)
- **Multi-Category Drills**: HR, Technical, and Behavioral mock interview scenarios.
- **STAR-Framework Scoring**: Immediate AI scoring feedback on confidence, technical articulation, and structured delivery.

### 6. 📚 Learning Hub & Opportunity Finder
- **eBooks Library (`/learning/ebooks`)**: Open Library integration with search, reading progress tracker, and bookmarks.
- **Course & Certification Finder (`/learning/courses`)**: Multi-provider catalog aggregating NPTEL/SWAYAM, Coursera, AWS Educate, Google Cloud, and YouTube.
- **College Discovery (`/colleges`)**: 45+ premier institutions (IITs, NITs, BITS, Private, and Global Universities) with NIRF rankings and comparison matrices.

---

## 📁 Project Architecture & Folder Structure

```
Futuro-AI/
├── frontend/                   # Next.js 16 App Router Frontend
│   ├── src/
│   │   ├── app/                # App Router Pages & Layouts
│   │   │   ├── resume/         # AI Resume Builder & Real-time A4 PDF Exporter
│   │   │   ├── login/          # Authentic Firebase Google OAuth Login
│   │   │   ├── register/       # User Registration with Google OAuth
│   │   │   ├── dashboard/      # Personalized Executive Career Dashboard
│   │   │   ├── explorer/       # 50+ Career Catalog Explorer
│   │   │   ├── assessment/     # AI Skill & Personality Compatibility Tester
│   │   │   ├── interview-prep/ # Interactive AI Interview Coach
│   │   │   ├── roadmap/        # Dynamic Skill Learning Roadmap
│   │   │   ├── ai-career-hub/  # Unified AI Tools Dashboard
│   │   │   └── ...             # eBooks, Courses, Mentors, Colleges, Calendar
│   │   ├── components/         # Reusable Component Architecture
│   │   │   ├── auth/           # Google Auth Button & Login Forms
│   │   │   ├── shell/          # TopBar, Navigation, Futuro Copilot, CommandPalette
│   │   │   └── ui/             # Design System Tokens, Buttons, Cards, Badges
│   │   ├── context/            # Global Authentication & Session Context
│   │   └── lib/                # Firebase SDK & Client Utilities
│   ├── public/                 # Static Assets & Icons
│   ├── firebase.json           # Firebase Hosting Configuration
│   └── next.config.ts          # Next.js Build & Export Settings
│
├── backend/                    # Node.js & Express API Backend
│   ├── src/
│   │   ├── config/             # MongoDB Connection & Initial Data Seeders
│   │   ├── middleware/         # JWT Authentication & Security Rate Limiters
│   │   ├── models/             # Mongoose Schemas (Users, Careers, Chats, Resumes)
│   │   ├── routes/             # Express API Endpoints (/api/auth, /api/resumes, /api/chats)
│   │   ├── services/           # Google Gemini AI Service & Open Library Integrations
│   │   └── server.ts           # Express Application Entry Point
│   └── package.json            # Backend Dependencies & TypeScript Scripts
│
├── firebase.json               # Root Firebase Hosting Configuration
├── render.yaml                 # Render Infrastructure-as-Code Deployment Config
└── README.md                   # Complete Platform Documentation
```

---

## 🛠️ Tech Stack & Technologies

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | Next.js 16 (App Router), React 19, TypeScript |
| **Styling & UI** | Tailwind CSS v4, Lucide Icons, Framer Motion, Recharts |
| **Backend API** | Node.js, Express, TypeScript, Mongoose, Helmet, CORS |
| **Authentication** | Firebase Auth SDK (`GoogleAuthProvider`), JWT Tokens |
| **Artificial Intelligence** | Google Gemini API (`gemini-1.5-flash` / `gemini-2.0-flash`) |
| **Database** | MongoDB Atlas Cloud Database |
| **Hosting & Deployment** | Firebase Hosting (Frontend), Render Web Services (Backend) |

---

## 🚀 Local Development Setup

### 1. Prerequisites
- Node.js >= 20.x
- Git

### 2. Clone Repository
```bash
git clone https://github.com/heetchheda06/Futuro-AI.git
cd Futuro-AI
```

### 3. Backend Setup
```bash
cd backend
npm install
npm run dev
```
*Backend will run locally on `http://localhost:5000`.*

### 4. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
*Frontend will run locally on `http://localhost:3000`.*

---

## 📄 License & Attribution

Developed by the **Futuro AI Team** (Heet Chheda, Shardul Dalvi, Aryan Keni, Falgun Patel).
All rights reserved.
