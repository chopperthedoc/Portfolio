"use client";
import React, { useEffect, useRef } from "react";
import { skillsData } from "../lib/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

interface SkillsProps {
  id?: string;
}

const Skills: React.FC<SkillsProps> = ({ id }) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("Skills component is visible");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className="mb-28 max-w-[53rem] mx-auto scroll-mt-28 text-center sm:mb-40  pt-3"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-4 font-mono Menlo">
        Skills
      </h2>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="flex bg-white bg-opacity-10 border border-black/[0.1] rounded-xl px-5 py-3"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <span className="mt-1">{skill.icon}</span>
            <span className="ml-2 font-mono Menlo">{skill.title}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
