import OurStoryCoreValues from "@/components/aboutCoreValues";
import HeroSection from "@/components/aboutHero";
import { CompanyOverview } from "@/components/aboutIntro";
import LeadershipSection from "@/components/leadershipSection";



const Page = ()=>{
    return(
        <div>
         
            <HeroSection/>
            <CompanyOverview/>
            <OurStoryCoreValues/>
            <LeadershipSection/>
           
        </div>
    )
}

export default Page;