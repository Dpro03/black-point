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
        className="h-full w-full bg-gradient-to-r from-blue-500 to-rose-600 text-amber-300"
      >
        <div className="text-center">
          <br />
          <br />
          <br />
          <h1 className="text-lg md:text-xl lg:text-3xl">
            Welcome to the Black Point Market!
          </h1>
          <p className="lg:text-2xlflex flex-col text-sm text-slate-50 md:text-xl">
            How we have changed through the years. Check <br></br> out how this
            building has evolved...
          </p>
          <br />
          <p className="lg:text-2xlflex flex-col text-sm text-slate-50 md:text-xl">
            I am trying to find some filler cause<br></br> I do not know what to
            write!
          </p>
          <br />
          <p className="lg:text-2xlflex flex-col text-sm text-slate-50 md:text-xl">
            Wow - that 70's style is so groovy! Love that awesome trash barrel.
            <br />
            Classin' it up, Niantic Style!🥸🥕
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex w-full flex-col items-center justify-center p-10 md:w-1/3">
            <img
              src="https://www.blackpointmarket.com/x/cdn/?https://storage.googleapis.com/wzukusers/user-31632971/images/5a64c6c1674216uzk6gC/Market_1928_d600.jpg"
              alt="Black Point Market-1928"
              className="h-96 w-full"
            />
            <div className="bg-black py-2 text-white">1928</div>
          </div>
          <div className="flex w-full flex-col items-center justify-center p-10 md:w-1/3">
            <img
              src="https://www.blackpointmarket.com/x/cdn/?https://storage.googleapis.com/wzukusers/user-31632971/images/5a64c700d0142MqMaAG4/Black-Point-Market---July-1974_d400.jpg"
              alt="Black Point Market-1975"
              className="h-96 w-full"
            />
            <div className="bg-black py-2 text-white">1975</div>
          </div>
          <div className="flex w-full flex-col items-center justify-center p-10 md:w-1/3">
            <img
              src="https://www.blackpointmarket.com/x/cdn/?https://storage.googleapis.com/production-homestead-v1-0-5/365/255365/boc7Ij2Y/2779bdd69fca4de593b122ef54dee392"
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
            We are getting ready to reopen for the season
            <br />
            under new ownership and we cannot wait
            <br />
            to show you what we have to offer you awesome
            <br />
            individuals this year! Feel free to look around
            <br />
            and use the above menu buttons to browse
            <br />
            our website!
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
