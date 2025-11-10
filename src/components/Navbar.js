
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaReddit, FaPinterest } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    if (!isAnimating) {
      if (!isMenuOpen) {
        // Opening menu
        setIsAnimating(true);
        setIsMenuOpen(true);
      } else {
        // Closing menu
        setIsAnimating(true);
        setIsMenuOpen(false);
        // Remove animating state after transition completes
        setTimeout(() => {
          setIsAnimating(false);
        }, 300);
      }
    }
  };

  const handleDropdown = (menu) => {
    if (window.innerWidth >= 1024) {
      setActiveDropdown(activeDropdown === menu ? null : menu);
    }
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    // When menu opens, remove animating state after transition
    if (isMenuOpen && isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isMenuOpen, isAnimating]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    // Prevent body scroll when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Stories', href: '/stories' },
    { name: 'News', href: '/news-articles' },
    { name: 'Contact us', href: '/contact-us' }
  ];

  return (
    <>
      <nav className="w-full bg-white border-b border-gray-200 mt-4">
        {/* Top Bar - Desktop Layout */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center justify-between h-20">
              {/* Left Side - Social Icons */}
              <div className="flex items-center space-x-6">
                <Link href="https://facebook.com" className="text-gray-800 hover:text-[#FF4F69] transition-colors">
                  <FaFacebookF className="w-5 h-5" />
                </Link>
                <Link href="https://instagram.com" className="text-gray-800 hover:text-[#FF4F69] transition-colors">
                  <FaInstagram className="w-5 h-5" />
                </Link>
                <Link href="https://reddit.com" className="text-gray-800 hover:text-[#FF4F69] transition-colors">
                  <FaReddit className="w-5 h-5" />
                </Link>
                <Link href="https://pinterest.com" className="text-gray-800 hover:text-[#FF4F69] transition-colors">
                  <FaPinterest className="w-5 h-5" />
                </Link>
              </div>

              {/* Center Logo - Big Horizontal Image */}
              <div className="flex items-center justify-center flex-1 mx-4">
                <div className="w-80 h-20 flex items-center justify-center">
                  <img 
                    src="/assets/logo.png" 
                    alt="GUTENVERSE" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  {/* Fallback Text Logo */}
                  <div className="hidden text-center">
                    <h1 className="text-4xl font-bold tracking-tighter">
                      GUTENVERSE
                    </h1>
                  </div>
                </div>
              </div>

              {/* Right Side - Subscribe Button */}
              <div className="flex items-center space-x-6">
                <button className="bg-[#FF4F69] text-white px-6 py-2 rounded-sm cursor-pointer transition-colors font-medium text-sm uppercase tracking-wider">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden flex flex-col space-y-4">
              {/* First Row - Centered Logo */}
              <div className="flex justify-center">
                <div className="w-56 h-16 flex items-center justify-center">
                  <img 
                    src="/assets/logo.png" 
                    alt="GUTENVERSE" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                </div>
              </div>

              {/* Second Row - Social Icons (Left) and Menu Button (Right) */}
              <div className="flex items-center justify-between px-2">
                {/* Left Side - Social Icons */}
                <div className="flex items-center space-x-4">
                  <a href="#" className="text-gray-800 hover:text-[#FF4F69] transition-colors">
                    <FaFacebookF className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-800 hover:text-[#FF4F69] transition-colors">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-800 hover:text-[#FF4F69] transition-colors">
                    <FaReddit className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-800 hover:text-[#FF4F69] transition-colors">
                    <FaPinterest className="w-5 h-5" />
                  </a>
                </div>

                {/* Right Side - Menu Button */}
                <button
                  onClick={toggleMenu}
                  className="text-gray-800 hover:text-gray-600 focus:outline-none p-1 transition-transform duration-300 hover:scale-110"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation - Desktop Only */}
        <div className="hidden lg:block bg-white py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-16">
                {navLinks.map((link, index) => (
                  <Link 
                    key={index}
                    href={link.href}
                    className={`font-medium hover:text-[#FF4F69] transition-colors text-sm uppercase tracking-wider ${
                      pathname === link.href ? 'text-[#FF4F69]' : 'text-gray-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Full Screen Overlay with Smooth Transitions */}
        <div className={`
          lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}
          ${isMenuOpen || isAnimating ? 'pointer-events-auto' : 'pointer-events-none'}
        `}>
          <div className="min-h-screen flex flex-col">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="w-32 h-8">
                <img 
                  src="/assets/logo.png" 
                  alt="GUTENVERSE" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                {/* <div className="hidden text-center">
                  <h1 className="text-xl font-bold tracking-tighter">
                    GUTENVERSE
                  </h1>
                </div> */}
              </div>
              <button
                onClick={toggleMenu}
                className="text-gray-800 hover:text-gray-600 focus:outline-none p-2 transition-transform duration-300 hover:scale-110"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
              {/* Navigation Links */}
              <div className="space-y-4 text-center mb-12 w-full max-w-sm">
                {navLinks.map((link, index) => (
                  <Link 
                    key={index}
                    href={link.href}
                    onClick={toggleMenu}
                    className={`
                      block w-full py-4 text-xl font-medium transition-all duration-300 
                      uppercase tracking-wider border-b border-gray-100 last:border-b-0
                      transform hover:scale-105
                      ${pathname === link.href 
                        ? 'text-[#FF4F69] scale-105' 
                        : 'text-gray-800 hover:text-[#FF4F69]'
                      }
                      ${isMenuOpen && !isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                    `}
                    style={{
                      transitionDelay: isMenuOpen && !isAnimating ? `${index * 100}ms` : '0ms'
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Subscribe Button in Mobile Menu */}
              <button 
                onClick={toggleMenu}
                className={`
                  bg-[#FF4F69] text-white px-5 py-3 rounded-md 
                  transition-all duration-300 font-medium cursor-pointer text-sm uppercase tracking-wider 
                  mb-12 transform hover:scale-105
                  ${isMenuOpen && !isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                `}
                style={{
                  transitionDelay: isMenuOpen && !isAnimating ? '500ms' : '0ms'
                }}
              >
                Subscribe Now
              </button>

              {/* Social Icons in Mobile Menu */}
              <div className={`
                flex items-center space-x-6 transition-all duration-300
                ${isMenuOpen && !isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
              `}
                style={{
                  transitionDelay: isMenuOpen && !isAnimating ? '600ms' : '0ms'
                }}
              >
                <a href="#" className="text-gray-800 hover:text-[#FF4F69] transition-colors p-2 transform hover:scale-110">
                  <FaFacebookF className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-800 hover:text-[#FF4F69] transition-colors p-2 transform hover:scale-110">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-800 hover:text-[#FF4F69] transition-colors p-2 transform hover:scale-110">
                  <FaReddit className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-800 hover:text-[#FF4F69] transition-colors p-2 transform hover:scale-110">
                  <FaPinterest className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;