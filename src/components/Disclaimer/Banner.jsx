import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaAngleRight } from "react-icons/fa";
const Banner = () => {
  return (
    <section
      className="breadcrumb-section spad set-bg"
      style={{
        backgroundImage: "url(/breadcrumb-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-text text-center">
              <h4>Disclaimer</h4>
            </div>
            <div className="bt-option">
              <a href="/" className="text-white anchor" style={{textDecoration:"none"}}>
                <i className="fa fa-home"></i> Home <FaAngleRight />
              </a>
              <span className="text-white"> Disclaimer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
