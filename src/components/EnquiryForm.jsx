import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EnquiryForm() {
  const [phone, setPhone] = useState("");

  return (
    <div
      className="enquiry-section d-flex flex-column align-items-center justify-content-center"
      style={{
        backgroundImage: "url('/enquiry-back.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 15px",
        minHeight: "100vh",
      }}
    >
      {/* Heading */}
      <div className="text-center mb-4">
        <h4 className="text-white d-inline-flex align-items-center" style={{ fontSize: "1.6rem" }}>
          <img
            className="head-border"
            src="/head-border.png"
            alt="Red corner"
            style={{ width: "30px", height: "28px", marginRight: "10px" }}
          />
          ENQUIRY FORM
        </h4>
      </div>

      {/* Form Box */}
      <div className="container bg-white rounded-4 shadow-lg p-4 p-md-5" style={{ maxWidth: "900px" }}>
        <form>
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Name*" required />
            </div>
            <div className="col-md-6">
              <PhoneInput
                country={"in"}
                value={phone}
                onChange={setPhone}
                enableSearch
                inputProps={{
                  name: "phone",
                  required: true,
                }}
                inputStyle={{
                  width: "100%",
                  height: "38px",
                }}
              />
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <input type="email" className="form-control" placeholder="Email id*" required />
            </div>
            <div className="col-md-6">
              <select className="form-select" required>
                <option value="">Select Projects*</option>
                <option value="Grandeur">VGN Grandeur</option>
                <option value="Aspire Gardens">VGN Aspire Gardens</option>
                <option value="Pride de' Villa">VGN Pride de' Villa</option>
                <option value="Highland">VGN Highland</option>
                <option value="Horizon">VGN Horizon</option>
                <option value="Classique">VGN Classique</option>
                <option value="Serene">VGN Serene</option>
                <option value="Pride">VGN Pride</option>
                <option value="Brillianze Phase II">VGN Brillianze Phase II</option>
                <option value="Westfield">VGN Westfield</option>
                <option value="Mahalakshmi nagar Phase XIV">VGN Mahalakshmi Nagar Phase XIV</option>
                <option value="CH40">VGN CH40</option>
                <option value="Mugavari Phase II">VGN Mugavari Phase II</option>
                <option value="Windsor Park Phase IV - 1G">VGN Windsor Park Phase IV - 1G</option>
                <option value="Southern Meadows">VGN Southern Meadows</option>
                <option value="Exotica">VGN Exotica</option>
                <option value="Varnabhoomi Phase II">VGN Varnabhoomi Phase II</option>
                <option value="Windsor Park Phase VII">VGN Windsor Park Phase VII</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <textarea className="form-control" rows="3" placeholder="Message" required></textarea>
          </div>

          <div className="row align-items-start mb-3 gx-2">
            <div className="col-auto">
              <input type="checkbox" id="consent" className="form-check-input" required />
            </div>
            <div className="col">
              <label htmlFor="consent" className="form-check-label small">
                I authorize VGN and its representatives to contact me with updates and notifications via email,
                SMS, WhatsApp & call. This will override the registry on DND/NDNC.
                <span className="text-danger">*</span>
              </label>
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-outline-danger rounded-pill px-4 py-2">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
