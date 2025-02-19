import OurStoryCoreValues from "../components/aboutCoreValues";
import AboutHero from "../components/aboutHero";
import {  CompanyOverview } from "../components/aboutIntro";
import Footer from "../components/Footer";
import LeadershipSection from "../components/leadershipSection";
import { Navbar } from "../components/Navigation";


const Page = ()=>{
    return(
        <div>
            <Navbar/>
            <AboutHero/>
            <CompanyOverview/>
            <OurStoryCoreValues/>
            <LeadershipSection/>
            <Footer/>
        </div>
    )
}

export default Page;