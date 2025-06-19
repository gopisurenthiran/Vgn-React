import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Values from "@/pages/Values";
import Chairman from "@/pages/Chairman";
import OurPeople from "../pages/OurPeople";
import Testimonial from "../pages/Testimonial";
import OngoingProjects from "@/pages/OngoingProjects";
import VgnGrandeur from "@/pages/VgnGrandeur";
import VgnAspireGardens from "@/pages/VgnAspireGardens";
import VgnPride from "@/pages/VgnPride";
import VgnParadise from "../pages/VgnParadise";
import VgnHighland from "../pages/VgnHighland";
import VgnHorizon from "../pages/VgnHorizon";
import Channel from "@/pages/Channel";
import Land from "@/pages/Land";
import Nri from "@/pages/Nri";
import Irefer from "@/pages/Irefer";
import Customer from "@/pages/Customer";
import  Emi  from '@/pages/Emi';
import Careers from '@/pages/Careers';
import  Contact  from '@/pages/Contact';


import CompletedProjects from "@/pages/CompletedProjects";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Layout includes Header and Footer
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "values", element: <Values /> },
      { path: "chairman", element: <Chairman /> },
      { path: "our-people", element: <OurPeople /> },
      { path: "testimonial", element: <Testimonial /> },
      { path: "ongoing-project", element: <OngoingProjects /> },
      { path: "vgn-grandeur/index", element: <VgnGrandeur /> },
      { path: "vgn-aspire-gardens/index", element: <VgnAspireGardens /> },
      { path: "vgn-pride-de-villa/index", element: <VgnPride /> },
      { path: "vgn-paradise/index", element: <VgnParadise /> },
      { path: "vgn-highland/index", element: <VgnHighland /> },
      { path: "vgn-horizon/index", element: <VgnHorizon /> },
      { path: "completed-project", element: <CompletedProjects /> },
      { path: "channel-partner", element: <Channel /> },
      { path: "land-enquiry", element: <Land /> },
      { path: "nri", element: <Nri /> },
      { path: "irefer", element: <Irefer /> },
      { path: "customer-support", element: <Customer /> },
      { path: "emi-calculator", element: <Emi /> },
      { path: "contact", element: <Contact /> },
      {path: "careers", element: <Careers />}
     
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
