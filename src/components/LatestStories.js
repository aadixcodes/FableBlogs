'use client';

import React from 'react';
import Image from 'next/image';

const posts = [
  {
    id: 1,
    title: 'How surprised he’ll be when he finds out',
    date: 'MARCH 11, 2013',
    category: 'STAFF’S PICKS, TRENDING',
    excerpt: 'It did so indeed, and much sooner than she had expected.',
    readMore: 'READ MORE',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2013/03/1395871_19682756-630x650.jpg',
    isLarge: true,
  },
  {
    id: 2,
    title: 'Can you catch the expression of the whale?',
    date: 'MARCH 1, 2013',
    category: 'MOVIES, STAFF’S PICKS',
    excerpt: 'So he got out of the fury of the panic, and, skirting the Edgware Road, reached Edgware about seven, fasting and wearied, but well ahead of the crowd.',
    readMore: 'READ MORE',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2011/03/4662380669_cee0623b1f_z-409x320.jpg',
    isLarge: false,
  },
  {
    id: 3,
    title: 'What art thrusting that thief-catcher into my face?',
    date: 'JANUARY 11, 2013',
    category: 'STAFF’S PICKS, TRENDING',
    excerpt: 'I believe I have broken a finger here against his cursed jaw ain’t those mincing knives down in the forecastle there, men?',
    readMore: 'READ MORE',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2023/10/golden-gate-bridge-1081782_1920-409x320.jpg',
    isLarge: false,
  },
  {
    id: 4,
    title: 'The man liberally provides the brains',
    date: 'AUGUST 21, 2010',
    category: 'FOOD, STAFF’S PICKS',
    excerpt: 'I believe I have broken a finger here against his cursed jaw ain’t those mincing knives down in the forecastle there, men?',
    readMore: 'READ MORE',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2011/11/5966792003_15a84663fa_z-409x320.jpg',
    isLarge: false,
  },
];

const LatestStories = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            YOU HAVE TO READ THIS!
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Staff’s Picks
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Large Card (first item) – spans 1 column on all screens */}
          <article className="md:col-span-1 lg:col-span-1">
            <div className="relative mb-6 overflow-hidden">
              <Image
                src={posts[0].image}
                alt={posts[0].title}
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-pink-600 transition-colors">
              {posts[0].title}
            </h3>

            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              {posts[0].date} — {posts[0].category}
            </p>

            <div className="w-12 h-0.5 bg-pink-500 mb-3"></div>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {posts[0].excerpt}
            </p>

            <a
              href="#"
              className="inline-block text-pink-500 font-medium text-sm uppercase tracking-wider hover:text-pink-600 transition-colors"
            >
              {posts[0].readMore} →
            </a>
          </article>

          {/* Small Cards – 3 in a column on lg, 2 on md, 1 on sm */}
          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-1 lg:grid-cols-1 md:col-span-1 lg:col-span-2 md:gap-8 lg:gap-12">
            {posts.slice(1).map((post) => (
              <article
                key={post.id}
                className="flex flex-col sm:flex-row gap-6 group"
              >
                {/* Image */}
                <div className="flex-shrink-0 w-full sm:w-32 lg:w-40">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={300}
                      height={200}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 leading-tight mb-2 group-hover:text-pink-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                    {post.date} — {post.category}
                  </p>

                  {post.id === 3 && <div className="w-12 h-0.5 bg-pink-500 mb-2"></div>}

                  <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <a
                    href="#"
                    className="inline-block text-pink-500 font-medium text-sm uppercase tracking-wider hover:text-pink-600 transition-colors"
                  >
                    {post.readMore} →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestStories;