import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { Mentors } from './pages/Mentors';
import { Booking } from './pages/Booking';
import { Resources } from './pages/Resources';
import { Feedback } from './pages/Feedback';
import { About } from './pages/About';
import { Settings } from './pages/Settings';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="mentors" element={<Mentors />} />
        <Route path="booking/:mentorId?" element={<Booking />} />
        <Route path="resources" element={<Resources />} />
        <Route path="feedback/:sessionId?" element={<Feedback />} />
        <Route path="about" element={<About />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;