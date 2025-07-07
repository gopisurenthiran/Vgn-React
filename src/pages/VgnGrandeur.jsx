import { useEffect, useRef, useState } from "react";
import Banner from "../components/VgnGrandeur/Banner.jsx";
import EnquiryForm from "../components/VgnGrandeur/EnquiryForm.jsx";
import ExploreProjects from "../components/VgnGrandeur/ExploreProjects.jsx";

import "../style/VgnGrandeur.css";
import SubFooter from "../components/VgnGrandeur/SubFooter.jsx";
import BrandIconSectionInner from "../components/BrandIconSectionIneer.jsx";


export default function VgnGrandeur() {
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

     
      {/* ✅ Content */}
      <EnquiryForm />
      <ExploreProjects />
      <BrandIconSectionInner />
      <SubFooter />
    </div>
  );
}
