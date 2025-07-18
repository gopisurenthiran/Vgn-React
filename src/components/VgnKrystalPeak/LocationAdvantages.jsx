import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function LocationAdvantages() {
  return (
    <div className="pd-board2 pd-widget" id="advantages">
      <div className="section-title">
        <h4>Location Advantages</h4>
      </div>
      <div className="tab-board2">
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-bs-toggle="tab"
              href="#school"
              role="tab"
            >
              SCHOOLS
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              href="#college"
              role="tab"
            >
              COLLEGES
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              href="#work"
              role="tab"
            >
              IT PARKS
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              href="#hospital"
              role="tab"
            >
              HOSPITALS
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              href="#religius"
              role="tab"
            >
              RELIGIOUS
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              href="#connect"
              role="tab"
            >
              CONNECTIVITY
            </a>
          </li>
        </ul>

        <div className="tab-content">
          {renderTabPane("school", true, [
            ["Maharishi Vidyamandir", "1.9 Km"],
            ["Amrita Vidyalaya", "2.1 Km"],
            ["PSBB Millennium School", "2.9 Km"],
            ["Narayana E Techno", "2.9 Km"],
            ["Velammal School", "3.1 Km"],
            ["Sri Krish International School", "4.2 Km"],
          ])}

          {renderTabPane("college", false, [
            ["Ramachandra Medical & Engineering College", "2 Km"],
            ["KK College of Pharmacy", "3.2 Km"],
            ["Alpha Arts and Science", "3.4 Km"],
            ["Madha Medical College", "4.7 Km"],
            ["Muthukumaran Group of Colleges", "5.5 Km"],
            ["St.Joseph College of Engineering", "8.1 Km"],
            ["Panimalar Medical and Engineering", "9.9 Km"],
          ])}

          {renderTabPane("work", false, [
            ["L&T", "4.9 Km"],
            ["DLF", "6 Km"],
            ["RMZ", "6 Km"],
          ])}

          {renderTabPane("hospital", false, [
            ["Ramachandra Hospital", "2 Km"],
            ["Aravind Eye Hospital", "5.1 Km"],
            ["Dr.Mehta's Hospital", "5.7 Km"],
            ["ACS Medical College", "6.3 Km"],
            ["Saveetha Dental College", "6.8 Km"],
            ["MIOT Hospital", "8.1 Km"],
          ])}

          {renderTabPane("religius", false, [
            ["Jumma Masjid Mosque", "1.4 Km"],
            ["Christ Miracle Church", "3.4 Km"],
            ["Kundrathur Murugan Temple", "8.2 Km"],
          ])}

          {renderTabPane("connect", false, [
            ["Iyyappanthangal Bus Depot/ Metro", "1.3 Km"],
            ["Porur Toll Gate", "3.6 Km"],
            ["Porur Junction", "4.6 Km"],
            ["Poonamallee", "6.3 Km"],
            ["Kundrathur Bus Stop", "6.6 Km"],
          ])}
        </div>
      </div>
    </div>
  );
}

// Helper function to render each tab pane with rows
function renderTabPane(id, isActive, rows) {
  return (
    <div
      className={`tab-pane ${isActive ? "active show" : ""}`}
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
                  {/* Optional additional columns for desktop spacing */}
                  {[...Array(5)].map((_, i) => (
                    <td className="dektop-td" key={i}></td>
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



