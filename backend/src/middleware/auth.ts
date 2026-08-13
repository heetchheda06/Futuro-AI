import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User, IUser } from '../models/Schemas';

export interface AuthRequest extends Request {
  user?: {
    id: string;
    role: 'student' | 'professional' | 'admin';
    email: string;
  };
}

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretjwtkeychangeinproduction123';

export const generateToken = (payload: { id: string; role: string; email: string }): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
};

export const authenticateToken = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    let token = '';

    // Check Authorization header
    const authHeader = req.headers['authorization'];
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ message: 'Access denied. Token missing.' });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { id: string; role: 'student' | 'professional' | 'admin'; email: string };
    
    // Optional: Double check user still exists in DB
    // We fetch it but we can skip it for absolute speed unless needed.
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Session expired or invalid token.' });
  }
};

export const requireRole = (roles: ('student' | 'professional' | 'admin')[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Forbidden. You do not have permission to access this resource.' });
    }

    next();
  };
};

export const authMiddleware = authenticateToken;

