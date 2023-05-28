import React, { useState, useEffect } from 'react';
import Flag from '../assets/USAFlag.jpg';
import RapidSuccessionText from './rapidSuccessionText';

const Start = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const startElement = document.getElementById('start-page');
      if (startElement) {
        startElement.style.display = 'none';
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="justify-top flex min-h-screen flex-col items-center">
      <div className="mt-12 h-auto max-h-80 w-screen flex-shrink-0 md:mt-[1vh] lg:mt-[-28vh]">
        <img src={Flag} alt="American Flag" className="h-auto w-full" />
      </div>
      <div className="fixed mt-8 text-center font-satisfy md:mt-6 lg:mt-3">
        <RapidSuccessionText text="Welcome...to  the  Black ⚓︎ Point Market !!" />
      </div>
    </div>
  );
};

export default Start;
