import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import FloatingChat from './components/FloatingChat';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import PackagesPage from './pages/PackagesPage';
import ContactPage from './pages/ContactPage';
import WebDevelopmentPage from './pages/WebDevelopmentPage';
import AppDevelopmentPage from './pages/AppDevelopmentPage';
import SeoServicesPage from './pages/SeoServicesPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Preloader />
      <FloatingChat />
      <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/web-development" element={<WebDevelopmentPage />} />
            <Route path="/services/mobile-apps" element={<AppDevelopmentPage />} />
            <Route path="/services/seo-optimization" element={<SeoServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
