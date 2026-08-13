import mongoose from 'mongoose';
import { Career, JobRecommendation } from '../models/Schemas';

const initialCareers = [
  {
    title: 'Software Engineer',
    description: 'Design, write, and test code for applications, systems, or services. Engineers build scalable infrastructures and robust web or desktop apps.',
    salaryRange: { min: 8, max: 15, currency: 'INR', avg: 11.5 },
    growthPotential: 'High',
    growthRate: 25,
    demandLevel: 'High',
    requiredSkills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Algorithms', 'Databases', 'System Design', 'Git'],
    recommendedPath: [
      'Learn fundamental programming concepts in Python or JavaScript.',
      'Build core HTML/CSS and frontend skills (React/Vue).',
      'Understand backend web servers, APIs, and relational/non-relational databases.',
      'Study data structures, algorithms, and git-based workflows.',
      'Create 3 complete portfolio projects and contribute to open source.'
    ],
    workLifeBalance: 7,
    difficultyLevel: 6,
    category: 'Engineering'
  },
  {
    title: 'Data Scientist',
    description: 'Use statistics, math, and machine learning models to analyze complex datasets and extract strategic business insights.',
    salaryRange: { min: 12, max: 18, currency: 'INR', avg: 15 },
    growthPotential: 'Exponential',
    growthRate: 35,
    demandLevel: 'High',
    requiredSkills: ['Python', 'SQL', 'Machine Learning', 'Statistics', 'Pandas/NumPy', 'Data Visualization', 'Big Data', 'R'],
    recommendedPath: [
      'Master SQL for data extraction and basic Python scripts.',
      'Learn linear algebra, probability, and descriptive/inferential statistics.',
      'Acquire pandas, numpy, and matplotlib/seaborn visualization capabilities.',
      'Study core ML concepts (regressions, classifications, clustering).',
      'Work on Kaggle datasets and publish analytics portfolios.'
    ],
    workLifeBalance: 8,
    difficultyLevel: 8,
    category: 'Data & AI'
  },
  {
    title: 'AI Engineer',
    description: 'Develop and deploy cutting-edge artificial intelligence systems, large language models (LLMs), neural networks, and computer vision pipelines.',
    salaryRange: { min: 12, max: 20, currency: 'INR', avg: 16 },
    growthPotential: 'Exponential',
    growthRate: 48,
    demandLevel: 'High',
    requiredSkills: ['Python', 'Deep Learning', 'PyTorch/TensorFlow', 'LLMs', 'Transformers', 'APIs', 'Docker', 'Cloud Compute'],
    recommendedPath: [
      'Learn advanced Python programming and machine learning basics.',
      'Dive into neural networks, PyTorch/TensorFlow, and deep learning architectures.',
      'Master prompt engineering, fine-tuning LLMs, and RAG (Retrieval-Augmented Generation).',
      'Learn deployment skills using FastAPI, Docker, and cloud GPUs (AWS/GCP).',
      'Build intelligent AI applications parsing text, audio, or visual data.'
    ],
    workLifeBalance: 6,
    difficultyLevel: 9,
    category: 'Data & AI'
  },
  {
    title: 'Cyber Security Analyst',
    description: 'Protect network environments, critical infrastructure, data integrity, and operational servers from active cyber attacks, intrusions, and breaches.',
    salaryRange: { min: 8, max: 15, currency: 'INR', avg: 11.5 },
    growthPotential: 'High',
    growthRate: 32,
    demandLevel: 'High',
    requiredSkills: ['Networking', 'Linux', 'Firewalls', 'Ethical Hacking', 'SIEM', 'Cryptography', 'CompTIA Security+', 'OWASP'],
    recommendedPath: [
      'Understand TCP/IP protocols, subnetting, and Linux administration.',
      'Learn to audit code and network interfaces for vulnerabilities.',
      'Obtain foundational certifications like CompTIA Security+ or CEH.',
      'Practice virtual labs (TryHackMe, HackTheBox) testing network security controls.',
      'Master penetration testing protocols, SIEM logs, and incident handling.'
    ],
    workLifeBalance: 7,
    difficultyLevel: 7,
    category: 'Security'
  },
  {
    title: 'UI/UX Designer',
    description: 'Design intuitive interfaces, screen mockups, branding layouts, user flows, and wireframes to ensure excellent human-computer interaction and products.',
    salaryRange: { min: 7, max: 14, currency: 'INR', avg: 10.5 },
    growthPotential: 'Medium',
    growthRate: 16,
    demandLevel: 'Medium',
    requiredSkills: ['Figma', 'Wireframing', 'User Research', 'Prototyping', 'Visual Design', 'Design Systems', 'HTML/CSS', 'Typography'],
    recommendedPath: [
      'Learn Figma toolsets and core user experience principles.',
      'Understand typography, spacing, contrast grids, and layout compositions.',
      'Conduct user interviews, persona creation, and mapping user journeys.',
      'Master wireframing, high-fidelity mockups, and interactive prototyping.',
      'Compile a portfolio highlighting your design thinking and case studies.'
    ],
    workLifeBalance: 8,
    difficultyLevel: 5,
    category: 'Design'
  },
  {
    title: 'Product Manager',
    description: 'Oversee product lifecycles, coordinate development sprints, formulate feature roadmaps, and bridge gaps between engineering, design, and business teams.',
    salaryRange: { min: 18, max: 35, currency: 'INR', avg: 26.5 },
    growthPotential: 'High',
    growthRate: 20,
    demandLevel: 'High',
    requiredSkills: ['Agile/Scrum', 'Product Strategy', 'Analytics', 'UX Principles', 'Market Research', 'Roadmapping', 'Jira', 'Public Speaking'],
    recommendedPath: [
      'Gain domain expertise (engineering, business development, or design).',
      'Learn agile methodologies, backlog pruning, and sprint planning.',
      'Understand product analytics tools (Mixpanel, Amplitude, SQL).',
      'Build soft skills: written coordination, cross-functional leading, presentation decks.',
      'Own a product feature from conception to release as a junior PM/Associate.'
    ],
    workLifeBalance: 7,
    difficultyLevel: 7,
    category: 'Management'
  },
  {
    title: 'Digital Marketer',
    description: 'Design online advertising campaigns, optimize organic web search engine placements (SEO), run email newsletters, and grow user acquisition strategies.',
    salaryRange: { min: 5, max: 10, currency: 'INR', avg: 7.5 },
    growthPotential: 'Medium',
    growthRate: 12,
    demandLevel: 'Medium',
    requiredSkills: ['SEO', 'Google Analytics', 'Content Writing', 'Copywriting', 'Social Media Ads', 'Email Marketing', 'A/B Testing', 'HTML'],
    recommendedPath: [
      'Learn search engine optimization (SEO) principles and keywords.',
      'Understand copywriting and write short blogs or newsletters.',
      'Obtain certifications in Google Analytics and Google/Meta Ads.',
      'Manage social channels and execute minor paid advertising campaigns.',
      'Learn visual content tools and performance metrics analysis.'
    ],
    workLifeBalance: 8,
    difficultyLevel: 4,
    category: 'Marketing'
  }
];

