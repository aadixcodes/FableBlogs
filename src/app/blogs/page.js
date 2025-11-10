'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronRight, MessageCircle, ThumbsUp, Users, Calendar } from 'lucide-react';

// Dummy data – replace images with your own
const posts = [
  {
    id: 1,
    date: 'March 20, 2010',
    title: 'Exploring the Future of Digital Storytelling in Modern Blogging',
    excerpt: 'Discover how digital storytelling is evolving and transforming the way we create and consume content online. Learn about the latest trends and techniques that are shaping the future of blogging.',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2019/04/coffee-4334647_1920-878x700.jpg',
    isLarge: true,
    category: 'Digital Trends',
    readTime: '5 min read',
    author: 'Sarah Johnson'
  },
  {
    id: 2,
    date: 'February 20, 2010',
    title: 'The Art of Writing Engaging Content That Captivates Readers',
    excerpt: 'Master the techniques of creating compelling content that keeps your audience engaged from start to finish.',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2012/08/9510379248_ca26f4ab06_b-409x320.jpg',
    isLarge: false,
    category: 'Writing Tips',
    readTime: '4 min read',
    author: 'Mike Chen'
  },
  {
    id: 3,
    date: 'January 20, 2010',
    title: 'Sustainable Living: Small Changes for a Better Tomorrow',
    excerpt: 'Explore practical ways to incorporate sustainability into your daily life and make a positive impact.',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2019/04/biking-1743026_1920-409x320.jpg',
    isLarge: false,
    category: 'Lifestyle',
    readTime: '6 min read',
    author: 'Emma Davis'
  },
  {
    id: 4,
    date: 'December 20, 2009',
    title: 'The Rise of Remote Work: Challenges and Opportunities',
    excerpt: 'Understanding the new dynamics of remote work and how to thrive in a distributed team environment.',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2019/04/downtown-690826_1920-878x700.jpg',
    isLarge: false,
    category: 'Career',
    readTime: '7 min read',
    author: 'David Kim'
  },
  {
    id: 5,
    date: 'November 20, 2009',
    title: 'Mindfulness and Productivity: Finding Balance in a Busy World',
    excerpt: 'Learn how mindfulness practices can actually boost your productivity and overall well-being.',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2019/04/girl-2212529_1920-409x320.jpg',
    isLarge: false,
    category: 'Wellness',
    readTime: '5 min read',
    author: 'Lisa Rodriguez'
  },
  {
    id: 6,
    date: 'October 20, 2009',
    title: 'Innovative Cooking Techniques for Home Chefs',
    excerpt: 'Discover professional cooking methods you can easily implement in your home kitchen.',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2019/01/market-4354598_1920-409x320.jpg',
    isLarge: false,
    category: 'Food & Cooking',
    readTime: '8 min read',
    author: 'Chef Marco'
  },
];

const sidebar = {
  popular: {
    title: 'Trending Now',
    items: [
      { 
        date: 'March 20, 2010', 
        text: 'The Future of Artificial Intelligence in Creative Industries', 
        comments: 24,
        likes: 156
      },
      { 
        date: 'February 20, 2010', 
        text: 'Building Your Personal Brand Through Content Creation', 
        comments: 18,
        likes: 89
      },
      { 
        date: 'January 20, 2010', 
        text: 'Sustainable Travel: How to Explore Responsibly', 
        comments: 32,
        likes: 203
      },
    ],
  },
  comments: {
    title: 'Recent Discussions',
    items: [
      { 
        date: '2 hours ago', 
        text: 'This article completely changed my perspective on remote work!', 
        post: 'The Rise of Remote Work',
        user: 'Alex Thompson'
      },
      { 
        date: '5 hours ago', 
        text: 'Great tips! I\'ve already implemented some of these mindfulness practices.', 
        post: 'Mindfulness and Productivity',
        user: 'Sophie Williams'
      },
    ],
  },
  categories: {
    title: 'Explore Categories',
    items: [
      { name: 'Technology', count: 24, color: 'bg-blue-100 text-blue-800' },
      { name: 'Lifestyle', count: 18, color: 'bg-green-100 text-green-800' },
      { name: 'Travel', count: 15, color: 'bg-purple-100 text-purple-800' },
      { name: 'Food', count: 12, color: 'bg-orange-100 text-orange-800' },
      { name: 'Career', count: 9, color: 'bg-indigo-100 text-indigo-800' },
    ],
  },
  newsletter: {
    title: 'Subscribe to Our Newsletter',
    text: 'Get the latest articles and insights delivered directly to your inbox. No spam, just quality content.',
  },
};

