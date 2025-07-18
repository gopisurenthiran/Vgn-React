import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Rera() {
  return (
    <div className="container">
      <div className="row align-items-center g-3">
        {/* Left Column with Text and RERA Icon */}
        <div className="col-lg-8 col-md-8">
          <div
            className="brand-txt d-flex align-items-center gap-3 p-3"
            style={{ background: "#fff" }}
          >
            <img
              src="/image.png"
              alt="Brand Icon 3"
              style={{ width: "70px", marginLeft: "15px" }}
            />
            <p className="rera">
              TN/1/Layout/3163/2024. available at website{" "}
              <a
                href="https://www.rera.tn.gov.in/"
                className="footer-a"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.rera.tn.gov.in
              </a>
            </p>
          </div>
        </div>

        {/* Right Column with Other Brand Icons */}
        <div className="col-lg-4 col-md-4">
          <div
            className="brand-txt d-flex align-items-center justify-content-center flex-wrap p-3"
            style={{ background: "#fff" }}
          >
            <img
              src="/brand-icon3.png"
              alt="Brand Icon 3"
              className="me-3 mb-2"
              style={{ width: "70px" }}
            />
            <img
              src="/brand-icon4.png"
              alt="Brand Icon 4"
              className="me-3 mb-2"
              style={{ width: "70px" }}
            />
            <img
              src="/brand-icon2.png"
              alt="Brand Icon 2"
              className="me-3 mb-2"
              style={{ width: "70px" }}
            />
            <img
              src="/brand-icon1.png"
              alt="Brand Icon 1"
              className="mb-2"
              style={{ width: "70px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
