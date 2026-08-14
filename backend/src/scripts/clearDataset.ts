import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {
  User,
  Assessment,
  Goal,
  Resume,
  InterviewSession,
  ChatMessage,
  MarksheetAnalysis,
  EbookBookmark,
  CalendarEvent,
  CertificationProgress,
  ProjectBlueprint
} from '../models/Schemas';

dotenv.config();

export async function clearAllUserData() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/futuro-ai';
  console.log(`[ClearDataset] Connecting to MongoDB at ${uri}...`);
  try {
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 4000 });
    console.log('[ClearDataset] Connected to MongoDB.');

    const userRes = await User.deleteMany({});
    const assessmentRes = await Assessment.deleteMany({});
    const goalRes = await Goal.deleteMany({});
    const resumeRes = await Resume.deleteMany({});
    const interviewRes = await InterviewSession.deleteMany({});
    const chatRes = await ChatMessage.deleteMany({});
    const marksheetRes = await MarksheetAnalysis.deleteMany({});
    const ebookRes = await EbookBookmark.deleteMany({});
    const calendarRes = await CalendarEvent.deleteMany({});
    const certRes = await CertificationProgress.deleteMany({});
    const projectRes = await ProjectBlueprint.deleteMany({});

    const summary = {
      usersDeleted: userRes.deletedCount || 0,
      assessmentsDeleted: assessmentRes.deletedCount || 0,
      goalsDeleted: goalRes.deletedCount || 0,
      resumesDeleted: resumeRes.deletedCount || 0,
      interviewsDeleted: interviewRes.deletedCount || 0,
      chatMessagesDeleted: chatRes.deletedCount || 0,
      marksheetsDeleted: marksheetRes.deletedCount || 0,
      ebookBookmarksDeleted: ebookRes.deletedCount || 0,
      calendarEventsDeleted: calendarRes.deletedCount || 0,
      certificationProgressDeleted: certRes.deletedCount || 0,
      projectBlueprintsDeleted: projectRes.deletedCount || 0,
    };

    console.log('[ClearDataset] Dataset cleared successfully:', summary);
    return summary;
  } catch (error) {
    console.error('[ClearDataset] Error clearing dataset:', error);
    throw error;
  }
}

// Executed directly via command line
if (require.main === module) {
  clearAllUserData()
    .then(() => {
      console.log('[ClearDataset] Direct execution complete.');
      process.exit(0);
    })
    .catch((err) => {
      console.error('[ClearDataset] Direct execution failed:', err);
      process.exit(1);
    });
}
