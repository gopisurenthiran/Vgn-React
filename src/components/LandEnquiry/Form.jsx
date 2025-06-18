import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import headBorder from "/head-border.png";

export default function LandEnquiryForm() {
  const [phone, setPhone] = useState("");

  return (
    <section className="contact-form-section spad  py-5 bg">
      <div className="container">
        <div className="custom-form-wrapper mx-auto p-4 p-md-5 bg-white shadow-sm">
          <div className="heading text-center mb-4">
            <h4 className="form-heading">
              <span className="head-border">
                <img src={headBorder} alt="head-border" />
              </span>
              LAND ENQUIRY / JOINT VENTURES
            </h4>
          </div>

          <form className="cc-form">
            <div className="d-md-flex gap-3 mb-3">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                className="form-control mb-3 mb-md-0"
              />
              <PhoneInput
                country={"in"}
                value={phone}
                onChange={setPhone}
                inputStyle={{ width: "100%" }}
                inputClass="form-control"
                specialLabel=""
                placeholder="Phone Number*"
                inputProps={{ required: true }}
              />
            </div>

            <div className="d-md-flex gap-3 mb-3">
              <input
                type="email"
                name="email"
                placeholder="Email id*"
                required
                className="form-control mb-3 mb-md-0"
              />
              <input
                type="text"
                name="location"
                placeholder="Location*"
                required
                className="form-control"
              />
            </div>

            <div className="mb-4">
              <textarea
                name="message"
                rows="4"
                placeholder="Message*"
                required
                className="form-control"
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="site-btn custom-submit-btn">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
