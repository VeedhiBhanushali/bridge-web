'use client';

import { DashboardLayout } from '@/components/DashboardLayout';

export default function AdminHelpPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Help & Documentation</h1>
          <p className="text-gray-600">Everything you need to know about managing the Bridge platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Users Management */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Users Management</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <div>
                <h3 className="font-medium text-gray-900">Viewing Users</h3>
                <p>Navigate to the Users page to see all registered users, their roles, and profile information.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">User Roles</h3>
                <ul className="list-disc list-inside ml-4">
                  <li><strong>Student:</strong> Regular platform users</li>
                  <li><strong>Mentor:</strong> Users who can guide students</li>
                  <li><strong>Admin:</strong> Platform administrators</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Deleting Users</h3>
                <p>
                  Click the &quot;Delete&quot; button next to any user to remove them from the platform. This action is
                  permanent.
                </p>
              </div>
            </div>
          </div>

          {/* Clubs Management */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Clubs Management</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <div>
                <h3 className="font-medium text-gray-900">Creating Clubs</h3>
                <p>
                  Use the &quot;Create New Club&quot; button to add new student organizations to the platform.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Club Information</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>Name and description</li>
                  <li>Tags for categorization</li>
                  <li>Member count tracking</li>
                  <li>Creation date</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Managing Clubs</h3>
                <p>View all clubs in a card layout, see member counts, and delete clubs when necessary.</p>
              </div>
            </div>
          </div>

          {/* Events Management */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Events Management</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <div>
                <h3 className="font-medium text-gray-900">Creating Events</h3>
                <p>Schedule campus events with date, time, location, and attendee limits.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Event Details</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>Title and description</li>
                  <li>Date and time</li>
                  <li>Location information</li>
                  <li>Maximum attendees</li>
                  <li>Current attendee count</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Event Tracking</h3>
                <p>Monitor event attendance and manage capacity limits for each event.</p>
              </div>
            </div>
          </div>

          {/* Nudges Management */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Nudges Management</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <div>
                <h3 className="font-medium text-gray-900">What are Nudges?</h3>
                <p>Nudges are targeted messages sent to users to encourage engagement and guide behavior.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Nudge Types</h3>
                <ul className="list-disc list-inside ml-4">
                  <li><strong>Info:</strong> General information</li>
                  <li><strong>Warning:</strong> Important notices</li>
                  <li><strong>Success:</strong> Positive reinforcement</li>
                  <li><strong>Error:</strong> Critical alerts</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Triggers</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>Onboarding: New user welcome</li>
                  <li>Weekly Check-in: Regular engagement</li>
                  <li>Event Reminder: Upcoming events</li>
                  <li>Deadline Reminder: Important dates</li>
                  <li>Custom: Manual triggers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="/dashboard/users"
              className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <div className="text-blue-600 font-medium">Manage Users</div>
              <div className="text-sm text-gray-600">View and manage all users</div>
            </a>
            <a
              href="/dashboard/clubs"
              className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <div className="text-green-600 font-medium">Manage Clubs</div>
              <div className="text-sm text-gray-600">Create and manage clubs</div>
            </a>
            <a
              href="/dashboard/events"
              className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <div className="text-purple-600 font-medium">Manage Events</div>
              <div className="text-sm text-gray-600">Schedule and track events</div>
            </a>
            <a
              href="/dashboard/nudges"
              className="p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
            >
              <div className="text-yellow-600 font-medium">Manage Nudges</div>
              <div className="text-sm text-gray-600">Create user nudges</div>
            </a>
          </div>
        </div>

        {/* System Information */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">System Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Platform Features</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• User authentication and profiles</li>
                <li>• Club and event management</li>
                <li>• Nudge system for engagement</li>
                <li>• Admin dashboard for oversight</li>
                <li>• Real-time data synchronization</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Support</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>For technical support or questions about the platform:</p>
                <p>• Check the documentation</p>
                <p>• Review system logs</p>
                <p>• Contact the development team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 