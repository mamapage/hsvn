
import React from 'react';

const NewsEventsPage: React.FC = () => {
  const news = [
    { id: 1, title: 'Annual Cultural Fest 2024', date: 'May 15, 2024', description: 'Join us for a celebration of talent and culture by our brilliant students.' },
    { id: 2, title: 'Summer Camp Registrations Open', date: 'May 20, 2024', description: 'A fun-filled summer camp with music, art, and sports activities.' },
    { id: 3, title: 'Parent-Teacher Meeting', date: 'June 10, 2024', description: 'Discussing the academic progress and holistic development of our students.' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-poppins text-gray-800">News & Events</h1>
        <h2 className="text-xl font-semibold text-brand-primary mt-2">সংবাদ এবং অনুষ্ঠান</h2>
      </div>
      <div className="max-w-4xl mx-auto space-y-6">
        {news.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-2xl shadow-soft border-l-4 border-brand-primary">
            <span className="text-sm font-bold text-brand-secondary">{item.date}</span>
            <h3 className="text-xl font-bold text-gray-800 mt-1">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsEventsPage;
