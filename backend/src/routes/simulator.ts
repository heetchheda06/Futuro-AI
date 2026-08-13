import express, { Router, Response } from 'express';
import { authenticateToken, AuthRequest } from '../middleware/auth';
import { AIService } from '../services/aiService';

const router: Router = express.Router();

// Career Titles mapping Level 1 to 10
export const CAREER_TITLES: Record<string, string[]> = {
  'Software Engineer': [
    'Intern Software Engineer', // L1
    'Junior Software Engineer', // L2
    'Software Engineer I', // L3
    'Software Engineer II', // L4
    'Senior Software Engineer', // L5
    'Tech Lead', // L6
    'Staff Software Engineer', // L7
    'Principal Architect', // L8
    'VP of Engineering', // L9
    'Chief Technology Officer' // L10
  ],
  'Doctor': [
    'Medical Student', // L1
    'Resident Physician', // L2
    'Attending Physician', // L3
    'Medical Specialist', // L4
    'Senior Consultant', // L5
    'Department Chief', // L6
    'Deputy Medical Director', // L7
    'Clinical Director', // L8
    'Chief Medical Officer', // L9
    'Surgeon General / CEO' // L10
  ],
  'Entrepreneur': [
    'Solo Founder (Idea Stage)', // L1
    'Founder (Pre-Seed Stage)', // L2
    'Co-Founder & CEO (Seed)', // L3
    'Co-Founder & CEO (Series A)', // L4
    'Growth-Stage CEO (Series B)', // L5
    'Scale-Up CEO (Series C+)', // L6
    'Serial Entrepreneur', // L7
    'Venture Partner', // L8
    'Chairman of the Board', // L9
    'Tech Titan / Mogul' // L10
  ],
  'Designer': [
    'Design Intern', // L1
    'Junior UI/UX Designer', // L2
    'Product Designer', // L3
    'Senior Product Designer', // L4
    'Lead Product Designer', // L5
    'Design Manager', // L6
    'Art Director', // L7
    'Principal Designer', // L8
    'VP of Design', // L9
    'Chief Design Officer' // L10
  ]
};

// Initial state constructor
const createInitialState = (career: string) => {
  const titles = CAREER_TITLES[career] || CAREER_TITLES['Software Engineer'];
  const title = titles[0];
  
  let baseSalary = 30000;
  let stats = { technical: 20, leadership: 10, stress: 15, network: 10 };

  if (career === 'Doctor') {
    baseSalary = 24000;
    stats = { technical: 25, leadership: 10, stress: 25, network: 10 };
  } else if (career === 'Entrepreneur') {
    baseSalary = 12000;
    stats = { technical: 10, leadership: 20, stress: 30, network: 20 };
  } else if (career === 'Designer') {
    baseSalary = 28000;
    stats = { technical: 18, leadership: 10, stress: 10, network: 12 };
  }

  return {
    career,
    level: 1,
    title,
    xp: 0,
    salary: baseSalary,
    stats,
    day: 1,
    history: [] as string[]
  };
};

/**
 * @route   POST /api/simulator/start
 * @desc    Start/Reset a career simulator session
 * @access  Private
 */
router.post('/start', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const { career } = req.body;
    if (!career || !CAREER_TITLES[career]) {
      return res.status(400).json({ message: 'Invalid or missing career path.' });
    }

    const state = createInitialState(career);
    
    // Generate the first event
    const event = await AIService.generateSimulatorEvent(career, state.level, state.stats);

    return res.status(200).json({
      message: `Simulator session started as ${career}.`,
      state,
      event
    });
  } catch (error) {
    console.error('Error starting simulator:', error);
    return res.status(500).json({ message: 'Server error starting simulator.' });
  }
});

/**
 * @route   POST /api/simulator/action
 * @desc    Process standard choices or grade interview answers
 * @access  Private
 */
