import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, UserCredential } from 'firebase/auth';

// Google OAuth Client ID provided by Firebase Project
export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '9949998046-54secmerttj8cn7mr4pq43gndcq9h76r.apps.googleusercontent.com';

// Firebase Project Web Configuration for futuro-ai-8ef47
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'AIzaSyA_DemoKey_FuturoAI_2026',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'futuro-ai-8ef47.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'futuro-ai-8ef47',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'futuro-ai-8ef47.appspot.com',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '9949998046',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:9949998046:web:a1b2c3d4e5f6'
};

// Initialize Firebase App singleton
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Configure Google Auth Provider
export const provider = new GoogleAuthProvider();
provider.addScope('email');
provider.addScope('profile');
provider.addScope('openid');
provider.setCustomParameters({
  prompt: 'select_account consent'
});
export const googleProvider = provider;

/**
 * Trigger Firebase Google Auth Popup
 */
export const signInWithGooglePopup = async () => {
  try {
    const result: UserCredential = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const accessToken = credential?.accessToken;
    const user = result.user;
    
    if (!user || !user.email) {
      throw new Error('Google authentication returned empty user profile details.');
    }

    console.log("Successfully signed in:", user.displayName);
    return {
      email: user.email,
      displayName: user.displayName || user.email.split('@')[0],
      uid: user.uid,
      photoURL: user.photoURL || undefined,
      accessToken
    };
  } catch (error: any) {
    console.error('Error during sign-in:', error.message || error);
    throw error;
  }
};

export default app;
