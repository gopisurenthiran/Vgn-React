import { Modal, Button, Form } from "react-bootstrap";
import LocationAdvantages from "./LocationAdvantages";
import PhoneInput from "react-phone-input-2";
import { useForm } from "react-hook-form";
import "react-phone-input-2/lib/bootstrap.css";

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

import aspire from "@/assets/vgn-pride/main-logo.png";
import aspiremobile from "@/assets/vgn-pride/main-logo1.png";

import img1 from "@/assets/vgn-pride/icon1.png";
import img2 from "@/assets/vgn-pride/icon11.png";
import img3 from "@/assets/vgn-pride/icon10.png";
import img4 from "@/assets/vgn-pride/icon46.png";
import img5 from "@/assets/vgn-pride/icon45.png";
import img6 from "@/assets/vgn-pride/icon4.png";
import img7 from "@/assets/vgn-pride/icon12.png";
import img8 from "@/assets/vgn-pride/icon13.png";
import img9 from "@/assets/vgn-pride/icon7.png";
import img10 from "@/assets/vgn-pride/icon8.png";
import img11 from "@/assets/vgn-pride/icon5.png";
import img12 from "@/assets/vgn-pride/icon2.png";
import img13 from "@/assets/vgn-pride/icon3.png";

import img14 from "@/assets/vgn-pride/icon18.png";
import img15 from "@/assets/vgn-pride/icon17.png";
import img16 from "@/assets/vgn-pride/icon20.png";
import img17 from "@/assets/vgn-pride/icon16.png";
import img18 from "@/assets/vgn-pride/icon19.png";
import img19 from "@/assets/vgn-pride/icon15.png";
import img20 from "@/assets/vgn-pride/icon24.png";
import img21 from "@/assets/vgn-pride/icon13.png";
import img22 from "@/assets/vgn-pride/icon25.png";
import img23 from "@/assets/vgn-pride/icon26.png";
import img24 from "@/assets/vgn-pride/icon21.png";
import img25 from "@/assets/vgn-pride/icon14.png";
import img26 from "@/assets/vgn-pride/icon23.png";

import mapImage from "@/assets/vgn-pride/location-map.png";

