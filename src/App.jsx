import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import About from './pages/about';
import Presale from './pages/presale';
import Community from './pages/community';
import FAQ from './pages/faq';
import HowToBuy from './pages/howToBuy';
import Roadmap from './pages/roadmap';
import Tokenomics from './pages/tokenomics';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black flex flex-col antialiased">
        {/* Navbar stays constant at the top across all page views */}
        <Navbar />
        
        {/* Core Multi-Page Switchboard */}
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/presale" element={<Presale />} />
            <Route path="/community" element={<Community />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/how-to-buy" element={<HowToBuy />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/tokenomics" element={<Tokenomics />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;