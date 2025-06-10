import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const BreadSection = () => {
  return (
    <section
      className="breadcrumb-section spad set-bg"
      style={{ backgroundImage: 'url(/breadcrumb-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-text text-center">
              <h4>Our Values</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadSection;
