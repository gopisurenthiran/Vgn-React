import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import LocationAdvantages from "./LocationAdvantages";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faHome,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import { FaClipboard, FaDownload, FaHome } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

import mugavari from "@/assets/vgn-mugavari/main-logo.png";
import mugavarimobile from "@/assets/vgn-mugavari/main-logo1.png";

import img1 from "@/assets/vgn-mugavari/icon1.png";
import img2 from "@/assets/vgn-mugavari/icon2.png";
import img3 from "@/assets/vgn-mugavari/icon3.png";
import img4 from "@/assets/vgn-mugavari/icon4.png";

import mapImage from "@/assets/vgn-mugavari/location-map.jpg";

import advIcon1 from "@/assets/adv-icon1.png";
import advIcon2 from "@/assets/adv-icon2.png";
import advIcon3 from "@/assets/adv-icon3.png";
import advIcon4 from "@/assets/adv-icon4.png";
import advIcon5 from "@/assets/adv-icon5.png";
import EnquiryFormHome from "../EnquiryForm";
import SubNav from "./SubNav";

export default function EnquiryForm() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const advantages = [
    {
      icon: advIcon1,
      text: (
        <>
          82 Years of
          <br />
          business expertise
        </>
      ),
    },
    {
      icon: advIcon2,
      text: (
        <>
          245+ <br />
          projects
        </>
      ),
    },
    {
      icon: advIcon3,
      text: (
        <>
          60,000+
          <br />
          customers
        </>
      ),
    },
    {
      icon: advIcon4,
      text: <>850+ acres of plot property developed</>,
    },
    {
      icon: advIcon5,
      text: <>20 million sq.ft. of residential projects</>,
    },
  ];

  const projects = [
    {
      img: img1,
      text: "Elevated blacktop roads (as per IRC standards)",
    },
    {
      img: img2,
      text: "Ready for construction",
    },
    { img: img3, text: "Compound wall all around" },
    { img: img4, text: "Avenue trees" },
  ];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const [message, setMessage] = React.useState("");

  const onSubmit = async (data) => {
    console.log("Form Data Submitted:", data);
    setMessage("Form submitted successfully!");
  };

  const phone = watch("phone");

  return (
    <section className="property-details-section">
      <div className="container">
        <div className="row">
          {/* <SubNav /> */}
          <div className="col-lg-4">
            <div
              className="position-sticky"
              style={{ top: "100px", zIndex: 1 }}
            >
              <div className="property-sidebar" id="contact">
                <div className="single-sidebar">
                  <div className="contact-bx">
                    <div className="section-title7">
                      <h4>Enquiry Form</h4>
                    </div>
                    <EnquiryFormHome projectname="Mugavari Phase - IV & V" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="pd-text">
              {/* Top Section with Logo & Address */}
              <div className="row align-items-center py-3">
                {/* Logo & Location */}
                <div className="col-lg-6 col-12 mb-3 mb-lg-0">
                  <div className="pd-title  flex-column flex-lg-row align-items-start align-items-lg-center gap-2">
                    {/* Desktop Image */}
                    <img
                      src={mugavari}
                      alt="desktop-logo"
                      className="img-fluid d-none d-lg-block"
                      style={{ maxWidth: "100%" }}
                    />
                    {/* Mobile Image */}
                    <div className="d-lg-none text-center">
                      <img
                        src={mugavarimobile}
                        alt="mobile-logo"
                        className="img-fluid"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </div>
                    <p className="mb-0">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        style={{ color: "#d90005" }}
                      />{" "}
                      Tambaram, Chennai.
                    </p>
                  </div>
                </div>

                {/* Plot Info */}
                <div className="col-lg-6">
                  <div className="pd-social">
                    <p>
                      <FaHome
                        style={{ color: "#d90005", marginRight: "6px" }}
                      />
                      Plots Ranging from: 700 - 1926 Sq feet
                    </p>

                    <div className="d-flex justify-content-center justify-content-lg-start">
                      <p
                        onClick={handleShow}
                        className="m-0"
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <FaDownload style={{ color: "#d90005" }} />
                        <span style={{ color: "#e00527" }}>
                          Download E-Brochure
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Modal */}
                  <Modal show={showModal} onHide={handleClose} centered>
                    <Modal.Header closeButton style={{ borderBottom: "none" }}>
                      <Modal.Title
                        className="w-100 text-center"
                        style={{ fontWeight: "600" }}
                      >
                        DOWNLOAD E-BROCHURE
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group controlId="formName" className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Name"
                            style={{ borderRadius: "6px" }}
                          />
                        </Form.Group>
                        <Form.Group controlId="formPhone" className="mb-3">
                          <PhoneInput
                            country={"in"}
                            inputStyle={{
                              width: "100%",
                              borderRadius: "6px",
                              height: "38px",
                            }}
                          />
                        </Form.Group>
                        <Form.Group controlId="formEmail" className="mb-4">
                          <Form.Control
                            type="email"
                            placeholder="Email Id"
                            style={{ borderRadius: "6px" }}
                          />
                        </Form.Group>
                        <Button
                          className="w-100 mx-auto"
                          style={{
                            backgroundColor: "#b80000",
                            border: "none",
                            fontWeight: "600",
                          }}
                          onClick={handleClose}
                        >
                          Submit and Download
                        </Button>
                      </Form>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
              <div className="border-bottom my-3"></div>

              {/* About Section */}
              <div className="pd-widget" id="about-vgn">
                <div className="section-title7">
                  <h4
                    className="mobile-h4"
                    style={{ fontWeight: 900, fontSize: "35px" }}
                  >
                    About VGN Mugavari
                  </h4>
                </div>

                <p style={{ textAlign: "justify" }}>
                  Tambaram, a much favoured residential and commercial
                  destination. It's vantage location with easy access to several
                  parts of the city and landmark hubs have made it a highly
                  sought-after place for many years now. It's been the cherished
                  dream of many to build their dream home in this beautiful
                  place. An Amalgamation of the traditional and the modern, the
                  quaintness of suburban life mixed with the busy city life,
                  that's what Tambaram is all around.
                </p>
                <p style={{ textAlign: "justify" }}>
                  VGN's Mugavari is located in such and enviable location, an
                  address that welcomes prosperity. Whether you are planning to
                  build your perfect home or buying as an investment for your
                  kids' financial security, this place is just right for you.
                  The appreciation in this location is manifold, giving you
                  great returns.
                </p>
                <p style={{ textAlign: "justify" }}>
                  Plots sizes ranging from 700 - 1926 sq.ft. Mugavari comes with
                  an array of feel-good, cozy amenities that will make life more
                  joyous and meaningful for you.
                </p>
              </div>

              <div className="border-bottom my-3"></div>

              {/* Project Highlights Section */}
              <div
                className="pd-widget pd-widget1"
                id="highlights"
                style={{ marginBottom: "5px" }}
              >
                <div className="section-title7">
                  <h4>Project Highlights</h4>
                </div>
                <div className="row">
                  {projects.map((feature, index) => (
                    <div
                      key={index}
                      className="col-lg-3 col-md-4 col-6 g-3"
                    >
                      <div className="servicebox first">
                        <div className="service-icon">
                          <div className="dm-icon-effect-1 effect-slide-bottom in">
                            <i className="hovicon effect-1 sub-a fa-2x">
                              <img
                                src={feature.img}
                                alt={feature.text}
                                style={{ width: "70px" }}
                              />
                            </i>
                          </div>
                        </div>
                        <div className="servicetitle">
                          <h3>{feature.text}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-bottom my-3"></div>
              <LocationAdvantages />

              <div className="border-bottom my-3"></div>

              {/* Location Map Section */}
              <div className="pd-widget" id="map">
                <div className="section-title7">
                  <h4>Location Map</h4>
                </div>
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d124400.65079176649!2d80.0960241!3d13.0025021!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f0312f37201%3A0xa1ee88efe4b55da7!2sVGN%20MUGAVARI!5e0!3m2!1sen!2sin!4v1648113002819!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="VGN Pride Location"
                  ></iframe>
                </div>
              </div>

              <div className="border-bottom my-3"></div>
              {/* Route Map Section */}
              <div className="pd-widget" id="route">
                <div className="section-title7">
                  <h4>Route Map</h4>
                </div>
                <img src={mapImage} alt="map" className="img-fluid" />
              </div>

              <div className="border-btm"></div>
              {/* About VGN */}
              <div className="pd-widget">
                <div className="section-title7">
                  <h4>About VGN</h4>
                  <br />
                </div>
                <p style={{ textAlign: "justify" }}>
                  With close to 8 decades of experience in the business, VGN
                  stands out distinctly. Their portfolio ranges from affordable
                  housing to ultra-luxury homes backed by some of the finest
                  professionals of the industry. The brand's keen emphasis on
                  quality, world class design sense, industry-best practices,
                  and on-time delivery makes it the most preferred choice among
                  customers.
                </p>
              </div>

              <div className="border-btm"></div>
              {/* VGN Advantages Section */}
              <div className="pd-widget" style={{ marginBottom: "0px" }}>
                <div className="section-title7">
                  <h4>VGN Advantages</h4>
                  <br />
                </div>

                <div className="row">
                  {advantages.map((adv, index) => (
                    <div
                      key={index}
                      className="col-4 col-sm-4 col-md-3 col-lg-2 mx-auto mb-4"
                    >
                      <div className="servicebox first">
                        <div className="service-icon">
                          <div className="dm-icon-effect-1 effect-slide-bottom in">
                            <i className="hovicon effect-1 sub-a fa-2x">
                              <img
                                src={adv.icon}
                                alt="advantage-icon"
                                style={{ width: "70px" }}
                              />
                            </i>
                          </div>
                        </div>
                        <div className="servicetitle">
                          <h3>{adv.text}</h3>
                          {index === 1 || index === 2 ? <br /> : null}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="col-left"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
