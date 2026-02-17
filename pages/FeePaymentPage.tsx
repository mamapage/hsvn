
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const courseFees: { [key: string]: { name: string; amount: number } } = {
  playgroup: { name: 'Playgroup', amount: 75000 },
  nursery: { name: 'Nursery', amount: 85000 },
  lkg: { name: 'LKG', amount: 95000 },
  ukg: { name: 'UKG', amount: 105000 },
};

const FeePaymentPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  
  const fee = selectedCourse ? courseFees[selectedCourse].amount : 0;
  const courseName = selectedCourse ? courseFees[selectedCourse].name : '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourse) {
      alert("Please select a program before proceeding to payment.");
      return;
    }
    setSubmitted(true);
  };

  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCourse(e.target.value);
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-soft">
          <h1 className="text-3xl font-bold font-poppins text-brand-primary">Payment Successful!</h1>
          <p className="mt-4 text-gray-600">
            Congratulations! 🎉 Your payment of ₹{fee.toLocaleString('en-IN')} for the {courseName} program has been processed. Your child's admission to Little Blossoms International Nursery School is confirmed. Welcome to our family! We will be in touch with details about the school orientation.
          </p>
          <Link
            to="/"
            className="mt-8 inline-block bg-brand-primary text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105 shadow-soft"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-poppins text-gray-800">Fee Payment</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
         Complete the final step to confirm your child's admission. Please select the program and enter your payment details below.
        </p>
      </div>

      <div className="max-w-md mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-soft">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="program" className="block text-sm font-medium text-gray-700">Select Program</label>
            <select id="program" value={selectedCourse} onChange={handleCourseChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary">
              <option value="">-- Select a Program --</option>
              <option value="playgroup">Playgroup (2-3 years)</option>
              <option value="nursery">Nursery (3-4 years)</option>
              <option value="lkg">LKG (4-5 years)</option>
              <option value="ukg">UKG (5-6 years)</option>
            </select>
          </div>

          <div className="text-center">
            <p className="text-gray-600">Total Amount Payable</p>
            <p className="text-4xl font-bold text-gray-800">₹{fee.toLocaleString('en-IN')}</p>
            <p className="text-sm text-gray-500">(Annual Fee)</p>
          </div>

          <div>
            <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">Name on Card</label>
            <input type="text" id="cardName" placeholder="John Doe" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary" />
          </div>
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
            <input type="text" id="cardNumber" placeholder="•••• •••• •••• ••••" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">Expiry Date</label>
              <input type="text" id="expiry" placeholder="MM/YY" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary" />
            </div>
            <div>
              <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
              <input type="text" id="cvc" placeholder="•••" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary" />
            </div>
          </div>
          <div className="text-center pt-4">
            <button type="submit" className="w-full bg-brand-primary text-white font-bold py-3 px-12 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105 shadow-soft" disabled={!selectedCourse}>
              Pay Now & Confirm Admission
            </button>
          </div>
          <div className="flex justify-center items-center space-x-4 pt-4 border-t mt-6">
             <p className="text-xs text-gray-500">We Accept:</p>
             <img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/UPI-Logo-vector.svg" alt="UPI" className="h-5 object-contain"/>
             <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/RuPay-Logo.svg" alt="RuPay" className="h-5 object-contain"/>
             <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-5 object-contain"/>
             <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="Mastercard" className="h-5 object-contain"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeePaymentPage;
