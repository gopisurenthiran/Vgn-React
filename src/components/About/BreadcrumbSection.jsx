import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const BreadcrumbSection = () => {
  return (
    <section
      className="breadcrumb-section spad set-bg"
      style={{ backgroundImage: 'url(/breadcrumb-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-text text-white">
              <h1 className="head1">About VGN</h1>
              <div className="bt-option">
                <a href="#" className="text-white">
                  <i className="fa fa-home"></i> Home
                </a>
                <span className="text-white"> About VGN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbSection;
