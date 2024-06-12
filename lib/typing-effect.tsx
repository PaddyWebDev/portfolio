import React, {
  useEffect
} from 'react';
import { motion, useAnimation } from 'framer-motion';

interface TypingEffectProps {
  name: string
}

export default function TypingEffect({ name }: TypingEffectProps) {
  const letters: string[] = Array.from(name);
  const controls = useAnimation();

  useEffect(() => {
    handleAnimation()
    async function handleAnimation() {
      await controls.start('visible');
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Wait for 2 seconds
      await controls.start('hidden');
    };

    const interval = setInterval(() => {
      handleAnimation();
    }, 3000); // Repeat every 4 seconds

    return () => {
      clearInterval(interval);
    }
  }, [controls]);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: 'hidden', display: 'flex' }}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};




