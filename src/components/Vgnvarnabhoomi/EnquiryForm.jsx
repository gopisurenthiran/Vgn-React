import { Modal, Button, Form } from "react-bootstrap";
import LocationAdvantages from "./LocationAdvantages";
import PhoneInput from "react-phone-input-2";
import Carousel from "react-bootstrap/Carousel";
import { useForm } from "react-hook-form";

import "react-phone-input-2/lib/bootstrap.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FaClipboard, FaDownload, FaHome } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

import aspire from "@/assets/vgn-varnabhoomi/main-logo.png";
import aspiremobile from "@/assets/vgn-varnabhoomi/main-logo.png";

import icon1 from "@/assets/vgn-varnabhoomi/icon1.png";
import icon2 from "@/assets/vgn-varnabhoomi/icon2.png";
import icon3 from "@/assets/vgn-varnabhoomi/icon3.png";
import icon4 from "@/assets/vgn-varnabhoomi/icon4.png";
import icon5 from "@/assets/vgn-varnabhoomi/icon5.png";
import icon6 from "@/assets/vgn-varnabhoomi/icon6.png";
import icon7 from "@/assets/vgn-varnabhoomi/icon7.png";
import icon8 from "@/assets/vgn-varnabhoomi/icon8.png";
import icon9 from "@/assets/vgn-varnabhoomi/icon9.png";
import icon10 from "@/assets/vgn-varnabhoomi/icon10.png";
import icon11 from "@/assets/vgn-varnabhoomi/icon11.png";
import icon12 from "@/assets/vgn-varnabhoomi/icon12.png";

import gal1 from "@/assets/vgn-varnabhoomi/gal1.jpg";
import gal2 from "@/assets/vgn-varnabhoomi/gal2.jpg";
import gal3 from "@/assets/vgn-varnabhoomi/gal3.jpg";

import mapImage from "@/assets/vgn-varnabhoomi/location-map.jpg";

import advIcon1 from "@/assets/vgn-varnabhoomi/adv-icon1.png";
import advIcon2 from "@/assets/vgn-varnabhoomi/adv-icon2.png";
import advIcon3 from "@/assets/vgn-varnabhoomi/adv-icon3.png";
import advIcon4 from "@/assets/vgn-varnabhoomi/adv-icon4.png";
import advIcon5 from "@/assets/vgn-varnabhoomi/adv-icon5.png";
import BrochureModal from "../Modal";
import EnquiryFormHome from "../EnquiryForm";
import SubNav from "./SubNav";

export default function EnquiryForm() {
  const gallerySlides = [gal1, gal2, gal3];

  const features = [
    {
      icon: icon1,
      title: "Ready for Construction",
    },
    {
      icon: icon2,
      title: "Elevated Blacktop Roads",
    },
    {
      icon: icon3,
      title: "Native Trees",
    },
    {
      icon: icon4,
      title: "Well Developed Parks",
    },
    {
      icon: icon5,
      title: "Organic Garden",
    },
    {
      icon: icon6,
      title: "Children's Play Area",
    },
    {
      icon: icon7,
      title: "24x7 Securiry",
    },
    {
      icon: icon8,
      title: "LED Street Lights",
    },
    {
      icon: icon9,
      title: "Shuttle Court",
    },
    {
      icon: icon10,
      title: "Acupuncture Walkways",
    },
    {
      icon: icon11,
      title: "Outdoor Gym",
    },
    {
      icon: icon12,
      title: "Abundant Groundwater",
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
          {/* <SubNav /> */}
          <div className="col-lg-4">
            <div
              className="position-sticky"
              style={{ top: "100px", zIndex: 1 }}
            >
              <div className="property-sidebar" id="contact">
                <div className="single-sidebar">
                  <div className="contact-bx">
                    <div className="section-title11">
                      <h4>Enquiry Form</h4>
                    </div>
                    <EnquiryFormHome projectname="Varnabhoomi Phase - II"/>
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
                      Pudupakkam, OMR (Behind Siruseri IT Park)
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
                      Plots Ranging from 497, 1195 Sq feet
                    </p>
                    <p>
                      <FaClipboard
                        style={{ color: "#d90005", marginRight: "6px" }}
                      />
                      RERA: TN/01/Layout/0121/2021
                    </p>
                    <div className="text-center"></div>
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
                <div className="section-title11">
                  <h4
                    className="mobile-h4"
                    style={{ fontWeight: 900, fontSize: "28px" }}
                  >
                    A Charmingly Green & Lucrative Plot Investment
                  </h4>
                </div>

                <p style={{ textAlign: "justify" }}>
                  VGN Varnabhoomi, a premium collection of plots located in
                  Pudupakkam, in Vandalur-Kelambakkam Road. Located close to the
                  OMR IT Hub and GST Road, it is conveniently surrounded by
                  schools, colleges, universities, hospitals and companies. MNC
                  and Tech giants like TCS, Cognizant, Capgemini and many more
                  are right behind the compound inside the Siruseri IT Park,
                  which is also a major residential neighborhood, Varnabhoomi is
                  a truly valuable and once-in-a-lifetime investment for your
                  home.
                </p>
                <p>
                  <b>
                    Available plots: 1034, 1195, 1207, 1363, 1370, 1441, 1424
                    Sq.Ft.
                  </b>
                </p>
              </div>

              <div className="border-bottom my-3"></div>

              {/*Project Highlights Section */}
              <div
                className="pd-widget pd-widget1"
                id="highlights"
                style={{ marginBottom: "5px" }}
              >
                <div className="section-title11">
                  <h4>Project Highlights</h4>
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
                <div className="section-title11">
                  <h4>Location Map</h4>
                </div>
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15562.214240483587!2d80.2035075!3d12.8074649!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc2bcd6ee2b1f3c98!2sVGN%20Varna%20Bhoomi!5e0!3m2!1sen!2sin!4v1616485739831!5m2!1sen!2sin"
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
                <div className="section-title11">
                  <h4>Route Map</h4>
                </div>
                <img src={mapImage} alt="map" className="img-fluid" />
              </div>

              <div className="border-bottom my-3"></div>

              {/* Gallery Section */}
              <div className="pd-widget" id="gallery">
                <div className="section-title11">
                  <h4>Gallery</h4>
                </div>
                <Carousel
                  interval={2000}
                  fade
                  pause={false}
                  indicators
                  controls
                >
                  {gallerySlides.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100"
                        src={image}
                        alt={`Gallery Slide ${index + 1}`}
                        style={{ objectFit: "cover" }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>

              <div className="border-bottom my-3"></div>
              {/* Video Section */}
              <div className="pd-widget" id="video">
                <div className="section-title11">
                  <h4>Video</h4>
                </div>
                <div className="row">
                  <div className="col-12 col2">
                    <div className="ratio ratio-16x9">
                      <iframe
                        width="100%"
                        height="415"
                        src="https://www.youtube.com/embed/Ff0PPIPRqtQ"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-bottom my-3"></div>
              {/* About VGN */}
              <div className="pd-widget">
                <div className="section-title11">
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
                <div className="section-title11">
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
