import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import Slider_1 from "@/assets/slider/slider-1.jpg";
import Slider_2 from "@/assets/slider/slider-2.jpg";
import Slider_3 from "@/assets/slider/slider-3.jpg";
import Slider_4 from "@/assets/slider/slider-4.jpg";
import Slider_5 from "@/assets/slider/slider-5.jpg";
import Slider_6 from "@/assets/slider/slider-6.jpg";

// Dynamic slide data
const slides = [
  {
    image: Slider_1,
    title: '',
    description: '',
  },
  {
    image: Slider_2,
    title: '',
    description: '',
  },
  {
    image: Slider_3,
     title: '',
    description: '',
  },
  {
    image: Slider_4,
     title: '',
    description: '',
  },
  {
    image: Slider_5,
     title: '',
    description: '',
  },
  {
    image: Slider_6,
     title: '',
    description: '',
  },
];

function CarouselFade() {
  return (
    <div className="w-100">
 <Carousel
  fade
  interval={5000}
  indicators
  controls
  pause={false}   // Ensures auto-slide doesn't stop on hover
  ride="carousel" // Starts the animation when component loads
>
  {slides.map((slide, index) => (
    <Carousel.Item key={index}>
      <img
        className="d-block w-100"
        src={slide.image}
        alt={`Slide ${index + 1}`}
        style={{
          width: '1272px',
          objectFit: 'cover',
        }}
      />
      {/* Optional Caption */}
      {/* <Carousel.Caption>...</Carousel.Caption> */}
    </Carousel.Item>
  ))}
</Carousel>

    </div>
  );
}

export default CarouselFade;
