import React from 'react';
import { BookOpen, Download, Star } from 'lucide-react';

export function Resources() {
  const resources = [
    {
      title: 'Complete Guide to React Performance',
      author: 'Sarah Johnson',
      type: 'PDF Guide',
      rating: 4.8,
      downloads: 1234,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    },
    {
      title: 'Product Management Fundamentals',
      author: 'Michael Chen',
      type: 'Video Course',
      rating: 4.9,
      downloads: 856,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    },
    {
      title: 'UX Design Principles',
      author: 'Emily Rodriguez',
      type: 'Interactive Workshop',
      rating: 4.7,
      downloads: 2341,
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">
            Knowledge Hub
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Access curated resources from our expert mentors
          </p>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <img
                className="w-full h-full object-cover"
                src={resource.image}
                alt={resource.title}
              />
              <div className="absolute top-0 right-0 m-4 px-2 py-1 bg-white rounded-full text-sm font-medium text-gray-700">
                {resource.type}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-indigo-600" />
                <h3 className="ml-2 text-lg font-semibold text-gray-900">{resource.title}</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">By {resource.author}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="ml-2 text-sm text-gray-600">{resource.rating}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Download className="h-4 w-4 mr-1" />
                  {resource.downloads} downloads
                </div>
              </div>
              <button className="mt-6 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Access Resource
                <Download className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}