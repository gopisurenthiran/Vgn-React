import { Modal, Button, Form } from "react-bootstrap";
import LocationAdvantages from "./LocationAdvantages";
import PhoneInput from "react-phone-input-2";
import { useForm } from "react-hook-form";

import "react-phone-input-2/lib/bootstrap.css";
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

import aspire from "@/assets/vgn-westfield/main-logo.png";
import aspiremobile from "@/assets/vgn-westfield/main-logo1.png";

import icon1 from "@/assets/vgn-westfield/icon1.png";
import icon2 from "@/assets/vgn-westfield/icon2.png";
import icon3 from "@/assets/vgn-westfield/icon3.png";
import icon4 from "@/assets/vgn-westfield/icon4.png";
import icon5 from "@/assets/vgn-westfield/icon5.png";
import icon6 from "@/assets/vgn-westfield/icon6.png";
import icon7 from "@/assets/vgn-westfield/icon7.png";
import icon8 from "@/assets/vgn-westfield/icon8.png";
import icon9 from "@/assets/vgn-westfield/icon9.png";
import icon10 from "@/assets/vgn-westfield/icon10.png";
import icon11 from "@/assets/vgn-westfield/icon11.png";
import icon12 from "@/assets/vgn-westfield/icon12.png";
import icon14 from "@/assets/vgn-westfield/icon14.png";
import icon15 from "@/assets/vgn-westfield/icon15.png";
import icon22 from "@/assets/vgn-westfield/22.png";

import icon30 from "@/assets/vgn-westfield/icon30.png";
import icon31 from "@/assets/vgn-westfield/icon31.png";
import icon32 from "@/assets/vgn-westfield/icon32.png";
import icon33 from "@/assets/vgn-westfield/icon33.png";
import icon34 from "@/assets/vgn-westfield/icon34.png";
import icon35 from "@/assets/vgn-westfield/icon35.png";
import icon36 from "@/assets/vgn-westfield/icon36.png";
import icon37 from "@/assets/vgn-westfield/icon37.png";
import icon38 from "@/assets/vgn-westfield/icon38.png";
import icon39 from "@/assets/vgn-westfield/icon39.png";
import icon40 from "@/assets/vgn-westfield/icon40.png";
import icon41 from "@/assets/vgn-westfield/icon41.png";
import icon42 from "@/assets/vgn-westfield/icon42.png";

import icon16 from "@/assets/vgn-westfield/icon16.png";
import icon17 from "@/assets/vgn-westfield/icon17.png";
import icon18 from "@/assets/vgn-westfield/icon18.png";
import icon19 from "@/assets/vgn-westfield/icon19.png";
import icon20 from "@/assets/vgn-westfield/icon20.png";
import icon21 from "@/assets/vgn-westfield/icon21.png";
import icon from "@/assets/vgn-westfield/icon22.png";
import icon23 from "@/assets/vgn-westfield/icon23.png";
import icon24 from "@/assets/vgn-westfield/icon24.png";
import icon25 from "@/assets/vgn-westfield/icon25.png";
import icon26 from "@/assets/vgn-westfield/icon26.png";
import icon27 from "@/assets/vgn-westfield/icon27.png";
import icon28 from "@/assets/vgn-westfield/icon28.png";
import icon29 from "@/assets/vgn-westfield/icon29.png";

import img1 from "@/assets/vgn-westfield/1.png";
import img2 from "@/assets/vgn-westfield/2.png";
import img3 from "@/assets/vgn-westfield/3.png";
import img4 from "@/assets/vgn-westfield/4.png";
import img5 from "@/assets/vgn-westfield/5.png";
import img6 from "@/assets/vgn-westfield/6.png";
import img7 from "@/assets/vgn-westfield/7.png";
import img8 from "@/assets/vgn-westfield/8.png";
import img9 from "@/assets/vgn-westfield/9.png";
import img10 from "@/assets/vgn-westfield/10.png";
import img11 from "@/assets/vgn-westfield/11.png";
import img12 from "@/assets/vgn-westfield/12.png";
import img13 from "@/assets/vgn-westfield/13.png";
import img14 from "@/assets/vgn-westfield/14.png";
import img15 from "@/assets/vgn-westfield/15.png";
import img16 from "@/assets/vgn-westfield/16.png";
import img17 from "@/assets/vgn-westfield/17.png";
import img18 from "@/assets/vgn-westfield/18.png";
import img19 from "@/assets/vgn-westfield/19.png";
import img20 from "@/assets/vgn-westfield/20.png";

import gal1 from "@/assets/vgn-westfield/gal1.jpg";
import gal2 from "@/assets/vgn-westfield/gal2.jpg";
import gal3 from "@/assets/vgn-westfield/gal3.jpg";

import mapImage from "@/assets/vgn-westfield/location-map.png";

