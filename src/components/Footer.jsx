import React from "react";
import footerBg from "@/assets/footer-bg.png";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
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
          height: "200px",
        }}
      >
        <div className="p-5">
          {/* Contact Section */}
          <div className="row text-start">
            <div className="col-sm-12 col-md-3">
              <h5 className="fw-bold footer-heading mb-3">CONTACT US</h5>
              <address className="mb-2 footer-content">
                <strong>VGN HOMES PRIVATE LIMITED</strong>
                <br />
                No.333, Poonamallee High Road,
                <br />
                Aminjikarai, Chennai – 600 030.
              </address>
              <p className="mb-1 footer-content text-white">
                Email:{" "}
                <a
                  href="mailto:info@vgngroup.org"
                  className="text-white text-decoration-none"
                >
                  info@vgngroup.org
                </a>
              </p>
              <p className="text-white footer-content">
                Phone:{" "}
                <a
                  href="tel:+914443937979"
                  className="text-white text-decoration-none"
                >
                  +91 44 4393 7979
                </a>
              </p>
            </div>

            {/* 4 Columns Section */}
            <div className="col-sm-12 col-md-9">
              <div className="row">
                <div className="col-2"></div>
                {/* Projects */}
                <div className="col-4 col-md-2">
                  <h5 className="fw-bold footer-heading mb-3">PROJECTS</h5>
                  <ul className="list-unstyled footer-content mb-0">
                    <li>
                      <a href="/ongoing-project" className="text-white text-decoration-none">Plots in Chennai</a>
                    </li>
                    <li>
                      <a href="/vgn-pride/index" className="text-white text-decoration-none">Plots in OMR</a>
                    </li>
                    <li>
                      <a href="/vgn-classique/index" className="text-white text-decoration-none">Plots in Ambattur</a>
                    </li>
                  </ul>
                </div>

                {/* Quick Links */}
                <div className="col-4 col-md-2">
                  <h5 className="fw-bold footer-heading mb-3">QUICK LINKS</h5>
                  <ul className="list-unstyled footer-content mb-0">
                    <li><a href="/channel-partner" className="text-white text-decoration-none">Partners</a></li>
                    <li><a href="/nri" className="text-white text-decoration-none">NRI</a></li>
                    <li><a href="/careers" className="text-white text-decoration-none">Careers</a></li>
                    <li><a href="/irefer" className="text-white text-decoration-none">iRefer</a></li>
                    <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
                  </ul>
                </div>

                {/* Other Links */}
                <div className="col-4 col-md-2">
                  <h5 className="fw-bold footer-heading mb-3">OTHER LINKS</h5>
                  <ul className="list-unstyled footer-content mb-0">
                    <li><a href="/customer-support" className="text-white text-decoration-none">Customer Support</a></li>
                    <li><a href="/terms-and-conditions" className="text-white text-decoration-none">Terms and Conditions</a></li>
                    <li><a href="/emi-calculator" className="text-white text-decoration-none">EMI Calculator</a></li>
                  </ul>
                </div>

                {/* Social Icons */}

                <div className="col-6 col-md-3" >
                  <h5 className="fw-bold footer-heading mb-3">GET IN TOUCH</h5>
                  <div className="d-flex flex-wrap gap-3 fs-5">
                    <a href="https://www.facebook.com/VGN1942/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className=" social-icon footer-content"><FaFacebookF /></a>
                    <a href="https://www.instagram.com/vgnhomes/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className=" social-icon footer-content"><FaInstagram /></a>
                    <a href="https://www.youtube.com/c/VGNHomesPvtLtd" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className=" social-icon footer-content"><FaYoutube /></a>
                    <a href="https://www.linkedin.com/company/vgn-homes-pvt-ltd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className=" social-icon footer-content"><FaLinkedinIn /></a>
                    <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x3a5266874a566b89:0x9ce8f00d9409709e?source=g.page.share" aria-label="Call" className=" social-icon footer-content"><FaMapMarkerAlt /></a>
                    {/* <a href="https://wa.me/914443937979" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-white social-icon footer-content"><FaWhatsapp /></a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-3 mt-4 border-top border-white border-opacity-25">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-white small gap-2">
          <p className="mb-0 footer-content text-whit">© 2025 VGN Homes - All Rights Reserved.</p>
          <p className="mb-0 footer-content text-whit ">
            Website Maintained by <strong>Ayatiworks</strong>
            <img src="/web_logo.png" alt="Ayatiworks Logo" style={{ height: "40px", marginLeft: "10px" }} />
          </p>
          <p className="mb-0">
            <a href="/privacy-policy" className="text-white footer-content text-decoration-none me-2">Privacy Policy</a>
            <span className="text-white">|</span>
            <a href="/disclaimer" className="text-white footer-content text-decoration-none ms-2">Disclaimer</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
