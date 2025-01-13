import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Star, Target, Award, Zap, BarChart, Clock, Shield, ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section with Improved Visibility */}
      <div className="relative min-h-[80vh] bg-indigo-800 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Mentorship"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-indigo-800/50" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 flex items-center min-h-[80vh]">
          <div className="animate-fadeIn max-w-3xl">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-4 animate-float">
              🚀 Join 10,000+ professionals growing with SkillSync
            </span>
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6 gradient-text">
              Accelerate Your Career Growth
            </h1>
            <p className="mt-6 text-xl text-white/90 leading-relaxed">
              Connect with experienced mentors who can guide you through your professional journey.
              Get personalized advice, learn new skills, and achieve your career goals faster than ever.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl animate-glow"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/mentors"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-lg font-medium rounded-lg text-white hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-200"
              >
                Browse Mentors
                <Users className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="mt-10 flex items-center space-x-4 text-white/80">
              <Shield className="h-5 w-5" />
              <span className="text-sm">Trusted by professionals from top companies worldwide</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: 'Active Mentors', value: '500+', icon: Users },
              { label: 'Success Rate', value: '95%', icon: Target },
              { label: 'Skills Covered', value: '100+', icon: Award },
              { label: 'Happy Members', value: '10k+', icon: Star },
            ].map((stat) => (
              <div key={stat.label} className="bg-gray-50 p-6 rounded-lg text-center transform hover:scale-105 transition-all duration-200">
                <stat.icon className="h-8 w-8 mx-auto text-indigo-600 mb-3" />
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section with Animations */}
      <div className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose SkillSync?
            </h2>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Users,
                title: 'Expert Mentors',
                description: 'Connect with industry professionals who have proven track records.',
                color: 'bg-blue-100 text-blue-600',
              },
              {
                icon: Zap,
                title: 'Fast Progress',
                description: 'Accelerate your learning with personalized guidance and feedback.',
                color: 'bg-yellow-100 text-yellow-600',
              },
              {
                icon: Shield,
                title: 'Secure Platform',
                description: 'Your data and interactions are protected with enterprise-grade security.',
                color: 'bg-green-100 text-green-600',
              },
              {
                icon: BarChart,
                title: 'Track Progress',
                description: 'Monitor your growth with detailed analytics and insights.',
                color: 'bg-purple-100 text-purple-600',
              },
              {
                icon: Clock,
                title: 'Flexible Schedule',
                description: 'Book sessions that fit your timeline and availability.',
                color: 'bg-pink-100 text-pink-600',
              },
              {
                icon: BookOpen,
                title: 'Rich Resources',
                description: 'Access a library of curated materials to supplement your learning.',
                color: 'bg-indigo-100 text-indigo-600',
              },
            ].map((feature, index) => (
              <div 
                key={feature.title} 
                className="relative bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute top-6 left-6 p-3 rounded-full ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="ml-16">
                  <h3 className="text-xl font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600">Get started in three simple steps</p>
          </div>
          <div className="mt-12">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-200 hidden md:block" />
              
              {/* Steps */}
              <div className="space-y-16">
                {[
                  {
                    step: 1,
                    title: 'Create Your Profile',
                    description: 'Sign up and tell us about your goals and interests.',
                  },
                  {
                    step: 2,
                    title: 'Find Your Mentor',
                    description: 'Browse our curated list of expert mentors and choose your match.',
                  },
                  {
                    step: 3,
                    title: 'Start Learning',
                    description: 'Schedule sessions and begin your journey to success.',
                  },
                ].map((step, index) => (
                  <div key={step.step} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1 md:w-1/2">
                      <div className="p-6 bg-white rounded-lg shadow-lg md:mr-8 transform hover:scale-105 transition-all duration-200">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold mb-4">
                          {step.step}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <p className="mt-2 text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:block flex-1 md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to accelerate your career?</span>
            <span className="block text-indigo-200">Join SkillSync today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transform hover:scale-105 transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}