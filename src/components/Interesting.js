'use client';

import React from 'react';
import Image from 'next/image';

const posts = [
  // Large featured post
  {
    id: 1,
    title: 'The man liberally provides the brains',
    date: 'AUGUST 21, 2010',
    categories: 'FOOD, STAFF\'S PICKS',
    excerpt: 'I believe I have broken a finger here against his cursed jaw ain\'t those mincing knives down in the forecastle there, men?',
    readMore: 'READ MORE',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2011/11/5966792003_15a84663fa_z.jpg',
    isLarge: true,
  },
  // Grid posts (2 in row)
  {
    id: 2,
    title: 'He runs towards the Maybury Hill: Embeds',
    date: 'SEPTEMBER 12, 2010',
    categories: 'LIFESTYLE, MOVIES',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2018/09/city-3214117_1920-400x500.jpg',
  },
  {
    id: 3,
    title: 'Can you catch the expression of the whale?',
    date: 'MARCH 1, 2013',
    categories: 'MOVIES, STAFF\'S PICKS',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2011/03/4662380669_cee0623b1f_z-400x500.jpg',
  },
  // Sidebar popular posts
  {
    id: 4,
    rank: 1,
    title: 'I realized that the crest must be within the range of...',
    date: 'AUGUST 15, 2018',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2018/08/top-view-1248955_1920-100x100.jpg',
  },
  {
    id: 5,
    rank: 2,
    title: 'It must be in a month, but I see nothing here',
    date: 'JULY 25, 2018',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2018/07/surfer-3233474_1920-100x100.jpg',
  },
  {
    id: 6,
    rank: 3,
    title: 'Audio Post: A sigh of satisfaction',
    date: 'NOVEMBER 3, 2018',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2016/11/food-1932466_1920-100x100.jpg',
  },
  {
    id: 7,
    rank: 4,
    title: 'At daybreak of the fifteenth day of my search',
    date: 'FEBRUARY 1, 2019',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2019/04/downtown-690826_1920-100x100.jpg',
  },
  {
    id: 8,
    rank: 5,
    title: 'Two long weeks I wandered',
    date: 'APRIL 8, 2019',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2019/04/biking-1743026_1920-100x100.jpg',
  },
  {
    id: 9,
    rank: 6,
    title: 'The sunset faded to twilight',
    date: 'APRIL 11, 2019',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2019/04/biking-1743026_1920-100x100.jpg',
  },
  {
    id: 10,
    rank: 7,
    title: 'Then going through some small strange motions',
    date: 'APRIL 8, 2023',
    image: 'https://blogs.themnific.com/gutenverse/wp-content/uploads/2019/04/coffee-4334647_1920-100x100.jpg',
  },
];

const Interesting = () => {
  const featured = posts[0];
  const gridPosts = posts.slice(1, 3);
  const sidebarPosts = posts.slice(3);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-start mb-12">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            EXPLORE SOME TRENDING ARTICLES
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
            Interesting World!
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Main Content - 3/4 */}
          <div className="lg:col-span-3 space-y-8">
            {/* Large Featured Post */}
            <article className="group cursor-pointer">
              <div className="relative overflow-hidden">
                <div className="relative h-[400px] lg:h-[500px]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Content inside image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                    <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-3 group-hover:text-[#FF4F69] transition-colors">
                      {featured.title}
                    </h3>
                    
                    <p className="text-xs uppercase tracking-widest text-gray-300 mb-2">
                      {featured.date} — {featured.categories}
                    </p>

                    <p className="text-gray-200 text-sm leading-relaxed mb-4 max-w-2xl">
                      {featured.excerpt}
                    </p>

                    <a
                      href="#"
                      className="inline-block text-[#FF4F69] font-medium text-sm uppercase tracking-wider transition-colors"
                    >
                      {featured.readMore} →
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Grid Posts - 2 in a row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {gridPosts.map((post) => (
                <article key={post.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <div className="relative h-[300px] lg:h-[350px]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Content inside image */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-lg lg:text-xl font-bold leading-tight mb-2 group-hover:text-[#FF4F69] transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-xs uppercase tracking-widest text-gray-300">
                          {post.date} — {post.categories}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar - 1/4 */}
          <aside className="lg:col-span-2">
            <div className="border-t-2 border-[#FF4F69] pt-6 lg:pt-0 lg:border-t-0">
              <h3 className="text-sm uppercase tracking-widest text-gray-500 font-medium mb-6">
                MOST POPULAR POSTS
              </h3>

              <div className="space-y-6">
                {sidebarPosts.map((post) => (
                  <article key={post.id} className="flex items-start gap-3 group cursor-pointer">
                    {/* Rank */}
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-700">
                      {post.rank}
                    </div>

                    {/* Image */}
                    <div className="flex-shrink-0 w-28 h-28 relative overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xl font-medium text-gray-900 leading-tight group-hover:text-[#FF4F69] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {post.date}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Interesting;