import advIcon1 from "@/assets/adv-icon1.png";
import advIcon2 from "@/assets/adv-icon2.png";
import advIcon3 from "@/assets/adv-icon3.png";
import advIcon4 from "@/assets/adv-icon4.png";
import advIcon5 from "@/assets/adv-icon5.png";
import BrochureModal from "../Modal";
import EnquiryFormHome from "../EnquiryForm";
import SubNav from "./SubNav";

export default function EnquiryForm() {
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

  const highlights = [
    { title: "Clubhouse", img: icon4 },
    { title: "Storm Water Trench", img: icon11 },
    { title: "Underground Eb provision (Plug ‘n’ Play)", img: icon22 },
    { title: "Tidel Park at 3.5 Km Distance", img: icon1 },
    { title: "LED Street Lights", img: icon7 },
    { title: "Elevated Blacktop Roads", img: icon2 },
    { title: "Well Developed Park", img: icon8 },
    { title: "Children's Play Area", img: icon6 },
    { title: "Avenue Trees", img: icon9 },
    { title: "Green Pocket With Shrubs", img: icon14 },
    { title: "Plot Entry Marked as Per Vasthu", img: icon15 },
    { title: "Entry Arch", img: icon10 },
    { title: "Pedestrian Pathway", img: icon12 },
    { title: "Ready for<br>Construction", img: icon3 },
    { title: "Bank Loans Facilitated", img: icon5 },
  ];

  const whyPlots = [
    { title: "Finite resource,<br>hence more value", img: icon30 },
    { title: "Asset<br>for life", img: icon31 },
    { title: "Doesn’t deteriorate<br>over time", img: icon32 },
    { title: "Build quality can be<br>completely controlled", img: icon33 },
    { title: "Flexibility in<br>construction", img: icon34 },
    { title: "Completely<br>private", img: icon35 },
    { title: "Zero<br>waiting period", img: icon36 },
    { title: "Easy transfer<br>of ownership", img: icon37 },
    { title: "100% ownership", img: icon38 },
    { title: "No foor rise<br>charges", img: icon39 },
    { title: "Rapid appreciation", img: icon40 },
    { title: "Fully independent,<br>zero wall sharing", img: icon41 },
    { title: "Carpet area can be increased with more floors", img: icon42 },
  ];

  const amenities = [
    { title: "Walking & Jogging Track", img: icon16 },
    { title: "Garden Pergola", img: icon17 },
    { title: "Infinity Path", img: icon18 },
    { title: "Acupressure Path", img: icon19 },
    { title: "Yoga & Meditation Court", img: icon20 },
    { title: "Outdoor Gym", img: icon21 },
    { title: "Monkey Bar", img: icon },
    { title: "Seesaw", img: icon23 },
    { title: "Swing", img: icon24 },
    { title: "Granite Seater", img: icon25 },
    { title: "Party Lawn", img: icon26 },
    { title: "Family Lawn", img: icon27 },
    { title: "Dense Trees & Shrubs", img: icon28 },
    { title: "Reading Zone with Granite Seater", img: icon29 },
  ];

  const clubhouseFeatures = [
    { img: img1, title: "Waiting Lounge" },
    { img: img2, title: "Swimming Pool" },
    { img: img3, title: "Jacuzzi" },
    { img: img4, title: "Lockers" },
    { img: img5, title: "Multipurpose Hall (150 Pax)" },
    { img: img6, title: "Buffet Area" },
    {
      img: img7,
      title: "Toilets For Ladies, Gents and Differently Abled Persons",
    },
    { img: img8, title: "Carrom" },
    { img: img9, title: "Chess" },
    { img: img10, title: "Play Station" },
    { img: img11, title: "Gymnasium" },
    { img: img12, title: "Yoga Zone" },
    { img: img13, title: "Steam" },
    { img: img14, title: "Sauna" },
    { img: img15, title: "Creche" },
    { img: img16, title: "Home Theatre - 3 Nos - 80 / 40 / 30 Seater" },
    { img: img17, title: "Billiards Table - 3 Nos" },
    { img: img18, title: "Library" },
    { img: img19, title: "Reading Zone" },
    { img: img20, title: "Meeting Lounge / Work Space" },
  ];
  const gallerySlides = [gal1, gal2, gal3];
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
                    <div className="section-title8">
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
                      Plots Ranging from 1358, 2195 sq.ft.
                    </p>
                    <p>
                      <FaClipboard
                        style={{ color: "#d90005", marginRight: "6px" }}
                      />
                      RERA:TN/02/Layout/0001/2023
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
                <div className="section-title8">
                  <h1
                    className="mobile-h4"
                    style={{ fontWeight: 900, fontSize: "35px" }}
                  >
                    About VGN Westfield
                  </h1>
                </div>

                <p style={{ textAlign: "justify" }}>
                  Surrounded by wide open space and serenity, the neatly planned
                  plotted community at VGN Westfield is the perfect spot to
                  build your future home or as an investment that is bound to
                  appreciate. With easy access to Avadi main road, railway,
                  shopping, restaurants, schools, colleges and hospitals, this
                  community will soon be the talk of the town. It is worth
                  mentioning that with this project, the brand VGN would have
                  developed over 100 acres in Avadi.
                </p>
              </div>

              <div className="border-bottom my-3"></div>

              {/* Feature Section */}
              <div
                className="pd-widget pd-widget1"
                id="highlights"
                style={{ marginBottom: "5px" }}
              >
                <div className="section-title8">
                  <h4>Project Highlights</h4>
                </div>
                <div className="row">
                  {highlights.map((item, index) => (
                    <div
                      className="col-lg-3 col-md-3 col-6 g-3"
                      key={index}
                    >
                      <div className="servicebox first">
                        <div className="service-icon">
                          <div className="dm-icon-effect-1 effect-slide-bottom in">
                            <i className="hovicon effect-1 sub-a fa-2x">
                              <img
                                src={item.img}
                                alt={item.title.replace(/<br>/g, " ")}
                                style={{ width: "70px" }}
                              />
                            </i>
                          </div>
                        </div>
                        <div className="servicetitle">
                          <h3
                            dangerouslySetInnerHTML={{
                              __html: item.title
                                .replace(/\n/g, "")
                                .replace(/<br>/g, "<br />"),
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-bottom my-3"></div>

              {/* Plots Section */}
              <div
                className="pd-widget pd-widget1"
                id="plots"
                style={{ marginBottom: "5px" }}
              >
                <div className="section-title8">
                  <h4>Why Plots?</h4>
                </div>
                <div className="row">
                  {whyPlots.map((item, index) => (
                    <div
                      className="col-lg-3 col-md-3 col-6 g-3"
                      key={index}
                    >
                      <div className="servicebox first">
                        <div className="service-icon">
                          <div className="dm-icon-effect-1 effect-slide-bottom in">
                            <i className="hovicon effect-1 sub-a fa-2x">
                              <img
                                src={item.img}
                                alt={item.title.replace(/<br>/g, " ")}
                                style={{ width: "70px" }}
                              />
                            </i>
                          </div>
                        </div>
                        <div className="servicetitle">
                          <h3
                            dangerouslySetInnerHTML={{
                              __html: item.title
                                .replace(/\n/g, "")
                                .replace(/<br>/g, "<br />"),
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-bottom my-3"></div>

              <div
                className="pd-widget pd-widget1"
                id="amenities"
                style={{ marginBottom: "5px" }}
              >
                <div className="section-title8">
                  <h4>Park Amenities</h4>
                </div>
                <div className="row">
                  {amenities.map((item, index) => (
                    <div
                      className="col-lg-3 col-md-3 col-6 g-3"
                      key={index}
                    >
                      <div className="servicebox first">
                        <div className="service-icon">
                          <div className="dm-icon-effect-1 effect-slide-bottom in">
                            <i className="hovicon effect-1 sub-a fa-2x">
                              <img
                                src={item.img}
                                alt={item.title}
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
              {/* Clubhouse Section */}
              <div
                className="pd-widget pd-widget1"
                id="clubhouse"
                style={{ marginBottom: "5px" }}
              >
                <div className="section-title8">
                  <h4>Clubhouse Amenities</h4>
                </div>
                <div className="row">
                  {clubhouseFeatures.map((item, idx) => (
                    <div
                      className="col-lg-3 col-md-3 col-6 g-3"
                      key={idx}
                    >
                      <div className="servicebox first">
                        <div className="service-icon">
                          <div className="dm-icon-effect-1 effect-slide-bottom in">
                            <i className="hovicon effect-1 sub-a fa-2x">
                              <img
                                src={item.img}
                                alt="amenity icon"
                                style={{ height: "70px" }}
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
              <LocationAdvantages />

              <div className="border-bottom my-3"></div>

              {/* Location Map Section */}
              <div className="pd-widget" id="map">
                <div className="section-title8">
                  <h4>Location Map</h4>
                </div>
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7771.583872395987!2d80.08584589401354!3d13.112363399572288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4d5ac691534c1b81!2zMTPCsDA2JzQyLjkiTiA4MMKwMDUnMDQuNyJF!5e0!3m2!1sen!2sin!4v1674223056857!5m2!1sen!2sin"
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
                <div className="section-title8">
                  <h4>Route Map</h4>
                </div>
                <img src={mapImage} alt="map" className="img-fluid" />
              </div>

              <div className="border-btm"></div>
              {/* Gallery Section */}
              <div className="pd-widget" id="gallery">
                <div className="section-title8">
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
              {/* <div className="pd-widget" id="gallery">
                <div className="section-title8">
                  <h4>Video</h4>
                </div>
                <div className="row">
                  <div className="col-12 col2">
                    <div className="ratio ratio-16x9">
                      <iframe
                        width="100%"
                        height="415"
                        src="https://www.youtube.com/embed/biTzk9ZtNk0"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* About VGN */}
              <div className="pd-widget">
                <div className="section-title8">
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
                <div className="section-title8">
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
