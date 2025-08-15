import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import MembershipPage from './pages/MembershipPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import MemberPortalPage from './pages/MemberPortalPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tentang-kami" element={<AboutPage />} />
            <Route path="/layanan" element={<ServicesPage />} />
            <Route path="/keanggotaan" element={<MembershipPage />} />
            <Route path="/berita" element={<NewsPage />} />
            <Route path="/kontak" element={<ContactPage />} />
            <Route path="/portal-anggota" element={<MemberPortalPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;