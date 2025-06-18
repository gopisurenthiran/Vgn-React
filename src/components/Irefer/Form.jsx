
import "bootstrap/dist/css/bootstrap.min.css";
import headBorder from "@/assets/head-border.png";
import PhoneInput from "react-phone-input-2";
import React, { useState } from "react";

export default function ReferralForm() {
  const [yourPhone, setYourPhone] = useState("");
  const [friendPhone, setFriendPhone] = useState("");
  return (
    <section className="contact-form-section py-5 bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="cf-content">
              <div className="heading mb-4">
                <h4>
                  <span className="head-border">
                    <img src={headBorder} alt="head-border" />
                  </span>
                  Referral Form
                </h4>
              </div>
              <form className="cc-form" id="frmcontact" method="post">
                <div className="group-input mb-4">
                  <div className="cc-title mb-3">
                    <h4>Your Details</h4>
                  </div>
                  <div className="row g-3">
                    <div className="col-lg-6">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        maxLength="100"
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-6">
                      
                      <PhoneInput
                        country={"in"}
                        value={yourPhone}
                        onChange={setYourPhone}
                        inputStyle={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email id*"
                        maxLength="200"
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-6">
                      <select
                        name="enqproject"
                        className="form-control"
                        required
                      >
                        <option value="">Select Projects*</option>
                        <option value="Highland">VGN Highland</option>
                        <option value="Paradise">VGN Paradise</option>
                        <option value="Horizon">VGN Horizon</option>
                        <option value="Classique">VGN Classique</option>
                        <option value="Serene">VGN Serene</option>
                        <option value="Pride">VGN Pride</option>
                        <option value="Brillianze Phase II">
                          VGN Brillianze Phase II
                        </option>
                        <option value="Westfield">VGN Westfield</option>
                        <option value="Mahalakshmi nagar Phase XIV">
                          VGN Mahalakshmi nagar Phase XIV
                        </option>
                        <option value="CH40">VGN CH40</option>
                        <option value="Mugavari Phase II">
                          VGN Mugavari Phase - II
                        </option>
                        <option value="Windsor Park Phase IV - 1G">
                          VGN Windsor Park Phase IV - 1G
                        </option>
                        <option value="Southern Meadows">
                          VGN Southern Meadows
                        </option>
                        <option value="Exotica">VGN Exotica</option>
                        <option value="Varnabhoomi Phase II">
                          VGN Varnabhoomi Phase II
                        </option>
                        <option value="Windsor Park Phase VII">
                          VGN Windsor Park Phase VII
                        </option>
                      </select>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        name="flatplotno"
                        placeholder="Flat / Plot Number*"
                        maxLength="20"
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        name="otherproj"
                        placeholder="Other Project"
                        maxLength="50"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="group-input mb-4">
                  <div className="cc-title mb-3">
                    <h4>Referee Details</h4>
                  </div>
                  <div className="row g-3">
                    <div className="col-lg-6">
                      <input
                        type="text"
                        name="frndname"
                        placeholder="Friend Name*"
                        maxLength="100"
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-6">
                      
                      <PhoneInput
                        country={"in"}
                        value={friendPhone}
                        onChange={setFriendPhone}
                        inputStyle={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        name="location"
                        placeholder="Location*"
                        maxLength="100"
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-6">
                      <select
                        name="frndproject"
                        className="form-control"
                        required
                      >
                        <option value="">Select Projects*</option>
                        <option value="Highland">VGN Highland</option>
                        <option value="Paradise">VGN Paradise</option>
                        <option value="Horizon">VGN Horizon</option>
                        <option value="Classique">VGN Classique</option>
                        <option value="Serene">VGN Serene</option>
                        <option value="Pride">VGN Pride</option>
                        <option value="Brillianze Phase II">
                          VGN Brillianze Phase II
                        </option>
                        <option value="Westfield">VGN Westfield</option>
                        <option value="Mahalakshmi nagar Phase XIV">
                          VGN Mahalakshmi nagar Phase XIV
                        </option>
                        <option value="CH40">VGN CH40</option>
                        <option value="Mugavari Phase II">
                          VGN Mugavari Phase - II
                        </option>
                        <option value="Windsor Park Phase IV - 1G">
                          VGN Windsor Park Phase IV - 1G
                        </option>
                        <option value="Southern Meadows">
                          VGN Southern Meadows
                        </option>
                        <option value="Exotica">VGN Exotica</option>
                        <option value="Varnabhoomi Phase II">
                          VGN Varnabhoomi Phase II
                        </option>
                        <option value="Windsor Park Phase VII">
                          VGN Windsor Park Phase VII
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" className="site-btn btn-primary px-5">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
