import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountUp from 'react-countup';
import headBorder from '/head-border.png'; // Adjust path accordingly

const stats = [
  { value: 81, suffix: '+', label: 'Years of business expertise' },
  { value: 240, suffix: '+', label: 'Projects' },
  { value: 60000, suffix: '+', label: 'Happy Customers' },
  { value: 1000, suffix: '+', label: 'Acres of plot property developed' },
  { value: 20, suffix: '', label: 'Million sq.ft. of residential projects' },
];

const AboutUsSection = () => {
  return (
    <section className="property-section spad bg py-5">
      <div className="container">
        {/* Section Title */}
        <div className="row text-center mb-4">
          <div className="col-lg-12">
            <h4 className="heading">
              <span className="head-border">
                <img src={headBorder} alt="section-divider" />
              </span>{' '}
              About Us
            </h4>
          </div>
        </div>

        {/* About Content */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="pd-widget" id="about-vgn">
              {[
                "Founded in 1942, VGN is a leader, visionary and a pioneer in the real estate business and stands out distinctly among its competitors. Headquartered in Chennai, we are one of the oldest and most trusted real estate companies, certified by ISO 14001:2004. Years of experience helped us create our own path by understanding our customer’s desires and helped us improve their quality of life by providing them with the best projects. And this has helped us become a brand that customers deeply trust.",
                "We always believed in going the extra mile for our customers. That’s why just ordinary plotted developments weren’t enough. Every idea, every unique feature, and our passion reflected in our projects, and our customer family grew rapidly, making us a trustworthy brand.",
                "Our projects are spread across the city with plenty of happy families and investors reaping from their investments. Residential, commercial, retail and plots, we develop and transform land of every kind. With our expertise in consumer behavior, we have offered plots with unmatched quality, right from affordable to ultra-luxury.",
                "As much as we take pride in our range of offering, we are also proud of our industry-best practices, transparency and customer service. And this inspires us to do more and venture into many more challenges with confidence.",
              ].map((para, idx) => (
                <p className="text-center" key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>

        {/* VGN Advantages Title */}
        <div className="row mb-4">
          <div className="col-lg-12">
            <h4 className="heading text-center">
              <span className="head-border">
                <img src={headBorder} alt="section-divider" />
              </span>{' '}
              VGN Advantages
            </h4>
          </div>
        </div>

        {/* VGN Advantages Stats */}
        <div className="row justify-content-center text-center g-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`col-6 col-md-2 d-flex flex-column align-items-center stat-item ${
                index !== stats.length - 1 ? 'border-end' : ''
              }`}
            >
              <h2 className="fw-bold mb-1">
                <CountUp end={stat.value} duration={2.5} />{stat.suffix}
              </h2>
              <p className="mb-0 small">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
