"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import MenuButton from "./MenuButton";
import { Press_Start_2P } from "next/font/google";
import "./styles.css";
import { gsap } from "gsap";

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setIsMenuVisible(false);
    } else {
      setIsMenuVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    gsap.fromTo(".logo", { opacity: 0, x: -25 }, { opacity: 1, x: 0, duration: 1, ease: "power2.out" });
    gsap.fromTo(".menu", { opacity: 0, x: 25 }, { opacity: 1, x: 0, duration: 1, ease: "power2.out" });
  }, []);

  return (
    <header
      className={`bg-black bg-opacity-50 backdrop-blur-md shadow-md fixed w-full z-10 transition-transform duration-300 ${
        isMenuVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className={`md:text-2xl text-xl font-bold neon-text-purple ${pressStart2P.className} logo`}>
          <Link href="/">GameZone</Link>
        </div>
        <div className="menu z-50">
          <MenuButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </div>
        <nav
          className={`fixed neon-text top-0 right-0 md:relative md:flex md:space-x-4 text-lg bg-black md:bg-transparent w-64 md:w-auto h-full md:h-auto transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } md:translate-x-0 md:opacity-100`}
          aria-label="Main navigation"
        >
          <div className="flex flex-col md:flex-row h-full md:h-auto p-4 md:p-0 menu">
            <Link
              href="#features"
              className="block md:inline-block p-4 hover:text-cyan-400 transition"
              onClick={closeMenu}
            >
              Features
            </Link>
            <Link
              href="#about"
              className="block md:inline-block p-4 hover:text-cyan-400 transition"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="#testimonials"
              className="block md:inline-block p-4 hover:text-cyan-400 transition"
              onClick={closeMenu}
            >
              Testimonial
            </Link>
            <Link
              href="#contact"
              className="block md:inline-block p-4 hover:text-cyan-400 transition"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
