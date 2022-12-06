import { useState } from 'react';

import './App.css';
import Contact from './components/Contact';
import EnzoSection from './components/EnzoSection';
import Estimate from './components/Estimate';
import Projects from './components/Projects';
import TopSection from './components/TopSection';

function App() {
  return (
    <div className='App w-screen h-screen snap-y snap-mandatory overflow-scroll'>
      <button className='top-4 right-4 sm:top-6 sm:right-6 absolute bg-black text-white p-1 opacity-80 '>
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
      <TopSection />
      <EnzoSection />
      <Projects />
      <Estimate />
      <Contact />
    </div>
  );
}

export default App;
