import express, { Router } from 'express';
import { Career, JobRecommendation, User } from '../models/Schemas';
import { authenticateToken, AuthRequest } from '../middleware/auth';
import { AIService } from '../services/aiService';

const router: Router = express.Router();

// @route   GET /api/careers
// @desc    Get all seeded careers
router.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const { category, search } = req.query;
    let query: any = {};
    
    if (category) {
      query.category = category;
    }
    if (search) {
      query.title = { $regex: search, $options: 'i' };
    }

    const careers = await Career.find(query);
    return res.status(200).json(careers);
  } catch (error) {
    return res.status(500).json({ message: 'Server error retrieving careers.' });
  }
});

// @route   GET /api/careers/compare
// @desc    Compare two careers side-by-side
router.get('/compare', async (req: express.Request, res: express.Response) => {
  try {
    const { careerA, careerB } = req.query;
    if (!careerA || !careerB) {
      return res.status(400).json({ message: 'Please specify both careers to compare.' });
    }

    const first = await Career.findOne({ title: careerA });
    const second = await Career.findOne({ title: careerB });

    if (!first || !second) {
      return res.status(404).json({ message: 'One or both careers could not be found.' });
    }

    return res.status(200).json({ first, second });
  } catch (error) {
    return res.status(500).json({ message: 'Server error comparing careers.' });
  }
});

// @route   GET /api/careers/user/roadmap
// @desc    Get roadmap for user's target career
router.get('/user/roadmap', authenticateToken, async (req: AuthRequest, res: express.Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized.' });
    const user = await User.findById(req.user.id);
    if (!user || !user.targetCareer) {
      return res.status(200).json([]); // return empty if no target career
    }
    const roadmap = AIService.generateRoadmap(user.currentSkills, user.targetCareer);
    return res.status(200).json(roadmap);
  } catch (error) {
    return res.status(500).json({ message: 'Server error generating roadmap.' });
  }
});

// @route   GET /api/careers/user/skill-gap
// @desc    Get skill gap analysis for user's target career
router.get('/user/skill-gap', authenticateToken, async (req: AuthRequest, res: express.Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized.' });
    const user = await User.findById(req.user.id);
    if (!user || !user.targetCareer) {
      return res.status(200).json({
        targetCareerTitle: 'None selected',
        existingSkills: [],
        missingSkills: [],
        learningPriorities: [],
        improvementSuggestions: ['Complete assessment to generate insights!']
      });
    }
    const gap = await AIService.analyzeSkillGap(user.currentSkills, user.targetCareer);
    return res.status(200).json(gap);
  } catch (error) {
    return res.status(500).json({ message: 'Server error analyzing skills.' });
  }
});

// @route   GET /api/careers/recommendations
// @desc    Get matching jobs, internships, and courses
router.get('/recommendations', authenticateToken, async (req: AuthRequest, res: express.Response) => {
  try {
    const limit = parseInt(req.query.limit as string) || 6;
    const recommendations = await JobRecommendation.find().limit(limit);
    return res.status(200).json(recommendations);
  } catch (error) {
    return res.status(500).json({ message: 'Server error retrieving job recommendations.' });
  }
});

// @route   GET /api/careers/:id
// @desc    Get details of a specific career
router.get('/:id', async (req: express.Request, res: express.Response) => {
  try {
    const career = await Career.findById(req.params.id);
    if (!career) {
      return res.status(404).json({ message: 'Career path not found.' });
    }
    return res.status(200).json(career);
  } catch (error) {
    return res.status(500).json({ message: 'Server error.' });
  }
});

export default router;
