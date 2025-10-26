"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

interface TransformHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  beforeContent: React.ReactNode;
  afterContent: React.ReactNode;
  imageUrl: string;
  imageAlt?: string;
  backgroundColor?: string;
}

export function TransformHero({
  beforeContent,
  afterContent,
  imageUrl,
  imageAlt = "Animated image",
  backgroundColor = "bg-primary/90",
  className,
  ...props
}: TransformHeroProps) {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const screenWidth = window.innerWidth;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Plane animation
  const x = useTransform(scrollYProgress, [0.1, 0.5], [`-${5*screenWidth}px`, `${2.5*screenWidth}px`]);
  const planeOpacity = useTransform(scrollYProgress, [0.1, 0.25, 0.4, 0.5], [0, 1, 1, 0]);
  
  // Content transitions
  const beforeOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6], [1, 1, 0]);
  const afterOpacity = useTransform(scrollYProgress, [0.5, 0.7, 1], [0, 1, 1]);
  
  // Background transition
  const bgOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);

  return (
    <div ref={targetRef} className={cn("relative h-[200vh]", className)} {...props}>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* Background color transition */}
        <motion.div 
          style={{ opacity: bgOpacity }} 
          className={`absolute inset-0 ${backgroundColor} z-0`}
        />
        
        {/* Initial content */}
        <motion.div 
          style={{ opacity: beforeOpacity }} 
          className="z-10 text-center absolute inset-0 flex items-center justify-center"
        >
          {beforeContent}
        </motion.div>
        
        {/* After transformation content */}
        <motion.div 
          style={{ opacity: afterOpacity }} 
          className="z-10 text-center absolute inset-0 flex items-center justify-center text-white"
        >
          {afterContent}
        </motion.div>

        {/* Animated Image (Plane) */}
        <motion.div 
          style={{ x, opacity: planeOpacity }} 
          className="absolute top-0 left-0 z-20 flex h-full w-full items-center"
        >
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-auto h-auto max-w-none"
            onError={(e) => {
              e.currentTarget.src = `https://placehold.co/1200x800/000000/ffffff?text=Image+Error`;
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}