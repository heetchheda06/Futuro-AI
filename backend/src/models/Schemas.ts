import mongoose, { Schema, Document } from 'mongoose';

// --- USER SCHEMA ---
export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  googleId?: string;
  role: 'student' | 'professional' | 'admin';
  profileImage?: string;
  targetCareer?: string;
  currentSkills: string[];
  experienceLevel?: string;
  education?: {
    degree?: string;
    field?: string;
    school?: string;
    gradYear?: number;
  };
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String },
  googleId: { type: String },
  role: { type: String, enum: ['student', 'professional', 'admin'], default: 'student' },
  profileImage: { type: String },
  targetCareer: { type: String },
  currentSkills: { type: [String], default: [] },
  experienceLevel: { type: String, default: 'Entry Level' },
  education: {
    degree: String,
    field: String,
    school: String,
    gradYear: Number,
  },
  createdAt: { type: Date, default: Date.now },
});

// --- CAREER SCHEMA ---
export interface ICareer extends Document {
  title: string;
  description: string;
  salaryRange: {
    min: number;
    max: number;
    currency: string;
    avg: number;
  };
  growthPotential: string; // e.g. "High", "Medium", "Exponential"
  growthRate: number; // percentage
  demandLevel: 'High' | 'Medium' | 'Low';
  requiredSkills: string[];
  recommendedPath: string[]; // step-by-step
  workLifeBalance: number; // 1-10
  difficultyLevel: number; // 1-10
  category: string;
}

const CareerSchema = new Schema<ICareer>({
  title: { type: String, required: true, unique: true, index: true },
  description: { type: String, required: true },
  salaryRange: {
    min: { type: Number, required: true },
    max: { type: Number, required: true },
    currency: { type: String, default: 'INR' },
    avg: { type: Number, required: true },
  },
  growthPotential: { type: String, required: true },
  growthRate: { type: Number, required: true },
  demandLevel: { type: String, enum: ['High', 'Medium', 'Low'], required: true },
  requiredSkills: { type: [String], default: [] },
  recommendedPath: { type: [String], default: [] },
  workLifeBalance: { type: Number, required: true },
  difficultyLevel: { type: Number, required: true },
  category: { type: String, required: true },
});

// --- ASSESSMENT SCHEMA ---
export interface IAssessment extends Document {
  userId: mongoose.Types.ObjectId;
  answers: {
    interests: string[];
    personality: string;
    hobbies: string[];
    strengths: string[];
    weaknesses: string[];
    academicBackground: string;
    preferredWorkStyle: string;
  };
  compatibilityScores: {
    careerTitle: string;
    score: number; // 0-100
  }[];
  personalityInsights: string;
  strengthAnalysis: string[];
  createdAt: Date;
}

const AssessmentSchema = new Schema<IAssessment>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  answers: {
    interests: [String],
    personality: String,
    hobbies: [String],
    strengths: [String],
    weaknesses: [String],
    academicBackground: String,
    preferredWorkStyle: String,
  },
  compatibilityScores: [{
    careerTitle: { type: String, required: true },
    score: { type: Number, required: true },
  }],
  personalityInsights: { type: String, required: true },
  strengthAnalysis: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now },
});

// --- GOAL SCHEMA ---
export interface IGoal extends Document {
  userId: mongoose.Types.ObjectId;
  title: string;
  targetDate: Date;
  progress: number; // 0-100
  completed: boolean;
  milestones: {
    title: string;
    completed: boolean;
  }[];
  streak: number;
  createdAt: Date;
}

const GoalSchema = new Schema<IGoal>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  title: { type: String, required: true },
  targetDate: { type: Date, required: true },
  progress: { type: Number, default: 0 },
  completed: { type: Boolean, default: false },
  milestones: [{
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
  }],
  streak: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

// --- RESUME SCHEMA ---
export interface IResume extends Document {
  userId: mongoose.Types.ObjectId;
  fileName: string;
  atsScore: number;
  feedback: {
    atsRating: string;
    keywordsFound: string[];
    keywordsMissing: string[];
    formattingIssues: string[];
    grammarIssues: string[];
    strengths: string[];
  };
  missingSkills: string[];
  improvements: string[];
  createdAt: Date;
}

