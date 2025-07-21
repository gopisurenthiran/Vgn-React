import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BrandIconSection() {
  return (
    <div className="container" >
      <div className="row" style={{height:"70px"}}>
        {/* Empty Left Column */}
        <div className="col-lg-8 col-md-8"></div>

        {/* Right Column with Brand Icons */}
        <div className="col-lg-4 col-md-4">
          <div className="brand-txt" style={{ background: "#fff" }}>
            <img
              src="/brand-icon3.png"
              alt="Brand Icon 3"
              style={{ width: "70px", marginLeft: "15px" }}
            />
            <img
              src="/brand-icon4.png"
              alt="Brand Icon 4"
              style={{ width: "70px", marginLeft: "15px" }}
            />
            <img
              src="/brand-icon2.png"
              alt="Brand Icon 2"
              style={{ width: "70px", marginLeft: "15px" }}
            />
            <img
              src="/brand-icon1.png"
              alt="Brand Icon 1"
              style={{ width: "70px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
