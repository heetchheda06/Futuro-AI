export interface MentorData {
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
  available: boolean;
  topics: string[];
}

export const MENTORS_DATA: MentorData[] = [
  {
    id: 'm-1',
    name: 'Priya Sharma',
    role: 'Staff AI Research Engineer',
    company: 'Google DeepMind',
    industry: 'Artificial Intelligence',
    experienceYears: 9,
    location: 'Bengaluru / Remote',
    bio: 'Specializing in Large Language Model fine-tuning, RAG retrieval architectures, and transformer optimization. Passionate about guiding aspiring AI engineers.',
    skills: ['PyTorch', 'Generative AI', 'LLMs', 'System Architecture', 'RAG'],
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    rating: 4.9,
    reviewsCount: 48,
    sessionsGiven: 112,
    available: true,
    topics: ['AI Career Roadmaps', 'Research Paper Implementations', 'FAANG AI Interviews']
  },
  {
    id: 'm-2',
    name: 'Rahul Verma',
    role: 'Principal Cloud Solutions Architect',
    company: 'Amazon Web Services (AWS)',
    industry: 'Cloud & Infrastructure',
    experienceYears: 12,
    location: 'San Francisco / Remote',
    bio: 'Specializing in multi-region Kubernetes clusters, FinOps cloud optimization, and high-availability distributed systems migration.',
    skills: ['AWS Architecture', 'Kubernetes', 'Terraform', 'System Design', 'Microservices'],
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    rating: 5.0,
    reviewsCount: 64,
    sessionsGiven: 145,
    available: true,
    topics: ['AWS Certifications', 'System Design Mastery', 'Cloud Architecture Reviews']
  },
  {
    id: 'm-3',
    name: 'Ananya Iyer',
    role: 'Senior Product Designer',
    company: 'Microsoft',
    industry: 'Design & UI/UX',
    experienceYears: 7,
    location: 'Bengaluru / Remote',
    bio: 'Leading UX research and design systems across Microsoft Cloud ecosystems. Passionate about portfolio reviews and design token architecture.',
    skills: ['Figma', 'UI/UX Design', 'Design Systems', 'User Research', 'Prototyping'],
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    rating: 4.8,
    reviewsCount: 39,
    sessionsGiven: 88,
    available: true,
    topics: ['Portfolio Critique', 'UX Case Studies', 'Design System Architecture']
  },
  {
    id: 'm-4',
    name: 'Vikram Singh',
    role: 'Lead Data Scientist',
    company: 'Swiggy',
    industry: 'Data Science & Analytics',
    experienceYears: 9,
    location: 'Bengaluru / Remote',
    bio: 'Building real-time demand forecasting and recommendation ranking engines at consumer scale. Expertise in statistical modeling and MLOps.',
    skills: ['Python', 'SQL', 'Scikit-Learn', 'Machine Learning', 'A/B Testing'],
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    rating: 4.9,
    reviewsCount: 52,
    sessionsGiven: 120,
    available: true,
    topics: ['Data Science Transition', 'MLOps Best Practices', 'A/B Testing Methodologies']
  },
  {
    id: 'm-5',
    name: 'Kavita Menon',
    role: 'Cybersecurity Threat Lead',
    company: 'Cisco Systems',
    industry: 'Cybersecurity',
    experienceYears: 10,
    location: 'Pune / Remote',
    bio: 'Specializing in Zero Trust architectures, SecOps incident response, and cloud penetration testing. Mentor for CompTIA Security+ & CEH.',
    skills: ['Network Security', 'SOC Operations', 'Penetration Testing', 'SIEM', 'Linux'],
    avatar: 'https://images.unsplash.com/photo-1534751516642-a171edd25218?auto=format&fit=crop&w=300&q=80',
    rating: 4.9,
    reviewsCount: 33,
    sessionsGiven: 75,
    available: true,
    topics: ['Ethical Hacking Roadmap', 'Security Certifications', 'Incident Response Mockups']
  },
  {
    id: 'm-6',
    name: 'Rohan Deshmukh',
    role: 'Staff Software Engineer',
    company: 'Stripe',
    industry: 'Software Engineering',
    experienceYears: 8,
    location: 'Mumbai / Remote',
    bio: 'Building high-throughput payment APIs and resilient frontend architectures. Enthusiastic about mentoring on React 19, TypeScript, and API scaling.',
    skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'System Scaling'],
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
    rating: 4.9,
    reviewsCount: 45,
    sessionsGiven: 98,
    available: true,
    topics: ['Full Stack Architecture', 'Clean Code Practices', 'Technical Interview Prep']
  },
  {
    id: 'm-7',
    name: 'Aarav Mehta',
    role: 'Director of Product Engineering',
    company: 'Meta / Facebook',
    industry: 'Engineering Leadership & Strategy',
    experienceYears: 14,
    location: 'London / Remote',
    bio: 'Scaling engineering organizations, product-market fit strategy, and executive technical leadership. Mentoring staff engineers stepping into management.',
    skills: ['Tech Leadership', 'Product Strategy', 'System Architecture', 'Agile Scale'],
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80',
    rating: 5.0,
    reviewsCount: 71,
    sessionsGiven: 160,
    available: true,
    topics: ['Engineering Management', 'System Design Reviews', 'Product-Market Strategy']
  }
];
