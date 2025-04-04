import React from "react";
import { Link } from "react-router-dom";
import '../styles/MiniNav.scss'

const MiniNav = ({ setMenuOpen }) => {
  return (
    <div className="MiniNav" id="miniNav">
      <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
      <Link to="/payrolloutsourcing" onClick={() => setMenuOpen(false)}>PayrollOutsourcing</Link>
      <Link to="/gstoutsorcing" onClick={() => setMenuOpen(false)}>GstOutsorcing</Link>
      <Link to="/hirevirtualaccountant" onClick={() => setMenuOpen(false)}>HireVirtualAccountant</Link>
      <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>

      <button
            onClick={() => (window.location.href = "mailto:your-email@example.com")}
          >
            Email
          </button>
    </div>
  );
};

export default MiniNav;
