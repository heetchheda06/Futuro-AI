import express from 'express';

const router = express.Router();

export interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  experienceYears: number;
  location: string;
  bio: string;
  skills: string[];
  avatar: string;
  rating: number;
  reviewsCount: number;
  sessionsGiven: number;
  linkedinUrl: string;
  topics: string[];
  available: boolean;
  featured?: boolean;
}

export const MENTORS_DIRECTORY: Mentor[] = [
  {
    "id": "mentor-priya-sharma",
    "name": "Priya Sharma",
    "role": "Staff AI Research Engineer",
    "company": "Google DeepMind",
    "industry": "Artificial Intelligence",
    "experienceYears": 9,
    "location": "Bengaluru / Remote",
    "bio": "Specializing in Large Language Model fine-tuning, RAG retrieval architectures, and transformer optimization. Passionate about guiding aspiring AI engineers.",
    "skills": [
      "PyTorch",
      "Generative AI",
      "LLMs",
      "System Architecture",
      "RAG"
    ],
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    "rating": 4.9,
    "reviewsCount": 48,
    "sessionsGiven": 112,
    "linkedinUrl": "https://www.linkedin.com/search/results/people/?keywords=Priya+Sharma+AI+Engineer",
    "topics": [
      "AI Career Roadmaps",
      "Research Paper Implementations",
      "FAANG AI Interviews"
    ],
    "available": true,
    "featured": true
  },
  {
    "id": "mentor-rahul-verma",
    "name": "Rahul Verma",
    "role": "Principal Cloud Solutions Architect",
    "company": "Amazon Web Services (AWS)",
    "industry": "Cloud & Infrastructure",
    "experienceYears": 12,
    "location": "San Francisco / Remote",
    "bio": "Specializing in multi-region Kubernetes clusters, FinOps cloud optimization, and high-availability distributed systems migration.",
    "skills": [
      "AWS Architecture",
      "Kubernetes",
      "Terraform",
      "System Design",
      "Microservices"
    ],
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    "rating": 5.0,
    "reviewsCount": 64,
    "sessionsGiven": 145,
    "linkedinUrl": "https://www.linkedin.com/search/results/people/?keywords=Rahul+Verma+Solutions+Architect",
    "topics": [
      "AWS Certifications",
      "System Design Mastery",
      "Cloud Architecture Reviews"
    ],
    "available": true,
    "featured": true
  },
  {
    "id": "mentor-ananya-iyer",
    "name": "Ananya Iyer",
    "role": "Senior Product Designer",
    "company": "Microsoft",
    "industry": "Design & UI/UX",
    "experienceYears": 7,
    "location": "Bengaluru / Remote",
    "bio": "Leading UX research and design systems across Microsoft Cloud ecosystems. Passionate about portfolio reviews and design token architecture.",
    "skills": [
      "Figma",
      "UI/UX Design",
      "Design Systems",
      "User Research",
      "Prototyping"
    ],
    "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    "rating": 4.8,
    "reviewsCount": 39,
    "sessionsGiven": 88,
    "linkedinUrl": "https://www.linkedin.com/search/results/people/?keywords=Ananya+Iyer+Product+Designer",
    "topics": [
      "Portfolio Critique",
      "UX Case Studies",
      "Design System Architecture"
    ],
    "available": true,
    "featured": false
  },
  {
    "id": "mentor-vikram-singh",
    "name": "Vikram Singh",
    "role": "Lead Data Scientist",
    "company": "Swiggy",
    "industry": "Data Science & Analytics",
    "experienceYears": 9,
    "location": "Bengaluru / Remote",
    "bio": "Building real-time demand forecasting and recommendation ranking engines at consumer scale. Expertise in statistical modeling and MLOps.",
    "skills": [
      "Python",
      "SQL",
      "Scikit-Learn",
      "Machine Learning",
      "A/B Testing"
    ],
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    "rating": 4.9,
    "reviewsCount": 52,
    "sessionsGiven": 120,
    "linkedinUrl": "https://www.linkedin.com/search/results/people/?keywords=Vikram+Singh+Data+Scientist",
    "topics": [
      "Data Science Transition",
      "MLOps Best Practices",
      "A/B Testing Methodologies"
    ],
    "available": true,
    "featured": true
  },
  {
    "id": "mentor-kavita-menon",
    "name": "Kavita Menon",
    "role": "Cybersecurity Threat Lead",
    "company": "Cisco Systems",
    "industry": "Cybersecurity",
    "experienceYears": 10,
    "location": "Pune / Remote",
    "bio": "Specializing in Zero Trust architectures, SecOps incident response, and cloud penetration testing. Mentor for CompTIA Security+ & CEH.",
    "skills": [
      "Network Security",
      "SOC Operations",
      "Penetration Testing",
      "SIEM",
      "Linux"
    ],
    "avatar": "https://images.unsplash.com/photo-1534751516642-a171edd25218?w=400&q=80",
    "rating": 4.9,
    "reviewsCount": 33,
    "sessionsGiven": 75,
    "linkedinUrl": "https://www.linkedin.com/search/results/people/?keywords=Kavita+Menon+Cybersecurity",
    "topics": [
      "Ethical Hacking Roadmap",
      "Security Certifications",
      "Incident Response Mockups"
    ],
    "available": true,
    "featured": false
  },
  {
    "id": "mentor-rohan-deshmukh",
    "name": "Rohan Deshmukh",
    "role": "Staff Software Engineer",
    "company": "Stripe",
    "industry": "Software Engineering",
    "experienceYears": 8,
    "location": "Mumbai / Remote",
    "bio": "Building high-throughput payment APIs and resilient frontend architectures. Enthusiastic about mentoring on React 19, TypeScript, and API scaling.",
    "skills": [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "System Scaling"
    ],
    "avatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80",
    "rating": 4.9,
    "reviewsCount": 45,
    "sessionsGiven": 98,
    "linkedinUrl": "https://www.linkedin.com/search/results/people/?keywords=Rohan+Deshmukh+Software+Engineer",
    "topics": [
      "Full Stack Architecture",
      "Clean Code Practices",
      "Technical Interview Prep"
    ],
    "available": true,
    "featured": false
  },
  {
    "id": "mentor-aarav-mehta",
    "name": "Aarav Mehta",
    "role": "Director of Product Engineering",
    "company": "Meta / Facebook",
    "industry": "Engineering Leadership & Strategy",
    "experienceYears": 14,
    "location": "London / Remote",
    "bio": "Scaling engineering organizations, product-market fit strategy, and executive technical leadership. Mentoring staff engineers stepping into management.",
    "skills": [
      "Tech Leadership",
      "Product Strategy",
      "System Architecture",
      "Agile Scale"
    ],
    "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&q=80",
    "rating": 5.0,
    "reviewsCount": 71,
    "sessionsGiven": 160,
    "linkedinUrl": "https://www.linkedin.com/search/results/people/?keywords=Aarav+Mehta+Product+Engineering",
    "topics": [
      "Engineering Management",
      "System Design Reviews",
      "Product-Market Strategy"
    ],
    "available": true,
    "featured": true
  }
];

