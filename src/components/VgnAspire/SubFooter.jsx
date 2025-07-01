import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function SubFooter() {
  return (
    <div
      style={{ backgroundColor: "#b61217" }}
      className="text-white border-bottom border-white border-opacity-25 py-4"
    >
      <div className="container">
        <div className="row justify-content-center g-4 text-center text-md-start">
          {/* Phone */}
          <div className="col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-start gap-3">
            <FaPhoneAlt size={22} />
            <div>
              <div className="small">Sales Enquiries</div>
              <div className="fw-bold">044 6965 6980</div>
            </div>
          </div>

          {/* Email */}
          <div className="col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-start gap-3">
            <FiMail size={24} />
            <div>
              <div className="small">Email</div>
              <div className="fw-bold">salesvgn@vgngroup.org</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
