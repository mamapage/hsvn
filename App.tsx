
import React from 'react';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import AdmissionPage from './pages/AdmissionPage';
import ContactPage from './pages/ContactPage';
import AdmissionChatAgent from './components/AdmissionChatAgent';
import ApplyOnlinePage from './pages/ApplyOnlinePage';
import DocumentUploadPage from './pages/DocumentUploadPage';
import ScheduleInteractionPage from './pages/ScheduleInteractionPage';
import FeePaymentPage from './pages/FeePaymentPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="font-nunito text-gray-800 bg-gradient-to-br from-brand-mint/20 via-white to-brand-peach/20 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/admission" element={<AdmissionPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/apply-online" element={<ApplyOnlinePage />} />
            <Route path="/document-upload" element={<DocumentUploadPage />} />
            <Route path="/schedule-interaction" element={<ScheduleInteractionPage />} />
            <Route path="/fee-payment" element={<FeePaymentPage />} />
          </Routes>
        </main>
        <Footer />
        <AdmissionChatAgent />
      </div>
    </HashRouter>
  );
};

export default App;
