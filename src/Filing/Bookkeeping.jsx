import React from "react";
import "../FilingStyles/Bookkeeping.scss";
import { Link } from "react-router-dom";

const Bookkeeping = () => {
  return (
    <div className="BookkeepingHeading CommonContainer">
      <div className="BookHeader MainContainer">
        <h1 className="section-heading" >
          📚 End-to-End Bookkeeping & Accounting Services for Smart Businesses
        </h1>
        <h2>Accuracy. Compliance. Peace of Mind.</h2>
        <p>
          Running a business is challenging enough — let us take the accounting
          burden off your plate. At EsmyBiz, we offer expert bookkeeping and
          accounting services that help you stay compliant, financially
          organized, and focused on your core operations. Whether you're a
          startup, growing SME, or an established business, we ensure your
          financial data is clean, accurate, and decision-ready.
        </p>
      </div>

      <div className="BookKeeping MainContainer">
        <h1>What Our Bookkeeping & Accounting Services Include</h1>
        <div className="BookKeepingCards">
          <div className="BookKeeping1">
            <h2>🧾 Day-to-Day Bookkeeping</h2>
            <p>
              We record all your daily financial transactions using accounting
              software like Tally, Zoho, or QuickBooks. Every invoice, receipt,
              and expense is tracked, categorized, and reconciled — no missed
              entries, no errors.
            </p>
          </div>

          <div className="BookKeeping1">
            <h2>🏦 Bank & Cash Reconciliation</h2>
            <p>
              We match your books with your bank statements and cash flows every
              month to spot errors, avoid overdrafts, and ensure every rupee is
              accounted for.
            </p>
          </div>

          <div className="BookKeeping1">
            <h2>📥 Accounts Payable & Receivable Management</h2>
            <p>
              Track who you owe and who owes you. We help you manage outstanding
              invoices, vendor payments, and collections — ensuring smooth cash
              flow and zero payment delays.
            </p>
          </div>

          <div className="BookKeeping1">
            <h2>🧾 GST-Compliant Accounting</h2>
            <p>
              We maintain your books in accordance with GST norms — tracking
              input and output tax, filing GSTRs, and preparing audit-ready
              records for any tax scrutiny.
            </p>
          </div>

          <div className="BookKeeping1">
            <h2>👥 Payroll Accounting</h2>
            <p>
              We record salary expenses, TDS on salaries, and provident fund
              contributions in your books accurately, so you stay compliant with
              labour laws and financial statements stay correct.
            </p>
          </div>

          <div className="BookKeeping1">
            <h2>📊 Financial Reports & MIS</h2>
            <p>
              Get real-time visibility into your business performance with
              monthly Profit & Loss statements, Balance Sheets, Cash Flow
              Statements, and customized MIS reports.
            </p>
          </div>

          <div className="BookKeeping1">
            <h2>🧮 Year-End Closing & Tax Planning</h2>
            <p>
              We close your financial year with precision and assist in
              preparing for ITR filings, audits, and strategic tax planning — so
              you're ready for the next financial year with confidence.
            </p>
          </div>
        </div>
      </div>

      <div className="BookTools">
        <h1>
          We use industry-trusted accounting tools that suit your scale and
          workflow:
        </h1>
        <span>Tally ERP</span>
        <span>QuickBooks</span>
        <span>Zoho Books</span>
        <span>Busy Accounting</span>
        <span>Excel-based systems</span>
        <span>Custom ERP integrations (on request)</span>
      </div>

      <div className="BookEsMyBiz">
        <h1>Why Businesses Choose EsmyBiz</h1>

        <div className="BookKeepingCards">
          <div className="BookKeeping1">
            <h2>Saves Time & Cost</h2>
            <p>
              Avoid hiring full-time staff. Our virtual accounting team delivers
              high-quality services at a fraction of the cost.
            </p>
          </div>
          <div className="BookKeeping1">
            <h2>Compliant, Always</h2>
            <p>
              We stay updated with the latest tax regulations, so your books are
              always compliant with GST, TDS, and income tax norms.
            </p>
          </div>
          <div className="BookKeeping1">
            <h2>Tailored for Your Business</h2>
            <p>
              Whether you're in manufacturing, IT, trading, retail, or services
              — we customize the accounting process to suit your industry.
            </p>
          </div>
          <div className="BookKeeping1">
            <h2>Clear Reports, Smart Decisions</h2>
            <p>
              Understand your finances at a glance. Our reports help you monitor
              profit, expenses, and cash flow — empowering smarter decisions.
            </p>
          </div>
          <div className="BookKeeping1">
            <h2>Complete Data Confidentiality</h2>
            <p>
              We take data security seriously. All financial data is handled
              under strict confidentiality with secure backups and access
              protocols.
            </p>
          </div>
        </div>
      </div>

      <p>
        At EsmyBiz, we become your virtual finance team — handling all your
        books with precision and care, so you can focus on growth and strategy.
      </p>

      <Link to="/contact" style={{ textDecoration: "none" }}>
        <button>📞 Ready to Get Your Finances in Order?</button>
      </Link>
    </div>
  );
};

export default Bookkeeping;
