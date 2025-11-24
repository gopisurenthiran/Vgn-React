import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // 👈 React Router link
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import Slider_1 from "@/assets/slider/slider-1.jpg";
import Slider_2 from "@/assets/slider/slider-2.jpg";
import Slider_3 from "@/assets/slider/slider-3.jpg";
import Slider_4 from "@/assets/slider/slider-4.jpg";
import Slider_5 from "@/assets/slider/slider-5.jpg";
import Slider_6 from "@/assets/slider/slider-6.jpg";
import Slider_7 from "@/assets/slider/slider-7.jpg";
import Slider_8 from "@/assets/slider/vgn-grandeur.jpg";
import Slider_9 from "@/assets/slider/slider-8.jpg";

import SliderMob_1 from "@/assets/slider/sliderMob-1.jpg";
import SliderMob_2 from "@/assets/slider/sliderMob-2.png";
import SliderMob_3 from "@/assets/slider/sliderMob-3.png";
import SliderMob_4 from "@/assets/slider/sliderMob-4.jpg";
import SliderMob_5 from "@/assets/slider/sliderMob-5.png";
import SliderMob_6 from "@/assets/slider/sliderMob-6.jpg";
import SliderMob_7 from "@/assets/slider/sliderMob-7.jpg";
import SliderMob_8 from "@/assets/slider/vgn-grandeur-mob.jpg";
import SliderMob_9 from "@/assets/slider/sliderMob-8.jpg";

/* Add link for each slide */
const slides = [
  { desktop: Slider_9, mobile: SliderMob_9, link: "/" },
  { desktop: Slider_8, mobile: SliderMob_8, link: "/vgn-grandeur/index" },
  { desktop: Slider_7, mobile: SliderMob_7, link: "/vgn-paradise/index" },
  // { desktop: Slider_5, mobile: SliderMob_5, link: "#" },
  // { desktop: Slider_6, mobile: SliderMob_6, link: "/vgn-paradise/index" },
  // { desktop: Slider_4, mobile: SliderMob_4, link: "/vgn-grandeur/index" },
  { desktop: Slider_3, mobile: SliderMob_3, link: "/vgn-aspire-gardens/index" },
  { desktop: Slider_1, mobile: SliderMob_1, link: "/vgn-highland/index" },
  { desktop: Slider_2, mobile: SliderMob_2, link: "/vgn-pride-de-villa/index" },
];

export default function CarouselFade() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 575.98px)");
    const handler = (e) => setIsMobile(e.matches);
    handler(mq);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <Carousel fade interval={5000} indicators controls pause={false} ride="carousel" className="w-100">
      {slides.map((slide, i) => (
        <Carousel.Item key={i}>
          <Link to={slide.link}>
            <img
              className="d-block w-100"
              src={isMobile ? slide.mobile : slide.desktop}
              alt={`Slide ${i + 1}`}
              style={{ objectFit: "cover", cursor: "pointer" }}
              loading="lazy"
            />
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
