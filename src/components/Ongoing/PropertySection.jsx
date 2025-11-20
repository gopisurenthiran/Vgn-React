import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { FaObjectGroup, FaBuilding, FaHome } from "react-icons/fa";
import VGNHeritage from "@/assets/ongoing/project37.jpg";
import VGNGrandeur from "@/assets/ongoing/project36.jpg";
import VGNAspireGardens from "@/assets/ongoing/project35.jpg";
import VGNPridedeVilla from "@/assets/ongoing/project34.jpg";
import VGNParadise from "@/assets/ongoing/project23.jpg";
import VGNHighland from "@/assets/ongoing/project31.jpg";
import VGNHorizon from "@/assets/ongoing/project27.jpg";
import VGNSamudra from "@/assets/ongoing/project9.jpg";
import VGNPride from "@/assets/ongoing/project15.jpg";
import VGNMugavariPhase from "@/assets/ongoing/project10-1.jpg";


import VGNVarnabhoomi from "@/assets/ongoing/project5.jpg";


const properties = [
 
  {
    title: "VGN Heritage Springz",
    location: "Ottiyambakkam, Chennai.",
    type: "Plots",
    size: "700 - 1683 Sq ft",
    status: "Ready to Construct",
    image: VGNHeritage,
  link: "/vgn-heritage-springz/index",
  },
  {
    image: VGNGrandeur,
    title: "VGN Grandeur Phase I & II",
    location: "Iyyappanthangal, Porur",
    size: "581 - 3061 Sq feet",
    type: "Plots",
    status: "Ready to Construct",
    link: "/vgn-grandeur/index",
  },
  {
    image: VGNAspireGardens,
    title: "VGN Aspire Gardens",
    location: "Avadi, Chennai",
    size: "2 BHK & 3 BHK",
    type: "Villa",
    status: "Ready to Move In",
    link: "/vgn-aspire-gardens/index",
  },
  {
    image: VGNPridedeVilla,
    title: "VGN Pride de' Villa",
    location: "Padur, Chennai",
    size: "3 BHK",
    type: "Villa",
    status: "Ready to Occupy",
    link: "/vgn-pride-de-villa/index",
  },
  {
    image: VGNParadise,
    title: "VGN Paradise",
    location: "Tiruvottiyur (Wimco nagar)",
    size: "646 - 1486 Sq feet",
    type: "Plots",
    status: "Ready to Construct",
    link: "/vgn-paradise/index",
  },
  {
    image: VGNHighland,
    title: "VGN Highland Phase I & II",
    location: "Tharapakkam, Chennai",
    size: "734 - 1704 Sq feet",
    type: "Plots",
    status: "Ready to Construct",
    link: "/vgn-highland/index",
  },
  {
    image: VGNHorizon,
    title: "VGN Horizon",
    location: "Avadi, Chennai",
    size: "649 - 2359 Sq feet",
    type: "Plots",
    status: "Ready to Construct",
    link: "/vgn-horizon/index",
  },
  // {
  //   image: VGNPride,
  //   title: "VGN Pride",
  //   location: "Padur, OMR, Chennai.",
  //   size: "540 - 1636 Sq feet",
  //   type: "Plots",
  //   status: "Ready to Construct",
  //   link: "/vgn-pride/index",
  // },
  {
    image: VGNMugavariPhase,
    title: "VGN Mugavari Phase - IV & V",
    location: "Tambaram, Chennai.",
    size: "700 - 1926 Sq feet",
    type: "Plots",
    status: "Ready to Construct",
    link: "/vgn-mugavari-phase2/index",
  },
  {
    image: VGNVarnabhoomi,
    title: "VGN Varnabhoomi Phase - II",
    location: "Pudupakkam, OMR.",
    size: "497, 1195 Sq.Ft.",
    type: "Plots",
    status: "Ready to Construct",
    link: "/vgn-varnabhoomi/index",
  },
  // {
  //   image: VGNSamudra,
  //   title: "VGN Samudra",
  //   location: "Chromepet, Chennai.",
  //   size: "1829 Sq.Ft.",
  //   type: "Plots",
  //   status: "Ready to Construct",
  //   link: "/vgn-samudra/index",
  // },
];

export default function PropertySection({ prop }) {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="property-section spad  aos-animate">
      <div className="container">
        <div className="row">
          {properties.map((prop, index) => (
            <div
              className="col-lg-4 col-md-6 mb-4"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={`${index * 150}`}
              data-aos-duration="800"
            >
              <div className="as-item">
                <div className="property-item  rounded overflow-hidden">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="img-fluid w-100"
                    style={{ cursor: "default" }}
                  />
                  <div className="pi-text p-3">
                    <h5 className="fw-bold mb-3">
                      <a href={prop.link} className=" text-decoration-none">
                        {prop.title}
                      </a>
                    </h5>

                    <ul className="list-unstyled mb-3">
                      <div className="row">
                        <div className="col-md-7">
                          <li className="mb-2">
                            <span>
                              <MdLocationPin className="me-1" />
                            </span>
                            {prop.location}
                          </li>
                          <li>
                            <span>
                              {" "}
                              <FaObjectGroup className="me-1" />
                            </span>
                            {prop.size}
                          </li>
                        </div>
                        <div className="col-md-5">
                          <li className="mb-2">
                            <span>
                              {" "}
                              <FaBuilding className="me-1" />
                            </span>
                            {prop.type}
                          </li>
                          <li>
                            <span>
                              {" "}
                              <FaHome className="me-1 " />
                            </span>
                            {prop.status}
                          </li>
                        </div>
                      </div>
                    </ul>

                    <div className="pi-agent mt-3">
                      <div className="pa-item">
                        <div className="loadmore-btn">
                          <a
                            className="btn btn-sm"
                            onClick={() => navigate(prop.link)}
                          >
                            View more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
