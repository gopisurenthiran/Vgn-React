import React from "react";
import desktopBanner from "@/assets/careers-banner.jpg"; // adjust path as needed
import mobileBanner from "@/assets/careers-mobile.png";  // adjust path as needed

export default function CareersBanner() {
  return (
    <section className="breadcrumb-section">
      {/* Desktop image - visible on md and up */}
      <img
        src={desktopBanner}
        alt="Careers Banner"
        className="img-fluid d-none d-md-block w-100"
      />

      {/* Mobile image - visible below md */}
      <img
        src={mobileBanner}
        alt="Careers Banner Mobile"
        className="img-fluid d-block d-md-none w-100"
        style={{ imageRendering: "pixelated" }}
      />
    </section>
  );
}
