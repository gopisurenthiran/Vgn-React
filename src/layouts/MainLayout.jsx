import { Outlet } from 'react-router-dom';
import Footer from '@/components/Footer';
import ScrollToTop from "@/components/ScrollToTop";
import BrandIconSection from '../components/BrandIconSection';
import ToTopContact from '../components/ToTop';
import NavigationBar from '../components/Header';
import Navigation from '../components/NavigationBar';

export default function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100 w-100">
      <ScrollToTop />
      {/* Full-width Header */}
      {/* <NavigationBar /> */}
      <Navigation />
      {/* Main content with no container constraint */}
      <main className=" w-100">
        
        <Outlet />
      </main>
       {/* <BrandIconSection/> */}
      {/* Full-width Footer */}
      <ToTopContact />
      
      <Footer />
    </div>
  );
}
