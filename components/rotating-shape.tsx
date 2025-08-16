"use client";

import { motion } from "framer-motion";

interface RotatingShapeProps {
  content: React.ReactNode;
  direction?: "left" | "right";
  duration: number;
}

export const RotatingShape = ({
  content,
  direction,
  duration,
}: RotatingShapeProps) => {
  const rotationAnimation = {
    animate: {
      rotate: direction === "right" ? 360 : direction === "left" ? -360 : 0,
      transition: {
        duration: duration,
        ease: "linear" as const,
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div variants={rotationAnimation} animate="animate">
      {content}
    </motion.div>
  );
};
