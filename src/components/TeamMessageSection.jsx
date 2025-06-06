import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TeamMessageSection = () => {
  return (
    <section
      className="property-section latest-property-section spad bg"
      style={{ paddingBottom: "0px", paddingTop: "20px" }}
    >
      <div className="container">
        <div className="row">

          <div className="col-lg-2"></div>

          <div className="col-lg-12">
            <div className="pd-widget" id="about-vgn">
              <p style={{ textAlign: "center" }}>
                Our company runs on the undying passion our people have for delivering happiness and satisfaction to our customers. It’s the energy and spirit of the team that has brought the brand this far. We grow together and make each other a better professional. Each department and function work with professional expertise and creative passion, culminating to create the VGN Homes renowned ‘Quality’ that is so much more than just a sum of the parts.
              </p>
              <p style={{ textAlign: "center" }}>
                Our team of reputed architects, civil contractors, legal advisors, financial planners, expert marketing, CRM and sales teams, HR professionals and administrators, skillfully guided by our top management leave no stone unturned in order to ensure collective growth and success. It’s this team that helped us build ‘Trust’ in our customers.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamMessageSection;
