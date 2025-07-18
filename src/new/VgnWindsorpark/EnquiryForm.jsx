import { Modal, Button, Form } from "react-bootstrap";
import LocationAdvantages from "./LocationAdvantages";
import PhoneInput from "react-phone-input-2";
import { useForm } from "react-hook-form";

import "react-phone-input-2/lib/bootstrap.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FaClipboard, FaDownload, FaHome } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

import aspire from "@/assets/vgn-windsorpark/main-logo.png";
import aspiremobile from "@/assets/vgn-windsorpark/main-logo1.png";

import icon1 from "@/assets/vgn-windsorpark/icon1.png";
import icon2 from "@/assets/vgn-windsorpark/icon2.png";
import icon3 from "@/assets/vgn-windsorpark/icon3.png";
import icon4 from "@/assets/vgn-windsorpark/icon4.png";
import icon5 from "@/assets/vgn-windsorpark/icon5.png";
import icon6 from "@/assets/vgn-windsorpark/icon6.png";
import icon7 from "@/assets/vgn-windsorpark/icon7.png";
import icon8 from "@/assets/vgn-windsorpark/icon8.png";

import mapImage from "@/assets/vgn-windsorpark/location-map.png";

import advIcon1 from "@/assets/adv-icon1.png";
import advIcon2 from "@/assets/adv-icon2.png";
import advIcon3 from "@/assets/adv-icon3.png";
import advIcon4 from "@/assets/adv-icon4.png";
import advIcon5 from "@/assets/adv-icon5.png";
import BrochureModal from "../Modal";
import EnquiryFormHome from "../EnquiryForm";
import SubNav from "./SubNav";

export default function EnquiryForm() {
  const features = [
    {
      icon: icon1,
      title: "Maharishi Vidyamandir School (Inside the community)",
    },
    {
      icon: icon2,
      title: "Ready for\n Construction",
    },
    {
      icon: icon3,
      title: "Elevated Black\n Top Roads",
    },
    {
      icon: icon4,
      title: "Avenue\n Trees",
    },
    {
      icon: icon5,
      title: "Well Developed\n parks",
    },
    {
      icon: icon6,
      title: "Children’s\n play area",
    },
    {
      icon: icon7,
      title: "Bank Loans\n facilitated",
    },
    {
      icon: icon8,
      title: "LED Street\n Lights",
    },
  ];

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

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
         
          <div className="col-lg-4">
            <div
              className="position-sticky"
              style={{ top: "100px", zIndex: 1 }}
            >
              <div className="property-sidebar" id="contact">
                <div className="single-sidebar">
                  <div className="contact-bx">
                    <div className="section-title9">
                      <h4>Enquiry Form</h4>
                    </div>
                    <EnquiryFormHome />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="pd-text">
               <SubNav />
              {/* Top Section with Logo & Address */}
              <div className="row align-items-center py-3">
                {/* Logo & Location */}
                <div className="col-lg-6 col-12 mb-3 mb-lg-0">
                  <div className="pd-title  flex-column flex-lg-row align-items-start align-items-lg-center gap-2">
                    {/* Desktop Image */}
                    <img
                      src={aspire}
                      alt="desktop-logo"
                      className="img-fluid d-none d-lg-block"
                      style={{ maxWidth: "100%" }}
                    />
                    {/* Mobile Image */}
                    <div className="d-lg-none text-center">
                      <img
                        src={aspiremobile}
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
                      Avadi, Chennai.
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
                      Available Plots: 1104, 1170 Sq.Ft.
                    </p>
                    <p>
                      <FaClipboard
                        style={{ color: "#d90005", marginRight: "6px" }}
                      />
                      RERA: TN/02/Layout/1976/2023
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
                  <BrochureModal show={showModal} handleClose={handleClose} />
                </div>
              </div>
              <div className="border-bottom my-3"></div>

              {/* About Section */}
              <div className="pd-widget" id="about-vgn">
                <div className="section-title9">
                  <h1
                    className="mobile-h4"
                    style={{ fontWeight: 900, fontSize: "35px" }}
                  >
                    About Windsor Park
                  </h1>
                </div>

                <p style={{ textAlign: "justify" }}>
                  The destination that will change your destiny. <br />
                  VGN Windsor Park is ideally located on the Poonamallee - Avadi
                  High Road which is a hub of fast growth and economic activity.
                  The area is strategically located close to the National
                  Highway and is poised to become one of the most sought after
                  residential hubs in the area. Making VGN Windsor Park the
                  wisest investment choice.
                </p>
              </div>

              <div className="border-bottom my-3"></div>

              {/* Feature Section */}
              <div
                className="pd-widget pd-widget1"
                id="features"
                style={{ marginBottom: "5px" }}
              >
                <div className="section-title9">
                  <h4>Features</h4>
                </div>
                <div className="row">
                  {features.map((feature, index) => (
                    <div
                      className="col-lg-3 col-md-3 col-6 g-3"
                      key={index}
                    >
                      <div className="servicebox first">
                        <div className="service-icon">
                          <div className="dm-icon-effect-1 effect-slide-bottom in">
                            <i className="hovicon effect-1 sub-a fa-2x">
                              <img
                                src={feature.icon}
                                alt={`icon${index + 1}`}
                                style={{ width: "70px" }}
                              />
                            </i>
                          </div>
                        </div>
                        <div className="servicetitle">
                          <h3>
                            {feature.title.split("\n").map((line, i) => (
                              <React.Fragment key={i}>
                                {line}
                                <br />
                              </React.Fragment>
                            ))}
                          </h3>
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
                <div className="section-title9">
                  <h4>Location Map</h4>
                </div>
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3885.799651599926!2d80.084653!3d13.111875000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA2JzQyLjgiTiA4MMKwMDUnMDQuOCJF!5e0!3m2!1sen!2sin!4v1691404497555!5m2!1sen!2sin"
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
                <div className="section-title9">
                  <h4>Route Map</h4>
                </div>
                <img src={mapImage} alt="map" className="img-fluid" />
              </div>

              <div className="border-bottom my-3"></div>
              {/* About VGN */}
              <div className="pd-widget">
                <div className="section-title9">
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
                <div className="section-title9">
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