const ResumeSchema = new Schema<IResume>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  fileName: { type: String, required: true },
  atsScore: { type: Number, required: true },
  feedback: {
    atsRating: String,
    keywordsFound: [String],
    keywordsMissing: [String],
    formattingIssues: [String],
    grammarIssues: [String],
    strengths: [String],
  },
  missingSkills: [String],
  improvements: [String],
  createdAt: { type: Date, default: Date.now },
});

// --- INTERVIEW SESSION SCHEMA ---
export interface IInterviewSession extends Document {
  userId: mongoose.Types.ObjectId;
  type: 'HR' | 'Technical' | 'Behavioral';
  careerTitle: string;
  questions: {
    question: string;
    answer?: string;
    feedback?: string;
    score?: number; // 0-10
  }[];
  confidenceScore: number; // 0-100
  communicationRating: string;
  overallScore: number; // 0-100
  completed: boolean;
  createdAt: Date;
}

const InterviewSessionSchema = new Schema<IInterviewSession>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  type: { type: String, enum: ['HR', 'Technical', 'Behavioral'], required: true },
  careerTitle: { type: String, required: true },
  questions: [{
    question: { type: String, required: true },
    answer: String,
    feedback: String,
    score: Number,
  }],
  confidenceScore: { type: Number, default: 0 },
  communicationRating: { type: String, default: 'Not evaluated' },
  overallScore: { type: Number, default: 0 },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

// --- CHAT MESSAGE SCHEMA ---
export interface IChatMessage extends Document {
  userId: mongoose.Types.ObjectId;
  role: 'user' | 'assistant';
  content: string;
  createdAt: Date;
}

const ChatMessageSchema = new Schema<IChatMessage>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  role: { type: String, enum: ['user', 'assistant'], required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// --- JOB RECOMMENDATION ---
export interface IJobRecommendation extends Document {
  title: string;
  company: string;
  location: string;
  type: 'Job' | 'Internship' | 'Course';
  link: string;
  requiredSkills: string[];
  salaryRange?: string;
}

const JobRecommendationSchema = new Schema<IJobRecommendation>({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, enum: ['Job', 'Internship', 'Course'], required: true },
  link: { type: String, required: true },
  requiredSkills: { type: [String], default: [] },
  salaryRange: String,
});

// --- MARKSHEET ANALYSIS ---
export interface IMarksheetAnalysis extends Document {
  userId: mongoose.Types.ObjectId;
  fileName: string;
  strongSubjects: {
    subject: string;
    grade: string;
    score: number;
    explanation: string;
  }[];
  weakSubjects: {
    subject: string;
    grade: string;
    score: number;
    explanation: string;
  }[];
  academicTrends: string[];
  suggestedCareers: {
    careerTitle: string;
    score: number;
    reason: string;
    matchingSkills: string[];
  }[];
  createdAt: Date;
}

const MarksheetAnalysisSchema = new Schema<IMarksheetAnalysis>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  fileName: { type: String, required: true },
  strongSubjects: [{
    subject: { type: String, required: true },
    grade: { type: String, required: true },
    score: { type: Number, required: true },
    explanation: { type: String, required: true }
  }],
  weakSubjects: [{
    subject: { type: String, required: true },
    grade: { type: String, required: true },
    score: { type: Number, required: true },
    explanation: { type: String, required: true }
  }],
  academicTrends: { type: [String], default: [] },
  suggestedCareers: [{
    careerTitle: { type: String, required: true },
    score: { type: Number, required: true },
    reason: { type: String, required: true },
    matchingSkills: { type: [String], default: [] }
  }],
  createdAt: { type: Date, default: Date.now }
});

// --- EBOOK BOOKMARK SCHEMA ---
export interface IEbookBookmark extends Document {
  userId: mongoose.Types.ObjectId;
  bookId: string;
  title: string;
  author?: string;
  cover?: string;
  sourceUrl: string;
  savedAt: Date;
  readingProgress?: number; // 0 - 100
  readingStatus?: 'want_to_read' | 'reading' | 'completed';
}

const EbookBookmarkSchema = new Schema<IEbookBookmark>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  bookId: { type: String, required: true },
  title: { type: String, required: true },
  author: String,
  cover: String,
  sourceUrl: { type: String, required: true },
  savedAt: { type: Date, default: Date.now },
  readingProgress: { type: Number, default: 0 },
  readingStatus: { type: String, enum: ['want_to_read', 'reading', 'completed'], default: 'want_to_read' }
});

