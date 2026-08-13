import express, { Router } from 'express';
import { InterviewSession, User } from '../models/Schemas';
import { authenticateToken, AuthRequest } from '../middleware/auth';
import { AIService } from '../services/aiService';

const router: Router = express.Router();

// @route   POST /api/interviews/start
// @desc    Initiate an interview session and generate questions
router.post('/start', authenticateToken, async (req: AuthRequest, res: express.Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized.' });
    
    const { type } = req.body;
    if (!type || !['HR', 'Technical', 'Behavioral'].includes(type)) {
      return res.status(400).json({ message: 'Please specify interview type (HR, Technical, Behavioral).' });
    }

    const user = await User.findById(req.user.id);
    const careerTitle = user?.targetCareer || 'Software Engineer';

    const questionList = AIService.generateInterviewQuestions(type, careerTitle);
    
    const session = new InterviewSession({
      userId: req.user.id,
      type,
      careerTitle,
      questions: questionList.map(q => ({ question: q, answer: '', feedback: '', score: 0 })),
      confidenceScore: 0,
      communicationRating: 'Pending completion',
      overallScore: 0,
      completed: false
    });

    await session.save();
    return res.status(201).json(session);
  } catch (error) {
    console.error('Interview start error:', error);
    return res.status(500).json({ message: 'Server error starting interview.' });
  }
});

// @route   POST /api/interviews/submit
// @desc    Submit answer for a question and evaluate it
router.post('/submit', authenticateToken, async (req: AuthRequest, res: express.Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized.' });

    const { sessionId, questionIndex, answer } = req.body;

    if (!sessionId || questionIndex === undefined || answer === undefined) {
      return res.status(400).json({ message: 'Incomplete parameters.' });
    }

    const session = await InterviewSession.findById(sessionId);
    if (!session) {
      return res.status(404).json({ message: 'Interview session not found.' });
    }

    if (questionIndex < 0 || questionIndex >= session.questions.length) {
      return res.status(400).json({ message: 'Invalid question index.' });
    }

    const questionObj = session.questions[questionIndex];
    
    // Evaluate answer with AI
    const evaluation = await AIService.evaluateInterviewResponse(questionObj.question, answer, session.type);

    // Update session
    session.questions[questionIndex].answer = answer;
    session.questions[questionIndex].feedback = evaluation.feedback;
    session.questions[questionIndex].score = evaluation.score;

    // Check if session is completed (all questions answered)
    const allAnswered = session.questions.every((q, idx) => idx === questionIndex ? !!answer : !!q.answer);

    if (allAnswered) {
      session.completed = true;
      
      // Calculate overall stats
      const totalScore = session.questions.reduce((sum, q) => sum + (q.score || 0), 0);
      const avgScore = totalScore / session.questions.length; // 0-10
      session.overallScore = Math.round(avgScore * 10); // convert to 0-100 scale

      // Generate confidence/communication based on scores
      if (session.overallScore >= 80) {
        session.confidenceScore = 90;
        session.communicationRating = 'Excellent - Fluent and detailed articulate responses.';
      } else if (session.overallScore >= 60) {
        session.confidenceScore = 75;
        session.communicationRating = 'Good - Solid conceptual layout, could add more metrics.';
      } else {
        session.confidenceScore = 55;
        session.communicationRating = 'Developing - Keep working on elaboration and structure.';
      }
    }

    await session.save();
    return res.status(200).json(session);
  } catch (error) {
    console.error('Interview answer submission error:', error);
    return res.status(500).json({ message: 'Server error processing response.' });
  }
});

// @route   GET /api/interviews/history
// @desc    Get user's past interviews
router.get('/history', authenticateToken, async (req: AuthRequest, res: express.Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized.' });

    const sessions = await InterviewSession.find({ userId: req.user.id }).sort({ createdAt: -1 });
    return res.status(200).json(sessions);
  } catch (error) {
    return res.status(500).json({ message: 'Server error.' });
  }
});

export default router;
