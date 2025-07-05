// src/lib/syncUser.ts
import { User } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

export const syncUserToFirestore = async (user: User) => {
  try {
    const userDocRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userDocRef);
    
    if (!userDoc.exists()) {
      // Create new user document
      await setDoc(userDocRef, {
        id: user.uid,
        name: user.displayName || 'Unknown User',
        email: user.email || '',
        photoURL: user.photoURL || '',
        role: 'student', // Default role
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      console.log('✅ New user synced to Firestore');
    } else {
      // Update existing user document
      await setDoc(userDocRef, {
        name: user.displayName || userDoc.data().name,
        email: user.email || userDoc.data().email,
        photoURL: user.photoURL || userDoc.data().photoURL,
        updatedAt: new Date().toISOString(),
      }, { merge: true });
      console.log('✅ Existing user updated in Firestore');
    }
  } catch (error) {
    console.error('❌ Error syncing user to Firestore:', error);
  }
};
