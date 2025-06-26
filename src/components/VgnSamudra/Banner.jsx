import React from 'react';
import desktopImg from '@/assets/vgn-samudra/hero-1.jpg';
import mobileImg from '@/assets/vgn-samudra/hero-1-1.png';
import mainLogo from '@/assets/vgn-samudra/main-logo1.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div>
        <div className="hs-slider owl-carousel">
          <div className="hs-item set-bg">

            {/* Desktop Version */}
            <div className="desktop">
              <div className="banner main-banner">
                <div>
                  <div className="row">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-12 text-center banner1" >
                      <div className="hc-inner-text">
                        <div className="banner-txt item">
                          <div className="unbreakable-container">
                            <div className="unbreakable">
                              <span className="banner-txt2" style={{ textTransform: 'uppercase' }}>
                                Premium Plots
                              </span>
                              <p className="adj">
                                <span className="banner-txt21">
                                  At Thiruneermalai
                                  <br />
                                  (Near Chromepet)
                                </span>
                              </p>
                              <p className="adj">
                                <img
                                  src={mainLogo}
                                  alt="Main Logo"
                                  style={{ width: '200px', display: 'inline-block' }}
                                />
                              </p>
                            </div>
                            <span style={{ opacity: 1 }} className="avail-unit">
                              4.5 KMS from GST Road
                              <br />
                              2.5 Kms before Outer Ring Road
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src={desktopImg}
                  alt="Hero Desktop"
                  className="desktop"
                  style={{ width: '100%', cursor:'default'}}
                />
              </div>
            </div>

            {/* Mobile Version */}
            <div className="mobile">
              <div className="banner main-banner">
                <div className="row">
                  <div style={{ width: '100%' }}>
                    <div className="hc-inner-text">
                      <div className="banner-txt item">
                        <div className="unbreakable-container">
                          <div className="unbreakable">
                            <span className="banner-txt2" style={{ textTransform: 'uppercase' }}>
                              Premium Plots
                            </span>
                            <p className="adj">
                              <span className="banner-txt21">
                                At Thiruneermalai
                                <br />
                                (Near Chromepet)
                              </span>
                            </p>
                            <p className="adj">
                              <img
                                src={mainLogo}
                                alt="Main Logo"
                                style={{ width: '200px', display: 'inline-block' }}
                              />
                            </p>
                          </div>
                          <span className="avail-unit" style={{ opacity: 1 }}>
                            4.5 KMS from GST Road
                            <br />
                            2.5 Kms before Outer Ring Road
                          </span>
                        </div>
                      </div>
                    </div>
                    <img
                      src={mobileImg}
                      alt="Hero Mobile"
                      className="mobile"
                      style={{ width: '100%', position: 'relative' }}
                    />
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

export default HeroSection;
