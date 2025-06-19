import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Address() {
  return (
    <section className="contact-section">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="contact-info mt-5">
              <div className="ci-item">
                <div className="ci-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="ci-text">
                  <h5>Address</h5>
                  <p>
                    <b>VGN HOMES PRIVATE LIMITED</b>
                    <br />
                    No.333, Poonamallee High Road,
                    <br />
                    Amaindakarai, Chennai – 600 030.
                  </p>
                </div>
              </div>

              <div className="ci-item">
                <div className="ci-icon">
                  <FaPhoneAlt />
                </div>
                <div className="ci-text">
                  <h5>Phone Number</h5>
                  <ul style={{
                    padding: "0", listStyleType : "none"
                  }}>
                    <li>
                      <a href="tel:+914443937979" style={{ color: "#000", textDecoration:"none" }}>
                        +91 44 4393 7979
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="ci-item">
                <div className="ci-icon">
                  <FaEnvelope />
                </div>
                <div className="ci-text">
                  <h5>Email Id</h5>
                  <p>
                    <a
                      href="mailto:info@vgngroup.org"
                      style={{ color: "#000", textDecoration:"none" }}
                    >
                      info@vgngroup.org
                    </a>
                  </p>
                </div>
              </div>

              <div className="ci-item">
                <div className="ci-icon">
                  <FaClock
                    style={{
                      background: "#fff",
                      color: "#b4151a",
                      borderRadius: "107%",
                      padding: "1px 2px",
                    }}
                  />
                </div>
                <div className="ci-text">
                  <h5>Corporate Office</h5>
                  <p>Monday to Saturday</p>
                  <p>09.30 am to 06.30 pm</p>
                </div>
              </div>

              <div className="ci-item">
                <div className="ci-icon">
                  <FaClock
                    style={{
                      background: "#fff",
                      color: "#b4151a",
                      borderRadius: "107%",
                      padding: "1px 2px",
                    }}
                  />
                </div>
                <div className="ci-text">
                  <h5>Site Office</h5>
                  <p>All Days</p>
                  <p>09.30 am to 06.30 pm</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="cs-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3867498594955!2d80.22891971482308!3d13.074657990788367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266874a566b89%3A0x9ce8f00d9409709e!2sVGN%20Homes%20Pvt.%20Ltd%20%E2%98%91!5e0!3m2!1sen!2sin!4v1647878072272!5m2!1sen!2sin"
          width="100%"
          height="650"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          title="VGN Homes Location"
        ></iframe>
      </div>
    </section>
  );
}
