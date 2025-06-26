import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const tabs = [
  { id: "school", label: "NEAR BY SCHOOLS" },
  { id: "college", label: "NEAR BY COLLEGE" },
  { id: "hospital", label: "NEAR BY HOSPITALS" },
  { id: "work", label: "NEAR BY WORK PLACE" },
  { id: "hubs", label: "NEARBY HUBS" },
];

const tabData = {
  school: [
    "Maharishi Vidya Mandir School",
    "Srimathi Sundaravalli Memorial School",
    "Jains Public School",
    "Mahalakshmi Vidya Mandir School",
    "Vels Vidyasharam",
    "Sri Chaitanya School",
  ],
  college: [
    "MOP Vaishnav College, Chrompet",
    "Vels College, Chrompet",
    "Madha Engineering College, Kundrathur",
    "Madras Institute of Technology",
    "Sri Balaji College of Nursing",
    "Sri Balaji Medical College and Hospital",
  ],
  hospital: [
    "Sugam Hospital, Chromepet",
    "Parvathy Hospital, Chromepet",
    "Dr. Rela Institute & Medical Centre - Multispeciality Hospital, Chromepet",
    "Shankara Eye Hospital, Pammal",
    "Govt Hospital, Chromepet",
    "National Institute of Siddha & Hospital, Tambaram",
    "Dr. Kumars Speciality Hospital, Chromepet",
  ],
  work: [
    "MEPZ, Chrompet",
    "Ge Atoms, Pallavaram",
    "Sipcot , Thirumudivakkam",
  ],
  hubs: [
    "Chrompet Railway Station",
    "Pallavaram Bus Stand",
    "Chennai Airport Metro",
    "Chennai International Airport",
    "Tambaram Railway Station",
  ],
};

export default function LocationAdvantages() {
  const [activeTab, setActiveTab] = useState("school");

  return (
    <div className="pd-board14 pd-widget" id="advantages">
      <div className="section-title12">
        <h4>Location Advantages</h4>
      </div>
      <div className="tab-board14">
        <ul className="nav nav-tabs d-flex flex-wrap justify-content-start" role="tablist">
          {tabs.map((tab) => (
            <li className="nav-item" key={tab.id}>
              <a
                className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                role="tab"
                href={`#${tab.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(tab.id);
                }}
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="tab-content mt-3">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              id={tab.id}
              className={`tab-pane fade ${activeTab === tab.id ? "show active" : ""}`}
              role="tabpanel"
            >
              <div className="tab-desc">
                {tabData[tab.id].map((item, index) => (
                  <p key={index}>
                    <i className="fa fa-angle-double-right" aria-hidden="true"></i> {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
