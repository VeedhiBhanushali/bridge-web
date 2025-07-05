export interface Club {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  category: 'academic' | 'sports' | 'arts' | 'technology' | 'social';
  meetingSchedule?: string;
  location?: string;
  maxMembers?: number;
  tags: string[];
  outcomes: string[];
  starterKit?: string[];
  members: string[];
  createdAt: string;
  updatedAt: string;
} 