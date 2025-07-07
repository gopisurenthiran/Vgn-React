import React, { useEffect, useState } from "react";
import "./subnav.css";

const sections = [
  ["#about-vgn", "About"],
  ["#features", "Features"],
   ["#advantages", "Location Advantages"],
   ["#map", "Location"],
   ["#route", "Route Map"],
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
          const topOffset = window.innerWidth < 768 ? 90 : 130; // smaller offset for mobile
          if (rect.top <= topOffset && rect.bottom >= topOffset) {
            found = id;
            break;
          }
        }
      }

      // ✅ Only update if changed
      setActiveSection(prev => (prev !== found ? found : prev));
    };

    window.addEventListener("scroll", handleScroll);
    
    // ✅ Small delay to avoid early layout mismatch
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
      <ul className="nav nav-tab justify-content-start flex-nowrap">
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
