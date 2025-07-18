import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const tabs = [
  { id: "school", label: "SCHOOLS" },
  { id: "college", label: "COLLEGES" },
  { id: "hospital", label: "HOSPITALS" },
  { id: "restaurants", label: "RESTAURANTS" },
  { id: "work", label: "WORK PLACES" },
  { id: "hubs", label: "ENTERTAINMENT HUBS" },
  { id: "supermarket", label: "SUPERMARKETS" },
];

const tabData = {
  school: [
    ["VGN Chinmaya Vidyalaya CBSE School", "100 mtrs"],
    ["Kendriya Vidyalaya OCF CBSE - Avadi", "3.8 Km"],
    ["Maharishi Vidya Mandir", "4.1 Km"],
    ["Vijayanta Model Higher Secondary School", "4.3 Km"],
    ["Velammal Vidyalaya - Avadi", "4.5 Km"],
  ],
  college: [
    ["S.A. Engineering College", "6.8 Km"],
    ["Tamilnadu Special Police Regimental Centre", "4.3 Km"],
    ["St.Peter's College of Engineering and Technology", "5 Km"],
    ["Murugappa Polytechnic College", "5.8 Km"],
    ["S.A. College of Arts & Science", "7.4 Km"],
    ["Saveetha Dental College and Hospitals", "9.2 Km"],
    ["ACS Medical College and Hospital", "10.3 Km"],
  ],
  hospital: [
    ["K.C.Multispeciality Hospital", "2.1 Km"],
    ["Dr.Agarwals Eye Hospital", "2.3 Km"],
    ["ESI Hospital - Avadi", "2.9 Km"],
    ["Sri Sudharsanam Hospital", "3 Km"],
    ["HVF Hospital", "5.4 Km"],
  ],
  restaurants: [
    ["Pascah Restaurant", "2.3 Km"],
    ["A2B", "3 Km"],
    ["Domino's Pizza", "3.4 Km"],
    ["S.S. Hyderabad Biryani", "3.9 Km"],
    ["Pandian Hotel", "4 Km"],
    ["Ayyaar Bawan Sweets", "4.6 Km"],
  ],
  work: [
    ["Tidel Park (Upcoming)", "--"],
    ["Ordnance Clothing Factory", "3.8 Km"],
    ["HVF & OCF", "4.7 Km"],
    ["Schneider Electric India Private Limited", "10.7 Km"],
    ["TI Cycles of India", "11.9 Km"],
    ["HCL Technologies Limited", "13.9 Km"],
  ],
  hubs: [
    ["Kumaran Cinemas", "1.4 Km"],
    ["Paruthipattu Lake Green Park", "2.7 Km"],
    ["VP Cinemas", "--"],
    ["Dolphin Sports", "5.7 Km"],
    ["Krono Cricket and Football Academy - Avadi", "6.5 Km"],
  ],
  supermarket: [
    ["Ponnu Super Bazaar - Avadi", "3 Km"],
    ["Grace Supermarket", "2.3 Km"],
  ],
};

export default function LocationAdvantages() {
  const [activeTab, setActiveTab] = useState("school");

  return (
    <div className="pd-board11 pd-widget" id="advantages">
      <div className="section-title9">
        <h4>Location Advantages</h4>
      </div>
      <div className="tab-board11">
        <ul
          className="nav nav-tabs d-flex flex-wrap justify-content-start"
          role="tablist"
        >
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
              className={`tab-pane fade ${
                activeTab === tab.id ? "show active" : ""
              }`}
              role="tabpanel"
            >
              <div className="tab-desc">
                <div style={{ overflowX: "auto" }}>
                  <table className="location-table">
                    <tbody>
                      {tabData[tab.id].map(([place, distance], i) => (
                        <tr key={i}>
                          <td>
                            <p>
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              ></i>{" "}
                              {place}
                            </p>
                          </td>
                          <td>{distance}</td>
                          <td className="dektop-td"></td>
                          <td className="dektop-td"></td>
                          <td className="dektop-td"></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}