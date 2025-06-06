import React from 'react';
import { Button } from 'react-bootstrap';
import CarouselFade from './Slider';
import Trust from '@/components/Trust';
import Video from '@/components/Video';
import EnquiryForm from '../components/EnquiryForm';
import VgnAdvantages from '../components/VgnAdvantages';
import BrandIconSection from '../components/BrandIconSection';
import Property from '../components/Property';
import UpcomingProjects from '../components/UpcomingProjects';


export default function Home() {
  return (
    <div>
      <CarouselFade />
      <Trust/>
      <Property/>
      <UpcomingProjects />
       <Video/>
       <EnquiryForm/>
       <VgnAdvantages/>
       <BrandIconSection/>
    </div>
  )
}
