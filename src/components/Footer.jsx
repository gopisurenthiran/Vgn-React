import React from "react";
import ToTop from '../components/ToTop'
import footerBg from "@/assets/footer-bg.png";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import ToTopContact from "./ToTop";

export default function Footer() {
  return (
    <footer
      className="text-white pt-5"
      style={{
        backgroundColor: "#b61217",
        
      }}
    >
      <div className="" style={{
        backgroundColor: "#b61217",
        backgroundImage: `url(${footerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        backgroundSize: "contain",
        height: "200px"
      }}>
      <div className="container">
        <div className="row gy-4 text-start">
          {/* Contact */}
          <div className="col-sm-6 col-md-3">
            <h5 className="fw-bold mb-3">CONTACT US</h5>
            <address className="mb-2">
              <strong>VGN HOMES PRIVATE LIMITED</strong><br />
              No.333, Poonamallee High Road,<br />
              Aminjikarai, Chennai – 600 030.
            </address>
            <p className="mb-1">Email: <a href="mailto:info@vgngroup.org" className="text-white">info@vgngroup.org</a></p>
            <p>Phone: <a href="tel:+914443937979" className="text-white">+91 44 4393 7979</a></p>
          </div>

          {/* Projects */}
          <div className="col-sm-6 col-md-2">
            <h5 className="fw-bold mb-3">PROJECTS</h5>
            <ul className="list-unstyled mb-0">
              <li>Plots in Chennai</li>
              <li>Plots in OMR</li>
              <li>Plots in Ambattur</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-sm-6 col-md-2">
            <h5 className="fw-bold mb-3">QUICK LINKS</h5>
            <ul className="list-unstyled mb-0">
              <li>Partners</li>
              <li>NRI</li>
              <li>Careers</li>
              <li>iRefer</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Other Links */}
          <div className="col-sm-6 col-md-2">
            <h5 className="fw-bold mb-3">OTHER LINKS</h5>
            <ul className="list-unstyled mb-0">
              <li>Customer Support</li>
              <li>Terms and Conditions</li>
              <li>EMI Calculator</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">GET IN TOUCH</h5>
            <div className="d-flex flex-wrap gap-3 fs-5">
              <a href="#" aria-label="Facebook" className="text-white"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram" className="text-white"><FaInstagram /></a>
              <a href="#" aria-label="YouTube" className="text-white"><FaYoutube /></a>
              <a href="#" aria-label="LinkedIn" className="text-white"><FaLinkedinIn /></a>
              <a href="#" aria-label="Call" className="text-white"><FaPhoneAlt /></a>
              <a href="#" aria-label="WhatsApp" className="text-white"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
      </div>
</div>
      {/* Bottom Bar */}
      <div className="text-center py-3 mt-4 border-top border-white border-opacity-25">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-white small gap-2">
          <p className="mb-0 footer_text_size text-white">© 2025 VGN Homes - All Rights Reserved.</p>
          <p className="mb-0 fs-6 footer_text_size text-white">Website Maintained by <strong>Ayatiworks</strong><img src="web_logo.png" alt="" style={{height: "40px"}}/></p>
          <p className="mb-0">
            <a href="#" className="text-white footer_text_size text-decoration-none me-2">Privacy Policy</a><span className="text-white">|</span>
            <a href="#" className="text-white footer_text_size text-decoration-none ms-2">Disclaimer</a>
          </p>
        </div>
      </div>

    </footer>
  );
}
