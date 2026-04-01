'use client';

import { DashboardLayout } from '@/components/DashboardLayout';
import { useEffect, useState } from 'react';
import { db, convertDocumentTimestamps } from '@/lib/firebase';
import { collection, getDocs, deleteDoc, doc, addDoc } from 'firebase/firestore';
import { Event } from '@/types';
import toast from 'react-hot-toast';

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    maxAttendees: '',
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const eventsSnapshot = await getDocs(collection(db, 'events'));
      
      const eventsData = eventsSnapshot.docs.map(doc => {
        const data = doc.data();
        
        // Use the utility function to convert all timestamps
        const convertedData = convertDocumentTimestamps(data);
        
        return {
          id: doc.id,
          title: convertedData.title || 'Untitled Event',
          description: convertedData.description || 'No description',
          date: convertedData.date || '',
          time: convertedData.time || '',
          location: convertedData.location || '',
          attendees: convertedData.attendees || [],
          currentAttendees: convertedData.currentAttendees || [],
          tags: convertedData.tags || [],
          maxAttendees: convertedData.maxAttendees || 0,
          createdAt: convertedData.createdAt || new Date().toISOString(),
          updatedAt: convertedData.updatedAt || new Date().toISOString(),
        };
      }) as Event[];
      
      setEvents(eventsData);
      setError(null);
    } catch (error) {
      console.error('Error fetching events:', error);
      setError('Failed to fetch events');
      toast.error('Failed to fetch events');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const eventData = {
        ...newEvent,
        maxAttendees: parseInt(newEvent.maxAttendees),
        attendees: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      await addDoc(collection(db, 'events'), eventData);
      toast.success('Event created successfully');
      setNewEvent({ title: '', description: '', date: '', time: '', location: '', maxAttendees: '' });
      setShowCreateForm(false);
      fetchEvents();
    } catch (error) {
      console.error('Error creating event:', error);
      toast.error('Failed to create event');
    }
  };

  const handleDeleteEvent = async (eventId: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return;

    try {
      await deleteDoc(doc(db, 'events', eventId));
      setEvents(events.filter(event => event.id !== eventId));
      toast.success('Event deleted successfully');
    } catch (error) {
      console.error('Error deleting event:', error);
      toast.error('Failed to delete event');
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

  if (error) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="text-red-500 mb-4">Error: {error}</div>
            <button 
              onClick={() => {
                setError(null);
                setLoading(true);
                fetchEvents();
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Retry
            </button>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Events Management</h1>
          <button
            onClick={() => setShowCreateForm(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Create New Event
          </button>
        </div>

        {showCreateForm && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Create New Event</h2>
            <form onSubmit={handleCreateEvent} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Title</label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input
                    type="date"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Time</label>
                  <input
                    type="time"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                    value={newEvent.time}
                    onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                  rows={3}
                  value={newEvent.description}
                  onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Max Attendees</label>
                <input
                  type="number"
                  min="1"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                  value={newEvent.maxAttendees}
                  onChange={(e) => setNewEvent({ ...newEvent, maxAttendees: e.target.value })}
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Create Event
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
          {events.map((event) => (
            <div key={event.id} className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900 break-words pr-2">{event.title}</h3>
                <button
                  onClick={() => handleDeleteEvent(event.id)}
                  className="text-red-600 hover:text-red-900 flex-shrink-0"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 mb-4 break-words overflow-hidden">{event.description}</p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="break-words">{event.date} at {event.time || 'TBD'}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="break-words">{event.location || 'TBD'}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                  <span className="break-words">{(event.attendees || []).length} / {event.maxAttendees || 0} attendees</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {events.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No events found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Get started by creating your first event.
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
} 