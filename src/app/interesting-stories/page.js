// File: InterestingStories.js
// Updated version with Top Stories section, removed reviews, and enhanced Best of Tech section
'use client';
import React from 'react';

const InterestingStories = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* Trending Section */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800 flex items-center mb-3 sm:mb-0">
              <span className="mr-2 text-gray-900 text-3xl">Latest Stories</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Main Trending Story */}
            <article className="relative group overflow-hidden shadow-lg md:col-span-2 lg:col-span-1">
              <img
                src="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.webp"
                alt="Photography"
                className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
                <span className="inline-block bg-[#FF4F69] text-xs px-2 py-1 rounded mb-2">Beauty</span>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  <a href="/interesting-stories/aaa" className="text-white hover:underline hover:text-[#FF4F69]">Lesson 1: Basics Of Photography With Natural Lighting</a>
                </h3>
                <div className="flex items-center text-xs text-gray-300">
                  <span>Gillion, 4 years ago</span>
                  <span className="mx-2">•</span>
                  <span>3 min read</span>
                </div>
              </div>
            </article>

            {/* Secondary Stories */}
            <article className="relative group overflow-hidden shadow-lg md:col-span-2 lg:col-span-1">
              <img
                src="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.webp"
                alt="Photography"
                className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
                <span className="inline-block bg-[#FF4F69] text-xs px-2 py-1 rounded mb-2">Beauty</span>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  <a href="/interesting-stories/aaa" className="text-white hover:underline hover:text-[#FF4F69]">Lesson 1: Basics Of Photography With Natural Lighting</a>
                </h3>
                <div className="flex items-center text-xs text-gray-300">
                  <span>Gillion, 4 years ago</span>
                  <span className="mx-2">•</span>
                  <span>3 min read</span>
                </div>
              </div>
            </article>

            <article className="relative group overflow-hidden  shadow-lg md:col-span-2 lg:col-span-1">
              <img
                src="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.webp"
                alt="Photography"
                className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
                <span className="inline-block bg-[#FF4F69] text-xs px-2 py-1 rounded mb-2">Beauty</span>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  <a href="/interesting-stories/aaa" className="text-white hover:underline hover:text-[#FF4F69]">Lesson 1: Basics Of Photography With Natural Lighting</a>
                </h3>
                <div className="flex items-center text-xs text-gray-300">
                  <span>Gillion, 4 years ago</span>
                  <span className="mx-2">•</span>
                  <span>3 min read</span>
                </div>
              </div>
            </article>

            <article className="relative group overflow-hidden shadow-lg md:col-span-2 lg:col-span-1">
              <img
                src="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.webp"
                alt="Photography"
                className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
                <span className="inline-block bg-[#FF4F69] text-xs px-2 py-1 rounded mb-2">Beauty</span>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  <a href="/interesting-stories/aaa" className="text-white hover:underline hover:text-[#FF4F69]">Lesson 1: Basics Of Photography With Natural Lighting</a>
                </h3>
                <div className="flex items-center text-xs text-gray-300">
                  <span>Gillion, 4 years ago</span>
                  <span className="mx-2">•</span>
                  <span>3 min read</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Top Stories Section (Replaced Top Categories) */}
      <section className="py-12 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Large Card */}
            <div className="lg:w-1/2">
              <article className="relative group overflow-hidden shadow-lg h-full">
                <img
                  src="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.webp"
                  alt="Stairway"
                  className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="inline-block bg-[#FF4F69] text-xs px-2 py-1 rounded mb-2">Lifestyle</span>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                   <a href="/interesting-stories/aaa" className="text-white hover:underline hover:text-[#FF4F69]"> White Stairway. Architectural marvel!</a>
                    </h3>
                  <p className="text-xs text-gray-300">Gillion, 3 years ago • 3 min read</p>
                </div>
              </article>
            </div>

            {/* Right Column - Top Stories Grid */}
            <div className="lg:w-2/3">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#FF4F69] pl-3 mb-4 sm:mb-0">TOP STORIES</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Top Stories with square images */}
                <article className="bg-white p-3 shadow hover:shadow-md transition-all border border-gray-100 flex gap-3">
                  <img 
                    src="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.webp" 
                    alt="Story" 
                    className="w-16 h-16 object-cover flex-shrink-0" 
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold mb-1 line-clamp-2">How To Climb The Career Ladder And Don't Waste Your Youth</h4>
                    <p className="text-xs text-gray-500">Gillion, 3 years ago • 3 min read</p>
                  </div>
                </article>

                <article className="bg-white p-3 shadow hover:shadow-md transition-all border border-gray-100 flex gap-3">
                  <img 
                    src="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.webp" 
                    alt="Story" 
                    className="w-16 h-16 object-cover flex-shrink-0" 
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold mb-1 line-clamp-2">Health Tips And Benefits Of Healthy Lifestyle You Should Consider</h4>
                    <p className="text-xs text-gray-500">Gillion, 3 years ago • 3 min read</p>
                  </div>
                </article>

                <article className="bg-white p-3  shadow hover:shadow-md transition-all border border-gray-100 flex gap-3">
                  <img 
                    src="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.webp" 
                    alt="Story" 
                    className="w-16 h-16 object-cover flex-shrink-0" 
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold mb-1 line-clamp-2">New Coffee Place You Have To Visit This Weekend</h4>
                    <p className="text-xs text-gray-500">Gillion, 3 years ago • 3 min read</p>
                  </div>
                </article>

                <article className="bg-white p-3 shadow hover:shadow-md transition-all border border-gray-100 flex gap-3">
                  <img 
                    src="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.webp" 
                    alt="Story" 
                    className="w-16 h-16 object-cover flex-shrink-0" 
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold mb-1 line-clamp-2">What're People Buzzing About? Your Content Should Join The Conversation</h4>
                    <p className="text-xs text-gray-500">Gillion, 3 years ago • 3 min read</p>
                  </div>
                </article>

                <article className="bg-white p-3 shadow hover:shadow-md transition-all border border-gray-100 flex gap-3">
                  <img 
                    src="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.webp" 
                    alt="Story" 
                    className="w-16 h-16 object-cover flex-shrink-0" 
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold mb-1 line-clamp-2">Latest Trends in Digital Marketing You Can't Ignore</h4>
                    <p className="text-xs text-gray-500">Gillion, 3 years ago • 3 min read</p>
                  </div>
                </article>

                <article className="bg-white p-3 shadow hover:shadow-md transition-all border border-gray-100 flex gap-3">
                  <img 
                    src="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.webp" 
                    alt="Story" 
                    className="w-16 h-16 object-cover flex-shrink-0" 
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold mb-1 line-clamp-2">Remote Work Revolution: How Companies Are Adapting</h4>
                    <p className="text-xs text-gray-500">Gillion, 3 years ago • 3 min read</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best of Tech & Gadgets - Full Width */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#FF4F69] pl-3 mb-8">BEST OF TECH & GADGETS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tech Card 1 */}
            <article className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.webp" 
                  alt="Smartwatch" 
                  className="w-full h-62 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                  <span className="inline-block bg-[#FF4F69] text-xs px-2 py-1 rounded mb-2">Tech</span>
                  <h4 className="text-lg font-bold mb-1 group-hover:text-[#FF4F69] transition-colors duration-300">
                   <a href="#" className="hover:text-[#FF4F69]"> Latest Smartwatch Features You Need </a> 
                  </h4>
                  <p className="text-xs opacity-90">Gillion • 3 min read</p>
                </div>
              </div>
            </article>

            {/* Tech Card 2 */}
            <article className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.webp" 
                  alt="Phone" 
                  className="w-full h-62 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                  <span className="inline-block bg-[#FF4F69] text-xs px-2 py-1 rounded mb-2">Mobile</span>
                  <h4 className="text-lg font-bold mb-1 group-hover:text-[#FF4F69] transition-colors duration-300">
                    <a href="#" className="hover:text-[#FF4F69]"> Phone Innovations Changing The Game </a>
                  </h4>
                  <p className="text-xs opacity-90">Gillion • 3 min read</p>
                </div>
              </div>
            </article>

            {/* Tech Card 3 */}
            <article className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.webp" 
                  alt="AI Tech" 
                  className="w-full h-62 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                  <span className="inline-block bg-[#FF4F69] text-xs px-2 py-1 rounded mb-2">AI</span>
                  <h4 className="text-lg font-bold mb-1 group-hover:text-[#FF4F69] transition-colors duration-300">
                    <a href="#" className="hover:text-[#FF4F69]"> Tech That Helps Plants Thrive </a>
                  </h4>
                  <p className="text-xs opacity-90">Gillion • 3 min read</p>
                </div>
              </div>
            </article>

            {/* Tech Card 4 */}
            <article className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.webp" 
                  alt="Laptop" 
                  className="w-full h-62 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent  transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                  <span className="inline-block bg-[#FF4F69] text-xs px-2 py-1 rounded mb-2">Computing</span>
                  <h4 className="text-lg font-bold mb-1 group-hover:text-[#FF4F69] transition-colors duration-300">
                     <a href="#" className="hover:text-[#FF4F69]">  Next-Gen Laptops: What To Expect </a>
                  </h4>
                  <p className="text-xs opacity-90">Gillion • 3 min read</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InterestingStories;