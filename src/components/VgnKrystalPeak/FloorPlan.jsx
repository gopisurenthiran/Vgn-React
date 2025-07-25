import React, { useState } from "react";
import floorImg1 from "@/assets/vgn-krystal/plan-1.webp";
import floorImg2 from "@/assets/vgn-krystal/plan-2.webp";
import floorImg3 from "@/assets/vgn-krystal/plan-3.webp";
import floorImg4 from "@/assets/vgn-krystal/plan-4.webp";
import floorImg5 from "@/assets/vgn-krystal/plan-5.webp";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Tabs (Blocks)
const tabs = [
  "FLOOR PLANS",
  "BLOCK-A HOUSE PLANS",
  "BLOCK-B HOUSE PLANS",
  "BLOCK-C HOUSE PLANS",
  "BLOCK-D HOUSE PLANS",
];

// Vertical Floors
const floorTypes = [
  "1st Floor Plan",
  "Typical 2nd, 3rd & 4th Floor Plan",
  "5th Floor Plan",
];

// Images based on both Tab + Floor selection
const floorPlanImages = {
  "BLOCK-A HOUSE PLANS": {
    "1st Floor Plan": floorImg1,
    "Typical 2nd, 3rd & 4th Floor Plan": floorImg2,
    "5th Floor Plan": floorImg3,
  },
  "BLOCK-B HOUSE PLANS": {
    "1st Floor Plan": floorImg2,
    "Typical 2nd, 3rd & 4th Floor Plan": floorImg3,
    "5th Floor Plan": floorImg4,
  },
  "BLOCK-C HOUSE PLANS": {
    "1st Floor Plan": floorImg3,
    "Typical 2nd, 3rd & 4th Floor Plan": floorImg4,
    "5th Floor Plan": floorImg5,
  },
  "BLOCK-D HOUSE PLANS": {
    "1st Floor Plan": floorImg1,
    "Typical 2nd, 3rd & 4th Floor Plan": floorImg2,
    "5th Floor Plan": floorImg5,
  },
  "FLOOR PLANS": {
    "1st Floor Plan": floorImg5,
    "Typical 2nd, 3rd & 4th Floor Plan": floorImg1,
    "5th Floor Plan": floorImg2,
  },
};

export default function BlockFloorPlans() {
  const [activeTab, setActiveTab] = useState("BLOCK-D HOUSE PLANS");
  const [activeFloor, setActiveFloor] = useState("1st Floor Plan");
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Correct image based on both tab + floor
  const currentImage =
    floorPlanImages?.[activeTab]?.[activeFloor] || floorImg1;

  return (
    <div className="container-fluid bg-light py-4 px-2" id="floor">
      {/* Top Tabs */}
      <div className="d-flex flex-wrap justify-content-center border-bottom mb-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`btn text-uppercase fw-semibold border-0 rounded-0 px-4 py-2 m-1 ${
              activeTab === tab
                ? "text-danger border-bottom border-3 border-danger bg-white"
                : "text-dark bg-light"
            }`}
            style={{ fontSize: "14px" }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="row g-0 border bg-white">
        {/* Left Floor Menu */}
        <div className="col-md-2 border-end text-center d-flex flex-column justify-content-center p-3">
          {floorTypes.map((floor) => (
            <div
              key={floor}
              className={`py-2 px-2 mb-2 fw-semibold ${
                activeFloor === floor ? "bg-secondary text-white" : "text-dark"
              }`}
              style={{ fontSize: "14px", cursor: "pointer" }}
              onClick={() => setActiveFloor(floor)}
            >
              {floor}
            </div>
          ))}
        </div>

        {/* Floor Plan Image */}
        <div className="col-md-10 position-relative d-flex justify-content-center align-items-center p-3">
          <img
            src={currentImage}
            alt="Floor Plan"
            className="img-fluid border"
            style={{ maxHeight: "600px", objectFit: "contain", cursor: "zoom-in" }}
            onClick={handleImageClick}
          />

          {/* Zoom In Label */}
          <div
            className="position-absolute bottom-0 end-0 p-3 d-flex align-items-center"
            style={{ fontSize: "14px" }}
          >
            <i className="bi bi-search" style={{ fontSize: "18px", marginRight: "6px" }}></i>
            <span>CLICK TO ZOOM IN</span>
          </div>
        </div>
      </div>

      {/* Modal for Zoom */}
      <Modal show={showModal} onHide={handleClose} centered size="xl">
        <Modal.Body className="p-0">
          <img src={currentImage} alt="Zoom Floor" className="img-fluid w-100" />
        </Modal.Body>
      </Modal>
    </div>
  );
}
