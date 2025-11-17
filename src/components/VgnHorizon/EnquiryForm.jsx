import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import "../VgnHighland/LocationAdvantages";
import locationMap from "@/assets/vgn-horizon/location-map.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faHome,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

import highland from "@/assets/vgn-horizon/main-logo.png";
import highlandmobile from "@/assets/vgn-horizon/main-logo1.png";

import pro1 from "@/assets/vgn-horizon/icon4.png";
import pro2 from "@/assets/vgn-horizon/icon11.png";
import pro3 from "@/assets/vgn-horizon/22.png";
import pro4 from "@/assets/vgn-horizon/icon1.png";
import pro5 from "@/assets/vgn-horizon/icon7.png";
import pro6 from "@/assets/vgn-horizon/icon2.png";
import pro7 from "@/assets/vgn-horizon/icon8.png";
import pro8 from "@/assets/vgn-horizon/icon6.png";
import pro9 from "@/assets/vgn-horizon/icon9.png";
import pro10 from "@/assets/vgn-horizon/icon14.png";
import pro11 from "@/assets/vgn-horizon/icon15.png";
import pro12 from "@/assets/vgn-horizon/icon10.png";
import pro13 from "@/assets/vgn-horizon/icon12.png";
import pro14 from "@/assets/vgn-horizon/icon3.png";
import pro15 from "@/assets/vgn-horizon/icon5.png";

import plot1 from "@/assets/vgn-horizon/icon30.png";
import plot2 from "@/assets/vgn-horizon/icon31.png";
import plot3 from "@/assets/vgn-horizon/icon32.png";
import plot4 from "@/assets/vgn-horizon/icon33.png";
import plot5 from "@/assets/vgn-horizon/icon34.png";
import plot6 from "@/assets/vgn-horizon/icon35.png";
import plot7 from "@/assets/vgn-horizon/icon36.png";
import plot8 from "@/assets/vgn-horizon/icon37.png";
import plot9 from "@/assets/vgn-horizon/icon38.png";
import plot10 from "@/assets/vgn-horizon/icon39.png";
import plot11 from "@/assets/vgn-horizon/icon40.png";
import plot12 from "@/assets/vgn-horizon/icon41.png";
import plot13 from "@/assets/vgn-horizon/icon42.png";

