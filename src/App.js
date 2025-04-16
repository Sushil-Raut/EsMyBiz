import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles/App.scss";
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Payrolloutsorcing from './components/Payrolloutsorcing';
import GstOutsorcing from './components/GstOutsorcing';
import HireVirtualAccontant from './components/HireVirtualAccontant';
import Services from "./components/Services"
// import Resorces from './components/Resorces';
// import Blog from './components/Blog';
import TdsFiling from './Filing/TdsFiling';
import ItrFiling from './Filing/ItrFiling';
import Bookkeeping from './Filing/Bookkeeping';
import WebsiteDesign from './Filing/WebsiteDesign';
import DigitalMarketing from './Filing/DigitalMarketing';
import ScrollToTop from './components/ScrollToTop';

import statics from './components/statics';

function App() {

  const [menuOpen, setMenuOpen] =useState(false);
 
  return (
    <Router>      
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/statics" element={<statics />} />
        <Route path="/services" element={<Services />} />
        
        <Route path="/payrolloutsourcing" element={<Payrolloutsorcing />} />
        <Route path="/gstoutsorcing" element={<GstOutsorcing/>} />
        <Route path="/tdsfiling" element={<TdsFiling/>} />
        <Route path="/itrfiling" element={<ItrFiling/>} />
        <Route path="/bookkeeping" element={<Bookkeeping/>} />
        <Route path="/websitedesign" element={<WebsiteDesign/>} />
        <Route path="/digitalmarketing" element={<DigitalMarketing/>} />

        <Route path="/hirevirtualaccountant" element={<HireVirtualAccontant />} />

        {/* <Route path="/resorces" element={<Resorces/>} />
        <Route path="/blog" element={<Blog/>} /> */}
        <Route path="/contact" element={<Contact/>} />
        {/* <Route path="/footer" element={<Footer />} /> */}
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
