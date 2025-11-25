import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import LocationAdvantages from "./LocationAdvantages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faHome,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

import paradise from "@/assets/vgn-paradise/main-logo.png";
import paradisemobile from "@/assets/vgn-paradise/main-logo1.png";

import feature1 from "@/assets/vgn-paradise/feature1.jpg";
import feature2 from "@/assets/vgn-paradise/feature2.jpg";
import feature3 from "@/assets/vgn-paradise/feature3.jpg";
import feature4 from "@/assets/vgn-paradise/feature4.jpg";
import feature5 from "@/assets/vgn-paradise/feature5.jpg";
import feature6 from "@/assets/vgn-paradise/feature6.jpg";
import feature7 from "@/assets/vgn-paradise/feature7.jpg";
import feature8 from "@/assets/vgn-paradise/feature8.jpg";
import feature9 from "@/assets/vgn-paradise/feature9.jpg";
import feature10 from "@/assets/vgn-paradise/feature10.jpg";
import feature11 from "@/assets/vgn-paradise/feature11.jpg";
import feature12 from "@/assets/vgn-paradise/feature12.jpg";
import feature13 from "@/assets/vgn-paradise/feature13.jpg";

import feature14 from "@/assets/vgn-paradise/feature14.jpg";
import feature15 from "@/assets/vgn-paradise/feature15.jpg";
import feature16 from "@/assets/vgn-paradise/feature16.jpg";
import feature17 from "@/assets/vgn-paradise/feature17.jpg";
import feature18 from "@/assets/vgn-paradise/feature18.jpg";
import feature19 from "@/assets/vgn-paradise/feature19.jpg";
import feature20 from "@/assets/vgn-paradise/feature20.jpg";
import feature21 from "@/assets/vgn-paradise/feature21.jpg";

import am2 from "@/assets/vgn-paradise/22.png";
import am3 from "@/assets/vgn-paradise/23.png";
import am4 from "@/assets/vgn-paradise/24.png";
import am5 from "@/assets/vgn-paradise/25.png";
import am6 from "@/assets/vgn-paradise/26.png";
import am7 from "@/assets/vgn-paradise/27.png";
import am8 from "@/assets/vgn-paradise/28.png";
import am9 from "@/assets/vgn-paradise/29.png";
import am10 from "@/assets/vgn-paradise/30.png";
import am11 from "@/assets/vgn-paradise/31.png";
import am12 from "@/assets/vgn-paradise/32.png";
import am13 from "@/assets/vgn-paradise/33.png";
import am14 from "@/assets/vgn-paradise/34.png";
import am15 from "@/assets/vgn-paradise/35.png";
import am16 from "@/assets/vgn-paradise/36.png";
import am17 from "@/assets/vgn-paradise/37.png";

import gal1 from "@/assets/vgn-paradise/gal1.jpg";
import gal2 from "@/assets/vgn-paradise/gal2.jpg";
import gal3 from "@/assets/vgn-paradise/gal3.jpg";
import gal4 from "@/assets/vgn-paradise/gal4.jpg";
import gal5 from "@/assets/vgn-paradise/gal5.jpg";
import gal6 from "@/assets/vgn-paradise/gal6.jpg";
import gal7 from "@/assets/vgn-paradise/gal7.jpg";
import gal8 from "@/assets/vgn-paradise/gal8.jpg";
import gal9 from "@/assets/vgn-paradise/gal9.jpg";
import gal10 from "@/assets/vgn-paradise/gal10.jpg";
import gal11 from "@/assets/vgn-paradise/gal11.jpg";
import gal12 from "@/assets/vgn-paradise/gal12.jpg";

