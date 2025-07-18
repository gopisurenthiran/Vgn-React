import { useEffect, useRef, useState } from "react";

import Banner from '../components/VgnMugavari/Banner.jsx'
import EnquiryForm from '../components/VgnMugavari/EnquiryForm.jsx'
import ExploreProjects from '../components/VgnMugavari/ExploreProjects.jsx'
import "../style/VgnMugavari.css";

import BrandIconSection from "../components/BrandIconSection.jsx";
import SubFooter from "../components/VgnMugavari/SubFooter.jsx";
import Faq from "../components/Nri/Faq.jsx";
import SubNav from "../components/VgnMugavari/SubNav.jsx";



export default function VgnMugavari() {
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
         {/* ✅ Content */}
      <EnquiryForm />
      <ExploreProjects />
      <Faq/>
      <BrandIconSection />
      <SubFooter />
      </div>
    </div>
  );
}