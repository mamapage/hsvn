
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
        <div className="flex items-center justify-between h-20 md:h-24">
          <NavLink to="/" className="flex items-center space-x-2 flex-shrink-0">
            <BlossomIcon className="w-10 h-10 md:w-12 md:h-12 text-brand-primary" />
            <div className="flex flex-col">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold font-poppins text-gray-800 leading-tight">
                Heria Saraswati Vidyaniketan
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-brand-primary uppercase tracking-wider">
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
            <NavLink to="/id-card" className={navLinkClass}>ID Card</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>
          </nav>

          <div className="flex items-center flex-shrink-0 ml-2 sm:ml-4">
            <NavLink
              to="/apply-online"
              className="hidden sm:inline-block bg-brand-primary text-white text-xs font-bold py-2.5 px-5 rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-soft uppercase tracking-tighter"
            >
              Apply Now
            </NavLink>
            
            {/* Improved Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden ml-2 p-2.5 rounded-xl text-gray-700 bg-white/50 border border-gray-100 shadow-sm hover:bg-white hover:text-brand-primary active:scale-95 transition-all duration-200"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-12 6h12"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Improved Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full bg-white shadow-2xl border-t border-gray-100 rounded-b-3xl overflow-hidden animate-slide-down">
            <nav className="flex flex-col p-6 space-y-1">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/courses", label: "Courses" },
                { to: "/news-events", label: "News & Events" },
                { to: "/admission", label: "Admission" },
                { to: "/results", label: "Results" },
                { to: "/id-card", label: "ID Card" },
                { to: "/contact", label: "Contact Us" }
              ].map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => 
                    `block px-4 py-4 text-sm font-bold rounded-xl transition-all duration-200 ${
                      isActive 
                        ? 'bg-brand-primary/10 text-brand-primary' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4">
                <NavLink
                  to="/apply-online"
                  className="block w-full bg-brand-primary text-white text-center font-bold py-4 rounded-xl hover:bg-opacity-90 transition-transform active:scale-95 shadow-soft uppercase text-sm tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Apply Now
                </NavLink>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
