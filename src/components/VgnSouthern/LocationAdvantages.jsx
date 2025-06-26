import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const tabs = [
  { id: "school", label: "Nearby Locations" },
  { id: "college", label: "EDUCATIONAL INSTITUTIONS" },
  { id: "hospital", label: "HOSPITALS" },
  { id: "industries", label: "INDUSTRIAL DEVELOPMENT" },
  { id: "entertainment", label: "ENTERTAINMENT" },
];

const tabData = {
  school: [
    ["800 Mtrs To Potheri Railway Station And GST Road", ""],
    ["5-10 Mins Drive To Industrial Hubs Like Maraimalai Nagar Industrial Estate, Ford & Mahindra World City", ""],
    ["15 Mins Drive To Oragadam Automobile Hub", ""],
  ],
  college: [
    ["Srimathi Sundaravalli Memorial School", ""],
    ["Sri Sankara Vidyalaya Matriculation Hr. Sec. School", ""],
    ["JRK School", ""],
    ["Vidya Mandir", ""],
    ["SRM Public School", ""],
    ["Holy Sai International School", ""],
    ["Maharishi Vidya Mandir School", ""],
    ["Neelan Matriculation School", ""],
    ["Velammal School", ""],
    ["Annai Velankanni School", ""],
    ["Mahindra World School", ""],
    ["SRM University", ""],
    ["Valliammai Engineering College", ""],
    ["Crescent Engineering College", ""],
    ["Tagore Engineering College", ""],
    ["Annai Velankanni College", ""],
    ["VIT", ""],
  ],
  hospital: [
    ["SRM General Hospital", ""],
    ["Tagore Medical College & Hospital", ""],
    ["Aravindhaa Hospital", ""],
    ["Bethesda Hospital", ""],
    ["Apollo Speciality Hospital", ""],
    ["Agenda Hospital", ""],
    ["Sai Speciality Hospital", ""],
  ],
  industries: [
    ["Mahindra World City", ""],
    ["Ford", ""],
    ["BOSCH Electrical Drives India Pvt. Ltd.", ""],
    ["Zoho Corporate Pvt. Ltd.", ""],
  ],
  entertainment: [
    ["Fortune Hotel", ""],
    ["SRM Hotel", ""],
    ["Resrtaurant", ""],
    ["Shopping Places", ""],
  ],
};

export default function LocationAdvantages() {
  const [activeTab, setActiveTab] = useState("school");

  return (
    <div className="pd-board12 pd-widget" id="advantages">
      <div className="section-title">
        <h4>Location Advantages</h4>
      </div>
      <div className="tab-board12">
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