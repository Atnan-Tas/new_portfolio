'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const BackgroundLines = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Largeur des lignes en fonction du scroll
  const line1Width = useTransform(scrollYProgress, [0, 1], ['10%', '100%']);
  const line2Width = useTransform(scrollYProgress, [0, 1], ['0%', '90%']);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    >
      {/* Première ligne */}
      <motion.div
        className="absolute top-[25%] left-0 h-2 bg-[#202020] rounded-full"
        style={{
          width: line1Width,
        }}
      ></motion.div>

      {/* Deuxième ligne */}
      <motion.div
        className="absolute bottom-[25%] right-0 h-2 bg-[#202020] rounded-full"
        style={{
          width: line2Width,
        }}
      ></motion.div>
    </div>
  );
};

export default BackgroundLines;
