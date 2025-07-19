import React from "react";
import { FaObjectGroup, FaBuilding, FaCalendar } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import "bootstrap/dist/css/bootstrap.min.css";


import completedProjects from "@/data/Completed";

export default function CompletedProjects() {
  return (
    <section className="property-section spad aos-animate bg" data-aos="zoom-in">
      <div className="container">
        <div className="row">
          {completedProjects.map((project, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="as-item2" style={{float: "left"}}>
                <div className="property-item" style={{ marginbottom: "0px;" }}>
                  <div className="content">
                    <div className="grid">
                      <figure className="effect-goliath">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="img-fluid"
                        />
                        <div className="completed">
                          <h2 className="project-name">{project.name}</h2>
                        </div>
                        <figcaption>
                          <div className="complete-details w-100 text-end">
                            <div className="row">
                              <div className="col-lg-9 colleft col-md-6  text-start">
                                <span className="sq-txt">
                                  <FaObjectGroup className="me-1" />
                                  {project.size}
                                </span>
                              </div>
                              <div className="col-lg-3 colright col-md-6  text-end">
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
                  <div className="pi-text pi-text1">
                    <ul className="list-unstyled">
                      <div className="row px-3">
                        <div className="col-lg-9 col-md-12">
                          <li>
                           <span> <HiOutlineLocationMarker className="me-1" /></span> 
                            {project.location}
                          </li>
                        </div>
                        <div className="col-lg-3 col-md-12 text-right">
                          <li>
                          <span> <FaCalendar className="me-1" /></span>  
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
