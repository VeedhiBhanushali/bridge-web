export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  type: TimelineEventType;
  status: TimelineEventStatus;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export type TimelineEventType = 
  | 'APPLICATION'
  | 'ADMISSION'
  | 'VISA'
  | 'HOUSING'
  | 'ORIENTATION'
  | 'CLASSES'
  | 'CPT'
  | 'CUSTOM';

export type TimelineEventStatus = 
  | 'PENDING'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'CANCELLED'; 