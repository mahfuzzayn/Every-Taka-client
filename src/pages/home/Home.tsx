import Faq from "@/components/modules/home/Faq";
import Features from "@/components/modules/home/Features";
import Hero from "@/components/modules/home/Hero";
import Pricing from "@/components/modules/home/Pricing";
import Testimonials from "@/components/modules/home/Testimonials/Testimonials";

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <Testimonials />
            <Pricing />
            <Faq />
        </>
    );
};

export default Home;
