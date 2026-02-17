
import React from 'react';
import { Link } from 'react-router-dom';

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
                <span className="absolute flex items-center justify-center w-6 h-6 bg-brand-primary text-white rounded-full -left-3 ring-8 ring-white">1</span>
                <Link to="/apply-online" className="p-1 -m-1 block group">
                  <h3 className="font-semibold text-gray-900 group-hover:text-brand-primary transition-colors">Online Application</h3>
                  <p className="text-sm text-gray-600">Click here to fill out our interactive admission form with your child's and parents' details.</p>
                </Link>
            </li>
            <li className="ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-brand-primary text-white rounded-full -left-3 ring-8 ring-white">2</span>
                <Link to="/document-upload" className="p-1 -m-1 block group">
                  <h3 className="font-semibold text-gray-900 group-hover:text-brand-primary transition-colors">Document Submission</h3>
                  <p className="text-sm text-gray-600">Click here to upload the required documents securely through our portal.</p>
                </Link>
            </li>
            <li className="ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-brand-primary text-white rounded-full -left-3 ring-8 ring-white">3</span>
                 <Link to="/schedule-interaction" className="p-1 -m-1 block group">
                    <h3 className="font-semibold text-gray-900 group-hover:text-brand-primary transition-colors">School Interaction</h3>
                    <p className="text-sm text-gray-600">Click here to schedule a friendly interaction session with the child and parents.</p>
                </Link>
            </li>
            <li className="ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-brand-primary text-white rounded-full -left-3 ring-8 ring-white">4</span>
                <Link to="/fee-payment" className="p-1 -m-1 block group">
                    <h3 className="font-semibold text-gray-900 group-hover:text-brand-primary transition-colors">Fee Payment</h3>
                    <p className="text-sm text-gray-600">Once admission is confirmed, click here to complete the fee payment online.</p>
                </Link>
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
