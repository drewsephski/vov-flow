import ContactHero from "@/components/contact/contact-hero";
import ContactForm from "@/components/contact/contact-form";
import Navbar from "@/components/marketing/navbar";

const ContactPage = () => {
    return (
        <div className="w-full relative flex flex-col">
            <Navbar />
            <div className="pt-16">
                <ContactHero />
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactPage;