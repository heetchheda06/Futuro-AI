// Trigger restart
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import { connectDB } from './config/db';

// Route Imports
import authRouter from './routes/auth';
import careersRouter from './routes/careers';
import assessmentsRouter from './routes/assessments';
import resumesRouter from './routes/resumes';
import interviewsRouter from './routes/interviews';
import goalsRouter from './routes/goals';
import chatsRouter from './routes/chats';
import feedRouter from './routes/feed';
import marksheetsRouter from './routes/marksheets';
import simulatorRouter from './routes/simulator';
import ebooksRouter from './routes/ebooks';
import coursesRouter from './routes/courses';
import certificationsRouter from './routes/certifications';
import mentorsRouter from './routes/mentors';
import calendarRouter from './routes/calendar';
import projectsRouter from './routes/projects';
import collegesRouter from './routes/colleges';

// Load Env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middlewares
app.use(helmet());

// CORS config (allow frontend NextJS connection)
app.use(cors({
  origin: '*', // Allow all origins for dev/sandbox verification
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// API Rate Limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1050, // 15 minutes
  max: 300, // Limit each IP to 300 requests per window
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many requests. Please try again in 15 minutes.' }
});
app.use('/api', apiLimiter);

// Connect Database
connectDB();

// Root route
app.get('/', (req, res) => {
  res.json({ status: 'success', message: 'Futuro AI API Server is running.' });
});

// Mount Routes
app.use('/api/auth', authRouter);
app.use('/api/careers', careersRouter);
app.use('/api/assessments', assessmentsRouter);
app.use('/api/resumes', resumesRouter);
app.use('/api/interviews', interviewsRouter);
app.use('/api/goals', goalsRouter);
app.use('/api/chats', chatsRouter);
app.use('/api/feed', feedRouter);
app.use('/api/marksheets', marksheetsRouter);
app.use('/api/simulator', simulatorRouter);
app.use('/api/ebooks', ebooksRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/certifications', certificationsRouter);
app.use('/api/mentors', mentorsRouter);
app.use('/api/calendar', calendarRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/colleges', collegesRouter);

// Admin dashboard analytics helper
app.get('/api/admin/analytics', async (req, res) => {
  try {
    // Return dummy metrics for admin panel to keep it responsive and stunning
    res.json({
      totalUsers: 1420,
      assessmentsTaken: 954,
      resumesAnalyzed: 412,
      activeInterviews: 189,
      revenueMonthly: 4500,
      userRegistrationsOverTime: [
        { date: 'Jan', count: 210 },
        { date: 'Feb', count: 320 },
        { date: 'Mar', count: 480 },
        { date: 'Apr', count: 680 },
        { date: 'May', count: 950 },
        { date: 'Jun', count: 1420 }
      ],
      careerPopularity: [
        { name: 'Software Engineer', value: 450 },
        { name: 'AI Engineer', value: 320 },
        { name: 'Data Scientist', value: 280 },
        { name: 'UI/UX Designer', value: 190 },
        { name: 'Cyber Security', value: 120 },
        { name: 'Others', value: 60 }
      ]
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error retrieving analytics.' });
  }
});

// Admin dataset clear endpoint
app.post('/api/admin/clear-dataset', async (req, res) => {
  try {
    const { clearAllUserData } = await import('./scripts/clearDataset');
    const summary = await clearAllUserData();
    res.json({ status: 'success', message: 'Dataset cleared successfully.', summary });
  } catch (error: any) {
    res.status(500).json({ status: 'error', message: error.message || 'Failed to clear dataset.' });
  }
});

// Handle unknown API endpoints
app.use((req, res) => {
  res.status(404).json({ message: 'API Route not found.' });
});

// Start listening
app.listen(PORT, () => {
  console.log(`Futuro AI Server listening on port ${PORT}`);
});
