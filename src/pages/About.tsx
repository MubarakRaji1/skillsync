import React from 'react';
import { Users, Target, Shield, Award } from 'lucide-react';

export function About() {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-founder',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      bio: 'Former Tech Lead at Google with 10+ years of mentoring experience.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      bio: 'Engineering leader passionate about helping others grow in tech.',
    },
    {
      name: 'Emily Kim',
      role: 'Head of Community',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      bio: 'Community builder with experience in education and mentorship.',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We are committed to democratizing access to mentorship and career guidance.',
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'We ensure a secure and supportive environment for all our users.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We build strong connections between mentors and mentees.',
    },
    {
      icon: Award,
      title: 'Quality Focus',
      description: 'We maintain high standards for our mentors and content.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover mix-blend-multiply filter brightness-50"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Team collaboration"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About SkillSync
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-100">
            We are on a mission to make quality mentorship accessible to everyone. Our platform
            connects aspiring professionals with experienced mentors who can guide them on their
            career journey.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Values</h2>
          <p className="mt-4 text-lg text-gray-500">
            These core principles guide everything we do at SkillSync
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {values.map((value) => (
            <div key={value.title} className="relative">
              <dt>
                <div className="absolute h-12 w-12 flex items-center justify-center bg-indigo-600 rounded-md">
                  <value.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{value.title}</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Our Team</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Meet the passionate individuals behind SkillSync
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src={member.image}
                  alt={member.name}
                />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="text-sm text-indigo-600">{member.role}</p>
                  <p className="mt-3 text-base text-gray-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-indigo-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Trusted by thousands of professionals
            </h2>
          </div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
            {[
              { label: 'Active Mentors', value: '500+' },
              { label: 'Mentorship Sessions', value: '10,000+' },
              { label: 'Success Stories', value: '2,500+' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                  {stat.label}
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}