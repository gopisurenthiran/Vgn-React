import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock
} from 'react-icons/fa';
import '@/style/Address.css';            /* << move CSS block below into this file */

export default function Address() {
  return (
    <section className="contact-section py-5">
      <Container fluid="lg">
        <Row className="g-4">
          {/* ---- contact panel ---- */}
          <Col lg={5}>
            <div className="contact-info shadow-sm p-4 h-100 bg-white">
              <InfoItem icon={<FaMapMarkerAlt />} title="Address">
                <strong>VGN HOMES PRIVATE LIMITED</strong><br />
                No. 333, Poonamallee High Road,<br />
                Amaindakarai, Chennai – 600 030.
              </InfoItem>

              <InfoItem icon={<FaPhoneAlt />} title="Phone">
                <a href="tel:+914443937979" className="ci-link">
                  +91 44 4393 7979
                </a>
              </InfoItem>

              <InfoItem icon={<FaEnvelope />} title="Email">
                <a href="mailto:info@vgngroup.org" className="ci-link">
                  info@vgngroup.org
                </a>
              </InfoItem>

              <InfoItem icon={<FaClock />} title="Corporate Office">
                Monday – Saturday<br />09:30 am – 06:30 pm
              </InfoItem>

              <InfoItem icon={<FaClock />} title="Site Office">
                All Days<br />09:30 am – 06:30 pm
              </InfoItem>
            </div>
          </Col>

          {/* ---- map ---- */}
          <Col lg={7}>
            <div className="ratio ratio-16x9 h-100">
              <iframe
                title="VGN Homes Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3867!2d80.22892!3d13.074658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266874a566b89%3A0x9ce8f00d9409709e!2sVGN%20Homes%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1647878072272"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

/* ---------- tiny helper ---------- */
const InfoItem = ({ icon, title, children }) => (
  <div className="d-flex mb-4 ci-item">
    <div className="ci-icon me-3 flex-shrink-0">{icon}</div>
    <div>
      <h6 className="fw-semibold mb-1">{title}</h6>
      <p className="mb-0 lh-sm">{children}</p>
    </div>
  </div>
);
