import React, { forwardRef, RefObject, useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useFollowPointer } from '../hooks/useFollowPointer';
import AnimatedWord from './common/AnimatedWord';
import laptop from '../assets/laptop.png';

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

// const containerSize = 0;
// const boxSize = containerSize;

const parentVariant: Variants = {
  visible: {
    scale: 1,
    transition: {
      staggerChildren: 0.7,
    },
  },
};

const topChildVariant: Variants = {
  hidden: { y: 70 },
  visible: {
    y: 0,
    scale: 1,
    transition: {
      delay: 0.7,
      staggerChildren: 0.7,
      type: 'tween',
      duration: 0.2,
    },
  },
};

const childVariant: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.2, ease: 'linear' } },
};

const childVariant2: Variants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { delay: 1.3, duration: 0.5 } },
};

const TopSection = forwardRef<HTMLDivElement, Props>(({ onClick }, ref) => {
  const nameRef = useRef(null);
  const [changeRef, setChangeRef] =
    useState<RefObject<HTMLDivElement>>(nameRef);
  const [isInside, setIsInside] = useState(false);
  let { x, y } = useFollowPointer(changeRef, isInside);

  return (
    <div
      ref={ref}
      className='snap-start h-screen min-w-screen w-screen flex justify-center items-center flex-wrap bg-wood-pattern bg-no-repeat bg-cover'
    >
      <div className='flex items-center justify-center w-11/12 md:w-10/12 lg:w-4/6 xl:w-7/12'>
        <section className=' w-[300px] md:w-[402px] md:items-start lg:items-center flex flex-col sm:w-[380px] xs:w-[315px] '>
          {/* WWhole lef site */}
          <motion.div
            className='h-full flex items-center justify-center text-3xl xs:text-4xl flex-col sm:text-5xl md:text-5xl font-roboto font-extrabold tracking-wider p-5 sm:p-0 mx-1 '
            variants={parentVariant}
            initial='hidden'
            animate='visible'
          >
            {/* TopCHildvar */}
            <motion.div
              className='flex items-center justify-center flex-col font-roboto font-extrabold tracking-wider p-5 mx-3'
              variants={topChildVariant}
            >
              <motion.div
                className='whitespace-nowrap flex'
                variants={childVariant}
              >
                <h2 className='inline m-2'>Hi,</h2>
                <h2 className='inline mt-2'> I'm</h2>
                <motion.div
                  ref={nameRef}
                  className='w-auto h-auto inline p-2'
                  onHoverStart={() => {
                    setIsInside(true);
                    setChangeRef(nameRef);
                  }}
                  onHoverEnd={() => {
                    setIsInside(false);
                    setChangeRef(nameRef);
                  }}
                >
                  <motion.h2
                    className='xs:px-1 px-2 pb-3'
                    animate={{ x, y }}
                    transition={{
                      type: 'spring',
                      damping: 5,
                      stiffness: 655,
                      restDelta: 0.001,
                    }}
                  >
                    <AnimatedWord word='EnZo' />
                  </motion.h2>
                </motion.div>
              </motion.div>
              <motion.h2
                className='flex-nowrap text-xl xs:text-xl text-center 
                sm:text-2xl
                md:text-2xl
                lg:text-3xl whitespace-nowrap '
                variants={childVariant}
              >
                A Full-Stack{' '}
                <span className='hidden sm:inline-flex '>Web&nbsp;</span>
                Developer.
              </motion.h2>
            </motion.div>
            {/* TopChild Var */}

            <motion.div
              className='w-5/6 bg-white h-1.5 mt-2 min-w-0 max-w-2xl md:w-4/6'
              initial={{ width: '0%' }}
              animate={{ width: '100%', transition: { duration: 0.3 } }}
            />
            <motion.p
              className='text-sm tracking-[.15em] mt-5 mb-5 text-stone-500 font-normal font-noto whitespace-nowrap'
              variants={childVariant2}
            >
              Freelancer
              <span className=' text-3xl flex-row align-middle '>•</span>
              E-commerce
              <span className=' text-3xl flex-row align-middle '>•</span> Web
              App
              <span className=' text-3xl flex-row align-middle '>•</span> Game
            </motion.p>
            <button
              className='mt-10 text-base font-noto font-normal tracking-wider border-4 border-sky-500 p-4 px-12 rounded-xl text-sky-500 hover:text-sky-200 hover:border-sky-200 ease-out duration-500'
              onClick={onClick}
            >
              KNOW MORE
            </button>
          </motion.div>
        </section>
        <section className='md:block md:w-3/6 hidden'>
          <div className='flex flex-col items-start xs:items-end md:items-end lg:items-end xl:items-end justify-center h-full '>
            <img className='w-4/5 max-w-sm' src={laptop} />
          </div>
        </section>
      </div>
    </div>
  );
});

export default TopSection;
