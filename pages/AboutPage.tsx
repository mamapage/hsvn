
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-4xl font-bold font-poppins text-gray-800">About Heria Saraswati Vidyaniketan</h1>
      <h2 className="text-2xl font-bold font-poppins text-brand-primary mt-2">হেঁড়িয়া সরস্বতী বিদ্যানিকেতন সম্পর্কে</h2>
      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        Learn more about our vision, mission, and the values that guide our approach to holistic education.
      </p>
      <div className="mt-12 p-8 bg-white rounded-2xl shadow-soft text-left">
        <h2 className="text-2xl font-bold text-brand-primary mb-4">Our Mission (আমাদের লক্ষ্য)</h2>
        <p className="text-gray-600">
          To provide a nurturing and inspiring environment where young children can develop a lifelong love for learning, build strong character, and blossom into confident individuals rooted in culture and values.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
