import React, { useState } from "react";
import logo from "@/assets/logo.svg";
import { BiMenu } from "react-icons/bi";

export default function SubNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="position-fixed top-0 start-0 end-0 border-bottom shadow-sm animate__animated animate__fadeInDown"
      style={{ zIndex: 1100, backgroundColor: "#f4e7d3" }}
    >
      <div className="container-fluid py-2 px-3 position-relative d-flex align-items-center justify-content-between">
        {/* Logo */}
        <a href="/" className="navbar-brand d-flex align-items-center m-0">
          <img
            src={logo}
            alt="VGN Logo"
            style={{ width: "120px" }}
            className="img-fluid"
          />
        </a>

        {/* Hamburger icon (mobile only) */}
        <button
          className="btn d-md-none p-0 position-absolute custom-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <BiMenu size={28} color="#000" />
        </button>

        {/* Desktop Nav */}
        <nav
          className="nav d-none d-md-flex gap-3 fw-semibold text-uppercase small ms-auto"
          style={{ fontFamily: "Mulish", fontSize: "12px" }}
        >
          <a className="nav-link text-dark" href="#about-vgn">About</a>
          <a className="nav-link text-dark" href="#highlights">Project Highlights</a>
          <a className="nav-link text-dark" href="#amenities">Amenities</a>
          <a className="nav-link text-dark" href="#advantages">Location Advantages</a>
          <a className="nav-link text-dark" href="#map">Location</a>
          <a className="nav-link text-dark" href="#contact">Contact</a>
        </nav>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="container-fluid d-md-none">
          <nav className="nav flex-column mt-2 fw-semibold text-uppercase small" style={{ fontFamily: "Mulish", fontSize: "12px" }}>
            <a className="nav-link text-dark" href="#about-vgn">About</a>
            <a className="nav-link text-dark" href="#highlights">Project Highlights</a>
            <a className="nav-link text-dark" href="#amenities">Amenities</a>
            <a className="nav-link text-dark" href="#advantages">Location Advantages</a>
            <a className="nav-link text-dark" href="#map">Location</a>
            <a className="nav-link text-dark" href="#contact">Contact</a>
          </nav>
        </div>
      )}
    </div>
  );
}
