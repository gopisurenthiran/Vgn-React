import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function VgnAdvantages() {
  return (
    <section
      className="property-section latest-property-section spad"
      style={{ paddingTop: "80px", paddingBottom: "0px", background: "#fff" }}
    >
      <div className="container">
        <div className="heading">
          <h4 className="text-center">
            <span className="head-border">
              <img src="/head-border.png" alt="Head Border" />
            </span>{" "}
            VGN Advantages
          </h4>
        </div>

        {/* Desktop Image */}
        <img
          src="/vgn-advantage.jpg"
          className="desktop"
          alt="VGN Advantages"
          style={{ width: "100%", cursor: "default" }}
        />

        {/* Mobile Image */}
        <img
          src="/vgn-advantage1.png"
          className="mobile"
          alt="VGN Advantages"
          style={{ width: "100%" }}
        />
      </div>
    </section>
  );
}
