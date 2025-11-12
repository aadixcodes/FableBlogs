'use client';

import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaEnvelope, FaReddit, FaPinterest } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-[#191919] py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Logo Section */}
                <div className="flex justify-center mb-8 lg:mb-12">
                    <div className="relative w-full max-w-2xl h-24 lg:h-32">
                        <Image
                            src="/assets/logo.png" // Replace with your actual logo path
                            alt="Blog Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex justify-center mb-8 lg:mb-10">
                    <ul className="flex flex-wrap justify-center gap-6 lg:gap-10 text-sm lg:text-base">
                        <li>
                            <a 
                                href="/" 
                                className="text-[#191919] hover:text-[#FF4F69] transition-colors duration-200 font-medium"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a 
                                href="/blogs" 
                                className="text-[#191919] hover:text-[#FF4F69] transition-colors duration-200 font-medium"
                            >
                                Blogs
                            </a>
                        </li>
                        <li>
                            <a 
                                href="/interesting-stories" 
                                className="text-[#191919] hover:text-[#FF4F69] transition-colors duration-200 font-medium"
                            >
                                Stories
                            </a>
                        </li>
                        <li>
                            <a 
                                href="/news-articles" 
                                className="text-[#191919] hover:text-[#FF4F69] transition-colors duration-200 font-medium"
                            >
                                News Articles
                            </a>
                        </li>
                        <li>
                            <a 
                                href="/about-us" 
                                className="text-[#191919] hover:text-[#FF4F69] transition-colors duration-200 font-medium"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a 
                                href="/contact-us" 
                                className="text-[#191919] hover:text-[#FF4F69] transition-colors duration-200 font-medium"
                            >
                                Contact Us
                            </a>
                        </li>
                        
                    </ul>
                </nav>

                {/* Social Links */}
                <div className="flex justify-center mb-8 lg:mb-10">
                    <div className="flex gap-10">
                        
                        
                        {/* Instagram */}
                        <a 
                            href="#" 
                            className="text-[#191919] hover:text-[#FF4F69] transition-colors duration-200 transform hover:scale-110"
                            aria-label="Instagram"
                        >
                            <FaInstagram className="w-6 h-6" />
                        </a>
                        
                        {/* Email */}
                        <a 
                            href="#" 
                            className="text-[#191919] hover:text-[#FF4F69] transition-colors duration-200 transform hover:scale-110"
                            aria-label="Email"
                        >
                            <FaEnvelope className="w-6 h-6" />
                        </a>

                        {/* Facebook */}
                        <a 
                            href="#" 
                            className="text-[#191919] hover:text-[#FF4F69] transition-colors duration-200 transform hover:scale-110"
                            aria-label="Facebook"
                        >
                            <FaFacebookF className="w-6 h-6" />
                        </a>
                        
                        {/* Reddit */}
                        <a 
                            href="#" 
                            className="text-[#191919] hover:text-[#FF4F69] transition-colors duration-200 transform hover:scale-110"
                            aria-label="Reddit"
                        >
                            <FaReddit className="w-6 h-6" />
                        </a>
                        
                        {/* Pinterest */}
                        <a 
                            href="#" 
                            className="text-[#191919] hover:text-[#FF4F69] transition-colors duration-200 transform hover:scale-110"
                            aria-label="Pinterest"
                        >
                            <FaPinterest className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Subscribe Section */}
                <div className="max-w-md mx-auto mb-10 lg:mb-12">
                    <form className="flex flex-row mb-3">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-4 py-3 bg-white border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF4F69] focus:border-transparent text-sm"
                            required
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-[#FF4F69] cursor-pointer hover:bg-[#FF4F69]/90 text-white font-medium  text-sm uppercase tracking-wider transition-colors duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
                        >
                            Subscribe
                        </button>
                    </form>
                    <p className="text-center text-gray-400 text-sm">
                        Subscribe to my email list and stay up-to-date!
                    </p>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-8">
                    <p className="text-center text-gray-400 text-lg font-light mb-3 italic">
                        "Where Thoughts Become Stories and Stories Inspire Lives"
                    </p>
                    <p className="text-center text-gray-500 text-sm">
                        © {new Date().getFullYear()} Your Blog Name. All rights reserved. | Crafted with passion for readers worldwide
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;