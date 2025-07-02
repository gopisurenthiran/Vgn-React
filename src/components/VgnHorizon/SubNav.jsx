import React, { useState, useEffect } from "react";
import logo from "@/assets/logo.svg";
import { BiMenu } from "react-icons/bi";
import "./subnav.css";         // ✅ corrected filename

export default function SubNav() {
  const [isOpen, setIsOpen] = useState(false);

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  const toggle = () => setIsOpen(!isOpen);
  const close  = () => setIsOpen(false);

  return (
    <header className="subnav-wrapper">
      <div className="container-fluid subnav-inner d-flex align-items-center justify-content-between">
        {/* Logo */}
        <a href="/" className="navbar-brand m-0 d-flex align-items-center">
          <img src={logo} alt="VGN Logo" height="56" />
        </a>

        {/* Desktop links */}
        <nav className="nav d-none d-md-flex gap-3">
          {[
            ["#about-vgn", "About"],
            ["#highlights", "Project Highlights"],
            ["#amenities", "Amenities"],
            ["#advantages", "Location Advantages"],
            ["#map", "Location"],
            ["#contact", "Contact"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <div className="d-flex justify-content-end d-md-none">
                  <button
                    className="btn"
                    aria-label="Toggle navigation"
                    aria-expanded={isOpen}
                    aria-controls="mobile-nav"
                    onClick={toggle}
                  >
                    <BiMenu size={28} />
                  </button>
                </div>
      </div>

      {/* Mobile drawer */}
      <nav
        id="mobile-nav"
        className={`subnav-mobile d-md-none ${isOpen ? "show" : ""}`}
      >
        {[
          ["#about-vgn", "About"],
          ["#highlights", "Project Highlights"],
          ["#amenities", "Amenities"],
          ["#advantages", "Location Advantages"],
          ["#map", "Location"],
          ["#contact", "Contact"],
        ].map(([href, label]) => (
          <a key={href} href={href} className="nav-link" onClick={close}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
