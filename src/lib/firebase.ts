// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  type DocumentData,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Club } from '../types/club';
import { Nudge } from '../types/nudge';
import { Mentor, MentorMatch } from '../types/mentor';
import { Post } from '../types/post';
import { User } from '../types/user';
import { UserProfile } from '../types/profile';
import { Event, EventUploadData, EventUploadResult } from '../types/event';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC02jvmEnBuJzpsKPUAJdkWHV5tnDDwhgY",
  authDomain: "bridge-app-d3a59.firebaseapp.com",
  projectId: "bridge-app-d3a59",
  storageBucket: "bridge-app-d3a59.firebasestorage.app",
  messagingSenderId: "37327431767",
  appId: "1:37327431767:web:5c2574e9ce0e92a2741b12",
  measurementId: "G-JL81CG0HXP"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// NUDGES ADMIN HELPERS
const nudgesRef = collection(db, 'nudges');

export async function getNudges(): Promise<Nudge[]> {
  const snapshot = await getDocs(nudgesRef);
  return snapshot.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() } as Nudge));
}

export async function addNudge(nudge: Omit<Nudge, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  const now = new Date().toISOString();
  const docRef = await addDoc(nudgesRef, {
    ...nudge,
    createdAt: now,
    updatedAt: now
  });
  return docRef.id;
}

export async function updateNudge(id: string, updates: Partial<Nudge>): Promise<void> {
  await updateDoc(doc(nudgesRef, id), {
    ...updates,
    updatedAt: new Date().toISOString()
  });
}

export async function deleteNudge(id: string): Promise<void> {
  await deleteDoc(doc(nudgesRef, id));
}

// POSTS ADMIN HELPERS
const postsRef = collection(db, 'posts');

export async function getPosts(): Promise<Post[]> {
  const snapshot = await getDocs(postsRef);
  return snapshot.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() } as Post));
}

export async function flagPost(id: string, reason: string): Promise<void> {
  await updateDoc(doc(postsRef, id), {
    flagged: true,
    flaggedReason: reason
  });
}

export async function deletePost(id: string): Promise<void> {
  await deleteDoc(doc(postsRef, id));
}

export async function createAdminAnnouncement(content: string): Promise<string> {
  const now = new Date().toISOString();
  const docRef = await addDoc(postsRef, {
    userId: 'admin',
    content,
    createdAt: now,
    adminAnnouncement: true
  });
  return docRef.id;
}

// CLUBS ADMIN HELPERS
const clubsRef = collection(db, 'clubs');

export async function getClubs(): Promise<Club[]> {
  const snapshot = await getDocs(clubsRef);
  return snapshot.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() } as Club));
}

export async function addClub(club: Omit<Club, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  const now = new Date().toISOString();
  const docRef = await addDoc(clubsRef, {
    ...club,
    createdAt: now,
    updatedAt: now
  });
  return docRef.id;
}

export async function updateClub(id: string, updates: Partial<Club>): Promise<void> {
  await updateDoc(doc(clubsRef, id), {
    ...updates,
    updatedAt: new Date().toISOString()
  });
}

export async function deleteClub(id: string): Promise<void> {
  await deleteDoc(doc(clubsRef, id));
}

// MENTORS ADMIN HELPERS
const mentorsRef = collection(db, 'mentors');

export async function getMentors(): Promise<Mentor[]> {
  const snapshot = await getDocs(mentorsRef);
  return snapshot.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() } as Mentor));
}

export async function addMentor(mentor: Omit<Mentor, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  const now = new Date().toISOString();
  const docRef = await addDoc(mentorsRef, {
    ...mentor,
    createdAt: now,
    updatedAt: now
  });
  return docRef.id;
}

export async function updateMentor(id: string, updates: Partial<Mentor>): Promise<void> {
  await updateDoc(doc(mentorsRef, id), {
    ...updates,
    updatedAt: new Date().toISOString()
  });
}

export async function deleteMentor(id: string): Promise<void> {
  await deleteDoc(doc(mentorsRef, id));
}

// USERS ADMIN HELPERS
const usersRef = collection(db, 'users');

export async function getUsers(): Promise<User[]> {
  const snapshot = await getDocs(usersRef);
  return snapshot.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() } as User));
}

export async function updateUser(id: string, updates: Partial<User>): Promise<void> {
  await updateDoc(doc(usersRef, id), {
    ...updates,
    updatedAt: new Date().toISOString()
  });
}

