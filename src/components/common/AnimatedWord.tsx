import { motion, Variants } from 'framer-motion';
import React from 'react';

type Props = {
  word: string;
  initialProp?: any;
  visibileProp?: {};
};

const AnimatedWord = (props: Props) => {
  const { initialProp, visibileProp } = props;
  const word = props.word.split('');

  const container: Variants = {
    hidden: initialProp,
    visible: (i = 1) => ({
      ...visibileProp,
      transition: {
        staggerChildren: 0.52,
        delayChildren: 0.04 * i,
      },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 1.8,
      },
    },
    hidden: {
      opacity: 1,
      y: 70,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: 'hidden', display: 'flex' }}
      variants={container}
      initial='hidden'
      animate='visible'
    >
      {word.map((letter, index) => (
        <motion.span
          className={index % 2 == 0 ? 'text-sky-400' : ''}
          variants={child}
          key={index}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedWord;
