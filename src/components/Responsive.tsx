import { forwardRef } from 'react';

const Responsive = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      className=' snap-center h-screen min-w-screen w-screen flex flex-wrap '
      ref={ref}
    >
      <section className=' w-full border-2 border-red-600 sm:border-green-600 md:border-blue-700 lg:border-yellow-400 xl:border-purple-500 2xl:border-orange-500'>
        <p>Project Links</p>
      </section>
    </div>
  );
});

export default Responsive;
