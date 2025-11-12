// File: NewsDetailPage.js
// Professional news detail page with left alignment, right sidebar, and sharp corners
'use client';
import React, { useState } from 'react';

const NewsDetailPage = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      user: 'John Smith',
      avatar: 'https://t3.ftcdn.net/jpg/01/75/17/46/360_F_175174631_fZWpQKTkvuuXxZN6rz7x7mzjwCrhJq0o.jpg',
      time: '2 hours ago',
      content: 'This is a very insightful article. The analysis of the current economic situation is spot on!',
      likes: 24,
      liked: false,
      replies: [
        {
          id: 101,
          user: 'Sarah Johnson',
          avatar: 'https://t3.ftcdn.net/jpg/01/75/17/46/360_F_175174631_fZWpQKTkvuuXxZN6rz7x7mzjwCrhJq0o.jpg',
          time: '1 hour ago',
          content: 'I completely agree, John. The data presented here really supports the conclusions.',
          likes: 8,
          liked: false
        }
      ]
    },
    {
      id: 2,
      user: 'Mike Chen',
      avatar: 'https://t3.ftcdn.net/jpg/01/75/17/46/360_F_175174631_fZWpQKTkvuuXxZN6rz7x7mzjwCrhJq0o.jpg',
      time: '4 hours ago',
      content: 'While I appreciate the effort, I think the article misses some key points about the long-term implications.',
      likes: 15,
      liked: true,
      replies: []
    }
  ]);

  const [newComment, setNewComment] = useState('');
  const [replyContents, setReplyContents] = useState({});
  const [email, setEmail] = useState('');

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: comments.length + 1,
      user: 'Current User',
      avatar: 'https://t3.ftcdn.net/jpg/01/75/17/46/360_F_175174631_fZWpQKTkvuuXxZN6rz7x7mzjwCrhJq0o.jpg',
      time: 'Just now',
      content: newComment,
      likes: 0,
      liked: false,
      replies: []
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  const handleLikeComment = (commentId, isReply = false, parentId = null) => {
    setComments(prev => prev.map(comment => {
      if (isReply && comment.id === parentId) {
        return {
          ...comment,
          replies: comment.replies.map(reply => 
            reply.id === commentId 
              ? { ...reply, likes: reply.liked ? reply.likes - 1 : reply.likes + 1, liked: !reply.liked }
              : reply
          )
        };
      }
      if (!isReply && comment.id === commentId) {
        return { 
          ...comment, 
          likes: comment.liked ? comment.likes - 1 : comment.likes + 1,
          liked: !comment.liked 
        };
      }
      return comment;
    }));
  };

  const handleAddReply = (commentId, e) => {
    e.preventDefault();
    const replyContent = replyContents[commentId];
    if (!replyContent?.trim()) return;

    const newReply = {
      id: Date.now(),
      user: 'Current User',
      avatar: 'https://t3.ftcdn.net/jpg/01/75/17/46/360_F_175174631_fZWpQKTkvuuXxZN6rz7x7mzjwCrhJq0o.jpg',
      time: 'Just now',
      content: replyContent,
      likes: 0,
      liked: false
    };

    setComments(prev => prev.map(comment => 
      comment.id === commentId 
        ? { ...comment, replies: [...comment.replies, newReply] }
        : comment
    ));
    
    setReplyContents(prev => ({ ...prev, [commentId]: '' }));
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  const latestNews = [
    {
      id: 1,
      title: 'Global Markets React to New Economic Policies',
      time: '1 hour ago',
      category: 'Business'
    },
    {
      id: 2,
      title: 'Tech Giants Announce Major AI Partnership',
      time: '3 hours ago',
      category: 'Technology'
    },
    {
      id: 3,
      title: 'Climate Summit Reaches Historic Agreement',
      time: '5 hours ago',
      category: 'Environment'
    },
    {
      id: 4,
      title: 'Sports League Introduces New Safety Rules',
      time: '7 hours ago',
      category: 'Sports'
    }
  ];

  const trendingNews = [
    {
      id: 1,
      title: 'Breaking: Major Scientific Discovery Announced',
      views: '45K'
    },
    {
      id: 2,
      title: 'Exclusive Interview with World Leader',
      views: '38K'
    },
    {
      id: 3,
      title: 'New Health Study Reveals Surprising Findings',
      views: '32K'
    },
    {
      id: 4,
      title: 'Entertainment Industry Latest Scandal',
      views: '28K'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      

      {/* Main Content with Sidebar */}
      <div className="max-w-screen-2xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content - Main Article */}
          <div className="lg:w-2/3">
            {/* Article Header */}
            <article className="bg-white shadow-lg border border-gray-200 overflow-hidden mb-8">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#FF4F69] text-white px-3 py-1 text-sm font-medium">Politics</span>
                  <div className="text-sm text-gray-500">Published: April 4, 2015 | Updated: 2 hours ago</div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
                  Obama 'Confident' of Reaching Nuclear Deal with Iran by June Deadline
                </h1>
                
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3">
                      <img 
                        src="https://t3.ftcdn.net/jpg/01/75/17/46/360_F_175174631_fZWpQKTkvuuXxZN6rz7x7mzjwCrhJq0o.jpg" 
                        alt="Robert Brown"
                        className="w-12 h-12"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">Robert Brown</div>
                        <div className="text-sm text-gray-500">Senior Political Correspondent</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>12 min read</span>
                    <span>•</span>
                    <span>4.2K views</span>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="mb-8 overflow-hidden">
                  <img
                    src="https://t3.ftcdn.net/jpg/01/75/17/46/360_F_175174631_fZWpQKTkvuuXxZN6rz7x7mzjwCrhJq0o.jpg"
                    alt="Obama Iran Nuclear Talks"
                    className="w-full h-auto object-cover"
                  />
                  <p className="text-sm text-gray-600 mt-2 text-center">
                    President Obama speaks during a press conference about the ongoing nuclear negotiations with Iran.
                  </p>
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="text-xl font-semibold mb-6 text-gray-900">
                    President Barack Obama expressed strong confidence on Friday that world powers would reach a comprehensive nuclear agreement with Iran by the end of June, despite significant obstacles remaining in the negotiations.
                  </p>

                  <p className="mb-6">
                    In a wide-ranging interview at the White House, the president acknowledged that several key issues were still unresolved but emphasized that diplomatic progress had been "substantial and meaningful." The remarks come as negotiators from the United States, Iran, and five other world powers prepare for another round of talks next week in Vienna.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Key Sticking Points</h2>
                  
                  <p className="mb-6">
                    The negotiations have been complicated by disagreements over the pace of sanctions relief, the scope of Iran's nuclear research and development, and the duration of the agreement. Western officials want constraints on Iran's nuclear program to last at least 10 years, while Iranian negotiators have pushed for a much shorter timeframe.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-[#FF4F69] p-6 my-8">
                    <p className="text-lg font-semibold text-gray-900 mb-2">"We have made more progress in the last year than in the previous decade combined."</p>
                    <p className="text-gray-700">— President Barack Obama</p>
                  </div>

                  <p className="mb-6">
                    International inspectors would maintain continuous surveillance of Iran's declared nuclear sites under the proposed deal, but discussions continue about how to address concerns over possible covert facilities. The International Atomic Energy Agency (IAEA) would play a crucial role in verifying Iranian compliance.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Regional Implications</h2>

                  <p className="mb-6">
                    A successful agreement could reshape Middle Eastern politics, potentially reducing tensions between Iran and its regional rivals, including Saudi Arabia and Israel. However, Israeli Prime Minister Benjamin Netanyahu has repeatedly criticized the emerging deal, calling it a "historic mistake" that would empower Iran.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gray-50 p-6">
                      <h3 className="font-bold text-lg mb-3 text-gray-900">What Iran Gets</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Gradual sanctions relief</li>
                        <li>• Access to frozen assets</li>
                        <li>• International recognition</li>
                        <li>• Economic normalization</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6">
                      <h3 className="font-bold text-lg mb-3 text-gray-900">What World Gets</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Nuclear program limits</li>
                        <li>• Enhanced inspections</li>
                        <li>• Longer breakout time</li>
                        <li>• Regional stability</li>
                      </ul>
                    </div>
                  </div>

                  <p className="mb-6">
                    Secretary of State John Kerry has been leading the U.S. negotiating team, spending countless hours in discussions with Iranian Foreign Minister Mohammad Javad Zarif. Both sides have described the talks as serious and professional, though they acknowledge the challenges ahead.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Congressional Response</h2>

                  <p className="mb-6">
                    On Capitol Hill, lawmakers from both parties have expressed skepticism about the emerging agreement. Several bills have been introduced that would give Congress the ability to review and potentially reject any final deal. The White House has threatened to veto such legislation, setting up a potential constitutional confrontation.
                  </p>

                  <p className="mb-6">
                    As the June 30 deadline approaches, all parties involved recognize that the coming weeks will be critical. The success or failure of these negotiations could have profound implications for nuclear nonproliferation efforts and Middle Eastern stability for decades to come.
                  </p>
                </div>

                {/* Article Footer */}
                <div className="border-t border-gray-200 mt-8 pt-6">
                  <div className="flex flex-wrap gap-4 justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-[#FF4F69] transition-colors duration-200">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        <span>2.4K</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-[#FF4F69] transition-colors duration-200">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>{comments.reduce((total, comment) => total + 1 + comment.replies.length, 0)}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-[#FF4F69] transition-colors duration-200">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        <span>Share</span>
                      </button>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>Tags:</span>
                      <a href="#" className="text-[#FF4F69] hover:underline">#Obama</a>
                      <a href="#" className="text-[#FF4F69] hover:underline">#Iran</a>
                      <a href="#" className="text-[#FF4F69] hover:underline">#NuclearDeal</a>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Comments Section */}
            <section className="bg-white shadow-lg border border-gray-200 p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Comments ({comments.reduce((total, comment) => total + 1 + comment.replies.length, 0)})
                </h2>
                <div className="text-sm text-gray-500">
                  Join the conversation
                </div>
              </div>

              {/* Add Comment Form */}
              <form onSubmit={handleAddComment} className="mb-8">
                <div className="flex space-x-4">
                  <img 
                    src="https://t3.ftcdn.net/jpg/01/75/17/46/360_F_175174631_fZWpQKTkvuuXxZN6rz7x7mzjwCrhJq0o.jpg" 
                    alt="Your avatar"
                    className="w-12 h-12 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Share your thoughts..."
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF4F69] focus:border-transparent resize-none"
                      rows="4"
                    />
                    <div className="flex justify-between items-center mt-3">
                      <div className="text-sm text-gray-500">
                        Be respectful and stay on topic
                      </div>
                      <button
                        type="submit"
                        className="bg-[#FF4F69] hover:bg-[#e0455d] text-white px-6 py-2 font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!newComment.trim()}
                      >
                        Post Comment
                      </button>
                    </div>
                  </div>
                </div>
              </form>

              {/* Comments List */}
              <div className="space-y-8">
                {comments.map((comment) => (
                  <div key={comment.id} className="border-b border-gray-200 pb-8 last:border-b-0">
                    {/* Main Comment */}
                    <div className="flex space-x-4">
                      <img 
                        src={comment.avatar} 
                        alt={comment.user}
                        className="w-10 h-10 flex-shrink-0 mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <span className="font-semibold text-gray-900">{comment.user}</span>
                            <span className="text-sm text-gray-500">{comment.time}</span>
                          </div>
                          <button 
                            onClick={() => handleLikeComment(comment.id)}
                            className={`flex items-center space-x-1 text-sm ${
                              comment.liked ? 'text-[#FF4F69]' : 'text-gray-500 hover:text-[#FF4F69]'
                            } transition-colors duration-200`}
                          >
                            <svg className="w-4 h-4" fill={comment.liked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg>
                            <span>{comment.likes}</span>
                          </button>
                        </div>
                        <p className="text-gray-700 mb-3 leading-relaxed">{comment.content}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <button 
                            onClick={() => setReplyContents(prev => ({ 
                              ...prev, 
                              [comment.id]: prev[comment.id] ? '' : `@${comment.user} ` 
                            }))}
                            className="text-[#FF4F69] hover:text-[#e0455d] font-medium transition-colors duration-200"
                          >
                            Reply
                          </button>
                          <button className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
                            Report
                          </button>
                        </div>

                        {/* Reply Form */}
                        {replyContents[comment.id] !== undefined && (
                          <form onSubmit={(e) => handleAddReply(comment.id, e)} className="mt-4 flex space-x-3">
                            <img 
                              src="https://t3.ftcdn.net/jpg/01/75/17/46/360_F_175174631_fZWpQKTkvuuXxZN6rz7x7mzjwCrhJq0o.jpg" 
                              alt="Your avatar"
                              className="w-8 h-8 flex-shrink-0"
                            />
                            <div className="flex-1">
                              <input
                                type="text"
                                value={replyContents[comment.id] || ''}
                                onChange={(e) => setReplyContents(prev => ({ 
                                  ...prev, 
                                  [comment.id]: e.target.value 
                                }))}
                                placeholder="Write a reply..."
                                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF4F69] focus:border-transparent"
                              />
                              <div className="flex justify-end space-x-2 mt-2">
                                <button
                                  type="button"
                                  onClick={() => setReplyContents(prev => ({ ...prev, [comment.id]: undefined }))}
                                  className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
                                >
                                  Cancel
                                </button>
                                <button
                                  type="submit"
                                  className="bg-[#FF4F69] hover:bg-[#e0455d] text-white px-4 py-1 text-sm transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                  disabled={!replyContents[comment.id]?.trim()}
                                >
                                  Reply
                                </button>
                              </div>
                            </div>
                          </form>
                        )}

                        {/* Replies */}
                        {comment.replies.length > 0 && (
                          <div className="mt-6 space-y-4 ml-4 pl-4 border-l-2 border-gray-200">
                            {comment.replies.map((reply) => (
                              <div key={reply.id} className="flex space-x-3">
                                <img 
                                  src={reply.avatar} 
                                  alt={reply.user}
                                  className="w-8 h-8 flex-shrink-0 mt-1"
                                />
                                <div className="flex-1">
                                  <div className="flex items-center justify-between mb-1">
                                    <div className="flex items-center space-x-2">
                                      <span className="font-semibold text-gray-900 text-sm">{reply.user}</span>
                                      <span className="text-xs text-gray-500">{reply.time}</span>
                                    </div>
                                    <button 
                                      onClick={() => handleLikeComment(reply.id, true, comment.id)}
                                      className={`flex items-center space-x-1 text-xs ${
                                        reply.liked ? 'text-[#FF4F69]' : 'text-gray-500 hover:text-[#FF4F69]'
                                      } transition-colors duration-200`}
                                    >
                                      <svg className="w-3 h-3" fill={reply.liked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                      </svg>
                                      <span>{reply.likes}</span>
                                    </button>
                                  </div>
                                  <p className="text-gray-700 text-sm leading-relaxed">{reply.content}</p>
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

              {/* Load More Comments */}
              <div className="text-center mt-8">
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 font-medium transition-colors duration-200">
                  Load More Comments
                </button>
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-1/3">
            <div className="space-y-6">
              {/* Latest News Card */}
              <div className="bg-white shadow-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-3">Latest News</h3>
                <div className="space-y-4">
                  {latestNews.map((news) => (
                    <div key={news.id} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                      <h4 className="font-semibold text-gray-900 mb-1 hover:text-[#FF4F69] transition-colors duration-200 cursor-pointer">
                        {news.title}
                      </h4>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{news.category}</span>
                        <span>{news.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trending News Card */}
              <div className="bg-white shadow-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-3">Trending Now</h3>
                <div className="space-y-4">
                  {trendingNews.map((news, index) => (
                    <div key={news.id} className="flex items-start space-x-3 border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                      <span className="bg-[#FF4F69] text-white text-sm font-bold w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                        {index + 1}
                      </span>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 hover:text-[#FF4F69] transition-colors duration-200 cursor-pointer text-sm">
                          {news.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          {news.views} views
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Follow Us Card */}
              <div className="bg-white shadow-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-3">Follow Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border border-gray-200 hover:border-[#FF4F69] transition-colors duration-200 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">f</span>
                      </div>
                      <span className="font-medium">Facebook</span>
                    </div>
                    <span className="text-sm text-gray-500">45K followers</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-gray-200 hover:border-[#FF4F69] transition-colors duration-200 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-400 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.5 4.5 4.5 0 001.38 6.01 4.44 4.44 0 01-2.02-.56v.06a4.5 4.5 0 003.6 4.41 4.46 4.46 0 01-2.02.08 4.5 4.5 0 004.2 3.12 9 9 0 01-6.67 1.87q-.85-.01-1.7-.1a12.71 12.71 0 006.9 2.02c8.28 0 12.81-66.86 12.81-12.81 0-.2-.01-.4-.02-.6a9.17 9.17 0 002.25-2.34z"/>
                        </svg>
                      </div>
                      <span className="font-medium">Twitter</span>
                    </div>
                    <span className="text-sm text-gray-500">32K followers</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-gray-200 hover:border-[#FF4F69] transition-colors duration-200 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-500 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <span className="font-medium">Instagram</span>
                    </div>
                    <span className="text-sm text-gray-500">28K followers</span>
                  </div>
                </div>
              </div>

              {/* Newsletter Card */}
              <div className="bg-white shadow-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-3">Newsletter</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Stay updated with our latest news and articles. Subscribe to our newsletter today!
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF4F69] focus:border-transparent text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#FF4F69] hover:bg-[#e0455d] text-white py-2 font-medium transition-colors duration-200"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-3">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;