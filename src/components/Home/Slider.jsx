import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import Slider_1 from "@/assets/slider/slider-1.jpg";
import Slider_2 from "@/assets/slider/slider-2.jpg";
import Slider_3 from "@/assets/slider/slider-3.jpg";
import Slider_4 from "@/assets/slider/slider-4.jpg";
import Slider_5 from "@/assets/slider/slider-5.jpg";
import Slider_6 from "@/assets/slider/slider-6.jpg";

import SliderMob_1 from "@/assets/slider/sliderMob-1.jpg";
import SliderMob_2 from "@/assets/slider/sliderMob-2.png";
import SliderMob_3 from "@/assets/slider/sliderMob-3.png";
import SliderMob_4 from "@/assets/slider/sliderMob-4.jpg";
import SliderMob_5 from "@/assets/slider/sliderMob-5.png";
import SliderMob_6 from "@/assets/slider/sliderMob-6.jpg";

/* one object per slide → desktop + mobile variants */
const slides = [
  { desktop: Slider_5, mobile: SliderMob_5 },
  { desktop: Slider_6, mobile: SliderMob_6 },
  { desktop: Slider_4, mobile: SliderMob_4 },
  { desktop: Slider_3, mobile: SliderMob_3 },
  { desktop: Slider_1, mobile: SliderMob_1 },
  { desktop: Slider_2, mobile: SliderMob_2 },
];

export default function CarouselFade() {
  const [isMobile, setIsMobile] = useState(false);

  /* watch the viewport width */
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 575.98px)"); // <576 px = mobile
    const handler = (e) => setIsMobile(e.matches);
    handler(mq); // set initial state
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <Carousel
      fade
      interval={5000}
      indicators
      controls
      pause={false}
      ride="carousel"
      className="w-100"
    >
      {slides.map((slide, i) => (
        <Carousel.Item key={i}>
          <img
            className="d-block w-100"
            src={isMobile ? slide.mobile : slide.desktop}
            alt={`Slide ${i + 1}`}
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
