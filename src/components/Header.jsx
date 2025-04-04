
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import MiniNav from "./MiniNav"; // Import MiniNav component

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="Header">
      <div className="UpperHeader">
        <span>EsMyBiz</span>

        {/* Navigation Links (Hidden in Mobile) */}
        <nav className="UpperNav">
          <Link to="/">Home</Link>
          <Link to="/payrolloutsourcing">PayrollOutsourcing</Link>
          <Link to="/gstoutsorcing">GstOutsorcing</Link>
          <Link to="/hirevirtualaccountant">HireVirtualAccountant</Link>
          <Link to="/contact">Contact Us</Link>
          <button onClick={() => (window.location.href = "mailto:your-email@example.com")}>Email</button>
        </nav>

        {/* Burger Menu Button */}
        <button className="Burger" onClick={() => setMenuOpen(!menuOpen)}>
          <AiOutlineMenu />
        </button>
      </div>

      {/* MiniNav should appear when menuOpen is true */}
      <div className={`MiniNavContainer ${menuOpen ? "active" : ""}`}>
        <MiniNav setMenuOpen={setMenuOpen} />
      </div>
    </div>
  );
};

export default Header;
