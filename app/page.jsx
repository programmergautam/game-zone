import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-purple-900 to-blue-900 min-h-screen flex flex-col text-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="fixed top-0 left-0 right-0 z-50"
        style={{ top: 0 }}
      />
      <ContactSection />
      <Footer />
    </div>
  );
}
