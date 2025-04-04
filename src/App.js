import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles/App.scss";
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Payrolloutsorcing from './components/Payrolloutsorcing';
import GstOutsorcing from './components/GstOutsorcing';
import HireVirtualAccontant from './components/HireVirtualAccontant';

function App() {

  const [menuOpen, setMenuOpen] =useState(false);
 
  return (
    <Router>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payrolloutsourcing" element={<Payrolloutsorcing />} />
        <Route path="/gstoutsorcing" element={<GstOutsorcing/>} />
        <Route path="/hirevirtualaccountant" element={<HireVirtualAccontant />} />
        <Route path="/contact" element={<Contact/>} />
        {/* <Route path="/footer" element={<Footer />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
