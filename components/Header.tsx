
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
    `px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
      isActive ? 'text-brand-primary' : 'text-gray-600 hover:text-brand-primary'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center space-x-2">
            <BlossomIcon className="w-10 h-10 text-brand-primary" />
            <span className="text-xl font-bold font-poppins text-gray-800">
              Little Blossoms
            </span>
          </NavLink>
          
          <nav className="hidden md:flex items-center space-x-2">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
            <NavLink to="/courses" className={navLinkClass}>Courses</NavLink>
            <NavLink to="/admission" className={navLinkClass}>Admission</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>

          <div className="flex items-center">
            <NavLink
              to="/apply-online"
              className="hidden md:inline-block bg-brand-primary text-white font-bold py-2 px-5 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105 shadow-soft"
            >
              Apply Now
            </NavLink>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden ml-4 p-2 rounded-md text-gray-600 hover:bg-gray-100"
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
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <NavLink to="/" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              <NavLink to="/about" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
              <NavLink to="/courses" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Courses</NavLink>
              <NavLink to="/admission" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Admission</NavLink>
              <NavLink to="/contact" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
               <NavLink
                to="/apply-online"
                className="bg-brand-primary text-white text-center font-bold py-2 px-5 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105 shadow-soft mt-2"
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
