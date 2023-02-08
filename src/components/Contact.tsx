import React from 'react';
import { Matrix } from './MotionComponent';

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className='snap-start h-screen min-w-screen w-screen flex flex-wrap '>
      <section className='sm:w-full md:w-1/2 w-full border-2 border-red-600'>
        <p>Message Form</p>
      </section>
      <section className='sm:w-full md:w-1/2 w-full border-2 border-sky-600'>
        <p>Game Blocks</p>
      </section>
    </div>
  );
};

export default Contact;
