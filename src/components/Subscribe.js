'use client';

import React from 'react';
import Image from 'next/image';

const Subscribe = () => {
    return (
        <section className="bg-gray-100 py-16 lg:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">

                    {/* Left Side - Text + Form */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6 lg:mb-8">
                            Sign Up to get print & digital access to the Magazine
                        </h2>

                        <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                            Magazine publishes monthly, except for combined issues that count as two, as indicated on issue's cover.
                        </p>

                        {/* Email Form */}
                        <form className="flex flex-row  max-w-md mx-auto lg:mx-0">
                            <input
                                type="email"
                                placeholder="YOUR EMAIL ADDRESS"
                                className="flex-1 px-5 py-3 border border-gray-300 text-sm uppercase tracking-wider placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                required
                            />
                            <button
                                type="submit"
                                className="px-8 py-3 bg-[#FF4F69] hover:bg-[#FF4F69]/90 cursor-pointer text-white font-medium text-sm uppercase tracking-wider transition-colors duration-200 shadow-md hover:shadow-lg"
                            >
                                Sign Up
                            </button>
                        </form>

                        <p className="text-sm text-gray-500 mt-4">
                            Subscribe to my email list and stay up-to-date!
                        </p>
                    </div>

                    {/* Right Side - Magazine Mockup */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
                            {/* Main Image */}
                            <div className="relative aspect-[4/2] w-full">
                                <Image
                                    src="https://blogs.themnific.com/gutenverse/wp-content/uploads/2019/08/Photorealistic-Magazine-GutenVerse-768x551.png"
                                    alt="Magazine spread"
                                    fill
                                    className="object-cover rounded-lg"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                            

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Subscribe;