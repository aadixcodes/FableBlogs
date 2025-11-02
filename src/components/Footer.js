// 'use client';

// import React from 'react';
// import Image from 'next/image';

// const Footer = () => {
//     return (
//         <footer className="bg-[#E6ECF5] text-[#191919] py-12 lg:py-16">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 {/* Logo Section */}
//                 <div className="flex justify-center mb-8 lg:mb-12">
//                     <div className="relative w-full max-w-2xl h-24 lg:h-32">
//                         <Image
//                             src="/assets/logo.png" // Replace with your actual logo path
//                             alt="Blog Logo"
//                             fill
//                             className="object-contain"
//                             priority
//                         />
//                     </div>
//                 </div>

//                 {/* Navigation Links */}
//                 <nav className="flex justify-center mb-8 lg:mb-10">
//                     <ul className="flex flex-wrap justify-center gap-6 lg:gap-10 text-sm lg:text-base">
//                         <li>
//                             <a 
//                                 href="/" 
//                                 className="text-[#191919] hover:text-[#FF4F69] transition-colors duration-200 font-medium"
//                             >
//                                 Home
//                             </a>
//                         </li>
//                         <li>
//                             <a 
//                                 href="/blogs" 
//                                 className="text-[#191919] hover:text-[#FF4F69] transition-colors duration-200 font-medium"
//                             >
//                                 Blogs
//                             </a>
//                         </li>
//                         <li>
//                             <a 
//                                 href="/categories" 
//                                 className="text-[#191919] hover:text-[#FF4F69] transition-colors duration-200 font-medium"
//                             >
//                                 Categories
//                             </a>
//                         </li>
//                         <li>
//                             <a 
//                                 href="/about" 
//                                 className="text-[#191919] hover:text-[#FF4F69] transition-colors duration-200 font-medium"
//                             >
//                                 About
//                             </a>
//                         </li>
//                         <li>
//                             <a 
//                                 href="/contact" 
//                                 className="text-[#191919] hover:text-[#FF4F69] transition-colors duration-200 font-medium"
//                             >
//                                 Contact
//                             </a>
//                         </li>
//                         <li>
//                             <a 
//                                 href="/privacy" 
//                                 className="text-[#191919] hover:text-[#FF4F69] transition-colors duration-200 font-medium"
//                             >
//                                 Privacy Policy
//                             </a>
//                         </li>
//                     </ul>
//                 </nav>

//                 {/* Social Links */}
//                 <div className="flex justify-center mb-8 lg:mb-10">
//                     <div className="flex gap-6">
//                         {/* Facebook */}
//                         <a 
//                             href="#" 
//                             className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
//                             aria-label="Facebook"
//                         >
//                             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                             </svg>
//                         </a>
                        
//                         {/* Twitter */}
//                         <a 
//                             href="#" 
//                             className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
//                             aria-label="Twitter"
//                         >
//                             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
//                             </svg>
//                         </a>
                        
//                         {/* Instagram */}
//                         <a 
//                             href="#" 
//                             className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
//                             aria-label="Instagram"
//                         >
//                             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.273 14.865 3.783 13.714 3.783 12.417s.49-2.448 1.343-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.853.875 1.343 2.026 1.343 3.323s-.49 2.448-1.343 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
//                             </svg>
//                         </a>
                        
//                         {/* LinkedIn */}
//                         <a 
//                             href="#" 
//                             className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
//                             aria-label="LinkedIn"
//                         >
//                             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                             </svg>
//                         </a>
//                     </div>
//                 </div>

//                 {/* Subscribe Section */}
//                 <div className="max-w-md mx-auto mb-10 lg:mb-12">
//                     <form className="flex flex-col sm:flex-row mb-3">
//                         <input
//                             type="email"
//                             placeholder="Enter your email address"
//                             className="flex-1 px-4 py-3 bg-white border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF4F69] focus:border-transparent text-sm"
//                             required
//                         />
//                         <button
//                             type="submit"
//                             className="px-6 py-3 bg-[#FF4F69] cursor-pointer hover:bg-[#FF4F69]/90 text-white font-medium  text-sm uppercase tracking-wider transition-colors duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
//                         >
//                             Subscribe Now
//                         </button>
//                     </form>
//                     <p className="text-center text-gray-400 text-sm">
//                         Subscribe to my email list and stay up-to-date!
//                     </p>
//                 </div>

//                 {/* Bottom Section */}
//                 <div className="border-t border-gray-800 pt-8">
//                     <p className="text-center text-gray-400 text-lg font-light mb-3 italic">
//                         "Where Thoughts Become Stories and Stories Inspire Lives"
//                     </p>
//                     <p className="text-center text-gray-500 text-sm">
//                         © {new Date().getFullYear()} Your Blog Name. All rights reserved. | Crafted with passion for readers worldwide
//                     </p>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;



'use client';

import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaEnvelope, FaReddit, FaPinterest } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#E6ECF5]/60 text-[#191919] py-12 lg:py-16">
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
                                href="/categories" 
                                className="text-[#191919] hover:text-[#FF4F69] transition-colors duration-200 font-medium"
                            >
                                Categories
                            </a>
                        </li>
                        <li>
                            <a 
                                href="/about" 
                                className="text-[#191919] hover:text-[#FF4F69] transition-colors duration-200 font-medium"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a 
                                href="/contact" 
                                className="text-[#191919] hover:text-[#FF4F69] transition-colors duration-200 font-medium"
                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            <a 
                                href="/privacy" 
                                className="text-[#191919] hover:text-[#FF4F69] transition-colors duration-200 font-medium"
                            >
                                Privacy Policy
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
                            Subscribe Now
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