import React from "react";
import { Link } from "react-router-dom";
// import '../styles/GstOutsocing.scss';

function GstOutsorcing() {
  return (
    <div className="MainContainer">
      <div className="FirstContainer">
        <h2>
          GST Outsourcing Services – Hassle-Free Compliance for Your Business
        </h2>
        <h3>
          Ensure accurate GST return filing, compliance, and input tax credit
          management with the help of our experienced Chartered Accountants — so
          you can focus on running your business stress-free.
        </h3>
        <p> GST Registration for New Businesses</p>
        <p>
          {" "}
          Monthly/Quarterly GST Return Filing (GSTR-1, GSTR-3B, GSTR-9, GSTR-9C)
        </p>
        <p> Reconciliation of GSTR-2A/2B with Purchase Invoices</p>
        <p> Input Tax Credit (ITC) Management & Optimization</p>
        <p> GST Notices Handling & Representation</p>
        <p> HSN/SAC Code Classification & Compliance</p>
        <p> E-invoicing & E-way Bill Compliance</p>
        <p> Timely Reminders for Filing Deadlines</p>
        <p> Dedicated GST Expert Support</p>
        <div className="Mybtn">
          <Link to="/contact">
            <button> 📞Get Your Gst Sorted Today</button>
          </Link>
        </div>
      </div>

      <div className="SecondContainer">
        <h2>Why Choose EzMyBiz for GST Outsourcing?</h2>
        <p>
          <b>
          Expert CA Team: </b>Our GST compliance team includes experienced Chartered
          Accountants who understand the nuances of Indian taxation.
        </p>

        <p>
        <b>
          Timely & Accurate Filing: </b>Avoid penalties and late fees with on-time
          filings every month or quarter.
        </p>

        <p>
        
        <b> End-to-End GST Services:</b> From registration to return filing,
          reconciliation, and compliance — we handle it all for you.
        </p>

        <p>
        <b>Affordable Pricing: </b>Get top-tier services at a fraction of the cost of
          hiring a full-time resource.
        </p>

        <p>
        <strong>100% Confidential & Secure:</strong> Your business data is protected with the
          highest levels of confidentiality and security protocols.
        </p>
      </div>

      <div className="ThirdContainer">
        <h2>
          Your Trusted Partner for Seamless GST Outsourcing and Compliance
          Services
        </h2>

        <p>
          At EzMyBiz, we specialize in offering reliable GST outsourcing
          services in India designed for businesses of all sizes. Whether you're
          a startup or an established company, our experienced GST consultants
          ensure your compliance needs are met with precision and
          professionalism.
        </p>

        <p>
          Our tailored GST compliance outsourcing solutions include everything
          from GST registration to return preparation and filing, record
          keeping, GST audit support, and advisory services. We navigate the
          complexities of the CGST Act, so you don't have to.
        </p>

        <p>
          Backed by a team of expert Chartered Accountants and GST specialists,
          EzMyBiz offers affordable GST return outsourcing and customized GST
          packages that are efficient, scalable, and built to support your
          growth.
        </p>

        <p>
          Choose EzMyBiz — the best GST outsourcing company in India — and let
          us handle the details while you focus on scaling your business.
        </p>

        <div className="MycontactBtn">
          <Link to="/contact">
            <button> 📞 Contact Us for GST Outsorcing</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GstOutsorcing;
