import React from "react";
import { Link } from "react-router-dom";
import "../styles/ForthContainer.scss";
import ForthContainer from "./ForthContainer";

function Payrolloutsorcing() {
  return (
    <>
      <div className="MainContainer">
        <div className="FirstContainer">
          <h2>Payroll Outsourcing – Hassle-Free, Accurate & Compliant</h2>
          <h3>
            Let our payroll experts handle your employee salaries, compliance,
            and reporting – so you stay focused on growing your business without
            worrying about deductions, deadlines, or disputes.
          </h3>

          <p> End-to-End Payroll Processing</p>
          <p> Salary Structuring and Tax-Optimisation</p>
          <p> Payslip Generation and Distribution</p>
          <p> PF, ESI, and Professional Tax Compliance</p>
          <p> TDS Deduction and Filing of Returns</p>
          <p> Form 16 Generation</p>
          <p> Monthly Payroll Reports</p>
          <p> Bonus, Gratuity & Leave Encashment Calculations</p>
          <p> Full & Final Settlement</p>
          <p> Employee Reimbursement Tracking</p>
          <div className="FirstContainerBtn">
            <Link to="/contact">
              <button> 📞Shedule a free Consultation</button>
            </Link>
          </div>
        </div>

        <div className="SecondContainer">
          <h2>Why Payroll Outsourcing is a Smart Move for Your Business</h2>
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
        <div className="ThirdContainer">
          <h2>Why Choose Our Payroll Outsourcing Services?</h2>

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
          <ForthContainer/>
        
      </div>
    </>
  );
}

export default Payrolloutsorcing;
