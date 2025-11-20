import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

import VGNParadise from "@/assets/ongoing/project23.jpg";
import VGNGranduer from "@/assets/ongoing/project36.jpg";
import VGNHighland from "@/assets/ongoing/project31.jpg";
import VGNAspireGardens from "@/assets/ongoing/project35.jpg";
import VGNPridedeVilla from "@/assets/ongoing/project34.jpg";
import VGNClassique from "@/assets/ongoing/project24.jpg";

const properties = [
  {
    title: "VGN Paradise",
    location: "Tiruvottiyur (Wimco nagar).",
    type: "Plots & Villas",
    size: "646 - 1486 Sq feet",
    status: "Ready to Construct",
    image: VGNParadise,
    isNew: true,
    btnText: "VIEW MORE",
    link: "/vgn-paradise/index",
  },
  {
    title: "VGN Granduer Phase I & II",
    location: "Iyyappanthangal, Porur.",
    type: "Plots",
    size: "581 - 3061 Sq feet",
    status: "Ready to Construct",
    image: VGNGranduer,
    isNew: true,
    btnText: "VIEW MORE",
    link: "/vgn-grandeur/index",
  },
  {
    title: "Heritage Springz",
    image: "/heritage.jpg",
    isNew: true,
    location: "Ottiyambakkam, Chennai.",
    type: "Plots",
    size: "700 - 1683 Sq ft",
    status: "Ready to Construct",
    btnText: "VIEW MORE",
    link: "/vgn-heritage-springz/index",
  },
  {
    title: "VGN Highland I & II",
    location: "Tharapakkam, Chennai.",
    type: "Plots",
    size: "595 - 1731 Sq feet",
    status: "Ready to Construct",
    image: VGNHighland,
    isNew: false,
    btnText: "VIEW MORE",
    link: "/vgn-highland/index",
  },
  {
    title: "VGN Aspire Gardens",
    location: "Avadi, Chennai.",
    type: "Villa",
    size: "2 BHK & 3 BHK",
    status: "Ready to Move In",
    image: VGNAspireGardens,
    isNew: true,
    btnText: "VIEW MORE",
    link: "/vgn-aspire-gardens/index",
  },
  {
    title: "VGN Pride de' Villa",
    location: "Padur, Chennai.",
    type: "Villa",
    size: "3 BHK",
    status: "Ready to Occupy",
    image: VGNPridedeVilla,
    isNew: true,
    btnText: "VIEW MORE",
    link: "/vgn-pride-de-villa/index",
  },
  // {
  //   title: "VGN Classique",
  //   location: "Ambattur, Chennai.",
  //   type: "Plots",
  //   size: "703 - 1416 Sq feet",
  //   status: "Ready to Construct",
  //   image: VGNClassique,
  //   isNew: false,
  //   btnText: "VIEW MORE",
  //   link: "/vgn-classique/index",
  // },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 991, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

const Property = () => {
  return (
    <div style={{ background: "#fef7ef" }}>
      <div className="py-5 container">
        <div className="text-center mb-3 heading">
          <h4
            className="d-inline-flex align-items-center"
            style={{ fontSize: "1.8rem" }}
          >
            <img
              className="head-border"
              src="/head-border.png"
              alt="Red corner"
              style={{ width: "33px", height: "30px", marginRight: "10px" }}
            />
            FEATURED PROJECTS
          </h4>
        </div>

        <Carousel
          responsive={responsive}
          autoPlay
          autoPlaySpeed={3000}
          infinite
          arrows={false}
          showDots={false}
          keyBoardControl
          containerClass="carousel-container"
          itemClass="px-3"
          transitionDuration={500}
        >
          {properties.map((item, index) => (
            <div
              key={index}
              className="card shadow-sm border-0 d-flex flex-column h-100"
              style={{
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-img-top"
                  style={{
                    height: "250px",
                   
                  }}
                />
                {item.isNew && (
                  <span
                    style={{
                      position: "absolute",
                      top: "15px",
                      left: "15px",
                      background: "#d10000",
                      color: "#fff",
                      fontSize: "0.8rem",
                      fontWeight: "bold",
                      padding: "4px 10px",
                      borderRadius: "3px",
                    }}
                  >
                    NEW
                  </span>
                )}
              </div>
             <div
  className="card-body property-item bg-white d-flex flex-column justify-between"
  style={{ padding: "25px", minHeight: "260px" }}
>
  <h5 className="mb-3">{item.title}</h5>

  {/* Row 1: Location & Type */}
  <div className="row mb-2" style={{ fontSize: "0.95rem" }}>
    <div className="col-7 mb-2">
      <i className="bi bi-geo-alt-fill text-danger me-1"></i>
      {item.location}
    </div>
    <div className="col-5 mb-2">
      <i className="bi bi-building text-danger me-1"></i>
      {item.type}
    </div>
  </div>

  {/* Row 2: Size & Status */}
  <div className="row mb-3" style={{ fontSize: "0.95rem" }}>
    <div className="col-7 mb-2">
      <i className="bi bi-aspect-ratio-fill text-danger me-1"></i>
      {item.size}
    </div>
    <div className="col-5 mb-2">
      <i className="bi bi-house-door-fill text-danger me-1"></i>
      {item.status}
    </div>
  </div>

  <div className="text-center mt-auto">
    <Link
      to={item.link}
      className="site-btn5 px-4 py-2 d-inline-block text-decoration-none"
    >
      {item.btnText}
    </Link>
  </div>
</div>

            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Property;
