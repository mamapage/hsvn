
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import BlossomIcon from './icons/BlossomIcon';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-xs font-bold transition-colors duration-300 uppercase tracking-wide whitespace-nowrap ${
      isActive ? 'text-brand-primary' : 'text-gray-600 hover:text-brand-primary'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-soft'
          : 'bg-white/50'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center space-x-2 flex-shrink-0">
            <BlossomIcon className="w-10 h-10 text-brand-primary" />
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-bold font-poppins text-gray-800 leading-tight">
                Heria Saraswati Vidyaniketan
              </span>
              <span className="text-[10px] md:text-xs font-semibold text-brand-primary">
                হেঁড়িয়া সরস্বতী বিদ্যানিকেতন
              </span>
            </div>
          </NavLink>
          
          <nav className="hidden lg:flex items-center space-x-1 overflow-x-auto no-scrollbar">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
            <NavLink to="/courses" className={navLinkClass}>Courses</NavLink>
            <NavLink to="/news-events" className={navLinkClass}>News & Events</NavLink>
            <NavLink to="/admission" className={navLinkClass}>Admission</NavLink>
            <NavLink to="/results" className={navLinkClass}>Results</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>
          </nav>

          <div className="flex items-center flex-shrink-0 ml-4">
            <NavLink
              to="/apply-online"
              className="hidden sm:inline-block bg-brand-primary text-white text-xs font-bold py-2 px-4 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105 shadow-soft uppercase tracking-tighter"
            >
              Apply Now
            </NavLink>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden ml-4 p-2 rounded-md text-gray-600 hover:bg-gray-100"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 bg-white/95 rounded-b-2xl absolute left-0 right-0 px-4 shadow-lg border-t border-gray-100">
            <nav className="flex flex-col space-y-2 py-4">
              <NavLink to="/" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              <NavLink to="/about" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
              <NavLink to="/courses" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Courses</NavLink>
              <NavLink to="/news-events" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>News & Events</NavLink>
              <NavLink to="/admission" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Admission</NavLink>
              <NavLink to="/results" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Results</NavLink>
              <NavLink to="/contact" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Contact Us</NavLink>
               <NavLink
                to="/apply-online"
                className="bg-brand-primary text-white text-center font-bold py-3 px-5 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105 shadow-soft mt-2 uppercase text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Apply Now
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
