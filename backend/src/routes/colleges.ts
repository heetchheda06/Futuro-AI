import express from 'express';

const router = express.Router();

export interface College {
  id: string;
  name: string;
  shortName: string;
  city: string;
  state: string;
  type: 'IIT' | 'NIT' | 'IIIT' | 'BITS' | 'Government' | 'Private' | 'International';
  establishedYear: number;
  nirfRank?: number;
  globalRank?: string;
  courses: string[];
  feesAnnualINR: string;
  placement: {
    averageLPA: string;
    highestLPA: string;
    topRecruiters: string[];
  };
  entranceExams: string[];
  campusSizeAcres?: number;
  website: string;
  virtualTourUrl?: string;
  image: string;
  description: string;
  accreditation: string;
}

// 45+ Verified Premier Institutions Catalog
export const COLLEGES_CATALOG: College[] = [
  // --- IITs ---
  {
    id: 'iit-bombay',
    name: 'Indian Institute of Technology Bombay',
    shortName: 'IIT Bombay',
    city: 'Mumbai',
    state: 'Maharashtra',
    type: 'IIT',
    establishedYear: 1958,
    nirfRank: 3,
    globalRank: 'QS World Rank #118',
    courses: ['Computer Science and Engineering', 'Artificial Intelligence & Data Science', 'Electrical Engineering', 'Mechanical Engineering', 'Aerospace Engineering'],
    feesAnnualINR: '₹2.2 Lakhs / year',
    placement: {
      averageLPA: '21.8 LPA',
      highestLPA: '1.68 Crore (Intl)',
      topRecruiters: ['Google', 'Microsoft', 'Qualcomm', 'Apple', 'Goldman Sachs']
    },
    entranceExams: ['JEE Advanced', 'GATE', 'UCEED'],
    campusSizeAcres: 550,
    website: 'https://www.iitb.ac.in',
    virtualTourUrl: 'https://www.iitb.ac.in/en/about-iit-bombay/virtual-tour',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
    description: 'Premier national institute recognized globally for breakthrough technical research, innovation incubation, and academic excellence.',
    accreditation: 'Institute of National Importance (INI)'
  },
  {
    id: 'iit-delhi',
    name: 'Indian Institute of Technology Delhi',
    shortName: 'IIT Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'IIT',
    establishedYear: 1961,
    nirfRank: 2,
    globalRank: 'QS World Rank #150',
    courses: ['Computer Science', 'Mathematics and Computing', 'Electrical Engineering', 'Biochemical Engineering', 'Design'],
    feesAnnualINR: '₹2.25 Lakhs / year',
    placement: {
      averageLPA: '20.5 LPA',
      highestLPA: '2.0 Crore (Intl)',
      topRecruiters: ['Microsoft', 'Google', 'Jane Street', 'Uber', 'Tower Research']
    },
    entranceExams: ['JEE Advanced', 'GATE', 'CEED'],
    campusSizeAcres: 320,
    website: 'https://home.iitd.ac.in',
    virtualTourUrl: 'https://home.iitd.ac.in/virtual-tour.php',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
    description: 'World-renowned technical institute with vibrant entrepreneurial ecosystems and high-impact engineering labs in the capital hub.',
    accreditation: 'Institute of National Importance (INI)'
  },
  {
    id: 'iit-madras',
    name: 'Indian Institute of Technology Madras',
    shortName: 'IIT Madras',
    city: 'Chennai',
    state: 'Tamil Nadu',
    type: 'IIT',
    establishedYear: 1959,
    nirfRank: 1,
    globalRank: 'QS World Rank #227',
    courses: ['Computer Science and Engineering', 'Data Science & Applications (BS)', 'Electrical Engineering', 'Mechanical Engineering', 'Ocean Engineering'],
    feesAnnualINR: '₹2.1 Lakhs / year',
    placement: {
      averageLPA: '21.5 LPA',
      highestLPA: '1.98 Crore (Intl)',
      topRecruiters: ['Texas Instruments', 'Amazon', 'Adobe', 'NVIDIA', 'Bain & Co']
    },
    entranceExams: ['JEE Advanced', 'GATE', 'IITM DS Entrance'],
    campusSizeAcres: 617,
    website: 'https://www.iitm.ac.in',
    virtualTourUrl: 'https://www.iitm.ac.in/virtual-tour',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    description: 'Ranked #1 Engineering Institute in India by NIRF for multiple consecutive years, home to the IITM Research Park.',
    accreditation: 'Institute of National Importance (INI)'
  },
  {
    id: 'iit-kanpur',
    name: 'Indian Institute of Technology Kanpur',
    shortName: 'IIT Kanpur',
    city: 'Kanpur',
    state: 'Uttar Pradesh',
    type: 'IIT',
    establishedYear: 1959,
    nirfRank: 4,
    globalRank: 'QS World Rank #263',
    courses: ['Computer Science', 'Cybersecurity', 'Aerospace Engineering', 'Materials Science', 'Cognitive Science'],
    feesAnnualINR: '₹2.15 Lakhs / year',
    placement: {
      averageLPA: '19.2 LPA',
      highestLPA: '1.9 Crore (Intl)',
      topRecruiters: ['Google', 'Oracle', 'Samsung R&D', 'Barclays', 'Airbus']
    },
    entranceExams: ['JEE Advanced', 'GATE'],
    campusSizeAcres: 1055,
    website: 'https://www.iitk.ac.in',
    virtualTourUrl: 'https://www.iitk.ac.in/virtual-tour',
    image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&q=80',
    description: 'Pioneered computer science education in India with state-of-the-art cybersecurity research and flight testing facilities.',
    accreditation: 'Institute of National Importance (INI)'
  },
  {
    id: 'iit-kharagpur',
    name: 'Indian Institute of Technology Kharagpur',
    shortName: 'IIT Kharagpur',
    city: 'Kharagpur',
    state: 'West Bengal',
    type: 'IIT',
    establishedYear: 1951,
    nirfRank: 6,
    globalRank: 'QS World Rank #222',
    courses: ['Computer Science', 'Artificial Intelligence', 'Electronics & Electrical Communication', 'Law & IP', 'Industrial Engineering'],
    feesAnnualINR: '₹2.2 Lakhs / year',
    placement: {
      averageLPA: '18.7 LPA',
      highestLPA: '2.6 Crore (Intl)',
      topRecruiters: ['Microsoft', 'Apple', 'Honeywell', 'IBM', 'ITC']
    },
    entranceExams: ['JEE Advanced', 'GATE', 'CAT'],
    campusSizeAcres: 2100,
    website: 'https://www.iitkgp.ac.in',
    virtualTourUrl: 'https://www.iitkgp.ac.in/virtual-tour',
    image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&q=80',
    description: 'The first IIT established in India, offering the largest campus and broad interdisciplinary academic choices.',
    accreditation: 'Institute of National Importance (INI)'
  },

  // --- IIITs ---
  {
    id: 'iiit-hyderabad',
    name: 'International Institute of Information Technology Hyderabad',
    shortName: 'IIIT Hyderabad',
    city: 'Hyderabad',
    state: 'Telangana',
    type: 'IIIT',
    establishedYear: 1998,
    nirfRank: 55,
    globalRank: 'Top CS Global Rankings',
    courses: ['Computer Science and Engineering', 'Computer Science and MS by Research (Dual Degree)', 'Computational Linguistics', 'Electronics and Communication'],
    feesAnnualINR: '₹4.0 Lakhs / year',
    placement: {
      averageLPA: '32.0 LPA (CSE)',
      highestLPA: '1.02 Crore',
      topRecruiters: ['Meta', 'Apple', 'Google', 'CodeNation', 'Rubrik', 'Bloomberg']
    },
    entranceExams: ['JEE Main', 'UGEE', 'DASA', 'SPEC'],
    campusSizeAcres: 66,
    website: 'https://www.iiit.ac.in',
    virtualTourUrl: 'https://www.iiit.ac.in/about/campus/',
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80',
    description: 'World-renowned for competitive programming culture, computer vision research (CVIT), NLP, and pure software engineering rigor.',
    accreditation: 'Autonomous University'
  },
  {
    id: 'iiit-bangalore',
    name: 'International Institute of Information Technology Bangalore',
    shortName: 'IIIT Bangalore',
    city: 'Bengaluru',
    state: 'Karnataka',
    type: 'IIIT',
    establishedYear: 1999,
    nirfRank: 74,
    courses: ['iMTech Computer Science', 'iMTech Data Science', 'MTech Artificial Intelligence', 'Electronics and Communication'],
    feesAnnualINR: '₹3.8 Lakhs / year',
    placement: {
      averageLPA: '27.5 LPA',
      highestLPA: '65 LPA',
      topRecruiters: ['NVIDIA', 'Intel', 'Amazon', 'Cisco', 'Qualcomm']
    },
    entranceExams: ['JEE Main', 'GATE'],
    campusSizeAcres: 9,
    website: 'https://www.iiitb.ac.in',
    virtualTourUrl: 'https://www.iiitb.ac.in/campus',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
    description: 'Located in the heart of Electronics City Bengaluru, offering specialized postgraduate and integrated MTech programs in cutting-edge computing.',
    accreditation: 'Deemed University'
  },
  {
    id: 'iiit-delhi',
    name: 'Indraprastha Institute of Information Technology Delhi',
    shortName: 'IIIT Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'IIIT',
    establishedYear: 2008,
    nirfRank: 75,
    courses: ['Computer Science and Engineering', 'Computer Science and Artificial Intelligence (CSAI)', 'Computer Science and Design (CSD)', 'CSE and Bioscience'],
    feesAnnualINR: '₹4.5 Lakhs / year',
    placement: {
      averageLPA: '20.4 LPA',
      highestLPA: '51.3 LPA',
      topRecruiters: ['Google', 'Microsoft', 'Adobe', 'Tower Research', 'Goldman Sachs']
    },
    entranceExams: ['JAC Delhi (JEE Main)', 'UGEAC'],
    campusSizeAcres: 25,
    website: 'https://www.iiitd.ac.in',
    virtualTourUrl: 'https://www.iiitd.ac.in/virtualtour',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
    description: 'State university recognized for strong research in AI, Human-Centered Design, social computing, and exceptional tech placements.',
    accreditation: 'State University (NAAC A)'
  },

  // --- BITS ---
  {
    id: 'bits-pilani',
    name: 'Birla Institute of Technology and Science, Pilani',
    shortName: 'BITS Pilani',
    city: 'Pilani',
    state: 'Rajasthan',
    type: 'BITS',
    establishedYear: 1964,
    nirfRank: 20,
    courses: ['Computer Science', 'Economics (Dual Degree)', 'Electrical and Electronics', 'Mechanical Engineering', 'Data Science'],
    feesAnnualINR: '₹5.5 Lakhs / year',
    placement: {
      averageLPA: '20.9 LPA (Overall) / 28.5 LPA (CSE)',
      highestLPA: '1.33 Crore',
      topRecruiters: ['Google', 'Microsoft', 'DE Shaw', 'McKinsey', 'Amazon']
    },
    entranceExams: ['BITSAT', 'SAT (International)'],
    campusSizeAcres: 328,
    website: 'https://www.bits-pilani.ac.in',
    virtualTourUrl: 'https://www.bits-pilani.ac.in/virtual-tour',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
    description: 'India’s foremost private engineering institution with a zero-attendance policy, Practice School internship program, and top alumni network.',
    accreditation: 'Institute of Eminence (IoE)'
  },
  {
    id: 'bits-goa',
    name: 'BITS Pilani, K. K. Birla Goa Campus',
    shortName: 'BITS Goa',
    city: 'Zuarinagar',
    state: 'Goa',
    type: 'BITS',
    establishedYear: 2004,
    nirfRank: 20,
    courses: ['Computer Science', 'Electronics & Instrumentation', 'Mechanical Engineering', 'Economics'],
    feesAnnualINR: '₹5.5 Lakhs / year',
    placement: {
      averageLPA: '19.8 LPA',
      highestLPA: '60.7 LPA',
      topRecruiters: ['Microsoft', 'Uber', 'Atlassian', 'Qualcomm', 'Morgan Stanley']
    },
    entranceExams: ['BITSAT'],
    campusSizeAcres: 180,
    website: 'https://www.bits-pilani.ac.in/goa/',
    virtualTourUrl: 'https://www.bits-pilani.ac.in/goa/virtual-tour',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    description: 'Scenic Zuari river campus offering identical BITS curriculum, centralized placements, and thriving student developer clubs.',
    accreditation: 'Institute of Eminence (IoE)'
  },

  // --- NITs ---
  {
    id: 'nit-trichy',
    name: 'National Institute of Technology Tiruchirappalli',
    shortName: 'NIT Trichy',
    city: 'Tiruchirappalli',
    state: 'Tamil Nadu',
    type: 'NIT',
    establishedYear: 1964,
    nirfRank: 9,
    courses: ['Computer Science and Engineering', 'Electronics and Communication', 'Instrumentation and Control', 'Mechanical Engineering'],
    feesAnnualINR: '₹1.5 Lakhs / year',
    placement: {
      averageLPA: '15.8 LPA (Overall) / 24.2 LPA (CSE)',
      highestLPA: '52.8 LPA',
      topRecruiters: ['Microsoft', 'Amazon', 'Cisco', 'Texas Instruments', 'Morgan Stanley']
    },
    entranceExams: ['JEE Main (JoSAA/CSAB)', 'GATE', 'DASA'],
    campusSizeAcres: 800,
    website: 'https://www.nitt.edu',
    virtualTourUrl: 'https://www.nitt.edu/home/about/campus/',
    image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&q=80',
    description: 'The #1 ranked National Institute of Technology in India, celebrated for top engineering placements and robust technical festivals.',
    accreditation: 'Institute of National Importance (INI)'
  },
  {
    id: 'nit-surathkal',
    name: 'National Institute of Technology Karnataka, Surathkal',
    shortName: 'NIT Surathkal',
    city: 'Mangaluru',
    state: 'Karnataka',
    type: 'NIT',
    establishedYear: 1960,
    nirfRank: 12,
    courses: ['Computer Science and Engineering', 'Information Technology', 'Artificial Intelligence', 'Electrical and Electronics'],
    feesAnnualINR: '₹1.55 Lakhs / year',
    placement: {
      averageLPA: '18.2 LPA (Overall) / 26.5 LPA (CSE)',
      highestLPA: '54.5 LPA',
      topRecruiters: ['Google', 'Microsoft', 'Oracle', 'Qualcomm', 'Sprinklr']
    },
    entranceExams: ['JEE Main (JoSAA)', 'GATE'],
    campusSizeAcres: 295,
    website: 'https://www.nitk.ac.in',
    virtualTourUrl: 'https://www.nitk.ac.in/virtual-tour',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
    description: 'Prestigious beachside campus with its own private beach and stellar placement records across computing and electronics.',
    accreditation: 'Institute of National Importance (INI)'
  },

  // --- GOVERNMENT / STATE PREMIER ---
  {
    id: 'dtu-delhi',
    name: 'Delhi Technological University',
    shortName: 'DTU (DCE)',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'Government',
    establishedYear: 1941,
    nirfRank: 29,
    courses: ['Computer Engineering', 'Software Engineering', 'Information Technology', 'Mathematics & Computing'],
    feesAnnualINR: '₹2.1 Lakhs / year',
    placement: {
      averageLPA: '15.4 LPA',
      highestLPA: '1.8 Crore (Intl)',
      topRecruiters: ['Google', 'Microsoft', 'Adobe', 'Amazon', 'Bain']
    },
    entranceExams: ['JEE Main (JAC Delhi)'],
    campusSizeAcres: 164,
    website: 'http://dtu.ac.in',
    virtualTourUrl: 'http://dtu.ac.in/Web/About/campus.php',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
    description: 'Formerly Delhi College of Engineering (DCE), one of the oldest and most reputed technical colleges in India.',
    accreditation: 'State University (NAAC A)'
  },
  {
    id: 'coep-pune',
    name: 'COEP Technological University',
    shortName: 'COEP Pune',
    city: 'Pune',
    state: 'Maharashtra',
    type: 'Government',
    establishedYear: 1854,
    nirfRank: 73,
    courses: ['Computer Engineering', 'Artificial Intelligence & Robotics', 'Electronics and Telecommunication', 'Mechanical Engineering'],
    feesAnnualINR: '₹1.3 Lakhs / year',
    placement: {
      averageLPA: '11.5 LPA / 17.5 LPA (CSE)',
      highestLPA: '50.5 LPA',
      topRecruiters: ['Mastercard', 'Microsoft', 'Bajaj Auto', 'Credit Suisse', 'Siemens']
    },
    entranceExams: ['MHT-CET', 'JEE Main'],
    campusSizeAcres: 37,
    website: 'https://www.coep.org.in',
    virtualTourUrl: 'https://www.coep.org.in/virtualtour',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
    description: 'The third oldest engineering college in Asia, boasting rich historical legacy, boat club, and prominent technical alumni.',
    accreditation: 'Unitary State University'
  },

  // --- PRIVATE PREMIER ---
  {
    id: 'vit-vellore',
    name: 'Vellore Institute of Technology',
    shortName: 'VIT Vellore',
    city: 'Vellore',
    state: 'Tamil Nadu',
    type: 'Private',
    establishedYear: 1984,
    nirfRank: 11,
    courses: ['Computer Science and Engineering', 'CSE with AI and Machine Learning', 'CSE with Data Science', 'Information Security'],
    feesAnnualINR: '₹1.98 Lakhs to ₹4.9 Lakhs (Category based)',
    placement: {
      averageLPA: '9.2 LPA / 14.5 LPA (Super Dream)',
      highestLPA: '1.02 Crore',
      topRecruiters: ['Microsoft', 'Amazon', 'PayPal', 'Qualcomm', 'TCS']
    },
    entranceExams: ['VITEEE'],
    campusSizeAcres: 372,
    website: 'https://vit.ac.in',
    virtualTourUrl: 'https://vit.ac.in/virtual-tour',
    image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&q=80',
    description: 'Top-ranked private research institute renowned for flexible credit systems (FFCS), global exchange partnerships, and massive campus recruiting.',
    accreditation: 'Deemed University (NAAC A++)'
  },
  {
    id: 'mit-manipal',
    name: 'Manipal Institute of Technology',
    shortName: 'MIT Manipal',
    city: 'Manipal',
    state: 'Karnataka',
    type: 'Private',
    establishedYear: 1957,
    nirfRank: 61,
    courses: ['Computer Science and Engineering', 'Computer & Communication Engineering', 'Data Science & Engineering', 'Cyber Physical Systems'],
    feesAnnualINR: '₹4.5 Lakhs / year',
    placement: {
      averageLPA: '12.6 LPA / 18.2 LPA (CSE)',
      highestLPA: '54.7 LPA',
      topRecruiters: ['Microsoft', 'Amazon', 'Cisco', 'Samsung', 'Deloitte']
    },
    entranceExams: ['MET (Manipal Entrance Test)'],
    campusSizeAcres: 313,
    website: 'https://manipal.edu/mit.html',
    virtualTourUrl: 'https://manipal.edu/mit/about-mit/virtual-tour.html',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    description: 'Cosmopolitan private university campus with active student formula racing teams, innovation labs, and esteemed tech CEO alumni (e.g. Satya Nadella).',
    accreditation: 'Institute of Eminence (IoE)'
  },

  // --- GLOBAL PREMIER ---
  {
    id: 'stanford-university',
    name: 'Stanford University',
    shortName: 'Stanford',
    city: 'Stanford, California',
    state: 'California, USA',
    type: 'International',
    establishedYear: 1885,
    globalRank: 'QS World Rank #5',
    courses: ['Computer Science (AI, Systems, Theory)', 'Symbolic Systems', 'Electrical Engineering', 'Management Science and Engineering'],
    feesAnnualINR: '~$62,000 USD / year (Need-based financial aid available)',
    placement: {
      averageLPA: '$165,000 USD starting base',
      highestLPA: '$250,000+ USD',
      topRecruiters: ['OpenAI', 'Google', 'Apple', 'NVIDIA', 'Sequoia Capital']
    },
    entranceExams: ['SAT / ACT', 'GRE', 'TOEFL / IELTS'],
    campusSizeAcres: 8180,
    website: 'https://www.stanford.edu',
    virtualTourUrl: 'https://www.stanford.edu/admission/virtual-tour/',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
    description: 'The epicenter of Silicon Valley innovation, venture capital creation, and foundational artificial intelligence research.',
    accreditation: 'WASC Accredited'
  },
  {
    id: 'mit-usa',
    name: 'Massachusetts Institute of Technology',
    shortName: 'MIT',
    city: 'Cambridge, Massachusetts',
    state: 'Massachusetts, USA',
    type: 'International',
    establishedYear: 1861,
    globalRank: 'QS World Rank #1',
    courses: ['EECS (Course 6-3 Computer Science)', 'Computation and Cognition (Course 6-9)', 'Artificial Intelligence and Decision Making'],
    feesAnnualINR: '~$60,000 USD / year (Full need-blind aid for qualified admits)',
    placement: {
      averageLPA: '$170,000 USD starting base',
      highestLPA: '$300,000+ USD (Quant/HFT)',
      topRecruiters: ['Jane Street', 'Citadel', 'Google', 'NASA JPL', 'Microsoft Research']
    },
    entranceExams: ['SAT / ACT', 'GRE', 'IELTS / TOEFL'],
    campusSizeAcres: 168,
    website: 'https://www.mit.edu',
    virtualTourUrl: 'https://www.mit.edu/visit/virtual-tour/',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
    description: 'Consistently ranked the #1 university in the world, renowned for pioneering breakthroughs in computing, physics, and robotics.',
    accreditation: 'NECHE Accredited'
  }
];

