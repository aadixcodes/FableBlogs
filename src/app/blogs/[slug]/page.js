'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronRight, MessageCircle, ThumbsUp, Users, Calendar, Share, Bookmark, Send, Reply } from 'lucide-react';

// Dummy data for the detailed blog
const blogData = {
  id: 1,
  title: 'Exploring the Future of Digital Storytelling in Modern Blogging',
  excerpt: 'Discover how digital storytelling is evolving and transforming the way we create and consume content online. Learn about the latest trends and techniques that are shaping the future of blogging.',
  category: 'Digital Trends',
  date: 'March 20, 2010',
  readTime: '8 min read',
  author: 'Sarah Johnson',
  authorImage: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2019/04/coffee-4334647_1920-878x700.jpg',
  bannerImage: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2019/04/coffee-4334647_1920-878x700.jpg',
  content: `
    <p class="text-lg text-gray-700 leading-relaxed mb-8">In today's fast-paced digital landscape, storytelling has transformed from simple narratives to immersive experiences that captivate audiences across multiple platforms. The way we consume content has fundamentally changed, and bloggers must adapt to these new realities to stay relevant in this ever-evolving space.</p>
    
    <div class="my-12">
      <div class="border-l-4 border-[#FF4F69] pl-6 py-2 bg-gray-50 rounded-r-lg">
        <blockquote class="text-xl italic text-gray-700 leading-relaxed">
          "The most powerful person in the world is the storyteller. The storyteller sets the vision, values, and agenda of an entire generation that is to come." 
          <span class="block text-lg font-semibold text-gray-900 mt-2 not-italic">— Steve Jobs</span>
        </blockquote>
      </div>
    </div>

    <h2 class="text-4xl font-bold text-gray-900 mt-12 mb-6">The Evolution of Digital Storytelling</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-8">Digital storytelling has come a long way from simple text-based blogs. Today, it encompasses a wide range of multimedia elements that work together to create engaging narratives.</p>

    <div class="my-12">
      <div class="relative w-full h-auto md:h-96 overflow-hidden">
        <Image 
          src="https://blogs.themnific.com/gutenverse/wp-content/uploads/2019/04/downtown-690826_1920-878x700.jpg"
          alt="Digital Storytelling Evolution"
          fill
          className="object-cover"
        />
      </div>
      <p class="text-center text-gray-600 text-sm mt-3">The transformation of digital content creation over the years</p>
    </div>

    <h3 class="text-2xl font-bold text-gray-900 mt-12 mb-4">Key Trends Shaping Modern Blogging</h3>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">Several key trends are revolutionizing how we approach digital storytelling in the modern era.</p>

    <h4 class="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Interactive Content</h4>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">Modern readers expect more than just text. They want interactive elements, quizzes, polls, and embedded media that make the content come alive and create a two-way conversation.</p>

    <h4 class="text-xl font-semibold text-gray-900 mt-8 mb-3">2. Visual Storytelling</h4>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">High-quality images, infographics, and videos are no longer optional. They're essential components that enhance engagement and comprehension while making content more shareable.</p>


    <h4 class="text-xl font-semibold text-gray-900 mt-8 mb-3">3. Personalization</h4>
    <p class="text-lg text-gray-700 leading-relaxed mb-8">AI-driven personalization allows content to adapt to individual reader preferences, creating unique experiences for each visitor and increasing engagement metrics significantly.</p>

    <div class="my-12">
      <div class="border-l-4 border-[#FF4F69] pl-6 py-2 bg-gray-50 rounded-r-lg">
        <blockquote class="text-xl italic text-gray-700 leading-relaxed">
          "Content is where I expect much of the real money will be made on the Internet, just as it was in broadcasting."
          <span class="block text-lg font-semibold text-gray-900 mt-2 not-italic">— Bill Gates</span>
        </blockquote>
      </div>
    </div>

    <h2 class="text-4xl font-bold text-gray-900 mt-12 mb-6">Looking Towards the Future</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-8">As we look to the future, it's clear that successful bloggers will be those who embrace these changes and continuously innovate their storytelling approaches to meet evolving audience expectations.</p>
  `,
  likes: 156,
  comments: 24,
  shares: 45
};

