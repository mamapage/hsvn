import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DocumentUploadPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (files && files.length > 0) {
      setSubmitted(true);
    } else {
      alert("Please select at least one file to upload.");
    }
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-soft">
          <h1 className="text-3xl font-bold font-poppins text-brand-primary">Documents Submitted!</h1>
          <p className="mt-4 text-gray-600">
            Thank you for uploading the documents. Our admissions team will verify them and contact you for the next step: the school interaction session.
          </p>
          <Link
            to="/admission"
            className="mt-8 inline-block bg-brand-primary text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105 shadow-soft"
          >
            Back to Admission Process
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-poppins text-gray-800">Document Submission</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Please upload the required documents. You can select multiple files at once.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-soft">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Required Documents:</label>
            <ul className="list-disc list-inside text-sm text-gray-500 space-y-1 mb-4">
              <li>Child's Birth Certificate</li>
              <li>Child's Passport Size Photograph</li>
              <li>Parent/Guardian's ID Proof</li>
              <li>Proof of Residence</li>
            </ul>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-brand-primary hover:text-brand-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-brand-primary">
                    <span>Upload files</span>
                    <input id="file-upload" name="file-upload" type="file" multiple className="sr-only" onChange={(e) => setFiles(e.target.files)} />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB each</p>
              </div>
            </div>
             {files && files.length > 0 && (
              <div className="mt-4 text-sm text-gray-600">
                <p className="font-semibold">Selected files:</p>
                <ul className="list-disc list-inside">
                  {/* FIX: Explicitly type 'file' as 'File' to resolve TypeScript error. */}
                  {Array.from(files).map((file: File, index) => <li key={index}>{file.name}</li>)}
                </ul>
              </div>
            )}
          </div>
          <div className="text-center pt-4">
            <button type="submit" className="w-full md:w-auto bg-brand-primary text-white font-bold py-3 px-12 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105 shadow-soft">
              Submit Documents
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DocumentUploadPage;