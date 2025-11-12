// File: NewsArticles.js
// Fixed and improved version with proper alignment, white background, and #FF4F69 accent color
'use client';
import React from 'react';

const NewsArticles = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">


      {/* Hero Section */}
      <section className="bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Story - Left Column */}
            <div className="lg:col-span-8">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
                  alt="Obama"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="text-sm text-gray-300 mb-2">Apr 04, 2015 - 03:11:33 PM</div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                   <a href="/news-articles/obama-confident-of-reaching-deal-by-june" className="hover:underline hover:text-[#FF4F69]"> Obama 'confident' of reaching deal by June
                  </a>
                  </h1>
                  <div className="flex items-center space-x-6 text-sm mb-4">
                    <span className="flex items-center space-x-1">
                      <span>13K Comments</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span>40K Shares</span>
                    </span>
                  </div>
                  <button className="bg-[#FF4F69] hover:bg-[#e0455d] text-white px-8 py-3 text-base font-medium rounded-lg transition-colors duration-200 shadow-md">
                    Read More
                  </button>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Small Story 1 */}
              <div className="flex space-x-4 bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <img
                  src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
                  alt="Bill Gates"
                  className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold mb-2 hover:text-[#FF4F69] transition-colors duration-200 cursor-pointer">
                    Bill Gates on AI
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Microsoft co-founder warns about future risks of artificial intelligence and calls for responsible development.
                  </p>
                </div>
              </div>

              {/* Small Story 2 */}
              <div className="flex space-x-4 bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <img
                  src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
                  alt="London"
                  className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold mb-2 hover:text-[#FF4F69] transition-colors duration-200 cursor-pointer">
                    London 2015: Rainy grass is healthy
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Experts say wet summer benefits UK lawns and promotes sustainable urban green spaces across the city.
                  </p>
                </div>
              </div>
              <div className="flex space-x-4 bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <img
                  src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
                  alt="London"
                  className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold mb-2 hover:text-[#FF4F69] transition-colors duration-200 cursor-pointer">
                    London 2015: Rainy grass is healthy
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Experts say wet summer benefits UK lawns and promotes sustainable urban green spaces across the city.
                  </p>
                </div>
              </div>
              <div className="flex space-x-4 bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <img
                  src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
                  alt="London"
                  className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold mb-2 hover:text-[#FF4F69] transition-colors duration-200 cursor-pointer">
                    London 2015: Rainy grass is healthy
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Experts say wet summer benefits UK lawns and promotes sustainable urban green spaces across the city.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breaking News Ticker */}
      <div className="bg-[#FF4F69] py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-base font-medium">
          <span className="mx-6">🚨 Breaking News</span>
          <span className="mx-6">Kerry's Iran nuclear talks set for March deadline</span>
          <span className="mx-6">Manchester United demand record goalkeeper transfer fee</span>
          <span className="mx-6">Greek debt talks: deeper and deadlocked</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <main className="max-w-screen-2xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div className="space-y-8">
            <article className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <img
                src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
                alt="Goalkeeper"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <span className="text-xs font-bold text-[#FF4F69] uppercase tracking-wide">Sport</span>
                <h2 className="text-xl font-bold mt-2 mb-3 leading-tight hover:text-[#FF4F69] transition-colors duration-200 cursor-pointer">
                  Manchester United demand record goalkeeper transfer fee for De Gea
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Manchester United would only consider allowing David de Gea to leave if Real Madrid offer a world record fee for a goalkeeper.
                </p>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <img
                src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
                alt="Putin"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold mb-3 leading-tight hover:text-[#FF4F69] transition-colors duration-200 cursor-pointer">
                  Nato's Russian city
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Estonia is one of Nato's newest members. It shares a border with Russia and is home to a large Russian-speaking minority.
                </p>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <img
                src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
                alt="Jindal"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold mb-3 leading-tight hover:text-[#FF4F69] transition-colors duration-200 cursor-pointer">
                  Bobby Jindal presidential bid sparks Twitter mockery
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Louisiana Governor Bobby Jindal's announcement of his bid for the Republican presidential race has sparked a wave of online mockery.
                </p>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <img
                src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
                alt="Evertone"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold mb-3 leading-tight hover:text-[#FF4F69] transition-colors duration-200 cursor-pointer">
                  DeJong seals £3.2m Evertone
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Everton complete the signing of midfielder Siem de Jong from Newcastle for £3.2m on a three-year deal.
                </p>
              </div>
            </article>
          </div>

          {/* Column 2 */}
          <div className="space-y-8">
            <article className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <img
                src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
                alt="Debt"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold mb-3 leading-tight hover:text-[#FF4F69] transition-colors duration-200 cursor-pointer">
                  Greek debt talks: deeper and deadlocked
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Greece has called for a eurozone summit to try to break the deadlock in its debt talks with international creditors.
                </p>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <img
                src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
                alt="Cameron"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold mb-3 leading-tight hover:text-[#FF4F69] transition-colors duration-200 cursor-pointer">
                  What does David Cameron want?
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  If the Tories win a majority, David Cameron has pledged to renegotiate the UK's relationship with the EU.
                </p>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <img
                src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
                alt="Uber"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold mb-3 leading-tight hover:text-[#FF4F69] transition-colors duration-200 cursor-pointer">
                  French Uber protests block Paris and Marseille transport
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Taxi drivers have brought parts of Paris and Marseille to a standstill in protest against UberPop service.
                </p>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <img
                src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
                alt="Evertone"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold mb-3 leading-tight hover:text-[#FF4F69] transition-colors duration-200 cursor-pointer">
                  DeJong seals £3.2m Evertone
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Everton complete the signing of midfielder Siem de Jong from Newcastle for £3.2m on a three-year deal.
                </p>
              </div>
            </article>
          </div>

          {/* Column 3 - Top News */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <h3 className="text-xl font-bold mb-6 pb-3 border-b-2 border-[#FF4F69]">Top News</h3>
              <ul className="space-y-6">
                <li className="flex space-x-4 pb-4 border-b border-gray-100 last:border-b-0">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
                    alt="3D Print"
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-semibold mb-2 hover:text-[#FF4F69] transition-colors duration-200 cursor-pointer leading-tight">
                      In pictures: 3D art in China's rice paddies
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Eye-popping 3D art created with 1.8 million rice plants in paddy fields across China.
                    </p>
                  </div>
                </li>
                <li className="flex space-x-4 pb-4 border-b border-gray-100 last:border-b-0">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
                    alt="Flag"
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-semibold mb-2 hover:text-[#FF4F69] transition-colors duration-200 cursor-pointer leading-tight">
                      US state to fly Confederate flag at capitol on 4th July
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      South Carolina to fly Confederate flag at statehouse on Independence Day amid controversy.
                    </p>
                  </div>
                </li>
                <li className="flex space-x-4">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
                    alt="Microsoft"
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-semibold mb-2 hover:text-[#FF4F69] transition-colors duration-200 cursor-pointer leading-tight">
                      Samsung blocks Microsoft Office on new phones
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Samsung removes Microsoft Office from new Galaxy phones in ongoing patent dispute.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#FF4F69] to-[#e0455d] p-6 rounded-lg shadow-md text-white">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.5 4.5 4.5 0 001.38 6.01 4.44 4.44 0 01-2.02-.56v.06a4.5 4.5 0 003.6 4.41 4.46 4.46 0 01-2.02.08 4.5 4.5 0 004.2 3.12 9 9 0 01-6.67 1.87q-.85-.01-1.7-.1a12.71 12.71 0 006.9 2.02c8.28 0 12.81-66.86 12.81-12.81 0-.2-.01-.4-.02-.6a9.17 9.17 0 002.25-2.34z" />
                </svg>
              </div>
              <p className="text-sm text-center leading-relaxed">
                <strong className="text-lg">Follow @BBCBreaking</strong><br />
                <span className="opacity-90">Breaking news alerts and updates from the BBC. For UK news, follow @BBCNews.</span>
              </p>
            </div>
            <article className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <img
                src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
                alt="Evertone"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold mb-3 leading-tight hover:text-[#FF4F69] transition-colors duration-200 cursor-pointer">
                  DeJong seals £3.2m Evertone
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Everton complete the signing of midfielder Siem de Jong from Newcastle for £3.2m on a three-year deal.
                </p>
              </div>
            </article>
          </div>

          {/* Column 4 */}
          <div className="space-y-8">
            <article className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <img
                src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
                alt="Middle Ages"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold mb-3 leading-tight hover:text-[#FF4F69] transition-colors duration-200 cursor-pointer">
                  What's at the end of the middle ages market?
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Medieval re-enactors gather in Tewkesbury to mark the 550th anniversary of the Battle of Tewkesbury.
                </p>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <img
                src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
                alt="Tsipras"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold mb-3 leading-tight hover:text-[#FF4F69] transition-colors duration-200 cursor-pointer">
                  Greek debt crisis: Tsipras may face leadership challenge
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Greek PM Alexis Tsipras may face a leadership challenge if he fails to secure a deal with creditors.
                </p>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <img
                src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
                alt="Evertone"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold mb-3 leading-tight hover:text-[#FF4F69] transition-colors duration-200 cursor-pointer">
                  DeJong seals £3.2m Evertone
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Everton complete the signing of midfielder Siem de Jong from Newcastle for £3.2m on a three-year deal.
                </p>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <img
                src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
                alt="Evertone"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold mb-3 leading-tight hover:text-[#FF4F69] transition-colors duration-200 cursor-pointer">
                  DeJong seals £3.2m Evertone
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Everton complete the signing of midfielder Siem de Jong from Newcastle for £3.2m on a three-year deal.
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>



      <style jsx>{`
        @keyframes marquee {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default NewsArticles;