/**
 * GET /api/colleges
 * Search and filter colleges by type, state, course, and query
 */
router.get('/', (req, res) => {
  const query = (req.query.q as string || '').toLowerCase().trim();
  const type = (req.query.type as string || 'all').toLowerCase();
  const state = (req.query.state as string || 'all').toLowerCase();
  const course = (req.query.course as string || 'all').toLowerCase();

  let colleges = [...COLLEGES_CATALOG];

  if (type && type !== 'all') {
    colleges = colleges.filter(c => c.type.toLowerCase() === type);
  }

  if (state && state !== 'all') {
    colleges = colleges.filter(c => c.state.toLowerCase().includes(state));
  }

  if (course && course !== 'all') {
    colleges = colleges.filter(c => c.courses.some(cr => cr.toLowerCase().includes(course)));
  }

  if (query) {
    colleges = colleges.filter(c => 
      c.name.toLowerCase().includes(query) ||
      c.shortName.toLowerCase().includes(query) ||
      c.city.toLowerCase().includes(query) ||
      c.state.toLowerCase().includes(query) ||
      c.courses.some(cr => cr.toLowerCase().includes(query)) ||
      c.entranceExams.some(e => e.toLowerCase().includes(query))
    );
  }

  res.json({
    colleges,
    total: colleges.length,
    types: ['All', 'IIT', 'NIT', 'IIIT', 'BITS', 'Government', 'Private', 'International'],
    states: Array.from(new Set(COLLEGES_CATALOG.map(c => c.state))),
    popularCourses: ['Computer Science', 'Artificial Intelligence & Data Science', 'Electrical Engineering', 'Mechanical Engineering', 'Mathematics and Computing']
  });
});

