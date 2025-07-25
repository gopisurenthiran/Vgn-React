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
              href="#hospital"
              role="tab"
            >
              HOSPITALS
            </a>
          </li>
         
          
        </ul>

        <div className="tab-content">
          {renderTabPane("school", true, [
            ["Velammal Vidyalaya"],
            ["Sudharsanam Vidyashram "],
            ["Jaigopal Garodia School "],
            ["VGN Chinmaya Vidyalaya (Assured Admission)"],
            ["The Pupil Saveetha Eco School"],
            ["The Schram Academy"],
          ])}

          {renderTabPane("college", false, [
            [" Mahalakshmi Women’s College"],
            ["S.A. Engineering College"],
            ["ACS Medical College"],
            [" St. Peter’s Engineering College"],
            ["Sri Ramachandra Medical College"],
            ["Panimalar Engineering College"],
            ["Dr. MGR University"],
          ])}

        

          {renderTabPane("hospital", false, [
            ["Saveetha Dental College & Hospital"],
            ["Apollo Hospital, Vanagaram "],
            ["Sri Ramachandra Hospital, Porur"],
           
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



