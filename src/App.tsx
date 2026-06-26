import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// New Global Redesign Components
import HeroV2 from './components/HeroV2';
import TheThesis from './components/TheThesis';
import ImpactPortfolio from './components/ImpactPortfolio';
import GlobalFootprint from './components/GlobalFootprint';
import Collaborate from './components/Collaborate';
import TerminalEasterEgg from './components/TerminalEasterEgg';

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
                <TheThesis />
                <ImpactPortfolio />
                <GlobalFootprint />
                <Collaborate />
              </main>
            } 
          />
        </Routes>
        <TerminalEasterEgg />
      </div>
    </Router>
  );
}

export default App;