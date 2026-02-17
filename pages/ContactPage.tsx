
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-poppins text-gray-800">Contact Us</h1>
        <h2 className="text-xl font-semibold text-brand-primary mt-2">আমাদের সাথে যোগাযোগ করুন</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          We'd love to hear from you! Reach out with any questions or to schedule a tour of our campus.
        </p>
      </div>

      <div className="mt-12 max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-soft">
        <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">Get In Touch</h3>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" id="name" placeholder="আপনার নাম" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm" />
          </div>
          <div>
            <label htmlFor="mobile" className="text-sm font-medium text-gray-700">Mobile Number</label>
            <input type="tel" id="mobile" placeholder="আপনার মোবাইল নম্বর" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address (Optional)</label>
            <input type="email" id="email" placeholder="আপনার ইমেল" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" rows={4} placeholder="আপনার বার্তা" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"></textarea>
          </div>
          <button type="submit" className="w-full bg-brand-primary text-white font-bold py-3 px-4 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105 shadow-soft">
            Send Message
          </button>
        </form>
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
        <div className="p-6 bg-white rounded-2xl shadow-soft">
          <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
             <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          </div>
          <h4 className="font-bold text-gray-800">Visit Us</h4>
          <p className="text-sm text-gray-600">Heria Main Road, Purba Medinipur, West Bengal</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-soft">
          <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
             <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          </div>
          <h4 className="font-bold text-gray-800">Call Us</h4>
          <p className="text-sm text-gray-600">+91 (0322) 234-567</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-soft">
          <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
             <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </div>
          <h4 className="font-bold text-gray-800">Email Us</h4>
          <p className="text-sm text-gray-600">info@heriavidyaniketan.edu</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
