import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import trust from "@/assets/83-logo.png";
import image1 from "@/assets/1.png";
import image2 from "@/assets/2.png";
import image3 from "@/assets/3.png";
import image4 from "@/assets/4.png";
import image5 from "@/assets/5.png";
import { Link, Links } from "react-router-dom";
export default function Trust() {
  return (
    <>
      <section
        className="property-section latest-property-section spad bg"
        style={{ paddingBottom: "0px" }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left: Image */}
            <div className="col-lg-4 text-center">
              <img src={trust} className="about-img img-fluid" alt="logo" />
            </div>

            {/* Right: Content */}
            <div className="col-lg-8">
              <div className="pd-widget" id="about-vgn">
                <br />
                <br />
                <h1 className="head1">
                  Trust, Quality, Transparency since 1942
                </h1>
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
                  their quality of life by providing them with the best
                  projects. &nbsp;
                  <Link to="/about" className="read-more">
                    Read more
                  </Link>
                </p>
                  <div className="row gx-4 gy-4 justify-content-center high">
            <div className="col-lg-4 col-md-4 col-6">
              <div className="class-img">
                <img src={image1} alt="" className="img-fluid" />
              </div>
              <div className="mt-2">
                <h5 className="shine-text">
                  Pioneers in Plug-and-play Provisions!
                </h5>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="class-img">
                <img src={image2} alt="" className="img-fluid" />
              </div>
              <div className="mt-2">
                <h5 className="shine-text">Underground Sewage <br />System</h5>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="class-img">
                <img src={image3} alt="" className="img-fluid" />
              </div>
              <div className="mt-2">
                <h5 className="shine-text">Metro Water <br />Provision</h5>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="class-img">
                <img src={image4} alt="" className="img-fluid" />
              </div>
              <div className="mt-2">
                <h5 className="shine-text">Piped Natural Gas <br />Connection</h5>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="class-img">
                <img src={image5} alt="" className="img-fluid" />
              </div>
              <div className="mt-2">
                <h5 className="shine-text">DTH Cable <br />Provision</h5>
              </div>
            </div>
          </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg py-5">
        <div className="container">
        
        </div>
      </section>
    </>
  );
}
