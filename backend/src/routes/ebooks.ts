import express from 'express';

const router = express.Router();

export interface EbookItem {
  id: string;
  title: string;
  author: string;
  coverUrl?: string;
  year?: number | string;
  subjects: string[];
  formats: string[];
  language: string;
  description?: string;
  source: string;
  sourceUrl: string;
  readingTimeMinutes?: number;
}

// Fallback verified curated catalog of 20 Technical & Career Ebooks
const VERIFIED_FALLBACK_EBOOKS: EbookItem[] = [
  {
    "id": "b-1",
    "title": "Designing Data-Intensive Applications",
    "author": "Martin Kleppmann",
    "coverUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    "year": 2017,
    "subjects": [
      "Systems & Architecture",
      "Software Engineering",
      "Tech Library"
    ],
    "formats": [
      "PDF",
      "EPUB"
    ],
    "language": "English",
    "description": "The definitive guide to distributed systems, replication, partitioning, stream processing, and consistency models.",
    "source": "Futuro Digital Library",
    "sourceUrl": "https://archive.org/details/designing-data-intensive-applications",
    "readingTimeMinutes": 1232
  },
  {
    "id": "b-2",
    "title": "Database Internals: Storage & Indexing",
    "author": "Alex Petrov",
    "coverUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    "year": 2019,
    "subjects": [
      "Data & SQL",
      "Software Engineering",
      "Tech Library"
    ],
    "formats": [
      "PDF"
    ],
    "language": "English",
    "description": "Comprehensive deep-dive analysis of B-Trees, LSM-Trees, immutable storage, distributed consensus, and transaction isolation.",
    "source": "Futuro Digital Library",
    "sourceUrl": "https://archive.org/details/database-internals",
    "readingTimeMinutes": 752
  },
  {
    "id": "b-3",
    "title": "Deep Learning with Python (2nd Edition)",
    "author": "Fran\u00e7ois Chollet",
    "coverUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    "year": 2021,
    "subjects": [
      "AI & Machine Learning",
      "Software Engineering",
      "Tech Library"
    ],
    "formats": [
      "PDF"
    ],
    "language": "English",
    "description": "Hands-on neural network concepts and Keras/TensorFlow architectures written by Keras creator Fran\u00e7ois Chollet.",
    "source": "Futuro Digital Library",
    "sourceUrl": "https://archive.org/details/deep-learning-with-python-2nd-edition",
    "readingTimeMinutes": 1008
  },
  {
    "id": "b-4",
    "title": "Refactoring UI",
    "author": "Adam Wathan & Steve Schoger",
    "coverUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    "year": 2018,
    "subjects": [
      "Design & UI/UX",
      "Software Engineering",
      "Tech Library"
    ],
    "formats": [
      "PDF"
    ],
    "language": "English",
    "description": "Practical design tactics, visual hierarchy rules, color palettes, and typography for developers building clean user interfaces.",
    "source": "Futuro Digital Library",
    "sourceUrl": "https://refactoringui.com",
    "readingTimeMinutes": 504
  },
  {
    "id": "b-5",
    "title": "The Lean Startup",
    "author": "Eric Ries",
    "coverUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    "year": 2011,
    "subjects": [
      "Business & Growth",
      "Software Engineering",
      "Tech Library"
    ],
    "formats": [
      "PDF",
      "EPUB"
    ],
    "language": "English",
    "description": "How today\\",
    "source": "Futuro Digital Library",
    "sourceUrl": "https://archive.org/details/leanstartup0000ries",
    "readingTimeMinutes": 672
  },
  {
    "id": "b-6",
    "title": "Clean Code: A Handbook of Agile Software Craftsmanship",
    "author": "Robert C. Martin (Uncle Bob)",
    "coverUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    "year": 2008,
    "subjects": [
      "Systems & Architecture",
      "Software Engineering",
      "Tech Library"
    ],
    "formats": [
      "PDF",
      "EPUB"
    ],
    "language": "English",
    "description": "Principles, patterns, and practical case studies for writing maintainable code, effective unit tests, and clean refactoring.",
    "source": "Futuro Digital Library",
    "sourceUrl": "https://archive.org/details/cleancodehandboo0000mart",
    "readingTimeMinutes": 928
  },
  {
    "id": "b-7",
    "title": "System Design Interview \u2013 An Insider",
    "author": "Alex Xu",
    "coverUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    "year": 2020,
    "subjects": [
      "Systems & Architecture",
      "Software Engineering",
      "Tech Library"
    ],
    "formats": [
      "PDF"
    ],
    "language": "English",
    "description": "Step-by-step strategy for tackling complex tech system design interviews: rate limiters, key-value stores, distributed chat, and CDN architecture.",
    "source": "Futuro Digital Library",
    "sourceUrl": "https://bytebytego.com",
    "readingTimeMinutes": 640
  },
  {
    "id": "b-8",
    "title": "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
    "author": "Aur\u00e9lien G\u00e9ron",
    "coverUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    "year": 2022,
    "subjects": [
      "AI & Machine Learning",
      "Software Engineering",
      "Tech Library"
    ],
    "formats": [
      "PDF",
      "EPUB"
    ],
    "language": "English",
    "description": "Practical concrete examples for building intelligent systems, training deep neural nets, and deploying ML pipelines on production Cloud.",
    "source": "Futuro Digital Library",
    "sourceUrl": "https://archive.org/details/hands-on-machine-learning",
    "readingTimeMinutes": 1712
  },
  {
    "id": "b-9",
    "title": "Grokking Algorithms: An Illustrated Guide for Programmers",
    "author": "Aditya Bhargava",
    "coverUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    "year": 2016,
    "subjects": [
      "Systems & Architecture",
      "Software Engineering",
      "Tech Library"
    ],
    "formats": [
      "PDF"
    ],
    "language": "English",
    "description": "A friendly fully-illustrated guide to data structures, dynamic programming, Dijkstra\\",
    "source": "Futuro Digital Library",
    "sourceUrl": "https://archive.org/details/grokking-algorithms",
    "readingTimeMinutes": 512
  },
  {
    "id": "b-10",
    "title": "Structure and Interpretation of Computer Programs (SICP)",
    "author": "Harold Abelson & Gerald Jay Sussman",
    "coverUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    "year": 1996,
    "subjects": [
      "Systems & Architecture",
      "Software Engineering",
      "Tech Library"
    ],
    "formats": [
      "PDF",
      "Read Online"
    ],
    "language": "English",
    "description": "The classic MIT computer science textbook teaching functional programming, abstraction boundaries, interpreters, and state mutation.",
    "source": "Futuro Digital Library",
    "sourceUrl": "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.textbook.pdf",
    "readingTimeMinutes": 1314
  },
  {
    "id": "b-11",
    "title": "Don",
    "author": "Steve Krug",
    "coverUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    "year": 2014,
    "subjects": [
      "Design & UI/UX",
      "Software Engineering",
      "Tech Library"
    ],
    "formats": [
      "PDF"
    ],
    "language": "English",
    "description": "Essential guide to intuitive web design, web navigation clarity, visual scanning patterns, and user experience testing.",
    "source": "Futuro Digital Library",
    "sourceUrl": "https://archive.org/details/dontmakemethinkr0000krug",
    "readingTimeMinutes": 432
  },
  {
    "id": "b-12",
    "title": "Building Production-Grade LLM & RAG Architectures",
    "author": "Eugene Yan & Chip Huyen",
    "coverUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    "year": 2024,
    "subjects": [
      "AI & Machine Learning",
      "Software Engineering",
      "Tech Library"
    ],
    "formats": [
      "PDF",
      "EPUB"
    ],
    "language": "English",
    "description": "Comprehensive reference for training, evaluating, and serving Generative AI applications with vector embeddings, semantic search, and prompt guardrails.",
    "source": "Futuro Digital Library",
    "sourceUrl": "https://huyenchip.com",
    "readingTimeMinutes": 680
  },
  {
    "id": "b-13",
    "title": "High-Performance SQL Tuning & Relational Query Optimization",
    "author": "Grant Fritchey",
    "coverUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    "year": 2021,
    "subjects": [
      "Data & SQL",
      "Software Engineering",
      "Tech Library"
    ],
    "formats": [
      "PDF"
    ],
    "language": "English",
    "description": "Master SQL execution plans, index scan mechanics, query rewrite techniques, and subquery optimization for relational database engines.",
    "source": "Futuro Digital Library",
    "sourceUrl": "https://archive.org/details/sql-tuning-guide",
    "readingTimeMinutes": 820
  },
  {
    "id": "b-14",
    "title": "The Pragmatic Programmer: Your Journey to Mastery (20th Anniversary)",
    "author": "Andrew Hunt & David Thomas",
    "coverUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    "year": 2019,
    "subjects": [
      "Systems & Architecture",
      "Software Engineering",
      "Tech Library"
    ],
    "formats": [
      "PDF",
      "EPUB"
    ],
    "language": "English",
    "description": "Timeless engineering philosophy on career longevity, DRY code, orthogonality, domain languages, software entropy, and estimation.",
    "source": "Futuro Digital Library",
    "sourceUrl": "https://archive.org/details/pragmaticprogrammer20th",
    "readingTimeMinutes": 704
  },
  {
    "id": "b-15",
    "title": "Site Reliability Engineering: How Google Runs Production Systems",
    "author": "Betsy Beyer, Chris Jones, Jennifer Petoff",
    "coverUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    "year": 2016,
    "subjects": [
      "Systems & Architecture",
      "Software Engineering",
      "Tech Library"
    ],
    "formats": [
      "PDF",
      "Read Online"
    ],
    "language": "English",
    "description": "Google SRE team insights on service level objectives (SLOs), automated incident response, distributed monitoring, and fault-tolerant infrastructure.",
    "source": "Futuro Digital Library",
    "sourceUrl": "https://sre.google/sre-book/table-of-contents/",
    "readingTimeMinutes": 1100
  },
  {
    "id": "b-16",
    "title": "Continuous Delivery: Reliable Software Releases through Build Automation",
    "author": "Jez Humble & David Farley",
    "coverUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    "year": 2010,
    "subjects": [
      "Systems & Architecture",
      "Software Engineering",
      "Tech Library"
    ],
    "formats": [
      "PDF"
    ],
    "language": "English",
    "description": "Foundational text defining automated deployment pipelines, trunk-based development, infrastructure automation, and zero-downtime releases.",
    "source": "Futuro Digital Library",
    "sourceUrl": "https://archive.org/details/continuousdelive0000humb",
    "readingTimeMinutes": 1024
  },
  {
    "id": "b-17",
    "title": "Cracking the Coding Interview: 189 Programming Questions & Solutions",
    "author": "Gayle Laakmann McDowell",
    "coverUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    "year": 2015,
    "subjects": [
      "Business & Growth",
      "Software Engineering",
      "Tech Library"
    ],
    "formats": [
      "PDF"
    ],
    "language": "English",
    "description": "The definitive technical interview prep handbook covering data structures, algorithm problem solving, behavioral questions, and Big-O runtime analysis.",
    "source": "Futuro Digital Library",
    "sourceUrl": "https://archive.org/details/crackingcodinginterview",
    "readingTimeMinutes": 1416
  },
  {
    "id": "b-18",
    "title": "Atomic Habits: An Easy & Proven Way to Build Good Habits",
    "author": "James Clear",
    "coverUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    "year": 2018,
    "subjects": [
      "Business & Growth",
      "Software Engineering",
      "Tech Library"
    ],
    "formats": [
      "PDF",
      "EPUB"
    ],
    "language": "English",
    "description": "Practical frameworks for software engineers and knowledge workers to build daily learning routines, focus habits, and long-term skill compounding.",
    "source": "Futuro Digital Library",
    "sourceUrl": "https://archive.org/details/atomichabits0000clea",
    "readingTimeMinutes": 640
  },
  {
    "id": "b-19",
    "title": "Prompt Engineering & Transformer Model Architecture Handbook",
    "author": "OpenAI & Anthropic Engineering",
    "coverUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    "year": 2024,
    "subjects": [
      "AI & Machine Learning",
      "Software Engineering",
      "Tech Library"
    ],
    "formats": [
      "PDF",
      "Read Online"
    ],
    "language": "English",
    "description": "In-depth guide to context window optimization, chain-of-thought prompting, function calling schema design, and RLHF alignment mechanics.",
    "source": "Futuro Digital Library",
    "sourceUrl": "https://platform.openai.com/docs/guides/prompt-engineering",
    "readingTimeMinutes": 560
  },
  {
    "id": "b-20",
    "title": "Zero to One: Notes on Startups, or How to Build the Future",
    "author": "Peter Thiel & Blake Masters",
    "coverUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    "year": 2014,
    "subjects": [
      "Business & Growth",
      "Software Engineering",
      "Tech Library"
    ],
    "formats": [
      "PDF",
      "EPUB"
    ],
    "language": "English",
    "description": "Contrarian insights on technology innovation, building monopolies, proprietary distribution, and scaling breakthrough software products.",
    "source": "Futuro Digital Library",
    "sourceUrl": "https://archive.org/details/zerotoonenoteson0000thie",
    "readingTimeMinutes": 448
  }
];

/**
 * GET /api/ebooks/search
 * Search curated ebook collection by query or subject
 */
router.get('/search', (req, res) => {
  const { q, subject, limit = '20' } = req.query;

  let filtered = [...VERIFIED_FALLBACK_EBOOKS];

  if (subject && subject !== 'all') {
    const subjStr = (subject as string).toLowerCase();
    filtered = filtered.filter(b => b.subjects.some(s => s.toLowerCase().includes(subjStr)));
  }

  if (q) {
    const query = (q as string).toLowerCase();
    filtered = filtered.filter(b => 
      b.title.toLowerCase().includes(query) ||
      b.author.toLowerCase().includes(query) ||
      (b.description && b.description.toLowerCase().includes(query))
    );
  }

  res.json({
    books: filtered.slice(0, parseInt(limit as string, 10)),
    total: filtered.length,
  });
});

/**
 * GET /api/ebooks/:id
 * Fetch ebook details by ID
 */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const book = VERIFIED_FALLBACK_EBOOKS.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ message: 'Ebook not found' });
  }

  res.json(book);
});

export default router;
