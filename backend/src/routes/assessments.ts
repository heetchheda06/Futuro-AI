import express, { Router } from 'express';
import { Assessment, User } from '../models/Schemas';
import { authenticateToken, AuthRequest } from '../middleware/auth';
import { AIService } from '../services/aiService';

const router: Router = express.Router();

// @route   POST /api/assessments
// @desc    Submit career assessment answers and generate scores/insights
router.post('/', authenticateToken, async (req: AuthRequest, res: express.Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized.' });

    const { answers } = req.body;
    if (!answers || !answers.interests || !answers.personality) {
      return res.status(400).json({ message: 'Invalid or incomplete assessment answers.' });
    }

    // Call AI evaluator
    const aiResults = await AIService.evaluateAssessment(answers);

    // Save assessment to DB
    const assessment = new Assessment({
      userId: req.user.id,
      answers,
      compatibilityScores: aiResults.compatibilityScores,
      personalityInsights: aiResults.personalityInsights,
      strengthAnalysis: aiResults.strengthAnalysis
    });

    await assessment.save();

    // Auto-update User target career if not already set or updated
    if (aiResults.compatibilityScores && aiResults.compatibilityScores.length > 0) {
      const topCareer = aiResults.compatibilityScores[0].careerTitle;
      await User.findByIdAndUpdate(req.user.id, { targetCareer: topCareer });
    }

    return res.status(201).json(assessment);
  } catch (error) {
    console.error('Submit assessment error:', error);
    return res.status(500).json({ message: 'Server error processing assessment.' });
  }
});

// @route   GET /api/assessments/history
// @desc    Get current user's assessment history
router.get('/history', authenticateToken, async (req: AuthRequest, res: express.Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized.' });

    const history = await Assessment.find({ userId: req.user.id }).sort({ createdAt: -1 });
    return res.status(200).json(history);
  } catch (error) {
    return res.status(500).json({ message: 'Server error retrieving history.' });
  }
});

// @route   GET /api/assessments/latest
// @desc    Get the most recent assessment for dashboard display
router.get('/latest', authenticateToken, async (req: AuthRequest, res: express.Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized.' });

    const latest = await Assessment.findOne({ userId: req.user.id }).sort({ createdAt: -1 });
    if (!latest) {
      return res.status(404).json({ message: 'No assessments completed yet.' });
    }

    return res.status(200).json(latest);
  } catch (error) {
    return res.status(500).json({ message: 'Server error.' });
  }
});

export default router;
