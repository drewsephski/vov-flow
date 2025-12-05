import AboutHero from "@/components/about/about-hero";
import OurMission from "@/components/about/our-mission";
import OurStart from "@/components/about/our-start";
import OurStory from "@/components/about/our-story";
import Navbar from "@/components/marketing/navbar";
import Wrapper from "@/components/global/wrapper";

const AboutPage = () => {
    return (
        <div className="w-full relative flex flex-col">
            <Navbar />
            <div className="pt-16">
                <AboutHero />
                <OurStory />
                <OurMission />
                <OurStart />
            </div>
        </div>
    );
};

export default AboutPage;