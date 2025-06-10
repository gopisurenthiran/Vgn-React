import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';
import { MdLocationPin } from "react-icons/md";
import { FaObjectGroup, FaBuilding, FaHome } from "react-icons/fa";

const properties = [
  {
    image: "/project36.jpg",
    title: "VGN Grandeur",
    location: "Iyyappanthangal, Porur",
    size: "581 - 3061 Sq feet",
    type: "Plots",
    status: "Ready to Construct",
    link: "/vgn-grandeur",
  },
  {
    image: "/project35.jpg",
    title: "VGN Aspire Gardens",
    location: "Avadi, Chennai",
    size: "2 BHK & 3 BHK",
    type: "Villa",
    status: "Under Construction",
    link: "vgn-aspire-gardens/index",
  },
  {
    image: "/project34.jpg",
    title: "VGN Pride de' Villa",
    location: "Padur, Chennai",
    size: "3 BHK",
    type: "Villa",
    status: "Under Construction",
    link: "vgn-pride-de-villa/index",
  },
  {
    image: "/project23.jpg",
    title: "VGN Paradise",
    location: "Tiruvottiyur (Wimco nagar)",
    size: "646 - 1486 Sq feet",
    type: "Plots",
    status: "Ready to Construct",
    link: "vgn-paradise/index",
  },
  {
    image: "/project31.jpg",
    title: "VGN Highland",
    location: "Tharapakkam, Chennai",
    size: "734 - 1704 Sq feet",
    type: "Plots",
    status: "Ready to Construct",
    link: "vgn-highland/index",
  },
  {
    image: "/project27.jpg",
    title: "VGN Horizon",
    location: "Avadi, Chennai",
    size: "649 - 2359 Sq feet",
    type: "Plots",
    status: "Ready to Construct",
    link: "vgn-horizon/index",
  },
   {
    image: "/project24.jpg",
    title: "VGN Classique",
    location: "Ambattur, Chennai.",
    size: "703 - 1416 Sq feet",
    type: "Plots",
    status: "Ready to Construct",
    link: "vgn-classique/index",
  },
  {
    image: "/project15.jpg",
    title: "VGN Pride",
    location: "Padur, OMR, Chennai.",
    size: "540 - 1636 Sq feet",
    type: "Plots",
    status: "Ready to Construct",
    link: "vgn-pride/index",
  },
  {
    image: "/project10-1.jpg",
    title: "VGN Mugavari Phase - IV & V",
    location: "Tambaram, Chennai.",
    size: "700 - 1926 Sq feet",
    type: "Plots",
    status: "Ready to Construct",
    link: "vgn-mugavari-phase2/index",
  },
  {
    image: "/project22.jpg",
    title: "VGN Westfield",
    location: "Avadi, Chennai.",
    size: "1358, 2195 Sq feet",
    type: "Plots",
    status: "Ready to Construct",
    link: "vgn-westfield/index",
  },
  {
    image: "/project30.jpg",
    title: "VGN Windsor Park Phase IV - 1G",
    location: "Avadi, Chennai.",
    size: "1104, 1170 Sq.Ft.",
    type: "Plots",
    status: "Ready to Construct",
    link: "vgn-windsorpark-phase4-1g/index",
  },
  {
    image: "/project21.jpg",
    title: "VGN Southern Meadows",
    location: "Potheri, Chennai.",
    size: "1302 Sq.Ft.",
    type: "Plots",
    status: "Ready to Construct",
    link: "vgn-southernmeadows/index",
  },
  {
    image: "/project5.jpg",
    title: "VGN Varnabhoomi Phase - II",
    location: "Pudupakkam, OMR.",
    size: "497, 1195 Sq.Ft.",
    type: "Plots",
    status: "Ready to Construct",
    link: "vgn-varnabhoomi/index",
  },
  {
    image: "/project9.jpg",
    title: "VGN Samudra",
    location: "Chromepet, Chennai.",
    size: "1829 Sq.Ft.",
    type: "Plots",
    status: "Ready to Construct",
    link: "vgn-samudra/index",
  },
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
    <section className="property-section spad  aos-animate" >
      <div className="container-fluid">
        <div className="row">
          {properties.map((prop, index) => (
            <div
                  className="col-lg-4 col-md-6 mb-4"
    key={index}
    data-aos="zoom-in"
    data-aos-delay={`${index * 150}`} 
    data-aos-duration="800" 
 
          
            >
              <div className="as-item" >
                <div className="property-item  rounded overflow-hidden" >
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
                            <span><MdLocationPin className="me-1" /></span>
                              {prop.location}
                           
                          </li>
                          <li>
                           <span> <FaObjectGroup className="me-1" /></span> 
                            {prop.size}
                          </li>
                        </div>
                        <div className="col-md-5">
                          <li className="mb-2">
                           <span> <FaBuilding className="me-1" /></span> 
                            {prop.type}
                          </li>
                          <li>
                            <span> <FaHome className="me-1 " /></span>
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