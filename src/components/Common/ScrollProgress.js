'use client';
import { motion, useScroll } from 'framer-motion';
import React from 'react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #0d9488, #00d4ff)',
        transformOrigin: '0%',
        zIndex: 10000,
      }}
    />
  );
}
