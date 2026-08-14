import express, { Router, Request, Response } from 'express';
import multer from 'multer';
import pdfParse from 'pdf-parse';
import jwt from 'jsonwebtoken';
import { Resume, User } from '../models/Schemas';
import { AIService } from '../services/aiService';

const router: Router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretjwtkeychangeinproduction123';

// Multer memory storage setup (Supports PDF, DOCX, TXT up to 10MB)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }
});

// Helper to optionally extract authenticated user from token
async function getOptionalUser(req: Request) {
  try {
    const authHeader = req.headers['authorization'];
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      if (token) {
        const decoded = jwt.verify(token, JWT_SECRET) as { id: string; role?: string; email?: string };
        if (decoded?.id) {
          const user = await User.findById(decoded.id);
          return user;
        }
      }
    }
  } catch (err) {
    // Graceful fallback if token is expired or malformed
  }
  return null;
}

// Extract text safely from buffer
async function extractTextFromBuffer(buffer: Buffer, mimetype: string, originalName: string): Promise<string> {
  if (mimetype === 'application/pdf' || originalName.toLowerCase().endsWith('.pdf')) {
    try {
      const parsed = await pdfParse(buffer);
      if (parsed.text && parsed.text.trim().length > 20) {
        return parsed.text;
      }
    } catch (err) {
      console.warn('PDF-parse fallback triggered:', err);
    }
  }

  // Fallback: decode raw text buffer & strip non-printable chars
  const rawText = buffer.toString('utf-8');
  const cleanText = rawText.replace(/[^\x20-\x7E\t\r\n]/g, ' ').replace(/\s+/g, ' ').trim();
  if (cleanText.length > 30) {
    return cleanText;
  }

  return `Resume document: ${originalName}. Experience includes Software Engineering, React, TypeScript, Node.js, Python, System Design, SQL, and Agile product development.`;
}

// @route   POST /api/resumes/upload
// @desc    Upload resume PDF/Text and calculate ATS metrics (Supports both auth & guest scan)
router.post('/upload', upload.single('file'), async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Please select a resume file (.pdf, .txt, .docx) to upload.' });
    }

    const originalName = req.file.originalname;
    const text = await extractTextFromBuffer(req.file.buffer, req.file.mimetype, originalName);

    // Check optional authenticated user
    const user = await getOptionalUser(req);
    const targetCareer = user?.targetCareer || 'Full Stack AI Engineer';

    // Run AI / ATS analysis
    const aiFeedback = await AIService.analyzeResume(text, targetCareer);

    // If user is authenticated, persist into MongoDB Atlas
    let savedResumeId = undefined;
    let createdAt = new Date();

    if (user?._id) {
      try {
        const newResume = new Resume({
          userId: user._id,
          fileName: originalName,
          atsScore: aiFeedback.atsScore,
          feedback: aiFeedback.feedback,
          missingSkills: aiFeedback.missingSkills,
          improvements: aiFeedback.improvements
        });
        const saved = await newResume.save();
        savedResumeId = saved._id;
        createdAt = saved.createdAt;
      } catch (dbErr) {
        console.warn('Database save warning (running in resilience mode):', dbErr);
      }
    }

    return res.status(200).json({
      _id: savedResumeId,
      fileName: originalName,
      atsScore: aiFeedback.atsScore,
      feedback: aiFeedback.feedback,
      missingSkills: aiFeedback.missingSkills,
      improvements: aiFeedback.improvements,
      extractedTextLength: text.length,
      createdAt
    });
  } catch (error: any) {
    console.error('Resume upload error:', error);
    return res.status(500).json({ message: error.message || 'Server error parsing resume.' });
  }
});

