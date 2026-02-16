
import React from 'react';

const CoursesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-4xl font-bold font-poppins text-gray-800">Our Programs</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        We offer a range of age-appropriate programs designed to stimulate growth and curiosity.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {['Playgroup (2-3)', 'Nursery (3-4)', 'LKG (4-5)', 'UKG (5-6)'].map((course) => (
            <div key={course} className="bg-white p-6 rounded-2xl shadow-soft hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-brand-primary">{course.split(' ')[0]}</h3>
                <p className="text-sm text-gray-500">{course.split(' ')[1]}</p>
                <p className="text-gray-600 mt-4 text-sm">A fun-filled program focusing on social skills, motor development, and creative expression.</p>
                <button className="mt-6 w-full bg-brand-secondary text-white font-bold py-2 px-4 rounded-full hover:bg-opacity-90 transition">
                    Learn More
                </button>
            </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
