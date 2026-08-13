import express, { Router } from 'express';
import { Goal } from '../models/Schemas';
import { authenticateToken, AuthRequest } from '../middleware/auth';

const router: Router = express.Router();

// @route   GET /api/goals
// @desc    Fetch all goals for authenticated user
router.get('/', authenticateToken, async (req: AuthRequest, res: express.Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized.' });

    const goals = await Goal.find({ userId: req.user.id }).sort({ createdAt: -1 });
    return res.status(200).json(goals);
  } catch (error) {
    return res.status(500).json({ message: 'Server error retrieving goals.' });
  }
});

// @route   POST /api/goals
// @desc    Create a new goal
router.post('/', authenticateToken, async (req: AuthRequest, res: express.Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized.' });

    const { title, targetDate, milestones } = req.body;
    if (!title || !targetDate) {
      return res.status(400).json({ message: 'Please provide a title and target date.' });
    }

    const goalMilestones = Array.isArray(milestones) 
      ? milestones.map((m: string) => ({ title: m, completed: false }))
      : [];

    const newGoal = new Goal({
      userId: req.user.id,
      title,
      targetDate: new Date(targetDate),
      progress: 0,
      completed: false,
      milestones: goalMilestones,
      streak: 1
    });

    await newGoal.save();
    return res.status(201).json(newGoal);
  } catch (error) {
    return res.status(500).json({ message: 'Server error creating goal.' });
  }
});

// @route   PUT /api/goals/:id
// @desc    Update milestones and goal progress
router.put('/:id', authenticateToken, async (req: AuthRequest, res: express.Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized.' });

    const { milestones, streak } = req.body;
    const goal = await Goal.findOne({ _id: req.params.id, userId: req.user.id });

    if (!goal) {
      return res.status(404).json({ message: 'Goal not found.' });
    }

    if (milestones) {
      goal.milestones = milestones;
      
      // Calculate progress percentage
      const completedCount = milestones.filter((m: any) => m.completed).length;
      goal.progress = Math.round((completedCount / milestones.length) * 100) || 0;
      goal.completed = goal.progress === 100;
    }

    if (streak !== undefined) {
      goal.streak = streak;
    }

    await goal.save();
    return res.status(200).json(goal);
  } catch (error) {
    return res.status(500).json({ message: 'Server error updating goal.' });
  }
});

// @route   DELETE /api/goals/:id
// @desc    Delete goal
router.delete('/:id', authenticateToken, async (req: AuthRequest, res: express.Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized.' });

    const result = await Goal.deleteOne({ _id: req.params.id, userId: req.user.id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Goal not found.' });
    }

    return res.status(200).json({ message: 'Goal deleted successfully.' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error deleting goal.' });
  }
});

export default router;