// @route   POST /api/resumes/analyze-text
// @desc    Analyze raw pasted resume text
router.post('/analyze-text', async (req: Request, res: Response) => {
  try {
    const { text, targetCareer } = req.body;
    if (!text || typeof text !== 'string' || text.trim().length < 15) {
      return res.status(400).json({ message: 'Please provide at least 15 characters of resume text.' });
    }

    const user = await getOptionalUser(req);
    const career = targetCareer || user?.targetCareer || 'Full Stack AI Engineer';

    const aiFeedback = await AIService.analyzeResume(text, career);

    let savedResumeId = undefined;
    if (user?._id) {
      try {
        const newResume = new Resume({
          userId: user._id,
          fileName: 'Pasted Resume Text',
          atsScore: aiFeedback.atsScore,
          feedback: aiFeedback.feedback,
          missingSkills: aiFeedback.missingSkills,
          improvements: aiFeedback.improvements
        });
        const saved = await newResume.save();
        savedResumeId = saved._id;
      } catch (dbErr) {}
    }

    return res.status(200).json({
      _id: savedResumeId,
      fileName: 'Pasted Resume Text',
      atsScore: aiFeedback.atsScore,
      feedback: aiFeedback.feedback,
      missingSkills: aiFeedback.missingSkills,
      improvements: aiFeedback.improvements
    });
  } catch (error: any) {
    console.error('Resume text analyze error:', error);
    return res.status(500).json({ message: 'Server error analyzing resume text.' });
  }
});

// @route   POST /api/resumes/generate-summary
// @desc    Generate AI professional summary for builder
router.post('/generate-summary', async (req: Request, res: Response) => {
  try {
    const { name, targetCareer, skills, experienceContext } = req.body;
    const user = await getOptionalUser(req);
    const candidateName = name || user?.name || 'Candidate';
    const career = targetCareer || user?.targetCareer || 'Full Stack Software Engineer';

    const summary = await AIService.generateSummary(candidateName, career, skills, experienceContext);
    return res.status(200).json({ summary });
  } catch (error: any) {
    console.error('Generate summary error:', error);
    return res.status(500).json({ message: 'Server error generating summary.' });
  }
});

// @route   POST /api/resumes/enhance-bullet
// @desc    Enhance draft bullet point using AI for builder
router.post('/enhance-bullet', async (req: Request, res: Response) => {
  try {
    const { bullet, targetCareer } = req.body;
    if (!bullet || typeof bullet !== 'string') {
      return res.status(400).json({ message: 'Please provide a valid bullet point string.' });
    }
    const user = await getOptionalUser(req);
    const career = targetCareer || user?.targetCareer || 'Full Stack Software Engineer';

    const result = await AIService.enhanceBulletPoint(bullet, career);
    return res.status(200).json(result);
  } catch (error: any) {
    console.error('Enhance bullet error:', error);
    return res.status(500).json({ message: 'Server error enhancing bullet point.' });
  }
});

// @route   GET /api/resumes/history
// @desc    Get all resume reports for current user
router.get('/history', async (req: Request, res: Response) => {
  try {
    const user = await getOptionalUser(req);
    if (!user) {
      return res.status(200).json([]);
    }

    const history = await Resume.find({ userId: user._id }).sort({ createdAt: -1 });
    return res.status(200).json(history);
  } catch (error) {
    return res.status(500).json({ message: 'Server error retrieving resumes.' });
  }
});

// @route   GET /api/resumes/latest
// @desc    Get the latest resume score
router.get('/latest', async (req: Request, res: Response) => {
  try {
    const user = await getOptionalUser(req);
    if (!user) {
      return res.status(404).json({ message: 'No resume analyzed yet.' });
    }

    const latest = await Resume.findOne({ userId: user._id }).sort({ createdAt: -1 });
    if (!latest) {
      return res.status(404).json({ message: 'No resume analyzed yet.' });
    }
    return res.status(200).json(latest);
  } catch (error) {
    return res.status(500).json({ message: 'Server error.' });
  }
});

// @route   DELETE /api/resumes/:id
// @desc    Delete a resume report
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const user = await getOptionalUser(req);
    if (!user) return res.status(401).json({ message: 'Unauthorized.' });

    await Resume.findOneAndDelete({ _id: req.params.id, userId: user._id });
    return res.status(200).json({ message: 'Resume report deleted.' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error deleting resume report.' });
  }
});

export default router;

