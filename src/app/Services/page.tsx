

import ServiceHero from '../components/servicesHero';
import ServiceGrid from '../components/servicesGrid';
import ProjectsSlider from '../components/projectsSlider';
import { CTASection } from '../components/CtaSection';



const Page = () => {
  return (
    <div className="bg-gray-900">
      <ServiceHero />
      <ServiceGrid />
      <ProjectsSlider/>
      <CTASection/>
      
   </div>
  );
};

export default Page;