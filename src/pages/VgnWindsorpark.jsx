import { useEffect, useRef, useState } from "react";
import Banner from '../components/VgnWindsorpark/Banner';
import EnquiryForm from '../components/VgnWindsorpark/EnquiryForm';
import ExploreProjects from '../components/VgnWindsorpark/ExploreProjects';
import "../style/VgnWindsorpark.css";
import SubNav from "../components/VgnWindsorpark/SubNav";
import BrandIconSectionInner from "../components/BrandIconSectionIneer";
import SubFooter from "../components/VgnWindsorpark/SubFooter";

export default function VgnWindsorpark() {
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