// --- CALENDAR EVENT SCHEMA ---
export interface ICalendarEvent extends Document {
  userId: mongoose.Types.ObjectId;
  title: string;
  description?: string;
  category: 'Study' | 'Project' | 'Interview' | 'Milestone' | 'General';
  startDate: Date;
  endDate?: Date;
  isCompleted: boolean;
  googleEventId?: string;
  createdAt: Date;
}

const CalendarEventSchema = new Schema<ICalendarEvent>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  title: { type: String, required: true },
  description: String,
  category: { type: String, enum: ['Study', 'Project', 'Interview', 'Milestone', 'General'], default: 'Study' },
  startDate: { type: Date, required: true },
  endDate: Date,
  isCompleted: { type: Boolean, default: false },
  googleEventId: String,
  createdAt: { type: Date, default: Date.now }
});

// --- CERTIFICATION PROGRESS SCHEMA ---
export interface ICertificationProgress extends Document {
  userId: mongoose.Types.ObjectId;
  certId: string;
  name: string;
  provider: string;
  status: 'Not Started' | 'Planning' | 'Preparing' | 'Exam Scheduled' | 'Completed';
  progress: number; // 0-100
  targetDate?: Date;
  notes?: string;
  certificateId?: string;
  updatedAt: Date;
}

const CertificationProgressSchema = new Schema<ICertificationProgress>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  certId: { type: String, required: true },
  name: { type: String, required: true },
  provider: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['Not Started', 'Planning', 'Preparing', 'Exam Scheduled', 'Completed'], 
    default: 'Planning' 
  },
  progress: { type: Number, default: 0 },
  targetDate: Date,
  notes: String,
  certificateId: String,
  updatedAt: { type: Date, default: Date.now }
});

// --- PROJECT BLUEPRINT SCHEMA ---
export interface IProjectBlueprint extends Document {
  userId: mongoose.Types.ObjectId;
  title: string;
  problemStatement: string;
  whyThisProject: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  estimatedTime: string;
  recommendedStack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    ai?: string[];
    deployment?: string[];
  };
  skillsLearned: string[];
  architectureOverview: string;
  implementationSteps: {
    step: number;
    title: string;
    description: string;
    keyTasks: string[];
  }[];
  learningResources: {
    title: string;
    url: string;
    type: string;
  }[];
  futureEnhancements: string[];
  createdAt: Date;
}

const ProjectBlueprintSchema = new Schema<IProjectBlueprint>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  title: { type: String, required: true },
  problemStatement: { type: String, required: true },
  whyThisProject: { type: String, required: true },
  difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'], required: true },
  estimatedTime: { type: String, required: true },
  recommendedStack: {
    frontend: [String],
    backend: [String],
    database: [String],
    ai: [String],
    deployment: [String]
  },
  skillsLearned: [String],
  architectureOverview: { type: String, required: true },
  implementationSteps: [{
    step: Number,
    title: String,
    description: String,
    keyTasks: [String]
  }],
  learningResources: [{
    title: String,
    url: String,
    type: { type: String }
  }],
  futureEnhancements: [String],
  createdAt: { type: Date, default: Date.now }
});

// --- EXPORTS ---
export const User = mongoose.model<IUser>('User', UserSchema);
export const Career = mongoose.model<ICareer>('Career', CareerSchema);
export const Assessment = mongoose.model<IAssessment>('Assessment', AssessmentSchema);
export const Goal = mongoose.model<IGoal>('Goal', GoalSchema);
export const Resume = mongoose.model<IResume>('Resume', ResumeSchema);
export const InterviewSession = mongoose.model<IInterviewSession>('InterviewSession', InterviewSessionSchema);
export const ChatMessage = mongoose.model<IChatMessage>('ChatMessage', ChatMessageSchema);
export const JobRecommendation = mongoose.model<IJobRecommendation>('JobRecommendation', JobRecommendationSchema);
export const MarksheetAnalysis = mongoose.model<IMarksheetAnalysis>('MarksheetAnalysis', MarksheetAnalysisSchema);
export const EbookBookmark = mongoose.model<IEbookBookmark>('EbookBookmark', EbookBookmarkSchema);
export const CalendarEvent = mongoose.model<ICalendarEvent>('CalendarEvent', CalendarEventSchema);
export const CertificationProgress = mongoose.model<ICertificationProgress>('CertificationProgress', CertificationProgressSchema);
export const ProjectBlueprint = mongoose.model<IProjectBlueprint>('ProjectBlueprint', ProjectBlueprintSchema);


