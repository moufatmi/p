import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// New Global Redesign Components
import HeroV2 from './components/HeroV2';
import VisitorRouter from './components/VisitorRouter';
import TheThesis from './components/TheThesis';
import HowIWork from './components/HowIWork';
import ImpactPortfolio from './components/ImpactPortfolio';
import ImpactNumbers from './components/ImpactNumbers';
import GlobalFootprint from './components/GlobalFootprint';
import Languages from './components/Languages';
import TestimonialsV2 from './components/TestimonialsV2';
import Collaborate from './components/Collaborate';
import TerminalEasterEgg from './components/TerminalEasterEgg';

// Pages
import NowPage from './pages/NowPage';

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        <Routes>
          <Route 
            path="/" 
            element={
              <main>
                <HeroV2 />
                <VisitorRouter />
                <TheThesis />
                <HowIWork />
                <ImpactPortfolio />
                <ImpactNumbers />
                <GlobalFootprint />
                <Languages />
                <TestimonialsV2 />
                <Collaborate />
              </main>
            } 
          />
          <Route path="/now" element={<NowPage />} />
        </Routes>
        <TerminalEasterEgg />
      </div>
    </Router>
  );
}

export default App;