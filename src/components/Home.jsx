import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa"; // Email icon
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon

function Home() {
  return (
    <div className="HomeContainer">
      <div className="FirstContainer">
        <h2>Simplify Your Payroll with Confidence</h2>
        <p>
          We take care of your payroll processing, compliance, and payslips — so
          you can focus on growing your business.
        </p>

        <h3> Get Free Consultation </h3>
        <div className="button">
          <Link to="/contact">
            <button>
              <FaEnvelope /> Contact Us
            </button>
          </Link>
          <button>
            <FaWhatsapp /> WhatsApp Us
          </button>
        </div>

        <p>Trusted by SMEs, startups, and growing businesses across India.</p>
      </div>

      <div className="SecondContainer">
        <h2>Why Choose EzMyBiz for Payroll Outsourcing?</h2>
        <h3>100% Accuracy, On-Time Every Time</h3>
        <p>Say goodbye to payroll errors and delays.</p>

        <h3>Full Statutory Compliance</h3>
        <p>We handle PF, ESI, TDS, and labour laws — hassle-free.</p>

        <h3>Cost-Effective & Scalable</h3>
        <p>Flexible packages that fit every business size.</p>

        <h3>Payslips & Reports Ready to Go</h3>
        <p>Clear, timely payslips and MIS reports delivered every month.</p>

        <h3>Dedicated Payroll Expert Support</h3>
        <p>Talk to real people who understand your business needs.</p>
      </div>

      <div className="ThirdContainer">
        <h2>How It Works – 3 Easy Steps</h2>
        <h3>1.Share Employee Data</h3>
        <p>Upload or email your employee and salary details securely.</p>

        <h3>2.We Process Payroll & Handle Compliance</h3>
        <p>We calculate salaries, deduct TDS, PF, ESI, and prepare reports.</p>

        <h3>3.Payslips Delivered, Salary Disbursed</h3>
        <p>You approve, we execute. Payslips go out, salaries get credited.</p>

        <h4>🔁 Monthly payroll without stress!</h4>

        <div className="button-container">
          <button>Start Your Payroll Today</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
