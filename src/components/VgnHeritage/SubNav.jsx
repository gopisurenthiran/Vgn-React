import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./subnav.css";

const sections = [
  ["#about-vgn", "About"],
  ["#highlights", "Project Highlights"],
  ["#amenities", "Amenities"],
  ["#advantages", "Location Advantages"],
  ["#3dwalkthrough", "3D Walkthrough"],

  ["#map", "Location"],
  ["#contact", "Contact"],
];

export default function SubNav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let found = "";

      for (let [id] of sections) {
        const el = document.querySelector(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const topOffset = window.innerWidth < 768 ? 90 : 130;
          if (rect.top <= topOffset && rect.bottom >= topOffset) {
            found = id;
            break;
          }
        }
      }

      setActiveSection((prev) => (prev !== found ? found : prev));
    };

    window.addEventListener("scroll", handleScroll);
    const timeout = setTimeout(() => {
      handleScroll();
    }, 300);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="subnav-tabs-wrapper">
      <ul className="nav nav-tab justify-content-start justify-content-md-end flex-nowrap">
        {sections.map(([href, label]) => (
          <li className="nav-item" key={href}>
            <Link
              className={`nav-link ${activeSection === href ? "active" : ""}`}
              to={href}
              smooth
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
