"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
      }
    };

    handleScroll();

    // Verzögerung hinzufügen
    const timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", handleScroll);
      }
    }, 2500); // Verzögern Sie das Hinzufügen des Event-Listeners, bis die Animationen abgeschlossen sind

    return () => {
      clearTimeout(timer);
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`sticky top-0 flex justify-between items-center max-w-7xl mx-auto py-5 px-4 md:px-6 lg:px-8 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-transparent shadow-md rounded-lg z-10"
          : "bg-transparent z-10"
      }`}
    >
      <div className="lg:hidden" onClick={toggleMenu}>
        <Image
          src="/menu_logo.svg"
          alt="menu"
          width={32}
          height={32}
          className="cursor-pointer"
        />
      </div>
      <ul
        className={`flex gap-8 font-mono ${
          isMenuOpen ? "flex" : "hidden lg:flex"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <li
            key={link.key}
            onClick={() => scrollToSection(link.href)}
            className="cursor-pointer"
          >
            {link.label}
          </li>
        ))}
      </ul>

      {!isMenuOpen && (
        <button
          type="button"
          className=" bg-white text-gray-800 font-semibold py-2 px-6 rounded-md border-4 border-gray-300 hover:bg-gray-100 hover:scale-105 transition-all duration-200"
          onClick={() =>
            (window.location.href = "mailto:filip.ores@hotmail.com")
          }
        >
          Contact Me
        </button>
      )}
    </nav>
  );
};

export default Navbar;
