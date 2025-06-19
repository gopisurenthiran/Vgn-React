import React from "react";
import landownersImage from "@/assets/landownwers.jpg"; // Adjust path based on your file structure

export default function LandEnquirySection() {
  return (
    <section className="breadcrumb-section position-relative">
      <img
        src={landownersImage}
        alt="Land Enquiry / Joint Ventures"
        style={{ width: "100%" }}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="breadcrumb-text position-absolute"
              style={{ zIndex: 99, bottom: 20 }}
            >
              <h4 className="text-white">LAND ENQUIRY / JOINT VENTURES</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
