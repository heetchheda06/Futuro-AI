import express, { Router, Response } from 'express';
import { User } from '../models/Schemas';
import { authenticateToken, AuthRequest } from '../middleware/auth';
import { AIService } from '../services/aiService';

const router: Router = express.Router();

// Simple in-memory cache to prevent spamming Gemini API
// Maps userId -> { feed, timestamp }
interface CacheEntry {
  feed: any[];
  timestamp: number;
}
const feedCache: Record<string, CacheEntry> = {};
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

// @route   GET /api/feed
// @desc    Get personalized career news feed for user
// @access  Private
router.get('/', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized. User session not found.' });
    }

    const userId = req.user.id;
    const forceRefresh = req.query.refresh === 'true';

    // Check cache first
    const cached = feedCache[userId];
    const now = Date.now();
    if (cached && (now - cached.timestamp < CACHE_TTL) && !forceRefresh) {
      return res.status(200).json({
        source: 'cache',
        feed: cached.feed,
        cachedAt: new Date(cached.timestamp).toISOString()
      });
    }

    // Fetch user details for personalization
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found in database.' });
    }

    // Generate feed
    const feedItems = await AIService.generateCareerFeed(
      user.targetCareer || '',
      user.currentSkills || [],
      user.experienceLevel || ''
    );

    // Save to cache
    feedCache[userId] = {
      feed: feedItems,
      timestamp: now
    };

    return res.status(200).json({
      source: 'generation',
      feed: feedItems,
      cachedAt: new Date(now).toISOString()
    });
  } catch (error) {
    console.error('Error serving personalized career feed:', error);
    return res.status(500).json({ message: 'Server error generating career news feed.' });
  }
});

export default router;
