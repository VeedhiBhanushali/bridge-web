export interface Post {
  id: string;
  userId: string;
  content: string;
  createdAt: string;
  flagged?: boolean;
  flaggedReason?: string;
  adminAnnouncement?: boolean;
  commentsCount?: number;
  likesCount?: number;
} 