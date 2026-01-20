import LenisScroll from "@/components/LenisScroll";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Page() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Header />
            <About />
            <Achievements/>
            <Work />
            <Contact />
            <Footer />
        </>
    )
};