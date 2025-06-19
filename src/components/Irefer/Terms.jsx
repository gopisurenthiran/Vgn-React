import React from "react";
import headBorder from "@/assets/head-border.png"; // Update path as needed

export default function TermsAndConditions() {
  return (
    <section className="py-5" style={{ background: "#fef9f3" }}>
      <div className="container">
        <div
          className="bg-white p-4 p-md-5"
          style={{
            borderRadius: "6px",
            boxShadow: "0 0 15px rgba(0,0,0,0.05)",
          }}
        >
          {/* Header */}
          <div className="d-flex align-items-center mb-4">
            <span className="head-border">
              <img src={headBorder} alt="head-border" />
            </span>
            <h4 className="mb-0" style={{ fontWeight: "700" }}>
              TERMS & CONDITIONS
            </h4>
          </div>

          {/* Terms List */}
          <ul className="ps-0" style={{ fontSize: "16px", lineHeight: "2" }}>
            <li style={{ listStyle: "none" }}>
              » You will get rewarded on a successful booking by your shared
              reference.
            </li>
            <li style={{ listStyle: "none" }}>
              » You shall be entitled for iRefer benefits on agreement
              registration by your shared reference.
            </li>
            <li style={{ listStyle: "none" }}>
              » Referral benefit shall be released within 15 days from the date
              of registration.
            </li>
            <li style={{ listStyle: "none" }}>
              » All confirmed booking done after 1st April 2022 shall be
              entitled for iRefer benefits.
            </li>
            <li style={{ listStyle: "none" }}>
              » iRefer benefits shall be given in the form of Payee Cheque /
              NEFT in your name.
            </li>
            <li style={{ listStyle: "none" }}>
              » You can refer any number of references.
            </li>
          </ul>

          {/* Contact Info */}
          <div
            className="mt-4 text-center fw-bold"
            style={{ fontSize: "16px" }}
          >
            For any queries, please write to us on irefer@vgngroup.org
          </div>

          {/* Disclaimer */}
          <p
            className="mt-4 text-muted small"
            style={{ fontSize: "10px", lineHeight: "14px" }}
          >
            <strong>Disclaimer:</strong> The Company holds the right to add,
            modify, extend, revise and/or suspend/withdraw the iRefer reward
            program involving any services/ benefits provided thereunder and/or
            otherwise change any rules, terms & conditions, privileges,
            benefits, reward points pertaining to the Royalty Program at its
            sole discretion. The decision of the company shall be final &
            binding on the referrer / beneficiary and shall not be subject to
            any challenge in any court.
          </p>
        </div>
      </div>
    </section>
  );
}