router.post('/action', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const { state, actionType, choiceId, interviewAnswer, currentQuestion } = req.body;

    if (!state) {
      return res.status(400).json({ message: 'Missing simulator state.' });
    }

    let stats = { ...state.stats };
    let xp = state.xp;
    let salary = state.salary;
    let level = state.level;
    let title = state.title;
    let day = state.day;
    let feedback = '';
    let passed = true;

    // --- CASE 1: PROMOTION INTERVIEW RESPONSE ---
    if (actionType === 'interview') {
      if (!interviewAnswer) {
        return res.status(400).json({ message: 'Interview answer is required.' });
      }

      const evaluation = await AIService.gradeSimulatorInterview(currentQuestion, interviewAnswer, state.career);
      passed = evaluation.passed;
      feedback = evaluation.feedback;

      if (passed) {
        // Successful level up!
        level = Math.min(10, level + 1);
        const titles = CAREER_TITLES[state.career] || CAREER_TITLES['Software Engineer'];
        title = titles[level - 1];
        
        // Boost metrics on promotion
        xp = 0;
        salary = Math.floor(salary * 1.35); // 35% raise
        stats.leadership = Math.min(100, stats.leadership + 15);
        stats.technical = Math.min(100, stats.technical + 10);
        stats.stress = Math.min(100, Math.max(0, stats.stress - 20)); // relief
      } else {
        // Failed promotion
        stats.stress = Math.min(100, stats.stress + 15); // stress rises
        xp = Math.max(0, xp - 30); // drop some XP
      }

    // --- CASE 2: REGULAR CHOICE EVENT SELECTION ---
    } else {
      if (!choiceId) {
        return res.status(400).json({ message: 'Choice selection ID is required.' });
      }

      const choices = req.body.choices;
      const selectedChoice = choices?.find((c: any) => c.id === choiceId);
      if (!selectedChoice) {
        return res.status(400).json({ message: 'Selected choice details not found.' });
      }

      const impact = selectedChoice.statsImpact || { technical: 0, leadership: 0, stress: 0, network: 0, xp: 10, salary: 0 };
      
      // Update values
      stats.technical = Math.min(100, Math.max(0, stats.technical + (impact.technical || 0)));
      stats.leadership = Math.min(100, Math.max(0, stats.leadership + (impact.leadership || 0)));
      stats.stress = Math.min(100, Math.max(0, stats.stress + (impact.stress || 0)));
      stats.network = Math.min(100, Math.max(0, stats.network + (impact.network || 0)));
      
      xp = Math.min(100, xp + (impact.xp || 15));
      salary = Math.max(1000, salary + (impact.salary || 0));
      day += 1;
      feedback = selectedChoice.consequence;
    }

    // Check if stress is maxed (Burnout condition)
    let burnedOut = false;
    if (stats.stress >= 100) {
      burnedOut = true;
      feedback = 'BURNOUT! Your stress levels hit 100%. You were hospitalized for exhaustion and had to take an unpaid leave of absence, dropping your stats and salary.';
      stats.stress = 50;
      stats.technical = Math.max(10, stats.technical - 10);
      salary = Math.floor(salary * 0.9);
    }

    // Assemble new state
    const newState = {
      ...state,
      stats,
      xp,
      salary,
      level,
      title,
      day,
      burnedOut
    };

    // Determine the next event
    // If player reaches 100 XP and hasn't maxed level, trigger an interview question
    let nextEvent;
    if (newState.xp >= 100 && newState.level < 10) {
      nextEvent = {
        isInterview: true,
        question: getMilestoneInterviewQuestion(newState.career, newState.level)
      };
    } else {
      nextEvent = await AIService.generateSimulatorEvent(newState.career, newState.level, newState.stats);
    }

    return res.status(200).json({
      state: newState,
      feedback,
      passed,
      event: nextEvent
    });
  } catch (error) {
    console.error('Error executing action:', error);
    return res.status(500).json({ message: 'Server error processing simulator action.' });
  }
});

/**
 * @route   POST /api/simulator/mentor
 * @desc    Get advice from the AI mentor
 * @access  Private
 */
router.post('/mentor', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const { career, state, chatHistory, query } = req.body;
    if (!career || !state || !query) {
      return res.status(400).json({ message: 'Missing career, game state, or query.' });
    }

    const advice = await AIService.getSimulatorMentorAdvice(career, state, chatHistory || [], query);
    return res.status(200).json({ advice });
  } catch (error) {
    console.error('Error querying AI mentor:', error);
    return res.status(500).json({ message: 'Server error querying AI mentor.' });
  }
});

// Helper milestone questions list
function getMilestoneInterviewQuestion(career: string, currentLevel: number): string {
  const milestoneQuestions: Record<string, string[]> = {
    'Software Engineer': [
      'As a candidate for promotion, how do you handle critical architectural disagreements between product managers and engineering teammates?',
      'Describe how you would design, optimize, and secure an high-traffic backend API that handles sensitive database writes.',
      'Explain your strategy for leading a cross-functional sprint team when core feature requirements keep changing.'
    ],
    'Doctor': [
      'How do you manage clinical workloads while supervising medical interns, ensuring zero safety incidents?',
      'Walk us through your diagnosis and risk management strategies for a patient showing overlapping multi-organ symptoms.',
      'How do you handle budget cutbacks in your clinic department without compromising patient safety levels?'
    ],
    'Entrepreneur': [
      'What are your primary metrics and strategies for proving Product-Market Fit (PMF) before pitch meetings with Series A partners?',
      'Walk us through how you handle firing a key early co-founder who is no longer scaling with the growth of the company.',
      'Explain how you would execute a global marketing expansion when your local runway is limited to 6 months.'
    ],
    'Designer': [
      'How do you construct and govern a unified design system that scales across multiple mobile and web platforms?',
      'Walk us through how you conduct user usability audits to justify redesigning a legacy client checkout flow.',
      'How do you lead, mentor, and align multiple junior designers when working under tight shipping cycles?'
    ]
  };

  const list = milestoneQuestions[career] || milestoneQuestions['Software Engineer'];
  const index = Math.min(list.length - 1, Math.floor((currentLevel - 1) / 3));
  return list[index];
}

export default router;
