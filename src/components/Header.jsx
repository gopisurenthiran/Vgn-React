import React from "react";
import logo from "@/assets/logo.svg";

import 'bootstrap-icons/font/bootstrap-icons.css';

export default function NavigationBar() {
  return (
    <>
      {/* Top Contact Bar */}
      <div className="hs-top text-white py-2 px-3 d-flex justify-content-end align-items-center small">
        <div className="me-4">
          <i className="bi bi-telephone-fill me-2"></i>
          044 4002 4002, 044 6965 6902
        </div>
        <div>
          <i className="bi bi-envelope-fill me-2"></i>
          info@vgngroup.org
        </div>
      </div>

      {/* Main Navbar */}
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top shadow-sm bg">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={logo} alt="Logo" width="100" className="img-fluid" />
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
          <ul className="navbar-nav text-uppercase fw-bold gap-2 align-items-center">
            <li className="nav-item">
              <a className="nav-link active" href="/">Home</a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                About Us
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/about">About VGN</a></li>
                <li><a className="dropdown-item" href="/values">Our Values</a></li>
                <li><a className="dropdown-item" href="/chairman">Message From Chairman</a></li>
                 <li><a className="dropdown-item" href="/our-people">Our People</a></li>
                  <li><a className="dropdown-item" href="/testimonial">Testimonials</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Projects
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/ongoing-project">Ongoing Projects</a></li>
                <li><a className="dropdown-item" href="/completed-project">Completed Projects</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Partners
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Investors</a></li>
                <li><a className="dropdown-item" href="#">Channel Partners</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">NRI</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">iRefer</a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Customer's Corner
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Support</a></li>
                <li><a className="dropdown-item" href="#">FAQs</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Contact Us
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Email</a></li>
                <li><a className="dropdown-item" href="#">Location</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}
