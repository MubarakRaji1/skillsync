import React from 'react';
import { Calendar, BookOpen, Users, BarChart } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Dashboard
          </h2>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { name: 'Total Sessions', stat: '24', icon: Calendar, color: 'bg-blue-500' },
          { name: 'Hours Mentored', stat: '48', icon: Users, color: 'bg-green-500' },
          { name: 'Resources Shared', stat: '12', icon: BookOpen, color: 'bg-purple-500' },
          { name: 'Rating', stat: '4.9/5', icon: BarChart, color: 'bg-yellow-500' },
        ].map((item) => (
          <div
            key={item.name}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className={`absolute rounded-md p-3 ${item.color}`}>
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">{item.name}</p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
            </dd>
          </div>
        ))}
      </div>

      {/* Upcoming Sessions */}
      <div className="mt-8">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Upcoming Sessions</h3>
        <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-md">
          <ul role="list" className="divide-y divide-gray-200">
            {[
              {
                mentor: 'Sarah Johnson',
                topic: 'React Performance Optimization',
                date: 'Mar 15, 2024',
                time: '3:00 PM',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
              },
              {
                mentor: 'Michael Chen',
                topic: 'Product Management Fundamentals',
                date: 'Mar 17, 2024',
                time: '2:00 PM',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
              },
            ].map((session, index) => (
              <li key={index}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={session.image}
                      alt={session.mentor}
                    />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">{session.mentor}</p>
                      <p className="text-sm text-gray-500">{session.topic}</p>
                    </div>
                    <div className="ml-auto">
                      <div className="text-sm text-gray-900">{session.date}</div>
                      <div className="text-sm text-gray-500">{session.time}</div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}