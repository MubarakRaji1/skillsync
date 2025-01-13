import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { BookOpen, LogOut, Menu, X, Settings } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function Layout() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check current auth status
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const AuthenticatedLinks = () => (
    <>
      <Link 
        to="/mentors" 
        className="text-gray-900 hover:text-indigo-600 px-3 py-2 font-medium transition-colors duration-200"
      >
        Find Mentors
      </Link>
      <Link 
        to="/resources" 
        className="text-gray-900 hover:text-indigo-600 px-3 py-2 font-medium transition-colors duration-200"
      >
        Resources
      </Link>
      <Link 
        to="/dashboard" 
        className="text-gray-900 hover:text-indigo-600 px-3 py-2 font-medium transition-colors duration-200"
      >
        Dashboard
      </Link>
      <Link 
        to="/settings" 
        className="text-gray-900 hover:text-indigo-600 px-3 py-2 font-medium transition-colors duration-200"
      >
        <Settings className="h-5 w-5 transform hover:rotate-180 transition-transform duration-300" />
      </Link>
      <button
        onClick={handleSignOut}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 hover:text-indigo-600 transition-colors duration-200"
      >
        <LogOut className="h-5 w-5 mr-2" />
        Sign out
      </button>
    </>
  );

  const UnauthenticatedLinks = () => (
    <>
      <Link 
        to="/login" 
        className="text-gray-900 hover:text-indigo-600 px-4 py-2 font-medium transition-colors duration-200"
      >
        Sign in
      </Link>
      <Link 
        to="/signup" 
        className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors duration-200 transform hover:scale-105"
      >
        Get Started
      </Link>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center group">
                <BookOpen className="h-8 w-8 text-indigo-600 transform group-hover:rotate-12 transition-transform duration-300" />
                <span className="ml-2 text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                  SkillSync
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {!loading && (user ? <AuthenticatedLinks /> : <UnauthenticatedLinks />)}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-white shadow-lg transform transition-all duration-300 ease-in-out">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {!loading && (
                user ? (
                  <>
                    <Link
                      to="/mentors"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Find Mentors
                    </Link>
                    <Link
                      to="/resources"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Resources
                    </Link>
                    <Link
                      to="/dashboard"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Settings
                    </Link>
                    <button
                      onClick={() => {
                        handleSignOut();
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-200"
                    >
                      Sign out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign in
                    </Link>
                    <Link
                      to="/signup"
                      className="block px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      <main className="w-full">
        <div className="animate-fadeIn">
          <Outlet />
        </div>
      </main>
    </div>
  );
}