import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import trust from "@/assets/83-logo.png";

export default function Trust() {
  return (
     <section
      className="property-section latest-property-section spad bg"
      style={{ paddingBottom: "0px" }}
    >
      <div className="container">
<div className="row align-items-center">
          {/* Left: Image */}
          <div className="col-lg-3 text-center">
            <img
              src={trust}
              className="about-img img-fluid"
              alt="logo"
            />
          </div>

          {/* Right: Content */}
          <div className="col-lg-9">
            <div className="pd-widget" id="about-vgn">
              <br />
              <br />
              <h1 className="head1">Trust, Quality, Transparency since 1942</h1>
              <p
                className="text-justify"
                style={{ lineHeight: "29px", margin: "0 0 20px 0" }}
              >
                VGN is a leader, visionary and a pioneer in the real estate
                business and stands out distinctly among its competitors.
                Headquartered in Chennai, we are one of the oldest and most
                trusted real estate companies, certified by ISO 14001:2004.
                Years of experience helped us create our own path by
                understanding our customer’s desires and helped us improve
                their quality of life by providing them with the best projects.
                &nbsp;
                <a href="/about" className="read-more">
                  Read more
                </a>
              </p>
            </div>
          </div>
        </div>
      
      </div>
        
    </section>
  );
}