const initialJobs = [
  {
    title: 'Frontend Developer Intern',
    company: 'PixelForge Technologies',
    location: 'Remote (US)',
    type: 'Internship',
    link: 'https://careers.pixelforge.io/internship/frontend',
    requiredSkills: ['JavaScript', 'React', 'HTML/CSS', 'Git'],
    salaryRange: '₹25 - ₹40 / Hour'
  },
  {
    title: 'Junior Software Engineer',
    company: 'StellarCloud SaaS',
    location: 'Austin, TX',
    type: 'Job',
    link: 'https://stellarcloud.com/jobs/junior-se',
    requiredSkills: ['TypeScript', 'Node.js', 'SQL', 'Express'],
    salaryRange: '₹80,000 - ₹95,000 / Year'
  },
  {
    title: 'Machine Learning Research Assistant',
    company: 'BrainWave Labs',
    location: 'San Francisco, CA',
    type: 'Internship',
    link: 'https://brainwavelabs.ai/research-assistant',
    requiredSkills: ['Python', 'PyTorch', 'Statistics', 'LLMs'],
    salaryRange: '₹40 - ₹60 / Hour'
  },
  {
    title: 'Cyber Security Operations Center Analyst',
    company: 'Titan Guard Systems',
    location: 'New York, NY (Hybrid)',
    type: 'Job',
    link: 'https://titanguard.com/careers/csoc-analyst',
    requiredSkills: ['Networking', 'Linux', 'Firewalls', 'SIEM'],
    salaryRange: '₹90,000 - ₹110,000 / Year'
  },
  {
    title: 'Associate Product Manager',
    company: 'HyperGrowth Corp',
    location: 'San Jose, CA',
    type: 'Job',
    link: 'https://hypergrowth.com/careers/apm',
    requiredSkills: ['Agile/Scrum', 'Analytics', 'Market Research'],
    salaryRange: '₹95,000 - ₹115,000 / Year'
  },
  {
    title: 'Junior UX Designer',
    company: 'Aura Creative Agency',
    location: 'Remote (Global)',
    type: 'Job',
    link: 'https://auradesign.agency/join-us/junior-ux',
    requiredSkills: ['Figma', 'Wireframing', 'Prototyping'],
    salaryRange: '₹55,000 - ₹70,000 / Year'
  },
  {
    title: 'Next.js 15 Foundations Course',
    company: 'NextAcademy',
    location: 'Online Self-paced',
    type: 'Course',
    link: 'https://nextacademy.io/courses/nextjs-15-foundations',
    requiredSkills: ['JavaScript', 'React'],
    salaryRange: 'Free Certification'
  },
  {
    title: 'Google Data Analytics Professional Certificate',
    company: 'Coursera / Google',
    location: 'Online Self-paced',
    type: 'Course',
    link: 'https://coursera.org/professional-certificates/google-data-analytics',
    requiredSkills: ['SQL', 'Python', 'Data Visualization'],
    salaryRange: 'Subscription Included'
  }
];

export async function connectDB() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/futuro-ai';
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(uri);
    console.log('MongoDB Connected Successfully.');

    // Seed careers if empty
    const careerCount = await Career.countDocuments();
    if (careerCount === 0) {
      await Career.insertMany(initialCareers);
      console.log('Successfully seeded default careers in database.');
    }

    // Seed jobs/courses if empty
    const jobsCount = await JobRecommendation.countDocuments();
    if (jobsCount === 0) {
      await JobRecommendation.insertMany(initialJobs);
      console.log('Successfully seeded default jobs, internships, and courses.');
    }
  } catch (error) {
    console.error('MongoDB Connection Failure:', error);
    console.log('WARNING: Express server will run with mock file storage and runtime in-memory caching to allow testing.');
  }
}
