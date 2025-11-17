import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faHome,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

import { FaAngleRight } from "react-icons/fa";
import aspire from "@/assets/vgn-aspire-gardens/main-logo.png";
import aspiremobile from "@/assets/vgn-aspire-gardens/main-logo1.png";

import img1 from "@/assets/vgn-aspire-gardens/1.png";
import img2 from "@/assets/vgn-aspire-gardens/2.png";
import img3 from "@/assets/vgn-aspire-gardens/3.png";
import img4 from "@/assets/vgn-aspire-gardens/4.png";
import img5 from "@/assets/vgn-aspire-gardens/5.png";
import img6 from "@/assets/vgn-aspire-gardens/6.png";
import img7 from "@/assets/vgn-aspire-gardens/7.png";
import img8 from "@/assets/vgn-aspire-gardens/8.png";
import img9 from "@/assets/vgn-aspire-gardens/9.png";
import img10 from "@/assets/vgn-aspire-gardens/10.png";
import img11 from "@/assets/vgn-aspire-gardens/11.png";
import img12 from "@/assets/vgn-aspire-gardens/12.png";
import img13 from "@/assets/vgn-aspire-gardens/13.png";
import img14 from "@/assets/vgn-aspire-gardens/14.png";
import img15 from "@/assets/vgn-aspire-gardens/15.png";

import club1 from "@/assets/vgn-aspire-gardens/club1.png";
import club2 from "@/assets/vgn-aspire-gardens/club2.png";
import club3 from "@/assets/vgn-aspire-gardens/club3.png";
import club4 from "@/assets/vgn-aspire-gardens/club4.png";
import club5 from "@/assets/vgn-aspire-gardens/club5.png";
import club6 from "@/assets/vgn-aspire-gardens/club6.png";
import club7 from "@/assets/vgn-aspire-gardens/club7.png";
import club8 from "@/assets/vgn-aspire-gardens/club8.png";
import club9 from "@/assets/vgn-aspire-gardens/club9.png";
import club10 from "@/assets/vgn-aspire-gardens/club10.png";
import club11 from "@/assets/vgn-aspire-gardens/club11.png";
import club12 from "@/assets/vgn-aspire-gardens/club12.png";
import club13 from "@/assets/vgn-aspire-gardens/club13.png";
import club14 from "@/assets/vgn-aspire-gardens/club14.png";
import club15 from "@/assets/vgn-aspire-gardens/club15.png";
import club16 from "@/assets/vgn-aspire-gardens/club16.png";
import club17 from "@/assets/vgn-aspire-gardens/club17.png";
import club18 from "@/assets/vgn-aspire-gardens/club18.png";
import club19 from "@/assets/vgn-aspire-gardens/club19.png";
import club20 from "@/assets/vgn-aspire-gardens/club20.png";

import img21 from "@/assets/vgn-aspire-gardens/13.png";
import img16 from "@/assets/vgn-aspire-gardens/16.png";
import img17 from "@/assets/vgn-aspire-gardens/17.png";
import img18 from "@/assets/vgn-aspire-gardens/18.png";
import img19 from "@/assets/vgn-aspire-gardens/19.png";
import img20 from "@/assets/vgn-aspire-gardens/20.png";

import gal1 from "@/assets/vgn-aspire-gardens/construction1.jpg";
import gal2 from "@/assets/vgn-aspire-gardens/construction2.jpg";
import gal3 from "@/assets/vgn-aspire-gardens/construction3.jpg";
import gal4 from "@/assets/vgn-aspire-gardens/construction4.jpg";
import gal5 from "@/assets/vgn-aspire-gardens/construction5.jpg";
import gal6 from "@/assets/vgn-aspire-gardens/construction6.jpg";
import gal7 from "@/assets/vgn-aspire-gardens/construction7.jpg";
import gal8 from "@/assets/vgn-aspire-gardens/construction8.jpg";
import gal9 from "@/assets/vgn-aspire-gardens/construction9.jpg";
import gal10 from "@/assets/vgn-aspire-gardens/construction10.jpg";
import gal11 from "@/assets/vgn-aspire-gardens/construction11.jpg";

