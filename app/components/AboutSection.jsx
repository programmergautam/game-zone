"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      ".about-img",
      { opacity: 0, scale: 0.8, x: 250 },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      ".about-text",
      { opacity: 0, scale: 0.8, x: -250 },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
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
      id="about"
      ref={sectionRef}
      className="min-h-screen py-20 bg-gradient-to-b from-blue-800 to-purple-900 flex items-center"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 about-img">
            <Image
              src="/about-gaming.jpg"
              alt="About Gaming"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
          <div className="md:w-1/2 md:pl-12 about-text">
            <p className="text-lg mb-4">
              At GameZone, we are dedicated to bringing you the most immersive and enjoyable gaming experiences. Our
              team of experts works tirelessly to innovate and deliver the best content and technology.
            </p>
            <p className="text-lg">
              Join us and be a part of a community that shares your passion for gaming. Whether you&apos;re a casual
              player or a hardcore enthusiast, GameZone has something for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
