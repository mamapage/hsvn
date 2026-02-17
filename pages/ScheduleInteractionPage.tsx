
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ScheduleInteractionPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-soft">
          <h1 className="text-3xl font-bold font-poppins text-brand-primary">Interaction Scheduled!</h1>
          <p className="mt-4 text-gray-600">
            Your interaction session has been successfully booked for {new Date(date).toDateString()}. You will receive a confirmation email with the details shortly. The final step is to complete the fee payment to secure your child's seat.
          </p>
          <Link
            to="/fee-payment"
            className="mt-8 inline-block bg-brand-secondary text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105 shadow-soft"
          >
            Proceed to Fee Payment
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-poppins text-gray-800">Schedule Interaction</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Please select a preferred date and time for the friendly interaction session with your child and our admission team.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-soft">
        <form onSubmit={handleSubmit} className="space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferred Date</label>
                <input type="date" id="date" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary" onChange={(e) => setDate(e.target.value)} />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">Preferred Time Slot</label>
                <select id="time" required className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary">
                  <option>Select a time</option>
                  <option>10:00 AM - 10:30 AM</option>
                  <option>11:00 AM - 11:30 AM</option>
                  <option>12:00 PM - 12:30 PM</option>
                  <option>02:00 PM - 02:30 PM</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="comments" className="block text-sm font-medium text-gray-700">Additional Comments (optional)</label>
              <textarea id="comments" rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"></textarea>
            </div>
          <div className="text-center pt-4">
            <button type="submit" className="w-full md:w-auto bg-brand-primary text-white font-bold py-3 px-12 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105 shadow-soft">
              Confirm Schedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleInteractionPage;
