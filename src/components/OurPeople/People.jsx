import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const People = () => {
  return (
    <section className="property-section latest-property-section spad bg">
      <div className="container">
        <div className="row">

          <div className="col-lg-12 chair-txt1">
            <div className="pd-widget people-text" id="about-vgn" style={{ marginTop: 0 }}>
              
              <img src="/quote.png" alt="quote" style={{ width: "35px" }} /><br /><br />

              <p style={{ textAlign: "left", fontWeight: 200 }}>
                As a result of our prudent approach, we have grown steadily and remained resilient despite challenging market conditions, making impressive progress over the years. We have accomplished this by adapting to an evolving competitive landscape, maintaining a relentless commitment to quality, and exercising financial discipline, including the efficient deployment of capital.
              </p>

              <p style={{ textAlign: "left", fontWeight: 200 }}>
                Through a combination of entrepreneurial spirit, professional excellence, and an in-depth understanding of the region's real estate demand - supply dynamics, we have delivered a number of quality developments in the city.
              </p>

              <p style={{ textAlign: "left", fontWeight: 200 }}>
                We strongly believe ‘A Home is the starting place of love, hope and dreams’.
              </p>

              <div className="row">

                <div className="col-lg-3 text-right mobile" style={{ marginTop: "-10px" }}>
                  <span>
                    <img src="/quote2.png" alt="quote2" style={{ width: "35px" }} />
                  </span>
                </div>

                <div className="col-lg-4">
                  <h4 style={{ color: "#fff", textAlign: "left", marginTop: "10px", fontWeight: 900 }}>
                    Mrs. Anusha Ashyanth
                  </h4>
                  <p style={{ color: "#fff", textAlign: "left", fontWeight: 200 }}>
                    CEO
                  </p>
                </div>

                <div
                  className="col-lg-1 desktop text-left"
                  style={{
                    marginTop: "-30px",
                    flex: "0 0 11.333333%",
                    maxWidth: "20.333333%",
                  }}
                ></div>

                <br /><br />

                <div className="col-lg-5 desktop text-left" style={{ marginTop: "-30px" }}>
                  <span>
                    <img src="/quote1.png" alt="quote1" style={{ width: "35px" }} />
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default People;
