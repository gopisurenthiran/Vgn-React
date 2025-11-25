import { Modal, Button, Form } from "react-bootstrap";
import LocationAdvantages from "./LocationAdvantages";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import BrochureModal from "../Modal";
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

import aspire from "@/assets/vgn-pride-villa/main-logo.png";
import aspiremobile from "@/assets/vgn-pride-villa/main-logo1.png";

import img1 from "@/assets/vgn-pride-villa/1.png";
import img2 from "@/assets/vgn-pride-villa/2.png";
import img3 from "@/assets/vgn-pride-villa/3.png";
import img4 from "@/assets/vgn-pride-villa/4.png";
import img5 from "@/assets/vgn-pride-villa/5.png";
import img6 from "@/assets/vgn-pride-villa/6.png";
import img7 from "@/assets/vgn-pride-villa/7.png";
import img8 from "@/assets/vgn-pride-villa/8.png";
import img9 from "@/assets/vgn-pride-villa/9.png";
import img10 from "@/assets/vgn-pride-villa/10.png";
import img11 from "@/assets/vgn-pride-villa/11.png";
import img12 from "@/assets/vgn-pride-villa/12.png";
import img13 from "@/assets/vgn-pride-villa/13.png";
import img14 from "@/assets/vgn-pride-villa/14.png";

import club1 from "@/assets/vgn-pride-villa/club1.jpg";
import club2 from "@/assets/vgn-pride-villa/club2.jpg";
import club3 from "@/assets/vgn-pride-villa/club3.jpg";
import club4 from "@/assets/vgn-pride-villa/club4.jpg";

import gal1 from "@/assets/vgn-pride-villa/gal1.jpg";
import gal2 from "@/assets/vgn-pride-villa/gal2.jpg";
import gal3 from "@/assets/vgn-pride-villa/gal3.jpg";
import gal4 from "@/assets/vgn-pride-villa/gal4.jpg";
import gal5 from "@/assets/vgn-pride-villa/gal5.jpg";
import gal6 from "@/assets/vgn-pride-villa/gal6.jpg";
import gal7 from "@/assets/vgn-pride-villa/gal7.jpg";
import gal8 from "@/assets/vgn-pride-villa/gal8.jpg";
import gal9 from "@/assets/vgn-pride-villa/gal9.jpg";
import gal10 from "@/assets/vgn-pride-villa/gal10.jpg";
import gal11 from "@/assets/vgn-pride-villa/gal11.jpg";
import gal12 from "@/assets/vgn-pride-villa/gal12.jpg";
import gal13 from "@/assets/vgn-pride-villa/gal13.jpg";
import gal14 from "@/assets/vgn-pride-villa/gal14.jpg";
import gal15 from "@/assets/vgn-pride-villa/gal15.jpg";
import gal16 from "@/assets/vgn-pride-villa/gal16.jpg";
import gal17 from "@/assets/vgn-pride-villa/gal17.jpg";
// import gal18 from "@/assets/vgn-pride-villa/gal25.jpg";
// import gal19 from "@/assets/vgn-pride-villa/gal26.jpg";
// import gal20 from "@/assets/vgn-pride-villa/gal27.jpg";
// import gal21 from "@/assets/vgn-pride-villa/gal28.jpg";
// import gal22 from "@/assets/vgn-pride-villa/gal29.jpg";
// import gal23 from "@/assets/vgn-pride-villa/gal30.jpg";
// import gal24 from "@/assets/vgn-pride-villa/gal31.jpg";
// import gal25 from "@/assets/vgn-pride-villa/gal32.jpg";

