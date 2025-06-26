import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

import VGNParadise from "@/assets/ongoing/project23.jpg";
import VGNGranduer from "@/assets/ongoing/project36.jpg";
import VGNHighland from "@/assets/ongoing/project23.jpg";
import VGNAspireGardens from "@/assets/ongoing/project34.jpg";
import VGNPridedeVilla from "@/assets/ongoing/project35.jpg";
import VGNMugavariPhase from "@/assets/ongoing/project10-1.jpg";
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
    title: "VGN Granduer",
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
    title: "VGN Highland",
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
    status: "Under Construction",
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
    status: "Under Construction",
    image: VGNPridedeVilla,
    isNew: true,
    btnText: "VIEW MORE",
    link: "/vgn-pride-de-villa/index",
  },
  {
    title: "VGN Mugavari Phase - IV & V",
    location: "Tambaram, Chennai.",
    type: "Plots",
    size: "700 - 1926 Sq feet",
    status: "Ready to Construct",
    image: VGNMugavariPhase,
    isNew: false,
    btnText: "VIEW MORE",
    link: "/vgn-mugavari-phase2/index",
  },
  {
    title: "VGN Classique",
    location: "Ambattur, Chennai.",
    type: "Plots",
    size: "703 - 1416 Sq feet",
    status: "Ready to Construct",
    image: VGNClassique,
    isNew: false,
    btnText: "VIEW MORE",
    link: "/vgn-classique/index",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 991, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Property = () => {
  return (
    <div className="py-5" style={{ background: "#fef7ef" }}>
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
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        arrows={false}
        showDots={false}
        keyBoardControl={true}
        containerClass="carousel-container"
        itemClass="px-3"
        transitionDuration={500}
      >
        {properties.map((item, index) => (
          <div
            key={index}
            className="card shadow-sm border-0"
            style={{ borderRadius: "15px", overflow: "hidden" }}
          >
            <div style={{ position: "relative" }}>
              <img
                src={item.image}
                alt={item.title}
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
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
            <div className="card-body property-item bg-white" style={{ padding: "25px" }}>
              <h5 className=" mb-3">{item.title}</h5>
              <div
                className="d-flex flex-wrap mb-3"
                style={{ fontSize: "0.95rem" }}
              >
                <div className="me-4 mb-2">
                  <i className="bi bi-geo-alt-fill text-danger me-1"></i>
                  {item.location}
                </div>
                <div className="mb-2">
                  <i className="bi bi-building text-danger me-1"></i>
                  {item.type}
                </div>
              </div>
              <div
                className="d-flex flex-wrap mb-3"
                style={{ fontSize: "0.95rem" }}
              >
                <div className="me-4 mb-2">
                  <i className="bi bi-aspect-ratio-fill text-danger me-1"></i>
                  {item.size}
                </div>
                <div className="mb-2">
                  <i className="bi bi-house-door-fill text-danger me-1"></i>
                  {item.status}
                </div>
              </div>
              <div className="text-center">
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
  );
};

export default Property;
