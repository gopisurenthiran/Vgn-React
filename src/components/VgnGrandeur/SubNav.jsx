// src/components/VgnGrandeur/SubNav.jsx
import React from "react";

export default function SubNav() {
  return (
    <div
      className="position-sticky bg-white py-2 border-bottom shadow-sm animate__animated animate__fadeInDown"
      style={{ top: "70px", zIndex: 1050 }}
    >
      <div className="container">
        <nav className="nav justify-content-end gap-2 fw-semibold text-uppercase small" style={{fontFamily: "Mulish", fontSize: '12px'}}>
          <a className="nav-link text-dark" href="#about-vgn">About</a>
          <a className="nav-link text-dark" href="#highlights">Project Highlights</a>
          <a className="nav-link text-dark" href="#amenities">Amenities</a>
          <a className="nav-link text-dark" href="#advantages">Location Advantages</a>
          <a className="nav-link text-dark" href="#map">Location</a>
          <a className="nav-link text-dark" href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  );
}
