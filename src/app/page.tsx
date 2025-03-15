import { ClientMarquee } from "./components/clientMarquee";
import { CTASection } from "./components/CtaSection";
import ProjectsPreview from "./components/featuredProjects";
import Footer from "./components/Footer";
import { HeroSection } from "./components/heroSection";
import { Navbar } from "./components/Navigation";
import { StatsPanel } from "./components/StatisticsPanel";
import { TestimonialsSection } from "./components/testimonials";

const Page = ()=>{
    return(
            <div>
             
               <HeroSection/>
               <ClientMarquee/>
               <StatsPanel/>
               <ProjectsPreview/>
               <TestimonialsSection/>
               <CTASection/>
               
            </div>
    )
}

export default Page;