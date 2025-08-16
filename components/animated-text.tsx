"use client";

import { JSX } from "react";
import { motion } from "framer-motion";

const letterAnimation = {
  initial: { opacity: 0, y: "100%" },
  animate: (i: number[]) => ({
    opacity: 1,
    y: "0%",
    transition: { duration: 0.3, easy: [0.2, 0, 0.1, 1], delay: i[0] },
  }),
};

const getLetter = (name: string): JSX.Element[] => {
  const letters: JSX.Element[] = [];
  name.split("").forEach((letter: string, index: number) =>
    letters.push(
      <motion.span
        variants={letterAnimation}
        initial="initial"
        whileInView="animate"
        custom={[index * 0.02, (name.length - index) * 0.01]}
        key={index}
      >
        {letter}
      </motion.span>
    )
  );

  return letters;
};

interface AnimatedTextProps {
  text: string;
  textStyles: string;
}

export const AnimatedText = ({ text, textStyles }: AnimatedTextProps) => {
  return <div className={`${textStyles}`}>{getLetter(text)}</div>;
};
