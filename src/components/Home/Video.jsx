import React from 'react';


export default function Video() {
  return (
    <section className="contact-form-section container-fluid" style={{ backgroundSize: 'cover', marginBottom: 0 , background: '#fef7ef'}}>
      <div className="container">
        <div className="row">
          {/* Left Text Content */}
          <div className="col-lg-6" style={{ background: '#bf151a' }}>
            <div className="pd-widget people-text home-video-sec1" id="about-vgn" style={{ marginTop: 0, padding: '40px' }}>
              <h4 className="home-head1 text-white">
                Experience<br />Future-Ready<br />Living:
              </h4>
              <p className="home-txt1 text-white">
                Step into the future of urban living with VGN's groundbreaking development projects. In this immersive 3D visualization, witness the meticulous planning and innovative infrastructure systems integrated into VGN's residential plots.
              </p>
              <p className="home-txt1 text-white">
                From underground electrical trench systems to metro water lines, sewage systems, stormwater drain systems, and piped natural gas provisions, VGN is redefining the standard of modern living. Our commitment to sustainability, efficiency, and convenience shines through in every aspect of our developments.
              </p>
            </div>
          </div>

          {/* Right Video Section */}
          <div className="col-lg-6 p-0">
            <div id="video-background">
              <div id="video-container" className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/US7WuUdQ4j8?si=reCnf2sQp2UigR7e"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
