import { Timestamp } from 'firebase/firestore';

export type MentorRequestStatus = 'pending' | 'accepted' | 'rejected';

export interface MentorRequest {
  id: string;
  mentorId: string;
  studentId: string;
  status: MentorRequestStatus;
  message?: string;
  timestamp: Timestamp;
}

export interface Mentor {
  id: string;
  name: string;
  major: string;
  country: string;
  company?: string;
  role?: string;
  bio: string;
  expertise: string[];
  careerGoals: string[];
  availability: boolean;
  imageUrl?: string;
  studentsMatched?: string[];
}

export interface MentorMatch {
  mentor: Mentor;
  matchScore: number;
  commonalities: {
    major: boolean;
    country: boolean;
    goals: string[];
  };
} 