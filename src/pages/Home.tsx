import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Stats } from "../components/Stats";
import { ProductCategories } from "../components/ProductCategories";
import { Services } from "../components/Services";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Contact } from "../components/Contact";

export function Home() {
    return (
        <>
            <Hero />
            <About />
            <Stats />
            <ProductCategories />
            <Services />
            <WhyChooseUs />
            <Contact />
        </>
    );
}
