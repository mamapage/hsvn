
import React from 'react';
import { NavLink } from 'react-router-dom';
import BlossomIcon from './icons/BlossomIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/50 border-t border-gray-200/50 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <BlossomIcon className="w-10 h-10 text-brand-primary" />
              <span className="text-xl font-bold font-poppins text-gray-800">
                Little Blossoms
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              Where Little Minds Blossom Into Bright Futures.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/about" className="text-gray-600 hover:text-brand-primary">About Us</NavLink></li>
              <li><NavLink to="/courses" className="text-gray-600 hover:text-brand-primary">Courses</NavLink></li>
              <li><NavLink to="/admission" className="text-gray-600 hover:text-brand-primary">Admissions</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-600 hover:text-brand-primary">Contact</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>123 Blossom Lane, Education City, 45678</li>
              <li>+1 (234) 567-890</li>
              <li>info@littleblossoms.school</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Newsletter</h3>
            <p className="text-sm text-gray-500 mb-2">Stay updated with our latest news.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="w-full px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:ring-brand-primary focus:border-brand-primary" />
              <button type="submit" className="bg-brand-primary text-white px-4 rounded-r-md hover:bg-opacity-90 transition">
                Go
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Little Blossoms International Nursery School. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
