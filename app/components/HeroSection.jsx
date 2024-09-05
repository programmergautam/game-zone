import { Press_Start_2P } from "next/font/google";
import Link from "next/link";
import { SiAppstore, SiGoogleplay } from "react-icons/si";
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
      <div className="min-h-screen flex flex-col items-center justify-center container mx-auto pt-32 p-4 text-center rounded-lg shadow-lg bg-black bg-opacity-70">
        <h1 className="md:text-5xl text-md font-extrabold mb-4 neon-text text-white">Welcome to GameZone</h1>
        <p className="md:text-lg text-xs font-bold mb-8 neon-text text-white">
          Your Ultimate Gaming Experience Awaits!
        </p>
        <div className="flex justify-center gap-2 mt-10">
          <Link
            href="https://www.apple.com/in/app-store"
            className="flex items-center bg-slate-500 text-slate-100 px-6 py-3 rounded-full shadow-lg hover:bg-slate-600 transition transform hover:scale-105 font-bold md:text-md text-xs"
          >
            <SiAppstore className="mr-2 text-xl" />
            App Store
          </Link>
          <Link
            href="https://play.google.com/store/apps"
            className="flex items-center bg-purple-500 text-slate-100 px-6 py-3 rounded-full shadow-lg hover:bg-purple-600 transition transform hover:scale-105 font-bold md:text-md text-xs"
          >
            <SiGoogleplay className="mr-2 text-xl" />
            Play Store
          </Link>
        </div>
      </div>
    </section>
  );
}
