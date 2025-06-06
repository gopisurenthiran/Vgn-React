import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ManagerSection = () => {
  return (
    <section className="property-section latest-property-section spad bg">
      <div className="container">
        <div className="row">

          <div className="col-lg-12">
            <div className="pd-text">
              <img
                src="/managers.png"
                alt="managers"
                style={{ width: "100%" }}
                className="desktop"
              />
              <img
                src="/people-mobile1.png"
                alt="people-mobile"
                style={{ width: "100%", imageRendering: "pixelated" }}
                className="mobile"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ManagerSection;
