'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { db } from '@/lib/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { DashboardLayout } from '@/components/DashboardLayout';

type ProfileData = {
  name: string;
  email: string;
  photoURL: string;
  role: string;
  country?: string;
  major?: string;
  interests?: string;
};

export default function ProfilePage() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) {
      const fetchProfile = async () => {
        const docRef = doc(db, 'users', user.uid);
        const snap = await getDoc(docRef);

        if (snap.exists()) {
          setProfile(snap.data() as ProfileData);
        }

        setLoading(false);
      };

      fetchProfile();
    }
  }, [user]);

  const handleChange = (field: keyof ProfileData, value: string) => {
    setProfile((prev) => (prev ? { ...prev, [field]: value } : prev));
  };

  const handleSave = async () => {
    if (!user || !profile) return;

    setSaving(true);

    const docRef = doc(db, 'users', user.uid);
    await updateDoc(docRef, {
      country: profile.country || '',
      major: profile.major || '',
      interests: profile.interests || '',
    });

    setSaving(false);
    toast.success('✅ Profile updated!');
  };

  if (loading || !profile) return <p className="p-6">Loading profile...</p>;

  return (
    <DashboardLayout>
      <div className="p-6 max-w-2xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">Your Profile</h1>

        <div className="flex items-center space-x-4">
          <img
            src={profile.photoURL}
            alt={profile.name}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <p className="text-lg font-semibold">{profile.name}</p>
            <p className="text-sm text-gray-500">{profile.email}</p>
            <span className="text-xs text-white bg-blue-300 px-2 py-1 rounded">
              {profile.role}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Country</label>
            <input
              type="text"
              className="border px-3 py-2 w-full rounded"
              value={profile.country || ''}
              onChange={(e) => handleChange('country', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Major</label>
            <input
              type="text"
              className="border px-3 py-2 w-full rounded"
              value={profile.major || ''}
              onChange={(e) => handleChange('major', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Interests</label>
            <input
              type="text"
              className="border px-3 py-2 w-full rounded"
              value={profile.interests || ''}
              onChange={(e) => handleChange('interests', e.target.value)}
            />
          </div>

          <button
            className="bg-blue-300 text-white px-4 py-2 rounded hover:bg-blue-400"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>

        <div className="mt-6 flex justify-end">
          <button 
            className="bg-blue-300 text-white px-4 py-2 rounded hover:bg-blue-400"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
