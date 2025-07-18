import React, { useEffect, useState } from "react";
import "./subnav.css";

const sections = [
  ["about-vgn", "About"],
  ["highlights", "Projects Highlights"],
  ["plots", "Why Plots"],
  ["amenities", "Park Amenities"],
  ["clubhouse", "Clubhouse Amenities"],
  ["advantages", "Location Advantages"],
  ["map", "Location"],
  ["gallery", "Gallery"],
  ["contact", "Contact"],
];

export default function SubNav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-130px 0px 0px 0px", // Adjust for sticky header
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    const targets = sections.map(([id]) => document.getElementById(id));
    targets.forEach((target) => {
      if (target) observer.observe(target);
    });

    return () => {
      targets.forEach((target) => {
        if (target) observer.unobserve(target);
      });
    };
  }, []);

  const handleScrollToSection = (id, e) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const offset = window.innerWidth < 768 ? 90 : 130;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveSection(`#${id}`);
    }
  };

  return (
    <div className="subnav-tabs-wrapper">
      <ul className="nav nav-tab">
        {sections.map(([id, label]) => (
          <li className="nav-item" key={id}>
            <a
              className={`nav-link ${activeSection === `#${id}` ? "active" : ""}`}
              href={`#${id}`}
              onClick={(e) => handleScrollToSection(id, e)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}


