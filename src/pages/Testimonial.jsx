import React from 'react';

import TestimonialBanner from '../components/Testimonial/TestimonialBanner';
import TestimonialSection from '../components/Testimonial/TestimonialSection';
import BrandIconSection from '../components/BrandIconSection';
import Testimonials from '../components/Testimonial/TrustTestimonials';




export default function Values() {
  return (
    <div>
    
      <TestimonialBanner/>
      <TestimonialSection/>
      {/* <Testimonials /> */}
      <BrandIconSection/>
    </div>
  )
}