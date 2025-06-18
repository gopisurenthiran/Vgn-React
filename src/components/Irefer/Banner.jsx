import 'bootstrap/dist/css/bootstrap.min.css';
import irefer from '@/assets/Irefer-back.jpg'
import irefer1 from '@/assets/Irefer-back1.png'

const Banner = () => {
  return (
<section className="breadcrumb-section">
  {/* Desktop Image */}
  <img
    src = {irefer}
    alt="Desktop Banner"
    className="w-100 d-none d-md-block"
  />

  {/* Mobile Image */}
  <img
    src= {irefer1}
    alt="Mobile Banner"
    className="w-100 d-block d-md-none"
    style={{ imageRendering: 'pixelated' }}
  />
</section>
  );
};

export default Banner;