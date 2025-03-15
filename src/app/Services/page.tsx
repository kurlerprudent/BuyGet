import { CTASection } from "@/components/CtaSection";
import ProjectsSlider from "@/components/projectsSlider";
import ServiceGrid from "@/components/servicesGrid";
import ServiceHero from "@/components/servicesHero";




const Page = () => {
  return (
    <div className="bg-gray-900">
      <ServiceHero/>
      <ServiceGrid />
      <ProjectsSlider/>
      <CTASection/>
      
   </div>
  );
};

export default Page;