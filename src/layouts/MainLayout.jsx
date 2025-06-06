import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export default function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100 w-100">
      {/* Full-width Header */}
      <Header />

      {/* Main content with no container constraint */}
      <main className="flex-fill w-100">
        
        <Outlet />
      </main>

      {/* Full-width Footer */}
      <Footer />
    </div>
  );
}
