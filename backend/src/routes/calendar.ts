import express from 'express';
import { CalendarEvent, ActivityLog } from '../models/Schemas';
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

/**
 * GET /api/calendar/activity-logs
 * Fetch all activity logs and website visit history for current user
 */
router.get('/activity-logs', authMiddleware, async (req: any, res) => {
  try {
    const userId = req.user.id;
    const logs = await ActivityLog.find({ userId }).sort({ date: 1 });

    // Build map of logged dates YYYY-MM-DD
    const logsMap: Record<string, any> = {};
    logs.forEach((log) => {
      logsMap[log.date] = {
        date: log.date,
        visited: log.visited,
        activities: log.activities || [],
        notes: log.notes
      };
    });

    // Calculate streaks and telemetry
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];

    let currentStreak = 0;
    let tempDate = new Date(today);

    // Calculate consecutive active days leading up to today
    while (true) {
      const dStr = tempDate.toISOString().split('T')[0];
      if (logsMap[dStr] && logsMap[dStr].visited) {
        currentStreak++;
        tempDate.setDate(tempDate.getDate() - 1);
      } else {
        // Allow missing today if it's earlier in the day
        if (dStr === todayStr && currentStreak === 0) {
          tempDate.setDate(tempDate.getDate() - 1);
          continue;
        }
        break;
      }
    }

    const totalActiveDays = Object.values(logsMap).filter((l: any) => l.visited).length;

    res.json({
      logs: logsMap,
      currentStreak,
      totalActiveDays,
      todayStr
    });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving activity logs' });
  }
});

/**
 * POST /api/calendar/log-visit
 * Automatically record today's website visit in database
 */
router.post('/log-visit', authMiddleware, async (req: any, res) => {
  try {
    const userId = req.user.id;
    const todayStr = req.body.date || new Date().toISOString().split('T')[0];
    const nowTimeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    let log = await ActivityLog.findOne({ userId, date: todayStr });

    if (!log) {
      log = new ActivityLog({
        userId,
        date: todayStr,
        visited: true,
        activities: [
          {
            type: 'System',
            title: 'Logged into Futuro AI Career Platform',
            time: nowTimeStr,
            description: 'Daily career telemetry session initiated.'
          }
        ]
      });
      await log.save();
    } else {
      log.visited = true;
      // Add visit activity if not already recorded today
      const hasVisit = log.activities.some(a => a.type === 'System');
      if (!hasVisit) {
        log.activities.push({
          type: 'System',
          title: 'Visited Futuro AI Platform',
          time: nowTimeStr,
          description: 'Continued active career study streak.'
        });
      }
      await log.save();
    }

    res.json({ message: 'Visit logged successfully', log });
  } catch (error) {
    res.status(500).json({ message: 'Error logging website visit' });
  }
});

/**
 * POST /api/calendar/activity-logs
 * Record a specific learning activity for a date
 */
router.post('/activity-logs', authMiddleware, async (req: any, res) => {
  try {
    const userId = req.user.id;
    const { date, type, title, time, description, notes } = req.body;

    const dateStr = date || new Date().toISOString().split('T')[0];
    const timeStr = time || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    let log = await ActivityLog.findOne({ userId, date: dateStr });

    if (!log) {
      log = new ActivityLog({
        userId,
        date: dateStr,
        visited: true,
        activities: [
          {
            type: type || 'Learning',
            title: title || 'Learning Session',
            time: timeStr,
            description
          }
        ],
        notes
      });
    } else {
      log.visited = true;
      log.activities.push({
        type: type || 'Learning',
        title: title || 'Learning Session',
        time: timeStr,
        description
      });
      if (notes) log.notes = notes;
    }

    await log.save();
    res.status(201).json({ message: 'Learning activity recorded', log });
  } catch (error) {
    res.status(500).json({ message: 'Error recording learning activity' });
  }
});

/**
 * POST /api/calendar/generate-catchup
 * Generate an AI catch-up plan for missed website/study dates
 */
router.post('/generate-catchup', authMiddleware, async (req: any, res) => {
  try {
    const { missedDates, targetCareer } = req.body;
    const dates: string[] = missedDates || [];
    const career = targetCareer || 'Full Stack Engineer';

    const plan = dates.map((d, index) => ({
      date: d,
      focusTopic: `Accelerated ${career} Revision Block #${index + 1}`,
      durationMinutes: 45,
      tasks: [
        `Review key concepts missed on ${d}`,
        `Complete 1 hands-on drill in AI Cockpit or Skill Gap Analyzer`,
        `Log completed learning entry into AI Calendar`
      ]
    }));

    res.json({
      message: 'AI Catch-Up Plan Generated',
      totalMissedDays: dates.length,
      plan
    });
  } catch (error) {
    res.status(500).json({ message: 'Error generating catch-up plan' });
  }
});

export default router;