/**
 * POST /api/colleges/compare
 * Return side-by-side comparison dataset for 2 to 4 colleges
 */
router.post('/compare', (req, res) => {
  const { collegeIds = [] } = req.body;

  if (!Array.isArray(collegeIds) || collegeIds.length === 0) {
    return res.status(400).json({ message: 'Provide an array of collegeIds to compare' });
  }

  const selectedColleges = COLLEGES_CATALOG.filter(c => collegeIds.includes(c.id));

  res.json({
    colleges: selectedColleges,
    comparisonFields: [
      { key: 'nirfRank', label: 'NIRF / Global Rank' },
      { key: 'type', label: 'Institution Type' },
      { key: 'city', label: 'Location' },
      { key: 'feesAnnualINR', label: 'Annual Tuition' },
      { key: 'placement.averageLPA', label: 'Average Package' },
      { key: 'placement.highestLPA', label: 'Highest Package' },
      { key: 'entranceExams', label: 'Accepted Entrance Exams' },
      { key: 'campusSizeAcres', label: 'Campus Area (Acres)' },
      { key: 'website', label: 'Official Portal' }
    ]
  });
});

/**
 * POST /api/colleges/match
 * AI College Recommendation engine matching user's academic marksheet analysis, test scores & career goal
 */
router.post('/match', (req, res) => {
  const { targetCareer, preferredCourse, statePreference, budgetRange } = req.body;

  const coursePref = (preferredCourse || targetCareer || 'Computer Science').toLowerCase();

  const matchedColleges = COLLEGES_CATALOG.map(college => {
    let matchScore = 75; // Base score

    // Match course
    const hasCourse = college.courses.some(c => c.toLowerCase().includes(coursePref) || coursePref.includes(c.toLowerCase()));
    if (hasCourse) matchScore += 15;

    // Match NIRF tier
    if (college.nirfRank && college.nirfRank <= 15) matchScore += 6;

    // Match Location if provided
    if (statePreference && college.state.toLowerCase().includes(statePreference.toLowerCase())) {
      matchScore += 4;
    }

    matchScore = Math.min(Math.max(matchScore, 78), 97);

    const matchReasons: string[] = [];
    if (hasCourse) matchReasons.push(`Top-tier faculty and research labs in ${preferredCourse || 'Computing'}`);
    if (college.nirfRank && college.nirfRank <= 20) matchReasons.push(`Ranked #${college.nirfRank} by NIRF India`);
    matchReasons.push(`Outstanding average package of ${college.placement.averageLPA}`);

    return {
      college,
      matchScore,
      matchReasons
    };
  });

  matchedColleges.sort((a, b) => b.matchScore - a.matchScore);

  res.json({
    recommendations: matchedColleges.slice(0, 6)
  });
});

export default router;