/**
 * GET /api/mentors
 * Query mentors directory with industry, skill, experience, and search filters
 */
router.get('/', (req, res) => {
  const { industry, skill, minExperience, search } = req.query;

  let mentors = [...MENTORS_DIRECTORY];

  if (industry && industry !== 'all' && industry !== 'All') {
    const ind = (industry as string).toLowerCase();
    mentors = mentors.filter(m => m.industry.toLowerCase().includes(ind));
  }

  if (skill) {
    const sk = (skill as string).toLowerCase();
    mentors = mentors.filter(m => m.skills.some(s => s.toLowerCase().includes(sk)));
  }

  if (minExperience) {
    const minExp = parseInt(minExperience as string, 10);
    if (!isNaN(minExp)) {
      mentors = mentors.filter(m => m.experienceYears >= minExp);
    }
  }

  if (search) {
    const q = (search as string).toLowerCase();
    mentors = mentors.filter(m => 
      m.name.toLowerCase().includes(q) ||
      m.company.toLowerCase().includes(q) ||
      m.role.toLowerCase().includes(q) ||
      m.bio.toLowerCase().includes(q)
    );
  }

  res.json(mentors);
});

/**
 * POST /api/mentors/match
 * Smart matching algorithm based on user target role and skills
 */
router.post('/match', (req, res) => {
  const { targetRole, currentSkills, industryPreference } = req.body;

  const matchedMentors = MENTORS_DIRECTORY.map(mentor => {
    let matchScore = 70;

    if (industryPreference && mentor.industry.toLowerCase().includes(industryPreference.toLowerCase())) {
      matchScore += 15;
    }

    if (currentSkills && Array.isArray(currentSkills)) {
      const overlap = mentor.skills.filter(s => currentSkills.includes(s));
      matchScore += Math.min(overlap.length * 5, 15);
    }

    return {
      ...mentor,
      matchScore: Math.min(matchScore, 99)
    };
  });

  matchedMentors.sort((a, b) => b.matchScore - a.matchScore);

  res.json(matchedMentors);
});

export default router;
