
import React, { useState } from 'react';
import CloseIcon from '../components/icons/CloseIcon';

interface Course {
  name: string;
  age: string;
  bengaliName: string;
  description: string;
  curriculum: string[];
}

const CoursesPage: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const courses: Course[] = [
    { 
      name: 'Playgroup', 
      age: '2-3 Years', 
      bengaliName: 'প্লেগ্রুপ', 
      description: 'A fun-filled program focusing on social skills, motor development, and creative expression through play.',
      curriculum: ['Sensory Activities', 'Rhymes & Music', 'Basic Shapes & Colors', 'Social Interaction Skills']
    },
    { 
      name: 'Nursery', 
      age: '3-4 Years', 
      bengaliName: 'নার্সারি', 
      description: 'Introducing basic language skills, numbers, and environment awareness in a joyful atmosphere.',
      curriculum: ['Alphabet Recognition', 'Number Counting (1-20)', 'Nature Walks', 'Art & Craft']
    },
    { 
      name: 'LKG', 
      age: '4-5 Years', 
      bengaliName: 'এল.কে.জি', 
      description: 'Building a strong foundation in phonics, math concepts, and social interaction.',
      curriculum: ['Phonics Level 1', 'Basic Arithmetic', 'Storytelling', 'Self-Care Skills']
    },
    { 
      name: 'UKG', 
      age: '5-6 Years', 
      bengaliName: 'ইউ.কে.জি', 
      description: 'Preparing children for primary school with advanced literacy, numeracy, and cognitive skills.',
      curriculum: ['Reading Readiness', 'Mathematical Logic', 'Environmental Science Basics', 'Creative Writing Intro']
    },
    { 
      name: 'Class 1', 
      age: '6-7 Years', 
      bengaliName: 'প্রথম শ্রেণী', 
      description: 'Formal education begins with a focus on core subjects like English, Math, and Science.',
      curriculum: ['English Grammar', 'Mathematical Operations', 'Discovery Science', 'Vernacular Language (Bengali)']
    },
    { 
      name: 'Class 2', 
      age: '7-8 Years', 
      bengaliName: 'দ্বিতীয় শ্রেণী', 
      description: 'Enhancing reading fluency, logical reasoning, and creative writing abilities.',
      curriculum: ['Creative Composition', 'Advanced Arithmetic', 'Social Studies Foundation', 'Computer Basics']
    },
    { 
      name: 'Class 3', 
      age: '8-9 Years', 
      bengaliName: 'তৃতীয় শ্রেণী', 
      description: 'Expanding knowledge through environmental studies and complex problem-solving.',
      curriculum: ['World Geography', 'Life Science Concepts', 'Problem Solving Math', 'Cultural Heritage']
    },
    { 
      name: 'Class 4', 
      age: '9-10 Years', 
      bengaliName: 'চতুর্থ শ্রেণী', 
      description: 'Strengthening academic concepts and encouraging independent learning habits.',
      curriculum: ['History Foundations', 'Scientific Methods', 'Advanced Language Skills', 'Digital Literacy']
    },
    { 
      name: 'Class 5', 
      age: '10-11 Years', 
      bengaliName: 'পঞ্চম শ্রেণী', 
      description: 'Preparing for middle school with a comprehensive and challenging curriculum.',
      curriculum: ['Civics & Governance', 'Environmental Conservation', 'Integrated Mathematics', 'Literature Analysis']
    },
    { 
      name: 'Class 6', 
      age: '11-12 Years', 
      bengaliName: 'ষষ্ঠ শ্রেণী', 
      description: 'Introducing specialized subjects and fostering critical thinking and analytical skills.',
      curriculum: ['Physics/Chemistry/Biology Basics', 'Ancient History', 'Algebraic Thinking', 'Advanced Computing']
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-4xl font-bold font-poppins text-gray-800">Our Academic Programs</h1>
      <h2 className="text-xl font-semibold text-brand-primary mt-2">আমাদের শিক্ষা কার্যক্রম</h2>
      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        From foundational early years to comprehensive primary and middle school education, we offer a curriculum designed to inspire curiosity and excellence.
      </p>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {courses.map((course) => (
            <div key={course.name} className="bg-white p-6 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 border border-transparent hover:border-brand-primary/20 flex flex-col h-full group">
                <div className="flex-grow">
                  <div className="inline-block p-2 bg-brand-primary/10 rounded-lg mb-4 group-hover:bg-brand-primary/20 transition-colors">
                    <h3 className="text-xl font-bold text-brand-primary">{course.name}</h3>
                  </div>
                  <p className="text-sm font-bold text-brand-secondary">{course.bengaliName}</p>
                  <p className="text-xs text-gray-500 font-semibold mt-1">{course.age}</p>
                  <p className="text-gray-600 mt-4 text-sm leading-relaxed line-clamp-3">{course.description}</p>
                </div>
                <button 
                  onClick={() => setSelectedCourse(course)}
                  className="mt-6 w-full bg-brand-primary/5 text-brand-primary font-bold py-2 px-4 rounded-full hover:bg-brand-primary hover:text-white transition-all duration-300 border border-brand-primary/20"
                >
                    Course Details
                </button>
            </div>
        ))}
      </div>

      {/* Course Details Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
            onClick={() => setSelectedCourse(null)}
          ></div>
          <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-scale-in">
            <div className="bg-brand-primary p-6 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold font-poppins">{selectedCourse.name}</h3>
                  <p className="text-brand-mint font-semibold">{selectedCourse.bengaliName} • {selectedCourse.age}</p>
                </div>
                <button onClick={() => setSelectedCourse(null)} className="p-1 hover:bg-white/20 rounded-full transition">
                  <CloseIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="p-8">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Description</h4>
              <p className="text-gray-700 leading-relaxed mb-8">{selectedCourse.description}</p>
              
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Key Focus Areas</h4>
              <ul className="space-y-3">
                {selectedCourse.curriculum.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="w-full bg-brand-primary text-white font-bold py-3 rounded-full hover:bg-opacity-90 transition shadow-soft"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesPage;
