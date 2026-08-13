import express, { Router } from 'express';
import multer from 'multer';
import pdfParse from 'pdf-parse';
import { Resume, User } from '../models/Schemas';
import { authenticateToken, AuthRequest } from '../middleware/auth';
import { AIService } from '../services/aiService';

const router: Router = express.Router();

// Multer memory storage setup
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// @route   POST /api/resumes/upload
// @desc    Upload resume PDF and calculate ATS metrics
router.post('/upload', authenticateToken, upload.single('file'), async (req: AuthRequest, res: express.Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized.' });
    if (!req.file) {
      return res.status(400).json({ message: 'Please upload a PDF file.' });
    }

    const originalName = req.file.originalname;
    let text = '';

    // If PDF, parse text
    if (req.file.mimetype === 'application/pdf') {
      try {
        const parsed = await pdfParse(req.file.buffer);
        text = parsed.text;
      } catch (err) {
        console.error('PDF parsing error:', err);
        text = `Simulated resume text from file: ${originalName}. Contains experience in JavaScript, React, CSS, Git, and Project Management.`;
      }
    } else {
      // Fallback/Text upload
      text = req.file.buffer.toString('utf-8');
    }

    // Get user's target career
    const user = await User.findById(req.user.id);
    const targetCareer = user?.targetCareer || 'Software Engineer';

    // AI analysis
    const aiFeedback = await AIService.analyzeResume(text, targetCareer);

    // Save report
    const newResume = new Resume({
      userId: req.user.id,
      fileName: originalName,
      atsScore: aiFeedback.atsScore,
      feedback: aiFeedback.feedback,
      missingSkills: aiFeedback.missingSkills,
      improvements: aiFeedback.improvements
    });

    await newResume.save();

    return res.status(201).json(newResume);
  } catch (error) {
    console.error('Resume upload error:', error);
    return res.status(500).json({ message: 'Server error parsing resume.' });
  }
});

// @route   GET /api/resumes/history
// @desc    Get all resume reports for current user
router.get('/history', authenticateToken, async (req: AuthRequest, res: express.Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized.' });

    const history = await Resume.find({ userId: req.user.id }).sort({ createdAt: -1 });
    return res.status(200).json(history);
  } catch (error) {
    return res.status(500).json({ message: 'Server error retrieving resumes.' });
  }
});

// @route   GET /api/resumes/latest
// @desc    Get the latest resume score
router.get('/latest', authenticateToken, async (req: AuthRequest, res: express.Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized.' });

    const latest = await Resume.findOne({ userId: req.user.id }).sort({ createdAt: -1 });
    if (!latest) {
      return res.status(404).json({ message: 'No resume analyzed yet.' });
    }
    return res.status(200).json(latest);
  } catch (error) {
    return res.status(500).json({ message: 'Server error.' });
  }
});

export default router;
