import React from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"; 
import project35 from "@/assets/ongoing/project35.jpg";
import project34 from "@/assets/ongoing/project34.jpg";
import project31 from "@/assets/ongoing/project31.jpg";
import project10_1 from "@/assets/ongoing/project10-1.jpg";
import project27 from "@/assets/ongoing/project27.jpg";
import project24 from "@/assets/ongoing/project24.jpg";
import project15 from "@/assets/ongoing/project15.jpg";

const NextArrow = ({ onClick }) => (
  <button className="custom-slick-arrow10 next-arrow" onClick={onClick} aria-label="Next">
    <i className="fa fa-angle-right"></i>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="custom-slick-arrow10 prev-arrow" onClick={onClick} aria-label="Previous">
    <i className="fa fa-angle-left"></i>
  </button>
);
export default function ExploreProjects() {
  const projects = [
    {
      title: "VGN Aspire Gardens",
      location: "Avadi, Chennai.",
      bhk: "2 BHK & 3 BHK",
      type: "Plots",
      status: "Under Construction",
      link: "/vgn-aspire-gardens/index",
      image: project35,
      size: null,
    },
    {
      title: "VGN Pride de' Villa",
      location: "Padur, Chennai.",
      bhk: "3 BHK",
      type: "Plots",
      status: "Under Construction",
      link: "/vgn-pride-de-villa/index",
      image: project34,
      size: null,
    },
    {
      title: "VGN Highland",
      location: "Tharapakkam, Chennai.",
      size: "595 - 1731 Sq feet",
      type: "Plots",
      status: "Ready to Construct",
      link: "/vgn-highland/index",
      image: project31,
      bhk: null,
    },
    {
      title: "VGN Mugavari Phase - IV & V",
      location: "Tambaram, Chennai.",
      size: "700 - 1926 Sq feet",
      type: "Plots",
      status: "Ready to Construct",
      link: "/vgn-mugavari-phase2/index",
      image: project10_1,
      bhk: null,
    },
    {
    title: "VGN Horizon",
    image: project27,
    location: "Avadi, Chennai.",
    size: "646 - 2607",
    type: "Plots",
    status: "Ready to Construct",
    link: "/vgn-horizon/index",
  },
  {
    title: "VGN Classique",
    image: project24,
    location: "Ambattur, Chennai.",
    size: "753 - 1416",
    type: "Plots",
    status: "Ready to Construct",
    link: "/vgn-classique/index",
  },
  {
    title: "VGN Pride",
    image: project15,
    location: "Padur, Chennai.",
    size: "523 - 1636",
    type: "Plots",
    status: "Ready to Construct",
    link: "/vgn-pride/index",
  },
 
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="property-details-section py-5" id="expore-projects" style={{ background: "#f9f9f9" }}>
      <div className="container">
        <div className="section-title10 mb-4">
          <h4>
            Explore <span>Our Projects</span>
          </h4>
        </div>

        <Slider {...settings}>
          {projects.map((project, idx) => (
            <div key={idx} className="px-3">
              <div className="border rounded bg-white shadow-sm overflow-hidden">
                <div className="imgTitle">
                    <div className="slide-img-txt">
                   
                   <h2 className="blogTitle fw-bold">{project.title}</h2>
                    </div>
                    <img src={project.image} alt={project.title} className="img-fluid w-100" />
                </div>
                <div className="slider-content">
                  
                  <p>
                    <i className="fa fa-map-marker text-danger me-2"></i>
                    {project.location}
                  </p>
                  {project.bhk && (
                    <p>
                      <i className="fa fa-bed text-danger me-2"></i>
                      {project.bhk}
                    </p>
                  )}
                  {project.size && (
                    <p>
                      <i className="fa fa-arrows-alt text-danger me-2"></i>
                      {project.size}
                    </p>
                  )}
                  <p>
                    <i className="fa fa-building-o text-danger me-2"></i>
                    {project.type}
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span>
                      <i className="fa fa-home text-danger me-2"></i>
                      {project.status}
                    </span>
                    <Link to={project.link} className="btn btn-sm btn-outline-danger">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
