import { useEffect, useRef, useState } from "react";
import Banner from "../components/VgnKrystalPeak/Banner.jsx";
import EnquiryForm from "../components/VgnKrystalPeak/EnquiryForm.jsx";
import ExploreProjects from "../components/VgnGrandeur/ExploreProjects.jsx";

import "../style/VgnKrystal.css";
import SubFooter from "../components/VgnGrandeur/SubFooter.jsx";
import BrandIconSectionInner from "../components/BrandIconSectionIneer.jsx";
import Rera from "../components/VgnGrandeur/Rera.jsx";
import Faq from "../components/Nri/Faq.jsx";
import SubNav from "../components/VgnKrystalPeak/SubNav.jsx";



export default function VgnKrystalPeak() {
  const bannerRef = useRef(null);
  const [showSubNav, setShowSubNav] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSubNav(entry.intersectionRatio < 0.3);

        const mainNavbar = document.querySelector(".custom-navbar");
        if (mainNavbar) {
          if (entry.intersectionRatio < 0.3) {
            mainNavbar.classList.add("d-none");
          } else {
            mainNavbar.classList.remove("d-none");
          }
        }
      },
      { root: null, threshold: [0, 0.3, 1] }
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

      {/* ✅ Sticky SubNav */}
      {showSubNav && <SubNav/>}

      {/* ✅ Page Sections */}
      <div className="pt-20 md:pt-28">
        {/* ✅ Content */}
      <EnquiryForm/>
      <ExploreProjects />
      <Faq/>
      <Rera />
      <SubFooter />
      </div>
    </div>
  );
}
