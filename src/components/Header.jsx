import React, { useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import navConfig from "./navConfig";
import logo from "@/assets/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js"; // ⬅️ gives us Collapse
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/style/NavigationBar.css";

export default function NavigationBar() {
  const location = useLocation();

  /* ------------------------------------------------------------------ */
  /*  1.  Refs for the collapsing element and its Bootstrap instance    */
  /* ------------------------------------------------------------------ */
  const collapseRef = useRef(null);
  const collapseInstance = useRef(null);

  /* ------------------------------------------------------------------ */
  /*  2.  Create the Collapse instance once, without auto-toggling      */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    if (collapseRef.current) {
      collapseInstance.current = new bootstrap.Collapse(collapseRef.current, {
        toggle: false, // don’t open/close on init
      });
    }
  }, []);

  /* ------------------------------------------------------------------ */
  /*  3.  Hide the menu after any click on mobile (< 992 px)            */
  /* ------------------------------------------------------------------ */
  const handleNavClick = useCallback(() => {
    if (window.innerWidth < 992 && collapseInstance.current) {
      collapseInstance.current.hide();
    }
  }, []);

  /* ------------------------------------------------------------------ */
  /*  4.  Build menu items (adds onClick={handleNavClick})              */
  /* ------------------------------------------------------------------ */
  const renderMenu = () =>
    navConfig.map((item, idx) =>
      item.children ? (
        <li className="nav-item dropdown" key={idx}>
          <Link
            to="#"
            role="button"
            className={`nav-link dropdown-toggle ${
              item.children.some((c) => location.pathname === c.path) ? "active" : ""
            }`}
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {item.title}
          </Link>

          <ul className="dropdown-menu">
            {item.children.map((child, i) => (
              <li key={i}>
                <Link
                  to={child.path}
                  className={`dropdown-item ${
                    location.pathname === child.path ? "active" : ""
                  }`}
                  onClick={handleNavClick}       // 👈 closes menu on tap
                >
                  {child.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ) : (
        <li className="nav-item" key={idx}>
          <Link
            to={item.path}
            className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
            onClick={handleNavClick}             // 👈 closes menu on tap
          >
            {item.title}
          </Link>
        </li>
      )
    );

  /* ------------------------------------------------------------------ */
  /*  5.  Render                                                        */
  /* ------------------------------------------------------------------ */
  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-danger text-white py-2 px-4 d-flex justify-content-end small">
        <div className="" style={{marginRight: "20px"}}>
          <i className="bi bi-telephone"></i> 044&nbsp;4002&nbsp;4002,&nbsp;044&nbsp;6965&nbsp;6902
        </div>
        <div>
          <i className="bi bi-envelope"></i> info@vgngroup.org
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
           <img src={logo} alt="Logo" width="140" className="me-3" />

          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* collapseRef gives Bootstrap something to control */}
          <div
            ref={collapseRef}
            className="collapse navbar-collapse"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-semibold">
              {renderMenu()}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
