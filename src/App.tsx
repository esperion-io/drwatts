import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import SEO from './components/SEO';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import SwitchboardUpgrades from './pages/SwitchboardUpgrades';
import LEDLighting from './pages/LEDLighting';
import NewBuilds from './pages/NewBuilds';
import Renovations from './pages/Renovations';
import FaultFinding from './pages/FaultFinding';
import RCDGuidance from './pages/RCDGuidance';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <SEO />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="services/switchboard-upgrades" element={<SwitchboardUpgrades />} />
            <Route path="services/led-lighting" element={<LEDLighting />} />
            <Route path="services/new-builds" element={<NewBuilds />} />
            <Route path="services/renovations" element={<Renovations />} />
            <Route path="services/fault-finding" element={<FaultFinding />} />
            <Route path="services/rcd-guidance" element={<RCDGuidance />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
