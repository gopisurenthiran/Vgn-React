import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function LocationAdvantages() {
  return (
    <div className="pd-board5 pd-widget" id="advantages">
      <div className="section-title">
        <h4>Location Advantages</h4>
      </div>
      <div className="tab-board5">
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
              WORKPLACES
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
              href="#hub"
              role="tab"
            >
              ENTERTAINMENT HUBS
            </a>
          </li>
          
        </ul>

        <div className="tab-content">
          {renderTabPane("school", true, [
            ["Smt.Mohini Saraogi Vivekananda Vidyalaya", "100 Mtr"],
            ["Holy Cross Matriculation Higher Sec.School", "1.2 Km"],
            ["Vellayan Chettiyar Higher Sec.School", "1.8 Km"],
            ["Velammal New Gen School", "2.2 Km"],
            ["Sri Ram Dayal Khemka Vivekananda Vidyalaya", "3.3 Km"],
            
          ])}

          {renderTabPane("college", false, [
            ["Government Arts and Science", "2.8 Km"],
            ["V.Ramakrishna Polytechnic", "4 Km"],
            ["Sir Theagaraya College", "7.9 Km"],
            ["K.C.S Kasi Nadar College of Arts & Science", "8.1 Km"],
          ])}

          {renderTabPane("work", false, [
            ["ITC Limited Packaging & Printing", "500 Mtr"],
            ["MRF Tyres", "550 Mtr"],
           
          ])}

          {renderTabPane("hospital", false, [
            ["SS Hospitals", "1 Km"],
            ["Dr.Prithivi Health Centre", "1.2 Km"],
            ["Aakash Hospital", "1.5 Km"],
            ["Sugam Hospitals", "2 Km"],
            ["Apollo Hospitals", "2.4 Km"],
            
          ])}

          {renderTabPane("hub", false, [
            ["Bharathiyar Beach", "2 Km"],
            ["Babu Jagjeevan Ram Sports Complex", "5.8 Km"],
            ["Bethesda Swimming Pool", "6.9 Km"],
            ["Kasimedu Beach", "7.2 Km"],
            ["Aadukalam Multi-Sports Facility", "7.3 Km"],
            [" IDream Cinemas", "8.8 Km"],
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



