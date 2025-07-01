import BrandIconSectionInner from '../components/BrandIconSectionIneer.jsx';
import Banner from '../components/VgnAspire/Banner.jsx';
import EnquiryForm from '../components/VgnAspire/EnquiryForm.jsx';
import ExploreProjects from '../components/VgnAspire/ExploreProjects.jsx';
import SubFooter from '../components/VgnAspire/SubFooter.jsx';
import SubNav from '../components/VgnAspire/SubNav.jsx';
import "../style/VgnAspire.css";
import { useEffect, useRef, useState } from "react";


export default function VgnAspireGardens() {
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
