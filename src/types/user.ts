export interface User {
  id: string;
  name: string;
  email: string;
  photoURL?: string;
  role: 'student' | 'mentor' | 'admin';
  university?: string;
  major?: string;
  interests?: string;
  country?: string;
  createdAt: string;
  updatedAt: string;
} 