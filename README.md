# Futuro AI — Intelligent Career, Learning & Productivity Platform

**Futuro AI** is an AI-powered career intelligence, learning discovery, and productivity ecosystem built with **Next.js App Router, React 19, TypeScript, Tailwind CSS v4, Express, and Gemini AI**.

---

## 🌟 Key Features

### 1. 🎯 Career Intelligence
- **Career Explorer (`/explorer`)**: Comprehensive catalog of 50+ modern career paths with salary compensation bands, demand growth meters, and prerequisite skills.
- **Career Comparison (`/comparison`)**: Side-by-side comparison matrix for salary trajectories, learning curves, and skills overlap.
- **Interactive Career Simulator (`/career-simulator`)**: Workplace dilemma roleplay HUD tracking Technical, Leadership, Network, and Stress metrics.
- **Career News Feed (`/feed`)**: Real-time personalized industry updates, hiring shifts, and breakthrough technology signals.
- **Academic Marksheet Analyzer (`/marksheet-analysis`)**: Transcript parser identifying strong/weak subject clusters with career mapping.

### 2. 🤖 AI Tools Suite
- **AI Project Generator (`/ai-tools/project-generator`)**: Context-aware portfolio blueprint generator providing recommended tech stacks, architecture topologies, and step-by-step implementation tasks.
- **AI Career Mentor (`/chatbot`)**: 24/7 intelligent conversational advisor for roadmap planning and interview coaching.
- **Resume ATS Analyzer (`/resume`)**: PDF parser computing ATS match scores, missing keywords, and formatting recommendations.
- **Smart Resume Builder (`/resume-builder`)**: Interactive editor with real-time A4 PDF paper preview and print layout controls.
- **AI Mock Interview Coach (`/interview`)**: Interactive HR, Technical, and Behavioral drills with STAR-framework scoring breakdowns.

### 3. 📚 Learning Hub (`/learning`)
- **eBooks Library (`/learning/ebooks`)**: Internet Archive & Open Library integration with search, genre filters, reading progress tracker, and bookmarks.
- **Course Discovery Engine (`/learning/courses`)**: Normalized multi-provider aggregator for NPTEL / SWAYAM, Coursera, AWS Educate, Google Cloud Skills Boost, and YouTube.
- **Certification Hub (`/learning/certifications`)**: 30+ verified industry credentials (AWS, Google Cloud, Microsoft, Cisco, CompTIA, Meta, NVIDIA, Docker) with official verification tools.
- **Learning Roadmap Navigator (`/roadmap`)**: Guided monthly syllabus with 1-click dashboard synchronization.

### 4. 🏛️ Opportunities
- **College Discovery & Comparison (`/colleges`)**: Comprehensive catalog of 45+ premier institutions (IITs, NITs, IIITs, BITS, Government, Private, and Global Universities) with multi-college side-by-side comparison matrices, verified NIRF rankings, and virtual tours.
- **Mentor Discovery (`/mentors`)**: Verified professional directory with AI compatibility matching and direct booking requests.

### 5. 📅 Productivity & Platform
- **AI Calendar (`/calendar`)**: Interactive study calendar with Gemini-powered 30-day preparation schedule synthesis, today's focus task checklists, and streak tracking.
- **Global Search Modal (`Cmd+K`)**: Unified cross-catalog search across Books, Courses, Certifications, Mentors, Colleges, and Careers.
- **Admin Console (`/admin`)**: Operations hub with real-time registration trend charts and role popularity analytics.

---

## 🛠️ Architecture & Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lucide Icons, Recharts |
| **Backend** | Node.js, Express, TypeScript, Mongoose, Helmet, CORS, Express Rate Limit |
| **AI / ML** | Google Gemini 2.5 Flash API, OpenLibrary API, YouTube Data API v3 |
| **Database** | MongoDB / In-memory verified fallback engine |

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js >= 20.x
- npm or yarn

### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
