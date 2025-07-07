import React, { useEffect, useState } from "react";
import "./subnav.css";

const sections = [
  ["#about-vgn", "About"],
  ["#features", "Features"],
  ["#amenities", "Amenities"],
  ["#clubhouse", "Club House"],
  ["#advantages", "Location Advantages"],
  ["#gallery", "Gallery"],
  ["#video", "Video"],
  ["#map", "Location"],
  ["#route", "Route"],
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
      <ul className="nav nav-tab scroll-tabs">
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
