import { Press_Start_2P } from "next/font/google";
import "./styles.css";

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function HeroSection() {
  return (
    <section
      className={`min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center bg-opacity-50 ${pressStart2P.className}`}
      style={{ backgroundImage: "url(/gaming-bg.jpg)" }}
    >
      <div className="container mx-auto p-10 mt-32 text-center rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold mb-4 neon-text">Welcome to GameZone</h1>
        <p className="text-xl font-bold mb-8 neon-text">Your Ultimate Gaming Experience Awaits!</p>
        <button className="bg-green-600 text-slate-100 px-8 py-4 rounded-full shadow-lg hover:bg-green-700 transition transform hover:scale-105 font-bold">
          Get Started
        </button>
      </div>
    </section>
  );
}
