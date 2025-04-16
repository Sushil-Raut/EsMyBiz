import React from "react";
import { Link } from "react-router-dom";
import "../FilingStyles/WebsiteDesign.scss";

const WebsiteDesign = () => {
  return (
    <div className="WebDesignHeader">
      <div className="WebTop">
        <h1>Website Design & Development Services</h1>
        <h2>Crafting Stunning, High-Performance Websites That Drive Results</h2>
        <p>
          Your website is your digital storefront — it should not only look
          great but also perform flawlessly. At EsmyBiz, we build custom
          websites that are fast, responsive, and tailored to meet your business
          goals. Whether you're a startup, a local business, or an enterprise,
          we turn your ideas into user-friendly websites that convert visitors
          into customers.
        </p>
      </div>
      <div className="common">
        <h1>What We Offer</h1>
        <div className="cards">
          <div className="Card">
            <h2>Custom Website Design</h2>
            <p>
              We don’t use generic templates. Our designers create
              pixel-perfect, mobile-friendly websites that reflect your brand’s
              unique identity and leave a lasting impression.
            </p>
          </div>

          <div className="Card">
            <h2>Responsive Web Development</h2>
            <p>
              Your website will look amazing and function perfectly across all
              devices — desktops, tablets, and mobiles. Built using modern
              technologies like HTML5, CSS3, React, or WordPress, depending on
              your needs.
            </p>
          </div>

          <div className="Card">
            <h2>Static & Dynamic Websites</h2>
            <p>
              Need a simple website or a complex portal? We offer both static
              and dynamic website development, integrated with CMS, APIs, and
              databases for powerful functionality.
            </p>
          </div>

          <div className="Card">
            <h2>E-Commerce Website Development</h2>
            <p>
              We build secure and scalable online stores using platforms like
              Shopify, WooCommerce, or custom-built in React/Node. From product
              catalog to payment gateway — we do it all.
            </p>
          </div>

          <div className="Card">
            <h2>Performance Optimization</h2>
            <p>
              Fast websites rank better and convert more. We optimize every page
              for speed, mobile responsiveness, and SEO — ensuring your users
              enjoy a smooth, lightning-fast experience.
            </p>
          </div>

          <div className="Card">
            <h2>Website Maintenance & Support</h2>
            <p>
              We don’t just build and leave. We offer ongoing website
              maintenance, content updates, and security support to keep your
              site running smoothly 24/7.
            </p>
          </div>
        </div>
      </div>
      <div className="common">
        <h1>Why Choose EsmyBiz for Web Design & Development?</h1>
        <div className="cards">
          <div className="Card">
            <h2>Business-First Approach</h2>
            <p>
              We start with your goals — not just design trends. Our websites
              are crafted to increase leads, improve user experience, and grow
              your brand online.
            </p>
          </div>

          <div className="Card">
            <h2>SEO-Ready Design</h2>
            <p>
              Every website is built with clean code, fast-loading pages,
              mobile-first design, and SEO fundamentals — giving you a solid
              foundation to rank on Google.
            </p>
          </div>

          <div className="Card">
            <h2>Conversion-Focused Layouts</h2>
            <p>
              Our designs are user-friendly and strategically laid out to guide
              visitors towards taking action — be it a call, a sign-up, or a
              purchase.
            </p>
          </div>

          <div className="Card">
            <h2>Custom Development, No Limits</h2>
            <p>
              We use React.js, Next.js, Node.js, WordPress, or any stack you
              need. Whether it’s a single-page app or a custom CRM dashboard —
              we build it.
            </p>
          </div>

          <div className="Card">
            <h2>Affordable & Scalable Packages</h2>
            <p>
              Whether you’re just starting out or scaling up, we have packages
              that fit your needs and budget without compromising quality.
            </p>
          </div>

          <div className="Card">
            <h2>Ongoing Support</h2>
            <p>
              From regular updates to security patches, content changes to
              feature additions — we’re just a call away.
            </p>
          </div>
        </div>
      </div>

      <div className="common">
        <h1>Industries We Serve</h1>
        <div className="cards">
          <span className="Card">Startups & Tech</span>
          <span className="Card">E-Commerce</span>
          <span className="Card">Education & Coaching</span>
          <span className="Card">Finance & Legal</span>
          <span className="Card">Healthcare & Wellness</span>
          <span className="Card">Manufacturing & Industrial</span>
          <span className="Card">Travel, Hotel & Food Services</span>
        </div>
      </div>
      <div className="common">
        <h1>Our Website Development Process</h1>
        <h3>
          We follow a clear, step-by-step process that ensures your website is
          built on a solid foundation:
        </h3>
        <div className="cards">
          <div className="Card">
            <h2>Discovery & Planning</h2>
            <p>
              We begin by understanding your business, target audience, and
              goals. This helps us define the site structure, design style, and
              technical approach.
            </p>
          </div>

          <div className="Card">
            <h2>UI/UX Design</h2>
            <p>
              We create clean, user-friendly, and mobile-first wireframes and
              design mockups. Every section is crafted to guide users toward
              meaningful action.
            </p>
          </div>

          <div className="Card">
            <h2>Development</h2>
            <p>
              Our developers bring the design to life using clean, scalable
              code. Whether static HTML or React.js with dynamic backends, we
              ensure speed, SEO-friendliness, and security.
            </p>
          </div>

          <div className="Card">
            <h2>Content Integration</h2>
            <p>
              We add your text, images, videos, and metadata with an SEO-first
              mindset — creating a compelling user experience that also ranks on
              search engines.
            </p>
          </div>

          <div className="Card">
            <h2>Testing & Launch</h2>
            <p>
              Before going live, we rigorously test the site for responsiveness,
              cross-browser compatibility, load time, and bugs — ensuring it’s
              perfect from day one.
            </p>
          </div>

          <div className="Card">
            <h2>Maintenance & Support</h2>
            <p>
              Post-launch, we offer regular updates, security monitoring,
              content edits, and feature additions to keep your site fresh and
              functional.
            </p>
          </div>
        </div>
      </div>
      <div className="common">
        <h1>Our Key Features</h1>
        <div className="cards">
          <span className="Card">
            🖥️ Fully Responsive & Mobile-Friendly Design
          </span>
          <span className="Card">🚀 Lightning-Fast Load Time</span>
          <span className="Card">🔒 SSL Secured & GDPR-Compliant</span>
          <span className="Card">
            📊 Integrated with Google Analytics & Search Console
          </span>
          <span className="Card">
            💬 Live Chat, Forms, and WhatsApp Integration
          </span>
          <span className="Card">🎯 SEO-Optimized Code & Structure</span>
          <span className="Card">🛠️ CMS or No-Code Panel for Easy Updates</span>
          <span className="Card">
            💼 Portfolio, Blog, Services, Careers & More
          </span>
        </div>
      </div>
      <div className="common">
        <h1>What Our Clients Say</h1>
        <div className="cards">
          <p className="Card">
            “EsmyBiz helped us go from a basic site to a powerful
            lead-generating platform. Their team understands design and
            performance both.” —{" "}
            <strong>Sunil Raut, Founder, Luxquis LifeStyle</strong>
          </p>
          <p className="Card">
            “They designed a clean, modern website for our accounting firm that
            brought us clients within weeks. Highly recommended!” —{" "}
            <strong>Soni Raut, Director, TaxSlabIndia</strong>
          </p>
          <p className="Card">
            “Our e-commerce site now loads in under 2 seconds and looks great on
            mobile. Sales went up by 35%.” —{" "}
            <strong>Nitin Arora, CEO, TrendyMart</strong>
          </p>
        </div>
      </div>
      <div className="common">
        <h1>Frequently Asked Questions?.</h1>
        <div className="cards">
          <p className="Card">
            <h2>How long does it take to build a website?</h2>
            Depending on complexity, it takes anywhere from 7 days (for static
            sites) to 4–6 weeks (for full-featured dynamic sites).
          </p>

          <p className="Card">
            <h2>Will my site be mobile-friendly?</h2>
            Absolutely. All our websites are 100% responsive and tested on all
            major devices and browsers.
          </p>

          <p className="Card">
            <h2>Can you redesign my existing website?</h2>
            Yes, we offer website revamp/redesign services to modernize your
            look and improve functionality.
          </p>

          <p className="Card">
            <h2>Do you provide domain & hosting?</h2>
            Yes. We help you buy a domain, choose reliable hosting, and even
            configure your emails.
          </p>

          <p className="Card">
            <h2>Is SEO included?</h2>
            We offer basic on-page SEO (metadata, alt tags, URLs, speed, mobile
            optimization). Full SEO packages are also available.
          </p>
        </div>
      </div>

      <div className="CallToAction">
        <Link to="/contact" className="primary">
          📞 Let’s Build a Website That Works for You
        </Link>
        <Link to="/contact" className="secondary">
          Let’s Build Something Awesome Together
        </Link>
      </div>

      <p className="finalNote">
        A great website is your 24x7 salesperson. With EsmyBiz, you get a
        beautiful, high-performance, and business-ready website that delivers
        results.
      </p>
    </div>
  );
};

export default WebsiteDesign;
