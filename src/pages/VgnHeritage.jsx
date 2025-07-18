import { useEffect, useRef, useState } from "react";

import BrandIconSectionInner from "../components/BrandIconSectionIneer";
import Banner from "../components/VgnHeritage/Banner";
import EnquiryForm from "../components/VgnHeritage/EnquiryForm";
import ExploreProjects from "../components/VgnHeritage/ExploreProjects";
import SubFooter from "../components/VgnHeritage/SubFooter";
import Faq from "../components/Nri/Faq";

import '../style/VgnHeritage.css';
import SubNav from "../components/VgnHeritage/SubNav";


export default function VgnHeritage() {
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
      {showSubNav && <SubNav />}

      {/* ✅ Page Sections */}
      <div className="pt-20 md:pt-28">
        <EnquiryForm />
        <ExploreProjects />
        <Faq />
        <BrandIconSectionInner />
        <SubFooter />
      </div>
    </div>
  );
}
