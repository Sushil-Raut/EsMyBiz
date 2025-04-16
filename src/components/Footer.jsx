


import React from "react";
import { Link } from "react-router-dom";
import '../styles/Footer.scss';

import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";
// import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About EsMyBiz</h4>
          <ul>
            <li>About Us</li>
            <li>Annual Returns</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Investor Relations</li>
            <li>Legal</li>
            <li>Newsroom</li>
            <li>Trust Center</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>Product Support</li>
            <li>Report Abuse</li>
            <li>Resources</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>Webmail</li>
            <li>WHOIS</li>
            <li>ICANN Confirmation</li>
            <li>Designers & Developers</li>
            <li>Redeem Code</li>
            <li>Customer Testimonials</li>
            <li>Product Catalog</li>
            <li>Business Name Generator</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Partner Programs</h4>
          <ul>
            <li>Affiliates</li>
            <li>Reseller Programs</li>
            <li>EsMyBiz Pro</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Account</h4>
          <ul>
            <li>My Products</li>
            <li>Renewals & Billing</li>
            <li>Create Account</li>
          </ul>
        </div>

        {/* <div className="footer-section">
          <h4>Shopping</h4>
          <ul>
            <li>Buy a Domain</li>
            <li>Websites</li>
            <li>Business Email</li>
            <li>Hosting</li>
            <li>Web Security</li>
            <li>Logo Generator</li>
          </ul>
        </div> */}
      </div>

      <div className="footer-bottom">
        <div className="footer-logo-lang-currency">
          <div className="footer-logo">EsMyBiz</div>
          <div className="language-select">India - English</div>
          <div className="currency-select">INR ₹</div>
        </div>

        <div className="social-icons">        
          <Link to ="https://www.facebook.com/sushil.chaursiya.5"target='_black' className="icon facebook"><FaFacebookF /></Link>
          <Link to ="https://x.com/SushilRautk" className="icon twitter"target='_black'><FaTwitter /></Link>
          <Link to ="https://www.youtube.com/@codewithsushil" className="icon youtube"><FaYoutube /></Link>
          <Link to ="https://www.linkedin.com/in/mcasushil/" className="icon linkedin" target='_black'><FaLinkedinIn /></Link>
          <Link to ="https://www.instagram.com/er_sushil_chaurasia/?hl=en" className="icon instagram"target='_black'><FaInstagram /></Link>        
        </div>
      </div>

      <div className="footer-legal">
        <p>
          Copyright © 2025 - {new Date().getFullYear()} EsMyBiz Operating
          Company, LLC. All Rights Reserved. The EsMyBiz logo is a registered
          trademark of EsMyBiz Operating Company, LLC in the US and other
          countries.
        </p>
        <div className="legal-links">
          <span>Legal</span> | <span>Privacy Policy</span> | <span>Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
