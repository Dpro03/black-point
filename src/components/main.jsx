import React from 'react';
import { motion as m } from 'framer-motion';

const Main = () => {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
      exit={{ opacity: 0 }}
      className="h-screen w-full bg-gradient-to-r from-orange-500 to-rose-700 text-slate-300"
    >
      <br />
      <br />
      <h1 className="text-center font-satisfy text-xl font-bold tracking-widest text-black underline decoration-slate-900 underline-offset-4 md:text-2xl lg:text-6xl">
        Black Point Market
      </h1>
      <br />
      <br />
      <p className="text-center font-satisfy text-lg font-bold text-black md:text-xl lg:text-3xl">
        We're Not Only A Market....
      </p>
      <p className="text-center font-satisfy text-sm text-black md:text-xl lg:text-3xl">
        We cater to all your needs, especially
        <br />
        if you have to spend your time catering to
        <br />
        crazy family members, or are too tired after
        <br />
        the beach and possibly too rich and/or
        <br />
        lazy to save a few bucks and drive the
        <br />
        short distance to town! 🤣🤣
      </p>
      <p className="text-center text-sm text-stone-950 underline decoration-stone-800 md:text-xl lg:text-3xl">
        You're gonna LOVE it here!
        <br />
      </p>
      <br />
      <div className="container flex flex-col items-center justify-center md:flex-row lg:flex-row">
        <div className="flex justify-center">
          <img
            className="m-2 h-64 w-64"
            src="./src/assets/blackpoint7.jpeg"
            alt="sunset-beach"
          />
          <img
            className="m-2 h-64 w-64"
            src="./src/assets/blackpoint13.jpeg"
            alt="sunset-beach"
          />
          <img
            className="m-2 h-64 w-64"
            src="./src/assets/blackpoint5.jpeg"
            alt="sunset-beach"
          />
        </div>
      </div>
      <br />
      <div className="text-center text-sm text-slate-900 md:text-lg lg:text-2xl">
        Here is where we are ⇣ located!
      </div>
      <br />
      <div className="pb-24 text-center">
        {/* Google maps here */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20658.6486533197!2d-72.21765122029366!3d41.30184633237831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1684352046160!5m2!1sen!2sus"
          className="md:h-85 lg:h-90 h-80 w-full"
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </m.div>
  );
};

export default Main;
