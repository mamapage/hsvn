
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <div
        className="relative py-24 md:py-36 rounded-2xl bg-gradient-to-tr from-brand-peach/50 to-brand-light-blue/50 overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold font-poppins text-gray-800 leading-tight">
                Where Little Minds Blossom
            </h1>
            <h2 className="text-4xl md:text-6xl font-extrabold font-poppins text-brand-primary leading-tight">
                Into Bright Futures
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
                Welcome to a place of wonder, growth, and joyful learning. We nurture every child's potential in a safe, caring, and stimulating environment.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                    to="/admission"
                    className="bg-brand-primary text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105 shadow-soft w-full sm:w-auto"
                >
                    Apply for Admission
                </Link>
                <Link
                    to="/contact"
                    className="bg-white text-brand-primary font-bold py-3 px-8 rounded-full hover:bg-gray-50 transition-transform duration-300 hover:scale-105 shadow-soft border border-gray-200 w-full sm:w-auto"
                >
                    Book a School Tour
                </Link>
            </div>
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Parents Trust Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-soft">
                <p className="text-4xl font-extrabold text-brand-primary">500+</p>
                <p className="text-gray-600 mt-2">Happy Students</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-soft">
                <p className="text-4xl font-extrabold text-brand-primary">20+</p>
                <p className="text-gray-600 mt-2">Certified Teachers</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-soft">
                <p className="text-4xl font-extrabold text-brand-primary">10+</p>
                <p className="text-gray-600 mt-2">Years of Excellence</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
