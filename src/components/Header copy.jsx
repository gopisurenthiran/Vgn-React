import React from "react";
import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function NavigationBar() {
  return (
    <>
      {/* Top Contact Bar */}
      <div className="hs-top text-white py-2 px-3 d-flex justify-content-end align-items-center small">
        <div className="me-4 mulish-sans">
          <i className="bi bi-telephone-fill me-2" style={{ fontSize: "12px" }}></i>
          044 4002 4002, 044 6965 6902
        </div>
        <div className="mulish-sans">
          <i className="bi bi-envelope-fill me-2" style={{ fontSize: "12px" }}></i>
          info@vgngroup.org
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg custom-navbar sticky-top shadow-sm bg">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex" to="/">
            <img src={logo} alt="Logo" style={{ width: "150px" }} className="img-fluid" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav text-uppercase fw-bold gap-2 align-items-center mulish-sans">
              <li className="nav-item1">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              <li className="nav-item1 dropdown">
                <span className="nav-link" role="button" data-bs-toggle="dropdown">
                  About Us <i className="bi bi-caret-down-fill ms-1"></i>
                </span>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/about">About VGN</Link></li>
                  <li><Link className="dropdown-item" to="/values">Our Values</Link></li>
                  <li><Link className="dropdown-item" to="/chairman">Message From Chairman</Link></li>
                  <li><Link className="dropdown-item" to="/our-people">Our People</Link></li>
                  <li><Link className="dropdown-item" to="/testimonial">Testimonials</Link></li>
                </ul>
              </li>

              <li className="nav-item1 dropdown">
                <span className="nav-link" role="button" data-bs-toggle="dropdown">
                  Projects <i className="bi bi-caret-down-fill ms-1"></i>
                </span>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/ongoing-project">Ongoing Projects</Link></li>
                  <li><Link className="dropdown-item" to="/completed-project">Completed Projects</Link></li>
                </ul>
              </li>

              <li className="nav-item1 dropdown">
                <span className="nav-link" role="button" data-bs-toggle="dropdown">
                  Partners <i className="bi bi-caret-down-fill ms-1"></i>
                </span>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/channel-partner">Channel Partner</Link></li>
                  <li><Link className="dropdown-item" to="/land-enquiry">Land Enquiry / Joint Ventures</Link></li>
                </ul>
              </li>

              <li className="nav-item1">
                <Link className="nav-link" to="/nri">NRI</Link>
              </li>

              <li className="nav-item1">
                <Link className="nav-link" to="/irefer">iRefer</Link>
              </li>

              <li className="nav-item1 dropdown">
                <span className="nav-link" role="button" data-bs-toggle="dropdown">
                  Customer's Corner <i className="bi bi-caret-down-fill ms-1"></i>
                </span>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/customer-support">Customer Support</Link></li>
                  <li><Link className="dropdown-item" to="/emi-calculator">EMI Calculator</Link></li>
                </ul>
              </li>

              <li className="nav-item1 dropdown">
                <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                  Contact Us <i className="bi bi-caret-down-fill ms-1"></i>
                </span>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/contact">Address</Link></li>
                  <li><Link className="dropdown-item" to="/careers">Careers</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
