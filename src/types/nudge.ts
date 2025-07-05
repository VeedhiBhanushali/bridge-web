export type NUDGE_TRIGGER = 
  | 'ONBOARDING'
  | 'WEEKLY_CHECKIN'
  | 'EVENT_REMINDER'
  | 'DEADLINE_REMINDER'
  | 'CUSTOM';

export const NUDGE_TRIGGERS: NUDGE_TRIGGER[] = [
  'ONBOARDING',
  'WEEKLY_CHECKIN',
  'EVENT_REMINDER',
  'DEADLINE_REMINDER',
  'CUSTOM'
];

export interface Nudge {
  id: string;
  title: string;
  message: string;
  type: string;
  trigger: NUDGE_TRIGGER;
  targetAudience: string[];
  createdAt: string;
  updatedAt: string;
} 