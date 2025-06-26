import People from '../components/OurPeople/People';

import TeamMessageSection from '../components/OurPeople/TeamMessageSection';
import ManagerSection from '../components/OurPeople/ManagerSection';
import BrandIconSection from '../components/BrandIconSection';



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