const popularPosts = [
  {
    id: 2,
    date: 'February 20, 2010',
    title: 'The Art of Writing Engaging Content That Captivates Readers',
    excerpt: 'Master the techniques of creating compelling content that keeps your audience engaged from start to finish.',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2012/08/9510379248_ca26f4ab06_b-409x320.jpg',
    category: 'Writing Tips',
    readTime: '4 min read',
    likes: 89
  },
  {
    id: 3,
    date: 'January 20, 2010',
    title: 'Sustainable Living: Small Changes for a Better Tomorrow',
    excerpt: 'Explore practical ways to incorporate sustainability into your daily life and make a positive impact.',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2019/04/biking-1743026_1920-409x320.jpg',
    category: 'Lifestyle',
    readTime: '6 min read',
    likes: 203
  },
  {
    id: 4,
    date: 'December 20, 2009',
    title: 'The Rise of Remote Work: Challenges and Opportunities',
    excerpt: 'Understanding the new dynamics of remote work and how to thrive in a distributed team environment.',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2019/04/downtown-690826_1920-409x320.jpg',
    category: 'Career',
    readTime: '7 min read',
    likes: 142
  }
];

const recentPosts = [
  {
    id: 1,
    title: 'The sunset faded to twilight',
    date: 'APRIL 11, 2019',
    categories: 'PHOTO, TRENDING',
     commentCount: '10 COMMENTS',
    excerpt: 'I began walking, therefore, in a big curve, seeking some point of vantage and continually looking at the sand.',
    readMore: 'READ MORE',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2012/08/9510379248_ca26f4ab06_b-409x320.jpg',
    lineColor: 'bg-[#FF4F69]',
  },
  {
    id: 2,
    title: 'Two long weeks I wandered',
    date: 'APRIL 8, 2019',
    categories: 'LIFESTYLE',
     commentCount: '6 COMMENTS',
    excerpt: 'Through two long weeks I wandered, stumbling through the nights guided only by the stars and hiding during the days behind some protruding rock or among the occasional hills I traversed.',
    readMore: 'READ MORE',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2019/04/biking-1743026_1920-409x320.jpg',
    lineColor: 'bg-[#FF4F69]',
  },
  {
    id: 3,
    title: 'At daybreak of the fifteenth day of my search',
    date: 'FEBRUARY 1, 2019',
    categories: 'LIFESTYLE',
    commentCount: '4 COMMENTS',
    excerpt: 'When the amphitheater had cleared I crept stealthily to the top and as the great excavation lay far from the plaza.',
    readMore: 'READ MORE',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2019/04/downtown-690826_1920-409x320.jpg',
    lineColor: 'bg-[#FF4F69]',
  }
];

const comments = [
  {
    id: 1,
    user: 'Alex Thompson',
    userImage: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2019/04/girl-2212529_1920-409x320.jpg',
    date: '2 hours ago',
    text: 'This article completely changed my perspective on digital storytelling! The points about interactive content are spot on. I\'ve been implementing some of these strategies in my own blog and seen a 40% increase in engagement.',
    likes: 12,
    replies: [
      {
        id: 1,
        user: 'Sarah Johnson',
        userImage: blogData.authorImage,
        date: '1 hour ago',
        text: 'Thanks Alex! I\'m glad you found it helpful. The interactive content approach has been a game-changer for many bloggers.',
        likes: 5
      }
    ]
  },
  {
    id: 2,
    user: 'Sophie Williams',
    userImage: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2019/04/market-4354598_1920-409x320.jpg',
    date: '5 hours ago',
    text: 'Great insights about personalization. Do you have any recommendations for AI tools that can help with content personalization for smaller blogs?',
    likes: 8,
    replies: []
  },
  {
    id: 3,
    user: 'Mike Chen',
    userImage: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2019/04/downtown-690826_1920-409x320.jpg',
    date: '1 day ago',
    text: 'The visual storytelling section resonated with me. In today\'s attention economy, compelling visuals are no longer optional but essential for content survival.',
    likes: 15,
    replies: []
  }
];

