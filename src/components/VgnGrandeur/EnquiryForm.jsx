import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import LocationAdvantages from "./LocationAdvantages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faHome,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

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

import mapImage from "@/assets/map.jpg";

import advIcon1 from "@/assets/adv-icon1.png";
import advIcon2 from "@/assets/adv-icon2.png";
import advIcon3 from "@/assets/adv-icon3.png";
import advIcon4 from "@/assets/adv-icon4.png";
import advIcon5 from "@/assets/adv-icon5.png";

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
  const amenityIcons = [
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

  const highlightImages = [
    high1,
    high2,
    high3,
    high4,
    high5,
    high6,
    high7,
    high8,
    high9,
    high10,
    high11,
    high12,
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

                    <form onSubmit={handleSubmit} className="review-form" style={{ marginTop: "20px" }}>
                      {/* Name */}
                      <div className="mb-3">
                        <label className="form-label">Name*</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          maxLength="100"
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="mb-3">
                        <label className="form-label">Phone Number*</label>
                        <PhoneInput
                          country={"in"}
                          value={form.phone}
                          onChange={(phone) => setForm({ ...form, phone })}
                          inputProps={{
                            name: "phone",
                            required: true,
                            placeholder: "Phone Number",
                            className: "form-control",
                          }}
                          inputStyle={{ width: "100%" }}
                        />
                      </div>

                      {/* Email */}
                      <div className="mb-3">
                        <label className="form-label">Email Id*</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          maxLength="250"
                        />
                      </div>

                      {/* Location */}
                      <div className="mb-3">
                        <label className="form-label">Location*</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Location"
                          name="location"
                          value={form.location}
                          onChange={handleChange}
                          maxLength="100"
                        />
                      </div>

                      {/* Checkbox */}
                      <div className="mb-3 form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="agree"
                          id="chkagree"
                          checked={form.agree}
                          onChange={handleChange}
                        />
                        <label
                          className="form-check-label form-label"
                          htmlFor="chkagree"
                        >
                          I Agree to let VGN's representatives to contact me
                        </label>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="site-btn w-100"
                        disabled={loading}
                      >
                        {loading ? "Submitting..." : "Submit"}
                      </button>

                      <div className="text-center mt-3">
                        {loading && (
                          <img
                            src="img/sending.gif"
                            alt="Sending"
                            style={{ width: "40px" }}
                          />
                        )}
                        {message && (
                          <div className="text-success mt-2" id="msg">
                            {message}
                          </div>
                        )}
                      </div>
                    </form>
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
                      src="/main-logo.png"
                      alt="desktop-logo"
                      className="img-fluid d-none d-lg-block"
                      style={{ maxWidth: "100%" }}
                    />
                    {/* Mobile Image */}
                    <img
                      src="/main-logo1.png"
                      alt="mobile-logo"
                      className="img-fluid d-block d-lg-none"
                      style={{ maxWidth: "100%" }}
                    />
                    <p className="mb-0">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        style={{ color: "#d90005" }}
                      />{" "}
                      Iyyappanthangal, Porur.
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
              </div>
              <div className="border-bottom my-3"></div>

              {/* About Section */}
              <div className="pd-widget" id="about">
                <div className="section-title">
                  <h1
                    className="mobile-h4"
                    style={{ fontSize: "35px", fontWeight: "900" }}
                  >
                    About VGN Grandeur
                  </h1>
                </div>
                <p className="text-justify">
                  Who wouldn't want their home to epitomize luxury? VGN Grandeur
                  offers just that. Situated in a prime location, it ensures
                  seamless connectivity. More than just essentials, your new
                  home integrates functional and eco-friendly features,
                  reimagined for your lifestyle. Enjoy the freedom to design
                  your dream home within a gated community that promises
                  comfort, security, and unparalleled grandeur.
                </p>
              </div>

              <div className="border-bottom my-3"></div>

              {/* Highlights Section */}
              <div className="pd-widget pd-widget1" id="highlights">
                <div className="section-title">
                  <h4>Project Highlights</h4>
                </div>
                <div className="row">
                  {highlightImages.map((img, i) => (
                    <div key={i} className="col-lg-4 col-md-4 col-sm-6 mb-3">
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

              {/* Amenities Section */}
              <div className="pd-widget pd-widget1" id="amenities">
                <div className="section-title">
                  <h4>Amenities</h4>
                </div>
                <div className="row">
                  {[
                    "Entry with Feature Wall",
                    "Walking / Jogging Track",
                    "Sculpture Garden",
                    "Sand pit with Exercise Equipments",
                    "Arboretum",
                    "Ball Play Area",
                    "Snake and Ladder",
                    "Hopscotch",
                    "Acupressure Pathway",
                    "Writing Board for Children",
                    "Senior Citizen's Court",
                    "Sandpit with Play Equipments",
                    "Pathway with Roundabout",
                    "Badminton Practice Court",
                    "Amphitheatre",
                    "Yoga Lawn",
                    "Stage / Chess Play Area",
                    "Herbal Garden",
                    "Walkway with Pergola Above",
                    "Seater",
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
              {/* Location Advantages Section */}
              <LocationAdvantages />

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
