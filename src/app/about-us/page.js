// File: AboutUs.js
'use client';
import React from 'react';
import Subscribe from '@/components/Subscribe';

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Founder & Editor-in-Chief",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      bio: "Passionate storyteller with 10+ years in digital content creation."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      bio: "Visual storyteller transforming ideas into captivating digital experiences."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Content Strategist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      bio: "Content expert with a knack for creating viral blog campaigns."
    },
    {
      id: 4,
      name: "David Park",
      role: "Tech Editor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      bio: "Tech enthusiast bridging the gap between innovation and storytelling."
    }
  ];

  const values = [
    {
      icon: "📚",
      title: "Authentic Storytelling",
      description: "We believe in the power of genuine narratives that resonate with real people."
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Constantly evolving to bring you fresh perspectives and cutting-edge content."
    },
    {
      icon: "🤝",
      title: "Community First",
      description: "Our readers are at the heart of everything we create and share."
    },
    {
      icon: "🌟",
      title: "Excellence",
      description: "Committed to delivering high-quality, well-researched content every time."
    }
  ];

  const stats = [
    { number: "50K+", label: "Monthly Readers" },
    { number: "1.2M+", label: "Page Views" },
    { number: "500+", label: "Published Stories" },
    { number: "25+", label: "Countries Reached" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            About <span className="text-[#FF4F69]">FableBlogs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Where stories come to life. We're a passionate team of writers, creators, and storytellers 
            dedicated to bringing you compelling narratives that inspire, inform, and entertain.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  FableBlogs was born from a simple idea: everyone has a story worth telling. 
                  Founded in 2020, we started as a small blog with a big dream - to create a platform 
                  where authentic voices could be heard and meaningful stories could flourish.
                </p>
                <p>
                  What began as a passion project among friends has grown into a vibrant community 
                  of writers, readers, and storytellers from around the world. Today, we're proud 
                  to be a trusted source for thought-provoking content across various genres.
                </p>
                <p>
                  Our journey has been shaped by the incredible stories shared by our contributors 
                  and the unwavering support of our readers. Every article, every comment, and every 
                  shared moment has helped us build something truly special.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Our team collaborating"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#FF4F69] rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FF4F69] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower voices and share stories that matter. We're committed to creating 
                a platform where diverse perspectives can thrive, knowledge can be shared, 
                and communities can connect through the power of storytelling.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-2xl mb-4">
                🔭
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the world's most trusted platform for authentic storytelling, 
                where every voice has the opportunity to be heard and every story has 
                the potential to make a difference in someone's life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at FableBlogs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind FableBlogs' success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center group">
                <div className="relative mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-[#FF4F69] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-[#FF4F69] font-medium text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose FableBlogs?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                ✍️
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality Content</h3>
              <p className="text-gray-600">
                Every article is carefully crafted, researched, and edited to ensure the highest quality for our readers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                🌍
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Diverse Perspectives</h3>
              <p className="text-gray-600">
                We celebrate diversity and bring you stories from different cultures, backgrounds, and experiences.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                💬
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Engaging Community</h3>
              <p className="text-gray-600">
                Join a vibrant community of readers and writers who share, discuss, and grow together.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
    </div>
  );
};

export default AboutUs;