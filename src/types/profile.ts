export type StudentStage = 'APPLYING' | 'ADMITTED' | 'STUDYING' | 'CPT';

export interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  stage: StudentStage;
  isRequired: boolean;
  order: number;
}

export interface StageChecklist {
  completed: string[];
  inProgress: string[];
  notStarted: string[];
}

export interface ProfileCompletion {
  APPLYING?: StageChecklist;
  ADMITTED?: StageChecklist;
  STUDYING?: StageChecklist;
  CPT?: StageChecklist;
}

export interface UserPreferences {
  notifications: boolean;
  emailUpdates: boolean;
  darkMode: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  photoURL?: string;
  major?: string;
  country?: string;
  university?: string;
  graduationYear?: number;
  careerGoals?: string[];
  interests?: string[];
  bio?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: 'apply_visa',
    title: 'Apply for Student Visa',
    description: 'Complete the visa application process',
    stage: 'ADMITTED',
    isRequired: true,
    order: 1
  },
  {
    id: 'find_housing',
    title: 'Find Housing',
    description: 'Secure accommodation for your stay',
    stage: 'ADMITTED',
    isRequired: true,
    order: 2
  },
  {
    id: 'register_classes',
    title: 'Register for Classes',
    description: 'Select and register for your courses',
    stage: 'STUDYING',
    isRequired: true,
    order: 1
  },
  {
    id: 'get_cpt',
    title: 'Apply for CPT',
    description: 'Complete the Curricular Practical Training application',
    stage: 'CPT',
    isRequired: true,
    order: 1
  }
]; 