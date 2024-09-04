"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import MenuButton from "./MenuButton";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  let lastScrollY = 0;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 3000);
    }

    lastScrollY = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-black bg-opacity-50 backdrop-blur-md shadow-md fixed w-full z-10 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-green-400">
          <Link href="/">GameZone</Link>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-green-400 hover:text-green-300 transition"
          aria-label={isMenuOpen ? "Close menu" : "Toggle menu"}
          style={{ position: "relative" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <nav
          className={`fixed top-0 right-0 md:relative md:flex md:space-x-4 text-lg bg-black md:bg-transparent w-64 md:w-auto h-full md:h-auto transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } md:translate-x-0 md:opacity-100`}
          aria-label="Main navigation"
        >
          <div className="flex flex-col md:flex-row h-full md:h-auto p-4 md:p-0">
            <a
              href="#features"
              className="block md:inline-block p-4 hover:text-green-300 transition"
              onClick={closeMenu}
            >
              Features
            </a>
            <a href="#about" className="block md:inline-block p-4 hover:text-green-300 transition" onClick={closeMenu}>
              About
            </a>
            <a
              href="#contact"
              className="block md:inline-block p-4 hover:text-green-300 transition"
              onClick={closeMenu}
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
