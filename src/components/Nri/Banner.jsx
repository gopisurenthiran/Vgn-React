import React from "react";
import nriImage from "@/assets/nri.jpg"; // Adjust path as needed

export default function NriBreadcrumb() {
  return (
    <section className="breadcrumb-section position-relative">
      <img
        src={nriImage}
        alt="NRI"
        style={{ width: "100%" }}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="breadcrumb-text position-absolute"
              style={{ zIndex: 99, bottom: 20 }}
            >
              <h4 className="text-white">Nri</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
