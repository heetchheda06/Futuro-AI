export interface CareerSignal {
  id: string;
  category: 'hiring_trend' | 'new_tech' | 'layoff_opportunity' | 'skill_demand';
  title: string;
  source: string;
  time: string;
  impactScore: number; // 0 - 100
  aiSummary: string;
  fullBreakdown: string;
  relevance: string;
  tags: string[];
  salaryDelta?: string;
  targetRoles: string[];
  actionSteps: string[];
}

export const CAREER_SIGNALS_DATA: CareerSignal[] = [
  {
    id: 'signal-1',
    category: 'hiring_trend',
    title: 'Senior Generative AI Engineers Command +35% Compensation Premium in Q3',
    source: 'Tech Market Intelligence',
    time: '2 hours ago',
    impactScore: 94,
    aiSummary: 'Enterprise software companies are rapidly expanding hiring pipelines for candidates proficient in vector retrieval, fine-tuning, and RAG architectures.',
    fullBreakdown: 'Market data across 350+ technology hiring firms confirms that engineers with verified LLM pipeline experience (PyTorch, LangChain, LlamaIndex, Qdrant) receive 35% higher base offers ($180k-$240k USD) compared to standard full-stack developers.',
    relevance: 'Highly Relevant to your AI Engineer career roadmap.',
    tags: ['Generative AI', 'Salaries', 'Hiring Spikes'],
    salaryDelta: '+35% ($180k - $240k)',
    targetRoles: ['AI Engineer', 'ML Operations Lead', 'LLM Architect'],
    actionSteps: [
      'Build a production RAG application using Pgvector or Qdrant.',
      'Highlight vector embedding search latency optimization on your resume.',
      'Prepare system design answers on multi-agent routing.'
    ]
  },
  {
    id: 'signal-2',
    category: 'new_tech',
    title: 'Google & DeepMind Announce Gemini 2.5 Flash API Upgrades for Real-Time Agents',
    source: 'AI Research Weekly',
    time: '5 hours ago',
    impactScore: 91,
    aiSummary: 'New streaming protocols reduce token latency to under 80ms while expanding native tool execution hooks.',
    fullBreakdown: 'Google Cloud has released Gemini 2.5 Flash API with bidirectional audio/text streaming and native function calling. The runtime enables sub-100ms multi-modal response loops for interactive AI voice assistants and autonomous code agents.',
    relevance: 'Matches your current project blueprint stack.',
    tags: ['Gemini', 'LLM Infrastructure', 'API'],
    salaryDelta: 'High Demand Shift',
    targetRoles: ['Full Stack AI Developer', 'AI Solutions Architect'],
    actionSteps: [
      'Experiment with Gemini 2.5 Flash function calling in Node.js or Python.',
      'Replace polling loops with streaming WebSocket connections.',
      'Integrate agentic tool error handlers in backend pipelines.'
    ]
  },
  {
    id: 'signal-3',
    category: 'layoff_opportunity',
    title: 'Cloud Infrastructure & SRE Roles Expand Following Enterprise Cloud Migrations',
    source: 'Cloud Weekly',
    time: '1 day ago',
    impactScore: 88,
    aiSummary: 'Despite general tech re-alignments, specialized Kubernetes and Cloud Security roles experience record low candidate supply.',
    fullBreakdown: 'Enterprise cloud migration mandates have created a deficit of senior SREs. Companies are actively recruiting engineers capable of building multi-region AWS/GCP Kubernetes clusters and managing automated CI/CD security pipelines.',
    relevance: 'Good secondary path option.',
    tags: ['DevOps', 'AWS', 'Kubernetes'],
    salaryDelta: '+22% ($150k - $210k)',
    targetRoles: ['Site Reliability Engineer', 'Cloud Architect', 'DevOps Specialist'],
    actionSteps: [
      'Obtain AWS Certified Solutions Architect Associate or CKA certification.',
      'Demonstrate Terraform IaC script modules in GitHub repositories.',
      'Practice Kubernetes cluster autoscaling & Prometheus monitoring questions.'
    ]
  },
  {
    id: 'signal-4',
    category: 'skill_demand',
    title: 'Rust & Memory-Safe Systems Programming Demand Surges Across Security Firms',
    source: 'Systems Engineering Telemetry',
    time: '1 day ago',
    impactScore: 89,
    aiSummary: 'US CISA and major tech leaders mandate memory-safe languages for new core infrastructure projects, driving 45% increase in Rust postings.',
    fullBreakdown: 'Federal advisories and corporate zero-trust initiatives are driving a fast transition away from C/C++ toward Rust for OS kernels, network proxies, and high-frequency trading backends.',
    relevance: 'Extremely high growth trajectory.',
    tags: ['Rust', 'Systems Programming', 'Memory Safety'],
    salaryDelta: '+30% ($165k - $220k)',
    targetRoles: ['Systems Engineer', 'Rust Developer', 'Security Infrastructure Engineer'],
    actionSteps: [
      'Complete the official Rust Book and build a CLI or networking tool.',
      'Understand borrow checker principles, ownership, and zero-cost abstractions.',
      'Contribute to open-source Rust crates.'
    ]
  },
  {
    id: 'signal-5',
    category: 'hiring_trend',
    title: 'Full Stack + AI Integration Engineers Experience 3x More Recruiter Outreach',
    source: 'Tech Talent Index 2026',
    time: '2 days ago',
    impactScore: 93,
    aiSummary: 'Startups and scale-ups prioritize T-shaped engineers who build Next.js frontends and connect Python AI backend microservices.',
    fullBreakdown: 'Recruiter outbound messages are overwhelmingly targeted at full-stack engineers who list both modern React/Next.js UI mastery and Python FastAPI LLM integration experience.',
    relevance: 'Directly aligns with your current profile.',
    tags: ['Full Stack', 'React', 'FastAPI', 'Career Growth'],
    salaryDelta: '+28% ($140k - $195k)',
    targetRoles: ['Full Stack AI Engineer', 'Product Engineer', 'Lead Developer'],
    actionSteps: [
      'Add end-to-end full-stack AI project links to your LinkedIn headline.',
      'Highlight Next.js 15 Server Components and FastAPI integration.',
      'Showcase live deployed web app demos on Vercel or Render.'
    ]
  },
  {
    id: 'signal-6',
    category: 'new_tech',
    title: 'Vector Database Benchmarks Highlight Qdrant & Pgvector for Production RAG',
    source: 'Database Infrastructure Digest',
    time: '2 days ago',
    impactScore: 86,
    aiSummary: 'Recent benchmarks demonstrate PostgreSQL with Pgvector HNSW indexes matching specialized vector database throughput at 10x lower operational complexity.',
    fullBreakdown: 'Engineering teams are adopting Pgvector for medium-scale vector workloads, avoiding standalone cluster maintenance while achieving sub-20ms vector search latency.',
    relevance: 'Useful for backend database optimization.',
    tags: ['PostgreSQL', 'Pgvector', 'RAG', 'Databases'],
    salaryDelta: 'Database Skill Surge',
    targetRoles: ['Database Architect', 'Backend Engineer', 'Data Engineer'],
    actionSteps: [
      'Learn HNSW vs IVFFlat indexing in PostgreSQL.',
      'Build cosine similarity & dot product vector search queries.',
      'Benchmark embedding retrieval performance under load.'
    ]
  },
  {
    id: 'signal-7',
    category: 'layoff_opportunity',
    title: 'Fintech & HealthTech Lead Series-B Tech Venture Capital Inflows',
    source: 'Venture Pulse Report',
    time: '3 days ago',
    impactScore: 85,
    aiSummary: 'Capital allocation has concentrated into AI-native healthcare diagnostics and automated financial fraud prevention startups.',
    fullBreakdown: 'Venture funding in Q3 showed a 40% uptick for Series-B startups applying generative AI to healthcare clinical notes and automated credit scoring.',
    relevance: 'High growth industry sector alert.',
    tags: ['Fintech', 'HealthTech', 'Venture Funding'],
    salaryDelta: 'Equity + Salary Upside',
    targetRoles: ['Senior Software Engineer', 'AI Product Manager', 'Data Scientist'],
    actionSteps: [
      'Target Series-B startup career boards for open remote positions.',
      'Highlight domain-specific compliance & high-reliability API experience.',
      'Tailor cover letters to highlight business ROI impact.'
    ]
  },
  {
    id: 'signal-8',
    category: 'skill_demand',
    title: 'System Design Mastery Becomes Primary Hiring Filter for Senior Software Engineers',
    source: 'Engineering Hiring Bar',
    time: '4 days ago',
    impactScore: 92,
    aiSummary: 'Interview panels are shifting away from standalone LeetCode algorithmic puzzles toward distributed system design and trade-off evaluations.',
    fullBreakdown: '85% of tech companies report evaluating candidates primarily on capacity planning, message queue selection (Kafka vs RabbitMQ), and caching strategies (Redis vs Memcached).',
    relevance: 'Crucial for senior engineering interviews.',
    tags: ['System Design', 'Kafka', 'Redis', 'Architecture'],
    salaryDelta: '+25% Senior Elevation',
    targetRoles: ['Senior Software Engineer', 'Staff Engineer', 'Tech Lead'],
    actionSteps: [
      'Study system design case studies (URL shortener, rate limiter, chat app).',
      'Practice drawing architecture diagrams with clear data flow arrows.',
      'Explain trade-offs clearly: latency vs consistency, SQL vs NoSQL.'
    ]
  },
  {
    id: 'signal-9',
    category: 'hiring_trend',
    title: 'Remote Global Tech Roles Expand Across Europe & APAC Engineering Hubs',
    source: 'Global Remote Report',
    time: '5 days ago',
    impactScore: 87,
    aiSummary: 'Cross-border remote hiring platforms report a 32% increase in USD/EUR-denominated contracts for engineers in India and Southeast Asia.',
    fullBreakdown: 'International tech firms are leveraging remote talent platforms to hire senior software engineers globally, offering competitive international compensation packages with flexible working hours.',
    relevance: 'Relevant for remote work seekers.',
    tags: ['Remote Work', 'Global Hiring', 'USD Salaries'],
    salaryDelta: 'Global Compensation Match',
    targetRoles: ['Remote Senior Engineer', 'Full Stack Developer', 'Consultant'],
    actionSteps: [
      'Optimize your GitHub profile & README to highlight remote async collaboration.',
      'Set up profiles on top global remote talent platforms.',
      'Prepare evidence of autonomous problem-solving & communication.'
    ]
  },
  {
    id: 'signal-10',
    category: 'new_tech',
    title: 'Next.js 15 & React 19 Compiler Reduces Client JS Bundles by 40%',
    source: 'Frontend Weekly',
    time: '6 days ago',
    impactScore: 90,
    aiSummary: 'Automatic memoization and edge server components deliver instantaneous page transitions and improved SEO metrics.',
    fullBreakdown: 'Production benchmarks across 1,000 Next.js 15 deployments show significant improvements in Core Web Vitals (LCP, INP), resulting in higher organic search traffic and faster user conversion rates.',
    relevance: 'Matches your current web application framework.',
    tags: ['Next.js', 'React 19', 'Frontend', 'Performance'],
    salaryDelta: 'Frontend Core Skill',
    targetRoles: ['Frontend Lead', 'Full Stack Developer', 'UI Engineer'],
    actionSteps: [
      'Upgrade React apps to Next.js 15 App Router standard.',
      'Utilize Server Actions for seamless client-server data mutations.',
      'Audit bundle size with Next.js Bundle Analyzer.'
    ]
  }
];
