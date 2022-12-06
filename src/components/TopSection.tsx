import React from 'react';

type Props = {};

const TopSection = (props: Props) => {
  return (
    <div className='snap-start snap-center h-screen min-w-screen w-screen flex flex-wrap bg-wood-pattern'>
      <section className='sm:w-3/5 w-full'>
        <div className='h-full flex items-center justify-center text-4xl flex-col font-roboto font-extrabold tracking-wider p-5'>
          <h2>
            Hi, I'm <span className='text-sky-400'>E</span>n
            <span className='text-sky-400'>Z</span>o
          </h2>
          <h2 className='flex-nowrap sm:text-3xl lg:text-4xl mt-4 text-center whitespace-nowrap'>
            A full stack web Developer.
            <div className='h-full bg-white h-1.5 mt-4' />
          </h2>
          <p className='text-sm tracking-[.15em] mt-4 text-stone-500 font-normal font-noto whitespace-nowrap'>
            Freelancer{' '}
            <span className=' text-3xl flex-row align-middle '>•</span> E -
            commerce <span className=' text-3xl flex-row align-middle '>•</span>{' '}
            Web App <span className=' text-3xl flex-row align-middle '>•</span>{' '}
            Game
          </p>
          <button className='mt-10 text-xl font-noto font-normal tracking-wider border-2 border-sky-500 p-3 px-10 rounded-xl text-sky-500 hover:text-sky-200 hover:border-sky-200 ease-out duration-500'>
            KNOW MORE
          </button>
        </div>
      </section>
      <section className='sm:block sm:w-2/5 hidden border-2 border-white'>
        <div className='flex flex-col items-center justify-center h-full '>
          <img className='w-4/5 max-w-sm' src='/src/assets/laptop.png' />
        </div>
      </section>
    </div>
  );
};

export default TopSection;
