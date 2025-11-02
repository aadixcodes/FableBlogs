// // Navbar.js
// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const toggleMenu = () => {
//     if (!isAnimating) {
//       if (!isMenuOpen) {
//         // Opening menu
//         setIsAnimating(true);
//         setIsMenuOpen(true);
//       } else {
//         // Closing menu
//         setIsAnimating(true);
//         setIsMenuOpen(false);
//         // Remove animating state after transition completes
//         setTimeout(() => {
//           setIsAnimating(false);
//         }, 300);
//       }
//     }
//   };

//   const handleDropdown = (menu) => {
//     if (window.innerWidth >= 1024) {
//       setActiveDropdown(activeDropdown === menu ? null : menu);
//     }
//   };

//   const closeDropdown = () => {
//     setActiveDropdown(null);
//   };

//   useEffect(() => {
//     // When menu opens, remove animating state after transition
//     if (isMenuOpen && isAnimating) {
//       const timer = setTimeout(() => {
//         setIsAnimating(false);
//       }, 300);
//       return () => clearTimeout(timer);
//     }
//   }, [isMenuOpen, isAnimating]);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setIsMenuOpen(false);
//         setActiveDropdown(null);
//       }
//     };

//     // Prevent body scroll when mobile menu is open
//     if (isMenuOpen) {
//       document.body.style.overflow = 'hidden';
//       document.body.style.position = 'fixed';
//       document.body.style.width = '100%';
//     } else {
//       document.body.style.overflow = 'unset';
//       document.body.style.position = 'static';
//     }

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       document.body.style.overflow = 'unset';
//       document.body.style.position = 'static';
//     };
//   }, [isMenuOpen]);

//   const navLinks = ['Home', 'Blogs', 'Stories', 'News', 'Contact us'];

//   return (
//     <>
//       <nav className="w-full bg-white border-b border-gray-200 mt-4">
//         {/* Top Bar - Desktop Layout */}
//         <div className="bg-white border-b border-gray-100">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//             {/* Desktop Layout */}
//             <div className="hidden lg:flex items-center justify-between h-20">
//               {/* Left Side - Social Icons */}
//               <div className="flex items-center space-x-6">
//                 <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15h-2v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.86 8.14 6.83 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 2.5-.34c.85.01 1.71.13 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A9.96 9.96 0 0 0 22 12c0-5.5-4.46-9.96-9.96-9.96z"/>
//                   </svg>
//                 </a>
//               </div>

//               {/* Center Logo - Big Horizontal Image */}
//               <div className="flex items-center justify-center flex-1 mx-4">
//                 <div className="w-80 h-20 flex items-center justify-center">
//                   <img 
//                     src="/assets/logo.png" 
//                     alt="GUTENVERSE" 
//                     className="w-full h-full object-contain"
//                     onError={(e) => {
//                       e.target.style.display = 'none';
//                       e.target.nextSibling.style.display = 'block';
//                     }}
//                   />
//                   {/* Fallback Text Logo */}
//                   <div className="hidden text-center">
//                     <h1 className="text-4xl font-bold tracking-tighter">
//                       GUTENVERSE
//                     </h1>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Side - Subscribe Button */}
//               <div className="flex items-center space-x-6">
//                 <button className="bg-[#FF4F69] text-white px-6 py-2 rounded-sm cursor-pointer transition-colors font-medium text-sm uppercase tracking-wider">
//                   Subscribe
//                 </button>
//               </div>
//             </div>

//             {/* Mobile Layout */}
//             <div className="lg:hidden flex flex-col space-y-4">
//               {/* First Row - Centered Logo */}
//               <div className="flex justify-center">
//                 <div className="w-56 h-16 flex items-center justify-center">
//                   <img 
//                     src="/assets/logo.png" 
//                     alt="GUTENVERSE" 
//                     className="w-full h-full object-contain"
//                     onError={(e) => {
//                       e.target.style.display = 'none';
//                       e.target.nextSibling.style.display = 'block';
//                     }}
//                   />
//                 </div>
//               </div>

//               {/* Second Row - Social Icons (Left) and Menu Button (Right) */}
//               <div className="flex items-center justify-between px-2">
//                 {/* Left Side - Social Icons */}
//                 <div className="flex items-center space-x-4">
//                   <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15h-2v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
//                     </svg>
//                   </a>
//                   <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
//                     </svg>
//                   </a>
//                   <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.86 8.14 6.83 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 2.5-.34c.85.01 1.71.13 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A9.96 9.96 0 0 0 22 12c0-5.5-4.46-9.96-9.96-9.96z"/>
//                     </svg>
//                   </a>
//                 </div>

