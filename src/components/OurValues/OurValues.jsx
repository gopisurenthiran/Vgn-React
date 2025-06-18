import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaQuoteLeft, FaAngleDoubleRight } from "react-icons/fa";

const OurValues = () => {
  return (
    <section className="blog-details-section spad py-5 bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="pd-widget blog-details-content" id="about-vgn">
              <div className="heading text-center mb-4">
                <h4>
                  <span className="head-border">
                    <img
                      src="/head-border.png"
                      alt="border"
                      className="img-fluid"
                    />
                  </span>{" "}
                  Our Values
                </h4>
              </div>

              {/* Vision */}
              <div className="mission-txt mb-4">
                <div className="bc-quote d-flex flex-column flex-sm-row">
                  <div className="bq-icon me-3 mb-2 mb-sm-0">
                    <FaQuoteLeft size={24} />
                  </div>
                  <div className="bq-text">
                    <h4 className="head2">Our Vision</h4>
                    <p className="text-start mb-0">
                      To do better than what we have done and deliver great
                      value to our customers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission */}
              <div className="mission-txt">
                <div className="bc-quote d-flex flex-column flex-sm-row">
                  <div className="bq-icon me-3 mb-2 mb-sm-0">
                    <FaQuoteLeft size={24} />
                  </div>
                  <div className="bq-text">
                    <h4 className="head2">Our Mission</h4>
                    <p className="text-start">
                      <FaAngleDoubleRight className="me-2" />
                      Create an inspiring environment for people where they
                      push their boundaries every day.
                    </p>
                    <p className="text-start">
                      <FaAngleDoubleRight className="me-2" />
                      Achieve customer satisfaction and create value for
                      stakeholders.
                    </p>
                    <p className="text-start mb-0">
                      <FaAngleDoubleRight className="me-2" />
                      Encourage professionalism and transparency in all
                      interactions.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
