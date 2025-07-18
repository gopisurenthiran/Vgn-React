import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import LocationAdvantages from "./LocationAdvantages";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faHome,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

import { FaAngleRight } from "react-icons/fa";
import classique from "@/assets/vgn-classique/main-logo.png";
import classiquemobile from "@/assets/vgn-classique/main-logo1.png";

import img1 from "@/assets/vgn-classique/icon32.png";
import img2 from "@/assets/vgn-classique/icon8.png";
import img3 from "@/assets/vgn-classique/icon31.png";
import img4 from "@/assets/vgn-classique/icon9.png";
import img5 from "@/assets/vgn-classique/icon7.png";
import img6 from "@/assets/vgn-classique/icon4.png";
import img7 from "@/assets/vgn-classique/icon6.png";
import img8 from "@/assets/vgn-classique/icon5.png";
import img9 from "@/assets/vgn-classique/icon10.png";
import img10 from "@/assets/vgn-classique/icon3.png";
import img11 from "@/assets/vgn-classique/icon1.png";
import img12 from "@/assets/vgn-classique/icon2.png";
import img13 from "@/assets/vgn-classique/icon11.png";

import mapImage from "@/assets/vgn-classique/location-map.png";

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
      text: "Underground sewage provision",
    },
    {
      img: img2,
      text: "Underground EB provision",
    },
    { img: img3, text: "Metro Water Provision" },
    { img: img4, text: "Piped natural gas trench" },
    { img: img5, text: "Storm water drain" },
    { img: img6, text: "Black top road" },
    {
      img: img7,
      text: "LED street lights",
    },
    { img: img8, text: "DTH Cable provision" },
    { img: img9, text: "Avenue trees" },
    { img: img10, text: "Gated community with compound wall & fence" },
    { img: img11, text: "Entry portal with gate" },
    { img: img12, text: "Security cabin" },
    { img: img13, text: "24 X 7 Security with CCTV surveillance" },
  ];

  const videoUrls = [
    "https://www.youtube.com/embed/Rd04FY2se-M",
    "https://www.youtube.com/embed/XbrqKh9A0pU?si=DpJX8kLxCq114ko9",
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
          <SubNav/>
          <div className="col-lg-4">
            <div
              className="position-sticky"
              style={{ top: "100px", zIndex: 1 }}
            >
              <div className="property-sidebar" id="contact">
                <div className="single-sidebar">
                  <div className="contact-bx">
                    <div className="section-title4">
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
              {/* Top Section with Logo & Address */}
              <div className="row align-items-center py-3">
                {/* Logo & Location */}
                <div className="col-lg-6 col-12 mb-3 mb-lg-0">
                  <div className="pd-title  flex-column flex-lg-row align-items-start align-items-lg-center gap-2">
                    {/* Desktop Image */}
                    <img
                      src={classique}
                      alt="desktop-logo"
                      className="img-fluid d-none d-lg-block"
                      style={{ maxWidth: "100%" }}
                    />
                    {/* Mobile Image */}
                    <div className="d-lg-none text-center">
                      <img
                        src={classiquemobile}
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
                      Ambattur, Chennai.
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
                      Plots Ranging from 703 - 1416 Sq feet.
                    </p>
                    <p className="mb-0">
                      <FontAwesomeIcon
                        icon={faClipboard}
                        style={{ color: "#d90005" }}
                      />{" "}
                      RERA: TN/29/Layout/3123/2023
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-bottom my-3"></div>

              {/* About Section */}
              <div className="pd-widget" id="about-vgn">
                <div className="section-title4">
                  <h1
                    className="mobile-h4"
                    style={{ fontWeight: 900, fontSize: "35px" }}
                  >
                    About VGN Classique
                  </h1>
                </div>

                <p style={{ textAlign: "justify" }}>
                  Plot gives you freedom to design your dream home from the
                  scratch. A huge, spacious living room for the family, a
                  beautiful garden balcony for your little one, a reading nook
                  in the terrace, a cozy little corner for your pet, ample
                  parking space, whatever you dream, plot makes it possible. And
                  if the plot is right in the middle of a bustling location with
                  easy connectivity to everywhere, that's even more fantastic,
                  right?
                </p>
                <p style={{ textAlign: "justify" }}>
                  Presenting VGN Classique. Located in the bustling and ever
                  growing Ambattur, VGN Classique covers an area of 10.50 acres
                  and has 252 finely developed plots. Designed and developed to
                  perfection, these plots are ideal to build your dream home or
                  villa right inside the city. You can create your very own
                  luxury haven closer to work, leisure and a world of endless
                  options and opportunities.
                </p>
              </div>

              <div className="border-bottom my-3"></div>

              {/* Project Highlights Section */}
              <div
                className="pd-widget pd-widget1"
                id="highlights"
                style={{ marginBottom: "5px" }}
              >
                <div className="section-title4">
                  <h4>Projects Highlights</h4>
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

              <div className="border-bottom my-3"></div>

              {/* Amenities Section */}
              <div
                className="pd-widget pd-widget1"
                id="amenities"
                style={{ marginBottom: "5px" }}
              >
                <div className="section-title4">
                  <h4>Amenities</h4>
                </div>

                <div className="row">
                  <div className="col-lg-5 col-md-5 col-sm-2 mb-3 col-xs-2">
                    <div className="out-txt1">
                      <p>
                        <FaAngleRight /> Basket ball practice net
                      </p>
                      <p>
                        <FaAngleRight /> Hopscotch
                      </p>
                      <p>
                        <FaAngleRight /> Wall climb in sand pit
                      </p>
                      <p>
                        <FaAngleRight /> Snake and ladder game
                      </p>
                      <p>
                        <FaAngleRight /> Chess board game area
                      </p>
                      <p>
                        <FaAngleRight /> Cricket practice net
                      </p>
                      <p>
                        <FaAngleRight /> Kids play area
                      </p>
                      <p>
                        <FaAngleRight /> Buddha statue with plantation
                      </p>
                      <p>
                        <FaAngleRight /> Entry with feature wall and pergola
                      </p>
                      <p>
                        <FaAngleRight /> Accupressure pathway
                      </p>
                      <p>
                        <FaAngleRight /> Walking jogging track
                      </p>
                      <p>
                        <FaAngleRight /> Outdoor gym with equipments
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-5 col-sm-2 mb-3 col-xs-2">
                    <div className="out-txt1">
                      <p>
                        <FaAngleRight /> Sand pit with play equipments
                      </p>
                      <p>
                        <FaAngleRight /> Black board wall for children
                      </p>
                      <p>
                        <FaAngleRight /> Beads counting in sand pit for children
                      </p>
                      <p>
                        <FaAngleRight /> Skating rink
                      </p>
                      <p>
                        <FaAngleRight /> Seating Area
                      </p>
                      <p>
                        <FaAngleRight /> Play area
                      </p>
                      <p>
                        <FaAngleRight /> Yoga court
                      </p>
                      <p>
                        <FaAngleRight /> Sand pit area for toddlers
                      </p>
                      <p>
                        <FaAngleRight /> Senior citizen seating area
                      </p>
                      <p>
                        <FaAngleRight /> Dense tree plantation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-bottom my-3"></div>
              <LocationAdvantages />
              <div className="border-bottom my-3"></div>
              <div className="pd-widget" id="360view">
                <div className="section-title4">
                  <h4>360 View</h4>
                </div>

                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://digitour.housing.com/digiplot/VGN_Classique_V5"
                    title="360 View"
                    style={{ border: 0 }}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="border-bottom my-3"></div>

              {/* Location Map Section */}
              <div className="pd-widget" id="map">
                <div className="section-title4">
                  <h4>Location Map</h4>
                </div>
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15543.807570236462!2d80.1538838!3d13.1022342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263fde9cc7159%3A0x3c39cb7e119a70ff!2sVGN%20Classique!5e0!3m2!1sen!2sin!4v1691146020758!5m2!1sen!2sin"
                    title="Google Map Location"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="border-bottom my-3"></div>
              {/* Route Map Section */}
              <div className="pd-widget" id="route">
                <div className="section-title4">
                  <h4>Route Map</h4>
                </div>
                <img src={mapImage} alt="map" className="img-fluid" />
              </div>
              <div className="border-bottom my-3"></div>
              {/* Video Section */}
              <div className="pd-widget" id="video">
                <div className="section-title4">
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

              <div className="border-btm"></div>
              {/* About VGN */}
              <div className="pd-widget">
                <div className="section-title4">
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
                <div className="section-title4">
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
