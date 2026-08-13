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
    id: 'mentor-priya-sharma',
    name: 'Priya Sharma',
    role: 'Staff AI Research Engineer',
    company: 'Google DeepMind',
    industry: 'Artificial Intelligence',
    experienceYears: 8,
    location: 'Bengaluru, India',
    bio: 'Specializing in Large Language Model fine-tuning, RAG retrieval architectures, and transformer optimization. Passionate about guiding aspiring AI engineers through research and industry interviews.',
    skills: ['PyTorch', 'Generative AI', 'LLMs', 'Transformer Architecture', 'Python'],
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    rating: 4.9,
    reviewsCount: 48,
    sessionsGiven: 112,
    linkedinUrl: 'https://www.linkedin.com/search/results/people/?keywords=Priya+Sharma+AI+Engineer',
    topics: ['AI Career Roadmaps', 'Research Paper Implementations', 'FAANG AI Interviews'],
    available: true,
    featured: true
  },
  {
    id: 'mentor-rahul-verma',
    name: 'Rahul Verma',
    role: 'Principal Cloud Solutions Architect',
    company: 'Amazon Web Services (AWS)',
    industry: 'Cloud & Infrastructure',
    experienceYears: 11,
    location: 'Hyderabad, India',
    bio: 'Enterprise cloud architect helping startups and global enterprises migrate mission-critical applications to AWS. Mentor for AWS certifications and high-scale distributed systems.',
    skills: ['AWS Architecture', 'Kubernetes', 'Microservices', 'Terraform', 'System Design'],
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    rating: 5.0,
    reviewsCount: 64,
    sessionsGiven: 145,
    linkedinUrl: 'https://www.linkedin.com/search/results/people/?keywords=Rahul+Verma+Solutions+Architect',
    topics: ['AWS Certifications', 'System Design Mastery', 'Cloud Architecture Reviews'],
    available: true,
    featured: true
  },
  {
    id: 'mentor-ananya-iyer',
    name: 'Ananya Iyer',
    role: 'Senior Product Designer',
    company: 'Microsoft',
    industry: 'Design & UI/UX',
    experienceYears: 7,
    location: 'Bengaluru, India',
    bio: 'Leading UX research and design systems across Microsoft Cloud ecosystems. Passionate about portfolio reviews, design system tokens, and accessibility standards.',
    skills: ['Figma', 'UI/UX Design', 'Design Systems', 'User Research', 'Prototyping'],
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    rating: 4.8,
    reviewsCount: 39,
    sessionsGiven: 88,
    linkedinUrl: 'https://www.linkedin.com/search/results/people/?keywords=Ananya+Iyer+Product+Designer',
    topics: ['Portfolio Critique', 'UX Case Studies', 'Design System Architecture'],
    available: true,
    featured: false
  },
  {
    id: 'mentor-vikram-singh',
    name: 'Vikram Singh',
    role: 'Lead Data Scientist',
    company: 'Swiggy',
    industry: 'Data Science & Analytics',
    experienceYears: 9,
    location: 'Bengaluru, India',
    bio: 'Building real-time demand forecasting and recommendation ranking engines at consumer scale. Expertise in statistical modeling, feature engineering, and MLOps deployment.',
    skills: ['Python', 'SQL', 'Scikit-Learn', 'Feature Store', 'Machine Learning', 'A/B Testing'],
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    rating: 4.9,
    reviewsCount: 52,
    sessionsGiven: 120,
    linkedinUrl: 'https://www.linkedin.com/search/results/people/?keywords=Vikram+Singh+Data+Scientist',
    topics: ['Data Science Transition', 'MLOps Best Practices', 'A/B Testing Methodologies'],
    available: true,
    featured: true
  },
  {
    id: 'mentor-kavita-menon',
    name: 'Kavita Menon',
    role: 'Cybersecurity Threat Lead',
    company: 'Cisco Systems',
    industry: 'Cybersecurity',
    experienceYears: 10,
    location: 'Pune, India',
    bio: 'Specializing in Zero Trust architectures, SecOps incident response, and cloud penetration testing. Mentor for CompTIA Security+, CEH, and defense strategies.',
    skills: ['Network Security', 'SOC Operations', 'Penetration Testing', 'SIEM', 'Linux'],
    avatar: 'https://images.unsplash.com/photo-1534751516642-a171edd25218?w=400&q=80',
    rating: 4.9,
    reviewsCount: 33,
    sessionsGiven: 75,
    linkedinUrl: 'https://www.linkedin.com/search/results/people/?keywords=Kavita+Menon+Cybersecurity',
    topics: ['Ethical Hacking Roadmap', 'Security Certifications', 'Incident Response Mockups'],
    available: true,
    featured: false
  },
  {
    id: 'mentor-rohan-deshmukh',
    name: 'Rohan Deshmukh',
    role: 'Engineering Lead (Full Stack)',
    company: 'Stripe',
    industry: 'Software Engineering',
    experienceYears: 8,
    location: 'Remote / Mumbai, India',
    bio: 'Building high-throughput payment APIs and resilient frontend architectures. Enthusiastic about mentoring developers on React 19, TypeScript, microservices, and system scaling.',
    skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'API Design'],
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    rating: 4.9,
    reviewsCount: 45,
    sessionsGiven: 98,
    linkedinUrl: 'https://www.linkedin.com/search/results/people/?keywords=Rohan+Deshmukh+Software+Engineer',
    topics: ['Full Stack Architecture', 'Clean Code Practices', 'Technical Interview Prep'],
    available: true,
    featured: false
  }
];

