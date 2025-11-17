import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import Slider_1 from "@/assets/vgn-paradise/hero-1.jpg";
import Slider_2 from "@/assets/vgn-paradise/hero-2.jpg";
import Slider_3 from "@/assets/vgn-paradise/hero-3.jpg";
import Slider_4 from "@/assets/vgn-paradise/hero-4.jpg";
import Slider_5 from "@/assets/vgn-paradise/hero-6.jpg";
import Slider_6 from "@/assets/vgn-paradise/hero-7.jpg";
import Slider_7 from "@/assets/vgn-paradise/vgn-1.jpg";
import Slider_1_Mobile from "@/assets/vgn-paradise/hero-1-1.png"; // Example mobile images
import Slider_2_Mobile from "@/assets/vgn-paradise/hero-2-1.png";
import Slider_3_Mobile from "@/assets/vgn-paradise/hero-3-1.png";
import Slider_4_Mobile from "@/assets/vgn-paradise/hero-4-1.png";
import Slider_5_Mobile from "@/assets/vgn-paradise/hero-6-1.png";
import Slider_6_Mobile from "@/assets/vgn-paradise/hero-7-1.png";
import Slider_7_Mobile from "@/assets/vgn-paradise/vgnmob-1.jpg";

const slides = [
  {
    image: Slider_7,
    mobileImage: Slider_7_Mobile,
    title: '',
    description: '',
  },
  {
    image: Slider_1,
    mobileImage: Slider_1_Mobile,
    title: '',
    description: '',
  },
  {
    image: Slider_2,
    mobileImage: Slider_2_Mobile,
    title: '',
    description: '',
  },
   {
    image: Slider_3,
    mobileImage: Slider_3_Mobile,
    title: '',
    description: '',
  },
   {
    image: Slider_4,
    mobileImage: Slider_4_Mobile,
    title: '',
    description: '',
  },
   {
    image: Slider_5,
    mobileImage: Slider_5_Mobile,
    title: '',
    description: '',
  },
   {
    image: Slider_6,
    mobileImage: Slider_6_Mobile,
    title: '',
    description: '',
  },
];

function Banner() {
  return (
    <div className="w-100">
      <Carousel
        fade
        interval={5000}
        indicators
        controls
        pause={false}
        ride="carousel"
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            {/* Desktop Image */}
            <img
              className="d-none d-sm-block w-100"
              src={slide.image}
              alt={`Slide ${index + 1}`}
              style={{
                width: '100%',
                objectFit: 'cover',
              }}
            />

            {/* Mobile Image */}
            <img
              className="d-block d-sm-none w-100"
              src={slide.mobileImage}
              alt={`Slide ${index + 1} Mobile`}
              style={{
                width: '100%',
                objectFit: 'cover',
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