//                 {/* Right Side - Menu Button */}
//                 <button
//                   onClick={toggleMenu}
//                   className="text-gray-800 hover:text-gray-600 focus:outline-none p-1 transition-transform duration-300 hover:scale-110"
//                 >
//                   {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Navigation - Desktop Only */}
//         <div className="hidden lg:block bg-white py-4">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center justify-center">
//               <div className="flex items-center space-x-16">
//                 {navLinks.map((link, index) => (
//                   <a 
//                     key={index}
//                     href="#" 
//                     className={`font-medium hover:text-[#FF4F69] transition-colors text-sm uppercase tracking-wider ${
//                       link === 'Home' ? 'text-[#FF4F69]' : 'text-gray-800'
//                     }`}
//                   >
//                     {link}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu - Full Screen Overlay with Smooth Transitions */}
//         <div className={`
//           lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto
//           transition-all duration-300 ease-in-out
//           ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}
//           ${isMenuOpen || isAnimating ? 'pointer-events-auto' : 'pointer-events-none'}
//         `}>
//           <div className="min-h-screen flex flex-col">
//             {/* Mobile Menu Header */}
//             <div className="flex items-center justify-between p-4 border-b border-gray-200">
//               <div className="w-32 h-8">
//                 <img 
//                   src="/assets/logo.png" 
//                   alt="GUTENVERSE" 
//                   className="w-full h-full object-contain"
//                   onError={(e) => {
//                     e.target.style.display = 'none';
//                     e.target.nextSibling.style.display = 'block';
//                   }}
//                 />
//                 {/* <div className="hidden text-center">
//                   <h1 className="text-xl font-bold tracking-tighter">
//                     GUTENVERSE
//                   </h1>
//                 </div> */}
//               </div>
//               <button
//                 onClick={toggleMenu}
//                 className="text-gray-800 hover:text-gray-600 focus:outline-none p-2 transition-transform duration-300 hover:scale-110"
//               >
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             {/* Mobile Menu Content */}
//             <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
//               {/* Navigation Links */}
//               <div className="space-y-4 text-center mb-12 w-full max-w-sm">
//                 {navLinks.map((link, index) => (
//                   <a 
//                     key={index}
//                     href="#" 
//                     onClick={toggleMenu}
//                     className={`
//                       block w-full py-4 text-xl font-medium transition-all duration-300 
//                       uppercase tracking-wider border-b border-gray-100 last:border-b-0
//                       transform hover:scale-105
//                       ${link === 'Home' 
//                         ? 'text-[#FF4F69] scale-105' 
//                         : 'text-gray-800 hover:text-[#FF4F69]'
//                       }
//                       ${isMenuOpen && !isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
//                     `}
//                     style={{
//                       transitionDelay: isMenuOpen && !isAnimating ? `${index * 100}ms` : '0ms'
//                     }}
//                   >
//                     {link}
//                   </a>
//                 ))}
//               </div>

//               {/* Subscribe Button in Mobile Menu */}
//               <button 
//                 onClick={toggleMenu}
//                 className={`
//                   bg-[#FF4F69] text-white px-5 py-3 rounded-md 
//                   transition-all duration-300 font-medium cursor-pointer text-sm uppercase tracking-wider 
//                   mb-12 transform hover:scale-105
//                   ${isMenuOpen && !isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
//                 `}
//                 style={{
//                   transitionDelay: isMenuOpen && !isAnimating ? '500ms' : '0ms'
//                 }}
//               >
//                 Subscribe Now
//               </button>

//               {/* Social Icons in Mobile Menu */}
//               <div className={`
//                 flex items-center space-x-6 transition-all duration-300
//                 ${isMenuOpen && !isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
//               `}
//                 style={{
//                   transitionDelay: isMenuOpen && !isAnimating ? '600ms' : '0ms'
//                 }}
//               >
//                 <a href="#" className="text-gray-800 hover:text-[#FF4F69] transition-colors p-2 transform hover:scale-110">
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15h-2v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-800 hover:text-[#FF4F69] transition-colors p-2 transform hover:scale-110">
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-800 hover:text-[#FF4F69] transition-colors p-2 transform hover:scale-110">
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.86 8.14 6.83 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 2.5-.34c.85.01 1.71.13 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A9.96 9.96 0 0 0 22 12c0-5.5-4.46-9.96-9.96-9.96z"/>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;



'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaReddit, FaPinterest } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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

  const navLinks = ['Home', 'Blogs', 'Stories', 'News', 'Contact us'];

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
                  <a 
                    key={index}
                    href="#" 
                    className={`font-medium hover:text-[#FF4F69] transition-colors text-sm uppercase tracking-wider ${
                      link === 'Home' ? 'text-[#FF4F69]' : 'text-gray-800'
                    }`}
                  >
                    {link}
                  </a>
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
                  <a 
                    key={index}
                    href="#" 
                    onClick={toggleMenu}
                    className={`
                      block w-full py-4 text-xl font-medium transition-all duration-300 
                      uppercase tracking-wider border-b border-gray-100 last:border-b-0
                      transform hover:scale-105
                      ${link === 'Home' 
                        ? 'text-[#FF4F69] scale-105' 
                        : 'text-gray-800 hover:text-[#FF4F69]'
                      }
                      ${isMenuOpen && !isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                    `}
                    style={{
                      transitionDelay: isMenuOpen && !isAnimating ? `${index * 100}ms` : '0ms'
                    }}
                  >
                    {link}
                  </a>
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