"use client";
import { useEffect, useRef } from "react";
import { FaGamepad, FaGlobe, FaStar } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      ".feature-card",
      { opacity: 0, scale: 0.8, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="min-h-screen py-20 bg-black bg-opacity-70 backdrop-blur-md flex items-center"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-100">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card bg-purple-800 p-8 rounded-lg shadow-lg text-center transform transition">
            <div className="bg-cyan-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 shadow-inner">
              <FaGamepad className="h-10 w-10 text-slate-100" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-slate-100">Immersive Gameplay</h3>
            <p className="text-lg text-slate-100">
              Experience gaming like never before with ultra-realistic graphics and sound.
            </p>
          </div>
          <div className="feature-card bg-purple-800 p-8 rounded-lg shadow-lg text-center transform transition">
            <div className="bg-cyan-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 shadow-inner">
              <FaGlobe className="h-10 w-10 text-slate-100" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-slate-100">Cross-Platform Play</h3>
            <p className="text-lg text-slate-100">Connect with friends across all major platforms and play together.</p>
          </div>
          <div className="feature-card bg-purple-800 p-8 rounded-lg shadow-lg text-center transform transition">
            <div className="bg-cyan-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 shadow-inner">
              <FaStar className="h-10 w-10 text-slate-100" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-slate-100">Exclusive Content</h3>
            <p className="text-lg text-slate-100">
              Access exclusive in-game items and special events available only to members.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
