import express, { Router, Response } from 'express';
import bcrypt from 'bcryptjs';
import { User } from '../models/Schemas';
import { generateToken, authenticateToken, AuthRequest } from '../middleware/auth';

const router: Router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a new user
router.post('/register', async (req: express.Request, res: express.Response) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please enter all required fields.' });
    }

    // Check existing
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists with this email.' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: role || 'student',
      currentSkills: []
    });

    await newUser.save();

    // Generate token
    const token = generateToken({ id: newUser._id.toString(), role: newUser.role, email: newUser.email });

    return res.status(201).json({
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        currentSkills: newUser.currentSkills
      }
    });
  } catch (error) {
    console.error('Register error:', error);
    return res.status(500).json({ message: 'Server error during registration.' });
  }
});

// @route   POST /api/auth/login
// @desc    Authenticate user and get token
router.post('/login', async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password.' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    // Verify password if local login
    if (!user.password) {
      return res.status(400).json({ message: 'This account uses Google Sign-In. Please sign in via Google.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    const token = generateToken({ id: user._id.toString(), role: user.role, email: user.email });

    return res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        currentSkills: user.currentSkills,
        targetCareer: user.targetCareer,
        experienceLevel: user.experienceLevel,
        education: user.education
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Server error during login.' });
  }
});

// @route   POST /api/auth/google
// @desc    Google Authentication (Sign-in or register)
router.post('/google', async (req: express.Request, res: express.Response) => {
  try {
    const { email, name, googleId, imageUrl } = req.body;

    if (!email || !name || !googleId) {
      return res.status(400).json({ message: 'Invalid Google login payload.' });
    }

    let user = await User.findOne({ email });

    if (!user) {
      // Create new user with Google login
      user = new User({
        name,
        email,
        googleId,
        role: 'student', // default
        profileImage: imageUrl || '',
        currentSkills: []
      });
      await user.save();
    } else if (!user.googleId) {
      // Associate Google ID if local account existed
      user.googleId = googleId;
      if (imageUrl && !user.profileImage) user.profileImage = imageUrl;
      await user.save();
    }

    const token = generateToken({ id: user._id.toString(), role: user.role, email: user.email });

    return res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        currentSkills: user.currentSkills,
        targetCareer: user.targetCareer,
        experienceLevel: user.experienceLevel,
        profileImage: user.profileImage
      }
    });
  } catch (error) {
    console.error('Google Auth error:', error);
    return res.status(500).json({ message: 'Server error during Google auth.' });
  }
});

// @route   POST /api/auth/forgot-password
// @desc    Mock request reset link
router.post('/forgot-password', async (req: express.Request, res: express.Response) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'No user registered with this email.' });
    }
    
    // Simulate sending email
    return res.status(200).json({ message: 'Verification link sent to email (Simulated reset token).' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error.' });
  }
});

// @route   POST /api/auth/reset-password
// @desc    Mock verify and overwrite password
router.post('/reset-password', async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    return res.status(200).json({ message: 'Password updated successfully. You can now login.' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error.' });
  }
});

// @route   GET /api/auth/me
// @desc    Get current user details
router.get('/me', authenticateToken, async (req: AuthRequest, res: express.Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized.' });
    
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User profile not found.' });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Server error.' });
  }
});

// @route   PUT /api/auth/profile
// @desc    Update user profile data
router.put('/profile', authenticateToken, async (req: AuthRequest, res: express.Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized.' });

    const { targetCareer, currentSkills, experienceLevel, education } = req.body;

    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found.' });

    if (targetCareer !== undefined) user.targetCareer = targetCareer;
    if (currentSkills !== undefined) user.currentSkills = currentSkills;
    if (experienceLevel !== undefined) user.experienceLevel = experienceLevel;
    if (education !== undefined) user.education = education;

    await user.save();
    return res.status(200).json({
      message: 'Profile updated successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        currentSkills: user.currentSkills,
        targetCareer: user.targetCareer,
        experienceLevel: user.experienceLevel,
        education: user.education
      }
    });
  } catch (error) {
    return res.status(500).json({ message: 'Server error updating profile.' });
  }
});

export default router;
