import React from 'react';
import { motion as m } from 'framer-motion';

const Welcome = () => {
  return (
    <>
      <m.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, ease: 'easeInOut' }}
        exit={{ opacity: 0 }}
        className="h-full w-full bg-gradient-to-r from-rose-600 to-orange-500 text-slate-900"
      >
        <div className="text-center">
          <br />
          <br />
          <br />
          <h1 className="text-lg md:text-xl lg:text-3xl">
            Welcome to the Black Point Market!
          </h1>
          <p className="lg:text-2xlflex flex-col text-sm text-slate-50 md:text-xl">
            How we have changed through the years. Check <br></br> out how our
            building has evolved...
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex w-full flex-col items-center justify-center p-10 md:w-1/3">
            <img
              src="./src/assets/blackpoint1928.jpeg"
              alt="Black Point Market-1928"
              className="h-96 w-full"
            />
            <div className="bg-black py-2 text-white">1928</div>
          </div>
          <div className="flex w-full flex-col items-center justify-center p-10 md:w-1/3">
            <img
              src="./src/assets/blackpoint1975.jpeg"
              alt="Black Point Market-1975"
              className="h-96 w-full"
            />
            <div className="bg-black py-2 text-white">1975</div>
          </div>
          <div className="flex w-full flex-col items-center justify-center p-10 md:w-1/3">
            <img
              src="./src/assets/blackpoint2022.jpeg"
              alt="Black Point Market-2022"
              className="h-96 w-full"
            />
            <div className="bg-black py-2 text-white">2022</div>
          </div>
        </div>
        <div className="text-center">
          <br />
          <br />
          <h1 className="lg:text-2xlflex flex-col text-sm font-bold md:text-xl">
            Hello! Welcome to Black Point Market.
            <br />
            We are open for the season under
            <br />
            new ownership, but we are dedicated
            <br />
            to keeping the market's past goodness
            <br />
            alive and we cannot wait to show
            <br />
            you what we have to offer you
            <br />
            this year! Feel free to look around
            <br />
            and use the above menu buttons to
            <br />
            browse our website!
          </h1>
          <br />
          <br />
          <br />
        </div>
        <div className="flex justify-center px-4">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center pb-20 md:flex-col lg:flex-row">
            <img
              className="mx-auto mb-4 mt-4 h-auto w-1/4 sm:w-1/2 lg:pr-4"
              src="./src/assets/blackpoint3.jpeg"
              alt="pic3"
            />
            <img
              className="mx-auto mb-4 mt-4 h-auto w-1/4 sm:w-1/2 lg:pr-4"
              src="./src/assets/blackpoint10.jpeg"
              alt="pic10"
            />
            <img
              className="mx-auto mb-4 mt-4 h-auto w-1/4 sm:w-1/2 lg:pr-4"
              src="./src/assets/blackpoint11.jpeg"
              alt="pic11"
            />
          </div>
        </div>
      </m.div>
    </>
  );
};

export default Welcome;
