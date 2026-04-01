'use client';

import { DashboardLayout } from '@/components/DashboardLayout';
import { useEffect, useState } from 'react';
import { db, convertDocumentTimestamps } from '@/lib/firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { User } from '@/types';
import toast from 'react-hot-toast';

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const usersSnapshot = await getDocs(collection(db, 'users'));
      
      const usersData = usersSnapshot.docs.map(doc => {
        const data = doc.data();
        // Use the utility function to convert all timestamps
        const convertedData = convertDocumentTimestamps(data);
        
        return {
          id: doc.id,
          ...convertedData,
        };
      }) as User[];
      
      setUsers(usersData);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (!confirm('Are you sure you want to delete this user?')) return;

    try {
      await deleteDoc(doc(db, 'users', userId));
      setUsers(users.filter(user => user.id !== userId));
      toast.success('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Failed to delete user');
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
          <h1 className="text-2xl font-bold text-gray-900">Users Management</h1>
          <div className="text-sm text-gray-600">
            Total Users: {users.length}
          </div>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {users.map((user) => (
              <li key={user.id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center min-w-0 flex-1">
                    <img
                      className="h-10 w-10 rounded-full flex-shrink-0"
                      src={user.photoURL || '/default-avatar.png'}
                      alt={user.name}
                    />
                    <div className="ml-4 min-w-0 flex-1">
                      <div className="text-sm font-medium text-gray-900 break-words">
                        {user.name}
                      </div>
                      <div className="text-sm text-gray-500 break-words">
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 flex-shrink-0">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full break-words ${
                      user.role === 'admin' 
                        ? 'bg-red-100 text-red-800'
                        : user.role === 'mentor'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {user.role}
                    </span>
                    <div className="text-sm text-gray-500 break-words">
                      {user.university || 'No university'}
                    </div>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="text-red-600 hover:text-red-900 text-sm font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                {user.major && (
                  <div className="mt-2 text-sm text-gray-600 break-words">
                    Major: {user.major}
                  </div>
                )}
                {user.interests && (
                  <div className="mt-1 text-sm text-gray-600 break-words">
                    Interests: {user.interests}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {users.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No users found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Users will appear here once they sign up for the platform.
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
} 