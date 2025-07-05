'use client';

import { DashboardLayout } from '@/components/DashboardLayout';
import { useEffect, useState } from 'react';
import { db, convertDocumentTimestamps } from '@/lib/firebase';
import { collection, getDocs, deleteDoc, doc, addDoc, Timestamp } from 'firebase/firestore';
import { Nudge, NUDGE_TRIGGERS } from '@/types';
import toast from 'react-hot-toast';

export default function NudgesPage() {
  const [nudges, setNudges] = useState<Nudge[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newNudge, setNewNudge] = useState({
    title: '',
    message: '',
    type: 'info',
    trigger: 'CUSTOM' as typeof NUDGE_TRIGGERS[number],
    targetAudience: '',
  });

  useEffect(() => {
    fetchNudges();
  }, []);

  const fetchNudges = async () => {
    try {
      const nudgesSnapshot = await getDocs(collection(db, 'nudges'));
      
      const nudgesData = nudgesSnapshot.docs.map(doc => {
        const data = doc.data();
        // Use the utility function to convert all timestamps
        const convertedData = convertDocumentTimestamps(data);
        
        return {
          id: doc.id,
          ...convertedData,
        };
      }) as Nudge[];
      
      setNudges(nudgesData);
    } catch (error) {
      console.error('Error fetching nudges:', error);
      toast.error('Failed to fetch nudges');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNudge = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const nudgeData = {
        ...newNudge,
        targetAudience: newNudge.targetAudience.split(',').map(audience => audience.trim()),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      await addDoc(collection(db, 'nudges'), nudgeData);
      toast.success('Nudge created successfully');
      setNewNudge({ title: '', message: '', type: 'info', trigger: 'CUSTOM', targetAudience: '' });
      setShowCreateForm(false);
      fetchNudges();
    } catch (error) {
      console.error('Error creating nudge:', error);
      toast.error('Failed to create nudge');
    }
  };

  const handleDeleteNudge = async (nudgeId: string) => {
    if (!confirm('Are you sure you want to delete this nudge?')) return;

    try {
      await deleteDoc(doc(db, 'nudges', nudgeId));
      setNudges(nudges.filter(nudge => nudge.id !== nudgeId));
      toast.success('Nudge deleted successfully');
    } catch (error) {
      console.error('Error deleting nudge:', error);
      toast.error('Failed to delete nudge');
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
          <h1 className="text-2xl font-bold text-gray-900">Nudges Management</h1>
          <button
            onClick={() => setShowCreateForm(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Create New Nudge
          </button>
        </div>

        {showCreateForm && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Create New Nudge</h2>
            <form onSubmit={handleCreateNudge} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                  value={newNudge.title}
                  onChange={(e) => setNewNudge({ ...newNudge, title: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                  rows={3}
                  value={newNudge.message}
                  onChange={(e) => setNewNudge({ ...newNudge, message: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Type</label>
                  <select
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                    value={newNudge.type}
                    onChange={(e) => setNewNudge({ ...newNudge, type: e.target.value })}
                  >
                    <option value="info">Info</option>
                    <option value="warning">Warning</option>
                    <option value="success">Success</option>
                    <option value="error">Error</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Trigger</label>
                  <select
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                    value={newNudge.trigger}
                    onChange={(e) => setNewNudge({ ...newNudge, trigger: e.target.value as typeof NUDGE_TRIGGERS[number] })}
                  >
                    {NUDGE_TRIGGERS.map(trigger => (
                      <option key={trigger} value={trigger}>
                        {trigger.replace('_', ' ')}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Target Audience (comma-separated)</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                  value={newNudge.targetAudience}
                  onChange={(e) => setNewNudge({ ...newNudge, targetAudience: e.target.value })}
                  placeholder="e.g., students, mentors, all"
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Create Nudge
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
          {nudges.map((nudge) => (
            <div key={nudge.id} className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900 break-words pr-2">{nudge.title}</h3>
                <button
                  onClick={() => handleDeleteNudge(nudge.id)}
                  className="text-red-600 hover:text-red-900 flex-shrink-0"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 mb-4 break-words overflow-hidden">{nudge.message}</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full break-words ${
                    nudge.type === 'info' ? 'bg-blue-100 text-blue-800' :
                    nudge.type === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                    nudge.type === 'success' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {nudge.type}
                  </span>
                  <span className="text-xs text-gray-500 break-words ml-2">
                    {nudge.trigger.replace('_', ' ')}
                  </span>
                </div>
                <div className="text-sm text-gray-500 break-words">
                  Target: {nudge.targetAudience.join(', ')}
                </div>
                <div className="text-xs text-gray-400 break-words">
                  Created: {new Date(nudge.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {nudges.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h7a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No nudges found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Get started by creating your first nudge.
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
} 