import am1 from "@/assets/vgn-horizon/1.png";
import am2 from "@/assets/vgn-horizon/2.png";
import am3 from "@/assets/vgn-horizon/3.png";
import am4 from "@/assets/vgn-horizon/4.png";
import am5 from "@/assets/vgn-horizon/5.png";
import am6 from "@/assets/vgn-horizon/6.png";
import am7 from "@/assets/vgn-horizon/7.png";
import am8 from "@/assets/vgn-horizon/8.png";
import am9 from "@/assets/vgn-horizon/9.png";
import am10 from "@/assets/vgn-horizon/10.png";
import am11 from "@/assets/vgn-horizon/11.png";
import am12 from "@/assets/vgn-horizon/12.png";
import am13 from "@/assets/vgn-horizon/13.png";
import am14 from "@/assets/vgn-horizon/14.png";
import am15 from "@/assets/vgn-horizon/15.png";
import am16 from "@/assets/vgn-horizon/16.png";
import am17 from "@/assets/vgn-horizon/17.png";
import am18 from "@/assets/vgn-horizon/18.png";
import am19 from "@/assets/vgn-horizon/19.png";
import am20 from "@/assets/vgn-horizon/20.png";

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
  const projects = [
    pro1,
    pro2,
    pro3,
    pro4,
    pro5,
    pro6,
    pro7,
    pro8,
    pro9,
    pro10,
    pro11,
    pro12,
    pro13,
    pro14,
    pro15,
  ];

  const plots = [
    plot1,
    plot2,
    plot3,
    plot4,
    plot5,
    plot6,
    plot7,
    plot8,
    plot9,
    plot10,
    plot11,
    plot12,
    plot13,
  ];

  const clubamenties = [
    am1,
    am2,
    am3,
    am4,
    am5,
    am6,
    am7,
    am8,
    am9,
    am10,
    am11,
    am12,
    am13,
    am14,
    am15,
    am16,
    am17,
    am18,
    am19,
    am20,
  ];

  const videoUrls = [
    "https://www.youtube.com/embed/MTS_rpkaNgU?si=1CKZ9dvdo-F2-DHt",
    "https://www.youtube.com/embed/yoEitP1kvDs?si=eC523s30i_URg6t-",
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
              <div className="property-sidebar" >
                <div className="single-sidebar">
                  <div className="contact-bx">
                    <div className="section-title3">
                      <h4>Enquiry Form</h4>
                    </div>
                    <EnquiryFormHome projectname="Horizon" />
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
                      Avadi, Chennai.
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
                      Plots Ranging from 649 - 2359 sq.ft.
                    </p>
                    <p className="mb-0">
                      <FontAwesomeIcon
                        icon={faClipboard}
                        style={{ color: "#d90005" }}
                      />{" "}
                      RERA: TN/02/Layout/3277/2023
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
                    About VGN Horizon
                  </h1>
                </div>
                <p className="text-justify">
                  VGN Horizon, Avadi, offers easy access to Avadi Main Road,
                  Railway Station, Pattabiram Tidel Park and the everyday
                  essentials. Act now and own your dream plot in one of the fast
                  developing residential areas in Chennai. VGN would be
                  delighted to hold your hand from start to end till possession
                  and afterwards
                </p>
              </div>

              <div className="border-bottom my-3"></div>

              {/* Project Highlights Section */}

              <div className="pd-widget pd-widget1" id="highlights">
                <div className="section-title3">
                  <h4>Project Highlights</h4>
                </div>
                <div className="row">
                  {[
                    "Clubhouse",
                    "Storm Water Trench",
                    "Underground Eb provision (Plug ‘n’ Play)",
                    "Tidel Park at 3.5 Km Distance",
                    "LED Street Lights",
                    "Elevated Blacktop Roads",
                    "Well Developed Park",
                    "Children's Play Area",
                    "Avenue Trees",
                    "Green Pocket With Shrubs",
                    "Plot Entry Marked as Per Vasthu",
                    "Entry Arch",
                    "Pedestrian Pathway",
                    "Ready for Construction",
                    "Bank Loans Facilitated",
                  ].map((title, i) => (
                    <div
                      key={i}
                      className="col-4 col-sm-4 col-md-3 col-lg-3 mb-4"
                    >
                      <div className="servicebox text-center">
                        <div className="service-icon mb-2">
                          <img
                            src={projects[i]}
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

              <div className="pd-widget pd-widget1" id="plots">
                <div className="section-title3">
                  <h4>Why Plots?</h4>
                </div>
                <div className="row">
                  {[
                    "Finite resource, hence more value",
                    "Asset for life",
                    "Doesn’t deteriorate over time",
                    "Build quality can be completely controlled",
                    "Flexibility in construction",
                    "Completely private",
                    "Zero waiting period",
                    "Easy transfer of ownership",
                    "100% ownership",
                    "No floor rise charges",
                    "Rapid appreciation",
                    "Fully independent, zero wall sharing",
                    "Carpet area can be increased with more floors",
                  ].map((title, i) => (
                    <div
                      key={i}
                      className="col-4 col-sm-4 col-md-3 col-lg-3 mb-4"
                    >
                      <div className="servicebox text-center">
                        <div className="service-icon mb-2">
                          <img
                            src={plots[i]}
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
              {/* Club Amenities Section */}
              <div className="pd-widget pd-widget1" id="amenities">
                <div className="section-title3">
                  <h4>Clubhouse Amentites</h4>
                </div>
                <div className="row">
                  {[
                    "Waiting Lounge",
                    "Swimming Pool",
                    "Jacuzzi",
                    "Lockers",
                    "Multipurpose Hall (150 Pax)",
                    "Buffet Area",
                    "Toilets For Ladies, Gents and Differently Abled Persons",
                    "Carrom",
                    "Chess",
                    "Play Station",
                    "Gymnasium",
                    "Yoga Zone",
                    "Steam",
                    "Sauna",
                    "Creche",
                    "Home Theatre - 3 Nos - 80 / 40 / 30 Seater",
                    "Billiards Table - 3 Nos",
                    "Library",
                    "Reading Zone",
                    "Meeting Lounge / Work Space",
                  ].map((title, i) => (
                    <div
                      key={i}
                      className="col-4 col-sm-4 col-md-3 col-lg-3 mb-4"
                    >
                      <div className="servicebox text-center">
                        <div className="service-icon mb-2">
                          <img
                            src={clubamenties[i]}
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
              {/* Location Advantages Section */}

              <LocationAdvantages />

              <div className="border-bottom my-3"></div>

              <div className="pd-widget" id="360view">
                <div className="section-title3">
                  <h4>360&deg; View</h4>
                </div>

                {/* No need to wrap iframe inside an anchor tag */}
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://digitour.housing.com/digiplot/VGN_Horizon_v7"
                    title="360 View"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="border-bottom my-3"></div>

              {/* Video Section */}
              <div className="pd-widget" id="video">
                <div className="section-title3">
                  <h4>Videos</h4>
                </div>
                <div className="row">
                  {videoUrls.map((url, index) => (
                    <div className="col-lg-6 mb-4" key={index}>
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

              <div className="border-bottom my-3"></div>
              {/* Location Map Section */}
              <div className="pd-widget" id="map">
                <div className="section-title3">
                  <h4>Location Map</h4>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7771.583872395987!2d80.08584589401354!3d13.112363399572288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4d5ac691534c1b81!2zMTPCsDA2JzQyLjkiTiA4MMKwMDUnMDQuNyJF!5e0!3m2!1sen!2sin!4v1674223056857!5m2!1sen!2sin"
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
              {/* Route Map Section */}
              <div className="pd-widget" id="route">
                <div className="section-title3">
                  <h4>Route Map</h4>
                  <br />
                </div>
                <img src={locationMap} alt="Route Map" className="img-fluid" />
              </div>

              <div className="border-btm"></div>
              {/* About VGN */}
              <div className="pd-widget">
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
