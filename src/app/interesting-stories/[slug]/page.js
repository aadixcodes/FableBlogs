// File: DetailedStories.js
'use client';
import React, { useState } from 'react';

const DetailedStories = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      time: "2 hours ago",
      comment: "This article completely changed my perspective on photography! The natural lighting tips are game-changing.",
      avatar: "https://assets.thehansindia.com/h-upload/2021/10/04/1115546-tech-news.webp",
      replies: [
        {
          id: 11,
          name: "John Doe",
          time: "1 hour ago",
          comment: "I completely agree! The golden hour section was particularly helpful.",
          avatar: "https://assets.thehansindia.com/h-upload/2021/10/04/1115546-tech-news.webp"
        }
      ]
    },
    {
      id: 2,
      name: "Mike Chen",
      time: "5 hours ago",
      comment: "As a professional photographer, I can confirm these techniques work wonders. Great write-up!",
      avatar: "https://assets.thehansindia.com/h-upload/2021/10/04/1115546-tech-news.webp",
      replies: []
    }
  ]);

  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [email, setEmail] = useState('');

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        name: "You",
        time: "Just now",
        comment: newComment,
        avatar: "https://assets.thehansindia.com/h-upload/2021/10/04/1115546-tech-news.webp",
        replies: []
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  const handleAddReply = (commentId, e) => {
    e.preventDefault();
    if (replyText.trim()) {
      const updatedComments = comments.map(comment => {
        if (comment.id === commentId) {
          const newReply = {
            id: Date.now(),
            name: "You",
            time: "Just now",
            comment: replyText,
            avatar: "https://assets.thehansindia.com/h-upload/2021/10/04/1115546-tech-news.webp"
          };
          return {
            ...comment,
            replies: [...comment.replies, newReply]
          };
        }
        return comment;
      });
      setComments(updatedComments);
      setReplyText('');
      setReplyingTo(null);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    }
  };

  const relatedStories = [
    {
      id: 1,
      title: "Advanced Composition Techniques for Stunning Photos",
      category: "Photography",
      image: "https://assets.thehansindia.com/h-upload/2021/10/04/1115546-tech-news.webp",
      readTime: "4 min read"
    },
    {
      id: 2,
      title: "Best Camera Gear for Beginners in 2024",
      category: "Gear",
      image: "https://assets.thehansindia.com/h-upload/2021/10/04/1115546-tech-news.webp",
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "Editing Workflow: From Raw to Masterpiece",
      category: "Editing",
      image: "https://assets.thehansindia.com/h-upload/2021/10/04/1115546-tech-news.webp",
      readTime: "6 min read"
    }
  ];

  const popularTags = [
    "Photography", "Natural Light", "Beginners", "Tutorial", 
    "Camera", "Composition", "Lighting", "Tips & Tricks"
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Hidden on mobile, shows after content */}
          <aside className="lg:w-1/4 order-2 lg:order-1">
            {/* Author Info */}
            <div className="bg-white shadow-md border border-gray-100 p-6 mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src="https://assets.thehansindia.com/h-upload/2021/10/04/1115546-tech-news.webp" 
                  alt="Author" 
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-bold text-gray-800">Gillion Writer</h3>
                  <p className="text-sm text-gray-600">Professional Photographer</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Sharing photography insights and tutorials to help you capture stunning images.
              </p>
              <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200 transition-colors text-sm">
                Follow Author
              </button>
            </div>

            {/* Related Stories */}
            <div className="bg-white shadow-md border border-gray-100 p-6 mb-6">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-1 h-4 bg-[#FF4F69] mr-2"></span>
                Related Stories
              </h3>
              <div className="space-y-4">
                {relatedStories.map(story => (
                  <div key={story.id} className="flex space-x-3 group cursor-pointer">
                    <img 
                      src={story.image} 
                      alt={story.title} 
                      className="w-16 h-16 object-cover flex-shrink-0"
                    />
                    <div>
                      <span className="text-xs text-[#FF4F69] font-medium">{story.category}</span>
                      <h4 className="text-sm font-semibold text-gray-800 group-hover:text-[#FF4F69] transition-colors line-clamp-2">
                        {story.title}
                      </h4>
                      <p className="text-xs text-gray-500">{story.readTime}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-gradient-to-br from-[#FF4F69] to-[#FF6B8B] shadow-md p-6 text-white">
              <h3 className="font-bold text-xl mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-sm mb-4 opacity-90">
                Get the latest photography tips and stories delivered directly to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 border-1 border-white"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-white text-[#FF4F69] font-semibold py-3 cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  Subscribe Now
                </button>
              </form>
              <p className="text-xs opacity-75 mt-3">
                No spam ever. Unsubscribe at any time.
              </p>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4 order-1 lg:order-2">
            {/* Article Header */}
            <article className="bg-white rounded-lg">
              <div className="mb-6">
                <span className="inline-block bg-[#FF4F69] text-white text-xs px-3 py-1 rounded-full mb-4">
                  Photography
                </span>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                  Mastering Natural Light Photography: A Complete Beginner's Guide
                </h1>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                  <span>By Gillion Writer</span>
                  <span>•</span>
                  <span>January 15, 2024</span>
                  <span>•</span>
                  <span>8 min read</span>
                </div>

                {/* Social Share */}
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-sm text-gray-600">Share:</span>
                  <div className="flex space-x-2">
                    <button className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <span className="text-xs font-bold">f</span>
                    </button>
                    <button className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                      t
                    </button>
                    <button className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors">
                      in
                    </button>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-8">
                <img 
                  src="https://assets.thehansindia.com/h-upload/2021/10/04/1115546-tech-news.webp" 
                  alt="Natural Light Photography" 
                  className="w-full h-64 md:h-80 object-cover shadow-md"
                />
                <p className="text-sm text-gray-500 text-center mt-2">
                  Capturing the perfect moment with natural lighting techniques
                </p>
              </div>

              {/* Article Content */}
              <div className="prose max-w-none">
                <section id="introduction" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="w-2 h-6 bg-[#FF4F69] mr-3"></span>
                    Introduction to Natural Light Photography
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Natural light photography is one of the most rewarding yet challenging forms of photography. 
                    Unlike studio lighting where you have complete control, natural light requires understanding 
                    and working with the environment around you.
                  </p>
                </section>

                <section id="golden-hour" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="w-2 h-6 bg-[#FF4F69] mr-3"></span>
                    The Golden Hour Magic
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The golden hour - that magical time shortly after sunrise and before sunset - offers the most 
                    flattering light for photography. The sun is low in the sky, creating soft, warm, and directional 
                    light that adds depth and dimension to your images.
                  </p>
                </section>

                <section id="equipment" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="w-2 h-6 bg-[#FF4F69] mr-3"></span>
                    Essential Equipment for Natural Light
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    While natural light photography doesn't require extensive gear, having the right equipment 
                    can significantly improve your results.
                  </p>
                </section>

                <section id="techniques" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="w-2 h-6 bg-[#FF4F69] mr-3"></span>
                    Advanced Lighting Techniques
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Understanding different types of natural light will help you choose the right approach 
                    for each shooting scenario.
                  </p>
                </section>

                <section id="conclusion" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="w-2 h-6 bg-[#FF4F69] mr-3"></span>
                    Conclusion
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Mastering natural light photography is a journey of observation and practice. The more you 
                    work with natural light, the more intuitive it becomes.
                  </p>
                </section>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8 pt-6 border-t border-gray-200">
                  {popularTags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-[#FF4F69] hover:text-white transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Comments Section */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Comments ({comments.length})
                </h3>

                {/* Comment Form */}
                <form onSubmit={handleAddComment} className="mb-8">
                  <div className="flex space-x-4">
                    <img 
                      src="https://assets.thehansindia.com/h-upload/2021/10/04/1115546-tech-news.webp" 
                      alt="You" 
                      className="w-10 h-10 rounded-full   flex-shrink-0"
                    />
                    <div className="flex-1">
                      <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Share your thoughts..."
                        className="w-full p-4 border border-gray-300 focus:ring-2 focus:ring-[#FF4F69] focus:border-transparent resize-none"
                        rows="3"
                      />
                      <div className="flex justify-end mt-2">
                        <button
                          type="submit"
                          className="bg-[#FF4F69] cursor-pointer text-white px-6 py-2 hover:bg-[#e0455d] transition-colors"
                        >
                          Post Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                {/* Comments List */}
                <div className="space-y-6">
                  {comments.map(comment => (
                    <div key={comment.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                      <div className="flex space-x-4">
                        <img 
                          src={comment.avatar} 
                          alt={comment.name} 
                          className="w-10 h-10 rounded-full flex-shrink-0"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-semibold text-gray-800">{comment.name}</h4>
                            <span className="text-xs text-gray-500">{comment.time}</span>
                          </div>
                          <p className="text-gray-700 mb-3">{comment.comment}</p>
                          <div className="flex space-x-4">
                            <button className="text-sm cursor-pointer text-gray-500 hover:text-[#FF4F69] transition-colors flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                              </svg>
                              Like
                            </button>
                            <button 
                              onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                              className="text-sm text-gray-500 cursor-pointer hover:text-[#FF4F69] transition-colors flex items-center"
                            >
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                              </svg>
                              Reply
                            </button>
                          </div>

                          {/* Reply Form */}
                          {replyingTo === comment.id && (
                            <form onSubmit={(e) => handleAddReply(comment.id, e)} className="mt-4 flex space-x-3">
                              <img 
                                src="https://assets.thehansindia.com/h-upload/2021/10/04/1115546-tech-news.webp" 
                                alt="You" 
                                className="w-8 h-8 rounded-full flex-shrink-0"
                              />
                              <div className="flex-1">
                                <textarea
                                  value={replyText}
                                  onChange={(e) => setReplyText(e.target.value)}
                                  placeholder="Write a reply..."
                                  className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-[#FF4F69] focus:border-transparent resize-none text-sm"
                                  rows="2"
                                />
                                <div className="flex justify-end space-x-2 mt-2">
                                  <button
                                    type="button"
                                    onClick={() => setReplyingTo(null)}
                                    className="px-4 py-2 cursor-pointer text-sm text-gray-600 hover:text-gray-800 transition-colors"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="submit"
                                    className="bg-[#FF4F69] cursor-pointer text-white px-4 py-2 text-sm  hover:bg-[#e0455d] transition-colors"
                                  >
                                    Send Reply
                                  </button>
                                </div>
                              </div>
                            </form>
                          )}

                          {/* Replies */}
                          {comment.replies && comment.replies.length > 0 && (
                            <div className="mt-4 ml-4 space-y-4 border-l-2 border-gray-200 pl-4">
                              {comment.replies.map(reply => (
                                <div key={reply.id} className="flex space-x-3">
                                  <img 
                                    src={reply.avatar} 
                                    alt={reply.name} 
                                    className="w-8 h-8 rounded-full flex-shrink-0"
                                  />
                                  <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-1">
                                      <h5 className="font-semibold text-gray-800 text-sm">{reply.name}</h5>
                                      <span className="text-xs text-gray-500">{reply.time}</span>
                                    </div>
                                    <p className="text-gray-700 text-sm">{reply.comment}</p>
                                    <div className="flex space-x-3 mt-1">
                                      <button className="text-xs cursor-pointer text-gray-500 hover:text-[#FF4F69] transition-colors">
                                        Like
                                      </button>
                                    </div>
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
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DetailedStories;