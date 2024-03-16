"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(window.scrollY > 0);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    // Verzögerung hinzufügen
    const timer = setTimeout(() => {
      window.addEventListener("scroll", handleScroll);
    }, 2500); // Verzögern Sie das Hinzufügen des Event-Listeners, bis die Animationen abgeschlossen sind

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 flex justify-between items-center max-w-7xl mx-auto py-5 px-4 md:px-6 lg:px-8 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-transparent shadow-md rounded-lg z-10"
          : "bg-transparent z-10"
      }`}
    >
      <ul className="flex gap-8 font-mono">
        {NAV_LINKS.map((link) => (
          <li
            key={link.key}
            className="regular-16 text-gray-50 flexCenter
            cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="bg-white text-gray-800 font-semibold py-2 px-6 rounded-md border-4 border-gray-300 hover:bg-gray-100 hover:scale-105 transition-all duration-200"
        onClick={() => (window.location.href = "mailto:filip.ores@hotmail.com")}
      >
        Contact Me
      </button>

      <div className="lg:hidden">
        <Image
          src="/menu_logo.svg"
          alt="menu"
          width={32}
          height={32}
          className="cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
