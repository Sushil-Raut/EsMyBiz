import React from "react";
// import { Link } from "react-router-dom";
import { Rocket, Settings, Mic } from "lucide-react"; // Optional: Replace with custom icons/images

import "../styles/Home.scss";
// import AwardedSection from "../AnimationJSX/AwardedSection";

const Home = () => {
  return (
    <>
      <div className="home-container"> {/* Fixed this line */}
        <div className="MainContainer">
          {/* === Hero Section === */}
          <section className="hero-section">
            <h1>
              Expert Payroll Support, Transparent Pricing & 24/7 Assistance —
              Everything You Need to Run Stress-Free Payroll
            </h1>
          </section>

          {/* === Top Message Section === */}
          <div className="wrapper">
            <h2 className="subtitle">
              From dedicated specialists to crystal-clear pricing and
              round-the-clock support — we handle payroll, so you can focus on
              growth.
            </h2>

            {/* Feature Cards */}
            <div className="features">
              <div className="feature-card">
                <div className="icon-circle">
                  <Rocket color="#f04632" size={32} />
                </div>
                <h3>Dedicated Payroll Specialist</h3>
                <p>
                  Your highly trained, dedicated payroll specialist is the
                  single point of contact for all your payroll and tax needs.
                </p>
                <a href="/about">ABOUT US &raquo;</a>
              </div>

              <div className="feature-card">
                <div className="icon-circle">
                  <Settings color="#f04632" size={32} />
                </div>
                <h3>Transparent Pricing</h3>
                <p>
                  The direct costs of payroll processing can be greatly reduced
                  by working with an efficient payroll provider.
                </p>
                <a href="/payrolloutsourcing">
                  PAYROLL OUTSOURCING IN INDIA &raquo;
                </a>
              </div>

              <div className="feature-card">
                <div className="icon-circle">
                  <Mic color="#f04632" size={32} />
                </div>
                <h3>24/7 Support</h3>
                <p>
                  Need assistance after business hours? No problem. A team of
                  specialists is ready to help you.
                </p>
                <a href="/contact">CONTACT US &raquo;</a>
              </div>
            </div>
          </div>

          {/* === Two Column Main Section === */}
          <div className="HomeSubContainer">
            <div className="VisionContactHeading">
              <h1>
                Smart Vision Meets Human Connection – We’re Here to Help You
                Grow!
              </h1>
              <h2>
                Whether it’s tech-enabled payroll solutions or one-on-one
                support — Let’s start the conversation today.
              </h2>
            </div>

            {/* Left Section */}
            <div className="left-section">
              <h2>My Vision Statement:</h2>
              <p>
                To become a leading provider of payroll and tax compliance
                services, helping businesses stay focused on growth while we
                handle the complexities of payroll, GST, and TDS with precision
                and integrity.
              </p>

              <h2>Vision with Tech Focus:</h2>
              <p>
                To redefine payroll and tax services through smart technology
                and expert support, ensuring every business, big or small,
                stays compliant and stress-free.
              </p>
              <h2>Client-Centric & Innovation Focus:</h2>
              <p>To empower businesses by delivering seamless, reliable, and tech-enabled payroll and compliance solutions, where innovation meets accuracy, and client success is our priority.</p>

              <button className="info-button">Click here for more info</button>
            </div>

            {/* Right Section - Contact Form */}
            <div className="right-section">
              <h2>Interested in our Services?</h2>
              <p>
                Fill this form, one of our executives will contact you soon.
              </p>

              <form>
                <div className="input-group">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                </div>

                <div className="input-group">
                  <input type="text" placeholder="Location" />
                  <input type="tel" placeholder="Mobile No" />
                </div>

                <textarea placeholder="Select Services"></textarea>

                <p className="privacy-text">
                  We respect your privacy. Don't worry, your details will not be
                  shared with anyone.
                </p>

                <button type="submit" className="submit-button">
                  Submit <span>&#x27A4;</span>
                </button>
              </form>
            </div>
          </div>

          {/* === WhatsApp Future Button === */}
          {/* 
          <Link to="/contact" className="whatsapp-icon">
            <img src="/whatsapp-icon.png" alt="WhatsApp" />
          </Link>
          */}
        </div>
      </div>
    </>
  );
};

export default Home;
