import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import headBorder from "/head-border.png"; // Adjust the path as needed

export default function Nri() {
  const [phone, setPhone] = useState("");

  return (
    <section className="contact-form-section spad bg" style={{ padding: "60px 0" }}>
      <Container>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="heading text-center mb-4">
              <h4>
                <span className="head-border">
                  <img src={headBorder} alt="head-border" />
                </span>
                ENQUIRY NOW
              </h4>
            
            </div>

            <Form className="cc-form p-4" style={{ background: "#fff", boxShadow: "0 0 20px rgba(0,0,0,0.05)" }}>
              <div className="row gy-3">
                <div className="col-lg-6">
                  <Form.Control type="text" placeholder="Name*" required />
                </div>
                <div className="col-lg-6">
                  <PhoneInput
                    country={"in"}
                    value={phone}
                    onChange={setPhone}
                    inputStyle={{ width: "100%" }}
                    placeholder="Phone Number*"
                    specialLabel=""
                    inputProps={{ required: true }}
                  />
                </div>
                <div className="col-lg-6">
                  <Form.Control type="email" placeholder="Email id*" required />
                </div>
                <div className="col-lg-6">
                  <Form.Control type="text" placeholder="Location*" required />
                </div>

                <div className="col-lg-12 text-center mt-4">
                  <button
                    type="submit"
                    className="site-btn"
                    id="btnsubmit"
                    name="btnsubmit"
                    style={{
                      border: "2px solid #b40000",
                      color: "#b40000",
                      borderRadius: "50px",
                      padding: "10px 40px",
                      fontWeight: "600",
                      background: "transparent",
                      letterSpacing: "1px",
                    }}
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
}
