import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function LocationAdvantages() {
  return (
    <div className="pd-board4 pd-widget" id="advantages">
      <div className="section-title1">
        <h4>Location Advantages</h4>
      </div>
      <div className="tab-board4">
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
              href="#restaurant"
              role="tab"
            >
              RESTAURANTS
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              href="#sports"
              role="tab"
            >
              SPORTS & ENTERTAINMENT PLACES
            </a>
          </li>
        </ul>

        <div className="tab-content">
          {renderTabPane("school", true, [
            ["Padma Aadharsh Hr secondary school", "1.3 Km"],
            ["Hindustan International School", "1.4 Km"],
            ["Velammal Vidyashram", "1.8 Km"],
            ["Kidzee,Kelambakkam", "2.2 Km"],
            ["Bhuvana Krishna Matriculation school", "2.5 Km"],
            ["Chettinad - Sarvalokaa Education", "2.7 Km"],
            ["St Mary’s Matriculation Hr Secondary School", "3.3 Km"],
            ["Gateway International School", "3.5 Km"],
            ["St. Francis De Sales Matriculation School", "4.6 Km"],
          ])}

          {renderTabPane("college", false, [
            ["Hindustan University", "950 Mtr"],
            ["Professor Dhanapalan College for Women", "2 Km"],
            ["Saisha Institute of Management Studies & Technical Science", "2.2 Km"],
            ["S.R.R Engineering College", "2.2 Km"],
            ["Chettinad Group of Education", "2.2 Km"],
            ["Anand Institute of Higher Technology", "2.4 Km"],
            ["Good Life Community College & Institute of Allied Health Sciences", "2.9 Km"],
            ["Jeppiaar University", "7.7 Km"],
              
          ])}

          {renderTabPane("hospital", false, [
            ["Supreme Speciality Hospitals", "850 Mtr"],
            ["Praveena Hospitals", "2.3 Km"],
            ["Chettinad Super Speciality Hospital", "2.4 Km"],
            ["Maheswari Hospital", "2.5 Km"],
            ["Annai Hospital", "5.7 Km"],
          ])}

          {renderTabPane("restaurant", false, [
            ["Hotel Ganga Vegetarian Restaurants", "1 Km"],
            ["The Farmer Restaurant", "1.2 Km"],
            ["Hotel Sri Krishna Bhavan", "1.5 Km"],
            ["Shree Ganapathy Bhavan", "2.4 Km"],
            ["New Murugan Idly", "2.5 Km"],
            ["Oyster Restaurant", "2.6 Km"],
            ["Pearl Kitchen", "2.7 Km"],
          ])}

          {renderTabPane("sports", false, [
            ["CTC Sports Arena", "2.4 Km"],
            ["Aquatic Splash Swim Academy India", "3.1 Km"],
            ["Moosaa Land", "6 Km"],
            ["Kelambakkam - Thaiyur Mini Waterfall", "7.4 Km"],
            ["ECR View Point", "8.8 Km"],
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



