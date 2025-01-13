import React, { useState } from 'react';
import { Search, Filter, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Mentors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('all');

  const mentors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      expertise: 'Software Engineering',
      specialization: 'React, Node.js',
      rating: 4.9,
      sessions: 127,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 2,
      name: 'Michael Chen',
      expertise: 'Product Management',
      specialization: 'Product Strategy, UX',
      rating: 4.8,
      sessions: 98,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      expertise: 'UX Design',
      specialization: 'UI/UX, Design Systems',
      rating: 4.9,
      sessions: 156,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 4,
      name: 'David Kim',
      expertise: 'Data Science',
      specialization: 'Machine Learning, Python',
      rating: 4.7,
      sessions: 89,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    },
  ];

  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.expertise.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesExpertise = selectedExpertise === 'all' || mentor.expertise === selectedExpertise;
    
    return matchesSearch && matchesExpertise;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="md:flex md:items-center md:justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Find Your Mentor</h2>
      </div>

      {/* Search and Filter */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="Search mentors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="sm:w-64">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-5 w-5 text-gray-400" />
            </div>
            <select
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              value={selectedExpertise}
              onChange={(e) => setSelectedExpertise(e.target.value)}
            >
              <option value="all">All Expertise</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Product Management">Product Management</option>
              <option value="UX Design">UX Design</option>
              <option value="Data Science">Data Science</option>
            </select>
          </div>
        </div>
      </div>

      {/* Mentors Grid */}
      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredMentors.map((mentor) => (
          <div key={mentor.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <img
                className="w-full h-full object-cover"
                src={mentor.image}
                alt={mentor.name}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
              <p className="mt-1 text-gray-600">{mentor.expertise}</p>
              <p className="mt-1 text-sm text-gray-500">{mentor.specialization}</p>
              <div className="mt-4 flex items-center">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="ml-2 text-gray-600">{mentor.rating}</span>
                <span className="mx-2">•</span>
                <span className="text-gray-600">{mentor.sessions} sessions</span>
              </div>
              <Link
                to={`/booking/${mentor.id}`}
                className="mt-6 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Book a Session
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}