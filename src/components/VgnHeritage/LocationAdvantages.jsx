import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function LocationAdvantages() {
  return (
    <div className="pd-board1 pd-widget" id="advantages">
      <div className="section-title">
        <h4>Location Advantages</h4>
      </div>
      <div className="tab-board1">
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="tab" href="#tech" role="tab">
              TECH PARKS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#education" role="tab">
              EDUCATIONAL INSTITUTIONS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#healthcare" role="tab">
              HEALTHCARE INSTITUTIONS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#lifestyle" role="tab">
              LIFESTYLE
            </a>
          </li>
        </ul>

        <div className="tab-content">

          {/* TECH PARKS */}
          {renderTabPane("tech", true, [
            ["TCS Siruseri", "6 Km"],
            ["SIPCOT IT Park", "6.5 Km"],
            ["Infosys", "8 Km"],
            ["Gofrugal Technologies", "8.5 Km"],
            ["Tech Mahindra", "10 Km"],
            ["Wipro", "10 Km"]
          ])}

          {/* EDUCATIONAL INSTITUTIONS */}
          {renderTabPane("education", false, [
            ["Agni College", "2.5 Km"],
            ["Amethyst International School", "3 Km"],
            ["HLC International School", "3.2 Km"],
            ["Christwood School", "3.5 Km"],
            ["St. Joseph's Engg. College", "8 Km"],
            ["Velammal New Gen CBSE School", "10 Km"],
            ["KCG College of Technology", "12 Km"],
            ["FITGEE Global School", "12 Km"],
            ["Vellore Institute of Technology", "15 Km"],
            ["Crescent College", "15 Km"]
          ])}

          {/* HEALTHCARE INSTITUTIONS */}
          {renderTabPane("healthcare", false, [
            ["H & M Hospital", "3 Km"],
            ["ASTRA Speciality Hospital", "5 Km"],
            ["Jolen Hospital", "10 Km"],
            ["Chettinad Super Speciality Hospital", "15 Km"],
            ["Apollo Speciality Hospital", "15 Km"]
          ])}

          {/* LIFESTYLE */}
          {renderTabPane("lifestyle", false, [
            ["VIVIRA Mall", "6.5 Km"],
            ["Marina Mall", "7 Km"],
            ["RTS Food Street", "7 Km"],
            ["Vandalur ZOO", "8.5 Km"],
            ["Kovalam Jn.", "12 Km"],
            ["VGN", "13 Km"],
            ["Kilambakkam Bus Stand", "15 Km"]
          ])}

        </div>
      </div>
    </div>
  );
}

function renderTabPane(id, isActive, rows) {
  return (
    <div
      className={`tab-pane fade ${isActive ? "active show" : ""}`}
      id={id}
      role="tabpanel"
    >
      <div className="tab-desc">
        <div style={{ overflowX: "auto" }}>
          <table className="location-table">
            <tbody>
              {rows.map(([title, distance], idx) => (
                <tr key={idx}>
                  <td>
                    <p>
                      <FaAngleDoubleRight /> {title}
                    </p>
                  </td>
                  <td>{distance}</td>
                  {[...Array(5)].map((_, i) => (
                    <td key={i} className="dektop-td"></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
