import React, { useEffect, useState } from "react";
import "./subnav.css";

const sections = [
  ["#about-vgn", "About"],
  ["#highlights", "Project Highlights"],
  ["#advantages", "Location Advantages"],
  ["#map", "Location"],
  ["#route", "Route Map"],
  ["#gallery", "Gallery"],
  ["#contact", "Contact"],
];

export default function SubNav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const topOffset = window.innerWidth < 768 ? 90 : 130;
      let currentSection = "";

      for (let i = 0; i < sections.length; i++) {
        const [id] = sections[i];
        const el = document.querySelector(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= topOffset && rect.bottom > topOffset) {
            currentSection = id;
            break; // Stop at the first matching section
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Call once on load

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [activeSection]);

  return (
    <div className="subnav-tabs-wrapper">
      <ul className="nav nav-tab">
        {sections.map(([href, label]) => (
          <li className="nav-item" key={href}>
            <a
              className={`nav-link ${activeSection === href ? "active" : ""}`}
              href={href}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
