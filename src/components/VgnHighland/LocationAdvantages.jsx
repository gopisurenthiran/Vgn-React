import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function LocationAdvantages() {
  return (
    <div className="pd-board6 pd-widget" id="advantages">
      <div className="section-title3">
        <h4>Location Advantages</h4>
      </div>
      <div className="tab-board6">
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-bs-toggle="tab"
              href="#school"
              role="tab"
            >
             TRANSPORTATION
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              href="#college"
              role="tab"
            >
             SCHOOLS & COLLEGES
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
              href="#itpark"
              role="tab"
            >
                IT PARKS
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              href="#location-high"
              role="tab"
            >
              LOCATION 
            </a>
          </li>
         
        </ul>

        <div className="tab-content">
          {renderTabPane("school", true, [
            ["Anakaputhur Bus Stand", "9 mins"],
            ["Kundrathur Bus Stand", "15 mins"],
            ["Porur Bus Stand", "18 mins"],
          ])}

          {renderTabPane("college", false, [
            ["Madha Arts and Science College", "5 mins"],
            ["Kidzee Pre-School", "6 mins"],
            ["The PSBB Millennium School", "9 mins"],
            ["Lalaji Memorial Omega International School", "9 mins"],
            ["Sri Ramachandra Medical College & Hospital", "23 mins"],
          ])}

          {renderTabPane("hospital", false, [
            ["Annai Grace Hospital", "10 mins"],
            ["BP Jain Hospital", "16 mins"],
            ["Rela Hospital", "27 mins"],
          ])}

          {renderTabPane("itpark", false, [
            ["DLF IT Park / L&T IT Park", "22 mins"],
            ["Virtusa Hub", "26 mins"],
            ["Olympia Technology Pvt Ltd", "28 mins"],
          ])}

          {renderTabPane("location-high", false, [
            ["Connecting Tambaram Bypass", "7 mins"],
            ["Kundrathur Murugan Temple", "18 mins"],
            ["Chennai International Airport", "23 mins"],
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



