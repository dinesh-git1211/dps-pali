import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
        <AboutVision />
        <AcademicWings />
        <CampusFacilities />
        <Gallery />
        <Admissions />
      </main>
      <Footer />
    </>
  );
}
