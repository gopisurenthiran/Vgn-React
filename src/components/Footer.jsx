import React from "react";
import { Link } from "react-router-dom";      // ⬅️ NEW
import footerBg from "@/assets/footer-bg.png";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: "#b61217" }}>
      {/* Background and Main Content */}
      <div
        style={{
          backgroundColor: "#b61217",
          backgroundImage: `url(${footerBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom center",
          backgroundSize: "contain",
        }}
      >
        <div className="container px-3 px-md-5 py-5">
          {/* Contact Section */}
          <div className="row text-start">
            <div className="col-12 col-md-4 col-lg-3 mb-4 mb-md-0">
              <h5 className="fw-bold footer-heading mb-3">CONTACT&nbsp;US</h5>
              <address className="mb-2 footer-content">
                <strong>VGN&nbsp;HOMES&nbsp;PRIVATE&nbsp;LIMITED</strong>
                <br />
                No.333, Poonamallee&nbsp;High&nbsp;Road,
                <br />
                Aminjikarai,&nbsp;Chennai&nbsp;–&nbsp;600&nbsp;030.
              </address>
              <p className="mb-1 footer-content">
                Email:&nbsp;
                <a
                  href="mailto:info@vgngroup.org"
                  className="text-white text-decoration-none"
                >
                  info@vgngroup.org
                </a>
              </p>
              <p className="footer-content">
                Phone:&nbsp;
                <a
                  href="tel:+914443937979"
                  className="text-white text-decoration-none"
                >
                  +91&nbsp;44&nbsp;4393&nbsp;7979
                </a>
              </p>
            </div>

            {/* 4 Columns Section */}
            <div className="col-12 col-md-8 col-lg-9">
              <div className="row">
                <div className="col-0 col-lg-2 d-none d-lg-block"></div>

                {/* Projects */}
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                  <h5 className="fw-bold footer-heading mb-3">PROJECTS</h5>
                  <ul className="list-unstyled footer-content mb-0">
                    <li>
                      <Link
                        to="/ongoing-project"
                        className="text-white text-decoration-none"
                      >
                        Plots&nbsp;in&nbsp;Chennai
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/vgn-pride/index"
                        className="text-white text-decoration-none"
                      >
                        Plots&nbsp;in&nbsp;OMR
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="text-white text-decoration-none"
                      >
                        Plots&nbsp;in&nbsp;Ambattur
                      </Link>
                    </li>
                        <li>
                      <Link
                        to="/ongoing-project"
                        className="text-white text-decoration-none"
                      >
                        Villas in Avadi
                      </Link>
                    </li>
                        <li>
                      <Link
                        to="/vgn-paradise/index"
                        className="text-white text-decoration-none"
                      >
                        Plots in Thiruvottriyur
                      </Link>
                    </li>
                        <li>
                      <Link
                        to="#"
                        className="text-white text-decoration-none"
                      >
                        Villas in OMR
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Quick Links */}
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                  <h5 className="fw-bold footer-heading mb-3">QUICK&nbsp;LINKS</h5>
                  <ul className="list-unstyled footer-content mb-0">
                    <li>
                      <Link
                        to="/channel-partner"
                        className="text-white text-decoration-none"
                      >
                        Partners
                      </Link>
                    </li>
                    <li>
                      <Link to="/nri" className="text-white text-decoration-none">
                        NRI
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/careers"
                        className="text-white text-decoration-none"
                      >
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/irefer"
                        className="text-white text-decoration-none"
                      >
                        iRefer
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="text-white text-decoration-none"
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogs"
                        className="text-white text-decoration-none"
                      >
                        Blogs
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Other Links */}
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                  <h5 className="fw-bold footer-heading mb-3">OTHER&nbsp;LINKS</h5>
                  <ul className="list-unstyled footer-content mb-0">
                    <li>
                      <Link
                        to="/customer-support"
                        className="text-white text-decoration-none"
                      >
                        Customer&nbsp;Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/terms-and-conditions"
                        className="text-white text-decoration-none"
                      >
                        Terms&nbsp;and&nbsp;Conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/emi-calculator"
                        className="text-white text-decoration-none"
                      >
                        EMI&nbsp;Calculator
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Social Icons */}
                <div className="col-12 col-md-3 mt-4 mt-md-0">
                  <h5 className="fw-bold footer-heading mb-3">GET&nbsp;IN&nbsp;TOUCH</h5>
                  <div className="d-flex flex-wrap gap-3 fs-5">
                    {/* external links stay as <a> tags */}
                    <a
                      href="https://www.facebook.com/VGN1942/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="social-icon footer-content text-white"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="https://www.instagram.com/vgnhomes/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="social-icon footer-content text-white"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://www.youtube.com/c/VGNHomesPvtLtd"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      className="social-icon footer-content text-white"
                    >
                      <FaYoutube />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/vgn-homes-pvt-ltd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="social-icon footer-content text-white"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x3a5266874a566b89:0x9ce8f00d9409709e?source=g.page.share"
                      aria-label="Map"
                      className="social-icon footer-content text-white"
                    >
                      <FaMapMarkerAlt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="copyright-text">
        <div className="">
          <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-white small gap-3 text-center text-md-start">
            <p className="mb-0 footer-content">
              ©&nbsp;2025&nbsp;VGN&nbsp;Homes&nbsp;-&nbsp;All&nbsp;Rights&nbsp;Reserved.
            </p>

            <p className="mb-0 footer-content d-flex align-items-center justify-content-center">
              Website&nbsp;Maintained&nbsp;by&nbsp;
              <strong className="ms-1">Ayatiworks</strong>
              <a
                href="https://ayatiworks.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ms-2"
              >
                <img
                  src="/web_logo.png"
                  alt="Ayatiworks Logo"
                  style={{ height: "40px" }}
                />
              </a>
            </p>

            <p className="mb-0 footer-content copy-txt2">
              <Link
                to="/privacy-policy"
                className="text-white text-decoration-none me-2"
              >
                Privacy&nbsp;Policy
              </Link>
              <span className="text-white">|</span>
              <Link
                to="/disclaimer"
                className="text-white text-decoration-none ms-2"
              >
                Disclaimer
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
