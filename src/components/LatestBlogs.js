// LatestBlogs.js
'use client';

import React from 'react';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: 'The sunset faded to twilight',
    date: 'APRIL 11, 2019',
    categories: 'PHOTO, TRENDING',
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
    excerpt: 'Through two long weeks I wandered, stumbling through the nights guided only by the stars and hiding during the days behind some protruding rock or among the occasional hills I traversed.',
    readMore: 'READ MORE',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2019/04/biking-1743026_1920-409x320.jpg',
    lineColor: 'bg-[#FF4F69]',
  },
  {
    id: 3,
    title: 'At daybreak of the fifteenth day of my search',
    date: 'FEBRUARY 1, 2019',
    categories: 'FEATURED, LIFESTYLE',
    commentCount: '4 COMMENTS',
    excerpt: 'When the amphitheater had cleared I crept stealthily to the top and as the great excavation lay far from the plaza.',
    readMore: 'READ MORE',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2019/04/downtown-690826_1920-409x320.jpg',
    lineColor: 'bg-[#FF4F69]',
  },
  {
    id: 4,
    title: 'The sunset faded to twilight',
    date: 'APRIL 11, 2019',
    categories: 'PHOTO, TRENDING',
    excerpt: 'I began walking, therefore, in a big curve, seeking some point of vantage and continually looking at the sand.',
    readMore: 'READ MORE',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2012/08/9510379248_ca26f4ab06_b-409x320.jpg',
    lineColor: 'bg-[#FF4F69]',
  },
  {
    id: 5,
    title: 'Two long weeks I wandered',
    date: 'APRIL 8, 2019',
    categories: 'LIFESTYLE',
    excerpt: 'Through two long weeks I wandered, stumbling through the nights guided only by the stars and hiding during the days behind some protruding rock or among the occasional hills I traversed.',
    readMore: 'READ MORE',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2019/04/biking-1743026_1920-409x320.jpg',
    lineColor: 'bg-[#FF4F69]',
  },
  {
    id: 6,
    title: 'At daybreak of the fifteenth day of my search',
    date: 'FEBRUARY 1, 2019',
    categories: 'FEATURED, LIFESTYLE',
    commentCount: '4 COMMENTS',
    excerpt: 'When the amphitheater had cleared I crept stealthily to the top and as the great excavation lay far from the plaza.',
    readMore: 'READ MORE',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2019/04/downtown-690826_1920-409x320.jpg',
    lineColor: 'bg-[#FF4F69]',
  },
];

const LatestBlogs = () => {
  return (
    <>
      <section className="py-8 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-left mb-8">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
              BROWSE AND READ THE LATEST STUFF
            </p>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Latest Blogs
            </h2>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                {/* Image Container */}
                <div className="relative overflow-hidden mb-6">
                  <div className="aspect-w-4 aspect-h-3 w-full">
                    <div className="w-full h-64 bg-gray-200 border-2 border-dashed rounded-none overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  {/* Decorative overlay on bottom-right */}
                  {/* <div className="absolute bottom-0 right-0 w-12 h-12 bg-gray-900 transform translate-x-1/2 translate-y-1/2"></div> */}
                </div>

                {/* Content */}
                <div className="space-y-3 bg-white py-6 pr-4  w-[85%] -mt-20 relative z-50">
                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl  font-bold text-[#191919] leading-tight group-hover:text-[#FF4F69] transition-colors">
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
                    className="inline-block mt-4 text-[#FF4F69] font-medium text-sm uppercase tracking-wider hover:text-[#FF4F69] transition-colors"
                  >
                    {post.readMore} →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Adjustments */}
      <style jsx>{`
        @media (max-width: 640px) {
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      `}</style>
    </>
  );
};

export default LatestBlogs;