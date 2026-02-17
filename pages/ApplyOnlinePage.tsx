
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ApplyOnlinePage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const programs = [
    'Playgroup (2-3 years)', 'Nursery (3-4 years)', 'LKG (4-5 years)', 'UKG (5-6 years)',
    'Class 1 (6-7 years)', 'Class 2 (7-8 years)', 'Class 3 (8-9 years)',
    'Class 4 (9-10 years)', 'Class 5 (10-11 years)', 'Class 6 (11-12 years)'
  ];

  if (submitted) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-soft">
          <h1 className="text-3xl font-bold font-poppins text-brand-primary">Application Submitted!</h1>
          <p className="mt-4 text-gray-600">
            Thank you for your interest in Heria Saraswati Vidyaniketan. We have received your application and our admissions team will review it shortly.
          </p>
          <Link
            to="/"
            className="mt-8 inline-block bg-brand-primary text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105 shadow-soft"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-poppins text-gray-800">Online Application Form</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Please fill out the form below to begin the admission process for your child at Heria Saraswati Vidyaniketan.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-soft">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Child's Information */}
          <section>
            <h2 className="text-2xl font-bold text-brand-primary mb-6 border-b pb-2">Child's Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="childName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="childName" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary" />
              </div>
              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input type="date" id="dob" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary" />
              </div>
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                <select id="gender" required className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary">
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="program" className="block text-sm font-medium text-gray-700">Program Applying For</label>
                <select id="program" required className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary">
                  <option value="">Select Program</option>
                  {programs.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
            </div>
          </section>

          {/* Parent/Guardian Information */}
          <section>
            <h2 className="text-2xl font-bold text-brand-primary mb-6 border-b pb-2">Parent/Guardian Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                <label htmlFor="parent1Name" className="block text-sm font-medium text-gray-700">Parent/Guardian 1 Full Name</label>
                <input type="text" id="parent1Name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary" />
              </div>
               <div>
                <label htmlFor="parent1Relation" className="block text-sm font-medium text-gray-700">Relation to Child</label>
                <input type="text" id="parent1Relation" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary" />
              </div>
              <div>
                <label htmlFor="parent1Email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="parent1Email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary" />
              </div>
              <div>
                <label htmlFor="parent1Phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" id="parent1Phone" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary" />
              </div>
            </div>
          </section>

          {/* Additional Information */}
          <section>
             <h2 className="text-2xl font-bold text-brand-primary mb-6 border-b pb-2">Additional Information</h2>
             <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Residential Address</label>
                <textarea id="address" rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"></textarea>
              </div>
          </section>

          <div className="text-center pt-4">
            <button type="submit" className="w-full md:w-auto bg-brand-primary text-white font-bold py-3 px-12 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105 shadow-soft">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyOnlinePage;