/**
 * GET /api/mentors
 * Query mentors directory with industry, skill, experience, and search filters
 */
router.get('/', (req, res) => {
  const query = (req.query.q as string || '').toLowerCase().trim();
  const industry = (req.query.industry as string || 'all').toLowerCase();
  const skill = (req.query.skill as string || 'all').toLowerCase();
  const minExp = parseInt(req.query.minExp as string || '0', 10);

  let mentors = [...MENTORS_DIRECTORY];

  if (industry && industry !== 'all') {
    mentors = mentors.filter(m => m.industry.toLowerCase().includes(industry));
  }

  if (skill && skill !== 'all') {
    mentors = mentors.filter(m => m.skills.some(s => s.toLowerCase().includes(skill)));
  }

  if (minExp > 0) {
    mentors = mentors.filter(m => m.experienceYears >= minExp);
  }

  if (query) {
    mentors = mentors.filter(m => 
      m.name.toLowerCase().includes(query) ||
      m.role.toLowerCase().includes(query) ||
      m.company.toLowerCase().includes(query) ||
      m.bio.toLowerCase().includes(query) ||
      m.skills.some(s => s.toLowerCase().includes(query)) ||
      m.topics.some(t => t.toLowerCase().includes(query))
    );
  }

  res.json({
    mentors,
    total: mentors.length,
    industries: ['Artificial Intelligence', 'Cloud & Infrastructure', 'Design & UI/UX', 'Data Science & Analytics', 'Cybersecurity', 'Software Engineering']
  });
});

/**
 * POST /api/mentors/match
 * AI Mentor Matching Engine matching user target career, skills, and industry
 */
router.post('/match', async (req, res) => {
  const { targetCareer, currentSkills, industryPreference, experienceLevel } = req.body;

  const careerStr = (targetCareer || 'Software Engineer').toLowerCase();
  const userSkills: string[] = Array.isArray(currentSkills) ? currentSkills.map(s => s.toLowerCase()) : [];

  const matchedMentors = MENTORS_DIRECTORY.map(mentor => {
    let score = 70; // Baseline compatibility

    // Role & Industry Match
    if (mentor.role.toLowerCase().includes(careerStr) || careerStr.includes(mentor.industry.toLowerCase())) {
      score += 18;
    } else if (mentor.industry.toLowerCase().includes('software') || mentor.industry.toLowerCase().includes('ai')) {
      score += 10;
    }

    // Skills Overlap
    const overlappingSkills = mentor.skills.filter(sk => 
      userSkills.some(usk => usk.includes(sk.toLowerCase()) || sk.toLowerCase().includes(usk))
    );
    score += Math.min(overlappingSkills.length * 4, 12);

    // Score clamp
    score = Math.min(Math.max(score, 75), 98);

    const matchReasons: string[] = [];
    if (overlappingSkills.length > 0) {
      matchReasons.push(`Shares deep expertise in ${overlappingSkills.slice(0, 2).join(', ')}`);
    }
    matchReasons.push(`Experienced leader in ${mentor.industry} at ${mentor.company}`);
    matchReasons.push(`Specialized in ${mentor.topics[0]}`);

    return {
      mentor,
      matchScore: score,
      matchReasons
    };
  });

  // Sort by highest match score
  matchedMentors.sort((a, b) => b.matchScore - a.matchScore);

  res.json({
    targetCareer: targetCareer || 'Software Engineer',
    matchedMentors
  });
});

export default router;
