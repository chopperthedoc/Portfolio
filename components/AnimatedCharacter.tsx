// AnimatedCharacter.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: (i: number) => ({
    // Typ für 'i' hinzufügen
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.01,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

interface AnimatedCharacterProps {
  char: string; // Typ für 'char'
  index: number; // Typ für 'index'
}

export const AnimatedCharacter: React.FC<AnimatedCharacterProps> = ({
  char,
  index,
}) => (
  <motion.p
    variants={textVariants}
    initial="hidden"
    animate="visible"
    custom={index}
    style={{ display: "inline-block" }}
  >
    {char}
  </motion.p>
);
