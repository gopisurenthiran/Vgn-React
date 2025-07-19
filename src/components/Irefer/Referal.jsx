import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import headBorder from "/head-border.png";
import icon1 from "@/assets/irefer-icon1.png";
import icon2 from "@/assets/irefer-icon2.png";
import icon3 from "@/assets/irefer-icon3.png";
import icon4 from "@/assets/irefer-icon4.png";

export default function ReferralSteps() {
  const steps = [
    {
      img: icon1,
      text: `YOU TELL MR. A (YOUR FRIEND/RELATIVE) ABOUT VGN HOMES PROPERTIES`,
    },
    {
      img: icon2,
      text: `MR. A VISITS A PROJECT THAT GETS HIM INTERESTED`,
    },
    {
      img: icon3,
      text: `MR. A IS INTERESTED AND BOOKS A PLOT/FLAT/VILLA AT VGN HOMES`,
    },
    {
      img: icon4,
      text: `CONGRATULATIONS! YOU WIN AN AMAZING REWARD FOR REFERRING MR. A`,
    },
  ];

  return (
    <section className="property-section program-back latest-property-section mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="pd-widget mb-0">
              <div className="heading text-center">
                <h4>
                  <span className="head-border">
                    <img src={headBorder} alt="head-border" />
                  </span>
                  Let's see how easy this program is!
                </h4>
              </div>

              <div className="profile-agent-content">
                <div className="row">
                  {steps.map((item, index) => (
                    <div
                      className="col-lg-3 col-md-6"
                      key={index}
                     
                    >
                      <div className="serviceBox91">
                        <div className="service-icon91">
                          <img
                            src={item.img}
                            alt={`Step ${index + 1}`}
                            className=""
                          />
                        </div>
                        <div className="service-content91">
                          <p className="description91">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
