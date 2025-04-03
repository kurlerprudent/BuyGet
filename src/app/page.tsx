

import { ClientMarquee } from "@/components/clientMarquee";
import { CTASection } from "@/components/CtaSection";
import ProjectsPreview from "@/components/featuredProjects";
import { HeroSection } from "@/components/heroSection";
import { StatsPanel } from "@/components/StatisticsPanel";
import { TestimonialsSection } from "@/components/testimonials";
import WalkingCarousel from "@/components/walking";

const Page = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <HeroSection />
      <StatsPanel />
      <ProjectsPreview />
      <ClientMarquee />
     
     
      
    </div>
  );
};

export default Page;