import mapImage from "@/assets/vgn-pride-villa/map.png";

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

  const features = [
    {
      img: img1,
      text: "Storm Water Drain",
    },
    {
      img: img2,
      text: "Electrical Trench",
    },
    { img: img3, text: "Clubhouse" },
    { img: img4, text: "Blacktop Roads with Street Lights" },
    { img: img5, text: "Grand Entry Portal with Gate" },
    { img: img6, text: "Gated Community with Compound Wall & Fence" },
    {
      img: img7,
      text: "Internal Driveway with Pavers",
    },
    { img: img8, text: "Well developed park" },
    { img: img9, text: "Landscape for each house" },
    { img: img10, text: "Individual Bore Well" },
    { img: img11, text: "Individual Sump Of 6000 Litres Capacity" },
    { img: img12, text: "Individual OHT Of 1500 Litres Capacity" },
    { img: img13, text: "STP" },
    {
      img: img14,
      text: "Security Cabin",
    },
  ];

  const clubhouse = [club1, club2, club3, club4];

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
    gal13,
    gal14,
    gal15,
    gal16,
    gal17,
    // gal18,
    // gal19,
    // gal20,
    // gal21,
    // gal22,
    // gal23,
    // gal24,
    // gal25,
  ];
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Helper input filters
  const onlyAlpha = (value) => value.replace(/[^a-zA-Z ]/g, "");
  const noAlpha = (value) => value.replace(/[^0-9]/g, "");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        name === "name"
          ? onlyAlpha(value)
          : name === "phone"
          ? noAlpha(value)
          : type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setMessage("Form submitted successfully!");
      // Reset form
      setForm({
        name: "",
        phone: "",
        email: "",
        location: "",
        agree: false,
      });
    }, 1500);
  };

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
                    <div className="section-title1">
                      <h4>Enquiry Form</h4>
                    </div>
                    <EnquiryFormHome projectname="Pride de' Villa"/>
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
                      Padur, Chennai.
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
                      3 BHK Villa Ranging from 1692 - 1739 sq.ft.
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

                    <p>
                      <FaClipboard
                        style={{ color: "#d90005", marginRight: "6px" }}
                      />
                      Rera: TN/35/Building/0441/2024
                    </p>
                  </div>

                  <BrochureModal show={showModal} handleClose={handleClose} />
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
                    About VGN Pride de' Villa
                  </h1>
                </div>

                <p style={{ textAlign: "justify" }}>
                  VGN’s Pride de Villa is a mesmerizing combination of aesthetic
                  luxury and absolute functionality. Be it the expansive spaces,
                  use of superior products or lavish amenities that pep up your
                  life, every single detail is passionately conceived and
                  executed to create a home that’s a symbol of practical luxury.
                  Located in proximity to OMR’s happening life, Padur is the
                  latest growth destination preferred by home buyers, real
                  estate developers and smart investors.
                </p>
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
        className="col-lg-3 col-md-4 col-4 mb-4" // 👈 col-4 makes 3 columns on mobile
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
                    Pride de Villa boasts of a vast clubhouse equipped with the
                    finest luxury amenities. A multi-purpose hall, gym, snooker
                    area and yoga room are part of the clubhouse. Besides the
                    luxury clubhouse, there are numerous fitness, recreational,
                    kids & senior citizens friendly spaces, sports zones that
                    make life at Pride de Villas an immensely pleasurable
                    experience
                  </p>
                </div>

                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-2 mb-3 col-xs-2">
                    <div className="out-txt1">
                      <p>
                        <FaAngleRight /> Pergola At Entry
                      </p>
                      <p>
                        <FaAngleRight /> Senior Citizen Sit-Out
                      </p>
                      <p>
                        <FaAngleRight /> Walking & Jogging Track
                      </p>
                      <p>
                        <FaAngleRight /> Acupuncture Path
                      </p>
                      <p>
                        <FaAngleRight /> Yoga Court
                      </p>
                      <p>
                        <FaAngleRight /> Sand Pit Area with Children’s Play
                        Equipment’s
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-2 mb-3 col-xs-2">
                    <div className="out-txt1">
                      <p>
                        <FaAngleRight /> Seater With Pergola
                      </p>
                      <p>
                        <FaAngleRight /> Net Cricket
                      </p>
                      <p>
                        <FaAngleRight /> Walking & Jogging Track
                      </p>
                      <p>
                        <FaAngleRight /> Outdoor Gym
                      </p>
                      <p>
                        <FaAngleRight /> Basket Ball Court
                      </p>
                      <p>
                        <FaAngleRight /> Landscape /Lawn
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-2 mb-3 col-xs-2">
                    <div className="out-txt1">
                      <p>
                        <FaAngleRight /> Feature Wall
                      </p>
                      <p>
                        <FaAngleRight /> Pergola
                      </p>
                      <p>
                        <FaAngleRight /> Sit-Out
                      </p>
                      <p>
                        <FaAngleRight /> Pergola With Climber Wall
                      </p>
                      <p>
                        <FaAngleRight /> Sand Pit For Toddlers
                      </p>
                      <p>
                        <FaAngleRight /> Hopscotch
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-bottom my-3"></div>
              {/* Clubhouse Section */}
              <div className="pd-widget" id="clubhouse">
                <div className="section-title1">
                  <h4>Club House</h4>
                </div>
                <Carousel
                  interval={2000}
                  fade
                  pause={false}
                  indicators
                  controls
                >
                  {clubhouse.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100"
                        src={image}
                        alt={`Club ${index + 1}`}
                        style={{ objectFit: "cover" }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>

              <div className="border-bottom my-3"></div>
              <LocationAdvantages />

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
              <div className="pd-widget" id="3dwalkthrough">
                <div className="section-title1">
                  <h4>3D Walkthrough</h4>
                </div>
                <div className="row">
                  <div className="col-12 col2">
                    <div className="ratio ratio-16x9">
                      <iframe
                        width="100%"
                        height="415"
                        // src="https://www.youtube.com/embed/JpDP4lHAZHU?si=BBTiQMRRBWRzNv9W"
                        src="https://www.youtube.com/embed/x_Yyb96OoMk?si=EfYBa5h4vHAPimfV"
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

              {/* Location Map Section */}
              <div className="pd-widget" id="map">
                <div className="section-title1">
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
                <div className="section-title1">
                  <h4>Route Map</h4>
                </div>
                <img src={mapImage} alt="map" className="img-fluid" />
              </div>

              <div className="border-btm"></div>
              {/* About VGN */}
              <div className="pd-widget">
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
