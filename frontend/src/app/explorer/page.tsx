'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Briefcase, TrendingUp, Award, Clock, AlertTriangle, 
  ChevronRight, Compass, Sparkles, Star, BookOpen, CheckCircle2,
  ArrowRight, ShieldCheck, Heart, Layers, Cpu, Code, DollarSign
} from 'lucide-react';
import { Button } from '../../components/ui/Button';

interface ComprehensiveCareer {
  id: string;
  title: string;
  category: string;
  description: string;
  salary: { min: number; max: number; avg: number; currency: string };
  growthRate: number;
  demand: 'High' | 'Medium' | 'Low';
  typicalWork: string;
  requiredSkills: string[];
  recommendedProjects: string[];
  learningPath: string[];
}

export default function CareerExplorer() {
  const { user, token, updateProfile } = useAuth();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCareer, setSelectedCareer] = useState<ComprehensiveCareer | null>(null);
  const [toastMessage, setToastMessage] = useState('');

  const categories = [
    'All',
    'Technology',
    'AI & Data',
    'Cybersecurity',
    'Business & Management',
    'Design & Creative',
    'Finance',
    'Healthcare',
    'Marketing',
    'Engineering',
    'Science & Research',
    'Education',
    'Entrepreneurship'
  ];

  const allCareers: ComprehensiveCareer[] = [
    // TECHNOLOGY
    {
      id: 'tech_1',
      title: 'Software Engineer',
      category: 'Technology',
      description: 'Architect, code, and deploy scalable software systems, web services, and backend application pipelines.',
      salary: { min: 8, max: 18, avg: 13, currency: 'INR' },
      growthRate: 25,
      demand: 'High',
      typicalWork: 'Writing backend APIs, refactoring codebases, building frontend components, and optimizing database queries.',
      requiredSkills: ['JavaScript', 'TypeScript', 'Python', 'React', 'Node.js', 'SQL', 'Git', 'System Design'],
      recommendedProjects: ['E-Commerce API Platform', 'Full Stack Task OS', 'Realtime Chat Service'],
      learningPath: ['Programming Fundamentals', 'Data Structures & Algorithms', 'Full Stack Frameworks', 'System Architecture']
    },
    {
      id: 'tech_2',
      title: 'Full Stack Developer',
      category: 'Technology',
      description: 'Build complete web applications end-to-end, managing client-side interfaces and server-side databases.',
      salary: { min: 7, max: 16, avg: 11.5, currency: 'INR' },
      growthRate: 28,
      demand: 'High',
      typicalWork: 'Connecting REST/GraphQL APIs with React/Next.js interfaces, database schema design, and server deployment.',
      requiredSkills: ['React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
      recommendedProjects: ['SaaS Analytics Dashboard', 'Social Platform MVP', 'Headless CMS Engine'],
      learningPath: ['HTML/CSS & Modern JS', 'Frontend Frameworks', 'Backend Development & DBs', 'CI/CD Deployment']
    },
    {
      id: 'tech_3',
      title: 'Backend Developer',
      category: 'Technology',
      description: 'Focus on core server logic, microservices, databases, authentication security, and high-concurrency architecture.',
      salary: { min: 8, max: 18, avg: 12.5, currency: 'INR' },
      growthRate: 24,
      demand: 'High',
      typicalWork: 'Designing DB schemas, writing optimized SQL/NoSQL queries, caching with Redis, and managing API endpoints.',
      requiredSkills: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes'],
      recommendedProjects: ['High-Throughput Payment Service', 'Rate-Limited API Gateway', 'Distributed Cache Engine'],
      learningPath: ['Core Computer Science', 'Database Internals', 'Microservice Architecture', 'Cloud Infrastructure']
    },
    {
      id: 'tech_4',
      title: 'Frontend Developer',
      category: 'Technology',
      description: 'Craft responsive, pixel-perfect user interfaces with intuitive web experiences, smooth state management, and modern animations.',
      salary: { min: 6, max: 14, avg: 10, currency: 'INR' },
      growthRate: 22,
      demand: 'High',
      typicalWork: 'Building component libraries, integrating REST APIs, optimizing web performance, and state management.',
      requiredSkills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'CSS/Tailwind', 'State Management', 'Web Vitals'],
      recommendedProjects: ['Design System UI Kit', 'Collaborative Whiteboard App', 'Interactive Portfolio'],
      learningPath: ['Semantic HTML & CSS Grid', 'Advanced JavaScript', 'React Ecosystem', 'Performance Optimization']
    },
    {
      id: 'tech_5',
      title: 'DevOps Engineer',
      category: 'Technology',
      description: 'Bridge software engineering and operational infrastructure with automated CI/CD pipelines, container orchestration, and uptime monitoring.',
      salary: { min: 9, max: 22, avg: 15, currency: 'INR' },
      growthRate: 30,
      demand: 'High',
      typicalWork: 'Configuring Terraform scripts, managing Kubernetes clusters, setting up GitHub Actions pipelines, and uptime metrics.',
      requiredSkills: ['Linux', 'Docker', 'Kubernetes', 'Terraform', 'AWS/GCP', 'CI/CD', 'Python/Bash'],
      recommendedProjects: ['GitOps Kubernetes Pipeline', 'Infrastructure-as-Code Setup', 'Zero-Downtime Deployment Lab'],
      learningPath: ['Linux & Networking', 'Containerization', 'Cloud Infrastructure', 'Automation & Monitoring']
    },

    // AI & DATA
    {
      id: 'ai_1',
      title: 'AI Engineer',
      category: 'AI & Data',
      description: 'Design and deploy artificial intelligence models, Neural Networks, Large Language Model (LLM) agents, and deep learning pipelines.',
      salary: { min: 12, max: 28, avg: 19, currency: 'INR' },
      growthRate: 48,
      demand: 'High',
      typicalWork: 'Fine-tuning foundation models, building Retrieval-Augmented Generation (RAG) systems, and optimizing inference speeds.',
      requiredSkills: ['Python', 'PyTorch', 'Transformers', 'LLMs', 'RAG', 'Vector Databases', 'FastAPI', 'Docker'],
      recommendedProjects: ['Enterprise AI RAG Copilot', 'Multi-Agent Code Reviewer', 'Custom Fine-Tuned Model Engine'],
      learningPath: ['Advanced Python & Math', 'Machine Learning Foundations', 'Deep Learning & NLP', 'Generative AI & Agentic Systems']
    },
    {
      id: 'ai_2',
      title: 'Data Scientist',
      category: 'AI & Data',
      description: 'Analyze complex unstructured data, perform predictive modeling, design experiments, and uncover strategic quantitative insights.',
      salary: { min: 10, max: 24, avg: 16, currency: 'INR' },
      growthRate: 35,
      demand: 'High',
      typicalWork: 'Statistical analysis, feature engineering, training ML classification models, and presenting data stories to stakeholders.',
      requiredSkills: ['Python', 'SQL', 'Machine Learning', 'Statistics', 'Pandas/NumPy', 'Scikit-Learn', 'Data Visualization'],
      recommendedProjects: ['Customer Churn Prediction Engine', 'E-Commerce Recommendation System', 'Fraud Detection Model'],
      learningPath: ['SQL & Data Cleaning', 'Applied Probability & Stats', 'Machine Learning Algorithms', 'Model Evaluation & MLOps']
    },
    {
      id: 'ai_3',
      title: 'Data Analyst',
      category: 'AI & Data',
      description: 'Transform raw data into actionable dashboards, KPIs, and reports to guide key product and business operations decisions.',
      salary: { min: 6, max: 13, avg: 9, currency: 'INR' },
      growthRate: 26,
      demand: 'High',
      typicalWork: 'Writing complex SQL queries, generating Tableau/PowerBI visual dashboards, cohort analysis, and trend forecasting.',
      requiredSkills: ['SQL', 'Python/R', 'Excel', 'PowerBI', 'Tableau', 'Data Visualization', 'Business Analytics'],
      recommendedProjects: ['Sales Revenue BI Dashboard', 'User Retention Cohort Analysis', 'Market Basket Analysis'],
      learningPath: ['SQL Mastery', 'Spreadsheet Analytics', 'BI Visualization Tools', 'Python Data Processing']
    },
    {
      id: 'ai_4',
      title: 'Machine Learning Engineer',
      category: 'AI & Data',
      description: 'Productionize ML algorithms into robust, low-latency microservices that scale efficiently for millions of inference queries.',
      salary: { min: 12, max: 26, avg: 18, currency: 'INR' },
      growthRate: 42,
      demand: 'High',
      typicalWork: 'Building ML pipelines, feature stores, model monitoring systems, and optimizing GPU inference throughput.',
      requiredSkills: ['Python', 'C++', 'PyTorch', 'TensorFlow', 'MLOps', 'Kubeflow', 'Docker', 'System Design'],
      recommendedProjects: ['Realtime Recommendation API', 'Automated ML Model Retraining Pipeline', 'Computer Vision Edge Deployment'],
      learningPath: ['Software Engineering Fundamentals', 'Machine Learning Models', 'Deep Learning Architectures', 'MLOps & Scaling']
    },

    // CYBERSECURITY
    {
      id: 'sec_1',
      title: 'Cybersecurity Analyst',
      category: 'Cybersecurity',
      description: 'Monitor threat vectors, analyze security incident logs, protect network infrastructures, and prevent system vulnerability breaches.',
      salary: { min: 8, max: 18, avg: 12.5, currency: 'INR' },
      growthRate: 34,
      demand: 'High',
      typicalWork: 'SIEM log monitoring, threat hunting, vulnerability scanning, patch auditing, and incident response.',
      requiredSkills: ['Networking', 'Linux', 'Firewalls', 'SIEM (Splunk)', 'Ethical Hacking', 'Wireshark', 'Security+'],
      recommendedProjects: ['SOC SIEM Lab Deployment', 'Vulnerability Assessment Audit Report', 'Network Intrusion Detection System'],
      learningPath: ['Networking Foundations', 'Linux Administration', 'Threat Hunting & SIEM', 'Ethical Hacking & Audit']
    },
    {
      id: 'sec_2',
      title: 'Ethical Hacker',
      category: 'Cybersecurity',
      description: 'Simulate cyberattacks on web applications, networks, and cloud assets to identify critical security flaws before malicious hackers exploit them.',
      salary: { min: 9, max: 22, avg: 15, currency: 'INR' },
      growthRate: 36,
      demand: 'High',
      typicalWork: 'Penetration testing, exploit development, web application security scanning, and detailed remediation reports.',
      requiredSkills: ['Python/Bash', 'Metasploit', 'Burp Suite', 'Web Penetration Testing', 'Network Exploitation', 'OSCP'],
      recommendedProjects: ['Vulnerable Web App Exploitation Lab', 'Automated Reconnaissance Script', 'CTF Challenge Suite'],
      learningPath: ['Programming & Scripting', 'Web Architecture', 'Penetration Testing Frameworks', 'Advanced Exploit Analysis']
    },

    // BUSINESS & MANAGEMENT
    {
      id: 'biz_1',
      title: 'Product Manager',
      category: 'Business & Management',
      description: 'Define product vision, lead feature roadmaps, coordinate engineering sprints, and drive product-market fit.',
      salary: { min: 14, max: 32, avg: 22, currency: 'INR' },
      growthRate: 22,
      demand: 'High',
      typicalWork: 'Writing PRDs (Product Requirement Docs), user interviews, analyzing funnel analytics, and sprint planning.',
      requiredSkills: ['Product Strategy', 'Agile/Scrum', 'User Research', 'Analytics (SQL)', 'Wireframing', 'Roadmapping'],
      recommendedProjects: ['0-to-1 Product Spec & Prototype', 'Feature AB Test Experimentation Plan', 'SaaS Growth Funnel Audit'],
      learningPath: ['User Experience Basics', 'Product Analytics & SQL', 'Agile Product Lifecycle', 'Business Strategy & Growth']
    },
    {
      id: 'biz_2',
      title: 'Business Analyst',
      category: 'Business & Management',
      description: 'Bridge business objectives and technical requirements by analyzing operational workflows, financial projections, and system specs.',
      salary: { min: 7, max: 15, avg: 10.5, currency: 'INR' },
      growthRate: 18,
      demand: 'Medium',
      typicalWork: 'Gathering stakeholder requirements, process flow mapping, financial modeling, and data-driven recommendations.',
      requiredSkills: ['SQL', 'Excel', 'Process Mapping', 'Data Modeling', 'Stakeholder Management', 'PowerBI'],
      recommendedProjects: ['Business Process Automation Blueprint', 'Supply Chain Optimization Analysis', 'Market Feasibility Study'],
      learningPath: ['Excel & Data Analysis', 'Requirements Engineering', 'Business Process Modeling', 'BI & Reporting']
    },

    // DESIGN & CREATIVE
    {
      id: 'des_1',
      title: 'UI/UX Designer',
      category: 'Design & Creative',
      description: 'Create beautiful, accessible, and highly intuitive digital interface designs, interactive prototypes, and design systems.',
      salary: { min: 7, max: 16, avg: 11, currency: 'INR' },
      growthRate: 20,
      demand: 'High',
      typicalWork: 'Building Figma wireframes, interactive component design systems, conducting usability tests, and prototyping.',
      requiredSkills: ['Figma', 'Wireframing', 'User Research', 'Prototyping', 'Design Systems', 'Visual Design', 'Typography'],
      recommendedProjects: ['Mobile App Design System', 'FinTech Dashboard Redesign', 'Accessible E-Commerce Experience'],
      learningPath: ['Visual Design Principles', 'User Research & Personas', 'Figma Mastery', 'Design System Architecture']
    },

    // FINANCE
    {
      id: 'fin_1',
      title: 'Financial Analyst',
      category: 'Finance',
      description: 'Evaluate investment opportunities, build financial valuation models, analyze corporate statements, and assess risk metrics.',
      salary: { min: 8, max: 18, avg: 12.5, currency: 'INR' },
      growthRate: 18,
      demand: 'Medium',
      typicalWork: 'Discounted cash flow (DCF) modeling, budget forecasting, industry trend research, and quarterly earnings reporting.',
      requiredSkills: ['Financial Modeling', 'Excel / Financial Functions', 'Valuation (DCF)', 'Accounting', 'Python/R', 'Financial Reporting'],
      recommendedProjects: ['Public Equity Valuation Model', 'Corporate Capital Budgeting Analysis', 'FinTech Portfolio Optimization'],
      learningPath: ['Accounting Standards', 'Corporate Finance', 'Excel Financial Modeling', 'Quantitative Finance & Python']
    },

    // HEALTHCARE
    {
      id: 'health_1',
      title: 'Health Informatics Specialist',
      category: 'Healthcare',
      description: 'Optimize electronic health records (EHR), clinical data pipelines, and healthcare AI tools to improve patient care outcomes.',
      salary: { min: 7, max: 16, avg: 11, currency: 'INR' },
      growthRate: 26,
      demand: 'High',
      typicalWork: 'Structuring clinical database schemas, compliance auditing (HIPAA), and integrating medical analytics tools.',
      requiredSkills: ['Medical Data Standards (HL7/FHIR)', 'SQL', 'Healthcare Analytics', 'Python', 'Biostatistics'],
      recommendedProjects: ['EHR Clinical Data Dashboard', 'Patient Readmission Prediction Model', 'Healthcare Data Integration Pipeline'],
      learningPath: ['Healthcare Systems Foundations', 'Medical Informatics & Standards', 'Data Analysis with SQL', 'Healthcare Predictive Modeling']
    },

    // MARKETING
    {
      id: 'mkt_1',
      title: 'Digital Marketing Specialist',
      category: 'Marketing',
      description: 'Execute multi-channel digital acquisition strategies, SEO optimization, social growth campaigns, and performance marketing pipelines.',
      salary: { min: 5, max: 12, avg: 8, currency: 'INR' },
      growthRate: 16,
      demand: 'Medium',
      typicalWork: 'Managing Google/Meta ad campaigns, SEO content keyword optimization, email newsletters, and conversion tracking.',
      requiredSkills: ['SEO', 'Google Analytics', 'Performance Ads', 'Content Strategy', 'Copywriting', 'Conversion Rate Optimization'],
      recommendedProjects: ['0-to-1 Organic Search Strategy', 'Paid Customer Acquisition Campaign', 'SaaS Email Onboarding Funnel'],
      learningPath: ['Digital Marketing Fundamentals', 'SEO & Analytics', 'Paid Media Acquisition', 'Conversion Optimization']
    },

    // ENGINEERING
    {
      id: 'eng_1',
      title: 'Robotics & Mechatronics Engineer',
      category: 'Engineering',
      description: 'Design, build, and program autonomous robots, embedded sensors, industrial automation systems, and mechanical hardware.',
      salary: { min: 8, max: 20, avg: 13.5, currency: 'INR' },
      growthRate: 32,
      demand: 'High',
      typicalWork: 'Programming ROS (Robot Operating System), CAD mechanical drafting, motor control tuning, and micro-controller embedded code.',
      requiredSkills: ['C++', 'Python', 'ROS', 'Embedded Systems', 'CAD (SolidWorks)', 'Control Systems', 'Microcontrollers'],
      recommendedProjects: ['Autonomous Obstacle Avoidance Rover', 'Robotic Arm Inverse Kinematics Controller', 'Smart IoT Sensor Network'],
      learningPath: ['Mechanical & Electrical Basics', 'Embedded C/C++', 'Robot Operating System (ROS)', 'Control Theory & AI Robotics']
    },

    // SCIENCE & RESEARCH
    {
      id: 'sci_1',
      title: 'Computational Scientist',
      category: 'Science & Research',
      description: 'Apply high-performance computing, mathematical simulations, and numerical algorithms to solve complex scientific challenges.',
      salary: { min: 9, max: 22, avg: 14.5, currency: 'INR' },
      growthRate: 24,
      demand: 'High',
      typicalWork: 'Running HPC physics/chemistry simulations, writing parallelized C++/Fortran scripts, and quantitative data modeling.',
      requiredSkills: ['Python', 'C/C++', 'High-Performance Computing (HPC)', 'Numerical Methods', 'Linear Algebra', 'MPI/CUDA'],
      recommendedProjects: ['Parallel N-Body Gravitational Simulation', 'Molecular Dynamics Pipeline', 'Monte Carlo Financial/Physics Model'],
      learningPath: ['Applied Physics & Mathematics', 'Scientific Computing Algorithms', 'Parallel Programming (CUDA)', 'HPC Research Labs']
    },

    // EDUCATION
    {
      id: 'edu_1',
      title: 'Educational Technology Specialist',
      category: 'Education',
      description: 'Design digital learning platforms, adaptive AI tutoring systems, and interactive STEM curricula for modern education.',
      salary: { min: 6, max: 14, avg: 9.5, currency: 'INR' },
      growthRate: 22,
      demand: 'High',
      typicalWork: 'Designing interactive courseware, LMS platform integration, gamified learning modules, and learning analytics.',
      requiredSkills: ['Instructional Design', 'LMS Platforms', 'EdTech Tools', 'Content Creation', 'Learning Analytics', 'Python/JS'],
      recommendedProjects: ['Interactive Coding Sandbox Course', 'AI Adaptive Quiz Engine', 'Gamified STEM Learning App'],
      learningPath: ['Pedagogy & Learning Science', 'Instructional Design Systems', 'EdTech Tool Integration', 'AI in Education']
    },

    // ENTREPRENEURSHIP
    {
      id: 'ent_1',
      title: 'Technical Startup Founder',
      category: 'Entrepreneurship',
      description: 'Build innovative technology products from scratch, assemble founding engineering teams, raise venture capital, and scale startups.',
      salary: { min: 0, max: 50, avg: 20, currency: 'INR' },
      growthRate: 40,
      demand: 'High',
      typicalWork: 'Building product MVPs, pitching investors, customer development interviews, hiring initial engineers, and GTM strategy.',
      requiredSkills: ['Full Stack Development', 'Product Vision', 'Fundraising & Pitching', 'Go-To-Market', 'Leadership', 'Financial Management'],
      recommendedProjects: ['0-to-1 Commercial SaaS App', 'Open Source Tool with Paid Tier', 'AI Startup Pitch Deck & MVP'],
      learningPath: ['Full Stack Engineering', 'Customer Discovery & Validation', 'Venture Capital & Pitching', 'Startup Operations & Scaling']
    }
  ];

  // Dynamic Career Match Calculator
  const getCareerMatchScore = (c: ComprehensiveCareer) => {
    let score = 50; // base score

    const userSkills = (user?.currentSkills || []).map(s => s.toLowerCase());
    const userInterests = (user?.interests || []).map(i => i.toLowerCase());
    const userSubjects = (user?.subjectsEnjoyed || []).map(s => s.toLowerCase());

    // Skill Match
    const requiredLower = c.requiredSkills.map(s => s.toLowerCase());
    const matchedSkills = requiredLower.filter(s => userSkills.includes(s));
    score += (matchedSkills.length / Math.max(requiredLower.length, 1)) * 30;

    // Interest & Domain Match
    const catLower = c.category.toLowerCase();
    if (userInterests.some(i => i.includes(catLower) || catLower.includes(i))) {
      score += 15;
    }

    // Cap & Format
    const finalScore = Math.min(96, Math.max(65, Math.round(score)));
    return finalScore;
  };

  // Sort and filter
  const processedCareers = allCareers.map(c => ({
    ...c,
    matchScore: getCareerMatchScore(c)
  })).sort((a, b) => b.matchScore - a.matchScore);

  const filteredCareers = processedCareers.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.requiredSkills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const topMatches = processedCareers.slice(0, 4);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-slate-900 select-none">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Toast */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-20 right-4 z-50 bg-indigo-600 text-white px-5 py-3 rounded-2xl shadow-xl font-bold flex items-center space-x-2 text-xs"
            >
              <Sparkles className="h-4 w-4 text-violet-200" />
              <span>{toastMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Banner Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-4">
            <Compass className="h-3.5 w-3.5 text-indigo-600" />
            <span>Futuro AI &bull; Career Discovery Hub</span>
          </div>
          
          <h1 className="font-outfit text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Not sure what you want to become?
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mb-6 leading-relaxed">
            Let's find the careers that fit your interests, skills, favorite subjects, and strengths.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                const el = document.getElementById('best-matches-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              leftIcon={<Sparkles className="w-4 h-4" />}
            >
              Discover My Matches
            </Button>

            <Link href="/assessment">
              <Button
                variant="secondary"
                size="md"
                leftIcon={<Compass className="w-4 h-4 text-indigo-600" />}
              >
                Take Career Assessment
              </Button>
            </Link>
          </div>
        </div>

        {/* YOUR BEST CAREER MATCHES SECTION */}
        <div id="best-matches-section" className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 font-outfit tracking-tight flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-indigo-600" />
                <span>YOUR CAREER POSSIBILITIES</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Based on your profile, interests, and current skills, these careers suit you best:
              </p>
            </div>
            <Link href="/assessment" className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center space-x-1">
              <span>Retake Assessment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topMatches.map((c) => {
              const userSkills = (user?.currentSkills || []).map(s => s.toLowerCase());
              const ownedSkills = c.requiredSkills.filter(s => userSkills.includes(s.toLowerCase()));
              const missingSkills = c.requiredSkills.filter(s => !userSkills.includes(s.toLowerCase()));

              return (
                <div
                  key={c.id}
                  className="bg-white border border-slate-200 hover:border-indigo-300 p-5 rounded-2xl shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase tracking-wider border border-indigo-100">
                        {c.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-extrabold border border-emerald-200 flex items-center space-x-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>{c.matchScore}% Match</span>
                      </span>
                    </div>

                    <h3 className="font-outfit text-base font-bold text-slate-900 mb-1.5">
                      {c.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                      {c.description}
                    </p>

                    <div className="space-y-2 mb-4 text-xs">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                          Skills You Have ({ownedSkills.length})
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {ownedSkills.length > 0 ? (
                            ownedSkills.map(s => (
                              <span key={s} className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-semibold border border-emerald-200">
                                ✓ {s}
                              </span>
                            ))
                          ) : (
                            <span className="text-[11px] text-slate-400 italic">None logged yet</span>
                          )}
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                          Skills to Develop ({missingSkills.length})
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {missingSkills.slice(0, 3).map(s => (
                            <span key={s} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-semibold">
                              ○ {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedCareer(c)}
                    className="w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-indigo-600 text-xs font-bold transition-all flex items-center justify-center space-x-1.5 cursor-pointer mt-2"
                  >
                    <span>Explore Career</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* ALL CAREERS EXPLORER SECTION */}
        <div className="mb-6">
          <h2 className="text-xl font-extrabold text-slate-900 font-outfit tracking-tight mb-4">
            COMPREHENSIVE CAREER DIRECTORY
          </h2>

          {/* Filters Controls */}
          <div className="bg-white border border-slate-200 p-4 sm:p-5 rounded-2xl shadow-xs mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search careers across Technology, AI, Finance, Design..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 text-xs text-slate-900 placeholder-slate-400"
              />
            </div>

            <div className="flex flex-wrap gap-1.5 max-w-2xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat 
                      ? 'bg-indigo-600 text-white shadow-xs' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Explorer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCareers.map((c, idx) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: idx * 0.03 }}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-wider border border-slate-200">
                      {c.category}
                    </span>
                    <span className="flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">
                      <TrendingUp className="h-3 w-3" />
                      <span>+{c.growthRate}% Yr</span>
                    </span>
                  </div>

                  <h3 className="font-outfit text-lg font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed mb-4">
                    {c.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4 text-xs">
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Avg Compensation</span>
                      <span className="font-outfit font-bold text-slate-900">
                        ₹{c.salary.min}–{c.salary.max} LPA
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Market Demand</span>
                      <span className="font-outfit font-bold text-indigo-600">
                        {c.demand} Demand
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setSelectedCareer(c)}
                    className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-all text-center cursor-pointer flex items-center justify-center space-x-1"
                  >
                    <span>Explore Career</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  </button>
                </div>
              </motion.div>
            ))}

            {filteredCareers.length === 0 && (
              <div className="col-span-full text-center py-12 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <AlertTriangle className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                <p className="text-xs text-slate-500">No career opportunities match your search query.</p>
              </div>
            )}
          </div>
        </div>

        {/* Modal Detail Breakdown */}
        <AnimatePresence>
          {selectedCareer && (
            <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="bg-white border border-slate-200 rounded-3xl w-full max-w-2xl shadow-2xl p-6 sm:p-8 relative overflow-hidden"
              >
                <button 
                  type="button"
                  onClick={() => setSelectedCareer(null)}
                  className="absolute top-4 right-4 h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 text-base font-bold transition-all cursor-pointer"
                >
                  &times;
                </button>

                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase border border-indigo-200">
                    {selectedCareer.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase border border-emerald-200">
                    +{selectedCareer.growthRate}% Annual Growth
                  </span>
                </div>

                <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                  {selectedCareer.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {selectedCareer.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Typical Work</span>
                    <p className="text-xs text-slate-700 leading-relaxed">{selectedCareer.typicalWork}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Salary Range</span>
                    <p className="text-sm font-extrabold text-indigo-600">₹{selectedCareer.salary.min} – {selectedCareer.salary.max} LPA</p>
                    <span className="text-[11px] text-slate-500">Average: ₹{selectedCareer.salary.avg} LPA</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-2 flex items-center space-x-1.5">
                      <Star className="h-4 w-4 text-indigo-600" />
                      <span>Required Key Skills</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCareer.requiredSkills.map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-2 flex items-center space-x-1.5">
                      <BookOpen className="h-4 w-4 text-indigo-600" />
                      <span>Recommended Projects to Build</span>
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {selectedCareer.recommendedProjects.map((p, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setSelectedCareer(null)}
                    className="px-4 py-2 border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-semibold text-slate-700 cursor-pointer"
                  >
                    Close
                  </button>
                  <Link href="/roadmap">
                    <button
                      type="button"
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-xs shadow-md shadow-indigo-500/15 cursor-pointer"
                    >
                      Generate Roadmap for {selectedCareer.title} →
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
