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

import grandeur from "@/assets/vgn-grandeur/main-logo.png";
import grandeurmobile from "@/assets/vgn-grandeur/main-logo1.png";

import structureImg from "@/assets/structure.jpg";
import tilingImg from "@/assets/tiles.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import doorsImg from "@/assets/doors.jpg";
import paintingImg from "@/assets/painting.jpg";
import electricalImg from "@/assets/electrical.jpg";
import plumbingImg from "@/assets/plumbing.jpg";
import commonImg from "@/assets/cctv.jpg";

import am1 from "@/assets/vgn-grandeur/am1.png";
import am2 from "@/assets/vgn-grandeur/am2.png";
import am3 from "@/assets/vgn-grandeur/am3.png";
import am4 from "@/assets/vgn-grandeur/am4.png";
import am5 from "@/assets/vgn-grandeur/am5.png";
import am6 from "@/assets/vgn-grandeur/am6.png";
import am7 from "@/assets/vgn-grandeur/am7.png";
import am8 from "@/assets/vgn-grandeur/am8.png";
import am9 from "@/assets/vgn-grandeur/am9.png";
import am10 from "@/assets/vgn-grandeur/am10.png";
import am11 from "@/assets/vgn-grandeur/am11.png";
import am12 from "@/assets/vgn-grandeur/am12.png";
import am13 from "@/assets/vgn-grandeur/am13.png";
import am14 from "@/assets/vgn-grandeur/am14.png";
import am15 from "@/assets/vgn-grandeur/am20.png";
import am16 from "@/assets/vgn-grandeur/am15.png";
import am17 from "@/assets/vgn-grandeur/am16.png";
import am18 from "@/assets/vgn-grandeur/am17.png";
import am19 from "@/assets/vgn-grandeur/am18.png";
import am20 from "@/assets/vgn-grandeur/am19.png";

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

import high1 from "@/assets/vgn-grandeur/high1.jpg";
import high2 from "@/assets/vgn-grandeur/high2.jpg";
import high3 from "@/assets/vgn-grandeur/high3.jpg";
import high4 from "@/assets/vgn-grandeur/high4.jpg";
import high5 from "@/assets/vgn-grandeur/high5.jpg";
import high6 from "@/assets/vgn-grandeur/high6.jpg";
import high7 from "@/assets/vgn-grandeur/high7.jpg";
import high8 from "@/assets/vgn-grandeur/high8.jpg";
import high9 from "@/assets/vgn-grandeur/high9.jpg";
import high10 from "@/assets/vgn-grandeur/high10.jpg";
import high11 from "@/assets/vgn-grandeur/high11.jpg";
import high12 from "@/assets/vgn-grandeur/high12.jpg";

import project1 from "@/assets/vgn-krystal/project-1.webp";
import project2 from "@/assets/vgn-krystal/project-2.webp";
import project3 from "@/assets/vgn-krystal/project-3.webp";
import project4 from "@/assets/vgn-krystal/project-4.webp";

import mapImage from "@/assets/vgn-krystal/routemap.webp";



import club1 from "@/assets/vgn-krystal/Clubhouse-1.webp";
import club2 from  "@/assets/vgn-krystal/Clubhouse-2.webp";
import club3 from  "@/assets/vgn-krystal/Clubhouse-3.webp";
import club4 from  "@/assets/vgn-krystal/Clubhouse-4.webp";

