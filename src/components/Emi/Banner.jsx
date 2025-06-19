import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAngleRight } from "react-icons/fa";

const Banner = () => {
  return (
    <section
      className="breadcrumb-section spad set-bg"
      style={{ backgroundImage: 'url(/breadcrumb-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-text text-white">
              <h4 className="head1">EMI CALCULATOR</h4>
              <div className="bt-option">
                <a href="#" className="text-white">
                 <i className="fa fa-home"></i>  Home <FaAngleRight />
                </a>
                <span className="text-white">EMI Calculator </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
