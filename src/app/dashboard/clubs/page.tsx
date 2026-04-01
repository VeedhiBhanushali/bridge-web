'use client';

import { DashboardLayout } from '@/components/DashboardLayout';
import { useEffect, useState } from 'react';
import { db, convertDocumentTimestamps } from '@/lib/firebase';
import { collection, getDocs, deleteDoc, doc, addDoc } from 'firebase/firestore';
import { Club } from '@/types';
import toast from 'react-hot-toast';

export default function ClubsPage() {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newClub, setNewClub] = useState({
    name: '',
    description: '',
    tags: '',
  });

  useEffect(() => {
    fetchClubs();
  }, []);

  const fetchClubs = async () => {
    try {
      const clubsSnapshot = await getDocs(collection(db, 'clubs'));
      
      const clubsData = clubsSnapshot.docs.map(doc => {
        const data = doc.data();
        // Use the utility function to convert all timestamps
        const convertedData = convertDocumentTimestamps(data);
        
        return {
          id: doc.id,
          ...convertedData,
        };
      }) as Club[];
      
      setClubs(clubsData);
    } catch (error) {
      console.error('Error fetching clubs:', error);
      toast.error('Failed to fetch clubs');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateClub = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const clubData = {
        ...newClub,
        tags: newClub.tags.split(',').map(tag => tag.trim()),
        members: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      await addDoc(collection(db, 'clubs'), clubData);
      toast.success('Club created successfully');
      setNewClub({ name: '', description: '', tags: '' });
      setShowCreateForm(false);
      fetchClubs();
    } catch (error) {
      console.error('Error creating club:', error);
      toast.error('Failed to create club');
    }
  };

  const handleDeleteClub = async (clubId: string) => {
    if (!confirm('Are you sure you want to delete this club?')) return;

    try {
      await deleteDoc(doc(db, 'clubs', clubId));
      setClubs(clubs.filter(club => club.id !== clubId));
      toast.success('Club deleted successfully');
    } catch (error) {
      console.error('Error deleting club:', error);
      toast.error('Failed to delete club');
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Clubs Management</h1>
          <button
            onClick={() => setShowCreateForm(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Create New Club
          </button>
        </div>

        {showCreateForm && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Create New Club</h2>
            <form onSubmit={handleCreateClub} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                  value={newClub.name}
                  onChange={(e) => setNewClub({ ...newClub, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                  rows={3}
                  value={newClub.description}
                  onChange={(e) => setNewClub({ ...newClub, description: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Tags (comma-separated)</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                  value={newClub.tags}
                  onChange={(e) => setNewClub({ ...newClub, tags: e.target.value })}
                  placeholder="e.g., technology, networking, career"
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Create Club
                </button>
                <button
                  type="button"
                  onClick={() => setShowCreateForm(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club) => (
            <div key={club.id} className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900 break-words pr-2">{club.name}</h3>
                <button
                  onClick={() => handleDeleteClub(club.id)}
                  className="text-red-600 hover:text-red-900 flex-shrink-0"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 mb-4 break-words overflow-hidden">{club.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {club.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full break-words"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span className="break-words">{club.members.length} members</span>
                <span className="break-words">{new Date(club.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>

        {clubs.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No clubs found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Get started by creating your first club.
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
} 