import mapImage from "@/assets/vgn-aspire-gardens/location-map.jpg";

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
      text: "Thoughtfully designed 69 semi-independent villas, spread across 3.27 acres 2, 3 & 3.5 BHK",
    },
    {
      img: img2,
      text: "Ground floor + First floor + terrace design structure",
    },
    { img: img3, text: "Best in class clubhouse with 15+ amenities" },
    { img: img4, text: "Personalized landscape garden for each house" },
    { img: img5, text: "100% Vaastu Compliant homes" },
    { img: img6, text: "Underground EB Connection" },
    {
      img: img7,
      text: "Storm water drain with rainwater harvesting for the entire property",
    },
    { img: img8, text: "Rainwater harvesting for every villa" },
    { img: img9, text: "Individual borewell" },
    { img: img10, text: "Individual Sump of 6000 Litres capacity" },
    { img: img11, text: "Individual OHT of 1500 Litres capacity" },
    { img: img12, text: "Well developed parks" },
    { img: img13, text: "Tidel park at 3.5 kms distance" },
    {
      img: img14,
      text: "Surrounded by prominent schools, colleges & Hospitals",
    },
    { img: img15, text: "Bank loans facilitated" },
  ];

  const clubhouseAmenities = [
    { image: club1, title: "Waiting Lounge" },
    { image: club2, title: "Swimming Pool" },
    { image: club3, title: "Jacuzzi" },
    { image: club4, title: "Lockers" },
    { image: club5, title: "Multipurpose Hall (150 Pax)" },
    { image: club6, title: "Buffet Area" },
    {
      image: club7,
      title: "Toilets For Ladies, Gents and Differently Abled Persons",
    },
    { image: club8, title: "Carrom" },
    { image: club9, title: "Chess" },
    { image: club10, title: "Play Station" },
    { image: club11, title: "Gymnasium" },
    { image: club12, title: "Yoga Zone" },
    { image: club13, title: "Steam" },
    { image: club14, title: "Sauna" },
    { image: club15, title: "Creche" },
    { image: club16, title: "Home Theatre - 3 Nos - 80 / 40 / 30 Seater" },
    { image: club17, title: "Billiards Table - 3 Nos" },
    { image: club18, title: "Library" },
    { image: club19, title: "Reading Zone" },
    { image: club20, title: "Meeting Lounge / Work Space" },
  ];

  const Locationadvantages = [
    { image: img16, title: "3 Km from Avadi Railway Station" },
    { image: img17, title: "1.5 Km from Hindu College" },
    { image: img21, title: "3.5 Km from Tidel Park Phase 3 (upcoming)" },
    { image: img18, title: "400 meters from VGN Chinmaya Vidyalaya" },
    { image: img19, title: "2 Km from K.C. Multi-speciality Hospital" },
    { image: img20, title: "4.8 Km from VR Cinemas" },
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
              <div className="property-sidebar"  id="contact">
                <div className="single-sidebar">
                  <div className="contact-bx">
                    <div className="section-title1">
                      <h4>Enquiry Form</h4>
                    </div>
                    {/* <EnquiryFormHome /> */}
                    <EnquiryFormHome projectname="Aspire Gardens" />
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
                <div className="col-lg-6 col-12">
                  <div className="pd-social d-flex flex-column gap-1">
                    <p className="mb-1">
                      <FontAwesomeIcon
                        icon={faHome}
                        style={{ color: "#d90005" }}
                      />{" "}
                      2 BHK – 1394 To 1468 Sq ft <br />3 BHK – 1629 to 1711 Sq
                      ft.
                    </p>
                    <p className="mb-0">
                      <FontAwesomeIcon
                        icon={faClipboard}
                        style={{ color: "#d90005" }}
                      />{" "}
                      RERA:TN/2/Building/0084/2025
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-bottom my-3"></div>

              {/* About Section */}
              <div className="pd-widget" id="about-vgn">
                <div className="section-title">
                  <h1
                    className="mobile-h4"
                    style={{ fontWeight: 900, fontSize: "35px" }}
                  >
                    About VGN Aspire Garden
                  </h1>
                </div>

                <p style={{ textAlign: "justify" }}>
                  Discover VGN Aspire Gardens in Avadi, where convenience meets
                  comfort. With close proximity to Avadi Main Road, the railway
                  station, Pattabiram Tidel Park, and all your daily
                  necessities, this is the perfect place to call home. Seize the
                  opportunity to own your dream villa in one of Chennai's
                  rapidly growing residential neighbourhood. Begin your journey
                  of happiness with VGN—today and forever.
                </p>

                {/* Rapid Developments */}
                <div className="row">
                  <div className="col-lg-12 col-md-5 col-sm-6  col-xs-12">
                    <div className="out-txt1">
                      <p>
                        <FaAngleRight /> Avadi (Pattabiram) - Tidel Park - 2
                      </p>
                      <p>
                        <FaAngleRight /> Outer Ring Road (ORR) Expansion
                      </p>
                      <p>
                        <FaAngleRight /> Anna Nagar - Pattabiram Metro
                        Connectivity
                      </p>
                      <p>
                        <FaAngleRight /> Arterial Road Upgrade from Wavin to ORR
                      </p>
                      <p>
                        <FaAngleRight /> VGN Chinmaya Vidyalaya School within
                        the community
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-bottom my-3"></div>

              {/* Feature Section */}
              <div
                className="pd-widget pd-widget1"
                id="features"
                style={{ marginBottom: "5px" }}
              >
                <div className="section-title1">
                  <h4>Features</h4>
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
                <div className="section-title1">
                  <h4>Amenities</h4>
                  <p>
                    VGN Aspire Gardens in Avadi is designed to provide a
                    luxurious, stylish living experience and complete with a
                    range of club-class amenities. Residents can look forward to
                    a lifestyle enriched by daily wellness activities in our
                    well-equipped play area, jogging track, cricket lounge,
                    green lawn, and children's play area, among other
                    facilities. The peaceful life here begins with our
                    international-standard infrastructure and amenities. VGN
                    guarantees that the best of life starts at Aspire Gardens,
                    where world-class amenities ensure your happiness and
                    well-being every day.
                  </p>
                </div>

                <div className="row">
                  <div className="col-lg-5 col-md-5 col-sm-2 mb-3 col-xs-2">
                    <div className="out-txt1">
                      <p>
                        <FaAngleRight /> Seater With Pergola
                      </p>
                      <p>
                        <FaAngleRight /> Walking &amp; Jogging Track
                      </p>
                      <p>
                        <FaAngleRight /> Children's Play Equipment
                      </p>
                      <p>
                        <FaAngleRight /> Net Cricket Practice
                      </p>
                      <p>
                        <FaAngleRight /> Landscape / Lawn
                      </p>
                      <p>
                        <FaAngleRight /> Entry Portal with Gate
                      </p>
                      <p>
                        <FaAngleRight /> Secured Compound Wall
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-5 col-sm-2 mb-3 col-xs-2">
                    <div className="out-txt1">
                      <p>
                        <FaAngleRight /> Security Cabin
                      </p>
                      <p>
                        <FaAngleRight /> Internal Driveway with Pavers
                      </p>
                      <p>
                        <FaAngleRight /> Storm Water Drain
                      </p>
                      <p>
                        <FaAngleRight /> Electrical Trench
                      </p>
                      <p>
                        <FaAngleRight /> LED Street Lights
                      </p>
                      <p>
                        <FaAngleRight /> Sewage Treatment Plant
                      </p>
                      <p>
                        <FaAngleRight /> Provision of DG for Common Area
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-bottom my-3"></div>
              {/* Clubhouse Amenities Section */}
              <div
                className="pd-widget pd-widget1"
                id="clubhouse"
                style={{ marginBottom: "5px" }}
              >
                <div className="section-title1">
                  <h4>Clubhouse Amenities</h4>
                </div>
                <div className="row">
                  {clubhouseAmenities.map((item, index) => (
                    <div
                      className="col-lg-3 col-md-4 col-sm-2 col-6 mb-4"
                      key={index}
                    >
                      <div className="servicebox text-center">
                        <div className="service-icon mb-2">
                          <img
                            src={item.image}
                            alt={item.title}
                            style={{ height: "70px" }}
                          />
                        </div>
                        <div className="servicetitle">
                          <h3>{item.title}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-bottom my-3"></div>
              {/* Location Advantages Section */}
              <div className="pd-board pd-widget" id="advantages">
                <div className="section-title1">
                  <h4>Location Advantages</h4>
                </div>
                <div className="row">
                  {Locationadvantages.map((item, index) => (
                    <div
                      className="col-lg-4 col-md-4 col-sm-2 col-6 mb-4"
                      key={index}
                    >
                      <div className="servicebox first text-center">
                        <div className="service-icon mb-2">
                          <div className="dm-icon-effect-1 effect-slide-bottom in">
                            <i className="hovicon effect-1 sub-a fa-2x">
                              <img
                                src={item.image}
                                alt="Advantages"
                                style={{ width: "70px" }}
                              />
                            </i>
                          </div>
                        </div>
                        <div className="servicetitle">
                          <h3>{item.title}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-bottom my-3"></div>
              {/* Gallery Section */}
              <div className="pd-widget" id="gallery">
                <div className="section-title1">
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
                <div className="section-title1">
                  <h4>Video</h4>
                </div>
                <div className="row">
                  <div className="col-12 col2">
                    <div className="ratio ratio-16x9">
                      <iframe
                        src="https://www.youtube.com/embed/vCGQlTJuick?si=T0E0c6YfQOwl9e-V"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-bottom my-3"></div>

              {/* Location Map Section */}
              <div className="pd-widget" id="map">
                <div className="section-title1">
                  <h4>Location Map</h4>
                </div>
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3885.7963815901776!2d80.08461199999999!3d13.112082000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA2JzQzLjUiTiA4MMKwMDUnMDQuNiJF!5e0!3m2!1sen!2sin!4v1720263110722!5m2!1sen!2sin"
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
                <div className="section-title1">
                  <h4>Route Map</h4>
                </div>
                <img src={mapImage} alt="map" className="img-fluid" />
              </div>

              <div className="border-btm"></div>
              {/* About VGN */}
              <div className="pd-widget" id="about-vgn">
                <div className="section-title1">
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
                <div className="section-title1">
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
