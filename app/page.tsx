import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import AboutVision from "@/components/AboutVision";
import AcademicWings from "@/components/AcademicWings";
import CampusFacilities from "@/components/CampusFacilities";
import Gallery from "@/components/Gallery";
import Admissions from "@/components/Admissions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeTicker />
        <AboutVision />
        <AcademicWings />
        <CampusFacilities />
        <MarqueeTicker reverse />
        <Gallery />
        <Admissions />
      </main>
      <Footer />
    </>
  );
}
