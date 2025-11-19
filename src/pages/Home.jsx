import React from 'react';
import { Button } from 'react-bootstrap';
import CarouselFade from '@/components/Home/Slider';
import Trust from '@/components/Home/Trust';
import Video from '@/components/Home/Video';
import EnquiryForm from '../components/Home/EnquiryForm';
import VgnAdvantages from '../components/Home/VgnAdvantages';

import Property from '../components/Home/Property';
import UpcomingProjects from '../components/Home/UpcomingProjects';
import BrandIconSection from '../components/BrandIconSection';
import TrustTestimonials from '../components/Testimonial/TrustTestimonials';
import VideoTestimonialsSlider from '../components/Home/VideoTestimonialsSlider';


export default function Home() {
  return (
    <div>
      <CarouselFade />
      <Trust/>
      <Property/>
      <UpcomingProjects />
       <Video/>
       <EnquiryForm/>
       <VideoTestimonialsSlider />
       <VgnAdvantages/>
       <BrandIconSection/>
    </div>
  )
}
