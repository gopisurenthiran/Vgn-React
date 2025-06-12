import Banner from '../components/VgnGrandeur/Banner.jsx';
import EnquiryForm from '../components/VgnGrandeur/EnquiryForm.jsx';
import ExploreProjects from '../components/VgnGrandeur/ExploreProjects.jsx';
import "../style/vgn-page-1.css";

export default function VgnGrandeur() {
  return (
    <div>
     <Banner />
     <EnquiryForm />
     <ExploreProjects />
    </div>
  )
}