import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./subnav.css";

const sections = [
  ["about-vgn", "About"],
  ["highlights", "Projects Highlights"],
  ["plots", "Why Plots"],
  ["amenities", "Clubhouse Amenities"],
  ["advantages", "Location Advantages"],
  ["360view", "360 View"],
   ["video", "Video"],
  ["map", "Location"],
  ["route", "Route"],
 
];

export default function SubNav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let found = "";

      for (let [id] of sections) {
        // Use CSS.escape to safely use id in querySelector
        const el = document.querySelector(`#${CSS.escape(id)}`);
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
              to={`#${href}`}
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



