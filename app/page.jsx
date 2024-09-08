import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import TestimonialSection from "./components/TestimonialSection";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-purple-900 to-blue-900 min-h-screen flex flex-col text-slate-100">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ToastContainer className="fixed top-0 right-0 z-50" />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