export default function DetailedBlog() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(blogData.likes);
  const [bookmarked, setBookmarked] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState('');

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      // Handle comment submission
      console.log('New comment:', commentText);
      setCommentText('');
    }
  };

  const handleReplySubmit = (commentId, e) => {
    e.preventDefault();
    if (replyText.trim()) {
      // Handle reply submission
      console.log('Reply to comment', commentId, ':', replyText);
      setReplyText('');
      setReplyingTo(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Section - Increased Height */}
        <div className="relative mb-8 overflow-hidden">
          <div className="relative h-96 md:h-96 lg:h-[500px]">
            <Image
              src={blogData.bannerImage}
              alt={blogData.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white text-center">
              <div className="flex justify-center mb-4">
                <span className="px-4 py-2 bg-[#FF4F69] text-white text-sm font-medium rounded-full uppercase tracking-wide">
                  {blogData.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 max-w-4xl mx-auto">
                {blogData.title}
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed mb-6 max-w-3xl mx-auto">
                {blogData.excerpt}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {blogData.date}
                </div>
                <span className="hidden sm:block">•</span>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  By {blogData.author}
                </div>
                <span className="hidden sm:block">•</span>
                <div className="flex items-center gap-2">
                  <span>{blogData.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-3">
            
            {/* Blog Content */}
            <article className="bg-white shadow-lg overflow-hidden mb-8">
              <div className="p-6 lg:p-8">
                
                {/* Action Bar */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleLike}
                      className={`flex cursor-pointer items-center gap-2 px-4 py-2 transition-colors ${
                        liked 
                          ? 'bg-[#FF4F69] text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <ThumbsUp className="w-4 h-4" />
                      <span>{likeCount}</span>
                    </button>
                    
                    <button className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700  hover:bg-gray-200 transition-colors">
                      <Share className="w-4 h-4" />
                      Share
                    </button>
                  </div>
                  
                </div>

                {/* Blog Content with Improved Styling */}
                <div 
                  className="max-w-none"
                  dangerouslySetInnerHTML={{ __html: blogData.content }}
                />
              </div>
            </article>

            {/* Recent Posts Section - Inspired Design */}
            <section className="mb-8">
              <div className="text-left mb-8">
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                  CONTINUE READING
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Recent Posts
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentPosts.map((post) => (
                  <article key={post.id} className="group cursor-pointer">
                    {/* Image Container */}
                    <div className="relative overflow-hidden -mb-6">
                      <div className="w-full h-48 bg-gray-200 rounded-xl overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative space-y-3 bg-white py-4  pr-4 mr-6">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-[#FF4F69] transition-colors">
                        {post.title}
                      </h3>

                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-gray-500">
                        <span>{post.date}</span>
                        {post.categories && (
                          <>
                            <span className="text-gray-400">•</span>
                            <span>{post.categories}</span>
                          </>
                        )}
                        {post.commentCount && (
                          <>
                            <span className="text-gray-400">•</span>
                            <span className="text-[#FF4F69]">{post.commentCount}</span>
                          </>
                        )}
                      </div>

                      {/* Decorative Line */}
                      <div className={`w-12 h-0.5 ${post.lineColor} mb-3`}></div>

                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Read More */}
                      <a
                        href="#"
                        className="inline-block mt-2 text-[#FF4F69] font-medium text-sm uppercase tracking-wider hover:text-[#FF4F69]/80 transition-colors"
                      >
                        {post.readMore} →
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Newsletter Subscription */}
            <section className="bg-[#E5E7EB] p-8 text-white mb-8">
              <div className="text-center max-w-2xl mx-auto">
                {/* <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2> */}
               
                <form className="flex flex-col sm:flex-row gap-4 md:gap-0 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-2 bg-white text-black placeholder-gray-500 border border-gray-500 focus:outline-none  focus:border-black"
                  />
                  <button
                    type="submit"
                    className="cursor-pointer px-6 py-3 bg-[#FF4F69] text-white font-medium transition-colors whitespace-nowrap"
                  >
                    Subscribe Now
                  </button>
                </form>
                 <p className="text-black/60 mt-6">
                  Get the latest articles and insights delivered directly to your inbox. No spam, just quality content.
                </p>
              </div>
            </section>

            {/* Comments Section */}
            <section className="bg-white shadow-lg p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Leave a Comment</h2>
                <span className="text-gray-500">{comments.length} comments</span>
              </div>

              {/* Comment Form */}
              <form onSubmit={handleCommentSubmit} className="mb-8">
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Share your thoughts..."
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF4F69] focus:border-transparent resize-none"
                />
                <div className="flex justify-end mt-3">
                  <button
                    type="submit"
                    className="cursor-pointer px-6 py-2 bg-[#FF4F69] text-white font-medium  hover:bg-[#FF4F69]/90 transition-colors flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Post Comment
                  </button>
                </div>
              </form>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="border-b border-gray-200 pb-6 last:border-0">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-[#FF4F69] rounded-full flex items-center justify-center text-white font-bold text-sm">

                          {comment.user.charAt(0)}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-bold text-gray-900">{comment.user}</h4>
                            <p className="text-xs text-gray-500">{comment.date}</p>
                          </div>
                          <button className="flex cursor-pointer items-center gap-1 text-gray-500 hover:text-[#FF4F69] transition-colors">
                            <ThumbsUp className="w-4 h-4" />
                            <span className="text-sm">{comment.likes}</span>
                          </button>
                        </div>
                        <p className="text-gray-700 mb-3">{comment.text}</p>
                        
                        <div className="flex items-center gap-4">
                          <button 
                            onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                            className="text-sm text-[#FF4F69] hover:underline flex items-center gap-1"
                          >
                            <Reply className="w-3 h-3" />
                            Reply
                          </button>
                        </div>

                        {/* Reply Form */}
                        {replyingTo === comment.id && (
                          <form onSubmit={(e) => handleReplySubmit(comment.id, e)} className="mt-4">
                            <textarea
                              value={replyText}
                              onChange={(e) => setReplyText(e.target.value)}
                              placeholder="Write your reply..."
                              rows="2"
                              className="w-full px-3 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#FF4F69] focus:border-transparent resize-none text-sm"
                            />
                            <div className="flex justify-end gap-2 mt-2">
                              <button
                                type="button"
                                onClick={() => setReplyingTo(null)}
                                className="cursor-pointer px-3 py-1 text-gray-600 hover:text-gray-800 text-sm"
                              >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                className="cursor-pointer px-3 py-1 bg-[#FF4F69] text-white text-sm rounded hover:bg-[#FF4F69]/90 transition-colors"
                              >
                                Reply
                              </button>
                            </div>
                          </form>
                        )}

                        {/* Replies */}
                        {comment.replies && comment.replies.length > 0 && (
                          <div className="mt-4 ml-4 space-y-4 border-l-2 border-[#FF4F69] pl-4">
                            {comment.replies.map((reply) => (
                              <div key={reply.id} className="flex gap-3">
                                <div className="flex-shrink-0">
                                  <div className="w-8 h-8 bg-[#FF4F69] rounded-full flex items-center justify-center text-white font-bold text-xs">
                                    {reply.user.charAt(0)}
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between mb-1">
                                    <div>
                                      <h5 className="font-bold text-gray-900 text-sm">{reply.user}</h5>
                                      <p className="text-xs text-gray-500">{reply.date}</p>
                                    </div>
                                    <button className="flex cursor-pointer items-center gap-1 text-gray-500 hover:text-[#FF4F69] transition-colors">
                                      <ThumbsUp className="w-3 h-3" />
                                      <span className="text-xs">{reply.likes}</span>
                                    </button>
                                  </div>
                                  <p className="text-gray-700 text-sm">{reply.text}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-6">
            
            {/* Popular Posts Sidebar */}
            <div className="bg-white shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ThumbsUp className="w-5 h-5 text-[#FF4F69]" />
                Trending Now
              </h3>
              <ul className="space-y-4">
                {popularPosts.map((post) => (
                  <li key={post.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <a href="#" className="group block hover:bg-gray-50 p-2 rounded-lg transition-colors">
                      <p className="text-xs text-gray-500 mb-1">{post.date}</p>
                      <p className="text-sm font-medium text-gray-900 leading-tight mb-2 group-hover:text-[#FF4F69] transition-colors">
                        {post.title}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="w-3 h-3" />
                          {post.likes} likes
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Sidebar */}
            <div className="bg-gradient-to-br from-[#FF4F69] to-[#FF4F69]/90 shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-3">
                Stay Updated
              </h3>
              <p className="text-white/90 text-sm mb-4">
                Get the latest articles and insights delivered directly to your inbox.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-sm"
                />
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-white text-[#FF4F69] font-medium py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm"
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