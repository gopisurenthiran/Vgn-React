import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ChairmanSection = () => {
  return (
    <section className="property-section latest-property-section spad bg">
      <div className="container">
        <div className="row">

          {/* Heading */}
          <div className="col-lg-12 text-center">
            <div className="heading">
              <h4 className="text-center" style={{ color: "#9b1306" }}>
                <span className="head-border"></span>
                MESSAGE FROM CHAIRMAN
              </h4>
            </div>
          </div>

          {/* Mobile image */}
          <div className="col-lg-4 chair-img mobile">
            <div className="pd-widget" id="about-vgn" style={{ position: "relative" }}>
              <img
                src="/chairman3.png"
                alt="Chairman"
                style={{ width: "100%" }}
              />
              <img
                src="/chariman-lable.png"
                alt="Label"
                style={{
                  width: "60px",
                  position: "absolute",
                  top: "-6px",
                  right: "10px",
                }}
              />
            </div>
          </div>

          {/* Text section */}
          <div className="col-lg-6 chair-txt">
            <div className="pd-widget people-text" id="about-vgn" style={{ marginTop: 0 }}>
              <p style={{ textAlign: "justify", fontWeight: 200 }}>
                When VGN was founded in 1942 as a brick manufacturing unit, it was the start of an incredible legacy. Today, VGN has 80+ years of expertise and 235+ projects to its name. We’re still here thriving through all the shifts in the industry and mindsets of homebuyers. It is with great pride that I say no one but our customers that have kept us going through the years! At VGN, we’ve never settled for ordinary.
              </p>
              <p style={{ textAlign: "justify", fontWeight: 200 }}>
               Right from the start, ordinary plots weren’t enough, we wanted to acquire the best lands and provide customers with a holistic experience. Many have guessed at the secret to VGN’s success. And the truth is - it’s fairly simple. To us, success is a business with loyal and trusting customers. And we take pride in having built this over the years. We don’t take for granted that we’re now one of the most trusted and ethical real estate developers in the city! Our goal is to continue flourishing well into the future. And this means being open to adopting new developments in the industry.
              </p>
              <p style={{ textAlign: "justify", fontWeight: 200 }}>
               Technology is altering the world, and we’re determined to change with the tide. Though, the implementation of technology for better results will take a few quarters to be seen, we’re resolute in seeing them through. The journey is never over. With the intention to consistently out-do ourselves and provide nothing short of the best for our customers, looking ahead, it’s safe to say you can expect only great things from VGN.
              </p>
              <h4 style={{ color: "#fff", fontWeight: 900, textTransform: "uppercase" }}>
                Mr. V N Devados
              </h4>
              <p style={{ color: "#fff", fontWeight: 200 }}>
             Chairman & Managing Director
              </p>
            </div>
          </div>

          {/* Desktop image */}
          <div className="col-lg-6 chair-img desktop p-0">
            <div className="pd-widget" id="about-vgn" style={{ position: "relative" }}>
              <img
                src="/chairman3.png"
                alt="Chairman"
                style={{ width: "100%" }}
              />
              <img
                src="/chariman-lable.png"
                alt="Label"
                style={{
                  width: "100px",
                  position: "absolute",
                  top: "-10px",
                  right: "-10px",
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChairmanSection;
