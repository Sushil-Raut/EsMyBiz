import React from "react";
import '../FilingStyles/DigitalMarketing.scss';
import { Link } from "react-router-dom";


const DigitalMarketing = () => {
  return (
    <div className="digital-marketing-page CommonContainer">
      <section className="hero">
        <h1>Digital Marketing Services That Fuel Your Online Growth</h1>
        <p>Let Your Brand Be Seen, Heard, and Loved — Everywhere.</p>
      </section>

      <section className="services">
        <h2>What We Offer</h2>

        <div className="service">
          <h3>1. Search Engine Optimization (SEO)</h3>
          <p>Get found on Google. Stay on top. We make sure your ideal customers discover you when they’re searching.</p>
          <ul>
            <li>Technical SEO audits & fixes</li>
            <li>Keyword research & strategy</li>
            <li>Competitor analysis</li>
            <li>On-page & Off-page SEO</li>
            <li>Local SEO for maps and profiles</li>
          </ul>
        </div>

        <div className="service">
          <h3>2. Pay-Per-Click Advertising (PPC)</h3>
          <p>Skip the line and show up instantly. Our expert-crafted PPC campaigns target users ready to convert.</p>
          <ul>
            <li>Google Search & Display Ads</li>
            <li>YouTube Video & Shopping Ads</li>
            <li>Lead funnels & budget optimization</li>
          </ul>
        </div>

        <div className="service">
          <h3>3. Social Media Marketing (SMM)</h3>
          <p>We turn likes and shares into leads and customers by building a bold brand voice online.</p>
          <ul>
            <li>Instagram, Facebook, LinkedIn, Twitter</li>
            <li>Custom posts & monthly calendars</li>
            <li>Engagement growth & paid campaigns</li>
          </ul>
        </div>

        <div className="service">
          <h3>4. Content Marketing</h3>
          <p>Win your audience with powerful storytelling and value-driven content.</p>
          <ul>
            <li>Blogs, service pages, case studies</li>
            <li>Infographics, scripts, eBooks</li>
            <li>Thought leadership & social media content</li>
          </ul>
        </div>

        <div className="service">
          <h3>5. Email Marketing & Automation</h3>
          <p>Talk directly to your audience with personalized, automated email flows.</p>
          <ul>
            <li>Newsletters & email sequences</li>
            <li>Subscriber list segmentation</li>
            <li>CRM integrations</li>
          </ul>
        </div>

        <div className="service">
          <h3>6. Analytics, Tracking & CRO</h3>
          <p>What gets measured, gets improved. We set up end-to-end tracking for every campaign.</p>
          <ul>
            <li>GA4 & GTM setup</li>
            <li>Heatmaps, scrollmaps, user journey</li>
            <li>Conversion rate optimization</li>
          </ul>
        </div>
      </section>

      <section className="why-choose">
        <h2>Why Choose EsmyBiz?</h2>
        <ul>
          <li>ROI-focused strategies tailored to your business goals</li>
          <li>Creative + analytical approach that converts</li>
          <li>Dedicated support & detailed reporting</li>
          <li>End-to-end marketing from visibility to conversion</li>
          <li>Transparent pricing and campaign execution</li>
        </ul>
      </section>

      <section className="cta">
        <h2>Let’s Build Your Online Growth Story</h2>
        <p>Book your free strategy consultation now and start turning traffic into revenue.</p>
        <Link  to="/contact">
        <button>Get Started Today</button>
        </Link>
      </section>
    </div>
  );
};

export default DigitalMarketing;