export async function deleteUser(id: string): Promise<void> {
  await deleteDoc(doc(usersRef, id));
}

export async function getUserById(uid: string): Promise<User | null> {
  const userRef = doc(usersRef, uid);
  const snapshot = await getDoc(userRef);
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() } as User;
}

// ANALYTICS HELPERS (mock implementations)
export async function getActiveUsers(days: number): Promise<number> {
  // TODO: Replace with real Firestore query
  return days === 7 ? 123 : 456;
}

export async function getTopPrompts(): Promise<{ prompt: string; uses: number }[]> {
  // TODO: Replace with real Firestore query
  return [
    { prompt: 'How do I get CPT?', uses: 42 },
    { prompt: 'Best clubs for CS majors?', uses: 35 },
  ];
}

export async function getMostCompletedNudges(): Promise<{ nudge: string; completions: number }[]> {
  // TODO: Replace with real Firestore query
  return [
    { nudge: 'Upload your resume', completions: 38 },
    { nudge: 'Join a club', completions: 29 },
  ];
}

export async function getProfileFunnel(): Promise<{ stage: string; count: number }[]> {
  // TODO: Replace with real Firestore query
  return [
    { stage: 'Signed up', count: 200 },
    { stage: 'Onboarded', count: 150 },
    { stage: 'Active in Bri', count: 120 },
    { stage: 'Completed CPT', count: 40 },
  ];
}

export const getSuggestedMentors = async (userProfile: UserProfile): Promise<MentorMatch[]> => {
  try {
    const mentors = await getMentors();
    return mentors
      .map(mentor => {
        const commonalities = {
          major: mentor.major.toLowerCase() === userProfile.major?.toLowerCase(),
          country: mentor.country.toLowerCase() === userProfile.country?.toLowerCase(),
          goals: mentor.careerGoals.filter(goal => 
            userProfile.careerGoals?.includes(goal.toLowerCase())
          )
        };
        
        const matchScore = (
          (commonalities.major ? 3 : 0) +
          (commonalities.country ? 2 : 0) +
          (commonalities.goals.length * 1)
        );

        return {
          mentor,
          matchScore,
          commonalities
        };
      })
      .filter(match => match.matchScore > 0)
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 3);
  } catch (error) {
    console.error('Error getting suggested mentors:', error);
    throw error;
  }
};

// EVENTS ADMIN HELPERS
const eventsRef = collection(db, 'events');

export async function getEvents(): Promise<Event[]> {
  const snapshot = await getDocs(eventsRef);
  return snapshot.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() } as Event));
}

export async function getEventsByClub(clubId: string): Promise<Event[]> {
  const snapshot = await getDocs(eventsRef);
  return snapshot.docs
    .map(docSnap => ({ id: docSnap.id, ...docSnap.data() } as Event))
    .filter(event => event.clubId === clubId);
}

export async function addEvent(event: Omit<Event, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  const now = new Date().toISOString();
  const docRef = await addDoc(eventsRef, {
    ...event,
    createdAt: now,
    updatedAt: now
  });
  return docRef.id;
}

export async function updateEvent(id: string, updates: Partial<Event>): Promise<void> {
  await updateDoc(doc(eventsRef, id), {
    ...updates,
    updatedAt: new Date().toISOString()
  });
}

export async function deleteEvent(id: string): Promise<void> {
  await deleteDoc(doc(eventsRef, id));
}

// Deduplication logic
export async function checkEventDuplicate(
  title: string, 
  date: string, 
  externalId?: string
): Promise<Event | null> {
  const events = await getEvents();
  
  // Check by externalId first (most reliable)
  if (externalId) {
    const duplicate = events.find(event => event.externalId === externalId);
    if (duplicate) return duplicate;
  }
  
  // Check by title and date combination
  const duplicate = events.find(event => 
    event.title.toLowerCase() === title.toLowerCase() && 
    event.date === date
  );
  
  return duplicate || null;
}