import mapImage from "@/assets/vgn-paradise/map.jpg";

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
    { img: feature1, title: "Underground sewage provision" },
    { img: feature2, title: "Metro water provision" },
    { img: feature3, title: "Piped natural gas provision" },
    { img: feature4, title: "Underground Eb provision" },
    { img: feature5, title: "Stormwater RCC Drain" },
    { img: feature6, title: "Blacktop roads" },
    { img: feature7, title: "LED Street lights" },
    { img: feature8, title: "Communication cable trench" },
    { img: feature9, title: "Avenue Trees" },
    { img: feature10, title: "Green pocket with shrubs" },
    { img: feature11, title: "Gated community with compound wall" },
    { img: feature12, title: "Pedestrian Pathway" },
    { img: feature13, title: "24x7 Security with CCTV surveillance" },
  ];

  const nearby = [
    { img: feature14, title: "Wimco suburban Metro" },
    { img: feature15, title: "Schools" },
    { img: feature16, title: "Colleges" },
    { img: feature17, title: "Work Places" },
    { img: feature18, title: "Hospitals" },
    { img: feature19, title: "Entertainment Hubs" },
    { img: feature20, title: "Restaurants" },
    { img: feature21, title: "Beaches" },
  ];

  const amenityIcons = [
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
  ];
  const gallerySlides = [
    gal1,
    gal2,
    gal3,
    gal4,
    gal5,
    gal6,
    gal7,
    gal8,
    gal9,
    gal10,
    gal11,
    gal12,
  ];

  const videoUrls = [
    "https://www.youtube.com/embed/NXLqugj1WH0?si=z7gf9jOqAm2JV2FY",
    "https://www.youtube.com/embed/dtFKbkw9xtg?si=c_Hkovyrl2_If4HI",
    "https://www.youtube.com/embed/DWNpU5B4Tag?si=mkzk9SReZshFKHc3",
    "https://www.youtube.com/embed/oBuNHrT9aY8?si=GHURisrPG1cMgqJS",
    "https://www.youtube.com/embed/wvmQKeRhS2Y?si=5Her8x89j6q1uqAm",
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
                    <div className="section-title2">
                      <h4>Enquiry Form</h4>
                    </div>
                    <EnquiryFormHome projectname=" Paradise" />
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
                      src={paradise}
                      alt="desktop-logo"
                      className="img-fluid d-none d-lg-block"
                      style={{ maxWidth: "100%" }}
                    />
                    {/* Mobile Image */}
                    <div className="d-lg-none text-center">
                      <img
                        src={paradisemobile}
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
                      Tiruvottiyur (Wimco nagar), Chennai.
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
                      Plots Ranging from 646 - 1486 sq.ft.
                    </p>
                    <p className="mb-0">
                      <FontAwesomeIcon
                        icon={faClipboard}
                        style={{ color: "#d90005" }}
                      />{" "}
                      RERA: TN/29/Layout/3493/2023
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-bottom my-3"></div>

              {/* About Section */}
              <div className="pd-widget" id="about-vgn">
                <div className="section-title2">
                  <h1
                    className="mobile-h4"
                    style={{ fontSize: "35px", fontWeight: "900" }}
                  >
                    About VGN Paradise
                  </h1>
                </div>
                <p className="text-justify">
                  Welcome to Paradise, a place with a beautiful setting to live
                  your dream life in a like-minded commune. It comes with
                  amenities that add to your lifestyle quotient. Whether it is
                  the Clubhouse, the Kid's play area, the landscaped garden, or
                  the supermarket, the conveniences make it the perfect place to
                  build your home. Own a piece of Paradise. The change for the
                  better awaits.
                </p>
              </div>

              <div className="border-bottom my-3"></div>

              {/* Key Features Section */}
              <div className="pd-widget pd-widget1 mb-2" id="features">
                <div className="section-title2 mb-4">
                  <h4>Key Features</h4>
                </div>
                <div className="row">
                  {features.map((feature, idx) => (
                    <div className="col-lg-4 col-md-4 col-sm-6 mb-3" key={idx}>
                      <div className="grid">
                        <figure className="effect-goliath">
                          <img
                            src={feature.img}
                            alt="features"
                            className="img-fluid"
                          />
                          <div className="completed-txt1">
                            <div className="servicetitle service-title2">
                              <h3
                                dangerouslySetInnerHTML={{
                                  __html: feature.title.replace(
                                    /<br>/g,
                                    "<br />"
                                  ),
                                }}
                              ></h3>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-bottom my-3"></div>

              {/* NearBy Section */}
              <div className="pd-widget pd-widget1 mb-2" id="nearby">
                <div className="section-title2 mb-4">
                  <h4>Nearby</h4>
                </div>
                <div className="row">
                  {nearby.map((feature, idx) => (
                    <div className="col-lg-4 col-md-4 col-sm-6 mb-3" key={idx}>
                      <div className="grid">
                        <figure className="effect-goliath">
                          <img
                            src={feature.img}
                            alt="features"
                            className="img-fluid"
                          />
                          <div className="completed-txt1">
                            <div className="servicetitle service-title2">
                              <h3
                                dangerouslySetInnerHTML={{
                                  __html: feature.title.replace(
                                    /<br>/g,
                                    "<br />"
                                  ),
                                }}
                              ></h3>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-bottom my-3"></div>

              {/* Amenities Section */}
              <div className="pd-widget pd-widget1" id="amenities">
                <div className="section-title">
                  <h4>Park Amenities</h4>
                </div>
                <div className="row">
                  {[
                    "Amphitheatre",
                    "Granite Seater",
                    "Jogging Track",
                    "Acupressure Pathway",
                    "Yoga Court",
                    "Senior Citizen's Area",
                    "Skate Ramp & Skating Rink",
                    "Party Lawn & Stage",
                    "Mega Chess Board & Ball Pool Area",
                    "Hopscotch",
                    "Sandpit with Play Equipment",
                    "Blackboard Wall",
                    "Counting Beads",
                    "Arboretum with Hammock Garden",
                    "Bamboo Park",
                    "Dense Tree Plantation",
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
              {/* Gallery Section */}
              <div className="pd-widget" id="gallery">
                <div className="section-title2">
                  <h4>Club House</h4>
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
              {/* Location Advantages Section */}
              <LocationAdvantages />

              <div className="border-bottom my-3"></div>
              {/* Location Map Section */}
              <div className="pd-widget" id="map">
                <div className="section-title2">
                  <h4>Location Map</h4>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15538.996416752352!2d80.3037952!3d13.178213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527160ceddb583%3A0x8b1aa6ccbe889f3d!2sVGN%20Paradise%20-%20Wimco%20nagar!5e0!3m2!1sen!2sin!4v1697663944238!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="VGN Grandeur Location Map"
                ></iframe>
              </div>

              <div className="border-bottom my-3"></div>
              {/* Route Map Section */}
              <div className="pd-widget" id="route">
                <div className="section-title2">
                  <h4>Route Map</h4>
                </div>
                <img src={mapImage} alt="map" className="img-fluid" />
              </div>

              <div className="border-btm"></div>


              <div className="border-btm"></div>
              <div className="pd-widget" id="3dwalkthrough">
                <div className="section-title2">
                  <h4>3D Walkthrough</h4>
                </div>
                <div className="row">
                  <div className="col-12 col2">
                    <div className="ratio ratio-16x9">
                      <iframe
                        width="100%"
                        height="415"
                        src="https://www.youtube.com/embed/XPZ9n1hCD84?si=Wr8v72YK6L7uJvL"
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
              <div className="border-btm"></div>

              {/* Video Section */}
              <div className="pd-widget" id="video">
                <div className="section-title2">
                  <h4>Video</h4>
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
              <div className="border-btm"></div>

              <div className="pd-widget" id="360view">
                <div className="section-title">
                  <h4>360&deg; View</h4>
                </div>
                {/* Remove the <a> wrapping the <iframe> as it's not valid HTML */}
                <iframe
                  src="https://digitour.housing.com/digiplot/VGN_Paradise_v8"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  title="360 Degree View"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

              <div className="border-btm"></div>
              {/* About VGN */}
              <div className="pd-widget" id="about-vgn">
                <div className="section-title2">
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
                <div className="section-title2">
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
