import React from "react";
import "../styles/Services.scss";
import { Link } from "react-router-dom";


const Services = () => {
  return (
    <div>
      <li className="dropdown">
        <span className="dropbtn">Services</span>
        <div className="dropdown-content">
          <Link to="/payrolloutsourcing">Payroll Out Sorcing</Link>
          <Link to="/gstoutsorcing">GST OutSorcing</Link>
          <Link to="/gstreturn">GST Return</Link>
        </div>
      </li>
    </div>
  );
};

export default Services;
