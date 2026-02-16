
import React from 'react';

const AdmissionPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-poppins text-gray-800">Admissions Open</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Join the Little Blossoms family! We are excited to welcome new students for the upcoming academic year.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-soft">
        <h2 className="text-2xl font-bold text-brand-primary mb-6">Admission Process</h2>
        
        <ol className="relative border-l border-gray-200 space-y-10">
            <li className="ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-brand-light-blue rounded-full -left-3 ring-8 ring-white">1</span>
                <h3 className="font-semibold text-gray-900">Online Application</h3>
                <p className="text-sm text-gray-600">Fill out our interactive admission form with your child's and parents' details.</p>
            </li>
            <li className="ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-brand-light-blue rounded-full -left-3 ring-8 ring-white">2</span>
                <h3 className="font-semibold text-gray-900">Document Submission</h3>
                <p className="text-sm text-gray-600">Upload the required documents securely through our portal.</p>
            </li>
            <li className="ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-brand-light-blue rounded-full -left-3 ring-8 ring-white">3</span>
                <h3 className="font-semibold text-gray-900">School Interaction</h3>
                <p className="text-sm text-gray-600">A friendly interaction session with the child and parents will be scheduled.</p>
            </li>
            <li className="ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-brand-light-blue rounded-full -left-3 ring-8 ring-white">4</span>
                <h3 className="font-semibold text-gray-900">Fee Payment</h3>
                <p className="text-sm text-gray-600">Once admission is confirmed, complete the fee payment online to secure the seat.</p>
            </li>
        </ol>

        <div className="mt-10 text-center">
            <p className="text-gray-600">
                Have questions? Our AI Admission Assistant is here to help you 24/7.
                <br />
                Click the chat icon in the bottom right corner to get started!
            </p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPage;
