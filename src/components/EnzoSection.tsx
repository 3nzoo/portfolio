import React from 'react';

type Props = {};

const EnzoSection = (props: Props) => {
  return (
    <div className='snap-start snap-center h-screen min-w-screen w-screen flex flex-wrap '>
      <section className='sm:w-1/2 w-full border-2 border-red-600'>
        <p>text definiition</p>
      </section>
      <section className='sm:w-1/2 w-full border-2 border-sky-600'>
        <p>Graph stacks</p>
      </section>
    </div>
  );
};

export default EnzoSection;
