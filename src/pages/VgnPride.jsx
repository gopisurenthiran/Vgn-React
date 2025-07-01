import { useEffect, useRef, useState } from "react";

import Banner from '../components/VgnPride/Banner.jsx'
import EnquiryForm from '../components/VgnPride/EnquiryForm.jsx'
import ExploreProjects from '../components/VgnPride/ExploreProjects.jsx'
import "../style/VgnPride.css";
import SubNav from "../components/VgnPride/SubNav.jsx";
import BrandIconSectionInner from "../components/BrandIconSectionIneer.jsx";
import SubFooter from "../components/VgnPride/SubFooter.jsx";

export default function VgnPride() {
   const bannerRef = useRef(null);
  const [showSubNav, setShowSubNav] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setShowSubNav(entry.intersectionRatio < 0.3);

      // Toggle main navbar visibility
      const mainNavbar = document.querySelector(".custom-navbar");
      if (mainNavbar) {
        if (entry.intersectionRatio < 0.3) {
          mainNavbar.classList.add("d-none");
        } else {
          mainNavbar.classList.remove("d-none");
        }
      }
    },
    {
      root: null,
      threshold: [0, 0.3, 1],
    }
  );

  if (bannerRef.current) observer.observe(bannerRef.current);
  return () => {
    if (bannerRef.current) observer.unobserve(bannerRef.current);
  };
}, []);

  return (
    <div>
      {/* ✅ Banner */}
      <div ref={bannerRef}>
        <Banner />
      </div>

      {/* ✅ SubNav */}
      {showSubNav && <SubNav />}

      {/* ✅ Content */}
      <EnquiryForm />
      <ExploreProjects />
      <BrandIconSectionInner />
      <SubFooter />
    </div>
  );
}
