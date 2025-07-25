import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CelebrityFarms from "@/assets/ongoing/project25.jpg";
import VGNkrystal from "@/assets/vgn-krystal/Banner.webp";
import UpcomingModal from "../UpcomingModal";
import { Link } from "react-router-dom"; // Use this if you're using React Router

const properties = [
  {
    title: "Celebrity Farms",
    image: CelebrityFarms,
    location: "Opp. Mahindra world city.",
    type: "Farm lands",
    size: "22 Cents",
    status: "Launching soon",
  },
  {
    image: VGNkrystal,
    title: "VGN Krystal Peak",
    location: "Iyyappanthangal, Porur",
    size: "581 - 3061 Sq feet",
    type: "Flats",
    status: "Launching soon",
    link: "/vgn-krystal-peak/index",
  },
];

const UpcomingProjects = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="py-5" style={{ background: "#fef7ef" }}>
      <div className="text-center mb-3 heading">
        <h4 className="d-inline-flex align-items-center" style={{ fontSize: "1.8rem" }}>
          <img
            className="head-border"
            src="/head-border.png"
            alt="Red corner"
            style={{ width: "33px", height: "30px", marginRight: "10px" }}
          />
          UPCOMING PROJECTS
        </h4>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          {properties.map((item, index) => (
            <div key={index} className="col-md-4 mb-4 d-flex">
              <div
                className="card shadow-sm border-0 w-100 d-flex flex-column"
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

                <div className="card-body property-item bg-white d-flex flex-column flex-grow-1" style={{ padding: "25px" }}>
                  <h5 className="mb-3">{item.title}</h5>

                  <div className="d-flex flex-wrap mb-3" style={{ fontSize: "0.95rem" }}>
                    <div className="me-4 mb-2">
                      <i className="bi bi-geo-alt-fill text-danger me-1"></i>
                      {item.location}
                    </div>
                    <div className="mb-2">
                      <i className="bi bi-building text-danger me-1"></i>
                      {item.type}
                    </div>
                  </div>

                  <div className="d-flex flex-wrap mb-3" style={{ fontSize: "0.95rem" }}>
                    <div className="me-4 mb-2">
                      <i className="bi bi-aspect-ratio-fill text-danger me-1"></i>
                      {item.size}
                    </div>
                    <div className="mb-2">
                      <i className="bi bi-rocket text-danger me-1"></i>
                      {item.status}
                    </div>
                  </div>

                  <div className="mt-auto text-center">
                    {item.link ? (
                      <Link to={item.link} className="site-btn5 px-4" style={{textDecoration: "none"}}>
                        VIEW DETAILS
                      </Link>
                    ) : (
                      <>
                        <button className="site-btn5 px-4" onClick={handleShow}>
                          ENQUIRE NOW
                        </button>
                        <UpcomingModal show={showModal} handleClose={handleClose} />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingProjects;