export default function Blogs() {
  const largePost = posts[0];
  const smallPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* LEFT COLUMN – Large post + small grid */}
          <div className="lg:col-span-3 space-y-8">

            {/* Large Featured Post */}
            <article className="group cursor-pointer bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <div className="relative h-[380px] lg:h-[420px] overflow-hidden">
                  <Image
                    src={largePost.image}
                    alt={largePost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 bg-[#FF4F69] text-white text-xs font-medium rounded-full uppercase tracking-wide">
                        {largePost.category}
                      </span>
                      <span className="text-sm text-gray-300">{largePost.readTime}</span>
                    </div>
                    
                    <h2 className="text-2xl lg:text-4xl font-bold leading-tight mb-4 group-hover:text-[#FF4F69] transition-colors">
                      <a href="/blog/digital-storytelling-future" className="hover:underline">
                        {largePost.title}
                      </a>
                    </h2>
                    
                    <p className="text-gray-200 text-base leading-relaxed mb-4 max-w-3xl line-clamp-2">
                      {largePost.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Calendar className="w-4 h-4" />
                          {largePost.date}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Users className="w-4 h-4" />
                          By {largePost.author}
                        </div>
                      </div>
                      <a
                        href="/blog/digital-storytelling-future"
                        className="hidden cursor-pointer md:inline-flex items-center px-4 py-2 bg-[#FF4F69] text-white text-sm font-medium rounded-lg hover:bg-[#FF4F69]/90 transition-colors"
                      >
                        Read Full Story <ChevronRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Small Grid – 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {smallPosts.map((post) => (
                <article key={post.id} className="group bg-white shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
                  <div className="relative overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-white/90 text-gray-800 text-xs font-medium rounded-md">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                      <span className="text-gray-400">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 leading-tight mb-3 group-hover:text-[#FF4F69] transition-colors">
                      <a href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`} className="hover:underline">
                        {post.title}
                      </a>
                    </h3>
                    
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">By {post.author}</span>
                      <a
                        href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}
                        className="inline-flex items-center text-[#FF4F69] text-sm font-medium hover:text-[#FF4F69]/90 transition-colors"
                      >
                        Read More <ChevronRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN – Sidebar */}
          <aside className="space-y-6">

            {/* Trending Now */}
            <div className="bg-white  shadow-md p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ThumbsUp className="w-5 h-5 text-[#FF4F69]" />
                {sidebar.popular.title}
              </h3>
              <ul className="space-y-4">
                {sidebar.popular.items.map((item, i) => (
                  <li key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <a href="#" className="group block hover:bg-gray-50 p-2 rounded-lg transition-colors">
                      <p className="text-xs text-gray-500 mb-1">{item.date}</p>
                      <p className="text-sm font-medium text-gray-900 leading-tight mb-2 group-hover:text-[#FF4F69] transition-colors">
                        {item.text}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          {item.comments} comments
                        </span>
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="w-3 h-3" />
                          {item.likes} likes
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Discussions */}
            <div className="bg-white shadow-md p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-[#FF4F69]" />
                {sidebar.comments.title}
              </h3>
              <ul className="space-y-4">
                {sidebar.comments.items.map((item, i) => (
                  <li key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <a href="#" className="group block hover:bg-gray-50 p-2 rounded-lg transition-colors">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#FF4F69] to-[#FF4F69]/90 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {item.user.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-500 mb-1">{item.date}</p>
                          <p className="text-sm font-medium text-gray-900">{item.user}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 italic mb-2">"{item.text}"</p>
                      <p className="text-xs text-gray-500">on: {item.post}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-[#FF4F69] to-[#FF4F69]/90 shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-3">
                {sidebar.newsletter.title}
              </h3>
              <p className="text-white text-sm mb-4">
                {sidebar.newsletter.text}
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white border border-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-white text-[#FF4F69] font-medium py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}