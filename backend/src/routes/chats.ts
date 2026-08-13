import express, { Router } from 'express';
import { ChatMessage } from '../models/Schemas';
import { authenticateToken, AuthRequest } from '../middleware/auth';
import { AIService } from '../services/aiService';

const router: Router = express.Router();

// @route   GET /api/chats
// @desc    Retrieve chat history
router.get('/', authenticateToken, async (req: AuthRequest, res: express.Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized.' });

    const messages = await ChatMessage.find({ userId: req.user.id }).sort({ createdAt: 1 });
    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json({ message: 'Server error retrieving messages.' });
  }
});

// @route   POST /api/chats
// @desc    Send chat message and fetch AI reply
router.post('/', authenticateToken, async (req: AuthRequest, res: express.Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized.' });

    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ message: 'Message content required.' });
    }

    // Save user message
    const userMsg = new ChatMessage({
      userId: req.user.id,
      role: 'user',
      content: message
    });
    await userMsg.save();

    // Fetch message history for context (limit to last 10 for performance)
    const historyDocs = await ChatMessage.find({ userId: req.user.id })
      .sort({ createdAt: -1 })
      .limit(10);
    
    // Reverse because we queried -1 order
    const history = historyDocs.reverse().map(h => ({
      role: h.role,
      content: h.content
    }));

    // Generate response from AI
    const aiContent = await AIService.getChatResponse(history, message);

    // Save AI message
    const aiMsg = new ChatMessage({
      userId: req.user.id,
      role: 'assistant',
      content: aiContent
    });
    await aiMsg.save();

    return res.status(201).json({ userMessage: userMsg, aiMessage: aiMsg });
  } catch (error) {
    console.error('Chat error:', error);
    return res.status(500).json({ message: 'Server error processing chat message.' });
  }
});

// @route   DELETE /api/chats
// @desc    Clear chat history
router.delete('/', authenticateToken, async (req: AuthRequest, res: express.Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized.' });

    await ChatMessage.deleteMany({ userId: req.user.id });
    return res.status(200).json({ message: 'Chat history cleared successfully.' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error clearing chat.' });
  }
});

export default router;
