import { useEffect, useRef, useState } from "react";
import Banner from '../components/Vgnvarnabhoomi/Banner';
import EnquiryForm from '../components/Vgnvarnabhoomi/EnquiryForm';
import ExploreProjects from '../components/Vgnvarnabhoomi/ExploreProjects';
import "../style/Vgnvarnabhoomi.css";
import BrandIconSectionInner from "../components/BrandIconSectionIneer";
import SubFooter from "../components/Vgnvarnabhoomi/SubFooter";

export default function Vgnvarnabhoomi() {
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
