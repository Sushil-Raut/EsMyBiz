import React from "react";
import '../AnimationSCSS/HowItWorks.scss';
// import "./HowItWorks.scss"; 
import { FaBullseye, FaLightbulb, FaRegStar } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <h2>
        <span>How It Works – 3 Easy Steps</span>
        <br />
        
      </h2>

      <div className="how-it-works-cards">
        <div className="how-it-works-card mission">
          <FaBullseye className="icon" />
          <h3>Share Employee Data</h3>
          <p>Upload or email your employee and salary details securely.</p>
          <span className="number">1</span>
        </div>

        <div className="how-it-works-card vision">
          <FaLightbulb className="icon" />
          <h3>We Process Payroll & Handle Compliance</h3>
          <p>We calculate salaries, deduct TDS, PF, ESI, and prepare reports.</p>
          <span className="number">2</span>
        </div>

        <div className="how-it-works-card values">
          <FaRegStar className="icon" />
          <h3>Payslips Delivered, Salary Disbursed</h3>
          <p>You approve, we execute. Payslips go out, salaries get credited.</p>
          <span className="number">3</span>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
