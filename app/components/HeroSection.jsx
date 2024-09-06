"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
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
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      ".hero-text",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
    gsap.fromTo(
      ".hero-button-l",
      { opacity: 0, x: 150 },
      {
        opacity: 1,
        x: 0,
        delay: 0.5,
        duration: 1,
        ease: "back.out",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
    gsap.fromTo(
      ".hero-button-r",
      { opacity: 0, x: -150 },
      {
        opacity: 1,
        x: 0,
        delay: 0.5,
        duration: 1,
        ease: "back.out",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen bg-[url('/gaming-bg.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center bg-opacity-50 ${pressStart2P.className}`}
    >
      <div className="min-h-screen flex flex-col items-center justify-center container mx-auto pt-32 p-4 text-center rounded-lg shadow-lg bg-black bg-opacity-70">
        <h1 className="md:text-5xl text-md font-extrabold mb-4 neon-text text-slate-100 hero-text">
          Welcome to GameZone
        </h1>
        <p className="md:text-lg text-xs font-bold mb-8 neon-text text-slate-100 hero-text">
          Your Ultimate Gaming Experience Awaits!
        </p>
        <div className="flex justify-center gap-2 mt-10">
          <Link
            href="https://www.apple.com/in/app-store"
            className="flex items-center bg-slate-500 text-slate-100 px-6 py-3 rounded-lg shadow-lg hover:bg-slate-600 transition transform hover:scale-105 font-bold md:text-md text-xs hero-button-l"
          >
            <SiAppstore className="mr-2 text-xl" />
            App Store
          </Link>
          <Link
            href="https://play.google.com/store/apps"
            className="flex items-center bg-purple-500 text-slate-100 px-6 py-3 rounded-lg shadow-lg hover:bg-purple-600 transition transform hover:scale-105 font-bold md:text-md text-xs hero-button-r"
          >
            <SiGoogleplay className="mr-2 text-xl" />
            Play Store
          </Link>
        </div>
      </div>
    </section>
  );
}
