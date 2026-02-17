
import React, { useState } from 'react';

interface StudentResult {
  name: string;
  roll: string;
  class: string;
  grade: string;
  status: string;
  marks: { subject: string; score: number }[];
}

const ResultsPage: React.FC = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [result, setResult] = useState<StudentResult | null>(null);
  const [error, setError] = useState('');

  const handleViewResult = () => {
    setError('');
    setResult(null);

    if (!rollNumber.trim()) {
      setError('Please enter a roll number.');
      return;
    }

    // Mock logic: If roll is '101', show a specific result, otherwise show a generic one for demo
    setTimeout(() => {
      if (rollNumber === '101') {
        setResult({
          name: 'Ayan Das',
          roll: '101',
          class: 'Class 4',
          grade: 'A+',
          status: 'Promoted',
          marks: [
            { subject: 'English', score: 92 },
            { subject: 'Mathematics', score: 98 },
            { subject: 'Science', score: 88 },
            { subject: 'Bengali', score: 95 },
          ]
        });
      } else {
        setResult({
          name: 'Student Name',
          roll: rollNumber,
          class: 'General',
          grade: 'A',
          status: 'Passed',
          marks: [
            { subject: 'Core Subjects', score: 85 },
            { subject: 'Languages', score: 82 },
            { subject: 'Extracurricular', score: 90 },
          ]
        });
      }
    }, 600);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-4xl font-bold font-poppins text-gray-800">Academic Results</h1>
      <h2 className="text-xl font-semibold text-brand-primary mt-2">শিক্ষাবর্ষের ফলাফল</h2>
      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        Enter your ward's roll number to view the latest academic performance report.
      </p>

      {!result ? (
        <div className="mt-12 max-w-md mx-auto bg-white p-8 rounded-2xl shadow-soft">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Check Student Result</h3>
          <div className="space-y-4 text-left">
            <div>
              <label htmlFor="roll" className="block text-sm font-medium text-gray-700 mb-1">Roll Number</label>
              <input 
                type="text" 
                id="roll"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                placeholder="e.g. 101" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary outline-none" 
              />
              {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>
            <button 
              onClick={handleViewResult}
              className="w-full bg-brand-primary text-white font-bold py-3 rounded-full hover:bg-opacity-90 transition transform hover:scale-[1.02] shadow-soft"
            >
              View Result
            </button>
            <p className="text-[10px] text-gray-400 text-center italic">Try roll number '101' for a sample detailed report.</p>
          </div>
        </div>
      ) : (
        <div className="mt-12 max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-soft text-left animate-fade-in">
          <div className="flex justify-between items-start border-b pb-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">{result.name}</h3>
              <p className="text-sm text-gray-500">Roll No: {result.roll} | {result.class}</p>
            </div>
            <div className="text-right">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${result.status === 'Promoted' || result.status === 'Passed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {result.status}
              </span>
              <p className="text-2xl font-black text-brand-primary mt-1">{result.grade}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-gray-700 uppercase text-xs tracking-widest">Subject Wise Breakup</h4>
            <div className="grid grid-cols-1 gap-3">
              {result.marks.map((m, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-gray-700">{m.subject}</span>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 bg-gray-200 rounded-full h-2 hidden sm:block">
                      <div className="bg-brand-primary h-2 rounded-full" style={{ width: `${m.score}%` }}></div>
                    </div>
                    <span className="font-bold text-brand-primary">{m.score}/100</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => window.print()} 
              className="flex-1 bg-gray-800 text-white font-bold py-3 rounded-full hover:bg-gray-700 transition"
            >
              Download PDF
            </button>
            <button 
              onClick={() => setResult(null)} 
              className="flex-1 bg-white text-brand-primary border border-brand-primary font-bold py-3 rounded-full hover:bg-brand-primary/5 transition"
            >
              Search Another
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsPage;
