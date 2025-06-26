import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const tabs = [
  { id: "school", label: "Nearby Schools" },
  { id: "college", label: "Nearby Colleges & Universities" },
  { id: "workplace", label: "Nearby Workplace" },
  { id: "hospital", label: "Nearby Hospitals" },
];

const tabData = {
  school: [
    "Hindustan International School",
    "Sushil Hari International Residential School",
    "Gateway International School",
    "Velammal International School",
    "Amethyst International School",
    "PSBB School, Polacherry",
    "BVM Global CBSE School",
    "Billabong High International School",
    "HLC International School",
  ],
  college: [
    "Hindustan University",
    "VIT, Chennai",
    "Chettinad Hospital & Research Institute",
    "Tagore Medical College & Engineering College",
    "Crescent Institution of Science & Technology",
    "Anand Institution of Higher Technology",
    "S.S.N College of Engineering",
    "SMK Fomra",
    "Sathyabama University",
    "AMET",
    "Dr.Ambedkar Law College",
  ],
  workplace: [
    "Siruseri IT Park",
    "PAR Formulations",
    "Emerald Engineering (Diamond Group)",
    "Butterfly Appliance Ltd",
    "Tafe Product Training Centre",
    "Elista Pharmaceuticals",
    "Novotel Chennai - Sipcot",
    "Valeo India",
    "Virtusa",
    "Polaris",
    "Accenture",
    "HCL Technologies Ltd",
    "FLSmidth",
    "Capgemini",
    "Infosys Ltd",
    "UST Global",
    "CTS",
    "Wipro",
  ],
  hospital: [
    "Chettinad Health City",
    "Praveena Hospital",
    "Tagore Medical Hospital",
  ],
};

export default function LocationAdvantages() {
  const [activeTab, setActiveTab] = useState("school");

  return (
    <div className="pd-board13 pd-widget" id="advantages">
      <div className="section-title11">
        <h4>Location Advantages</h4>
      </div>
      <div className="tab-board13">
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
