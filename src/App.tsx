import { motion } from 'framer-motion';
import React, { RefObject, useRef, useState } from 'react';

import './App.css';
import Contact from './components/Contact';
import EnzoSection from './components/EnzoSection';

import { Matrix } from './components/MotionComponent';
import Projects from './components/Projects';
import Responsive from './components/Responsive';
import TopSection from './components/TopSection';
import { FaArrowCircleUp } from 'react-icons/fa';

function App() {
  const aboutme_ref = useRef<HTMLDivElement>(null);
  const responsive = useRef<HTMLDivElement>(null);
  const top_section = useRef<HTMLDivElement>(null);

  const [showTopButton, setShowTopButton] = useState(false);

  const goToTop = (): void => {
    console.log('goto');
    top_section.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  const showMenu = (): void => {
    console.log('menu');
    responsive.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  const handleClick = (): void => {
    console.log('clicked');
    aboutme_ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  const handleScroll = (e: React.UIEvent<HTMLElement>): void => {
    if (e.currentTarget.scrollTop != 0) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
  };

  return (
    <div
      className='App w-screen h-screen snap-y snap-mandatory overflow-scroll'
      onScroll={handleScroll}
    >
      <button
        className='top-4 right-4 sm:top-6 sm:right-6 absolute bg-black text-white p-1 opacity-80 rounded-lg '
        onClick={showMenu}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='md:w-9 md:h-9 h-7 w-7'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      </button>
      <div className='w-4/5 '>
        <TopSection ref={top_section} onClick={handleClick} />
        <EnzoSection ref={aboutme_ref} />
        <Responsive ref={responsive} />
        <Projects />
        <Contact />
      </div>
      {showTopButton && (
        <motion.button
          animate={{
            scale: [1, 1, 1.5, 1.5, 1, 1],
            rotate: [0, 0, 360, 360, 0],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 5,
          }}
          whileHover={{ scale: 1.5, transition: { duration: 0.5 } }}
          className='bottom-10 right-10 sm:bottom-8 sm:right-8 absolute p-1 opacity-100'
          onClick={goToTop}
        >
          <FaArrowCircleUp className='w-8 h-8 text-sky-400' />
        </motion.button>
      )}
    </div>
  );
}

export default App;
