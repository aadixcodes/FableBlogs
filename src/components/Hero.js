// Hero.js
'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    date: 'APRIL 8, 2023',
    category: 'FEATURED, FOOD',
    title: 'Then going through some small strange motions',
    excerpt: 'A moderate incline runs towards the foot of Maybury Hill, and down this we clattered. Once the lightning had begun, it went on in as rapid a succession of flashes as I have ever seen. At first I took it for the wet roof of a house, but one flash following another showed it to be in swift rolling mo...',
    bgImage: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2018/08/top-view-1248955_1920-995x770.jpg',
  },
  {
    id: 2,
    date: 'OCTOBER 15, 2023',
    category: 'TRAVEL, ADVENTURE',
    title: 'The mountains whispered secrets of ancient times',
    excerpt: 'The wind carried stories through the valleys, where rivers carved their paths through stone. Each peak held memories of climbers who came before, their footsteps etched into the rugged terrain...',
    bgImage: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2019/04/coffee-4334647_1920-995x770.jpg',
  },
  {
    id: 3,
    date: 'JULY 22, 2023',
    category: 'TECH, INNOVATION',
    title: 'When machines began to dream in code',
    excerpt: 'In the quiet hum of server rooms, algorithms learned to imagine. What started as patterns became poetry, and silicon hearts beat with electric curiosity...',
    bgImage: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2019/04/downtown-690826_1920-995x770.jpg',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const current = heroSlides[currentSlide];

  return (
    <section className="relative w-full h-[43rem] lg:h-[45rem] overflow-hidden">
      
      {/* Full Width Container */}
      <div className="w-full h-full">
        
        {/* Inner Container - More than 7xl width but not full width */}
        <div className="w-full max-w-[97rem] mx-auto h-full">
          
          {/* Two Divs in Row - No Gap */}
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-0 h-full">
            
            {/* First Div - Black Background Full Height */}
            <div className="hidden lg:block bg-[#2B2D30] relative">
              {/* Empty black background */}
            </div>

            {/* Second Div - Image Full Height and Width */}
            <div className="relative w-full h-80 lg:h-full">
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out"
                style={{ backgroundImage: `url('${current.bgImage}')` }}
              />
              
              {/* Navigation Buttons - On Image Bottom Right */}
              <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 z-40 flex items-center space-x-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 lg:w-12 lg:h-12 bg-[#FF4F69] hover:bg-[#FF4F69]/90 text-white  flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 lg:w-12 lg:h-12 bg-[#FF4F69] hover:bg-[#FF4F69]/90 text-white flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
                </button>
              </div>

              {/* Slide Indicators - On Image Bottom Center */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40 flex space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-[#FF4F69] w-6' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Content Overlay - Positioned above both sections */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="w-full max-w-[85rem] mx-auto h-full px-4 sm:px-6 lg:px-8">
              
              {/* Desktop Layout */}
              <div className="hidden lg:flex items-center h-full">
                <div className="w-full">
                  <div className="grid grid-cols-2 gap-0 items-center h-full">
                    
                    {/* Content Area - Overlapping both black and image sections */}
                    <div className="relative">
                      <div className="bg-white p-8 lg:p-12 shadow-2xl relative -mr-12 pointer-events-auto">
                        {/* Decorative line */}
                        <div className="absolute top-0 left-8 w-12 h-0.5 bg-[#FF4F69]"></div>
                        
                        {/* Date */}
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 mt-2">
                          {current.date}
                        </p>

                        {/* Category */}
                        <p className="text-xs uppercase tracking-widest text-[#FF4F69] mb-4">
                          {current.category}
                        </p>

                        {/* Title */}
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl text-[#191919] font-bold leading-tight mb-6">
                          {current.title}
                        </h1>

                        {/* Excerpt */}
                        <p className="text-gray-600 leading-relaxed text-base lg:text-lg max-w-2xl mb-6">
                          {current.excerpt}
                        </p>

                        {/* Read More Link */}
                        <a 
                          href="#" 
                          className="inline-block text-[#FF4F69] font-medium hover:text-[#FF4F69]/90 transition-colors text-sm uppercase tracking-wider pointer-events-auto"
                        >
                          Continue Reading →
                        </a>
                      </div>
                    </div>

                    {/* Right Spacer */}
                    <div></div>

                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden pt-80 pb-8">
                <div className="bg-white p-4 pointer-events-auto">
                  {/* Date */}
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                    {current.date}
                  </p>

                  {/* Category */}
                  <p className="text-xs uppercase tracking-widest text-[#FF4F69] mb-4">
                    {current.category}
                  </p>

                  {/* Title */}
                  <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4">
                    {current.title}
                  </h1>

                  {/* Excerpt */}
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">
                    {current.excerpt}
                  </p>

                  {/* Read More Link */}
                  <a 
                    href="#" 
                    className="inline-block text-[#FF4F69] font-medium hover:text-[#FF4F69]/90 transition-colors text-sm uppercase tracking-wider"
                  >
                    Continue Reading →
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;