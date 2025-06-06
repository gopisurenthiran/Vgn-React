import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountUp from 'react-countup';

import headBorder from '/head-border.png'; // Adjust path accordingly


const stats = [
  { value: 81, suffix: '+', label: 'Years of business expertise' },
  { value: 240, suffix: '+', label: 'Projects' },
  { value: 60000, suffix: '+', label: 'Happy Customers' },
  { value: 800, suffix: '+', label: 'Acres of plot property developed' },
  { value: 20, suffix: '', label: 'Million sq.ft. of residential projects' }
];


const AboutUsSection = () => {
  return (
    <section className="property-section latest-property-section spad bg">
      <div className="container">
        {/* Section Title */}
        <div className="row text-center">
          <div className="col-lg-12">
            <div className="section-title1">
              <h4 className="text-center">
                <span className="head-border">
                  <img src={headBorder} alt="section-divider" />
                </span>{' '}
                About Us
              </h4>
            </div>
          </div>
        </div>

        {/* About Content */}
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="pd-widget" id="about-vgn">
              <p className="text-center">
                Founded in 1942, VGN is a leader, visionary and a pioneer in the real estate business and stands out distinctly among its competitors. Headquartered in Chennai, we are one of the oldest and most trusted real estate companies, certified by ISO 14001:2004. Years of experience helped us create our own path by understanding our customer’s desires and helped us improve their quality of life by providing them with the best projects. And this has helped us become a brand that customers deeply trust.
              </p>
              <p className="text-center">
                We always believed in going the extra mile for our customers. That’s why just ordinary plotted developments weren’t enough. Every idea, every unique feature, and our passion reflected in our projects, and our customer family grew rapidly, making us a trustworthy brand.
              </p>
              <p className="text-center">
                Our projects are spread across the city with plenty of happy families and investors reaping from their investments. Residential, commercial, retail and plots, we develop and transform land of every kind. With our expertise in consumer behavior, we have offered plots with unmatched quality, right from affordable to ultra-luxury.
              </p>
              <p className="text-center">
                As much as we take pride in our range of offering, we are also proud of our industry-best practices, transparency and customer service. And this inspires us to do more and venture into many more challenges with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* VGN Advantages Title */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title1 mt-5 text-center">
              <h4 className="text-center">
                <span className="head-border">
                  <img src={headBorder} alt="section-divider" />
                </span>{' '}
                VGN Advantages
              </h4>
            </div>
          </div>
        </div>

        {/* VGN Advantages Grid */}
         <div className="">
            <div className="row justify-content-center text-center">
        {stats.map((stat, index) => (
          <div key={index} className="col-6 col-md-2 d-flex flex-column align-items-center border-end stat-item">
            <h2 className="fw-bold">
              <CountUp end={stat.value} duration={2.5} />{stat.suffix}
            </h2>
            <p className="mb-0">{stat.label}</p>
          </div>
        ))}
      </div>
     </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
