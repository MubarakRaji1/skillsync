import React, { useState } from 'react';
import { Calendar, Clock, Video, MessageSquare } from 'lucide-react';
import { useParams } from 'react-router-dom';

export function Booking() {
  const { mentorId } = useParams();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [sessionType, setSessionType] = useState<'video' | 'chat'>('video');
  const [loading, setLoading] = useState(false);

  const availableTimes = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
  ];

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Implement booking logic
    setTimeout(() => {
      setLoading(false);
      // Show success message or redirect
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
        {/* Mentor Info */}
        <div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Mentor"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-medium text-gray-900">Sarah Johnson</h2>
                  <p className="text-sm text-gray-500">Senior Software Engineer</p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">About</h3>
                <p className="mt-2 text-sm text-gray-500">
                  10+ years of experience in full-stack development. Specialized in React, Node.js,
                  and cloud architecture. Passionate about helping others grow in their tech careers.
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Expertise</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {['React', 'Node.js', 'AWS', 'System Design'].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="mt-10 lg:mt-0">
          <form onSubmit={handleBooking} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900">Book a Session</h2>
              
              {/* Date Selection */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">
                  Select Date
                </label>
                <div className="mt-1">
                  <input
                    type="date"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>

              {/* Time Selection */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">
                  Select Time
                </label>
                <div className="mt-2 grid grid-cols-3 gap-3">
                  {availableTimes.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`${
                        selectedTime === time
                          ? 'bg-indigo-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      } px-3 py-2 border rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Session Type */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">
                  Session Type
                </label>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSessionType('video')}
                    className={`${
                      sessionType === 'video'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    } px-4 py-3 border rounded-md flex items-center justify-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                  >
                    <Video className="h-5 w-5 mr-2" />
                    Video Call
                  </button>
                  <button
                    type="button"
                    onClick={() => setSessionType('chat')}
                    className={`${
                      sessionType === 'chat'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    } px-4 py-3 border rounded-md flex items-center justify-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                  >
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Chat
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={loading || !selectedDate || !selectedTime}
                  className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                  {loading ? 'Booking...' : 'Confirm Booking'}
                  <Calendar className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}