import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import "../VgnHighland/LocationAdvantages";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faHome,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

import highland from "@/assets/vgn-highland/main-logo.png";
import highlandmobile from "@/assets/vgn-highland/main-logo1.png";

import am1 from "@/assets/vgn-highland/1.png";
import am2 from "@/assets/vgn-highland/33.png";
import am3 from "@/assets/vgn-highland/4.png";
import am4 from "@/assets/vgn-highland/5.png";
import am5 from "@/assets/vgn-highland/6.png";
import am6 from "@/assets/vgn-highland/7.png";

import mapImage from "@/assets/map.jpg";

import advIcon1 from "@/assets/adv-icon1.png";
import advIcon2 from "@/assets/adv-icon2.png";
import advIcon3 from "@/assets/adv-icon3.png";
import advIcon4 from "@/assets/adv-icon4.png";
import advIcon5 from "@/assets/adv-icon5.png";
import LocationAdvantages from "./LocationAdvantages";
import EnquiryFormHome from "../EnquiryForm";
import SubNav from "./SubNav";

export default function EnquiryForm() {
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
  const amenityIcons = [am1, am2, am3, am4, am5, am6];

  const leftColumn = [
    "Walking & Jogging track",
    "Hopscotch",
    "Climber Wall",
    "Multi play station",
    "See saw",
  ];

  const rightColumn = [
    "Swing",
    "Writing board for Children",
    "Granite Seater",
    "Dense Trees/Shrubs",
    "Lawn",
  ];

  const videoUrls = [
    "https://www.youtube.com/embed/rq2E2fFO3S0?si=uhfJm4fsV-xj-dM1",
    "https://www.youtube.com/embed/vW_gpf5caGE?si=TNIN-Di8dOH5Ex4b",
    "https://www.youtube.com/embed/qPFqtiedfb0?si=ZLkuQMeJ5_PrxM1T",
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
           {/* <SubNav/> */}
          <div className="col-lg-4">
            <div
              className="position-sticky"
              style={{ top: "100px", zIndex: 1 }}
            >
              <div className="property-sidebar" id="contact">
                <div className="single-sidebar">
                  <div className="contact-bx">
                    <div className="section-title3">
                      <h4>Enquiry Form</h4>
                    </div>
                    <EnquiryFormHome projectname="Highland Phase I & II"/>
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
                      src={highland}
                      alt="desktop-logo"
                      className="img-fluid d-none d-lg-block"
                      style={{ maxWidth: "100%" }}
                    />
                    {/* Mobile Image */}
                    <div className="d-lg-none text-center">
                      <img
                        src={highlandmobile}
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
                      Tharapakkam near Gerugambakkam, Chennai.
                    </p>
                  </div>
                </div>

                {/* Plot Info */}
                <div className="col-lg-6 col-12">
                  <div className="pd-social d-flex flex-column gap-1">
                    <p className="mb-1">
                      <FontAwesomeIcon
                        icon={faHome}
                        style={{ color: "#d90005" }}
                      />{" "}
                      Plots Ranging from 734 - 1704 sq.ft.
                    </p>
                    <p className="mb-0">
                      <FontAwesomeIcon
                        icon={faClipboard}
                        style={{ color: "#d90005" }}
                      />{" "}
                      PH I - RERA: TN/01/Layout/0188/2024
                    </p>
                      <p className="mb-0">
                      <FontAwesomeIcon
                        icon={faClipboard}
                        style={{ color: "#d90005" }}
                      />{" "}
                      PH II - RERA: TN/1/Layout/2357/2025
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-bottom my-3"></div>

              {/* About Section */}
              <div className="pd-widget" id="about-vgn">
                <div className="section-title3">
                  <h1
                    className="mobile-h4"
                    style={{ fontSize: "35px", fontWeight: "900" }}
                  >
                    About VGN Highland
                  </h1>
                </div>
                <p className="text-justify">
                  Discover a land that's rich in happiness and prosperity. VGN
                  Highland - the land where dreams and aspirations come true.
                  Strategically located in Tharapakkam, VGN highland is planned
                  and developed meticulously to give you a dream space to build
                  your dream home.
                </p>
              </div>

              <div className="border-bottom my-3"></div>

              {/* Highlights Section */}

              <div className="pd-widget pd-widget1" id="highlights">
                <div className="section-title3">
                  <h4>Project Highlights</h4>
                </div>
                <div className="row">
                  {[
                    "158 Premium Plots Spread Across 7 Acres",
                    "LED Street Lights",
                    "Elevated Blacktop Roads",
                    "Avenue Trees",
                    "Green Pocket With Shrubs",
                    "Ready For Construction",
                  ].map((title, i) => (
                    <div
                      key={i}
                      className="col-4 col-sm-4 col-md-3 col-lg-3 mb-4"
                    >
                      <div className="servicebox text-center">
                        <div className="service-icon mb-2">
                          <img
                            src={amenityIcons[i]}
                            alt={`amenity-${i + 1}`}
                            style={{ height: "70px", objectFit: "contain" }}
                          />
                        </div>
                        <div className="servicetitle">
                          <h3>{title}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-bottom my-3"></div>
              {/* Amenities Section */}
              <div className="pd-widget" id="amenities">
                <div className="section-title3">
                  <h4 className="mobile-h4">Amenities</h4>
                </div>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col2">
                    {leftColumn.map((item, index) => (
                      <p key={index}>
                        <FaAngleDoubleRight aria-hidden="true" /> {item}
                      </p>
                    ))}
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col2">
                    {rightColumn.map((item, index) => (
                      <p key={index}>
                        <FaAngleDoubleRight aria-hidden="true" /> {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="border-bottom my-3"></div>
              {/* Location Advantages Section */}

              <LocationAdvantages />

              <div className="border-bottom my-3"></div>

              {/* Video Section */}
              <div className="pd-widget" id="video">
                <div className="section-title3">
                  <h4>Videos</h4>
                </div>
                <div className="row">
                  {videoUrls.map((url, index) => (
                    <div className="col-lg-4 mb-4" key={index}>
                      <iframe
                        width="100%"
                        height="215"
                        src={url}
                        title={`YouTube video ${index + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ))}
                </div>
              </div>
              {/* Location Map Section */}
              <div className="pd-widget" id="map">
                <div className="section-title3">
                  <h4>Location Map</h4>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.524383626414!2d80.1312722!3d12.9954309!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52615805341069%3A0x1b32ef145b7c1111!2sVGN%20Highland!5e0!3m2!1sen!2sin!4v1704814076093!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="VGN Grandeur Location Map"
                ></iframe>
              </div>

              <div className="border-btm"></div>
              {/* About VGN */}
              <div className="pd-widget" id="about-vgn">
                <div className="section-title3">
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
                <div className="section-title3">
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