// Upload events with deduplication
export async function uploadEvents(
  eventsData: EventUploadData[], 
  createdBy: string, 
  clubId?: string
): Promise<EventUploadResult[]> {
  const results: EventUploadResult[] = [];
  
  for (const data of eventsData) {
    try {
      // Check for duplicates
      const duplicate = await checkEventDuplicate(data.title, data.date, data.externalId);
      
      if (duplicate) {
        results.push({
          success: false,
          isDuplicate: true,
          duplicateEvent: duplicate,
          error: 'Event already exists'
        });
        continue;
      }
      
      // Create new event
      const eventData: Omit<Event, 'id' | 'createdAt' | 'updatedAt'> = {
        title: data.title,
        description: data.description,
        date: data.date,
        time: data.time || '',
        location: data.location || '',
        imageUrl: data.imageUrl,
        tags: data.tags ? data.tags.split(',').map(t => t.trim()) : [],
        maxAttendees: data.maxAttendees ? parseInt(data.maxAttendees.toString()) : 0,
        currentAttendees: [],
        attendees: [],
        status: 'upcoming',
        isPublic: true,
        createdBy,
        clubId,
        externalId: data.externalId,
        source: 'excel-upload'
      };
      
      const eventId = await addEvent(eventData);
      const newEvent = await getDoc(doc(eventsRef, eventId));
      
      results.push({
        success: true,
        event: { id: eventId, ...newEvent.data() } as Event
      });
      
    } catch (error) {
      results.push({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }
  
  return results;
}

// Image upload helper
export async function uploadEventImage(file: File): Promise<string> {
  const timestamp = Date.now();
  const fileName = `events/${timestamp}_${file.name}`;
  const storageRef = ref(storage, fileName);
  
  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
  
  return downloadURL;
}

// RSVP HELPERS
export async function addRSVP(eventId: string, userId: string, name: string) {
  const attendeeRef = doc(db, `event_attendees/${eventId}/attendees`, userId);
  await setDoc(attendeeRef, {
    userId,
    name,
    timestamp: new Date().toISOString(),
  });
}

export async function removeRSVP(eventId: string, userId: string) {
  const attendeeRef = doc(db, `event_attendees/${eventId}/attendees`, userId);
  await deleteDoc(attendeeRef);
}

export async function getRSVPs(eventId: string): Promise<{ userId: string; name: string; timestamp: string }[]> {
  const attendeesRef = collection(db, `event_attendees/${eventId}/attendees`);
  const snapshot = await getDocs(attendeesRef);
  return snapshot.docs.map(docSnap => docSnap.data() as { userId: string; name: string; timestamp: string });
}

export async function checkUserRSVP(eventId: string, userId: string): Promise<boolean> {
  const attendeeRef = doc(db, `event_attendees/${eventId}/attendees`, userId);
  const snapshot = await getDoc(attendeeRef);
  return snapshot.exists();
}

type FirestoreTimestampLike = { seconds: number; nanoseconds?: number };

// Utility function to convert Firestore Timestamp objects to strings
export const convertFirestoreTimestamp = (timestamp: unknown): string => {
  if (!timestamp) {
    return new Date().toISOString();
  }
  
  // Check if it's a Firestore Timestamp object
  if (timestamp && typeof timestamp === 'object' && 'seconds' in timestamp) {
    const ts = timestamp as FirestoreTimestampLike;
    return new Date(ts.seconds * 1000).toISOString();
  }
  
  // Check if it's already a Date object
  if (timestamp instanceof Date) {
    return timestamp.toISOString();
  }
  
  // Check if it's a string
  if (typeof timestamp === 'string') {
    return timestamp;
  }
  
  // Check if it's a number (Unix timestamp)
  if (typeof timestamp === 'number') {
    return new Date(timestamp).toISOString();
  }
  
  // Default fallback
  return new Date().toISOString();
};

// Utility function to recursively convert all timestamp objects in a document
export function convertDocumentTimestamps(data: DocumentData): Record<string, unknown>;
export function convertDocumentTimestamps(doc: unknown): unknown;
export function convertDocumentTimestamps(doc: unknown): unknown {
  if (!doc || typeof doc !== 'object') {
    return doc;
  }
  
  if (Array.isArray(doc)) {
    return doc.map(convertDocumentTimestamps);
  }
  
  const converted: Record<string, unknown> = {};
  
  for (const [key, value] of Object.entries(doc as Record<string, unknown>)) {
    // Check if this field might be a timestamp
    if (key.includes('At') || key.includes('Date') || key.includes('Time')) {
      converted[key] = convertFirestoreTimestamp(value);
    } else if (value && typeof value === 'object' && 'seconds' in value) {
      // It's a Firestore Timestamp object
      converted[key] = convertFirestoreTimestamp(value);
    } else if (value && typeof value === 'object') {
      // Recursively convert nested objects
      converted[key] = convertDocumentTimestamps(value);
    } else {
      converted[key] = value;
    }
  }
  
  return converted;
}

export default app;