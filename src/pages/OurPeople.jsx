import People from '../components/People';
import BrandIconSection from '../components/BrandIconSection';
import TeamMessageSection from '../components/TeamMessageSection';
import ManagerSection from '../components/ManagerSection';



export default function OurPeople() {
  return (
    <div>
      <People/>
      <TeamMessageSection/>
      <ManagerSection/>
       <BrandIconSection/>
    </div>
  )
}