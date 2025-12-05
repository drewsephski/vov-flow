import IntegrationsHero from "@/components/integrations/integrations-hero";
import IntegrationsSection from "@/components/integrations/integrations-section";
import Navbar from "@/components/marketing/navbar";

const IntegrationsPage = () => {
    return (
        <div className="w-full relative flex flex-col">
            <Navbar />
            <div className="pt-16">
                <IntegrationsHero />
                <IntegrationsSection />
            </div>
        </div>
    );
};

export default IntegrationsPage;