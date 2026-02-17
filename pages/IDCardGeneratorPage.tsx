
import React, { useState, useRef } from 'react';
import BlossomIcon from '../components/icons/BlossomIcon';

const IDCardGeneratorPage: React.FC = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    fatherName: '',
    dob: '',
    className: '',
    roll: '',
    phone: '',
    photo: ''
  });
  
  const [showCard, setShowCard] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setStudentData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setStudentData(prev => ({ ...prev, photo: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const classes = [
    'Playgroup', 'Nursery', 'LKG', 'UKG',
    'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6'
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12 print:hidden">
        <h1 className="text-4xl font-bold font-poppins text-gray-800">Identity Card Generator</h1>
        <h2 className="text-xl font-semibold text-brand-primary mt-2">পরিচয়পত্র তৈরি করুন</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Generate a personalized international-standard school ID card for your child. Fill in the details and upload a photo.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
        {/* Form Section */}
        <div className="bg-white p-8 rounded-2xl shadow-soft print:hidden">
          <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">Student Information</h3>
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setShowCard(true); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Student's Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={studentData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Ayan Das" 
                  required
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Father's Name</label>
                <input 
                  type="text" 
                  name="fatherName"
                  value={studentData.fatherName}
                  onChange={handleInputChange}
                  placeholder="e.g. Protap Das" 
                  required
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary/20 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Date of Birth</label>
                <input 
                  type="date" 
                  name="dob"
                  value={studentData.dob}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Class</label>
                <select 
                  name="className"
                  value={studentData.className}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary/20 outline-none"
                >
                  <option value="">Select Class</option>
                  {classes.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Roll Number</label>
                <input 
                  type="text" 
                  name="roll"
                  value={studentData.roll}
                  onChange={handleInputChange}
                  placeholder="e.g. 101" 
                  required
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={studentData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. 9876543210" 
                  required
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary/20 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Upload Photo</label>
              <input 
                type="file" 
                accept="image/*"
                onChange={handlePhotoUpload}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-primary file:text-white hover:file:bg-opacity-90"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-brand-primary text-white font-bold py-3 rounded-full hover:bg-opacity-90 transition shadow-soft mt-4"
            >
              Preview ID Card
            </button>
          </form>
        </div>

        {/* Preview Section */}
        <div className="flex flex-col items-center">
          {showCard ? (
            <div className="w-full flex flex-col items-center animate-fade-in">
              {/* ID Card Display */}
              <div 
                ref={cardRef}
                className="w-[350px] h-[520px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col relative print:shadow-none print:border-gray-200"
              >
                {/* ID Card Header */}
                <div className="bg-gradient-to-r from-brand-primary to-brand-primary/80 p-5 text-white flex flex-col items-center text-center">
                  <BlossomIcon className="w-12 h-12 mb-2 bg-white rounded-full p-1 shadow-sm" />
                  <h4 className="font-bold text-sm leading-tight uppercase font-poppins">Heria Saraswati Vidyaniketan</h4>
                  <p className="text-[10px] font-bold text-brand-mint/90 mt-0.5">হেঁড়িয়া সরস্বতী বিদ্যানিকেতন</p>
                  <p className="text-[8px] mt-2 text-white/80 leading-tight">Heria Main Road, Purba Medinipur, West Bengal<br/>Contact: +91 (0322) 234-567</p>
                </div>

                {/* ID Card Body */}
                <div className="flex-grow p-6 flex flex-col items-center">
                  <div className="w-32 h-32 bg-gray-100 rounded-2xl border-4 border-brand-primary/10 overflow-hidden mb-6 shadow-inner">
                    {studentData.photo ? (
                      <img src={studentData.photo} alt="Student" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-300">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    )}
                  </div>

                  <h5 className="text-xl font-black text-gray-800 font-poppins mb-1 uppercase text-center">{studentData.name || 'Student Name'}</h5>
                  <div className="bg-brand-primary/10 px-3 py-1 rounded-full mb-6">
                    <p className="text-[10px] font-black text-brand-primary uppercase tracking-widest">{studentData.className || 'Class'} • Roll: {studentData.roll || '00'}</p>
                  </div>

                  <div className="w-full space-y-3 px-2">
                    <div className="flex justify-between items-center text-[11px] border-b border-gray-50 pb-1">
                      <span className="text-gray-400 font-bold uppercase">Father's Name</span>
                      <span className="text-gray-800 font-bold">{studentData.fatherName || '---'}</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px] border-b border-gray-50 pb-1">
                      <span className="text-gray-400 font-bold uppercase">Date of Birth</span>
                      <span className="text-gray-800 font-bold">{studentData.dob || '---'}</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px] border-b border-gray-50 pb-1">
                      <span className="text-gray-400 font-bold uppercase">Phone No.</span>
                      <span className="text-gray-800 font-bold">{studentData.phone || '---'}</span>
                    </div>
                  </div>
                </div>

                {/* ID Card Footer */}
                <div className="p-4 flex justify-between items-end border-t border-gray-50 bg-gray-50/50">
                  <div className="flex flex-col">
                    <p className="text-[8px] text-gray-400 uppercase font-black mb-1">Blood Group</p>
                    <div className="w-6 h-6 bg-red-100 rounded-md flex items-center justify-center text-red-600 font-black text-[10px]">O+</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-6 w-16 bg-gray-100/50 border-b border-gray-300 mb-1"></div>
                    <p className="text-[8px] text-gray-500 uppercase font-bold">Principal's Sign</p>
                  </div>
                </div>

                {/* Decorative Strip */}
                <div className="h-2 bg-gradient-to-r from-brand-secondary to-brand-primary"></div>
              </div>

              <div className="mt-8 flex gap-4 print:hidden">
                <button 
                  onClick={handlePrint}
                  className="bg-gray-800 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-700 transition shadow-lg flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
                  Print ID Card
                </button>
                <button 
                  onClick={() => setShowCard(false)}
                  className="bg-white text-brand-primary border border-brand-primary font-bold py-3 px-8 rounded-full hover:bg-brand-primary/5 transition"
                >
                  Edit Details
                </button>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-center p-12 border-4 border-dashed border-gray-200 rounded-3xl opacity-50">
              <div>
                <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <p className="text-xl font-bold text-gray-400">Card Preview Area</p>
                <p className="text-sm text-gray-400 mt-2">Fill the form to see the identity card here.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IDCardGeneratorPage;
