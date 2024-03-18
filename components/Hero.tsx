"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HeroProps {
  id?: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  const [curtain, setCurtain] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setCurtain(true);

    const section = document.getElementById(sectionId);
    if (section) {
      setTimeout(() => {
        if (typeof window !== "undefined") {
          window.location.href = `#${sectionId}`;
        }
      }, 1000);
    }

    setTimeout(() => {
      setCurtain(false);
    }, 2000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Variants für Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      {curtain && (
        <div className="fixed inset-0 bg-white z-50 animate-slide-down-up"></div>
      )}
      <section
        id={id}
        className="flex flex-col items-center justify-center min-h-screen p-4 lg:p-8"
      >
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-4xl sm:text-5xl font-bold text-gray-800 text-center mb-4 font-mono Menlo"
        >
          Hey, ich bin Filip.
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center justify-center"
        >
          <p className="text-base sm:text-lg text-gray-800 text-center mb-6 font-mono Menlo">
            Mein Ziel: Software entwickeln, die das Leben einfacher macht.
          </p>
          <button
            onClick={() => scrollToSection("about-me")}
            className="font-mono transform transition-all duration-300 ease-in-out hover:scale-105 shadow-md bg-gradient-to-r from-gray-200 via-white to-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:shadow-lg motion-safe:hover:animate-pulse"
          >
            About Me
          </button>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
