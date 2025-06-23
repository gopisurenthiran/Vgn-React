import React from "react";
import logo from "@/assets/logo.svg";

import 'bootstrap-icons/font/bootstrap-icons.css';

export default function NavigationBar() {
  return (
    <>
      {/* Top Contact Bar */}
      <div className="hs-top text-white py-2 px-3 d-flex justify-content-end align-items-center small">
        <div className="me-4 mulish-sans">
        <i className="bi bi-telephone-fill me-2" style={{fontSize: "12px"}}></i>
          044 4002 4002, 044 6965 6902
        </div>
        <div className="mulish-sans">
          <i className="bi bi-envelope-fill me-2" style={{fontSize: "12px"}}></i>
          info@vgngroup.org
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg custom-navbar sticky-top shadow-sm bg">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img src={logo} alt="Logo" width="100" height="100" className="img-fluid" />
          </a>

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
                <a className="nav-link active" href="/">Home</a>
              </li>

              <li className="nav-item1 dropdown">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown">
                 About Us <i className="bi bi-caret-down-fill ms-1"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/about">About VGN</a></li>
                  <li><a className="dropdown-item" href="/values">Our Values</a></li>
                  <li><a className="dropdown-item" href="/chairman">Message From Chairman</a></li>
                  <li><a className="dropdown-item" href="/our-people">Our People</a></li>
                  <li><a className="dropdown-item" href="/testimonial">Testimonials</a></li>
                </ul>
              </li>

              <li className="nav-item1 dropdown">
                <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown">
                  Projects <i className="bi bi-caret-down-fill ms-1"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/ongoing-project">Ongoing Projects</a></li>
                  <li><a className="dropdown-item" href="/completed-project">Completed Projects</a></li>
                </ul>
              </li>

              <li className="nav-item1 dropdown">
                <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown">
                  Partners <i className="bi bi-caret-down-fill ms-1"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/channel-partner">Channel Partner</a></li>
                  <li><a className="dropdown-item" href="/land-enquiry">Land Enquiry / Joint Ventures</a></li>
                </ul>
              </li>

              <li className="nav-item1">
                <a className="nav-link" href="/nri">NRI</a>
              </li>

              <li className="nav-item1">
                <a className="nav-link" href="/irefer">iRefer</a>
              </li>

              <li className="nav-item1 dropdown">
                <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown">
                  Customer's Corner <i className="bi bi-caret-down-fill ms-1"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/customer-support">Customer Support</a></li>
                  <li><a className="dropdown-item" href="/emi-calculator">EMI Calculator</a></li>
                </ul>
              </li>

              <li className="nav-item1 dropdown">
                <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown">
                  Contact Us <i className="bi bi-caret-down-fill ms-1"></i>
                </a> 
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/contact">Address</a></li>
                  <li><a className="dropdown-item" href="/careers">Careers</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