import advIcon1 from "@/assets/adv-icon1.png";
import advIcon2 from "@/assets/adv-icon2.png";
import advIcon3 from "@/assets/adv-icon3.png";
import advIcon4 from "@/assets/adv-icon4.png";
import advIcon5 from "@/assets/adv-icon5.png";
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

  const features = [
    {
      img: img1,
      text: "111 Residential Plots across 4.65 Acres",
    },
    {
      img: img2,
      text: "Electrical Trench",
    },
    {
      img: img3,
      text: "Storm Water Drain",
    },
    {
      img: img4,
      text: "LED Street Lights",
    },
    {
      img: img5,
      text: "Elevated Blacktop Roads",
    },
    {
      img: img6,
      text: "14 World-class Amenities across 3 Parks",
    },
    {
      img: img7,
      text: "Avenue Trees",
    },
    {
      img: img8,
      text: "Compound Wall",
    },
    {
      img: img9,
      text: "Grand Entry Portal with Gate",
    },
    {
      img: img10,
      text: "Security Cabin",
    },
    {
      img: img11,
      text: "Ready to Construct",
    },
    {
      img: img12,
      text: "8 min from SIPCOT IT Park",
    },
    {
      img: img13,
      text: "5 min from Kelambakkam Link Road",
    },
  ];

  const amenity = [
    {
      img: img14,
      text: "Walking & Jogging Track",
    },
    {
      img: img15,
      text: "Net Cricket",
    },
    {
      img: img16,
      text: "Basketball Court",
    },
    {
      img: img17,
      text: "Yoga Court",
    },
    {
      img: img18,
      text: "Acupuncture Path",
    },
    {
      img: img19,
      text: "Outdoor Gym",
    },
    {
      img: img20,
      text: "Senior Citizen Sit-out",
    },
    {
      img: img21,
      text: "Sand Pit for Toddlers",
    },
    {
      img: img22,
      text: "Hopscotch",
    },
    {
      img: img23,
      text: "Children's Play Equipment with Sand Pit Area",
    },
    {
      img: img24,
      text: "Landscape Lawn",
    },
    {
      img: img25,
      text: "Pergola at Entry",
    },
    {
      img: img26,
      text: "Pergola Seating with Climber Wall",
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
                    <div className="section-title5">
                      <h4>Enquiry Form</h4>
                    </div>
                    <EnquiryFormHome projectname="Pride"/>
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
                      Padur, OMR.
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
                      Plots Ranging from 540 - 1636 sq.ft.
                    </p>

                    <p>
                      <FaClipboard
                        style={{ color: "#d90005", marginRight: "6px" }}
                      />
                      Rera: TN/01/Layout/2042/2023
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-bottom my-3"></div>

              {/* About Section */}
              <div className="pd-widget" id="about-vgn">
                <div className="section-title5">
                  <h1
                    className="mobile-h4"
                    style={{ fontWeight: 900, fontSize: "35px" }}
                  >
                    About VGN Pride
                  </h1>
                </div>

                <p style={{ textAlign: "justify" }}>
                  Presenting VGN Pride, a collection of elite plots in Padur,
                  OMR, filled with exciting features and amenities. These plots
                  enjoy excellent connectivity being located just 4 km from the
                  SIPCOT IT Park and 5 km from ECR. Educational institutions,
                  hospitals, IT Parks and many more essential features are
                  located nearby, making accessibility a breeze.
                </p>
                <p style={{ textAlign: "justify" }}>
                  Features like a sand pit for toddlers, a jogging track for
                  fitness enthusiasts and a senior citizen sit-out for the
                  elders ensure that your whole family leads an engaging and
                  active lifestyle.
                </p>
                <p style={{ textAlign: "justify" }}>
                  Start your dream home's journey at VGN Pride and make your
                  life richer.
                </p>
              </div>

              <div className="border-bottom my-3"></div>

              {/* Project Highlights Section */}
              <div
                className="pd-widget pd-widget1"
                id="highlights"
                style={{ marginBottom: "5px" }}
              >
                <div className="section-title5">
                  <h4>Project Highlights</h4>
                </div>
                <div className="row">
                  {features.map((feature, index) => (
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

              {/* Amenties Section */}
              <div
                className="pd-widget pd-widget1"
                id="amenities"
                style={{ marginBottom: "5px" }}
              >
                <div className="section-title5">
                  <h4>Amenities</h4>
                </div>
                <div className="row">
                  {amenity.map((feature, index) => (
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
                <div className="section-title5">
                  <h4>Location Map</h4>
                </div>
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.5876270892036!2d80.2194818!3d12.8052578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525148e13e11a9%3A0xbb657f6829b49bab!2sVGN%20PRIDE!5e0!3m2!1sen!2sin!4v1719038538312!5m2!1sen!2sin"
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
                <div className="section-title5">
                  <h4>Route Map</h4>
                </div>
                <img src={mapImage} alt="map" className="img-fluid" />
              </div>

              <div className="border-btm"></div>
              {/* Video Section */}
              <div className="pd-widget" id="video">
                <div className="section-title5">
                  <h4>Video</h4>
                </div>
                <div className="row">
                  <div className="col-6 col2">
                    <div className="ratio ratio-16x9">
                      <iframe
                        width="100%"
                        height="415"
                        src="https://www.youtube.com/embed/RNf-LTiXl-o"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-6 col2">
                    <div className="ratio ratio-16x9">
                      <iframe
                        width="100%"
                        height="415"
                        src="https://www.youtube.com/embed/PESHzDMoDw4"
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
              <div className="border-btm"></div>

              <div className="pd-widget" id="360view">
                <div className="section-title5">
                  <h4>360&deg; View</h4>
                </div>
                {/* Note: You cannot wrap an iframe with <a> tag as in the original HTML — it's invalid. */}
                <iframe
                  src="https://digitour.housing.com/digiplot/vgn_pride"
                  width="100%"
                  height="450"
                  style={{ border: "0" }}
                  title="360 Degree View"
                ></iframe>
              </div>

              <div className="border-btm"></div>

              {/* About VGN */}
              <div className="pd-widget">
                <div className="section-title5">
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
                <div className="section-title5">
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
