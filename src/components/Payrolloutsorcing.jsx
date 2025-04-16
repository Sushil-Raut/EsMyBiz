import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa"; // Email icon
import { FaWhatsapp, FaArrowRight } from "react-icons/fa"; // WhatsApp icon
import "../styles/ForthContainer.scss";
import ForthContainer from "./ForthContainer";
import HowItWorks from "../AnimationJSX/HowItWorks";
import '../styles/Payrolloutsorcing.scss';

function Payrolloutsorcing() {
  const payrollServices = [
    "End-to-End Payroll Processing",
    "Salary Structuring and Tax-Optimisation",
    "Payslip Generation and Distribution",
    "PF, ESI, and Professional Tax Compliance",
    "TDS Deduction and Filing of Returns",
    "Form 16 Generation",
    "Monthly Payroll Reports",
    "Bonus, Gratuity & Leave Encashment Calculations",
    "Full & Final Settlement",
    "Employee Reimbursement Tracking",
  ];

  return (
    <>
      <div className="PayrollContainer">
        <div className="FirstContainer">
          <h1>Simplify Your Payroll with Confidence</h1>
          <h3>
            We take care of your payroll processing, compliance, and payslips —
            so you can focus on growing your business.
          </h3>

          <h4> Get Free Consultation </h4>
          <div className="button">
            <Link to="/contact">
              <button className="contact-btn">
                <FaEnvelope /> Contact Us
              </button>
            </Link>
            <button className="whatsapp-btn">
              <FaWhatsapp /> WhatsApp Us
            </button>
          </div>

          <h5>
            Trusted by SMEs, startups, and growing businesses across India.
          </h5>
        </div>

        <div className="SecondContainer">
          <h1>Why Choose EzMyBiz for Payroll Outsourcing?</h1>
          <h3>100% Accuracy, On-Time Every Time</h3>
          <p>
            Say goodbye to payroll errors and delays. Our expert team ensures
            precise and timely salary processing every cycle. From tax
            calculations to compliance, we handle it all with zero mistakes.
            Focus on your business while we guarantee error-free, on-time
            payroll—every time.
          </p>

          <h3>Full Statutory Compliance</h3>
          <p>
            We take care of PF, ESI, TDS, and labour laws, ensuring your
            business stays fully compliant. Our expert team handles all filings,
            updates, and legal requirements—saving you time, avoiding penalties,
            and keeping everything hassle-free.
          </p>

          <h3>Cost-Effective & Scalable</h3>
          <p>
            Get flexible payroll solutions tailored to your business size and
            needs. Our affordable packages grow with you, offering maximum value
            without compromising quality.
          </p>

          <h3>Payslips & Reports Ready to Go</h3>
          <p>
            Get clear, accurate payslips and monthly MIS reports delivered on
            time. Stay informed and organized with all payroll details at your
            fingertips.
          </p>

          <h3>Dedicated Payroll Expert Support</h3>
          <p>
            Get direct access to experienced payroll professionals who
            understand your business. We offer personalized support to ensure
            smooth, accurate, and hassle-free payroll management.
          </p>
        </div>

        <div className="ThirdContainer">
          <HowItWorks />

          <h4>🔁 Monthly payroll without stress!</h4>

          <div className="button-container">
            <button>Start Your Payroll Today</button>
          </div>
        </div>
        <div className="ForthContainer">
          <h1>Payroll Outsourcing – Hassle-Free, Accurate & Compliant</h1>
          <h3>
            Let our payroll experts handle your employee salaries, compliance,
            and reporting – so you stay focused on growing your business without
            worrying about deductions, deadlines, or disputes.
          </h3>

          <div className="payroll-cards-container">
            {payrollServices.map((service, index) => (
              <div key={index} className="payroll-card">
                <div className="card-content">
                  <h4>{service}</h4>
                </div>
                <div className="card-icon">
                  <FaArrowRight />
                </div>
              </div>
            ))}
          </div>

          <div className="ForthContainerBtn">
            <Link to="/contact">
              <button>📞 Schedule a Free Consultation</button>
            </Link>
          </div>
        </div>

        <div className="FifthContainer">
          <h1>Why Payroll Outsourcing is a Smart Move for Your Business</h1>
          <p>
            Managing payroll in-house can be time-consuming, prone to errors,
            and exposes businesses to compliance risks. With changing tax laws,
            employee expectations, and statutory deadlines, even small mistakes
            can cost big.
          </p>

          <p>
            Payroll outsourcing gives you access to a team of experts who handle
            everything — from accurate salary processing to statutory filings —
            ensuring your business stays compliant and your employees paid on
            time.
          </p>

          <p>
            With our payroll outsourcing services, you no longer need to invest
            in expensive software or dedicate internal resources. We ensure
            secure, scalable, and fully compliant payroll processing — tailored
            to your business size and needs.
          </p>

          <p>
            Whether you have 5 employees or 500, our team is ready to manage
            your payroll with precision and professionalism.
          </p>
        </div>
        <div className="SixthContainer">
          <h1>Why Choose Our Payroll Outsourcing Services?</h1>

          <p>
            <strong> Expertise You Can Trust:</strong> With years of payroll
            processing experience, we ensure your payroll is always accurate,
            timely, and legally compliant.
          </p>

          <p>
            <b> Confidentiality Guaranteed:</b> We use secure systems and follow
            strict privacy protocols to protect your employee and company data.
          </p>

          <p>
            <b>Up-to-Date Compliance:</b> Stay updated with the latest changes
            in tax laws, PF, ESI, and other regulatory requirements — we handle
            it all.
          </p>

          <p>
            <b>Scalable and Flexible:</b> Whether you’re a startup or an
            enterprise, we adapt our services to your size and requirements.
          </p>

          <p>
            <b>Dedicated Support: </b>Get access to a responsive team who’ll
            answer queries, manage reporting, and support your HR team round the
            clock.
          </p>
        </div>
        <ForthContainer />
      </div>
    </>
  );
}

export default Payrolloutsorcing;
