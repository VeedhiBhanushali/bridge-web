export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  imageUrl?: string;
  tags?: string[];
  maxAttendees: number;
  currentAttendees?: string[];
  attendees: string[];
  status?: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  isPublic?: boolean;
  createdBy?: string;
  clubId?: string;
  externalId?: string;
  source?: string;
  createdAt: string;
  updatedAt: string;
}

export interface EventUploadData {
  title: string;
  description: string;
  date: string;
  time?: string;
  location?: string;
  imageUrl?: string;
  tags?: string;
  maxAttendees?: number;
  externalId?: string;
  [key: string]: unknown; // For additional Excel columns
}

export interface EventUploadResult {
  success: boolean;
  event?: Event;
  error?: string;
  isDuplicate?: boolean;
  duplicateEvent?: Event;
} 