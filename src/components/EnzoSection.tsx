import { forwardRef } from 'react';

const EnzoSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      className='snap-start h-screen min-w-screen w-screen flex flex-wrap '
      ref={ref}
    >
      <section className='sm:w-full md:w-1/2 w-full border-2 border-red-600'>
        <p>Personal History</p>
      </section>
      <section className='sm:w-full md:w-1/2 w-full border-2 border-sky-600'>
        <p>Graph stacks</p>
      </section>
    </div>
  );
});

export default EnzoSection;
