import React from "react";
import { FaObjectGroup, FaBuilding, FaCalendar } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import "bootstrap/dist/css/bootstrap.min.css";
import "./completed.css"
import completedProjects from "@/data/Completed";

export default function CompletedProjects() {
  return (
    <section className="property-section spad aos-animate bg" data-aos="zoom-in">
      <div className="container">
        <div className="row">
          {completedProjects.map((project, index) => (
            <div className="col-lg-4 col-md-6 mb-4 d-flex" key={index}>
              {/* Card Wrapper */}
              <div className="as-item2 w-100">
                <div className="property-item" style={{ marginBottom: "0px" }}>
                  <div className="content">
                    <div className="grid">
                      <figure className="effect-goliath">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="img-fluid project-image"
                        />
                        <div className="completed">
                          <h2 className="project-name">{project.name}</h2>
                        </div>

                        <figcaption>
                          <div className="complete-details w-100 text-end">
                            <div className="row">
                              <div className="col-8 text-start">
                                <span className="sq-txt">
                                  <FaObjectGroup className="me-1" />
                                  {project.size}
                                </span>
                              </div>
                              <div className="col-4 text-end">
                                <span className="plot-txt">
                                  <FaBuilding className="me-1" />
                                  {project.type}
                                </span>
                              </div>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="pi-text pi-text1">
                    <ul className="list-unstyled">
                      <div className="row px-3">
                        <div className="col-9">
                          <li>
                            <HiOutlineLocationMarker className="me-1" />
                            {project.location}
                          </li>
                        </div>
                        <div className="col-3 text-end">
                          <li>
                            <FaCalendar className="me-1" />
                            {project.year}
                          </li>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
