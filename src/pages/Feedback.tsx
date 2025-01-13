import React, { useState } from 'react';
import { Star, Send } from 'lucide-react';
import { useParams } from 'react-router-dom';

export function Feedback() {
  const { sessionId } = useParams();
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Implement feedback submission
    setTimeout(() => {
      setLoading(false);
      // Show success message or redirect
    }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Session Feedback
          </h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>Share your experience and help us improve our mentorship program.</p>
          </div>
          <form onSubmit={handleSubmit} className="mt-5 space-y-6">
            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                How would you rate this session?
              </label>
              <div className="mt-2 flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className={`p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                      rating >= star ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    <Star className="h-8 w-8" />
                  </button>
                ))}
              </div>
            </div>

            {/* Feedback Text */}
            <div>
              <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
                Your Feedback
              </label>
              <div className="mt-1">
                <textarea
                  id="feedback"
                  rows={4}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Share your thoughts about the session..."
                />
              </div>
            </div>

            {/* Areas of Improvement */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                What areas could be improved?
              </label>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {[
                  'Communication',
                  'Technical Depth',
                  'Session Structure',
                  'Time Management',
                ].map((area) => (
                  <label key={area} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">{area}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading || !rating || !feedback}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Submit Feedback'}
                <Send className="ml-2 h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}