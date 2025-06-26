import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from "@/components/ScrollToTop";
import BrandIconSection from '../components/BrandIconSection';
import ToTopContact from '../components/ToTop';

export default function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100 w-100">
      <ScrollToTop />
      {/* Full-width Header */}
      <Header />

      {/* Main content with no container constraint */}
      <main className="flex-fill w-100">
        
        <Outlet />
      </main>
       {/* <BrandIconSection/> */}
      {/* Full-width Footer */}
      <ToTopContact />
      
      <Footer />
    </div>
  );
}
