import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/MiniNav.scss";

const MiniNav = ({ setMenuOpen }) => {
  const [showServices, setShowServices] = useState(false);

  return (
    <div className="MiniNav" id="miniNav">
      {/* ❌ Close Button */}
      <button className="close-btn" onClick={() => setMenuOpen(false)}>
        &times;
      </button>

      <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

      {/* Services Dropdown */}
      <div className="mini-dropdown">
        <div
          className={`mini-dropbtn ${showServices ? "active" : ""}`} 
          onClick={() => setShowServices(!showServices)}
        >
          Services {showServices ? "▲" : "▼"}
        </div>
        {showServices && (
          <div className="mini-dropdown-content">
            <Link to="/payrolloutsourcing" onClick={() => setMenuOpen(false)}>Payroll OutSourcing</Link>
            <Link to="/gstoutsorcing" onClick={() => setMenuOpen(false)}>GST OutSourcing</Link>
            <Link to="/tdsfiling" onClick={() => setMenuOpen(false)}>TDS Filing</Link>
            <Link to="/itrfiling" onClick={() => setMenuOpen(false)}>ITR Filing</Link>
            <Link to="/bookkiping" onClick={() => setMenuOpen(false)}>Bookkeeping & Accounting</Link>
            <Link to="/websitedesign" onClick={() => setMenuOpen(false)}>Website Design & Development</Link>
            <Link to="/digitalmarketing" onClick={() => setMenuOpen(false)}>Digital Marketing</Link>
          </div>
        )}
      </div>

      <Link to="/hirevirtualaccountant" onClick={() => setMenuOpen(false)}>Hire Virtual Accountant</Link>
      <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>

      {/* <button onClick={() => (window.location.href = "mailto:your-email@example.com")}>
        Email
      </button> */}
    </div>
  );
};

export default MiniNav;
