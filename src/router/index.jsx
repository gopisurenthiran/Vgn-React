import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Values from "@/pages/Values";
import Chairman from "@/pages/Chairman";
import OurPeople from "@/pages/OurPeople";
import Testimonial from "@/pages/Testimonial";

import OngoingProjects from "@/pages/OngoingProjects";
import CompletedProjects from "@/pages/CompletedProjects";

import VgnKrystalPeak from "../pages/VgnKrystalPeak";
import VgnHeritage from "@/pages/VgnHeritage";
import VgnGrandeur from "@/pages/VgnGrandeur";
import VgnAspireGardens from "@/pages/VgnAspireGardens";
import VgnPrideVilla from "@/pages/VgnPrideVilla";
import VgnParadise from "@/pages/VgnParadise";
import VgnHighland from "@/pages/VgnHighland";
import VgnHorizon from "@/pages/VgnHorizon";
// import VgnClassique from "@/pages/VgnClassique";
import VgnPride from "@/pages/VgnPride";
import VgnMugavari from "@/pages/VgnMugavari";
// import VgnWestField from "@/pages/VgnWestfield";
// import VgnWindsorpark from "@/pages/VgnWindsorpark";
// import VgnSouthernMedows from "@/pages/VgnSouthernMedows";
import VgnVarnabhoomi from "@/pages/VgnVarnabhoomi";
import VgnSamudra from "@/pages/VgnSamudra";

import Channel from "@/pages/Channel";
import Land from "@/pages/Land";
import Nri from "@/pages/Nri";
import Irefer from "@/pages/Irefer";
import Customer from "@/pages/Customer";
import Emi from "@/pages/Emi";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";

import Privacy from "@/pages/Privacy";
import Disclaimer from "@/pages/Disclaimer";
import Terms from "../pages/Terms";
import BlogGrid from "../pages/BlogGrid";
import BlogDetail from "../pages/BlogDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "values", element: <Values /> },
      { path: "chairman", element: <Chairman /> },
      { path: "our-people", element: <OurPeople /> },
      { path: "testimonial", element: <Testimonial /> },
      
      { path: "ongoing-project", element: <OngoingProjects /> },
      { path: "completed-project", element: <CompletedProjects /> },
      
      {path: "vgn-krystal-peak/index", element:<VgnKrystalPeak/>},
      { path: "vgn-heritage-springz/index", element: <VgnHeritage /> },
      { path: "vgn-grandeur/index", element: <VgnGrandeur /> },
      { path: "vgn-aspire-gardens/index", element: <VgnAspireGardens /> },
      { path: "vgn-pride-de-villa/index", element: <VgnPrideVilla /> },
      { path: "vgn-paradise/index", element: <VgnParadise /> },
      { path: "vgn-highland/index", element: <VgnHighland /> },
      { path: "vgn-horizon/index", element: <VgnHorizon /> },
      // { path: "vgn-classique/index", element: <VgnClassique /> },
      { path: "vgn-pride/index", element: <VgnPride /> },
      { path: "vgn-mugavari-phase2/index", element: <VgnMugavari /> },
      // { path: "vgn-westfield/index", element: <VgnWestField /> },
      // { path: "vgn-windsorpark-phase4-1g/index", element: <VgnWindsorpark /> },
      // { path: "vgn-southernmeadows/index", element: <VgnSouthernMedows /> },
      { path: "vgn-varnabhoomi/index", element: <VgnVarnabhoomi /> },
      { path: "vgn-samudra/index", element: <VgnSamudra /> },

      { path: "channel-partner", element: <Channel /> },
      { path: "land-enquiry", element: <Land /> },
      { path: "nri", element: <Nri /> },
      { path: "irefer", element: <Irefer /> },
      { path: "customer-support", element: <Customer /> },
      { path: "emi-calculator", element: <Emi /> },
      { path: "contact", element: <Contact /> },
      { path: "careers", element: <Careers /> },
      { path: "privacy-policy", element: <Privacy /> },
      { path: "disclaimer", element: <Disclaimer /> },
      { path: "terms-and-conditions", element: <Terms /> },
      {path:"/blogs", element:<BlogGrid/>},
      {path:"/blog/:slug", element:<BlogDetail/>},
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
