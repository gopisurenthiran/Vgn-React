import Banner from "../components/VgnClassique/Banner";
import EnquiryForm from "../components/VgnClassique/EnquiryForm";
import ExploreProjects from "../components/VgnClassique/ExploreProjects";
import '../style/VgnClassique.css';

export default function VgnClassique() {
  return (
    <div>
     <Banner />
     <EnquiryForm />
     <ExploreProjects />
    </div>
  )
}