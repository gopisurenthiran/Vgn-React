import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CelebrityFarms from "@/assets/ongoing/project25.jpg";
import UpcomingModal from "../UpcomingModal";

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
    title: "Heritage Springz",
    image: "/heritage.jpg",
    location: "Ottiyambakkam, Chennai.",
    type: "Plots",
    size: "700 - 1683 Sq ft",
    status: "Launching soon",
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
              <div className="card shadow-sm border-0 w-100 d-flex flex-column" style={{ borderRadius: "15px", overflow: "hidden" }}>
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

                {/* Flex-grow content area */}
                <div className="card-body property-item bg-white d-flex flex-column flex-grow-1" style={{ padding: "25px" }}>
                  <h5 className=" mb-3">{item.title}</h5>

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

                  {/* Spacer to push button to bottom */}
                  <div className="mt-auto text-center">
                    <button className="site-btn5 px-4"  onClick={handleShow}>ENQUIRE NOW</button>
                  </div>
                   <UpcomingModal show={showModal} handleClose={handleClose} />
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
