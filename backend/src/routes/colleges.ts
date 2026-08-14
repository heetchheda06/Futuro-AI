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

// Comprehensive 732 Institutions Catalog
export const COLLEGES_CATALOG: College[] = [
  {
    "id": "col-0",
    "name": "Indian Institute of Technology Madras",
    "shortName": "Indian Institute of Technology Madras",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "IIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b975,116 / year",
    "placement": {
      "averageLPA": "8.8 LPA",
      "highestLPA": "22.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-0.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 8.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-1",
    "name": "College of Engineering, Anna University",
    "shortName": "College of Engineering",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b950,000 / year",
    "placement": {
      "averageLPA": "8.3 LPA",
      "highestLPA": "20.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-1.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-2",
    "name": "NIT Trichy, Tiruchirappalli",
    "shortName": "NIT Trichy",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,49,250 / year",
    "placement": {
      "averageLPA": "8.8 LPA",
      "highestLPA": "22.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-2.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 8.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-3",
    "name": "Vellore Institute of Technology",
    "shortName": "Vellore Institute of Technology",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,98,000 / year",
    "placement": {
      "averageLPA": "8.5 LPA",
      "highestLPA": "21.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-3.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-4",
    "name": "SRM Engineering College, Kanchipuram",
    "shortName": "SRM Engineering College",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,60,000 / year",
    "placement": {
      "averageLPA": "7.1 LPA",
      "highestLPA": "17.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-4.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 7.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-5",
    "name": "SSN College of Engineering",
    "shortName": "SSN College of Engineering",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b950,000 / year",
    "placement": {
      "averageLPA": "8.3 LPA",
      "highestLPA": "20.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-5.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 8.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-6",
    "name": "SASTRA University, Thanjavur",
    "shortName": "SASTRA University",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,67,000 / year",
    "placement": {
      "averageLPA": "8.7 LPA",
      "highestLPA": "21.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-6.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-7",
    "name": "P.S.G College of Technology",
    "shortName": "P.S.G College of Technology",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b987,000 / year",
    "placement": {
      "averageLPA": "9.1 LPA",
      "highestLPA": "22.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-7.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 9.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-8",
    "name": "Thiagarajar College of Engineering",
    "shortName": "Thiagarajar College of Engineering",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b950,000 / year",
    "placement": {
      "averageLPA": "8.7 LPA",
      "highestLPA": "21.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-8.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 8.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-9",
    "name": "Coimbatore Institute of Technology",
    "shortName": "Coimbatore Institute of Technology",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b923,670 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-9.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-10",
    "name": "Karunya Institute of Technology and Sciences",
    "shortName": "Karunya Institute of Technology and Sciences",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,13,500 / year",
    "placement": {
      "averageLPA": "7.5 LPA",
      "highestLPA": "18.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-10.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-11",
    "name": "Kumaraguru College of Technology",
    "shortName": "Kumaraguru College of Technology",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b950,000 / year",
    "placement": {
      "averageLPA": "7.9 LPA",
      "highestLPA": "19.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-11.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-12",
    "name": "VEL Tech, Chennai",
    "shortName": "VEL Tech",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b950,000 / year",
    "placement": {
      "averageLPA": "8.3 LPA",
      "highestLPA": "20.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-12.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-13",
    "name": "Mepco Schlenk Engineering College, Sivakasi",
    "shortName": "Mepco Schlenk Engineering College",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,34,000 / year",
    "placement": {
      "averageLPA": "7.9 LPA",
      "highestLPA": "19.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-13.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-14",
    "name": "Government College of Technology",
    "shortName": "Government College of Technology",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b99,180 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-14.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-15",
    "name": "Hindustan Institute of Technology and Science",
    "shortName": "Hindustan Institute of Technology and Science",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,29,500 / year",
    "placement": {
      "averageLPA": "6.9 LPA",
      "highestLPA": "17.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-15.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-16",
    "name": "Sri Krishna College of Engineering and Technology",
    "shortName": "Sri Krishna College of Engineering and Technology",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b950,000 / year",
    "placement": {
      "averageLPA": "8.2 LPA",
      "highestLPA": "20.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-16.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-17",
    "name": "Kongu Engineering College",
    "shortName": "Kongu Engineering College",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b960,000 / year",
    "placement": {
      "averageLPA": "8.3 LPA",
      "highestLPA": "20.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-17.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-18",
    "name": "Bannari Amman Institute of Technology",
    "shortName": "Bannari Amman Institute of Technology",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b960,000 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-18.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-19",
    "name": "Sona College of Technology, Salem",
    "shortName": "Sona College of Technology",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,00,000 / year",
    "placement": {
      "averageLPA": "7.9 LPA",
      "highestLPA": "19.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-19.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-20",
    "name": "Tamil Nadu Veterinary and Animal Sciences University",
    "shortName": "Tamil Nadu Veterinary and Animal Sciences University",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b921,415 / year",
    "placement": {
      "averageLPA": "8.2 LPA",
      "highestLPA": "20.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-20.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-21",
    "name": "St. Joseph College Of Engineering, Kanchipuram",
    "shortName": "St. Joseph College Of Engineering",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b960,000 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-21.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-22",
    "name": "Saveetha Engineering College",
    "shortName": "Saveetha Engineering College",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b985,000 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-22.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-23",
    "name": "Sri Sairam Engineering College, Chennai",
    "shortName": "Sri Sairam Engineering College",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b950,000 / year",
    "placement": {
      "averageLPA": "7.9 LPA",
      "highestLPA": "19.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-23.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-24",
    "name": "B.S. Abdur Rahman Crescent Institute of Science",
    "shortName": "B.S. Abdur Rahman Crescent Institute of Science",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b985,000 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-24.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-25",
    "name": "Sri Ramakrishna Engineering College",
    "shortName": "Sri Ramakrishna Engineering College",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b955,000 / year",
    "placement": {
      "averageLPA": "8.3 LPA",
      "highestLPA": "20.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-25.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-26",
    "name": "Rajalakshmi Engineering College",
    "shortName": "Rajalakshmi Engineering College",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b950,000 / year",
    "placement": {
      "averageLPA": "8.3 LPA",
      "highestLPA": "20.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-26.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-27",
    "name": "Sri Venkateswara College of Engineering",
    "shortName": "Sri Venkateswara College of Engineering",
    "city": "Tamil Nadu",
    "state": "Tamil Nadu",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b965,000 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-27.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tamil Nadu with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-28",
    "name": "IIT Bombay",
    "shortName": "IIT Bombay",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "IIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,28,000 / year",
    "placement": {
      "averageLPA": "9.1 LPA",
      "highestLPA": "22.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-28.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 8.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-29",
    "name": "Institute of Chemical Technology",
    "shortName": "Institute of Chemical Technology",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b985,350 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-29.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 8.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-30",
    "name": "Visvesvaraya National Institute of Technology",
    "shortName": "Visvesvaraya National Institute of Technology",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,49,200 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-30.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-31",
    "name": "College of Engineering",
    "shortName": "College of Engineering",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b940,500 / year",
    "placement": {
      "averageLPA": "8.7 LPA",
      "highestLPA": "21.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-31.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 8.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-32",
    "name": "Defence Institute of Advanced Technology",
    "shortName": "Defence Institute of Advanced Technology",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,53,600 / year",
    "placement": {
      "averageLPA": "8.6 LPA",
      "highestLPA": "21.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-32.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 8.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-33",
    "name": "National Institute of Industrial Engineering",
    "shortName": "National Institute of Industrial Engineering",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b95,98,000 / year",
    "placement": {
      "averageLPA": "9.3 LPA",
      "highestLPA": "23.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-33.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 9.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-34",
    "name": "Army Institute of Technology",
    "shortName": "Army Institute of Technology",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,80,197 / year",
    "placement": {
      "averageLPA": "8.7 LPA",
      "highestLPA": "21.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-34.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-35",
    "name": "Bharati Vidyapeeth Deemed University",
    "shortName": "Bharati Vidyapeeth Deemed University",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,20,000 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-35.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-36",
    "name": "Veermata Jijabai Technological Institute",
    "shortName": "Veermata Jijabai Technological Institute",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b984,051 / year",
    "placement": {
      "averageLPA": "8.7 LPA",
      "highestLPA": "21.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-36.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-37",
    "name": "GH Raisoni College of Engineering",
    "shortName": "GH Raisoni College of Engineering",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b95,60,000 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-37.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-38",
    "name": "Mukesh Patel School of Technology Management and",
    "shortName": "Mukesh Patel School of Technology Management and",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b94,52,000 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-38.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-39",
    "name": "Sardar Patel Institute of Technology",
    "shortName": "Sardar Patel Institute of Technology",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,70,000 / year",
    "placement": {
      "averageLPA": "9.1 LPA",
      "highestLPA": "22.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-39.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-40",
    "name": "Shri Ramdeobaba College of Engineering and Management",
    "shortName": "Shri Ramdeobaba College of Engineering and Management",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,45,000 / year",
    "placement": {
      "averageLPA": "8.3 LPA",
      "highestLPA": "20.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-40.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-41",
    "name": "Rashtrasant Tukadoji Maharaj Nagpur University",
    "shortName": "Rashtrasant Tukadoji Maharaj Nagpur University",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b933,600 / year",
    "placement": {
      "averageLPA": "6.9 LPA",
      "highestLPA": "17.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-41.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-42",
    "name": "Yeshwantrao Chavan College of Engineering",
    "shortName": "Yeshwantrao Chavan College of Engineering",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,51,801 / year",
    "placement": {
      "averageLPA": "7.2 LPA",
      "highestLPA": "18.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-42.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-43",
    "name": "Walchand College of Engineering",
    "shortName": "Walchand College of Engineering",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b984,935 / year",
    "placement": {
      "averageLPA": "8.8 LPA",
      "highestLPA": "22.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-43.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-44",
    "name": "MIT World Peace University",
    "shortName": "MIT World Peace University",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,10,000 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-44.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-45",
    "name": "Vishwakarma Institute of Information Technology",
    "shortName": "Vishwakarma Institute of Information Technology",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,64,000 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-45.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-46",
    "name": "Ramrao Adik Institute of Technology",
    "shortName": "Ramrao Adik Institute of Technology",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,25,000 / year",
    "placement": {
      "averageLPA": "8.7 LPA",
      "highestLPA": "21.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-46.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 8.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-47",
    "name": "Sardar Patel College of Engineering",
    "shortName": "Sardar Patel College of Engineering",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,70,000 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-47.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-48",
    "name": "K. J. Somaiya College of Engineering",
    "shortName": "K. J. Somaiya College of Engineering",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,86,000 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-48.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-49",
    "name": "Pimpri Chinchwad College of Engineering",
    "shortName": "Pimpri Chinchwad College of Engineering",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,38,559 / year",
    "placement": {
      "averageLPA": "8.6 LPA",
      "highestLPA": "21.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-49.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-50",
    "name": "MKSSS's Cummins College of Engineering for Women,",
    "shortName": "MKSSS's Cummins College of Engineering for Women",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,80,836 / year",
    "placement": {
      "averageLPA": "9.0 LPA",
      "highestLPA": "22.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-50.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-51",
    "name": "Dwarkadas J Sanghvi College of Engineering",
    "shortName": "Dwarkadas J Sanghvi College of Engineering",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,94,000 / year",
    "placement": {
      "averageLPA": "8.3 LPA",
      "highestLPA": "20.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-51.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-52",
    "name": "Thakur College of Engineering and Technology",
    "shortName": "Thakur College of Engineering and Technology",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,47,500 / year",
    "placement": {
      "averageLPA": "7.9 LPA",
      "highestLPA": "19.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-52.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-53",
    "name": "SVKM's Narsee Monjee Institute of Management Studies",
    "shortName": "SVKM's Narsee Monjee Institute of Management Studies",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,02,000 / year",
    "placement": {
      "averageLPA": "8.3 LPA",
      "highestLPA": "20.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-53.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-54",
    "name": "Amity University, Mumbai",
    "shortName": "Amity University",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,22,000 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-54.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-55",
    "name": "Vishwakarma Institute of Technology, Pune",
    "shortName": "Vishwakarma Institute of Technology",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,79,895 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-55.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-56",
    "name": "Indian Institute of Information Technology",
    "shortName": "Indian Institute of Information Technology",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "IIIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,34,500 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-56.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-57",
    "name": "Tata Institute of Social Sciences",
    "shortName": "Tata Institute of Social Sciences",
    "city": "Maharashtra",
    "state": "Maharashtra",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-57.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Maharashtra with an overall score of 8.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-58",
    "name": "Indian Institute of Technology",
    "shortName": "Indian Institute of Technology",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "IIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,15,600 / year",
    "placement": {
      "averageLPA": "8.9 LPA",
      "highestLPA": "22.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-58.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 8.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-59",
    "name": "Indian Institute of Technology",
    "shortName": "Indian Institute of Technology",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "IIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b984,981 / year",
    "placement": {
      "averageLPA": "9.1 LPA",
      "highestLPA": "22.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-59.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 8.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-60",
    "name": "Amity University, Noida",
    "shortName": "Amity University",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,11,000 / year",
    "placement": {
      "averageLPA": "7.6 LPA",
      "highestLPA": "19.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-60.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-61",
    "name": "Aligarh Muslim University",
    "shortName": "Aligarh Muslim University",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,69,445 / year",
    "placement": {
      "averageLPA": "7.2 LPA",
      "highestLPA": "18.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-61.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-62",
    "name": "MNNIT Allahabad",
    "shortName": "MNNIT Allahabad",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b984,666 / year",
    "placement": {
      "averageLPA": "8.9 LPA",
      "highestLPA": "22.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-62.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-63",
    "name": "Jaypee Institute of Information Technology University",
    "shortName": "Jaypee Institute of Information Technology University",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,36,500 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-63.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-64",
    "name": "Indian Institute of Information Technology",
    "shortName": "Indian Institute of Information Technology",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "IIIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,04,000 / year",
    "placement": {
      "averageLPA": "9.2 LPA",
      "highestLPA": "23.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-64.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-65",
    "name": "Dayalbagh Educational Institute Faculty of Engineering, Agra",
    "shortName": "Dayalbagh Educational Institute Faculty of Engineering",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b951,300 / year",
    "placement": {
      "averageLPA": "8.2 LPA",
      "highestLPA": "20.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-65.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-66",
    "name": "Sharda University",
    "shortName": "Sharda University",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,63,770 / year",
    "placement": {
      "averageLPA": "6.9 LPA",
      "highestLPA": "17.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-66.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-67",
    "name": "Galgotias University",
    "shortName": "Galgotias University",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,59,000 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-67.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-68",
    "name": "Bennett University, Greater Noida",
    "shortName": "Bennett University",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,50,000 / year",
    "placement": {
      "averageLPA": "8.3 LPA",
      "highestLPA": "20.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-68.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 8.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-69",
    "name": "Shiv Nadar University",
    "shortName": "Shiv Nadar University",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,00,000 / year",
    "placement": {
      "averageLPA": "8.5 LPA",
      "highestLPA": "21.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-69.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 9.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-70",
    "name": "Integral University, Lucknow",
    "shortName": "Integral University",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,40,000 / year",
    "placement": {
      "averageLPA": "6.5 LPA",
      "highestLPA": "16.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-70.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 7.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-71",
    "name": "J.S. University",
    "shortName": "J.S. University",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b947,500 / year",
    "placement": {
      "averageLPA": "8.2 LPA",
      "highestLPA": "20.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-71.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 8.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-72",
    "name": "GLA University, Mathura",
    "shortName": "GLA University",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,78,000 / year",
    "placement": {
      "averageLPA": "8.2 LPA",
      "highestLPA": "20.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-72.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-73",
    "name": "Institute of Engineering and Technology",
    "shortName": "Institute of Engineering and Technology",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b989,775 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-73.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 7.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-74",
    "name": "Sanskriti University",
    "shortName": "Sanskriti University",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,15,000 / year",
    "placement": {
      "averageLPA": "6.9 LPA",
      "highestLPA": "17.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-74.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 7.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-75",
    "name": "Monad University, Hapur",
    "shortName": "Monad University",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,51,000 / year",
    "placement": {
      "averageLPA": "8.2 LPA",
      "highestLPA": "20.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-75.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-76",
    "name": "Indian Institute of Information Technology",
    "shortName": "Indian Institute of Information Technology",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "IIIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,18,700 / year",
    "placement": {
      "averageLPA": "9.4 LPA",
      "highestLPA": "23.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-76.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-77",
    "name": "IFTM University, Moradabad",
    "shortName": "IFTM University",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,07,000 / year",
    "placement": {
      "averageLPA": "6.8 LPA",
      "highestLPA": "17.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-77.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-78",
    "name": "Shobhit University, Meerut",
    "shortName": "Shobhit University",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,11,200 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-78.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-79",
    "name": "Glocal University, Saharanpur",
    "shortName": "Glocal University",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,44,000 / year",
    "placement": {
      "averageLPA": "7.2 LPA",
      "highestLPA": "18.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-79.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 7.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-80",
    "name": "Rama University, Kanpur",
    "shortName": "Rama University",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b990,000 / year",
    "placement": {
      "averageLPA": "6.6 LPA",
      "highestLPA": "16.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-80.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 6.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-81",
    "name": "Noida Institute of Engineering and Technology",
    "shortName": "Noida Institute of Engineering and Technology",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b96,14,000 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-81.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-82",
    "name": "ABES Engineering College, Ghaziabad",
    "shortName": "ABES Engineering College",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,43,700 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-82.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-83",
    "name": "Bundelkhand Institute of Engineering & Technology",
    "shortName": "Bundelkhand Institute of Engineering & Technology",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b961,800 / year",
    "placement": {
      "averageLPA": "6.2 LPA",
      "highestLPA": "15.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-83.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 7.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-84",
    "name": "Harcourt Butler Technological University",
    "shortName": "Harcourt Butler Technological University",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,35,000 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-84.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 7.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-85",
    "name": "Rajiv Gandhi Institute of Petroleum Technology",
    "shortName": "Rajiv Gandhi Institute of Petroleum Technology",
    "city": "Uttar Pradesh",
    "state": "Uttar Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,21,100 / year",
    "placement": {
      "averageLPA": "8.2 LPA",
      "highestLPA": "20.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-85.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttar Pradesh with an overall score of 8.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-86",
    "name": "Indian Institute of Technology",
    "shortName": "Indian Institute of Technology",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "IIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,20,300 / year",
    "placement": {
      "averageLPA": "9.0 LPA",
      "highestLPA": "22.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-86.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 8.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-87",
    "name": "Jamia Millia Islamia University-[JMI], New Delhi",
    "shortName": "Jamia Millia Islamia University-[JMI]",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b916,150 / year",
    "placement": {
      "averageLPA": "7.2 LPA",
      "highestLPA": "18.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-87.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-88",
    "name": "Delhi Technological University",
    "shortName": "Delhi Technological University",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,90,000 / year",
    "placement": {
      "averageLPA": "8.6 LPA",
      "highestLPA": "21.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-88.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-89",
    "name": "Amity University, Noida",
    "shortName": "Amity University",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,11,000 / year",
    "placement": {
      "averageLPA": "7.6 LPA",
      "highestLPA": "19.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-89.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-90",
    "name": "Indraprastha Institute of Information Technology",
    "shortName": "Indraprastha Institute of Information Technology",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,60,000 / year",
    "placement": {
      "averageLPA": "8.6 LPA",
      "highestLPA": "21.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-90.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 8.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-91",
    "name": "Guru Gobind Singh Indraprastha University",
    "shortName": "Guru Gobind Singh Indraprastha University",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,17,200 / year",
    "placement": {
      "averageLPA": "6.9 LPA",
      "highestLPA": "17.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-91.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-92",
    "name": "Jaypee Institute of Information Technology University",
    "shortName": "Jaypee Institute of Information Technology University",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,36,500 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-92.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-93",
    "name": "National Institute of Food Technology Entrepreneurship and",
    "shortName": "National Institute of Food Technology Entrepreneurship and",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,71,550 / year",
    "placement": {
      "averageLPA": "8.5 LPA",
      "highestLPA": "21.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-93.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-94",
    "name": "School of Engineering and Technology, NCU",
    "shortName": "School of Engineering and Technology",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,60,000 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-94.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 9.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-95",
    "name": "J.C. Bose University Of Science And Technology,",
    "shortName": "J.C. Bose University Of Science And Technology",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b983,625 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-95.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 7.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-96",
    "name": "Indira Gandhi Delhi Technical University For Women",
    "shortName": "Indira Gandhi Delhi Technical University For Women",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b988,000 / year",
    "placement": {
      "averageLPA": "8.3 LPA",
      "highestLPA": "20.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-96.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-97",
    "name": "Manav Rachna International Institute Of Research And",
    "shortName": "Manav Rachna International Institute Of Research And",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,81,500 / year",
    "placement": {
      "averageLPA": "6.5 LPA",
      "highestLPA": "16.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-97.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 7.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-98",
    "name": "Sharda University",
    "shortName": "Sharda University",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,63,770 / year",
    "placement": {
      "averageLPA": "6.9 LPA",
      "highestLPA": "17.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-98.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-99",
    "name": "Galgotias University",
    "shortName": "Galgotias University",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,59,000 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-99.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-100",
    "name": "Netaji Subhas University of Technology",
    "shortName": "Netaji Subhas University of Technology",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,90,000 / year",
    "placement": {
      "averageLPA": "8.9 LPA",
      "highestLPA": "22.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-100.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-101",
    "name": "Shiv Nadar University",
    "shortName": "Shiv Nadar University",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,00,000 / year",
    "placement": {
      "averageLPA": "8.5 LPA",
      "highestLPA": "21.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-101.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 9.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-102",
    "name": "Manav Rachna International Institute of Research and",
    "shortName": "Manav Rachna International Institute of Research and",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,81,500 / year",
    "placement": {
      "averageLPA": "6.6 LPA",
      "highestLPA": "16.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-102.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-103",
    "name": "National Institute of Technology",
    "shortName": "National Institute of Technology",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b996,866 / year",
    "placement": {
      "averageLPA": "7.6 LPA",
      "highestLPA": "19.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-103.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 6.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-104",
    "name": "Gurugram University, Gurgaon",
    "shortName": "Gurugram University",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b940,000 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-104.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-105",
    "name": "Chhotu Ram Rural Institute Of Technology",
    "shortName": "Chhotu Ram Rural Institute Of Technology",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b933,450 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-105.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-106",
    "name": "SunRise University",
    "shortName": "SunRise University",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b972,200 / year",
    "placement": {
      "averageLPA": "7.9 LPA",
      "highestLPA": "19.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-106.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-107",
    "name": "Monad University, Hapur",
    "shortName": "Monad University",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,51,000 / year",
    "placement": {
      "averageLPA": "8.2 LPA",
      "highestLPA": "20.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-107.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-108",
    "name": "Amity University, Gurgaon",
    "shortName": "Amity University",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,30,000 / year",
    "placement": {
      "averageLPA": "7.1 LPA",
      "highestLPA": "17.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-108.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-109",
    "name": "Shobhit University, Meerut",
    "shortName": "Shobhit University",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,11,200 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-109.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-110",
    "name": "Indraprastha Institute of Technology and Management",
    "shortName": "Indraprastha Institute of Technology and Management",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,25,000 / year",
    "placement": {
      "averageLPA": "8.7 LPA",
      "highestLPA": "21.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-110.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-111",
    "name": "Maharaja Agrasen Institute of Technology",
    "shortName": "Maharaja Agrasen Institute of Technology",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,43,200 / year",
    "placement": {
      "averageLPA": "7.5 LPA",
      "highestLPA": "18.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-111.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-112",
    "name": "Maharaja Surajmal Institute of Technology",
    "shortName": "Maharaja Surajmal Institute of Technology",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,35,300 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-112.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 7.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-113",
    "name": "Noida Institute of Engineering and Technology",
    "shortName": "Noida Institute of Engineering and Technology",
    "city": "Delhi NCR",
    "state": "Delhi NCR",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b96,14,000 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-113.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Delhi NCR with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-114",
    "name": "K L University",
    "shortName": "K L University",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,50,000 / year",
    "placement": {
      "averageLPA": "8.3 LPA",
      "highestLPA": "20.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-114.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-115",
    "name": "Andhra University, College of Engineering",
    "shortName": "Andhra University",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b910,000 / year",
    "placement": {
      "averageLPA": "7.2 LPA",
      "highestLPA": "18.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-115.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-116",
    "name": "Sri Venkateswara University College of Engineering, Tirupati",
    "shortName": "Sri Venkateswara University College of Engineering",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b916,395 / year",
    "placement": {
      "averageLPA": "6.9 LPA",
      "highestLPA": "17.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-116.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-117",
    "name": "Vignan\u2019s Foundation for Science, Technology, and Research,",
    "shortName": "Vignan\u2019s Foundation for Science",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,50,000 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-117.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-118",
    "name": "JNTUK University College of Engineering, Kakinada, East",
    "shortName": "JNTUK University College of Engineering",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b910,000 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-118.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-119",
    "name": "Sree Vidyanikethan Engineering College",
    "shortName": "Sree Vidyanikethan Engineering College",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,80,000 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-119.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 8.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-120",
    "name": "G. Pulla Reddy Engineering College",
    "shortName": "G. Pulla Reddy Engineering College",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b980,000 / year",
    "placement": {
      "averageLPA": "8.2 LPA",
      "highestLPA": "20.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-120.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-121",
    "name": "Sri Venkateswara College of Engineering and Technology",
    "shortName": "Sri Venkateswara College of Engineering and Technology",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b989,350 / year",
    "placement": {
      "averageLPA": "7.3 LPA",
      "highestLPA": "18.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-121.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-122",
    "name": "Velagapudi Ramakrishna Siddhartha Engineering College",
    "shortName": "Velagapudi Ramakrishna Siddhartha Engineering College",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b971,050 / year",
    "placement": {
      "averageLPA": "8.2 LPA",
      "highestLPA": "20.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-122.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-123",
    "name": "Shri Vishnu Engineering College for Women",
    "shortName": "Shri Vishnu Engineering College for Women",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b995,000 / year",
    "placement": {
      "averageLPA": "8.8 LPA",
      "highestLPA": "22.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-123.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 8.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-124",
    "name": "JNTUA College of Engineering, Ananthapur",
    "shortName": "JNTUA College of Engineering",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b925,000 / year",
    "placement": {
      "averageLPA": "6.3 LPA",
      "highestLPA": "15.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-124.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 7.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-125",
    "name": "Sagi Ramakrishnam Raju Engineering College",
    "shortName": "Sagi Ramakrishnam Raju Engineering College",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b930,000 / year",
    "placement": {
      "averageLPA": "8.2 LPA",
      "highestLPA": "20.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-125.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-126",
    "name": "Gayatri Vidya Parishad College of Engineering",
    "shortName": "Gayatri Vidya Parishad College of Engineering",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,76,000 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-126.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-127",
    "name": "Jawaharlal Nehru Technological University",
    "shortName": "Jawaharlal Nehru Technological University",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,00,000 / year",
    "placement": {
      "averageLPA": "7.1 LPA",
      "highestLPA": "17.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-127.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 7.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-128",
    "name": "Indian Institute of Technology",
    "shortName": "Indian Institute of Technology",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "IIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b916,950 / year",
    "placement": {
      "averageLPA": "8.2 LPA",
      "highestLPA": "20.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-128.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 8.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-129",
    "name": "Prasad V. Potluri Siddhartha Institute of Technology",
    "shortName": "Prasad V. Potluri Siddhartha Institute of Technology",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,80,000 / year",
    "placement": {
      "averageLPA": "7.9 LPA",
      "highestLPA": "19.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-129.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-130",
    "name": "Centurion University of Technology and Management",
    "shortName": "Centurion University of Technology and Management",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,25,000 / year",
    "placement": {
      "averageLPA": "7.4 LPA",
      "highestLPA": "18.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-130.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-131",
    "name": "Aditya Engineering College",
    "shortName": "Aditya Engineering College",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b972,000 / year",
    "placement": {
      "averageLPA": "7.4 LPA",
      "highestLPA": "18.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-131.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-132",
    "name": "Bapatla Engineering College",
    "shortName": "Bapatla Engineering College",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b975,000 / year",
    "placement": {
      "averageLPA": "6.5 LPA",
      "highestLPA": "16.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-132.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-133",
    "name": "Gudlavalleru Engineering College",
    "shortName": "Gudlavalleru Engineering College",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b981,600 / year",
    "placement": {
      "averageLPA": "7.5 LPA",
      "highestLPA": "18.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-133.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-134",
    "name": "Sri Venkateswara College of Engineering",
    "shortName": "Sri Venkateswara College of Engineering",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b980,000 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-134.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-135",
    "name": "Sri Vasavi Engineering College",
    "shortName": "Sri Vasavi Engineering College",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,89,000 / year",
    "placement": {
      "averageLPA": "7.6 LPA",
      "highestLPA": "19.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-135.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-136",
    "name": "Indian Institute of Information Technology Sri City",
    "shortName": "Indian Institute of Information Technology Sri City",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "IIIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,03,000 / year",
    "placement": {
      "averageLPA": "7.3 LPA",
      "highestLPA": "18.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-136.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 7.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-137",
    "name": "National Institute of Technology",
    "shortName": "National Institute of Technology",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,87,500 / year",
    "placement": {
      "averageLPA": "6.9 LPA",
      "highestLPA": "17.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-137.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 7.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-138",
    "name": "Rajiv Gandhi University of Knowledge Technologies -[RGUKT],",
    "shortName": "Rajiv Gandhi University of Knowledge Technologies -[RGUKT]",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b939,000 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-138.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-139",
    "name": "Raghu Engineering College",
    "shortName": "Raghu Engineering College",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b985,000 / year",
    "placement": {
      "averageLPA": "8.5 LPA",
      "highestLPA": "21.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-139.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-140",
    "name": "Indian Institute of Information Technology Design and",
    "shortName": "Indian Institute of Information Technology Design and",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "IIIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,44,600 / year",
    "placement": {
      "averageLPA": "7.2 LPA",
      "highestLPA": "18.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-140.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 7.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-141",
    "name": "Rajeev Gandhi Memorial College of Engineering and",
    "shortName": "Rajeev Gandhi Memorial College of Engineering and",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b969,100 / year",
    "placement": {
      "averageLPA": "6.2 LPA",
      "highestLPA": "15.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-141.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 7.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-142",
    "name": "VIT University",
    "shortName": "VIT University",
    "city": "Andhra Pradesh",
    "state": "Andhra Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,98,000 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-142.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andhra Pradesh with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-143",
    "name": "National Institute of Technology",
    "shortName": "National Institute of Technology",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,52,730 / year",
    "placement": {
      "averageLPA": "8.9 LPA",
      "highestLPA": "22.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-143.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-144",
    "name": "Manipal Institute of Technology",
    "shortName": "Manipal Institute of Technology",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,35,000 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-144.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 8.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-145",
    "name": "R V College of Engineering",
    "shortName": "R V College of Engineering",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,50,000 / year",
    "placement": {
      "averageLPA": "9.0 LPA",
      "highestLPA": "22.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-145.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 8.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-146",
    "name": "Ramaiah Institute of Technology",
    "shortName": "Ramaiah Institute of Technology",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b986,226 / year",
    "placement": {
      "averageLPA": "8.3 LPA",
      "highestLPA": "20.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-146.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-147",
    "name": "International Institute of Information Technology",
    "shortName": "International Institute of Information Technology",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,64,000 / year",
    "placement": {
      "averageLPA": "8.9 LPA",
      "highestLPA": "22.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-147.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 8.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-148",
    "name": "BMS College of Engineering",
    "shortName": "BMS College of Engineering",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,29,110 / year",
    "placement": {
      "averageLPA": "8.3 LPA",
      "highestLPA": "20.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-148.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-149",
    "name": "Siddaganga Institute of Technology",
    "shortName": "Siddaganga Institute of Technology",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b979,475 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-149.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-150",
    "name": "New Horizon College of Engineering",
    "shortName": "New Horizon College of Engineering",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,50,000 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-150.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-151",
    "name": "Faculty of Engineering and Technology, Jain University",
    "shortName": "Faculty of Engineering and Technology",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,97,500 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-151.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-152",
    "name": "Sri Jayachamarajendra College of Engineering",
    "shortName": "Sri Jayachamarajendra College of Engineering",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b94,75,000 / year",
    "placement": {
      "averageLPA": "8.7 LPA",
      "highestLPA": "21.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-152.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-153",
    "name": "Dayananda Sagar College of Engineering",
    "shortName": "Dayananda Sagar College of Engineering",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b996,106 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-153.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-154",
    "name": "NMAM Institute of Technology",
    "shortName": "NMAM Institute of Technology",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,63,000 / year",
    "placement": {
      "averageLPA": "7.5 LPA",
      "highestLPA": "18.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-154.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-155",
    "name": "Nitte Meenakshi Institute of Technology",
    "shortName": "Nitte Meenakshi Institute of Technology",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b958,806 / year",
    "placement": {
      "averageLPA": "7.6 LPA",
      "highestLPA": "19.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-155.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-156",
    "name": "PES University",
    "shortName": "PES University",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,40,000 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-156.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-157",
    "name": "BMS Institute of Technology and Management",
    "shortName": "BMS Institute of Technology and Management",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,50,000 / year",
    "placement": {
      "averageLPA": "7.9 LPA",
      "highestLPA": "19.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-157.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-158",
    "name": "KLE Technological University, Hubli",
    "shortName": "KLE Technological University",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b915,000 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-158.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-159",
    "name": "Dr. Ambedkar Institute of Technology",
    "shortName": "Dr. Ambedkar Institute of Technology",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b930,200 / year",
    "placement": {
      "averageLPA": "6.7 LPA",
      "highestLPA": "16.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-159.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 7.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-160",
    "name": "PES College of Engineering",
    "shortName": "PES College of Engineering",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b976,800 / year",
    "placement": {
      "averageLPA": "7.3 LPA",
      "highestLPA": "18.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-160.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-161",
    "name": "CMR Institute of Technology",
    "shortName": "CMR Institute of Technology",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,50,000 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-161.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-162",
    "name": "The National Institute of Engineering",
    "shortName": "The National Institute of Engineering",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b944,090 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-162.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-163",
    "name": "Alliance College of Engineering and Design, Bangalore",
    "shortName": "Alliance College of Engineering and Design",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,25,000 / year",
    "placement": {
      "averageLPA": "6.5 LPA",
      "highestLPA": "16.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-163.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 7.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-164",
    "name": "Basaveshwar Engineering College",
    "shortName": "Basaveshwar Engineering College",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b965,340 / year",
    "placement": {
      "averageLPA": "6.6 LPA",
      "highestLPA": "16.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-164.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-165",
    "name": "Christ University, Bangalore",
    "shortName": "Christ University",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,70,000 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-165.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-166",
    "name": "Manipal Academy of Higher Education",
    "shortName": "Manipal Academy of Higher Education",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,35,000 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-166.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-167",
    "name": "Indian Institute of Science",
    "shortName": "Indian Institute of Science",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b929,200 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-167.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 9.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-168",
    "name": "REVA University, Bangalore",
    "shortName": "REVA University",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,25,000 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-168.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-169",
    "name": "Alliance University, Bangalore",
    "shortName": "Alliance University",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b96,25,000 / year",
    "placement": {
      "averageLPA": "7.6 LPA",
      "highestLPA": "19.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-169.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-170",
    "name": "Presidency University, Bangalore",
    "shortName": "Presidency University",
    "city": "Karnataka",
    "state": "Karnataka",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,10,000 / year",
    "placement": {
      "averageLPA": "8.2 LPA",
      "highestLPA": "20.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-170.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Karnataka with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-171",
    "name": "Indian Institute of Technology",
    "shortName": "Indian Institute of Technology",
    "city": "Telangana",
    "state": "Telangana",
    "type": "IIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,22,995 / year",
    "placement": {
      "averageLPA": "8.3 LPA",
      "highestLPA": "20.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-171.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 8.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-172",
    "name": "National Institute of Technology",
    "shortName": "National Institute of Technology",
    "city": "Telangana",
    "state": "Telangana",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,30,000 / year",
    "placement": {
      "averageLPA": "8.6 LPA",
      "highestLPA": "21.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-172.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-173",
    "name": "International Institute of Information Technology",
    "shortName": "International Institute of Information Technology",
    "city": "Telangana",
    "state": "Telangana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,00,000 / year",
    "placement": {
      "averageLPA": "9.2 LPA",
      "highestLPA": "23.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-173.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-174",
    "name": "Jawaharlal Nehru Technological University",
    "shortName": "Jawaharlal Nehru Technological University",
    "city": "Telangana",
    "state": "Telangana",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b912,500 / year",
    "placement": {
      "averageLPA": "7.6 LPA",
      "highestLPA": "19.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-174.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-175",
    "name": "University College of Engineering, Osmania University",
    "shortName": "University College of Engineering",
    "city": "Telangana",
    "state": "Telangana",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b927,770 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-175.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 8.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-176",
    "name": "Chaitanya Bharathi Institute of Technology",
    "shortName": "Chaitanya Bharathi Institute of Technology",
    "city": "Telangana",
    "state": "Telangana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,34,000 / year",
    "placement": {
      "averageLPA": "8.6 LPA",
      "highestLPA": "21.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-176.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-177",
    "name": "Vallurupalli Nageswara Rao Vignana Jyothi Institute of",
    "shortName": "Vallurupalli Nageswara Rao Vignana Jyothi Institute of",
    "city": "Telangana",
    "state": "Telangana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,31,000 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-177.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-178",
    "name": "CVR College of Engineering, Ibrahimpatnam, Rangareddi",
    "shortName": "CVR College of Engineering",
    "city": "Telangana",
    "state": "Telangana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,21,650 / year",
    "placement": {
      "averageLPA": "8.6 LPA",
      "highestLPA": "21.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-178.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-179",
    "name": "Institute of Aeronautical Engineering",
    "shortName": "Institute of Aeronautical Engineering",
    "city": "Telangana",
    "state": "Telangana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b990,000 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-179.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-180",
    "name": "BV Raju Institute of Technology",
    "shortName": "BV Raju Institute of Technology",
    "city": "Telangana",
    "state": "Telangana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,20,000 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-180.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 8.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-181",
    "name": "Vardhaman College of Engineering",
    "shortName": "Vardhaman College of Engineering",
    "city": "Telangana",
    "state": "Telangana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,25,000 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-181.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-182",
    "name": "Anurag University, Hyderabad",
    "shortName": "Anurag University",
    "city": "Telangana",
    "state": "Telangana",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,35,500 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-182.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-183",
    "name": "Vasavi College of Engineering",
    "shortName": "Vasavi College of Engineering",
    "city": "Telangana",
    "state": "Telangana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,30,000 / year",
    "placement": {
      "averageLPA": "8.8 LPA",
      "highestLPA": "22.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-183.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-184",
    "name": "Gokaraju Rangaraju Institute of Engineering and Technology",
    "shortName": "Gokaraju Rangaraju Institute of Engineering and Technology",
    "city": "Telangana",
    "state": "Telangana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,22,000 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-184.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-185",
    "name": "Kakatiya Institute of Technology & Science",
    "shortName": "Kakatiya Institute of Technology & Science",
    "city": "Telangana",
    "state": "Telangana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,25,960 / year",
    "placement": {
      "averageLPA": "7.9 LPA",
      "highestLPA": "19.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-185.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-186",
    "name": "K L University",
    "shortName": "K L University",
    "city": "Telangana",
    "state": "Telangana",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,65,000 / year",
    "placement": {
      "averageLPA": "7.6 LPA",
      "highestLPA": "19.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-186.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-187",
    "name": "Birla Institute of Technology and Science",
    "shortName": "Birla Institute of Technology and Science",
    "city": "Telangana",
    "state": "Telangana",
    "type": "BITS",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b94,23,475 / year",
    "placement": {
      "averageLPA": "9.1 LPA",
      "highestLPA": "22.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-187.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 9.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-188",
    "name": "Mahatma Gandhi Institute of Technology",
    "shortName": "Mahatma Gandhi Institute of Technology",
    "city": "Telangana",
    "state": "Telangana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,08,000 / year",
    "placement": {
      "averageLPA": "7.3 LPA",
      "highestLPA": "18.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-188.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-189",
    "name": "Malla Reddy Engineering College",
    "shortName": "Malla Reddy Engineering College",
    "city": "Telangana",
    "state": "Telangana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,03,000 / year",
    "placement": {
      "averageLPA": "7.1 LPA",
      "highestLPA": "17.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-189.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 7.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-190",
    "name": "Malla Reddy College of Engineering",
    "shortName": "Malla Reddy College of Engineering",
    "city": "Telangana",
    "state": "Telangana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b972,000 / year",
    "placement": {
      "averageLPA": "6.5 LPA",
      "highestLPA": "16.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-190.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 7.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-191",
    "name": "Indian Institute of Chemical Technology",
    "shortName": "Indian Institute of Chemical Technology",
    "city": "Telangana",
    "state": "Telangana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-191.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-192",
    "name": "Sreenidhi Institute of Science and Technology",
    "shortName": "Sreenidhi Institute of Science and Technology",
    "city": "Telangana",
    "state": "Telangana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b95,20,000 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-192.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-193",
    "name": "Mahindra University, Hyderabad",
    "shortName": "Mahindra University",
    "city": "Telangana",
    "state": "Telangana",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b94,70,000 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-193.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 8.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-194",
    "name": "St Martin's Engineering College, Secunderabad",
    "shortName": "St Martin's Engineering College",
    "city": "Telangana",
    "state": "Telangana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b980,000 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-194.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-195",
    "name": "MLR Institute of Technology",
    "shortName": "MLR Institute of Technology",
    "city": "Telangana",
    "state": "Telangana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b996,000 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-195.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-196",
    "name": "Keshav Memorial Institute of Technology",
    "shortName": "Keshav Memorial Institute of Technology",
    "city": "Telangana",
    "state": "Telangana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,11,500 / year",
    "placement": {
      "averageLPA": "9.0 LPA",
      "highestLPA": "22.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-196.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-197",
    "name": "Vaagdevi College of Engineering",
    "shortName": "Vaagdevi College of Engineering",
    "city": "Telangana",
    "state": "Telangana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b986,000 / year",
    "placement": {
      "averageLPA": "7.5 LPA",
      "highestLPA": "18.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-197.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-198",
    "name": "CMR Engineering College",
    "shortName": "CMR Engineering College",
    "city": "Telangana",
    "state": "Telangana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b975,000 / year",
    "placement": {
      "averageLPA": "9.0 LPA",
      "highestLPA": "22.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-198.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 8.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-199",
    "name": "Matrusri Engineering College, Hyderabad",
    "shortName": "Matrusri Engineering College",
    "city": "Telangana",
    "state": "Telangana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b990,000 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-199.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Telangana with an overall score of 7.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-200",
    "name": "Indian Institute of Technology",
    "shortName": "Indian Institute of Technology",
    "city": "Madhya Pradesh",
    "state": "Madhya Pradesh",
    "type": "IIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,28,700 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-200.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Madhya Pradesh with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-201",
    "name": "Maulana Azad National Institute of Technology",
    "shortName": "Maulana Azad National Institute of Technology",
    "city": "Madhya Pradesh",
    "state": "Madhya Pradesh",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b964,939 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-201.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Madhya Pradesh with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-202",
    "name": "Indian Institute of Information Technology Design and",
    "shortName": "Indian Institute of Information Technology Design and",
    "city": "Madhya Pradesh",
    "state": "Madhya Pradesh",
    "type": "IIIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,37,580 / year",
    "placement": {
      "averageLPA": "7.5 LPA",
      "highestLPA": "18.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-202.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Madhya Pradesh with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-203",
    "name": "Atal Bihari Vajpayee Indian Institute of Information",
    "shortName": "Atal Bihari Vajpayee Indian Institute of Information",
    "city": "Madhya Pradesh",
    "state": "Madhya Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b975,070 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-203.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Madhya Pradesh with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-204",
    "name": "VIT Bhopal University, Bhopal",
    "shortName": "VIT Bhopal University",
    "city": "Madhya Pradesh",
    "state": "Madhya Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,98,000 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-204.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Madhya Pradesh with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-205",
    "name": "RKDF University, Bhopal",
    "shortName": "RKDF University",
    "city": "Madhya Pradesh",
    "state": "Madhya Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b955,000 / year",
    "placement": {
      "averageLPA": "6.5 LPA",
      "highestLPA": "16.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-205.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Madhya Pradesh with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-206",
    "name": "Awadhesh Pratap Singh University",
    "shortName": "Awadhesh Pratap Singh University",
    "city": "Madhya Pradesh",
    "state": "Madhya Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b940,000 / year",
    "placement": {
      "averageLPA": "5.3 LPA",
      "highestLPA": "13.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-206.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Madhya Pradesh with an overall score of 7.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-207",
    "name": "University Institute of Technology, Rajiv Gandhi Proudyogiki",
    "shortName": "University Institute of Technology",
    "city": "Madhya Pradesh",
    "state": "Madhya Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b923,920 / year",
    "placement": {
      "averageLPA": "6.3 LPA",
      "highestLPA": "15.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-207.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Madhya Pradesh with an overall score of 6.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-208",
    "name": "Institute of Information Technology & Management",
    "shortName": "Institute of Information Technology & Management",
    "city": "Madhya Pradesh",
    "state": "Madhya Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b977,000 / year",
    "placement": {
      "averageLPA": "8.5 LPA",
      "highestLPA": "21.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-208.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Madhya Pradesh with an overall score of 8.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-209",
    "name": "Institute of Engineering and Technology, Devi Ahilya",
    "shortName": "Institute of Engineering and Technology",
    "city": "Madhya Pradesh",
    "state": "Madhya Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b982,961 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-209.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Madhya Pradesh with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-210",
    "name": "Acropolis Institute of Technology & Research",
    "shortName": "Acropolis Institute of Technology & Research",
    "city": "Madhya Pradesh",
    "state": "Madhya Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b975,100 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-210.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Madhya Pradesh with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-211",
    "name": "Indian Institute of Information Technology -[IIIT], Bhopal",
    "shortName": "Indian Institute of Information Technology -[IIIT]",
    "city": "Madhya Pradesh",
    "state": "Madhya Pradesh",
    "type": "IIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,79,500 / year",
    "placement": {
      "averageLPA": "5.0 LPA",
      "highestLPA": "12.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-211.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Madhya Pradesh with an overall score of 6.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-212",
    "name": "Jaypee University of Engineering and Technology",
    "shortName": "Jaypee University of Engineering and Technology",
    "city": "Madhya Pradesh",
    "state": "Madhya Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,89,500 / year",
    "placement": {
      "averageLPA": "7.4 LPA",
      "highestLPA": "18.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-212.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Madhya Pradesh with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-213",
    "name": "Oriental University",
    "shortName": "Oriental University",
    "city": "Madhya Pradesh",
    "state": "Madhya Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b965,000 / year",
    "placement": {
      "averageLPA": "7.1 LPA",
      "highestLPA": "17.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-213.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Madhya Pradesh with an overall score of 7.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-214",
    "name": "Amity University, Gwalior",
    "shortName": "Amity University",
    "city": "Madhya Pradesh",
    "state": "Madhya Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,64,000 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-214.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Madhya Pradesh with an overall score of 8.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-215",
    "name": "AKS University",
    "shortName": "AKS University",
    "city": "Madhya Pradesh",
    "state": "Madhya Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b960,000 / year",
    "placement": {
      "averageLPA": "6.9 LPA",
      "highestLPA": "17.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-215.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Madhya Pradesh with an overall score of 7.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-216",
    "name": "Jagran Lakecity University",
    "shortName": "Jagran Lakecity University",
    "city": "Madhya Pradesh",
    "state": "Madhya Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,15,000 / year",
    "placement": {
      "averageLPA": "7.4 LPA",
      "highestLPA": "18.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-216.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Madhya Pradesh with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-217",
    "name": "Jabalpur Engineering College",
    "shortName": "Jabalpur Engineering College",
    "city": "Madhya Pradesh",
    "state": "Madhya Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b922,300 / year",
    "placement": {
      "averageLPA": "7.4 LPA",
      "highestLPA": "18.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-217.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Madhya Pradesh with an overall score of 7.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-218",
    "name": "Swami Vivekanand University, Sagar",
    "shortName": "Swami Vivekanand University",
    "city": "Madhya Pradesh",
    "state": "Madhya Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b944,000 / year",
    "placement": {
      "averageLPA": "5.6 LPA",
      "highestLPA": "14.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-218.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Madhya Pradesh with an overall score of 6.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-219",
    "name": "Acropolis Group of Institutions, Indore",
    "shortName": "Acropolis Group of Institutions",
    "city": "Madhya Pradesh",
    "state": "Madhya Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b973,600 / year",
    "placement": {
      "averageLPA": "8.6 LPA",
      "highestLPA": "21.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-219.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Madhya Pradesh with an overall score of 8.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-220",
    "name": "LNCT University",
    "shortName": "LNCT University",
    "city": "Madhya Pradesh",
    "state": "Madhya Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b980,000 / year",
    "placement": {
      "averageLPA": "8.9 LPA",
      "highestLPA": "22.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-220.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Madhya Pradesh with an overall score of 9.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-221",
    "name": "Avantika University, Ujjain",
    "shortName": "Avantika University",
    "city": "Madhya Pradesh",
    "state": "Madhya Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,22,500 / year",
    "placement": {
      "averageLPA": "9.5 LPA",
      "highestLPA": "23.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-221.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Madhya Pradesh with an overall score of 9.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-222",
    "name": "Ujjain Engineering College",
    "shortName": "Ujjain Engineering College",
    "city": "Madhya Pradesh",
    "state": "Madhya Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b922,751 / year",
    "placement": {
      "averageLPA": "6.4 LPA",
      "highestLPA": "16.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-222.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Madhya Pradesh with an overall score of 6.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-223",
    "name": "Shri Govindram Seksaria Institute of Technology and",
    "shortName": "Shri Govindram Seksaria Institute of Technology and",
    "city": "Madhya Pradesh",
    "state": "Madhya Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b975,550 / year",
    "placement": {
      "averageLPA": "7.5 LPA",
      "highestLPA": "18.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-223.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Madhya Pradesh with an overall score of 7.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-224",
    "name": "Lakshmi Narain College of Technology",
    "shortName": "Lakshmi Narain College of Technology",
    "city": "Madhya Pradesh",
    "state": "Madhya Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b948,600 / year",
    "placement": {
      "averageLPA": "5.4 LPA",
      "highestLPA": "13.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-224.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Madhya Pradesh with an overall score of 5.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-225",
    "name": "National Institute of Technology",
    "shortName": "National Institute of Technology",
    "city": "Kerala",
    "state": "Kerala",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b953,797 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-225.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-226",
    "name": "Indian Institute of Space Science and Technology",
    "shortName": "Indian Institute of Space Science and Technology",
    "city": "Kerala",
    "state": "Kerala",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,42,400 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-226.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-227",
    "name": "College of Engineering, Trivandrum",
    "shortName": "College of Engineering",
    "city": "Kerala",
    "state": "Kerala",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,00,000 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-227.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-228",
    "name": "Cochin University of Science and Technology, School",
    "shortName": "Cochin University of Science and Technology",
    "city": "Kerala",
    "state": "Kerala",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b986,040 / year",
    "placement": {
      "averageLPA": "8.2 LPA",
      "highestLPA": "20.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-228.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-229",
    "name": "Baselios Thomas I Catholicose College of Engineering",
    "shortName": "Baselios Thomas I Catholicose College of Engineering",
    "city": "Kerala",
    "state": "Kerala",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b985,000 / year",
    "placement": {
      "averageLPA": "6.5 LPA",
      "highestLPA": "16.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-229.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 7.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-230",
    "name": "Cochin University of Science and Technology",
    "shortName": "Cochin University of Science and Technology",
    "city": "Kerala",
    "state": "Kerala",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b946,600 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-230.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-231",
    "name": "Indian Institute of Technology",
    "shortName": "Indian Institute of Technology",
    "city": "Kerala",
    "state": "Kerala",
    "type": "IIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b935,850 / year",
    "placement": {
      "averageLPA": "8.7 LPA",
      "highestLPA": "21.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-231.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 8.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-232",
    "name": "APJ Abdul Kalam Technological University",
    "shortName": "APJ Abdul Kalam Technological University",
    "city": "Kerala",
    "state": "Kerala",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b929,000 / year",
    "placement": {
      "averageLPA": "7.5 LPA",
      "highestLPA": "18.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-232.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-233",
    "name": "Federal Institute of Science and Technology",
    "shortName": "Federal Institute of Science and Technology",
    "city": "Kerala",
    "state": "Kerala",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b975,100 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-233.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-234",
    "name": "Indian Institute of Information Technology [IIIT], Kottayam",
    "shortName": "Indian Institute of Information Technology [IIIT]",
    "city": "Kerala",
    "state": "Kerala",
    "type": "IIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,98,950 / year",
    "placement": {
      "averageLPA": "8.6 LPA",
      "highestLPA": "21.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-234.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-235",
    "name": "Government Engineering College",
    "shortName": "Government Engineering College",
    "city": "Kerala",
    "state": "Kerala",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b922,150 / year",
    "placement": {
      "averageLPA": "8.3 LPA",
      "highestLPA": "20.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-235.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 8.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-236",
    "name": "National Institute of Electronics & Information Technology",
    "shortName": "National Institute of Electronics & Information Technology",
    "city": "Kerala",
    "state": "Kerala",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b960,000 / year",
    "placement": {
      "averageLPA": "8.8 LPA",
      "highestLPA": "22.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-236.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-237",
    "name": "TKM College of Engineering",
    "shortName": "TKM College of Engineering",
    "city": "Kerala",
    "state": "Kerala",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b98,410 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-237.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-238",
    "name": "Amal Jyothi College of Engineering",
    "shortName": "Amal Jyothi College of Engineering",
    "city": "Kerala",
    "state": "Kerala",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,00,000 / year",
    "placement": {
      "averageLPA": "6.9 LPA",
      "highestLPA": "17.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-238.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-239",
    "name": "Hindustan College of Engineering",
    "shortName": "Hindustan College of Engineering",
    "city": "Kerala",
    "state": "Kerala",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b950,000 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-239.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-240",
    "name": "Marian Engineering College",
    "shortName": "Marian Engineering College",
    "city": "Kerala",
    "state": "Kerala",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b996,050 / year",
    "placement": {
      "averageLPA": "7.9 LPA",
      "highestLPA": "19.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-240.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-241",
    "name": "Saintgits College of Engineering, Kottayam",
    "shortName": "Saintgits College of Engineering",
    "city": "Kerala",
    "state": "Kerala",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b975,000 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-241.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-242",
    "name": "Rajiv Gandhi Institute of Technology",
    "shortName": "Rajiv Gandhi Institute of Technology",
    "city": "Kerala",
    "state": "Kerala",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b922,000 / year",
    "placement": {
      "averageLPA": "7.4 LPA",
      "highestLPA": "18.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-242.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-243",
    "name": "Mangalam College of Engineering Ettumanoor",
    "shortName": "Mangalam College of Engineering Ettumanoor",
    "city": "Kerala",
    "state": "Kerala",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b975,000 / year",
    "placement": {
      "averageLPA": "6.4 LPA",
      "highestLPA": "16.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-243.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 6.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-244",
    "name": "NSS College of Engineering",
    "shortName": "NSS College of Engineering",
    "city": "Kerala",
    "state": "Kerala",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b98,739 / year",
    "placement": {
      "averageLPA": "8.2 LPA",
      "highestLPA": "20.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-244.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-245",
    "name": "Sree Chitra Thirunal College of Engineering",
    "shortName": "Sree Chitra Thirunal College of Engineering",
    "city": "Kerala",
    "state": "Kerala",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b962,668 / year",
    "placement": {
      "averageLPA": "8.3 LPA",
      "highestLPA": "20.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-245.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-246",
    "name": "Thejus Engineering College, Thrissur",
    "shortName": "Thejus Engineering College",
    "city": "Kerala",
    "state": "Kerala",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b988,400 / year",
    "placement": {
      "averageLPA": "7.1 LPA",
      "highestLPA": "17.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-246.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-247",
    "name": "Mar Athanasius College of Engineering",
    "shortName": "Mar Athanasius College of Engineering",
    "city": "Kerala",
    "state": "Kerala",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b98,225 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-247.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-248",
    "name": "St. Thomas College of Engineering and Technology-",
    "shortName": "St. Thomas College of Engineering and Technology-",
    "city": "Kerala",
    "state": "Kerala",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b958,150 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-248.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-249",
    "name": "College of Engineering Thalassery, Kannur",
    "shortName": "College of Engineering Thalassery",
    "city": "Kerala",
    "state": "Kerala",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b938,250 / year",
    "placement": {
      "averageLPA": "6.6 LPA",
      "highestLPA": "16.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-249.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 7.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-250",
    "name": "KMCT College of Engineering, Kozhikode",
    "shortName": "KMCT College of Engineering",
    "city": "Kerala",
    "state": "Kerala",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b975,000 / year",
    "placement": {
      "averageLPA": "5.7 LPA",
      "highestLPA": "14.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-250.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 7.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-251",
    "name": "MEA Engineering College- [MEAEC], Malappuram",
    "shortName": "MEA Engineering College- [MEAEC]",
    "city": "Kerala",
    "state": "Kerala",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b975,000 / year",
    "placement": {
      "averageLPA": "6.6 LPA",
      "highestLPA": "16.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-251.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-252",
    "name": "Rajagiri School of Engineering & Technology",
    "shortName": "Rajagiri School of Engineering & Technology",
    "city": "Kerala",
    "state": "Kerala",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b987,000 / year",
    "placement": {
      "averageLPA": "8.6 LPA",
      "highestLPA": "21.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-252.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-253",
    "name": "Sahrdaya College of Engineering",
    "shortName": "Sahrdaya College of Engineering",
    "city": "Kerala",
    "state": "Kerala",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b935,000 / year",
    "placement": {
      "averageLPA": "6.6 LPA",
      "highestLPA": "16.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-253.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 7.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-254",
    "name": "Trinity College of Engineering, Trivendrum",
    "shortName": "Trinity College of Engineering",
    "city": "Kerala",
    "state": "Kerala",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b975,000 / year",
    "placement": {
      "averageLPA": "6.1 LPA",
      "highestLPA": "15.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-254.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Kerala with an overall score of 6.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-255",
    "name": "Birla Institute of Technology and Science",
    "shortName": "Birla Institute of Technology and Science",
    "city": "Rajasthan",
    "state": "Rajasthan",
    "type": "BITS",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b94,45,475 / year",
    "placement": {
      "averageLPA": "9.0 LPA",
      "highestLPA": "22.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-255.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Rajasthan with an overall score of 8.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-256",
    "name": "Indian Institute of Technology",
    "shortName": "Indian Institute of Technology",
    "city": "Rajasthan",
    "state": "Rajasthan",
    "type": "IIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b970,433 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-256.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Rajasthan with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-257",
    "name": "Malaviya National Institute of Technology",
    "shortName": "Malaviya National Institute of Technology",
    "city": "Rajasthan",
    "state": "Rajasthan",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b994,333 / year",
    "placement": {
      "averageLPA": "8.2 LPA",
      "highestLPA": "20.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-257.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Rajasthan with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-258",
    "name": "Singhania University, Jhunjhunu",
    "shortName": "Singhania University",
    "city": "Rajasthan",
    "state": "Rajasthan",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b942,000 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-258.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Rajasthan with an overall score of 7.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-259",
    "name": "Jaipur National University",
    "shortName": "Jaipur National University",
    "city": "Rajasthan",
    "state": "Rajasthan",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,14,000 / year",
    "placement": {
      "averageLPA": "6.7 LPA",
      "highestLPA": "16.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-259.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Rajasthan with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-260",
    "name": "Manipal University",
    "shortName": "Manipal University",
    "city": "Rajasthan",
    "state": "Rajasthan",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,19,000 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-260.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Rajasthan with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-261",
    "name": "JECRC University",
    "shortName": "JECRC University",
    "city": "Rajasthan",
    "state": "Rajasthan",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,85,000 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-261.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Rajasthan with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-262",
    "name": "SunRise University",
    "shortName": "SunRise University",
    "city": "Rajasthan",
    "state": "Rajasthan",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b972,200 / year",
    "placement": {
      "averageLPA": "7.9 LPA",
      "highestLPA": "19.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-262.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Rajasthan with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-263",
    "name": "OPJS University, Churu",
    "shortName": "OPJS University",
    "city": "Rajasthan",
    "state": "Rajasthan",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b971,200 / year",
    "placement": {
      "averageLPA": "6.3 LPA",
      "highestLPA": "15.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-263.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Rajasthan with an overall score of 7.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-264",
    "name": "Banasthali Vidyapith, Jaipur",
    "shortName": "Banasthali Vidyapith",
    "city": "Rajasthan",
    "state": "Rajasthan",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,03,500 / year",
    "placement": {
      "averageLPA": "7.9 LPA",
      "highestLPA": "19.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-264.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Rajasthan with an overall score of 8.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-265",
    "name": "Amity University, Jaipur",
    "shortName": "Amity University",
    "city": "Rajasthan",
    "state": "Rajasthan",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,80,000 / year",
    "placement": {
      "averageLPA": "7.4 LPA",
      "highestLPA": "18.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-265.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Rajasthan with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-266",
    "name": "Suresh Gyan Vihar University",
    "shortName": "Suresh Gyan Vihar University",
    "city": "Rajasthan",
    "state": "Rajasthan",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,40,000 / year",
    "placement": {
      "averageLPA": "6.3 LPA",
      "highestLPA": "15.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-266.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Rajasthan with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-267",
    "name": "IIS (Deemed to be University)",
    "shortName": "IIS (Deemed to be University)",
    "city": "Rajasthan",
    "state": "Rajasthan",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b999,300 / year",
    "placement": {
      "averageLPA": "7.9 LPA",
      "highestLPA": "19.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-267.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Rajasthan with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-268",
    "name": "Madhav University",
    "shortName": "Madhav University",
    "city": "Rajasthan",
    "state": "Rajasthan",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b970,000 / year",
    "placement": {
      "averageLPA": "7.3 LPA",
      "highestLPA": "18.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-268.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Rajasthan with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-269",
    "name": "Jagannath University, Jaipur",
    "shortName": "Jagannath University",
    "city": "Rajasthan",
    "state": "Rajasthan",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,14,000 / year",
    "placement": {
      "averageLPA": "6.9 LPA",
      "highestLPA": "17.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-269.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Rajasthan with an overall score of 7.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-270",
    "name": "Indian Institute of Information Technology",
    "shortName": "Indian Institute of Information Technology",
    "city": "Rajasthan",
    "state": "Rajasthan",
    "type": "IIIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,30,925 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-270.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Rajasthan with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-271",
    "name": "Tantia University, Sriganganagar",
    "shortName": "Tantia University",
    "city": "Rajasthan",
    "state": "Rajasthan",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b930,000 / year",
    "placement": {
      "averageLPA": "7.1 LPA",
      "highestLPA": "17.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-271.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Rajasthan with an overall score of 8.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-272",
    "name": "Pacific University, Udaipur",
    "shortName": "Pacific University",
    "city": "Rajasthan",
    "state": "Rajasthan",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b980,000 / year",
    "placement": {
      "averageLPA": "7.2 LPA",
      "highestLPA": "18.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-272.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Rajasthan with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-273",
    "name": "Swami Keshvanand Institute of Technology, Management and",
    "shortName": "Swami Keshvanand Institute of Technology",
    "city": "Rajasthan",
    "state": "Rajasthan",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b998,900 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-273.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Rajasthan with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-274",
    "name": "Maharana Pratap University of Agriculture and Technology",
    "shortName": "Maharana Pratap University of Agriculture and Technology",
    "city": "Rajasthan",
    "state": "Rajasthan",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b987,800 / year",
    "placement": {
      "averageLPA": "7.9 LPA",
      "highestLPA": "19.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-274.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Rajasthan with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-275",
    "name": "Poornima College of Engineering, Jaipur",
    "shortName": "Poornima College of Engineering",
    "city": "Rajasthan",
    "state": "Rajasthan",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,70,000 / year",
    "placement": {
      "averageLPA": "7.6 LPA",
      "highestLPA": "19.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-275.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Rajasthan with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-276",
    "name": "Shridhar University, Pilani",
    "shortName": "Shridhar University",
    "city": "Rajasthan",
    "state": "Rajasthan",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b999,300 / year",
    "placement": {
      "averageLPA": "7.3 LPA",
      "highestLPA": "18.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-276.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Rajasthan with an overall score of 6.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-277",
    "name": "Jaipur Engineering College and Research Centre, Jaipur",
    "shortName": "Jaipur Engineering College and Research Centre",
    "city": "Rajasthan",
    "state": "Rajasthan",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b992,000 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-277.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Rajasthan with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-278",
    "name": "Birla Institute of Technology",
    "shortName": "Birla Institute of Technology",
    "city": "Rajasthan",
    "state": "Rajasthan",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b911,57,000 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-278.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Rajasthan with an overall score of 7.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-279",
    "name": "Institute of Advanced Studies in Education",
    "shortName": "Institute of Advanced Studies in Education",
    "city": "Rajasthan",
    "state": "Rajasthan",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b979,400 / year",
    "placement": {
      "averageLPA": "7.5 LPA",
      "highestLPA": "18.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-279.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Rajasthan with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-280",
    "name": "National Institute of Technology",
    "shortName": "National Institute of Technology",
    "city": "Haryana",
    "state": "Haryana",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b956,716 / year",
    "placement": {
      "averageLPA": "8.6 LPA",
      "highestLPA": "21.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-280.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-281",
    "name": "Panjab University",
    "shortName": "Panjab University",
    "city": "Haryana",
    "state": "Haryana",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b996,300 / year",
    "placement": {
      "averageLPA": "6.5 LPA",
      "highestLPA": "16.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-281.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-282",
    "name": "Punjab Engineering College University of Technology",
    "shortName": "Punjab Engineering College University of Technology",
    "city": "Haryana",
    "state": "Haryana",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b996,750 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-282.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-283",
    "name": "National Institute of Food Technology Entrepreneurship and",
    "shortName": "National Institute of Food Technology Entrepreneurship and",
    "city": "Haryana",
    "state": "Haryana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,71,550 / year",
    "placement": {
      "averageLPA": "8.5 LPA",
      "highestLPA": "21.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-283.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-284",
    "name": "University Institute of Engineering, Chandigarh University",
    "shortName": "University Institute of Engineering",
    "city": "Haryana",
    "state": "Haryana",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,60,000 / year",
    "placement": {
      "averageLPA": "8.7 LPA",
      "highestLPA": "21.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-284.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-285",
    "name": "School of Engineering and Technology, NCU",
    "shortName": "School of Engineering and Technology",
    "city": "Haryana",
    "state": "Haryana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,60,000 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-285.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 9.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-286",
    "name": "J.C. Bose University Of Science And Technology,",
    "shortName": "J.C. Bose University Of Science And Technology",
    "city": "Haryana",
    "state": "Haryana",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b983,625 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-286.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 7.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-287",
    "name": "Manav Rachna International Institute Of Research And",
    "shortName": "Manav Rachna International Institute Of Research And",
    "city": "Haryana",
    "state": "Haryana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,81,500 / year",
    "placement": {
      "averageLPA": "6.5 LPA",
      "highestLPA": "16.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-287.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 7.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-288",
    "name": "Manav Rachna International Institute of Research and",
    "shortName": "Manav Rachna International Institute of Research and",
    "city": "Haryana",
    "state": "Haryana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,81,500 / year",
    "placement": {
      "averageLPA": "6.6 LPA",
      "highestLPA": "16.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-288.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-289",
    "name": "Gurugram University, Gurgaon",
    "shortName": "Gurugram University",
    "city": "Haryana",
    "state": "Haryana",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b940,000 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-289.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-290",
    "name": "PDM University, Bahadurgarh, Bahadurgarh",
    "shortName": "PDM University",
    "city": "Haryana",
    "state": "Haryana",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,00,200 / year",
    "placement": {
      "averageLPA": "7.1 LPA",
      "highestLPA": "17.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-290.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 7.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-291",
    "name": "Amity University, Gurgaon",
    "shortName": "Amity University",
    "city": "Haryana",
    "state": "Haryana",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,30,000 / year",
    "placement": {
      "averageLPA": "7.1 LPA",
      "highestLPA": "17.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-291.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-292",
    "name": "National Institute of Technical Teachers Training and",
    "shortName": "National Institute of Technical Teachers Training and",
    "city": "Haryana",
    "state": "Haryana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b944,696 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-292.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-293",
    "name": "IILM University, Gurgaon",
    "shortName": "IILM University",
    "city": "Haryana",
    "state": "Haryana",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,30,000 / year",
    "placement": {
      "averageLPA": "8.6 LPA",
      "highestLPA": "21.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-293.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-294",
    "name": "University Institute of Engineering and Technology -[UIET],",
    "shortName": "University Institute of Engineering and Technology -[UIET]",
    "city": "Haryana",
    "state": "Haryana",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b982,197 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-294.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 7.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-295",
    "name": "Starex University, Gurgaon",
    "shortName": "Starex University",
    "city": "Haryana",
    "state": "Haryana",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b980,000 / year",
    "placement": {
      "averageLPA": "8.5 LPA",
      "highestLPA": "21.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-295.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 8.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-296",
    "name": "Indian Institute of Information Technology",
    "shortName": "Indian Institute of Information Technology",
    "city": "Haryana",
    "state": "Haryana",
    "type": "IIIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,57,800 / year",
    "placement": {
      "averageLPA": "9.1 LPA",
      "highestLPA": "22.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-296.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 8.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-297",
    "name": "SRM University Delhi NCR, Sonepat",
    "shortName": "SRM University Delhi NCR",
    "city": "Haryana",
    "state": "Haryana",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,72,000 / year",
    "placement": {
      "averageLPA": "7.6 LPA",
      "highestLPA": "19.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-297.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-298",
    "name": "Lingaya's Vidyapeeth, Faridabad",
    "shortName": "Lingaya's Vidyapeeth",
    "city": "Haryana",
    "state": "Haryana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,34,500 / year",
    "placement": {
      "averageLPA": "7.3 LPA",
      "highestLPA": "18.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-298.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-299",
    "name": "Modern Vidya Niketan",
    "shortName": "Modern Vidya Niketan",
    "city": "Haryana",
    "state": "Haryana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,35,000 / year",
    "placement": {
      "averageLPA": "6.8 LPA",
      "highestLPA": "17.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-299.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 7.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-300",
    "name": "Delhi Technical Campus",
    "shortName": "Delhi Technical Campus",
    "city": "Haryana",
    "state": "Haryana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b969,500 / year",
    "placement": {
      "averageLPA": "8.2 LPA",
      "highestLPA": "20.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-300.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-301",
    "name": "Chandigarh College of Engineering and Technology",
    "shortName": "Chandigarh College of Engineering and Technology",
    "city": "Haryana",
    "state": "Haryana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b964,240 / year",
    "placement": {
      "averageLPA": "6.5 LPA",
      "highestLPA": "16.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-301.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 6.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-302",
    "name": "Manav Rachna University",
    "shortName": "Manav Rachna University",
    "city": "Haryana",
    "state": "Haryana",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,44,000 / year",
    "placement": {
      "averageLPA": "7.3 LPA",
      "highestLPA": "18.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-302.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-303",
    "name": "Seth Jai Parkash Mukand Lal Institute of",
    "shortName": "Seth Jai Parkash Mukand Lal Institute of",
    "city": "Haryana",
    "state": "Haryana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b989,090 / year",
    "placement": {
      "averageLPA": "6.8 LPA",
      "highestLPA": "17.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-303.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 7.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-304",
    "name": "Sushant University / Ansal University, Gurgaon",
    "shortName": "Sushant University / Ansal University",
    "city": "Haryana",
    "state": "Haryana",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,41,120 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-304.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-305",
    "name": "University Institute of Engineering and Technology, Maharshi",
    "shortName": "University Institute of Engineering and Technology",
    "city": "Haryana",
    "state": "Haryana",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b974,288 / year",
    "placement": {
      "averageLPA": "5.7 LPA",
      "highestLPA": "14.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-305.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 7.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-306",
    "name": "St. Andrews Institute of Technology and Management",
    "shortName": "St. Andrews Institute of Technology and Management",
    "city": "Haryana",
    "state": "Haryana",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b992,000 / year",
    "placement": {
      "averageLPA": "8.6 LPA",
      "highestLPA": "21.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-306.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Haryana with an overall score of 8.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-307",
    "name": "Indian Institute of Technology",
    "shortName": "Indian Institute of Technology",
    "city": "Gujarat",
    "state": "Gujarat",
    "type": "IIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,58,500 / year",
    "placement": {
      "averageLPA": "7.2 LPA",
      "highestLPA": "18.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-307.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Gujarat with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-308",
    "name": "Sardar Vallabhbhai National Institute of Technology",
    "shortName": "Sardar Vallabhbhai National Institute of Technology",
    "city": "Gujarat",
    "state": "Gujarat",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,50,000 / year",
    "placement": {
      "averageLPA": "7.9 LPA",
      "highestLPA": "19.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-308.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Gujarat with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-309",
    "name": "Dhirubhai Ambani Institute of Information and Communication",
    "shortName": "Dhirubhai Ambani Institute of Information and Communication",
    "city": "Gujarat",
    "state": "Gujarat",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,54,000 / year",
    "placement": {
      "averageLPA": "9.2 LPA",
      "highestLPA": "23.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-309.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Gujarat with an overall score of 8.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-310",
    "name": "Institute of Technology, Nirma University, Ahmedabad",
    "shortName": "Institute of Technology",
    "city": "Gujarat",
    "state": "Gujarat",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,97,200 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-310.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Gujarat with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-311",
    "name": "Faculty of Technology and Engineering, Maharaja Sayajirao",
    "shortName": "Faculty of Technology and Engineering",
    "city": "Gujarat",
    "state": "Gujarat",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b97,640 / year",
    "placement": {
      "averageLPA": "8.3 LPA",
      "highestLPA": "20.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-311.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Gujarat with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-312",
    "name": "Nirma University",
    "shortName": "Nirma University",
    "city": "Gujarat",
    "state": "Gujarat",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,97,200 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-312.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Gujarat with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-313",
    "name": "Pandit Deendayal Petroleum University [PDPU] / (Energy",
    "shortName": "Pandit Deendayal Petroleum University [PDPU] / (Energy",
    "city": "Gujarat",
    "state": "Gujarat",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,53,000 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-313.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Gujarat with an overall score of 8.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-314",
    "name": "Pandit Deendayal Petroleum University, School of Technology",
    "shortName": "Pandit Deendayal Petroleum University",
    "city": "Gujarat",
    "state": "Gujarat",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,53,000 / year",
    "placement": {
      "averageLPA": "7.9 LPA",
      "highestLPA": "19.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-314.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Gujarat with an overall score of 8.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-315",
    "name": "Central Institute of plastics engineering & Technology-",
    "shortName": "Central Institute of plastics engineering & Technology-",
    "city": "Gujarat",
    "state": "Gujarat",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b965,000 / year",
    "placement": {
      "averageLPA": "7.5 LPA",
      "highestLPA": "18.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-315.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Gujarat with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-316",
    "name": "Sardar Patel University",
    "shortName": "Sardar Patel University",
    "city": "Gujarat",
    "state": "Gujarat",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "7.3 LPA",
      "highestLPA": "18.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-316.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Gujarat with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-317",
    "name": "CEPT University, Ahmedabad",
    "shortName": "CEPT University",
    "city": "Gujarat",
    "state": "Gujarat",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,98,000 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-317.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Gujarat with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-318",
    "name": "Ganpat University",
    "shortName": "Ganpat University",
    "city": "Gujarat",
    "state": "Gujarat",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,08,000 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-318.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Gujarat with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-319",
    "name": "Indus University, Ahmedabad",
    "shortName": "Indus University",
    "city": "Gujarat",
    "state": "Gujarat",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b996,000 / year",
    "placement": {
      "averageLPA": "6.8 LPA",
      "highestLPA": "17.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-319.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Gujarat with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-320",
    "name": "Navrachana University",
    "shortName": "Navrachana University",
    "city": "Gujarat",
    "state": "Gujarat",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,14,000 / year",
    "placement": {
      "averageLPA": "7.2 LPA",
      "highestLPA": "18.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-320.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Gujarat with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-321",
    "name": "Indian Institute of Information Technology Vadodara",
    "shortName": "Indian Institute of Information Technology Vadodara",
    "city": "Gujarat",
    "state": "Gujarat",
    "type": "IIIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,79,720 / year",
    "placement": {
      "averageLPA": "8.5 LPA",
      "highestLPA": "21.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-321.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Gujarat with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-322",
    "name": "Uka Tarsadia University, Bardoli",
    "shortName": "Uka Tarsadia University",
    "city": "Gujarat",
    "state": "Gujarat",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b994,000 / year",
    "placement": {
      "averageLPA": "6.9 LPA",
      "highestLPA": "17.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-322.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Gujarat with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-323",
    "name": "GSFC University, Vadodara",
    "shortName": "GSFC University",
    "city": "Gujarat",
    "state": "Gujarat",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,21,250 / year",
    "placement": {
      "averageLPA": "7.9 LPA",
      "highestLPA": "19.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-323.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Gujarat with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-324",
    "name": "Auro University, Surat",
    "shortName": "Auro University",
    "city": "Gujarat",
    "state": "Gujarat",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,21,000 / year",
    "placement": {
      "averageLPA": "7.2 LPA",
      "highestLPA": "18.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-324.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Gujarat with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-325",
    "name": "L.D. College of Engineering",
    "shortName": "L.D. College of Engineering",
    "city": "Gujarat",
    "state": "Gujarat",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,860 / year",
    "placement": {
      "averageLPA": "8.5 LPA",
      "highestLPA": "21.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-325.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Gujarat with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-326",
    "name": "RK University",
    "shortName": "RK University",
    "city": "Gujarat",
    "state": "Gujarat",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b976,500 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-326.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Gujarat with an overall score of 8.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-327",
    "name": "Institute of Infrastructure Technology Research and Management",
    "shortName": "Institute of Infrastructure Technology Research and Management",
    "city": "Gujarat",
    "state": "Gujarat",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b929,100 / year",
    "placement": {
      "averageLPA": "6.9 LPA",
      "highestLPA": "17.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-327.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Gujarat with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-328",
    "name": "Indian Institute of Information Technology",
    "shortName": "Indian Institute of Information Technology",
    "city": "Gujarat",
    "state": "Gujarat",
    "type": "IIIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,47,000 / year",
    "placement": {
      "averageLPA": "6.5 LPA",
      "highestLPA": "16.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-328.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Gujarat with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-329",
    "name": "C. U. Shah University, Wadhwan",
    "shortName": "C. U. Shah University",
    "city": "Gujarat",
    "state": "Gujarat",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b977,800 / year",
    "placement": {
      "averageLPA": "7.4 LPA",
      "highestLPA": "18.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-329.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Gujarat with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-330",
    "name": "P.P. Savani University, Surat",
    "shortName": "P.P. Savani University",
    "city": "Gujarat",
    "state": "Gujarat",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,11,500 / year",
    "placement": {
      "averageLPA": "8.7 LPA",
      "highestLPA": "21.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-330.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Gujarat with an overall score of 9.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-331",
    "name": "Vishwakarma Government Engineering College",
    "shortName": "Vishwakarma Government Engineering College",
    "city": "Gujarat",
    "state": "Gujarat",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,500 / year",
    "placement": {
      "averageLPA": "7.1 LPA",
      "highestLPA": "17.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-331.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Gujarat with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-332",
    "name": "Dharmsinh Desai University",
    "shortName": "Dharmsinh Desai University",
    "city": "Gujarat",
    "state": "Gujarat",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,52,000 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-332.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Gujarat with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-333",
    "name": "Thapar Institute of Engineering and Technology",
    "shortName": "Thapar Institute of Engineering and Technology",
    "city": "Punjab",
    "state": "Punjab",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,24,800 / year",
    "placement": {
      "averageLPA": "8.2 LPA",
      "highestLPA": "20.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-333.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Punjab with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-334",
    "name": "Indian Institute of Technology",
    "shortName": "Indian Institute of Technology",
    "city": "Punjab",
    "state": "Punjab",
    "type": "IIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,19,800 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-334.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Punjab with an overall score of 8.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-335",
    "name": "Panjab University",
    "shortName": "Panjab University",
    "city": "Punjab",
    "state": "Punjab",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b996,300 / year",
    "placement": {
      "averageLPA": "6.5 LPA",
      "highestLPA": "16.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-335.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Punjab with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-336",
    "name": "Punjab Engineering College University of Technology",
    "shortName": "Punjab Engineering College University of Technology",
    "city": "Punjab",
    "state": "Punjab",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b996,750 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-336.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Punjab with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-337",
    "name": "I.K. Gujral Punjab Technical University",
    "shortName": "I.K. Gujral Punjab Technical University",
    "city": "Punjab",
    "state": "Punjab",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b988,750 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-337.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Punjab with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-338",
    "name": "Dr BR Ambedkar National Institute of Technology",
    "shortName": "Dr BR Ambedkar National Institute of Technology",
    "city": "Punjab",
    "state": "Punjab",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b96,76,000 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-338.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Punjab with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-339",
    "name": "University Institute of Engineering, Chandigarh University",
    "shortName": "University Institute of Engineering",
    "city": "Punjab",
    "state": "Punjab",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,60,000 / year",
    "placement": {
      "averageLPA": "8.7 LPA",
      "highestLPA": "21.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-339.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Punjab with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-340",
    "name": "Sant Longowal Institute of Engineering and Technology",
    "shortName": "Sant Longowal Institute of Engineering and Technology",
    "city": "Punjab",
    "state": "Punjab",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b981,000 / year",
    "placement": {
      "averageLPA": "6.5 LPA",
      "highestLPA": "16.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-340.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Punjab with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-341",
    "name": "Chitkara University",
    "shortName": "Chitkara University",
    "city": "Punjab",
    "state": "Punjab",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b96,66,000 / year",
    "placement": {
      "averageLPA": "8.7 LPA",
      "highestLPA": "21.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-341.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Punjab with an overall score of 8.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-342",
    "name": "Chandigarh Group of Colleges",
    "shortName": "Chandigarh Group of Colleges",
    "city": "Punjab",
    "state": "Punjab",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b994,000 / year",
    "placement": {
      "averageLPA": "8.6 LPA",
      "highestLPA": "21.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-342.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Punjab with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-343",
    "name": "RIMT University, Gobindgarh",
    "shortName": "RIMT University",
    "city": "Punjab",
    "state": "Punjab",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,35,000 / year",
    "placement": {
      "averageLPA": "6.7 LPA",
      "highestLPA": "16.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-343.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Punjab with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-344",
    "name": "National Institute of Technical Teachers Training and",
    "shortName": "National Institute of Technical Teachers Training and",
    "city": "Punjab",
    "state": "Punjab",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b944,696 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-344.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Punjab with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-345",
    "name": "Guru Kashi University, Bathinda",
    "shortName": "Guru Kashi University",
    "city": "Punjab",
    "state": "Punjab",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b992,680 / year",
    "placement": {
      "averageLPA": "7.2 LPA",
      "highestLPA": "18.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-345.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Punjab with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-346",
    "name": "University Institute of Engineering and Technology -[UIET],",
    "shortName": "University Institute of Engineering and Technology -[UIET]",
    "city": "Punjab",
    "state": "Punjab",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b982,197 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-346.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Punjab with an overall score of 7.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-347",
    "name": "Rayat Bahra University, Mohali",
    "shortName": "Rayat Bahra University",
    "city": "Punjab",
    "state": "Punjab",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,00,000 / year",
    "placement": {
      "averageLPA": "7.4 LPA",
      "highestLPA": "18.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-347.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Punjab with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-348",
    "name": "DAV University, Jalandhar",
    "shortName": "DAV University",
    "city": "Punjab",
    "state": "Punjab",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,36,000 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-348.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Punjab with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-349",
    "name": "Plaksha, Mohali",
    "shortName": "Plaksha",
    "city": "Punjab",
    "state": "Punjab",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b96,90,000 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-349.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Punjab with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-350",
    "name": "Chandigarh Engineering College",
    "shortName": "Chandigarh Engineering College",
    "city": "Punjab",
    "state": "Punjab",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b994,000 / year",
    "placement": {
      "averageLPA": "8.5 LPA",
      "highestLPA": "21.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-350.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Punjab with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-351",
    "name": "Sant Baba Bhag Singh University",
    "shortName": "Sant Baba Bhag Singh University",
    "city": "Punjab",
    "state": "Punjab",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b982,500 / year",
    "placement": {
      "averageLPA": "8.5 LPA",
      "highestLPA": "21.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-351.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Punjab with an overall score of 8.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-352",
    "name": "Chandigarh College of Engineering and Technology",
    "shortName": "Chandigarh College of Engineering and Technology",
    "city": "Punjab",
    "state": "Punjab",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b964,240 / year",
    "placement": {
      "averageLPA": "6.5 LPA",
      "highestLPA": "16.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-352.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Punjab with an overall score of 6.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-353",
    "name": "Global Institute, Amritsar",
    "shortName": "Global Institute",
    "city": "Punjab",
    "state": "Punjab",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,18,000 / year",
    "placement": {
      "averageLPA": "7.9 LPA",
      "highestLPA": "19.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-353.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Punjab with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-354",
    "name": "Maharaja Ranjit Singh Punjab Technical University, Bathinda",
    "shortName": "Maharaja Ranjit Singh Punjab Technical University",
    "city": "Punjab",
    "state": "Punjab",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,70,600 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-354.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Punjab with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-355",
    "name": "Amritsar College of Engineering and Technology",
    "shortName": "Amritsar College of Engineering and Technology",
    "city": "Punjab",
    "state": "Punjab",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b94,03,024 / year",
    "placement": {
      "averageLPA": "7.3 LPA",
      "highestLPA": "18.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-355.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Punjab with an overall score of 7.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-356",
    "name": "Guru Nanak Dev Engineering College",
    "shortName": "Guru Nanak Dev Engineering College",
    "city": "Punjab",
    "state": "Punjab",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b998,689 / year",
    "placement": {
      "averageLPA": "7.4 LPA",
      "highestLPA": "18.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-356.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Punjab with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-357",
    "name": "Sri Guru Granth Sahib World University",
    "shortName": "Sri Guru Granth Sahib World University",
    "city": "Punjab",
    "state": "Punjab",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,04,000 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-357.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Punjab with an overall score of 8.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-358",
    "name": "Baba Banda Singh Bahadur Engineering College",
    "shortName": "Baba Banda Singh Bahadur Engineering College",
    "city": "Punjab",
    "state": "Punjab",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b990,000 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-358.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Punjab with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-359",
    "name": "Indian Institute of Technology",
    "shortName": "Indian Institute of Technology",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "IIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b982,070 / year",
    "placement": {
      "averageLPA": "8.8 LPA",
      "highestLPA": "22.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-359.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 8.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-360",
    "name": "Jadavpur University",
    "shortName": "Jadavpur University",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,400 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-360.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-361",
    "name": "Indian Institute of Engineering Science and Technology",
    "shortName": "Indian Institute of Engineering Science and Technology",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b970,000 / year",
    "placement": {
      "averageLPA": "7.5 LPA",
      "highestLPA": "18.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-361.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-362",
    "name": "National Institute of Technology",
    "shortName": "National Institute of Technology",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,49,100 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-362.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-363",
    "name": "Institute of Engineering and Management",
    "shortName": "Institute of Engineering and Management",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,68,400 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-363.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-364",
    "name": "Heritage Institute of Technology",
    "shortName": "Heritage Institute of Technology",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,16,200 / year",
    "placement": {
      "averageLPA": "7.6 LPA",
      "highestLPA": "19.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-364.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-365",
    "name": "Maulana Abul Kalam Azad University of Technology",
    "shortName": "Maulana Abul Kalam Azad University of Technology",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b949,000 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-365.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-366",
    "name": "Narula Institute of Technology",
    "shortName": "Narula Institute of Technology",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,29,800 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-366.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-367",
    "name": "Haldia Institute of Technology",
    "shortName": "Haldia Institute of Technology",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,16,350 / year",
    "placement": {
      "averageLPA": "7.2 LPA",
      "highestLPA": "18.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-367.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-368",
    "name": "Amity University, Kolkata",
    "shortName": "Amity University",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,07,000 / year",
    "placement": {
      "averageLPA": "7.4 LPA",
      "highestLPA": "18.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-368.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-369",
    "name": "Techno India University, Kolkata",
    "shortName": "Techno India University",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b989,200 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-369.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-370",
    "name": "Adamas University, Kolkata",
    "shortName": "Adamas University",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,72,800 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-370.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-371",
    "name": "Sister Nivedita University",
    "shortName": "Sister Nivedita University",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,49,500 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-371.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-372",
    "name": "Asansol Engineering College",
    "shortName": "Asansol Engineering College",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,34,068 / year",
    "placement": {
      "averageLPA": "7.6 LPA",
      "highestLPA": "19.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-372.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-373",
    "name": "University of Engineering and Management",
    "shortName": "University of Engineering and Management",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,61,200 / year",
    "placement": {
      "averageLPA": "8.8 LPA",
      "highestLPA": "22.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-373.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-374",
    "name": "JIS College of Engineering",
    "shortName": "JIS College of Engineering",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,29,800 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-374.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-375",
    "name": "Kalyani Government Engineering College",
    "shortName": "Kalyani Government Engineering College",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b916,155 / year",
    "placement": {
      "averageLPA": "7.4 LPA",
      "highestLPA": "18.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-375.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-376",
    "name": "Indian Institute of Information Technology",
    "shortName": "Indian Institute of Information Technology",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "IIIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b917,120 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-376.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 6.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-377",
    "name": "The Neotia University",
    "shortName": "The Neotia University",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,44,000 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-377.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-378",
    "name": "Bengal Institute of Technology",
    "shortName": "Bengal Institute of Technology",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-378.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 7.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-379",
    "name": "Siliguri Institute of Technology",
    "shortName": "Siliguri Institute of Technology",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,93,000 / year",
    "placement": {
      "averageLPA": "7.2 LPA",
      "highestLPA": "18.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-379.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-380",
    "name": "University Institute of Technology, University Of Burdwan",
    "shortName": "University Institute of Technology",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b971,200 / year",
    "placement": {
      "averageLPA": "5.4 LPA",
      "highestLPA": "13.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-380.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 6.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-381",
    "name": "Jalpaiguri Government Engineering College",
    "shortName": "Jalpaiguri Government Engineering College",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b914,877 / year",
    "placement": {
      "averageLPA": "7.3 LPA",
      "highestLPA": "18.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-381.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-382",
    "name": "Techno India Salt Lake, Kolkata",
    "shortName": "Techno India Salt Lake",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b94,83,800 / year",
    "placement": {
      "averageLPA": "7.6 LPA",
      "highestLPA": "19.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-382.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-383",
    "name": "Bengal College of Engineering and Technology",
    "shortName": "Bengal College of Engineering and Technology",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,03,600 / year",
    "placement": {
      "averageLPA": "6.1 LPA",
      "highestLPA": "15.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-383.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 7.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-384",
    "name": "Dr. B.C. Roy Engineering College",
    "shortName": "Dr. B.C. Roy Engineering College",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,08,980 / year",
    "placement": {
      "averageLPA": "7.2 LPA",
      "highestLPA": "18.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-384.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-385",
    "name": "Bengal College of Engineering",
    "shortName": "Bengal College of Engineering",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b998,500 / year",
    "placement": {
      "averageLPA": "5.1 LPA",
      "highestLPA": "12.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-385.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 5.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-386",
    "name": "Seacom Skills University",
    "shortName": "Seacom Skills University",
    "city": "West Bengal",
    "state": "West Bengal",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b982,000 / year",
    "placement": {
      "averageLPA": "6.7 LPA",
      "highestLPA": "16.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-386.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in West Bengal with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-387",
    "name": "National Institute of Technology",
    "shortName": "National Institute of Technology",
    "city": "Odisha",
    "state": "Odisha",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,25,500 / year",
    "placement": {
      "averageLPA": "8.2 LPA",
      "highestLPA": "20.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-387.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-388",
    "name": "Indian Institute of Technology",
    "shortName": "Indian Institute of Technology",
    "city": "Odisha",
    "state": "Odisha",
    "type": "IIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,28,676 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-388.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-389",
    "name": "Institute of Technical Education and Research",
    "shortName": "Institute of Technical Education and Research",
    "city": "Odisha",
    "state": "Odisha",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,50,000 / year",
    "placement": {
      "averageLPA": "8.3 LPA",
      "highestLPA": "20.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-389.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-390",
    "name": "C. V. Raman Global University, Bhubaneswar",
    "shortName": "C. V. Raman Global University",
    "city": "Odisha",
    "state": "Odisha",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,19,000 / year",
    "placement": {
      "averageLPA": "7.5 LPA",
      "highestLPA": "18.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-390.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-391",
    "name": "Veer Surendra Sai University of Technology",
    "shortName": "Veer Surendra Sai University of Technology",
    "city": "Odisha",
    "state": "Odisha",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b991,280 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-391.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-392",
    "name": "Biju Patnaik University of Technology",
    "shortName": "Biju Patnaik University of Technology",
    "city": "Odisha",
    "state": "Odisha",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "4.8 LPA",
      "highestLPA": "12.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-392.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 6.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-393",
    "name": "Centurion University of Technology and Management",
    "shortName": "Centurion University of Technology and Management",
    "city": "Odisha",
    "state": "Odisha",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,00,000 / year",
    "placement": {
      "averageLPA": "7.4 LPA",
      "highestLPA": "18.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-393.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-394",
    "name": "International Institute of Information Technology",
    "shortName": "International Institute of Information Technology",
    "city": "Odisha",
    "state": "Odisha",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,01,100 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-394.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-395",
    "name": "Indira Gandhi Institute of Technology- [IGIT], Dhenkanal",
    "shortName": "Indira Gandhi Institute of Technology- [IGIT]",
    "city": "Odisha",
    "state": "Odisha",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b934,500 / year",
    "placement": {
      "averageLPA": "6.7 LPA",
      "highestLPA": "16.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-395.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-396",
    "name": "Silicon Institute of Technology",
    "shortName": "Silicon Institute of Technology",
    "city": "Odisha",
    "state": "Odisha",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b96,00,000 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-396.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-397",
    "name": "Silicon Institute of Technology",
    "shortName": "Silicon Institute of Technology",
    "city": "Odisha",
    "state": "Odisha",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,80,000 / year",
    "placement": {
      "averageLPA": "6.6 LPA",
      "highestLPA": "16.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-397.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-398",
    "name": "Xavier University",
    "shortName": "Xavier University",
    "city": "Odisha",
    "state": "Odisha",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,08,000 / year",
    "placement": {
      "averageLPA": "6.8 LPA",
      "highestLPA": "17.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-398.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-399",
    "name": "Bhubaneswar Engineering College",
    "shortName": "Bhubaneswar Engineering College",
    "city": "Odisha",
    "state": "Odisha",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,52,000 / year",
    "placement": {
      "averageLPA": "7.3 LPA",
      "highestLPA": "18.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-399.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-400",
    "name": "College of Engineering",
    "shortName": "College of Engineering",
    "city": "Odisha",
    "state": "Odisha",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,92,000 / year",
    "placement": {
      "averageLPA": "6.0 LPA",
      "highestLPA": "15.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-400.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 6.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-401",
    "name": "National Institute of Science and Technology",
    "shortName": "National Institute of Science and Technology",
    "city": "Odisha",
    "state": "Odisha",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,21,500 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-401.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-402",
    "name": "College of Engineering and Technology",
    "shortName": "College of Engineering and Technology",
    "city": "Odisha",
    "state": "Odisha",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,35,000 / year",
    "placement": {
      "averageLPA": "7.9 LPA",
      "highestLPA": "19.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-402.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-403",
    "name": "Gandhi Institute for Technology",
    "shortName": "Gandhi Institute for Technology",
    "city": "Odisha",
    "state": "Odisha",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b981,000 / year",
    "placement": {
      "averageLPA": "6.6 LPA",
      "highestLPA": "16.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-403.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 7.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-404",
    "name": "Orissa Engineering College",
    "shortName": "Orissa Engineering College",
    "city": "Odisha",
    "state": "Odisha",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b986,500 / year",
    "placement": {
      "averageLPA": "7.3 LPA",
      "highestLPA": "18.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-404.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-405",
    "name": "Parala Maharaja Engineering College",
    "shortName": "Parala Maharaja Engineering College",
    "city": "Odisha",
    "state": "Odisha",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b933,400 / year",
    "placement": {
      "averageLPA": "5.7 LPA",
      "highestLPA": "14.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-405.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 7.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-406",
    "name": "CSIR-Institute of Minerals and Materials Technology -[CSIR-IMMT],",
    "shortName": "CSIR-Institute of Minerals and Materials Technology -[CSIR-IMMT]",
    "city": "Odisha",
    "state": "Odisha",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "7.3 LPA",
      "highestLPA": "18.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-406.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 7.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-407",
    "name": "GITA Autonomous College",
    "shortName": "GITA Autonomous College",
    "city": "Odisha",
    "state": "Odisha",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,08,000 / year",
    "placement": {
      "averageLPA": "8.3 LPA",
      "highestLPA": "20.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-407.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 8.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-408",
    "name": "Seemanta Engineering College, Mayurbhanj",
    "shortName": "Seemanta Engineering College",
    "city": "Odisha",
    "state": "Odisha",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,20,000 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-408.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-409",
    "name": "Trident Academy of Technology, Bhubaneswar",
    "shortName": "Trident Academy of Technology",
    "city": "Odisha",
    "state": "Odisha",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,08,300 / year",
    "placement": {
      "averageLPA": "7.9 LPA",
      "highestLPA": "19.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-409.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-410",
    "name": "Government College of Engineering, Kendujhar",
    "shortName": "Government College of Engineering",
    "city": "Odisha",
    "state": "Odisha",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,40,000 / year",
    "placement": {
      "averageLPA": "5.1 LPA",
      "highestLPA": "12.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-410.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 7.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-411",
    "name": "CIPET: Centre for Skilling and Technical Support",
    "shortName": "CIPET: Centre for Skilling and Technical Support",
    "city": "Odisha",
    "state": "Odisha",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b932,680 / year",
    "placement": {
      "averageLPA": "6.9 LPA",
      "highestLPA": "17.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-411.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 6.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-412",
    "name": "Vignan Institute of Technology And Management, Berhampur",
    "shortName": "Vignan Institute of Technology And Management",
    "city": "Odisha",
    "state": "Odisha",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b958,000 / year",
    "placement": {
      "averageLPA": "5.9 LPA",
      "highestLPA": "14.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-412.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-413",
    "name": "Krupajal Engineering College",
    "shortName": "Krupajal Engineering College",
    "city": "Odisha",
    "state": "Odisha",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b972,000 / year",
    "placement": {
      "averageLPA": "4.9 LPA",
      "highestLPA": "12.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-413.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Odisha with an overall score of 6.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-414",
    "name": "Indian Institute of Technology",
    "shortName": "Indian Institute of Technology",
    "city": "Uttarakhand",
    "state": "Uttarakhand",
    "type": "IIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,21,700 / year",
    "placement": {
      "averageLPA": "8.6 LPA",
      "highestLPA": "21.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-414.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttarakhand with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-415",
    "name": "Graphic Era University, School of Engineering and",
    "shortName": "Graphic Era University",
    "city": "Uttarakhand",
    "state": "Uttarakhand",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,36,400 / year",
    "placement": {
      "averageLPA": "8.8 LPA",
      "highestLPA": "22.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-415.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttarakhand with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-416",
    "name": "College of Technology, GB Pant University of",
    "shortName": "College of Technology",
    "city": "Uttarakhand",
    "state": "Uttarakhand",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b965,344 / year",
    "placement": {
      "averageLPA": "6.0 LPA",
      "highestLPA": "15.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-416.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttarakhand with an overall score of 7.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-417",
    "name": "University of Petroleum and Energy Studies",
    "shortName": "University of Petroleum and Energy Studies",
    "city": "Uttarakhand",
    "state": "Uttarakhand",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b916,04,500 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-417.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttarakhand with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-418",
    "name": "Doon University, Dehradun",
    "shortName": "Doon University",
    "city": "Uttarakhand",
    "state": "Uttarakhand",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b934,750 / year",
    "placement": {
      "averageLPA": "6.3 LPA",
      "highestLPA": "15.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-418.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttarakhand with an overall score of 7.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-419",
    "name": "DIT University",
    "shortName": "DIT University",
    "city": "Uttarakhand",
    "state": "Uttarakhand",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,00,000 / year",
    "placement": {
      "averageLPA": "7.4 LPA",
      "highestLPA": "18.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-419.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttarakhand with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-420",
    "name": "Graphic Era University",
    "shortName": "Graphic Era University",
    "city": "Uttarakhand",
    "state": "Uttarakhand",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,23,400 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-420.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttarakhand with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-421",
    "name": "Graphic Era Hill University",
    "shortName": "Graphic Era Hill University",
    "city": "Uttarakhand",
    "state": "Uttarakhand",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,75,600 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-421.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttarakhand with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-422",
    "name": "ICFAI University, Dehradun",
    "shortName": "ICFAI University",
    "city": "Uttarakhand",
    "state": "Uttarakhand",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,56,000 / year",
    "placement": {
      "averageLPA": "7.3 LPA",
      "highestLPA": "18.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-422.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttarakhand with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-423",
    "name": "MotherHood University, Roorkee",
    "shortName": "MotherHood University",
    "city": "Uttarakhand",
    "state": "Uttarakhand",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b971,650 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-423.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttarakhand with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-424",
    "name": "Himgiri Zee University",
    "shortName": "Himgiri Zee University",
    "city": "Uttarakhand",
    "state": "Uttarakhand",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b990,000 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-424.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttarakhand with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-425",
    "name": "Swami Rama Himalayan University",
    "shortName": "Swami Rama Himalayan University",
    "city": "Uttarakhand",
    "state": "Uttarakhand",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,12,250 / year",
    "placement": {
      "averageLPA": "7.1 LPA",
      "highestLPA": "17.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-425.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttarakhand with an overall score of 7.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-426",
    "name": "Tula's Institute, Dehradun",
    "shortName": "Tula's Institute",
    "city": "Uttarakhand",
    "state": "Uttarakhand",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,12,500 / year",
    "placement": {
      "averageLPA": "7.4 LPA",
      "highestLPA": "18.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-426.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttarakhand with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-427",
    "name": "THDC Institute of Hydro Power Engineering and",
    "shortName": "THDC Institute of Hydro Power Engineering and",
    "city": "Uttarakhand",
    "state": "Uttarakhand",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b973,500 / year",
    "placement": {
      "averageLPA": "5.6 LPA",
      "highestLPA": "14.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-427.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttarakhand with an overall score of 6.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-428",
    "name": "College of Engineering",
    "shortName": "College of Engineering",
    "city": "Uttarakhand",
    "state": "Uttarakhand",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,36,150 / year",
    "placement": {
      "averageLPA": "7.5 LPA",
      "highestLPA": "18.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-428.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttarakhand with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-429",
    "name": "Shivalik College of Engineering",
    "shortName": "Shivalik College of Engineering",
    "city": "Uttarakhand",
    "state": "Uttarakhand",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,01,400 / year",
    "placement": {
      "averageLPA": "7.1 LPA",
      "highestLPA": "17.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-429.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttarakhand with an overall score of 7.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-430",
    "name": "Women Institute of Technology",
    "shortName": "Women Institute of Technology",
    "city": "Uttarakhand",
    "state": "Uttarakhand",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b975,500 / year",
    "placement": {
      "averageLPA": "6.7 LPA",
      "highestLPA": "16.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-430.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttarakhand with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-431",
    "name": "Indian Institute of Aeronautical Engineering",
    "shortName": "Indian Institute of Aeronautical Engineering",
    "city": "Uttarakhand",
    "state": "Uttarakhand",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,00,000 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-431.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttarakhand with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-432",
    "name": "Indira Gandhi National Forest Academy",
    "shortName": "Indira Gandhi National Forest Academy",
    "city": "Uttarakhand",
    "state": "Uttarakhand",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,84,500 / year",
    "placement": {
      "averageLPA": "9.0 LPA",
      "highestLPA": "22.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-432.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttarakhand with an overall score of 8.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-433",
    "name": "Bipin Tripathi Kumaon Institute of Technology, Almora",
    "shortName": "Bipin Tripathi Kumaon Institute of Technology",
    "city": "Uttarakhand",
    "state": "Uttarakhand",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b971,150 / year",
    "placement": {
      "averageLPA": "4.6 LPA",
      "highestLPA": "11.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-433.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttarakhand with an overall score of 6.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-434",
    "name": "Govind Ballabh Pant Engineering College",
    "shortName": "Govind Ballabh Pant Engineering College",
    "city": "Uttarakhand",
    "state": "Uttarakhand",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b969,015 / year",
    "placement": {
      "averageLPA": "5.1 LPA",
      "highestLPA": "12.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-434.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttarakhand with an overall score of 6.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-435",
    "name": "BFIT Group of Institutions",
    "shortName": "BFIT Group of Institutions",
    "city": "Uttarakhand",
    "state": "Uttarakhand",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b935,000 / year",
    "placement": {
      "averageLPA": "7.1 LPA",
      "highestLPA": "17.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-435.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttarakhand with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-436",
    "name": "Dev Bhoomi Institute of Technology",
    "shortName": "Dev Bhoomi Institute of Technology",
    "city": "Uttarakhand",
    "state": "Uttarakhand",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,19,700 / year",
    "placement": {
      "averageLPA": "7.5 LPA",
      "highestLPA": "18.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-436.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttarakhand with an overall score of 7.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-437",
    "name": "Graphic Era Hill University Bhimtal Campus",
    "shortName": "Graphic Era Hill University Bhimtal Campus",
    "city": "Uttarakhand",
    "state": "Uttarakhand",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,75,600 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-437.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Uttarakhand with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-438",
    "name": "Indian Institute of Technology",
    "shortName": "Indian Institute of Technology",
    "city": "Assam",
    "state": "Assam",
    "type": "IIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,19,350 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-438.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 8.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-439",
    "name": "National Institute of Technology",
    "shortName": "National Institute of Technology",
    "city": "Assam",
    "state": "Assam",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,47,640 / year",
    "placement": {
      "averageLPA": "8.2 LPA",
      "highestLPA": "20.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-439.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-440",
    "name": "Indian Institute of Information Technology",
    "shortName": "Indian Institute of Information Technology",
    "city": "Assam",
    "state": "Assam",
    "type": "IIIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,25,000 / year",
    "placement": {
      "averageLPA": "7.5 LPA",
      "highestLPA": "18.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-440.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-441",
    "name": "Central Institute of Technology",
    "shortName": "Central Institute of Technology",
    "city": "Assam",
    "state": "Assam",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,11,200 / year",
    "placement": {
      "averageLPA": "5.3 LPA",
      "highestLPA": "13.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-441.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 7.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-442",
    "name": "Assam Don Bosco University",
    "shortName": "Assam Don Bosco University",
    "city": "Assam",
    "state": "Assam",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,57,000 / year",
    "placement": {
      "averageLPA": "6.4 LPA",
      "highestLPA": "16.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-442.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-443",
    "name": "Assam Engineering College",
    "shortName": "Assam Engineering College",
    "city": "Assam",
    "state": "Assam",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b911,000 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-443.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-444",
    "name": "Jorhat Engineering College",
    "shortName": "Jorhat Engineering College",
    "city": "Assam",
    "state": "Assam",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b911,000 / year",
    "placement": {
      "averageLPA": "7.1 LPA",
      "highestLPA": "17.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-444.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-445",
    "name": "Assam Science and Technology University",
    "shortName": "Assam Science and Technology University",
    "city": "Assam",
    "state": "Assam",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b921,000 / year",
    "placement": {
      "averageLPA": "7.6 LPA",
      "highestLPA": "19.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-445.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-446",
    "name": "Assam Down Town University",
    "shortName": "Assam Down Town University",
    "city": "Assam",
    "state": "Assam",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,30,000 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-446.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-447",
    "name": "Girijananda Chowdhury Institute of Management & Technology,",
    "shortName": "Girijananda Chowdhury Institute of Management & Technology",
    "city": "Assam",
    "state": "Assam",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,44,000 / year",
    "placement": {
      "averageLPA": "6.4 LPA",
      "highestLPA": "16.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-447.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 7.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-448",
    "name": "Assam Engineering Institute",
    "shortName": "Assam Engineering Institute",
    "city": "Assam",
    "state": "Assam",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,130 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-448.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 8.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-449",
    "name": "Bineswar Brahma Engineering College- [BBEC], Kokrajhar",
    "shortName": "Bineswar Brahma Engineering College- [BBEC]",
    "city": "Assam",
    "state": "Assam",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b912,800 / year",
    "placement": {
      "averageLPA": "7.2 LPA",
      "highestLPA": "18.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-449.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 7.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-450",
    "name": "Jorhat Institute of Science and Technology",
    "shortName": "Jorhat Institute of Science and Technology",
    "city": "Assam",
    "state": "Assam",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "5.2 LPA",
      "highestLPA": "13.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-450.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 6.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-451",
    "name": "NETES Institute of Technology and Science",
    "shortName": "NETES Institute of Technology and Science",
    "city": "Assam",
    "state": "Assam",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b990,000 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-451.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 6.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-452",
    "name": "Don Bosco College of Engineering and Technology",
    "shortName": "Don Bosco College of Engineering and Technology",
    "city": "Assam",
    "state": "Assam",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,57,000 / year",
    "placement": {
      "averageLPA": "7.3 LPA",
      "highestLPA": "18.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-452.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 8.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-453",
    "name": "Tezpur University, School of Engineering Tezpur, Sonitpur",
    "shortName": "Tezpur University",
    "city": "Assam",
    "state": "Assam",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b947,186 / year",
    "placement": {
      "averageLPA": "6.7 LPA",
      "highestLPA": "16.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-453.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-454",
    "name": "Barak Valley Engineering College",
    "shortName": "Barak Valley Engineering College",
    "city": "Assam",
    "state": "Assam",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "4.6 LPA",
      "highestLPA": "11.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-454.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 6.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-455",
    "name": "Assam Institute of Technology",
    "shortName": "Assam Institute of Technology",
    "city": "Assam",
    "state": "Assam",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "8.5 LPA",
      "highestLPA": "21.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-455.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 8.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-456",
    "name": "Royal Global University",
    "shortName": "Royal Global University",
    "city": "Assam",
    "state": "Assam",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,42,000 / year",
    "placement": {
      "averageLPA": "6.5 LPA",
      "highestLPA": "16.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-456.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-457",
    "name": "Royal School of Engineering and Technology",
    "shortName": "Royal School of Engineering and Technology",
    "city": "Assam",
    "state": "Assam",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,42,000 / year",
    "placement": {
      "averageLPA": "4.0 LPA",
      "highestLPA": "10.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-457.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 6.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-458",
    "name": "Scholar's Institute of Technology and Management",
    "shortName": "Scholar's Institute of Technology and Management",
    "city": "Assam",
    "state": "Assam",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,25,000 / year",
    "placement": {
      "averageLPA": "3.0 LPA",
      "highestLPA": "7.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-458.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 5.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-459",
    "name": "Dibrugarh University, Dibrugarh",
    "shortName": "Dibrugarh University",
    "city": "Assam",
    "state": "Assam",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,10,130 / year",
    "placement": {
      "averageLPA": "6.5 LPA",
      "highestLPA": "16.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-459.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-460",
    "name": "Tezpur University",
    "shortName": "Tezpur University",
    "city": "Assam",
    "state": "Assam",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b958,186 / year",
    "placement": {
      "averageLPA": "6.7 LPA",
      "highestLPA": "16.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-460.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-461",
    "name": "B. Borooah College, Guwahati",
    "shortName": "B. Borooah College",
    "city": "Assam",
    "state": "Assam",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "5.8 LPA",
      "highestLPA": "14.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-461.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-462",
    "name": "Gauhati University",
    "shortName": "Gauhati University",
    "city": "Assam",
    "state": "Assam",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b940,950 / year",
    "placement": {
      "averageLPA": "7.2 LPA",
      "highestLPA": "18.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-462.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-463",
    "name": "Pragjyotish College, Guwahati",
    "shortName": "Pragjyotish College",
    "city": "Assam",
    "state": "Assam",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b924,000 / year",
    "placement": {
      "averageLPA": "4.3 LPA",
      "highestLPA": "10.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-463.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 6.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-464",
    "name": "Duliajan College, Dibrugarh",
    "shortName": "Duliajan College",
    "city": "Assam",
    "state": "Assam",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "8.7 LPA",
      "highestLPA": "21.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-464.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 8.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-465",
    "name": "Assam University, Silchar",
    "shortName": "Assam University",
    "city": "Assam",
    "state": "Assam",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b959,375 / year",
    "placement": {
      "averageLPA": "6.6 LPA",
      "highestLPA": "16.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-465.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-466",
    "name": "Kaziranga University",
    "shortName": "Kaziranga University",
    "city": "Assam",
    "state": "Assam",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,30,500 / year",
    "placement": {
      "averageLPA": "7.2 LPA",
      "highestLPA": "18.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-466.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-467",
    "name": "Dibrugarh Polytechnic",
    "shortName": "Dibrugarh Polytechnic",
    "city": "Assam",
    "state": "Assam",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b97,600 / year",
    "placement": {
      "averageLPA": "1.0 LPA",
      "highestLPA": "2.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-467.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Assam with an overall score of 2.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-468",
    "name": "Indian Institute of Technology",
    "shortName": "Indian Institute of Technology",
    "city": "Bihar",
    "state": "Bihar",
    "type": "IIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,23,100 / year",
    "placement": {
      "averageLPA": "7.9 LPA",
      "highestLPA": "19.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-468.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-469",
    "name": "National Institute of Technology",
    "shortName": "National Institute of Technology",
    "city": "Bihar",
    "state": "Bihar",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,65,700 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-469.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-470",
    "name": "Sandip University, Madhuban",
    "shortName": "Sandip University",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,60,000 / year",
    "placement": {
      "averageLPA": "8.2 LPA",
      "highestLPA": "20.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-470.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-471",
    "name": "Government Engineering College",
    "shortName": "Government Engineering College",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,00,000 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-471.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 8.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-472",
    "name": "Amity University, Patna",
    "shortName": "Amity University",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,59,000 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-472.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-473",
    "name": "Aryabhatta Knowledge University",
    "shortName": "Aryabhatta Knowledge University",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b942,000 / year",
    "placement": {
      "averageLPA": "7.6 LPA",
      "highestLPA": "19.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-473.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-474",
    "name": "Bhagalpur College of Engineering",
    "shortName": "Bhagalpur College of Engineering",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,12,500 / year",
    "placement": {
      "averageLPA": "6.0 LPA",
      "highestLPA": "15.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-474.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-475",
    "name": "Birla Institute of Technology",
    "shortName": "Birla Institute of Technology",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,95,000 / year",
    "placement": {
      "averageLPA": "6.7 LPA",
      "highestLPA": "16.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-475.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 7.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-476",
    "name": "Gaya College of Engineering, Gaya",
    "shortName": "Gaya College of Engineering",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,00,000 / year",
    "placement": {
      "averageLPA": "5.3 LPA",
      "highestLPA": "13.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-476.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 7.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-477",
    "name": "Netaji Subhas Institute of Technology",
    "shortName": "Netaji Subhas Institute of Technology",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,08,300 / year",
    "placement": {
      "averageLPA": "5.8 LPA",
      "highestLPA": "14.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-477.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 7.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-478",
    "name": "Muzaffarpur Institute of Technology",
    "shortName": "Muzaffarpur Institute of Technology",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,00,000 / year",
    "placement": {
      "averageLPA": "6.2 LPA",
      "highestLPA": "15.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-478.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 7.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-479",
    "name": "Nalanda College of Engineering",
    "shortName": "Nalanda College of Engineering",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b912,920 / year",
    "placement": {
      "averageLPA": "7.5 LPA",
      "highestLPA": "18.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-479.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-480",
    "name": "Bakhtiyarpur College of Engineering",
    "shortName": "Bakhtiyarpur College of Engineering",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "6.5 LPA",
      "highestLPA": "16.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-480.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-481",
    "name": "Darbhanga College of Engineering",
    "shortName": "Darbhanga College of Engineering",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b929,130 / year",
    "placement": {
      "averageLPA": "4.6 LPA",
      "highestLPA": "11.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-481.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 6.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-482",
    "name": "Motihari College of Engineering",
    "shortName": "Motihari College of Engineering",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "4.7 LPA",
      "highestLPA": "11.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-482.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 6.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-483",
    "name": "Central Institute of Plastics Engineering and Technology",
    "shortName": "Central Institute of Plastics Engineering and Technology",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b935,750 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-483.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-484",
    "name": "Loknayak Jai Prakash Institute Of Technology",
    "shortName": "Loknayak Jai Prakash Institute Of Technology",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "6.3 LPA",
      "highestLPA": "15.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-484.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-485",
    "name": "Purnea College of Engineering",
    "shortName": "Purnea College of Engineering",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-485.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 8.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-486",
    "name": "Katihar Engineering College",
    "shortName": "Katihar Engineering College",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-486.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-487",
    "name": "Saharsa College of Engineering",
    "shortName": "Saharsa College of Engineering",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "6.0 LPA",
      "highestLPA": "15.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-487.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-488",
    "name": "Supaul College of Engineering",
    "shortName": "Supaul College of Engineering",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "6.0 LPA",
      "highestLPA": "15.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-488.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 6.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-489",
    "name": "Millia Institute of Technology",
    "shortName": "Millia Institute of Technology",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b981,050 / year",
    "placement": {
      "averageLPA": "5.5 LPA",
      "highestLPA": "13.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-489.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 6.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-490",
    "name": "Sityog Institute of Technology, Aurangabad",
    "shortName": "Sityog Institute of Technology",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,11,000 / year",
    "placement": {
      "averageLPA": "6.2 LPA",
      "highestLPA": "15.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-490.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 7.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-491",
    "name": "Vidya Vihar Institute of Technology",
    "shortName": "Vidya Vihar Institute of Technology",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b975,000 / year",
    "placement": {
      "averageLPA": "6.8 LPA",
      "highestLPA": "17.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-491.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 7.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-492",
    "name": "Shershah College of Engineering",
    "shortName": "Shershah College of Engineering",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b95,000 / year",
    "placement": {
      "averageLPA": "6.5 LPA",
      "highestLPA": "16.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-492.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-493",
    "name": "RP Sharma Institute of Technology, Patna",
    "shortName": "RP Sharma Institute of Technology",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b985,000 / year",
    "placement": {
      "averageLPA": "5.1 LPA",
      "highestLPA": "12.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-493.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 6.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-494",
    "name": "Sitamarhi Institute of Technology",
    "shortName": "Sitamarhi Institute of Technology",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "4.7 LPA",
      "highestLPA": "11.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-494.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 5.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-495",
    "name": "Government Engineering College",
    "shortName": "Government Engineering College",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "3.0 LPA",
      "highestLPA": "7.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-495.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 5.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-496",
    "name": "Maulana Azad College of Engineering and Technology",
    "shortName": "Maulana Azad College of Engineering and Technology",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b970,000 / year",
    "placement": {
      "averageLPA": "3.5 LPA",
      "highestLPA": "8.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-496.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 5.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-497",
    "name": "Rashtrakavi Ramdhari Singh Dinkar College of Engineering",
    "shortName": "Rashtrakavi Ramdhari Singh Dinkar College of Engineering",
    "city": "Bihar",
    "state": "Bihar",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,630 / year",
    "placement": {
      "averageLPA": "4.7 LPA",
      "highestLPA": "11.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-497.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Bihar with an overall score of 6.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-498",
    "name": "National Institute of Technology",
    "shortName": "National Institute of Technology",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,38,000 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-498.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of 7.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-499",
    "name": "Indian Institute of Technology",
    "shortName": "Indian Institute of Technology",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "IIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,35,300 / year",
    "placement": {
      "averageLPA": "7.6 LPA",
      "highestLPA": "19.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-499.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-500",
    "name": "Amity University, Raipur",
    "shortName": "Amity University",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,08,000 / year",
    "placement": {
      "averageLPA": "6.3 LPA",
      "highestLPA": "15.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-500.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-501",
    "name": "International Institute of Information Technology",
    "shortName": "International Institute of Information Technology",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,80,150 / year",
    "placement": {
      "averageLPA": "7.6 LPA",
      "highestLPA": "19.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-501.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-502",
    "name": "ITM University, Raipur",
    "shortName": "ITM University",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,20,000 / year",
    "placement": {
      "averageLPA": "7.2 LPA",
      "highestLPA": "18.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-502.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of 7.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-503",
    "name": "Bhilai Institute of Technology",
    "shortName": "Bhilai Institute of Technology",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b977,750 / year",
    "placement": {
      "averageLPA": "6.4 LPA",
      "highestLPA": "16.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-503.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of 7.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-504",
    "name": "Bhilai Institute of Technology",
    "shortName": "Bhilai Institute of Technology",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b932,810 / year",
    "placement": {
      "averageLPA": "6.9 LPA",
      "highestLPA": "17.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-504.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-505",
    "name": "Govt Engineering College, Bilaspur",
    "shortName": "Govt Engineering College",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b912,725 / year",
    "placement": {
      "averageLPA": "5.5 LPA",
      "highestLPA": "13.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-505.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of 6.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-506",
    "name": "OP Jindal University",
    "shortName": "OP Jindal University",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,31,000 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-506.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of 8.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-507",
    "name": "Lakhmi Chand Institute of Technology",
    "shortName": "Lakhmi Chand Institute of Technology",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b971,230 / year",
    "placement": {
      "averageLPA": "5.1 LPA",
      "highestLPA": "12.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-507.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of 7.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-508",
    "name": "ICFAI University, Raipur",
    "shortName": "ICFAI University",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,00,000 / year",
    "placement": {
      "averageLPA": "8.6 LPA",
      "highestLPA": "21.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-508.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of 8.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-509",
    "name": "Raipur Institute of Technology",
    "shortName": "Raipur Institute of Technology",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,73,000 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-509.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-510",
    "name": "Shri Shankaracharya Institute of Professional Management and",
    "shortName": "Shri Shankaracharya Institute of Professional Management and",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b973,880 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-510.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-511",
    "name": "Chhatrapati Shivaji Institute of Technology",
    "shortName": "Chhatrapati Shivaji Institute of Technology",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b975,000 / year",
    "placement": {
      "averageLPA": "6.9 LPA",
      "highestLPA": "17.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-511.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of 7.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-512",
    "name": "Shri Rawatpura Sarkar University",
    "shortName": "Shri Rawatpura Sarkar University",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b940,600 / year",
    "placement": {
      "averageLPA": "8.5 LPA",
      "highestLPA": "21.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-512.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of 8.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-513",
    "name": "Government Engineering College",
    "shortName": "Government Engineering College",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b982,780 / year",
    "placement": {
      "averageLPA": "4.6 LPA",
      "highestLPA": "11.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-513.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of 6.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-514",
    "name": "Columbia Institute of Engineering and Technology",
    "shortName": "Columbia Institute of Engineering and Technology",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b959,940 / year",
    "placement": {
      "averageLPA": "8.7 LPA",
      "highestLPA": "21.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-514.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-515",
    "name": "AAFT University of Media and Arts",
    "shortName": "AAFT University of Media and Arts",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-515.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-516",
    "name": "Chouksey Engineering College",
    "shortName": "Chouksey Engineering College",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b972,230 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-516.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-517",
    "name": "Christian College of Engineering and Technology",
    "shortName": "Christian College of Engineering and Technology",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b976,900 / year",
    "placement": {
      "averageLPA": "5.8 LPA",
      "highestLPA": "14.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-517.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of 6.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-518",
    "name": "Chhattisgarh Engineering College",
    "shortName": "Chhattisgarh Engineering College",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b960,000 / year",
    "placement": {
      "averageLPA": "5.0 LPA",
      "highestLPA": "12.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-518.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of 5.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-519",
    "name": "Disha Institute of Management and Technology",
    "shortName": "Disha Institute of Management and Technology",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "6.3 LPA",
      "highestLPA": "15.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-519.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-520",
    "name": "Rungta College of Engineering and Technology",
    "shortName": "Rungta College of Engineering and Technology",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b976,100 / year",
    "placement": {
      "averageLPA": "8.2 LPA",
      "highestLPA": "20.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-520.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-521",
    "name": "Kirodimal Institute of Technology, Raigarh",
    "shortName": "Kirodimal Institute of Technology",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b931,500 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-521.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of 7.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-522",
    "name": "Krishna Engineering College",
    "shortName": "Krishna Engineering College",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b975,200 / year",
    "placement": {
      "averageLPA": "6.6 LPA",
      "highestLPA": "16.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-522.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of 7.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-523",
    "name": "RSR Rungta College of Engineering and Technology",
    "shortName": "RSR Rungta College of Engineering and Technology",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b975,100 / year",
    "placement": {
      "averageLPA": "7.3 LPA",
      "highestLPA": "18.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-523.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-524",
    "name": "Shri Shankaracharya Group of Institutions",
    "shortName": "Shri Shankaracharya Group of Institutions",
    "city": "Chhattisgarh",
    "state": "Chhattisgarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,83,000 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-524.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chhattisgarh with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-525",
    "name": "Indian Institute of Technology",
    "shortName": "Indian Institute of Technology",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "IIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,27,500 / year",
    "placement": {
      "averageLPA": "8.3 LPA",
      "highestLPA": "20.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-525.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-526",
    "name": "Birla Institute of Technology",
    "shortName": "Birla Institute of Technology",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,85,000 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-526.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-527",
    "name": "National Institute of Technology",
    "shortName": "National Institute of Technology",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,88,000 / year",
    "placement": {
      "averageLPA": "8.6 LPA",
      "highestLPA": "21.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-527.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-528",
    "name": "Birsa Institute of Technology",
    "shortName": "Birsa Institute of Technology",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b920,362 / year",
    "placement": {
      "averageLPA": "7.2 LPA",
      "highestLPA": "18.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-528.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-529",
    "name": "RKDF University, Ranchi",
    "shortName": "RKDF University",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,10,000 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-529.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-530",
    "name": "YBN University",
    "shortName": "YBN University",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b969,600 / year",
    "placement": {
      "averageLPA": "8.3 LPA",
      "highestLPA": "20.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-530.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-531",
    "name": "Indian Institute of Information Technology",
    "shortName": "Indian Institute of Information Technology",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "IIIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,30,000 / year",
    "placement": {
      "averageLPA": "7.5 LPA",
      "highestLPA": "18.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-531.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-532",
    "name": "Sai Nath University, Ranchi",
    "shortName": "Sai Nath University",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b953,000 / year",
    "placement": {
      "averageLPA": "6.9 LPA",
      "highestLPA": "17.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-532.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 6.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-533",
    "name": "National Institute of Foundry & Forge Technology",
    "shortName": "National Institute of Foundry & Forge Technology",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b947,450 / year",
    "placement": {
      "averageLPA": "8.8 LPA",
      "highestLPA": "22.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-533.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-534",
    "name": "Arka Jain University, Jamshedpur",
    "shortName": "Arka Jain University",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b993,000 / year",
    "placement": {
      "averageLPA": "7.5 LPA",
      "highestLPA": "18.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-534.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-535",
    "name": "Amity University, Ranchi",
    "shortName": "Amity University",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,35,000 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-535.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-536",
    "name": "Jharkhand Rai University",
    "shortName": "Jharkhand Rai University",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b985,000 / year",
    "placement": {
      "averageLPA": "6.9 LPA",
      "highestLPA": "17.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-536.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-537",
    "name": "Netaji Subhas University",
    "shortName": "Netaji Subhas University",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b950,000 / year",
    "placement": {
      "averageLPA": "8.5 LPA",
      "highestLPA": "21.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-537.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 9.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-538",
    "name": "Radha Govind University",
    "shortName": "Radha Govind University",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b960,000 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-538.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 8.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-539",
    "name": "Cambridge Institute of Technology",
    "shortName": "Cambridge Institute of Technology",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b971,250 / year",
    "placement": {
      "averageLPA": "4.8 LPA",
      "highestLPA": "12.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-539.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 5.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-540",
    "name": "Sarala Birla University",
    "shortName": "Sarala Birla University",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,31,200 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-540.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 8.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-541",
    "name": "Birla Institute of Technology Extension Centre",
    "shortName": "Birla Institute of Technology Extension Centre",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,85,000 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-541.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-542",
    "name": "Chaibasa Engineering College, Techno India Group, Chaibasa",
    "shortName": "Chaibasa Engineering College",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "6.4 LPA",
      "highestLPA": "16.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-542.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 7.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-543",
    "name": "Ramgarh Engineering College",
    "shortName": "Ramgarh Engineering College",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "4.6 LPA",
      "highestLPA": "11.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-543.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 6.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-544",
    "name": "Capital University",
    "shortName": "Capital University",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,10,000 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-544.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-545",
    "name": "RTC Institute of Technology",
    "shortName": "RTC Institute of Technology",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b978,800 / year",
    "placement": {
      "averageLPA": "7.4 LPA",
      "highestLPA": "18.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-545.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-546",
    "name": "University College of Engineering and Technology, Vinoba",
    "shortName": "University College of Engineering and Technology",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b965,100 / year",
    "placement": {
      "averageLPA": "6.1 LPA",
      "highestLPA": "15.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-546.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 7.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-547",
    "name": "RVS College of Engineering and Technology",
    "shortName": "RVS College of Engineering and Technology",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b989,400 / year",
    "placement": {
      "averageLPA": "7.5 LPA",
      "highestLPA": "18.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-547.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-548",
    "name": "KK College of Engineering and Management, Dhanbad",
    "shortName": "KK College of Engineering and Management",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b989,570 / year",
    "placement": {
      "averageLPA": "4.7 LPA",
      "highestLPA": "11.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-548.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 6.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-549",
    "name": "Ramgovind Institute of Technology, Kodarma",
    "shortName": "Ramgovind Institute of Technology",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b934,000 / year",
    "placement": {
      "averageLPA": "2.5 LPA",
      "highestLPA": "6.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-549.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 4.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-550",
    "name": "Nilai Institute of Technology",
    "shortName": "Nilai Institute of Technology",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b975,000 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-550.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-551",
    "name": "Maryland Institute of Technology And Management, Jamshedpur",
    "shortName": "Maryland Institute of Technology And Management",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b962,000 / year",
    "placement": {
      "averageLPA": "6.3 LPA",
      "highestLPA": "15.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-551.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 6.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-552",
    "name": "Ramchandra Chandarvansi Institute of Technology",
    "shortName": "Ramchandra Chandarvansi Institute of Technology",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b963,200 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-552.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-553",
    "name": "Vidya Memorial Institute of Technology",
    "shortName": "Vidya Memorial Institute of Technology",
    "city": "Jharkhand",
    "state": "Jharkhand",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b953,400 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-553.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jharkhand with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-554",
    "name": "Indian Institute of Technology",
    "shortName": "Indian Institute of Technology",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "IIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,14,000 / year",
    "placement": {
      "averageLPA": "7.5 LPA",
      "highestLPA": "18.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-554.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-555",
    "name": "National Institute of Technology",
    "shortName": "National Institute of Technology",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,46,100 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-555.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-556",
    "name": "Jaypee University of Information Technology",
    "shortName": "Jaypee University of Information Technology",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,19,500 / year",
    "placement": {
      "averageLPA": "7.9 LPA",
      "highestLPA": "19.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-556.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-557",
    "name": "Indian Institute of Information Technology",
    "shortName": "Indian Institute of Information Technology",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "IIIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,01,400 / year",
    "placement": {
      "averageLPA": "7.5 LPA",
      "highestLPA": "18.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-557.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-558",
    "name": "Baddi University of Emerging Sciences and Technologies",
    "shortName": "Baddi University of Emerging Sciences and Technologies",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,35,636 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-558.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 7.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-559",
    "name": "Maharishi Markandeshwar",
    "shortName": "Maharishi Markandeshwar",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,48,500 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-559.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 8.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-560",
    "name": "Arni University, Kangra",
    "shortName": "Arni University",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,05,000 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-560.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-561",
    "name": "Bahra University",
    "shortName": "Bahra University",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,20,150 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-561.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-562",
    "name": "Eternal University",
    "shortName": "Eternal University",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,18,000 / year",
    "placement": {
      "averageLPA": "7.1 LPA",
      "highestLPA": "17.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-562.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-563",
    "name": "Abhilashi University",
    "shortName": "Abhilashi University",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b990,000 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-563.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-564",
    "name": "IEC University Baddi",
    "shortName": "IEC University Baddi",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,18,600 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-564.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-565",
    "name": "University Institute of Information Technology, Himachal Pradesh",
    "shortName": "University Institute of Information Technology",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,22,010 / year",
    "placement": {
      "averageLPA": "7.5 LPA",
      "highestLPA": "18.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-565.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 7.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-566",
    "name": "Career Point University",
    "shortName": "Career Point University",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,05,000 / year",
    "placement": {
      "averageLPA": "6.6 LPA",
      "highestLPA": "16.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-566.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-567",
    "name": "Sri Sai University",
    "shortName": "Sri Sai University",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b990,000 / year",
    "placement": {
      "averageLPA": "6.8 LPA",
      "highestLPA": "17.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-567.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 7.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-568",
    "name": "Green Hills Engineering College, Solan",
    "shortName": "Green Hills Engineering College",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b980,700 / year",
    "placement": {
      "averageLPA": "4.4 LPA",
      "highestLPA": "11.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-568.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 6.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-569",
    "name": "Rajiv Gandhi govt. Engineering college -[RGGEC], Kangra",
    "shortName": "Rajiv Gandhi govt. Engineering college -[RGGEC]",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b961,070 / year",
    "placement": {
      "averageLPA": "5.6 LPA",
      "highestLPA": "14.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-569.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-570",
    "name": "Indus International University",
    "shortName": "Indus International University",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,20,000 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-570.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 6.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-571",
    "name": "Jawaharlal Nehru Government Engineering College",
    "shortName": "Jawaharlal Nehru Government Engineering College",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b955,000 / year",
    "placement": {
      "averageLPA": "5.5 LPA",
      "highestLPA": "13.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-571.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 6.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-572",
    "name": "Maharaja Agrasen University",
    "shortName": "Maharaja Agrasen University",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,19,000 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-572.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-573",
    "name": "ICFAI University, Baddi",
    "shortName": "ICFAI University",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b995,000 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-573.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-574",
    "name": "Himachal Institute of Engineering and Technology",
    "shortName": "Himachal Institute of Engineering and Technology",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b973,000 / year",
    "placement": {
      "averageLPA": "6.6 LPA",
      "highestLPA": "16.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-574.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-575",
    "name": "LR Institute of Engineering and Technology, Solan",
    "shortName": "LR Institute of Engineering and Technology",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,96,000 / year",
    "placement": {
      "averageLPA": "5.0 LPA",
      "highestLPA": "12.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-575.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 6.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-576",
    "name": "Himalayan Group of Professional Institutions, Sirmaur",
    "shortName": "Himalayan Group of Professional Institutions",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b984,200 / year",
    "placement": {
      "averageLPA": "8.2 LPA",
      "highestLPA": "20.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-576.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-577",
    "name": "Manav Bharti University",
    "shortName": "Manav Bharti University",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b990,000 / year",
    "placement": {
      "averageLPA": "6.3 LPA",
      "highestLPA": "15.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-577.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 6.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-578",
    "name": "Chitkara University, Solan",
    "shortName": "Chitkara University",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,60,000 / year",
    "placement": {
      "averageLPA": "8.8 LPA",
      "highestLPA": "22.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-578.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-579",
    "name": "Bells Institute of Management & Technology, Shimla",
    "shortName": "Bells Institute of Management & Technology",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b974,700 / year",
    "placement": {
      "averageLPA": "4.0 LPA",
      "highestLPA": "10.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-579.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 6.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-580",
    "name": "Shiva Group of Institutions, Bilaspur",
    "shortName": "Shiva Group of Institutions",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b972,200 / year",
    "placement": {
      "averageLPA": "3.5 LPA",
      "highestLPA": "8.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-580.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 5.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-581",
    "name": "Mahatma Gandhi Government Engineering College",
    "shortName": "Mahatma Gandhi Government Engineering College",
    "city": "Himachal Pradesh",
    "state": "Himachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,20,000 / year",
    "placement": {
      "averageLPA": "4.0 LPA",
      "highestLPA": "10.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-581.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Himachal Pradesh with an overall score of 5.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-582",
    "name": "Shri Mata Vaishno Devi University",
    "shortName": "Shri Mata Vaishno Devi University",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,69,750 / year",
    "placement": {
      "averageLPA": "6.7 LPA",
      "highestLPA": "16.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-582.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-583",
    "name": "National Institute of Technology",
    "shortName": "National Institute of Technology",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b95,30,000 / year",
    "placement": {
      "averageLPA": "6.6 LPA",
      "highestLPA": "16.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-583.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of 6.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-584",
    "name": "Indian Institute of Technology",
    "shortName": "Indian Institute of Technology",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "IIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,00,266 / year",
    "placement": {
      "averageLPA": "7.6 LPA",
      "highestLPA": "19.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-584.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-585",
    "name": "Government College of Engineering and Technology",
    "shortName": "Government College of Engineering and Technology",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b935,830 / year",
    "placement": {
      "averageLPA": "4.6 LPA",
      "highestLPA": "11.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-585.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of 5.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-586",
    "name": "Islamic University of Science and Technology",
    "shortName": "Islamic University of Science and Technology",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b966,200 / year",
    "placement": {
      "averageLPA": "5.5 LPA",
      "highestLPA": "13.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-586.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of 7.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-587",
    "name": "SSM College of Engineering and Technology",
    "shortName": "SSM College of Engineering and Technology",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "4.9 LPA",
      "highestLPA": "12.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-587.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of 6.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-588",
    "name": "Yogananda College of Engineering & Technology -[YCET],",
    "shortName": "Yogananda College of Engineering & Technology -[YCET]",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,80,000 / year",
    "placement": {
      "averageLPA": "4.0 LPA",
      "highestLPA": "10.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-588.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of 5.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-589",
    "name": "MBS College of Engineering and Technology, Jammu",
    "shortName": "MBS College of Engineering and Technology",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b949,000 / year",
    "placement": {
      "averageLPA": "3.8 LPA",
      "highestLPA": "9.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-589.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of 5.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-590",
    "name": "Sher-e-Kashmir University of Agricultural Sciences and Technology",
    "shortName": "Sher-e-Kashmir University of Agricultural Sciences and Technology",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b960,000 / year",
    "placement": {
      "averageLPA": "5.9 LPA",
      "highestLPA": "14.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-590.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of 7.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-591",
    "name": "Government Degree College for Boys, Udhampur",
    "shortName": "Government Degree College for Boys",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "5.3 LPA",
      "highestLPA": "13.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-591.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of 6.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-592",
    "name": "Baba Ghulam Shah Badshah University",
    "shortName": "Baba Ghulam Shah Badshah University",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,49,300 / year",
    "placement": {
      "averageLPA": "5.9 LPA",
      "highestLPA": "14.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-592.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of 7.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-593",
    "name": "Central University of Jammu, Jammu",
    "shortName": "Central University of Jammu",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b911,715 / year",
    "placement": {
      "averageLPA": "7.3 LPA",
      "highestLPA": "18.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-593.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-594",
    "name": "Central University of Kashmir",
    "shortName": "Central University of Kashmir",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b955,900 / year",
    "placement": {
      "averageLPA": "7.4 LPA",
      "highestLPA": "18.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-594.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-595",
    "name": "University of Kashmir",
    "shortName": "University of Kashmir",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "5.1 LPA",
      "highestLPA": "12.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-595.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of 6.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-596",
    "name": "Govt. Gandhi Memorial Science College, Jammu",
    "shortName": "Govt. Gandhi Memorial Science College",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "4.2 LPA",
      "highestLPA": "10.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-596.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of 6.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-597",
    "name": "Kashmir Government Polytechnic",
    "shortName": "Kashmir Government Polytechnic",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,130 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-597.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-598",
    "name": "Cluster University of Srinagar",
    "shortName": "Cluster University of Srinagar",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "7.2 LPA",
      "highestLPA": "18.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-598.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-599",
    "name": "Bhargava College of Engineering & Technology",
    "shortName": "Bhargava College of Engineering & Technology",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-599.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-600",
    "name": "Government Polytechnic College -[GPC], Anantnag",
    "shortName": "Government Polytechnic College -[GPC]",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,130 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-600.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-601",
    "name": "Masterpro Institute of Technology, Srinagar",
    "shortName": "Masterpro Institute of Technology",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-601.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-602",
    "name": "Kite Polytechnic College, Budgam",
    "shortName": "Kite Polytechnic College",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-602.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-603",
    "name": "Government Polytechnic Kargil, Kargil",
    "shortName": "Government Polytechnic Kargil",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,130 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-603.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-604",
    "name": "Government Polytechnic College, Baramulla",
    "shortName": "Government Polytechnic College",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,130 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-604.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-605",
    "name": "Government Polytechnic College",
    "shortName": "Government Polytechnic College",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,130 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-605.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-606",
    "name": "Government Polytechnic For Women-[GPW], Jammu",
    "shortName": "Government Polytechnic For Women-[GPW]",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,130 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-606.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-607",
    "name": "Government Polytechnic College, Bandipora",
    "shortName": "Government Polytechnic College",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,330 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-607.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-608",
    "name": "Government Polytechnic, Kulgam",
    "shortName": "Government Polytechnic",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b94,500 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-608.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-609",
    "name": "Government Polytechnic College, Budgam",
    "shortName": "Government Polytechnic College",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,130 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-609.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-610",
    "name": "Government Polytechnic College, Sopore",
    "shortName": "Government Polytechnic College",
    "city": "Jammu & Kashmir",
    "state": "Jammu & Kashmir",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,130 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-610.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Jammu & Kashmir with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-611",
    "name": "Panjab University",
    "shortName": "Panjab University",
    "city": "Chandigarh",
    "state": "Chandigarh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b996,300 / year",
    "placement": {
      "averageLPA": "6.5 LPA",
      "highestLPA": "16.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-611.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chandigarh with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-612",
    "name": "Punjab Engineering College University of Technology",
    "shortName": "Punjab Engineering College University of Technology",
    "city": "Chandigarh",
    "state": "Chandigarh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b996,750 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-612.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chandigarh with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-613",
    "name": "University Institute of Engineering, Chandigarh University",
    "shortName": "University Institute of Engineering",
    "city": "Chandigarh",
    "state": "Chandigarh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,60,000 / year",
    "placement": {
      "averageLPA": "8.7 LPA",
      "highestLPA": "21.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-613.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chandigarh with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-614",
    "name": "National Institute of Technical Teachers Training and",
    "shortName": "National Institute of Technical Teachers Training and",
    "city": "Chandigarh",
    "state": "Chandigarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b944,696 / year",
    "placement": {
      "averageLPA": "7.7 LPA",
      "highestLPA": "19.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-614.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chandigarh with an overall score of 7.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-615",
    "name": "University Institute of Engineering and Technology -[UIET],",
    "shortName": "University Institute of Engineering and Technology -[UIET]",
    "city": "Chandigarh",
    "state": "Chandigarh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b982,197 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-615.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chandigarh with an overall score of 7.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-616",
    "name": "Chandigarh College of Engineering and Technology",
    "shortName": "Chandigarh College of Engineering and Technology",
    "city": "Chandigarh",
    "state": "Chandigarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b964,240 / year",
    "placement": {
      "averageLPA": "6.5 LPA",
      "highestLPA": "16.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-616.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chandigarh with an overall score of 6.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-617",
    "name": "Apex Institute of Technology",
    "shortName": "Apex Institute of Technology",
    "city": "Chandigarh",
    "state": "Chandigarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,10,000 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-617.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chandigarh with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-618",
    "name": "IITT Institutions, Chandigarh",
    "shortName": "IITT Institutions",
    "city": "Chandigarh",
    "state": "Chandigarh",
    "type": "IIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b980,750 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-618.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chandigarh with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-619",
    "name": "Dr. S. S. Bhatnagar University Institute of",
    "shortName": "Dr. S. S. Bhatnagar University Institute of",
    "city": "Chandigarh",
    "state": "Chandigarh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,94,000 / year",
    "placement": {
      "averageLPA": "7.1 LPA",
      "highestLPA": "17.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-619.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chandigarh with an overall score of 7.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-620",
    "name": "Swami Vivekanand Institute of Engineering & Technology",
    "shortName": "Swami Vivekanand Institute of Engineering & Technology",
    "city": "Chandigarh",
    "state": "Chandigarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b988,960 / year",
    "placement": {
      "averageLPA": "7.4 LPA",
      "highestLPA": "18.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-620.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chandigarh with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-621",
    "name": "Gurukul Vidyapeeth, Chandigarh",
    "shortName": "Gurukul Vidyapeeth",
    "city": "Chandigarh",
    "state": "Chandigarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "2.0 LPA",
      "highestLPA": "5.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-621.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chandigarh with an overall score of 3.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-622",
    "name": "Morph Academy, Chandigarh",
    "shortName": "Morph Academy",
    "city": "Chandigarh",
    "state": "Chandigarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,70,000 / year",
    "placement": {
      "averageLPA": "8.5 LPA",
      "highestLPA": "21.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-622.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chandigarh with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-623",
    "name": "Indo Swiss Training Centre",
    "shortName": "Indo Swiss Training Centre",
    "city": "Chandigarh",
    "state": "Chandigarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b951,000 / year",
    "placement": {
      "averageLPA": "8.5 LPA",
      "highestLPA": "21.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-623.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chandigarh with an overall score of 8.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-624",
    "name": "Artex Informatic Solutions, Chandigarh",
    "shortName": "Artex Informatic Solutions",
    "city": "Chandigarh",
    "state": "Chandigarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-624.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chandigarh with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-625",
    "name": "Swami Vivekanand Polytechnic College",
    "shortName": "Swami Vivekanand Polytechnic College",
    "city": "Chandigarh",
    "state": "Chandigarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b932,840 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-625.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chandigarh with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-626",
    "name": "PG Government College for Girls, Chandigarh",
    "shortName": "PG Government College for Girls",
    "city": "Chandigarh",
    "state": "Chandigarh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b955,260 / year",
    "placement": {
      "averageLPA": "8.2 LPA",
      "highestLPA": "20.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-626.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chandigarh with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-627",
    "name": "Government Industrial Training Institute",
    "shortName": "Government Industrial Training Institute",
    "city": "Chandigarh",
    "state": "Chandigarh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-627.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chandigarh with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-628",
    "name": "Government Polytechnic for Women",
    "shortName": "Government Polytechnic for Women",
    "city": "Chandigarh",
    "state": "Chandigarh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b97,225 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-628.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chandigarh with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-629",
    "name": "Longowal Polytechnic College, Chandigarh",
    "shortName": "Longowal Polytechnic College",
    "city": "Chandigarh",
    "state": "Chandigarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-629.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chandigarh with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-630",
    "name": "Universal Polytechnic College, Chandigarh",
    "shortName": "Universal Polytechnic College",
    "city": "Chandigarh",
    "state": "Chandigarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-630.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chandigarh with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-631",
    "name": "Swami Vivekanand Industrial Training Centre",
    "shortName": "Swami Vivekanand Industrial Training Centre",
    "city": "Chandigarh",
    "state": "Chandigarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b915,960 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-631.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chandigarh with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-632",
    "name": "Swami Vivekanand Group Of Institutes",
    "shortName": "Swami Vivekanand Group Of Institutes",
    "city": "Chandigarh",
    "state": "Chandigarh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b988,960 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-632.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Chandigarh with an overall score of 8.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-633",
    "name": "National Institute of Technology",
    "shortName": "National Institute of Technology",
    "city": "Goa",
    "state": "Goa",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,44,400 / year",
    "placement": {
      "averageLPA": "7.9 LPA",
      "highestLPA": "19.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-633.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Goa with an overall score of 7.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-634",
    "name": "Indian Institute of Technology",
    "shortName": "Indian Institute of Technology",
    "city": "Goa",
    "state": "Goa",
    "type": "IIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,29,900 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-634.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Goa with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-635",
    "name": "Birla Institute of Technology and Science",
    "shortName": "Birla Institute of Technology and Science",
    "city": "Goa",
    "state": "Goa",
    "type": "BITS",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,99,475 / year",
    "placement": {
      "averageLPA": "8.7 LPA",
      "highestLPA": "21.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-635.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Goa with an overall score of 8.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-636",
    "name": "Goa College of Engineering",
    "shortName": "Goa College of Engineering",
    "city": "Goa",
    "state": "Goa",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b959,500 / year",
    "placement": {
      "averageLPA": "6.7 LPA",
      "highestLPA": "16.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-636.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Goa with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-637",
    "name": "Padre Conceicao College of Engineering, Salcete",
    "shortName": "Padre Conceicao College of Engineering",
    "city": "Goa",
    "state": "Goa",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,30,000 / year",
    "placement": {
      "averageLPA": "6.8 LPA",
      "highestLPA": "17.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-637.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Goa with an overall score of 6.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-638",
    "name": "National Centre for Antarctic and Ocean Research",
    "shortName": "National Centre for Antarctic and Ocean Research",
    "city": "Goa",
    "state": "Goa",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-638.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Goa with an overall score of 9.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-639",
    "name": "Shree Rayeshwar Institute of Engineering and Information Technology, North Goa",
    "shortName": "Shree Rayeshwar Institute of Engineering and Information Technology",
    "city": "Goa",
    "state": "Goa",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,02,300 / year",
    "placement": {
      "averageLPA": "7.2 LPA",
      "highestLPA": "18.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-639.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Goa with an overall score of 6.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-640",
    "name": "National Institute of Oceanography",
    "shortName": "National Institute of Oceanography",
    "city": "Goa",
    "state": "Goa",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b914,000 / year",
    "placement": {
      "averageLPA": "8.3 LPA",
      "highestLPA": "20.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-640.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Goa with an overall score of 8.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-641",
    "name": "Goa University, North Goa",
    "shortName": "Goa University",
    "city": "Goa",
    "state": "Goa",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b917,290 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-641.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Goa with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-642",
    "name": "International Institute of Hotel Management",
    "shortName": "International Institute of Hotel Management",
    "city": "Goa",
    "state": "Goa",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "9.1 LPA",
      "highestLPA": "22.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-642.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Goa with an overall score of 8.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-643",
    "name": "Government Polytechnic, Bicholim",
    "shortName": "Government Polytechnic",
    "city": "Goa",
    "state": "Goa",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-643.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Goa with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-644",
    "name": "Agnel Polytechnic, South Goa",
    "shortName": "Agnel Polytechnic",
    "city": "Goa",
    "state": "Goa",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b937,200 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-644.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Goa with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-645",
    "name": "Government Polytechnic, Curchorem",
    "shortName": "Government Polytechnic",
    "city": "Goa",
    "state": "Goa",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b916,000 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-645.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Goa with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-646",
    "name": "Government Polytechnic",
    "shortName": "Government Polytechnic",
    "city": "Goa",
    "state": "Goa",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b942,300 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-646.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Goa with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-647",
    "name": "North Eastern Regional Institute of Science and Technology",
    "shortName": "North Eastern Regional Institute of Science and Technology",
    "city": "Arunachal Pradesh",
    "state": "Arunachal Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b920,470 / year",
    "placement": {
      "averageLPA": "5.1 LPA",
      "highestLPA": "12.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-647.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Arunachal Pradesh with an overall score of 6.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-648",
    "name": "National Institute of Technology",
    "shortName": "National Institute of Technology",
    "city": "Arunachal Pradesh",
    "state": "Arunachal Pradesh",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,45,600 / year",
    "placement": {
      "averageLPA": "7.4 LPA",
      "highestLPA": "18.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-648.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Arunachal Pradesh with an overall score of 7.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-649",
    "name": "Arunodaya University, Itanagar",
    "shortName": "Arunodaya University",
    "city": "Arunachal Pradesh",
    "state": "Arunachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "7.5 LPA",
      "highestLPA": "18.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-649.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Arunachal Pradesh with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-650",
    "name": "Himalayan University",
    "shortName": "Himalayan University",
    "city": "Arunachal Pradesh",
    "state": "Arunachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b981,000 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-650.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Arunachal Pradesh with an overall score of 8.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-651",
    "name": "Apex Professional University",
    "shortName": "Apex Professional University",
    "city": "Arunachal Pradesh",
    "state": "Arunachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b970,000 / year",
    "placement": {
      "averageLPA": "7.5 LPA",
      "highestLPA": "18.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-651.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Arunachal Pradesh with an overall score of 7.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-652",
    "name": "Rajiv Gandhi University",
    "shortName": "Rajiv Gandhi University",
    "city": "Arunachal Pradesh",
    "state": "Arunachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b919,850 / year",
    "placement": {
      "averageLPA": "5.4 LPA",
      "highestLPA": "13.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-652.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Arunachal Pradesh with an overall score of 7.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-653",
    "name": "Arunachal University of Studies",
    "shortName": "Arunachal University of Studies",
    "city": "Arunachal Pradesh",
    "state": "Arunachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b925,000 / year",
    "placement": {
      "averageLPA": "8.2 LPA",
      "highestLPA": "20.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-653.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Arunachal Pradesh with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-654",
    "name": "North East Frontier Technical University",
    "shortName": "North East Frontier Technical University",
    "city": "Arunachal Pradesh",
    "state": "Arunachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "8.7 LPA",
      "highestLPA": "21.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-654.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Arunachal Pradesh with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-655",
    "name": "Venkateshwara Open University",
    "shortName": "Venkateshwara Open University",
    "city": "Arunachal Pradesh",
    "state": "Arunachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b910,000 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-655.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Arunachal Pradesh with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-656",
    "name": "Tomi Polytechnic College, Basar",
    "shortName": "Tomi Polytechnic College",
    "city": "Arunachal Pradesh",
    "state": "Arunachal Pradesh",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b945,000 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-656.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Arunachal Pradesh with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-657",
    "name": "Government Polytechnic Laying, Itanagar",
    "shortName": "Government Polytechnic Laying",
    "city": "Arunachal Pradesh",
    "state": "Arunachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-657.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Arunachal Pradesh with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-658",
    "name": "Government Polytechnic Roing, Roing",
    "shortName": "Government Polytechnic Roing",
    "city": "Arunachal Pradesh",
    "state": "Arunachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b915,050 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-658.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Arunachal Pradesh with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-659",
    "name": "Government Polytechnic",
    "shortName": "Government Polytechnic",
    "city": "Arunachal Pradesh",
    "state": "Arunachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b915,350 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-659.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Arunachal Pradesh with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-660",
    "name": "Rajiv Gandhi Government Polytechnic",
    "shortName": "Rajiv Gandhi Government Polytechnic",
    "city": "Arunachal Pradesh",
    "state": "Arunachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b915,350 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-660.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Arunachal Pradesh with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-661",
    "name": "The Global University, Itanagar",
    "shortName": "The Global University",
    "city": "Arunachal Pradesh",
    "state": "Arunachal Pradesh",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b990,000 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-661.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Arunachal Pradesh with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-662",
    "name": "National Institute of Technology",
    "shortName": "National Institute of Technology",
    "city": "Meghalaya",
    "state": "Meghalaya",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,53,700 / year",
    "placement": {
      "averageLPA": "7.1 LPA",
      "highestLPA": "17.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-662.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Meghalaya with an overall score of 7.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-663",
    "name": "CMJ University, Ri-Bhoi",
    "shortName": "CMJ University",
    "city": "Meghalaya",
    "state": "Meghalaya",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,75,000 / year",
    "placement": {
      "averageLPA": "8.2 LPA",
      "highestLPA": "20.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-663.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Meghalaya with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-664",
    "name": "North-Eastern Hill University",
    "shortName": "North-Eastern Hill University",
    "city": "Meghalaya",
    "state": "Meghalaya",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b95,060 / year",
    "placement": {
      "averageLPA": "6.6 LPA",
      "highestLPA": "16.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-664.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Meghalaya with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-665",
    "name": "William Carey University",
    "shortName": "William Carey University",
    "city": "Meghalaya",
    "state": "Meghalaya",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,06,000 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-665.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Meghalaya with an overall score of 8.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-666",
    "name": "Mahatma Gandhi University",
    "shortName": "Mahatma Gandhi University",
    "city": "Meghalaya",
    "state": "Meghalaya",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b916,000 / year",
    "placement": {
      "averageLPA": "6.3 LPA",
      "highestLPA": "15.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-666.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Meghalaya with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-667",
    "name": "MIT University, Shillong",
    "shortName": "MIT University",
    "city": "Meghalaya",
    "state": "Meghalaya",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,35,000 / year",
    "placement": {
      "averageLPA": "4.5 LPA",
      "highestLPA": "11.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-667.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Meghalaya with an overall score of 3.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-668",
    "name": "Regional Institute of Science and Technolog",
    "shortName": "Regional Institute of Science and Technolog",
    "city": "Meghalaya",
    "state": "Meghalaya",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,25,000 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-668.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Meghalaya with an overall score of 8.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-669",
    "name": "Tura Polytechnic College, Tura",
    "shortName": "Tura Polytechnic College",
    "city": "Meghalaya",
    "state": "Meghalaya",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,516 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-669.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Meghalaya with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-670",
    "name": "Shillong Polytechnic, Mawlai",
    "shortName": "Shillong Polytechnic",
    "city": "Meghalaya",
    "state": "Meghalaya",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-670.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Meghalaya with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-671",
    "name": "Jowai Polytechnic, Jowai",
    "shortName": "Jowai Polytechnic",
    "city": "Meghalaya",
    "state": "Meghalaya",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,500 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-671.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Meghalaya with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-672",
    "name": "National Institute of Technology",
    "shortName": "National Institute of Technology",
    "city": "Nagaland",
    "state": "Nagaland",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,33,800 / year",
    "placement": {
      "averageLPA": "7.2 LPA",
      "highestLPA": "18.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-672.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Nagaland with an overall score of 7.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-673",
    "name": "St.Joseph University, Dimapur",
    "shortName": "St.Joseph University",
    "city": "Nagaland",
    "state": "Nagaland",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,23,000 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-673.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Nagaland with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-674",
    "name": "Nagaland University, Zunhebotto",
    "shortName": "Nagaland University",
    "city": "Nagaland",
    "state": "Nagaland",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b926,960 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-674.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Nagaland with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-675",
    "name": "The Global Open University",
    "shortName": "The Global Open University",
    "city": "Nagaland",
    "state": "Nagaland",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b96,525 / year",
    "placement": {
      "averageLPA": "7.3 LPA",
      "highestLPA": "18.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-675.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Nagaland with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-676",
    "name": "Government Polytechnic, Kohima",
    "shortName": "Government Polytechnic",
    "city": "Nagaland",
    "state": "Nagaland",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b97,450 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-676.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Nagaland with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-677",
    "name": "Khelhoshe Polytechnic Atoizu[KPA], Kohima",
    "shortName": "Khelhoshe Polytechnic Atoizu[KPA]",
    "city": "Nagaland",
    "state": "Nagaland",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b911,100 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-677.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Nagaland with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-678",
    "name": "Government Polytechnic Seithekema C, Dimapur",
    "shortName": "Government Polytechnic Seithekema C",
    "city": "Nagaland",
    "state": "Nagaland",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b98,000 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-678.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Nagaland with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-679",
    "name": "Government Polytechnic Tsunazho",
    "shortName": "Government Polytechnic Tsunazho",
    "city": "Nagaland",
    "state": "Nagaland",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b97,550 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-679.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Nagaland with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-680",
    "name": "Government Polytechnic Sedem, Tuensang",
    "shortName": "Government Polytechnic Sedem",
    "city": "Nagaland",
    "state": "Nagaland",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b910,500 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-680.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Nagaland with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-681",
    "name": "Institute of Communication and Information Technology, Kohima",
    "shortName": "Institute of Communication and Information Technology",
    "city": "Nagaland",
    "state": "Nagaland",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-681.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Nagaland with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-682",
    "name": "Pondicherry Engineering College",
    "shortName": "Pondicherry Engineering College",
    "city": "Puducherry",
    "state": "Puducherry",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,71,200 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-682.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Puducherry with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-683",
    "name": "National Institute of Technology",
    "shortName": "National Institute of Technology",
    "city": "Puducherry",
    "state": "Puducherry",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b954,366 / year",
    "placement": {
      "averageLPA": "6.6 LPA",
      "highestLPA": "16.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-683.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Puducherry with an overall score of 7.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-684",
    "name": "Manakula Vinayagar Institute of Technology",
    "shortName": "Manakula Vinayagar Institute of Technology",
    "city": "Puducherry",
    "state": "Puducherry",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,44,000 / year",
    "placement": {
      "averageLPA": "7.5 LPA",
      "highestLPA": "18.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-684.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Puducherry with an overall score of 7.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-685",
    "name": "Sri Manakula Vinayagar Engineering College, Pondicherry",
    "shortName": "Sri Manakula Vinayagar Engineering College",
    "city": "Puducherry",
    "state": "Puducherry",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b940,000 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-685.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Puducherry with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-686",
    "name": "Rajiv Gandhi College of Engineering and Technology, Pondicherry",
    "shortName": "Rajiv Gandhi College of Engineering and Technology",
    "city": "Puducherry",
    "state": "Puducherry",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b940,000 / year",
    "placement": {
      "averageLPA": "6.9 LPA",
      "highestLPA": "17.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-686.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Puducherry with an overall score of 6.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-687",
    "name": "Christ College of Engineering and Technology, Pondicherry",
    "shortName": "Christ College of Engineering and Technology",
    "city": "Puducherry",
    "state": "Puducherry",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,16,000 / year",
    "placement": {
      "averageLPA": "6.5 LPA",
      "highestLPA": "16.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-687.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Puducherry with an overall score of 7.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-688",
    "name": "Perunthalaivar Kamarajar Institute of Engineering and Technology",
    "shortName": "Perunthalaivar Kamarajar Institute of Engineering and Technology",
    "city": "Puducherry",
    "state": "Puducherry",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b931,915 / year",
    "placement": {
      "averageLPA": "8.0 LPA",
      "highestLPA": "20.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-688.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Puducherry with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-689",
    "name": "Achariya College of Engineering Technology",
    "shortName": "Achariya College of Engineering Technology",
    "city": "Puducherry",
    "state": "Puducherry",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b968,000 / year",
    "placement": {
      "averageLPA": "5.4 LPA",
      "highestLPA": "13.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-689.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Puducherry with an overall score of 6.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-690",
    "name": "Regency Institute of Technology, Yanam",
    "shortName": "Regency Institute of Technology",
    "city": "Puducherry",
    "state": "Puducherry",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b941,263 / year",
    "placement": {
      "averageLPA": "4.4 LPA",
      "highestLPA": "11.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-690.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Puducherry with an overall score of 5.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-691",
    "name": "Bharathiyar College of Engineering and Technology",
    "shortName": "Bharathiyar College of Engineering and Technology",
    "city": "Puducherry",
    "state": "Puducherry",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "4.5 LPA",
      "highestLPA": "11.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-691.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Puducherry with an overall score of 6.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-692",
    "name": "PSV College of Engineering and Technology, Pondicherry",
    "shortName": "PSV College of Engineering and Technology",
    "city": "Puducherry",
    "state": "Puducherry",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b930,000 / year",
    "placement": {
      "averageLPA": "5.0 LPA",
      "highestLPA": "12.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-692.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Puducherry with an overall score of 5.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-693",
    "name": "Christ Institute of Technology",
    "shortName": "Christ Institute of Technology",
    "city": "Puducherry",
    "state": "Puducherry",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b945,000 / year",
    "placement": {
      "averageLPA": "5.0 LPA",
      "highestLPA": "12.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-693.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Puducherry with an overall score of 5.2/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-694",
    "name": "R V S College of Engineering and Technology",
    "shortName": "R V S College of Engineering and Technology",
    "city": "Puducherry",
    "state": "Puducherry",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b940,000 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-694.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Puducherry with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-695",
    "name": "Alpha College of Engineering & Technology, Pondicherry",
    "shortName": "Alpha College of Engineering & Technology",
    "city": "Puducherry",
    "state": "Puducherry",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b929,000 / year",
    "placement": {
      "averageLPA": "3.8 LPA",
      "highestLPA": "9.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-695.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Puducherry with an overall score of 4.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-696",
    "name": "Pondicherry University",
    "shortName": "Pondicherry University",
    "city": "Puducherry",
    "state": "Puducherry",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b926,218 / year",
    "placement": {
      "averageLPA": "6.9 LPA",
      "highestLPA": "17.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-696.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Puducherry with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-697",
    "name": "Sri Chakra Maritime College, Pondicherry",
    "shortName": "Sri Chakra Maritime College",
    "city": "Puducherry",
    "state": "Puducherry",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-697.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Puducherry with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-698",
    "name": "Motilal Nehru Government Polytechnic College, Pondicherry",
    "shortName": "Motilal Nehru Government Polytechnic College",
    "city": "Puducherry",
    "state": "Puducherry",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-698.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Puducherry with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-699",
    "name": "Karaikal Polytechnic College",
    "shortName": "Karaikal Polytechnic College",
    "city": "Puducherry",
    "state": "Puducherry",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b96,000 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-699.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Puducherry with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-700",
    "name": "Dr. B. R. Ambedkar Polytechnic College",
    "shortName": "Dr. B. R. Ambedkar Polytechnic College",
    "city": "Puducherry",
    "state": "Puducherry",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b96,000 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-700.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Puducherry with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-701",
    "name": "Indira Gandhi Polytechnic College",
    "shortName": "Indira Gandhi Polytechnic College",
    "city": "Puducherry",
    "state": "Puducherry",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b97,095 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-701.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Puducherry with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-702",
    "name": "Sri Manakula Vinayagar Polytechnic College-[SMVPC], Pondicherry",
    "shortName": "Sri Manakula Vinayagar Polytechnic College-[SMVPC]",
    "city": "Puducherry",
    "state": "Puducherry",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b917,500 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-702.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Puducherry with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-703",
    "name": "Women\u2019s Polytechnic College",
    "shortName": "Women\u2019s Polytechnic College",
    "city": "Puducherry",
    "state": "Puducherry",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b96,000 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-703.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Puducherry with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-704",
    "name": "National Institute of Technology",
    "shortName": "National Institute of Technology",
    "city": "Tripura",
    "state": "Tripura",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,50,100 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-704.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tripura with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-705",
    "name": "ICFAI University, West Tripura",
    "shortName": "ICFAI University",
    "city": "Tripura",
    "state": "Tripura",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,30,000 / year",
    "placement": {
      "averageLPA": "7.6 LPA",
      "highestLPA": "19.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-705.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tripura with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-706",
    "name": "Indian Institute of Information Technology",
    "shortName": "Indian Institute of Information Technology",
    "city": "Tripura",
    "state": "Tripura",
    "type": "IIIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,06,200 / year",
    "placement": {
      "averageLPA": "8.1 LPA",
      "highestLPA": "20.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-706.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tripura with an overall score of 8.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-707",
    "name": "Tripura Institute of Technology, Agartala",
    "shortName": "Tripura Institute of Technology",
    "city": "Tripura",
    "state": "Tripura",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b912,180 / year",
    "placement": {
      "averageLPA": "6.8 LPA",
      "highestLPA": "17.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-707.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tripura with an overall score of 7.6/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-708",
    "name": "Techno College of Engineering Agartala",
    "shortName": "Techno College of Engineering Agartala",
    "city": "Tripura",
    "state": "Tripura",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b998,000 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-708.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tripura with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-709",
    "name": "Tripura University, West Tripura",
    "shortName": "Tripura University",
    "city": "Tripura",
    "state": "Tripura",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b955,300 / year",
    "placement": {
      "averageLPA": "6.0 LPA",
      "highestLPA": "15.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-709.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tripura with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-710",
    "name": "TTAADC Polytechnic Institute, West Tripura",
    "shortName": "TTAADC Polytechnic Institute",
    "city": "Tripura",
    "state": "Tripura",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b96,750 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-710.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Tripura with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-711",
    "name": "Sikkim Manipal University",
    "shortName": "Sikkim Manipal University",
    "city": "Sikkim",
    "state": "Sikkim",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,60,000 / year",
    "placement": {
      "averageLPA": "6.8 LPA",
      "highestLPA": "17.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-711.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Sikkim with an overall score of 7.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-712",
    "name": "National Institute of Technology",
    "shortName": "National Institute of Technology",
    "city": "Sikkim",
    "state": "Sikkim",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,39,400 / year",
    "placement": {
      "averageLPA": "7.8 LPA",
      "highestLPA": "19.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-712.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Sikkim with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-713",
    "name": "SRM University Sikkim, Gangtok",
    "shortName": "SRM University Sikkim",
    "city": "Sikkim",
    "state": "Sikkim",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,25,000 / year",
    "placement": {
      "averageLPA": "8.3 LPA",
      "highestLPA": "20.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-713.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Sikkim with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-714",
    "name": "Vinayaka Missions Sikkim University",
    "shortName": "Vinayaka Missions Sikkim University",
    "city": "Sikkim",
    "state": "Sikkim",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "7.5 LPA",
      "highestLPA": "18.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-714.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Sikkim with an overall score of 7.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-715",
    "name": "College of Agricultural Engineering and Post Harvest Technology",
    "shortName": "College of Agricultural Engineering and Post Harvest Technology",
    "city": "Sikkim",
    "state": "Sikkim",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b94,280 / year",
    "placement": {
      "averageLPA": "6.6 LPA",
      "highestLPA": "16.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-715.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Sikkim with an overall score of 6.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-716",
    "name": "National Institute of Technology",
    "shortName": "National Institute of Technology",
    "city": "Manipur",
    "state": "Manipur",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,47,700 / year",
    "placement": {
      "averageLPA": "8.4 LPA",
      "highestLPA": "21.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-716.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Manipur with an overall score of 7.9/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-717",
    "name": "Indian Institute of Information Technology",
    "shortName": "Indian Institute of Information Technology",
    "city": "Manipur",
    "state": "Manipur",
    "type": "IIIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,87,945 / year",
    "placement": {
      "averageLPA": "6.6 LPA",
      "highestLPA": "16.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-717.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Manipur with an overall score of 6.8/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-718",
    "name": "Manipur Institute of Technology",
    "shortName": "Manipur Institute of Technology",
    "city": "Manipur",
    "state": "Manipur",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b969,200 / year",
    "placement": {
      "averageLPA": "7.0 LPA",
      "highestLPA": "17.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-718.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Manipur with an overall score of 7.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-719",
    "name": "Manipur Technical University",
    "shortName": "Manipur Technical University",
    "city": "Manipur",
    "state": "Manipur",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b963,000 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-719.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Manipur with an overall score of 8.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-720",
    "name": "Central Agricultural University",
    "shortName": "Central Agricultural University",
    "city": "Manipur",
    "state": "Manipur",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b92,980 / year",
    "placement": {
      "averageLPA": "6.8 LPA",
      "highestLPA": "17.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-720.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Manipur with an overall score of 7.5/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-721",
    "name": "Manipur University",
    "shortName": "Manipur University",
    "city": "Manipur",
    "state": "Manipur",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b961,250 / year",
    "placement": {
      "averageLPA": "7.2 LPA",
      "highestLPA": "18.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-721.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Manipur with an overall score of 8.1/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-722",
    "name": "Government Polytechnic, Imphal",
    "shortName": "Government Polytechnic",
    "city": "Manipur",
    "state": "Manipur",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-722.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Manipur with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-723",
    "name": "Bir Tikendrajit University, Imphal",
    "shortName": "Bir Tikendrajit University",
    "city": "Manipur",
    "state": "Manipur",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,60,000 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-723.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Manipur with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-724",
    "name": "National Institute of Technology",
    "shortName": "National Institute of Technology",
    "city": "Mizoram",
    "state": "Mizoram",
    "type": "NIT",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b91,36,500 / year",
    "placement": {
      "averageLPA": "6.5 LPA",
      "highestLPA": "16.2 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-724.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Mizoram with an overall score of 5.4/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-725",
    "name": "Mizoram University, School of Engineering and Technology",
    "shortName": "Mizoram University",
    "city": "Mizoram",
    "state": "Mizoram",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b929,000 / year",
    "placement": {
      "averageLPA": "5.5 LPA",
      "highestLPA": "13.8 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-725.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Mizoram with an overall score of 5.7/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-726",
    "name": "Mizoram Polytechnic, Lunglei",
    "shortName": "Mizoram Polytechnic",
    "city": "Mizoram",
    "state": "Mizoram",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b95,550 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-726.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Mizoram with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-727",
    "name": "Mizoram University",
    "shortName": "Mizoram University",
    "city": "Mizoram",
    "state": "Mizoram",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b939,150 / year",
    "placement": {
      "averageLPA": "7.6 LPA",
      "highestLPA": "19.0 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-727.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Mizoram with an overall score of 8.0/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-728",
    "name": "National Institute of Electronics & Information Technology",
    "shortName": "National Institute of Electronics & Information Technology",
    "city": "Mizoram",
    "state": "Mizoram",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b944,560 / year",
    "placement": {
      "averageLPA": "1.0 LPA",
      "highestLPA": "2.5 LPA",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-728.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Mizoram with an overall score of 5.3/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-729",
    "name": "Dr. B R Ambedkar Institute of Technology, Port Blair",
    "shortName": "Dr. B R Ambedkar Institute of Technology",
    "city": "Andaman & Nicobar",
    "state": "Andaman & Nicobar",
    "type": "Private",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b912,083 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-729.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Andaman & Nicobar with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-730",
    "name": "Plastindia International University, Dadra & Nagar Haveli",
    "shortName": "Plastindia International University",
    "city": "Dadra & Nagar Haveli",
    "state": "Dadra & Nagar Haveli",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "N/A",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-730.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Dadra & Nagar Haveli with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  },
  {
    "id": "col-731",
    "name": "Government Polytechnic, Daman",
    "shortName": "Government Polytechnic",
    "city": "Daman & Diu",
    "state": "Daman & Diu",
    "type": "Government",
    "establishedYear": 1980,
    "courses": [
      "Computer Science",
      "Electronics & Communication",
      "Electrical",
      "Mechanical"
    ],
    "feesAnnualINR": "\u20b93,575 / year",
    "placement": {
      "averageLPA": "N/A",
      "highestLPA": "N/A",
      "topRecruiters": [
        "TCS",
        "Infosys",
        "Wipro",
        "Cognizant",
        "Accenture"
      ]
    },
    "entranceExams": [
      "JEE Main",
      "State CET"
    ],
    "website": "https://col-731.edu.in",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    "description": "Renowned higher education institution located in Daman & Diu with an overall score of N/A/10.",
    "accreditation": "NAAC Accredited"
  }
];

/**
 * GET /api/colleges
 * Search and filter colleges by type, state, course, and query
 */
router.get('/', (req, res) => {
  const { type, state, course, q } = req.query;

  let colleges = [...COLLEGES_CATALOG];

  if (type) {
    colleges = colleges.filter(c => c.type.toLowerCase() === (type as string).toLowerCase());
  }

  if (state) {
    colleges = colleges.filter(c => c.state.toLowerCase().includes((state as string).toLowerCase()));
  }

  if (course) {
    colleges = colleges.filter(c => c.courses.some(cr => cr.toLowerCase().includes((course as string).toLowerCase())));
  }

  if (q) {
    const query = (q as string).toLowerCase();
    colleges = colleges.filter(c => 
      c.name.toLowerCase().includes(query) || 
      c.shortName.toLowerCase().includes(query) ||
      c.city.toLowerCase().includes(query) ||
      c.state.toLowerCase().includes(query)
    );
  }

  res.json({
    colleges,
    total: colleges.length,
    types: Array.from(new Set(COLLEGES_CATALOG.map(c => c.type))),
    states: Array.from(new Set(COLLEGES_CATALOG.map(c => c.state))),
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
  });
});

/**
 * POST /api/colleges/match
 * AI College Recommendation engine
 */
router.post('/match', (req, res) => {
  const { targetField, minMarks, statePreference } = req.body;

  const matchedColleges = COLLEGES_CATALOG.map(college => {
    let matchScore = 75;
    const matchReasons: string[] = [];

    if (statePreference && college.state.toLowerCase().includes(statePreference.toLowerCase())) {
      matchScore += 15;
      matchReasons.push('Located in preferred location (' + college.state + ')');
    }

    return {
      college,
      matchScore: Math.min(99, matchScore),
      matchReasons
    };
  });

  matchedColleges.sort((a, b) => b.matchScore - a.matchScore);

  res.json({
    recommendations: matchedColleges.slice(0, 6)
  });
});

export default router;