import advIcon1 from "@/assets/adv-icon1.png";
import advIcon2 from "@/assets/adv-icon2.png";
import advIcon3 from "@/assets/adv-icon3.png";
import advIcon4 from "@/assets/adv-icon4.png";
import advIcon5 from "@/assets/adv-icon5.png";
import EnquiryFormHome from "../EnquiryForm";
import SubNav from "./SubNav";
import FloorPlans from "../VgnKrystalPeak/FloorPlan";

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

  const projectImages = [
      project1,
      project2,
      project3,
      project4,
    ];

     const clubhouseAmenities = [
        { image: club1, title: "Swimming Pool" },
        { image: club2, title: "MULTIPURPOSE HALL (15 PAX)" },
        { image: club3, title: "PRIVATE THEATER 3 Nos. (80/40/30 Seater)" },
        { image: club4, title: "GYM & YOGA" },
      ];
 
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const [message, setMessage] = React.useState("");
  const specData = {
  STRUCTURE: {
    image: structureImg,
    title: "STRUCTURE",
    points: [
      'RCC Framed Structure. 9" thick Red Brickwork for External Walls & 4.5" thick for Internal Walls.',
      "Designed for Seismic Zone - 3.",
      "Floor to floor height (including slab): 10'0\".",
      "Loft will be provided on one side in all bedrooms & kitchen, preferably above the entry.",
    ],
  },
  JOINERY: {
    image: tilingImg,
    title: "JOINERY",
    points: [
      "Main Door: Teak wood frame with solid designed panelled door, including safety latch & magnetic catcher. All hardware in Brass finish.",
      "Bedroom Doors: Country Wood Frame with laminated compressed door and magnetic catcher. All hardware in SS finish.",
      "Toilet Door: Country Wood Frame with Flush Door Shutter, Laminate on one side and PU coated on the other side. All hardware in SS finish.",
      "Terrace Door: Country Wood Frame with Flush Door Shutter, PU coat on both sides. All hardware in SS finish.",
      "Windows/French Windows: UPVC Sliding Windows with clear glass, grill & mosquito mesh.",
      "Ventilator: UPVC Louvers with pin-headed glass and exhaust fan provision.",
      "French Door: UPVC Sliding Door with clear glass, grill & mosquito mesh.",
      "Grills: 12 mm square rod with standard design.",
    ],
  },
  HANDRAILS: {
    image: commonImg,
    title: "HANDRAILS",
    points: [
      "Staircase Handrail: M.S. Handrail as per Architect's Design.",
      "Balcony Handrail: Toughened Glass Handrail as per Architect's Design/Elevation.",
    ],
  },
  FLOORING: {
    image: tilingImg,
    title: "FLOORING",
    points: [
      'Staircase: Granite Flooring with 4" high skirting.',
      'Living & Dining: 2\'0"x2\'0" Vitrified Tile flooring with 4" high skirting.',
      'Bedrooms: 2\'0"x2\'0" Vitrified Tile flooring with 4" high skirting.',
      'Kitchen: 2\'0"x2\'0" Matt Finish Vitrified Tile flooring with 4" skirting. 20mm thick G20 Polished Granite top for Kitchen Platform.',
      'Balcony: 12"x12" Anti-skid Tile flooring with 4" skirting.',
      'Toilet/Service: 12"x12" Anti-skid Tile flooring.',
      'Car Parking: 12"x12" Anti-skid Tile flooring.',
    ],
  },
  DADOING: {
    image: kitchenImg,
    title: "DADOING",
    points: [
      'Toilet: Glazed Ceramic Tile dado up to 7\'0" height.',
      "Kitchen: Glazed Ceramic Tile dado up to lintel height from Cooking Platform.",
      "Dining: Glazed Tile dado for 2' height above Wash Basin.",
    ],
  },
  PAINTING: {
    image: paintingImg,
    title: "PAINTING",
    points: [
      "Ceiling: 2 coats of Emulsion over 1 coat of Primer and 2 coats of Putty.",
      "Inner Walls: 2 coats of Emulsion over 1 coat of Primer and 2 coats of Putty.",
      "Exterior Walls: 2 coats of Exterior Emulsion over 1 coat of Primer.",
      "Main Door: PU Polish in Matt Finish.",
      "Other Doors: Enamel Paint over Putty and Primer.",
      "Grills: 2 coats of Enamel Paint over 1 coat of Primer.",
    ],
  },
  ELECTRICAL: {
    image: electricalImg,
    title: "ELECTRICAL",
    points: [
      "3-phase power supply connection.",
      "Safety Devices: MCB & ELCB (Earth Leakage Circuit Breaker).",
      "Wires: Fire retardant low smoke copper wires of IS brand (Polycab or equivalent).",
      "Switches & Sockets: Modular box with Modular Switches of approved brand.",
      "HOB/Chimney/Dishwasher: Points will be provided in the kitchen.",
      "Light Points: Sufficient light and power sockets in all rooms.",
      "TV & Data Points: TV & Cat-6 cable for data in all bedrooms & living.",
      "Split AC: Provision in living and all bedrooms.",
      "Fridge: Provision in kitchen or dining.",
      "Inverter: Wiring provision for light and fan points.",
      "Exhaust Fans: Provision in all toilets and kitchen.",
    ],
  },
  "SANITATION & PLUMBING": {
    image: plumbingImg,
    title: "SANITATION & PLUMBING",
    points: [
      "Kitchen: Stainless Steel Sink and provision for Water Purifier.",
      "Dining: Wall-mounted Wash Basin with necessary fittings.",
      "Toilets: Wash Basin, Wall-mounted EWC, two-in-one tap with Health Faucet, Wall Mixer & Overhead Shower.",
      "Geyser Provision with hot & cold piping.",
      "Sanitary Fittings: Parryware / Hindware or equivalent.",
      "CP Fittings: Parryware / Jaquar or equivalent.",
    ],
  },
  LIFT: {
    image: doorsImg,
    title: "LIFT",
    points: [
      "1 No. 6-passenger Lift of Standard Manufacture.",
    ],
  },
  GENERAL: {
    image: structureImg,
    title: "GENERAL",
    points: [
      "Compound Wall with MS Gate.",
      "Weathering Course Brick Jelly with Lime Concrete on Terrace Floor with Pressed Tiles.",
      "Waterproofing for all Sunken & Terrace areas.",
      "Sump - 15,000 Lts Capacity / OHT - 9,000 Lts Capacity.",
      "Anti-termite treatment will be done.",
      "Rain Water Harvesting.",
      "DG Power backup for Lift & Common Area Lighting.",
    ],
  },
};

  const onSubmit = async (data) => {
    console.log("Form Data Submitted:", data);
    setMessage("Form submitted successfully!");
  };

  const phone = watch("phone");
  const tabList = Object.keys(specData);
  const [activeTab, setActiveTab] = useState("STRUCTURE");
  const currentSpec = specData[activeTab];

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
                    <div className="section-title">
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
              {/* <SubNav/> */}
              {/* Top Section with Logo & Address */}
              {/* <div className="row align-items-center py-3">
            
                <div className="col-lg-6 col-12 mb-3 mb-lg-0">
                  <div className="pd-title  flex-column flex-lg-row align-items-start align-items-lg-center gap-2">
       
                    <img
                      src={grandeur}
                      alt="desktop-logo"
                      className="img-fluid d-none d-lg-block"
                      style={{ maxWidth: "100%" }}
                    />
                   
                    <div className="d-lg-none text-center">
                      <img
                        src={grandeurmobile}
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
                      Avadi.
                    </p>
                  </div>
                </div>

              
                <div className="col-lg-6 col-12">
                  <div className="pd-social d-flex flex-column gap-1">
                    <p className="mb-1">
                      <FontAwesomeIcon
                        icon={faHome}
                        style={{ color: "#d90005" }}
                      />{" "}
                      Plots ranging from 581 to 3061 sq ft
                    </p>
                    <p className="mb-0">
                      <FontAwesomeIcon
                        icon={faClipboard}
                        style={{ color: "#d90005" }}
                      />{" "}
                      RERA:TN/1/Layout/3163/2024
                    </p>
                  </div>
                </div>
              </div> */}
              {/* <div className="border-bottom my-3"></div> */}

              {/* About Section */}
              <div className="pd-widget" id="about">
                <div className="section-title">
                  <h1
                    className="mobile-h4"
                    style={{ fontSize: "35px", fontWeight: "900" }}
                  >
                    About VGN KrystalPeak
                  </h1>
                </div>
                <p className="text-justify">
                  Established in 1942 with over 83 years of building dreams and
                  homes, from niche apartments to sprawling sustainable
                  townships, VGN is a name synonymous with trust and quality.
                  VGN Krystal Peak is ideally located on the Ponnamalle - Avadi
                  High Road which is a hub of fast growth and economic activity.
                  The area is strategically located close to the National
                  Highway and is poised to become one of the most sought after
                  residential hubs in the area.
                </p>
              </div>

              <div className="border-bottom my-3"></div>

              {/* Highlights Section */}
              <div className="pd-widget pd-widget1" id="highlights">
                <div className="section-title">
                  <h4>Project Highlights</h4>
                </div>
                <div className="row">
                  {projectImages.map((img, i) => (
                    <div key={i} className="col-lg-3 col-md-3 col-sm-6 mb-3">
                      <div className="grid">
                        <figure className="effect-goliath">
                          <img
                            src={img}
                            alt={`highlight-${i + 1}`}
                            className="img-fluid"
                          />
                        </figure>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-bottom my-3"></div>

              {/* Specification Section */}
              <div className="container py-5 bg" id="spec">
                <h2
                  className="text-center text-danger mb-2"
                  style={{ fontSize: "24px" }}
                >
                  Specifications
                </h2>
                <p
                  className="text-center text-muted mb-4"
                  style={{ maxWidth: "600px", margin: "0 auto" }}
                >
                  Crafted with elegant touches, it offers a perfect blend of
                  durability, comfort, and stylish refinement throughout every
                  corner of the home.
                </p>

                <div className="row g-4">
                  {/* Left Side Menu */}
                  <div className="col-md-3 p-0">
                    <ul className="list-group list-group-flush ps-2">
                      {tabList.map((item) => (
                        <li
                          key={item}
                          className={`list-group-item fw-medium text-center text-md-end ${
                            activeTab === item ? "bg-danger text-white" : ""
                          }`}
                          style={{
                            cursor: "pointer",
                            backgroundColor: "transparent",
                            fontSize: "14px",
                          }}
                          onClick={() => setActiveTab(item)}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image */}
                  <div className="col-md-4 border-start border-4 border-danger p-0">
                    <img
                      src={currentSpec.image}
                      alt={currentSpec.title}
                      className="border rounded img-fluid"
                    />
                  </div>

                  {/* Right Side Content */}
                  <div className="col-md-5">
                    <h5 className="text-danger fw-bold mb-3">
                      {currentSpec.title}
                    </h5>
                    <ul className="list-unstyled">
                      {currentSpec.points.map((point, i) => (
                        <li key={i} className="mb-2">
                          <span className="text-danger me-2">▲</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-bottom my-3"></div>

              <FloorPlans />

              <div className="border-bottom my-3"></div>
              {/* Location Advantages Section */}
              <LocationAdvantages />


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
                      className="col-lg-5 col-md-5 col-sm-2 col-6 mb-4"
                      key={index}
                    >
                      <div className="servicebox text-center">
                        <div className="service-icon mb-2">
                          <img
                            src={item.image}
                            alt={item.title}
                            
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

              <div className="pd-widget" id="gallery">
                <div className="section-title">
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
                <div className="section-title">
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
                <div className="section-title">
                  <h4>Location Map</h4>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15548.56151759366!2d80.1350277!3d13.0267312!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261224b2a0db9%3A0xe2b65aeee6e37dbe!2sGrandeur%20by%20VGN!5e0!3m2!1sen!2sin!4v1721108836053!5m2!1sen!2sin"
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
              <div className="pd-widget" id="map">
                <div className="section-title">
                  <h4>Route Map</h4>
                </div>
                <img src={mapImage} alt="map" className="img-fluid" />
              </div>

              <div className="border-btm"></div>
              {/* About VGN */}
              <div className="pd-widget" id="about-vgn">
                <div className="section-title">
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
                <div className="section-title">
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
