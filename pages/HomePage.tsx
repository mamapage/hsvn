
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AnimatedCounter: React.FC<{ target: number; duration?: number; suffix?: string }> = ({ target, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
};

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <div
        className="relative py-24 md:py-36 rounded-2xl bg-gradient-to-tr from-brand-peach/50 to-brand-light-blue/50 overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        <div className="relative z-10 px-4">
            <h1 className="text-3xl md:text-5xl font-extrabold font-poppins text-gray-800 leading-tight">
                Welcome to
            </h1>
            <h2 className="text-4xl md:text-6xl font-extrabold font-poppins text-brand-primary leading-tight mt-2">
                Heria Saraswati Vidyaniketan
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold font-poppins text-brand-secondary leading-tight mt-4">
                হেঁড়িয়া সরস্বতী বিদ্যানিকেতন
            </h3>
            <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-600 font-medium">
                Nurturing excellence through tradition and modern education. Join us in shaping the leaders of tomorrow.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                    to="/admission"
                    className="bg-brand-primary text-white font-bold py-4 px-10 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105 shadow-soft w-full sm:w-auto"
                >
                    Apply for Admission
                </Link>
                <Link
                    to="/contact"
                    className="bg-white text-brand-primary font-bold py-4 px-10 rounded-full hover:bg-gray-50 transition-transform duration-300 hover:scale-105 shadow-soft border border-gray-200 w-full sm:w-auto"
                >
                    Book a School Tour
                </Link>
            </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Parents Trust Us</h2>
        <h3 className="text-xl font-semibold text-brand-primary mb-12">অভিভাবকরা কেন আমাদের ওপর ভরসা করেন</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-soft transform transition-transform hover:scale-105">
                <p className="text-4xl font-extrabold text-brand-primary">
                  <AnimatedCounter target={500} suffix="+" />
                </p>
                <p className="text-gray-600 mt-2 font-semibold">Happy Students</p>
                <p className="text-gray-400 text-sm mt-1">সন্তুষ্ট শিক্ষার্থী</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-soft transform transition-transform hover:scale-105">
                <p className="text-4xl font-extrabold text-brand-primary">
                   <AnimatedCounter target={20} suffix="+" />
                </p>
                <p className="text-gray-600 mt-2 font-semibold">Certified Teachers</p>
                <p className="text-gray-400 text-sm mt-1">দক্ষ শিক্ষক-শিক্ষিকা</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-soft transform transition-transform hover:scale-105">
                <p className="text-4xl font-extrabold text-brand-primary">
                  <AnimatedCounter target={10} suffix="+" />
                </p>
                <p className="text-gray-600 mt-2 font-semibold">Years of Excellence</p>
                <p className="text-gray-400 text-sm mt-1">শিক্ষার ১০ বছর</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
