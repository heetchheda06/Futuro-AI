export interface NewsArticle {
  id: string;
  title: string;
  category: 'AI & Engineering' | 'Cloud & Infrastructure' | 'Career Strategy' | 'Web Development' | 'Cybersecurity' | 'Big Data & Analytics' | 'UI/UX & Design' | 'Software Engineering' | 'Open Source';
  time: string;
  readTime: string;
  desc: string;
  fullSummary: string;
  source: string;
  sourceUrl: string;
  keyTakeaways: string[];
}

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'The Shift from Prompt Engineering to Agentic Workflow Orchestration',
    category: 'AI & Engineering',
    time: '2 hours ago',
    readTime: '4 min read',
    desc: 'Why top engineering teams at OpenAI, Anthropic, and Google are building autonomous multi-agent tool-calling loops instead of relying on single static prompts.',
    fullSummary: 'Single static prompts are rapidly giving way to agentic workflow loops. By combining LLMs with structured tool-calling functions (APIs, web search, database querying, code execution), software engineers are building self-correcting autonomous agents that decompose complex user requests into multi-step execution plans.',
    source: 'TechCrunch AI Digest',
    sourceUrl: 'https://techcrunch.com',
    keyTakeaways: [
      'Multi-agent routing enables specialized subagents to handle isolated subtasks.',
      'ReAct (Reason + Act) loops automatically inspect API errors and retry with modified arguments.',
      'State persistence & checkpointing allow human-in-the-loop validation for critical decisions.'
    ]
  },
  {
    id: 'news-2',
    title: 'State of Cloud Microservices 2026: Asynchronous Frameworks Take Center Stage',
    category: 'Cloud & Infrastructure',
    time: '5 hours ago',
    readTime: '5 min read',
    desc: 'Benchmark study showing FastAPI, Go (gRPC), and Rust async microservices delivering 40% higher throughput per server cluster.',
    fullSummary: 'Global benchmark data across 500+ enterprise backend clusters shows non-blocking asynchronous architectures outperforming legacy synchronous frameworks. Teams adopting event-driven Go microservices and Python FastAPI backends saw a 40% reduction in Cloud infrastructure spend while maintaining sub-50ms p99 latency.',
    source: 'InfoQ Cloud Engineering',
    sourceUrl: 'https://www.infoq.com',
    keyTakeaways: [
      'Event loops reduce worker thread context switching overhead under heavy load.',
      'gRPC binary serialization cuts payload size by up to 60% compared to REST JSON.',
      'Container memory footprints dropped from 500MB to 45MB per replica when rewriting in Go.'
    ]
  },
  {
    id: 'news-3',
    title: 'Top 10 Technical Interview Tradeoffs Asked at Tier-1 Tech Firms',
    category: 'Career Strategy',
    time: '12 hours ago',
    readTime: '6 min read',
    desc: 'Detailed breakdown of caching, database indexing, and event queue tradeoffs frequently evaluated in senior interviews.',
    fullSummary: 'Engineering interview evaluations at top-tier firms (Google, Meta, Microsoft, Stripe) have pivoted heavily from simple LeetCode syntax to real-world system architecture tradeoffs. Candidates who articulate the exact conditions for choosing Write-Through vs Write-Back caching, or B-Trees vs LSM-Trees, pass system design rounds at double the rate.',
    source: 'ByteByteGo System Design Insights',
    sourceUrl: 'https://bytebytego.com',
    keyTakeaways: [
      'Always discuss CAP Theorem implications (Consistency vs Availability) before picking a database.',
      'Understand Write Amplification tradeoffs when evaluating LSM-Trees vs B+ Trees.',
      'Demonstrate capacity estimation math for memory, storage, and network throughput.'
    ]
  },
  {
    id: 'news-4',
    title: 'React 19 & Next.js 15: Server Actions & Zero-Bundle Components Benchmark',
    category: 'Web Development',
    time: '1 day ago',
    readTime: '4 min read',
    desc: 'Performance analysis of React Server Components, automatic memoization compiler, and streaming server responses.',
    fullSummary: 'React 19 and Next.js 15 introduce native Server Components and Server Actions that execute directly on the edge node. By eliminating client-side JavaScript bundle downloads for static and data-fetching UI elements, lighthouse performance scores improved across top web applications by 35 points.',
    source: 'Vercel Engineering Journal',
    sourceUrl: 'https://vercel.com/blog',
    keyTakeaways: [
      'Server Components execute on the edge, reducing JavaScript bundle size sent to browser.',
      'React Compiler automatically handles memoization (`useMemo` / `useCallback` no longer needed).',
      'Optimistic UI updates via `useOptimistic` hook provide instantaneous user feedback.'
    ]
  },
  {
    id: 'news-5',
    title: 'Quantum-Resistant Cryptography Standard Adopted for Enterprise APIs',
    category: 'Cybersecurity',
    time: '1 day ago',
    readTime: '5 min read',
    desc: 'NIST finalizes post-quantum encryption standards (ML-KEM and ML-DSA). Cloud providers begin rolling out hybrid TLS 1.3 handshakes.',
    fullSummary: 'The National Institute of Standards and Technology (NIST) has published final post-quantum cryptographic standards. Major cloud providers (Cloudflare, AWS, Google Cloud) are enabling hybrid post-quantum TLS 1.3 key exchanges to protect API traffic against future quantum decryption risks.',
    source: 'Cloudflare Security Insights',
    sourceUrl: 'https://blog.cloudflare.com',
    keyTakeaways: [
      'ML-KEM (formerly Kyber) provides post-quantum key encapsulation for secure TLS connections.',
      'Hybrid TLS handshakes combine classical RSA/ECC with post-quantum algorithms.',
      'DevOps teams should audit legacy TLS certificates and API gateway key lengths.'
    ]
  },
  {
    id: 'news-6',
    title: 'The Rise of Small Language Models (SLMs) in Edge & On-Device AI',
    category: 'AI & Engineering',
    time: '2 days ago',
    readTime: '4 min read',
    desc: 'Sub-3B parameter models like Phi-3 and Gemma 2 run locally on mobile NPU hardware with near GPT-3.5 latency and offline privacy.',
    fullSummary: 'While frontier LLMs continue scaling, Small Language Models (SLMs) with 1B to 3B parameters are revolutionizing edge computing. Thanks to 4-bit quantization and specialized NPU hardware, devices can run high-accuracy text summarization, code completion, and classification entirely offline.',
    source: 'MIT Technology Review',
    sourceUrl: 'https://www.technologyreview.com',
    keyTakeaways: [
      'INT4 and GGUF quantization allow 3B parameter models to run within 2GB RAM.',
      'On-device AI guarantees 100% data privacy and zero network latency.',
      'Greatly reduces cloud API inference costs for high-volume enterprise features.'
    ]
  },
  {
    id: 'news-7',
    title: 'Vector Database Benchmarks 2026: Pinecone, Qdrant, Milvus & Pgvector Compared',
    category: 'Big Data & Analytics',
    time: '2 days ago',
    readTime: '7 min read',
    desc: 'Head-to-head evaluation of HNSW indexing speed, QPS throughput under concurrent RAG queries, and memory compression.',
    fullSummary: 'An independent benchmark report tested the top vector database platforms under real-world RAG workloads (10 million vector embeddings, 1536 dimensions). Qdrant and Milvus led raw query-per-second (QPS) throughput, while Pgvector proved most cost-effective for medium workloads under 1 million vectors.',
    source: 'Database Trends & Applications',
    sourceUrl: 'https://dbta.com',
    keyTakeaways: [
      'HNSW (Hierarchical Navigable Small World) remains the fastest graph indexing algorithm.',
      'Hybrid search (dense vector embeddings + sparse BM25 keyword matching) improves RAG retrieval accuracy by 22%.',
      'Pgvector with HNSW index is sufficient for applications with under 1M items.'
    ]
  },
  {
    id: 'news-8',
    title: 'Tech Hiring Trends H2 2026: Demand Surges for Full Stack + AI Hybrid Engineers',
    category: 'Career Strategy',
    time: '3 days ago',
    readTime: '5 min read',
    desc: 'Industry compensation survey reveals engineers combining React/Next.js frontend skills with PyTorch/LLM integration earn a 28% salary premium.',
    fullSummary: 'The 2026 Tech Talent Salary Report highlights a major shift in software engineering hiring: companies are heavily prioritizing "Full Stack AI Engineers" who can both design fluid user interfaces and build Python AI microservices, RAG search pipelines, and agent workflows.',
    source: 'Hacker News Tech Hiring Report',
    sourceUrl: 'https://news.ycombinator.com',
    keyTakeaways: [
      'Hybrid Full Stack + AI skill sets command a 28% higher starting compensation.',
      'Employers look for portfolio projects demonstrating deployed end-to-end AI applications.',
      'Strong fundamentals in system architecture and clean code remain non-negotiable.'
    ]
  },
  {
    id: 'news-9',
    title: 'Kubernetes 1.32 Released: Native Dynamic Resource Allocation for GPU Workloads',
    category: 'Cloud & Infrastructure',
    time: '4 days ago',
    readTime: '6 min read',
    desc: 'The latest Kubernetes release introduces DRA improvements allowing fine-grained fractional GPU sharing for parallel model inference clusters.',
    fullSummary: 'Kubernetes 1.32 ships with major enhancements to Dynamic Resource Allocation (DRA). AI engineering teams can now schedule fractional GPU memory slices across multiple inference pods on NVIDIA H100/A100 clusters, maximizing GPU utilization from 35% to over 85%.',
    source: 'CNCF News & Announcements',
    sourceUrl: 'https://www.cncf.io',
    keyTakeaways: [
      'DRA enables dynamic GPU memory partitioning without dedicated per-pod hardware allocation.',
      'Saves up to 50% on cloud AI compute costs for small batch inference servers.',
      'Natively integrates with Prometheus metrics for GPU thermal and VRAM tracking.'
    ]
  },
  {
    id: 'news-10',
    title: 'Design Systems in 2026: Tokenized Architecture & Figma-to-Code Pipelines',
    category: 'UI/UX & Design',
    time: '4 days ago',
    readTime: '4 min read',
    desc: 'How top design engineering teams sync Figma variables automatically with Tailwind CSS tokens and automated visual regression testing.',
    fullSummary: 'Modern product design systems have evolved from static UI component kits to automated code pipelines. Using W3C Design Token standards, design changes in Figma automatically trigger GitHub PRs that update Tailwind CSS theme tokens and run Storybook visual regression builds.',
    source: 'Smashing Magazine',
    sourceUrl: 'https://www.smashingmagazine.com',
    keyTakeaways: [
      'Design tokens bridge the gap between Figma variables and Tailwind CSS custom utility classes.',
      'Automated visual regression tests (Chromatic/Playwright) prevent accidental UI breakage.',
      'Ensures 100% WCAG AAA color contrast compliance across light and dark modes.'
    ]
  },
  {
    id: 'news-11',
    title: 'Open Source AI Licenses: Apache 2.0 vs Llama Commercial Terms Explained',
    category: 'Open Source',
    time: '5 days ago',
    readTime: '5 min read',
    desc: 'Legal guide for startup founders and tech leaders navigating commercial usage rights of open-weights AI models vs permissive licenses.',
    fullSummary: 'Navigating open-source AI licenses is critical for technology leaders. This technical guide analyzes the differences between pure permissive licenses (Apache 2.0, MIT) and commercial open-weights licenses (Meta Llama 3, Mistral), detailing monthly active user thresholds and patent grant clauses.',
    source: 'Open Source Initiative (OSI)',
    sourceUrl: 'https://opensource.org',
    keyTakeaways: [
      'Apache 2.0 allows unrestricted commercial deployment, modification, and sublicensing.',
      'Open-weights models with custom commercial terms require legal review if active user counts scale.',
      'Always document data provenance when fine-tuning models on proprietary corporate datasets.'
    ]
  },
  {
    id: 'news-12',
    title: 'Rust in Production: Why Major Tech Companies Are Rewriting Core Infrastructure',
    category: 'Software Engineering',
    time: '6 days ago',
    readTime: '6 min read',
    desc: 'Case studies from Cloudflare, AWS, and Discord showing how memory safety without garbage collection reduced zero-day vulnerabilities by 70%.',
    fullSummary: 'Enterprise tech infrastructure is experiencing a massive shift toward Rust. Engineering case studies from AWS (Firecracker), Cloudflare (Pingora proxy), and Discord demonstrate how Rust\'s compile-time memory safety guarantees eliminated memory corruption vulnerabilities while eliminating JVM/Go garbage collection latency spikes.',
    source: 'ACM Queue Software Engineering',
    sourceUrl: 'https://queue.acm.org',
    keyTakeaways: [
      'Rust borrow checker prevents data races and memory corruption at compile time.',
      'Eliminates Garbage Collection (GC) pauses, delivering predictable sub-millisecond tail latency.',
      'Zero-cost abstractions allow high-level expression without runtime performance penalties.'
    ]
  }
];
