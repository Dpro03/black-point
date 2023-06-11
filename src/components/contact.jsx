import React from 'react';
import { motion as m } from 'framer-motion';

const Contact = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: '-100vh' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
      exit={{ opacity: 0 }}
      className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-orange-700 to-orange-500 py-12"
    >
      <h1 className="mb-4 mt-1 text-center text-2xl font-bold text-black underline decoration-pink-800 underline-offset-8 md:text-3xl lg:text-5xl">
        Contact Us!
      </h1>
      <br />
      <br />
      <div className="mt-6 text-center">
        <p className="text-lg md:text-xl lg:text-2xl">
          <u>Address:</u>
          <br />
        </p>
        <p className="text-lg md:text-xl lg:text-2xl">
          Black Point Market
          <br />
          35 Nehantic Drive
          <br />
          Niantic, CT 06357
        </p>
        <br />
        <p className="text-lg md:text-xl lg:text-2xl">
          <u>email:</u>
          <br />
          <a href="mailto:info@blackpointmarket.com">
            info@blackpointmarket.com
          </a>
        </p>
        <br />
        <p className="text-lg md:text-xl lg:text-2xl">
          <u>Telephone:</u>
          <br />

          <a href="tel:(860) 451-8028">(860) 451-8028</a>
        </p>
      </div>
    </m.div>
  );
};

export default Contact;
