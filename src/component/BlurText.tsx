import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

interface BlurTextProps {
  text: string;
  className?: string;
}

export default function BlurText({ text, className }: BlurTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // Trigger on IntersectionObserver with threshold 0.1 (amount: 0.1)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const words = text.split(/\s+/);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        rowGap: "0.1em",
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
          animate={
            isInView
              ? { filter: "blur(0px)", opacity: 1, y: 0 }
              : { filter: "blur(10px)", opacity: 0, y: 50 }
          }
          transition={{
            duration: 0.7,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          style={{
            display: "inline-block",
            marginRight: "0.28em",
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
