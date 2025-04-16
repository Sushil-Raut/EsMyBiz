import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import "../styles/Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="main-header">
      {/* Top Contact Header */}
      <div className="UpperHeader">
        <div className="container">
          <div className="contact-left">
            <div className="contact-item">
              <FaEnvelope className="icon" />
              support@esmybiz.com
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="icon" />
              +91-9959081770
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="nav-header desktop-nav">
        <div className="logo">EsMyBiz</div>
        <div className="nav-links">
          <Link to="/">Home</Link>

          <div className="dropdown">
            <span className="dropbtn">Services ▾</span>
            <div className="dropdown-content">
              <Link to="/payrolloutsourcing">Payroll Outsourcing</Link>
              <Link to="/gstoutsorcing">GST Outsourcing</Link>
              <Link to="/tdsfiling">TDS Filing</Link>
              <Link to="/itrfiling">ITR Filing</Link>
              <Link to="/bookkeeping">Bookkeeping</Link>
              <Link to="/websitedesign">Website Design</Link>
              <Link to="/digitalmarketing">Digital Marketing</Link>
            </div>
          </div>

          <Link to="/hirevirtualaccountant">Hire Virtual Accountant</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="mobile-header">
        <div className="logo">EsMyBiz</div>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>

        <div className="mobile-dropdown">
          <span>Services</span>
          <div className="mobile-dropdown-content">
            <Link to="/payrolloutsourcing" onClick={closeMenu}>Payroll Outsourcing</Link>
            <Link to="/gstoutsorcing" onClick={closeMenu}>GST Outsourcing</Link>
            <Link to="/tdsfiling" onClick={closeMenu}>TDS Filing</Link>
            <Link to="/itrfiling" onClick={closeMenu}>ITR Filing</Link>
            <Link to="/bookkeeping" onClick={closeMenu}>Bookkeeping</Link>
            <Link to="/websitedesign" onClick={closeMenu}>Website Design</Link>
            <Link to="/digitalmarketing" onClick={closeMenu}>Digital Marketing</Link>
          </div>
        </div>

        <Link to="/hirevirtualaccountant" onClick={closeMenu}>Hire Virtual Accountant</Link>
        <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
      </div>
    </div>
  );
};

export default Header;
