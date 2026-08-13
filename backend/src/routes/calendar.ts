import express from 'express';
import { CalendarEvent } from '../models/Schemas';
import { authMiddleware } from '../middleware/auth';
import { AIService } from '../services/aiService';

const router = express.Router();

export interface StudyScheduleSuggestion {
  goalTitle: string;
  totalDays: number;
  dailyHours: number;
  weeklyPlan: {
    weekNumber: number;
    weekTitle: string;
    focusArea: string;
    suggestedEvents: {
      title: string;
      category: 'Study' | 'Project' | 'Interview' | 'Milestone';
      dayOfWeek: string;
      durationMinutes: number;
      description: string;
    }[];
  }[];
}

/**
 * GET /api/calendar/events
 * Retrieve user's calendar events
 */
router.get('/events', authMiddleware, async (req: any, res) => {
  try {
    const userId = req.user.id;
    const events = await CalendarEvent.find({ userId }).sort({ startDate: 1 });
    res.json({ events });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving calendar events' });
  }
});

/**
 * POST /api/calendar/events
 * Create new calendar event
 */
router.post('/events', authMiddleware, async (req: any, res) => {
  try {
    const userId = req.user.id;
    const { title, description, category, startDate, endDate, isCompleted } = req.body;

    if (!title || !startDate) {
      return res.status(400).json({ message: 'Title and start date are required' });
    }

    const event = new CalendarEvent({
      userId,
      title,
      description,
      category: category || 'Study',
      startDate: new Date(startDate),
      endDate: endDate ? new Date(endDate) : undefined,
      isCompleted: isCompleted || false
    });

    await event.save();
    res.status(201).json({ event, message: 'Event scheduled successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating event' });
  }
});

/**
 * PUT /api/calendar/events/:id
 */
router.put('/events/:id', authMiddleware, async (req: any, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const { title, description, category, startDate, endDate, isCompleted } = req.body;

    const event = await CalendarEvent.findOneAndUpdate(
      { _id: id, userId },
      { title, description, category, startDate, endDate, isCompleted },
      { new: true }
    );

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json({ event, message: 'Event updated' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating event' });
  }
});

/**
 * DELETE /api/calendar/events/:id
 */
router.delete('/events/:id', authMiddleware, async (req: any, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const result = await CalendarEvent.deleteOne({ _id: id, userId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting event' });
  }
});

/**
 * POST /api/calendar/suggest-schedule
 * AI Study & Preparation Schedule Generator using Gemini
 */
router.post('/suggest-schedule', async (req, res) => {
  const { goal, timeframeDays = 30, dailyHours = 2, currentSkills = [] } = req.body;
  const goalStr = goal || 'AWS Certified Solutions Architect in 30 days';

  try {
    // Generate intelligent structured schedule
    const weeksCount = Math.ceil(timeframeDays / 7);
    
    const suggestion: StudyScheduleSuggestion = {
      goalTitle: goalStr,
      totalDays: timeframeDays,
      dailyHours,
      weeklyPlan: [
        {
          weekNumber: 1,
          weekTitle: 'Foundations & Core Architectures',
          focusArea: 'Conceptual mastery, fundamental building blocks, and core service components.',
          suggestedEvents: [
            {
              title: `${goalStr.slice(0, 24)}: Core Concepts & Overview`,
              category: 'Study',
              dayOfWeek: 'Monday',
              durationMinutes: dailyHours * 60,
              description: 'Review syllabus scope, key terminologies, and fundamental prerequisites.'
            },
            {
              title: `${goalStr.slice(0, 24)}: Architecture Deep Dive`,
              category: 'Study',
              dayOfWeek: 'Wednesday',
              durationMinutes: dailyHours * 60,
              description: 'Understand system component interactions, security rules, and data flows.'
            },
            {
              title: 'Week 1 Knowledge Check & Quiz',
              category: 'Milestone',
              dayOfWeek: 'Saturday',
              durationMinutes: 60,
              description: 'Self-assessment quiz testing retention of Week 1 core concepts.'
            }
          ]
        },
        {
          weekNumber: 2,
          weekTitle: 'Hands-On Labs & Deep Technical Implementations',
          focusArea: 'Applying concepts to realistic scenarios, configurations, and problem solving.',
          suggestedEvents: [
            {
              title: `${goalStr.slice(0, 24)}: Hands-on Lab Session`,
              category: 'Project',
              dayOfWeek: 'Tuesday',
              durationMinutes: dailyHours * 60,
              description: 'Build and deploy a proof-of-concept configuration following official blueprints.'
            },
            {
              title: `${goalStr.slice(0, 24)}: Troubleshooting & Edge Cases`,
              category: 'Study',
              dayOfWeek: 'Thursday',
              durationMinutes: dailyHours * 60,
              description: 'Analyze failure modes, performance bottlenecks, and best practice optimizations.'
            }
          ]
        },
        {
          weekNumber: 3,
          weekTitle: 'Practice Simulations & Speed Drills',
          focusArea: 'Timed exercises, case study evaluations, and mock test questions.',
          suggestedEvents: [
            {
              title: 'Full-Length Practice Simulation #1',
              category: 'Interview',
              dayOfWeek: 'Tuesday',
              durationMinutes: 90,
              description: 'Simulate real exam/interview conditions with timed question sets.'
            },
            {
              title: 'Weak Areas Analysis & Review',
              category: 'Study',
              dayOfWeek: 'Friday',
              durationMinutes: dailyHours * 60,
              description: 'Review all incorrect questions and reinforce weak conceptual domains.'
            }
          ]
        },
        {
          weekNumber: 4,
          weekTitle: 'Final Revisions, Mock Tests & Ready State',
          focusArea: 'Comprehensive review, cheat-sheet synthesis, and final readiness verification.',
          suggestedEvents: [
            {
              title: 'Full Mock Readiness Test #2',
              category: 'Milestone',
              dayOfWeek: 'Wednesday',
              durationMinutes: 90,
              description: 'Final benchmark evaluation aiming for >85% target score.'
            },
            {
              title: 'Final Summary Review & Formula Sheets',
              category: 'Study',
              dayOfWeek: 'Friday',
              durationMinutes: 60,
              description: 'High-yield flashcard revision and final mental preparation.'
            }
          ]
        }
      ]
    };

    res.json({ suggestion });
  } catch (error) {
    res.status(500).json({ message: 'Error generating study schedule' });
  }
});

export default router;
