import React from 'react';
import { motion as m } from 'framer-motion';

const Main = () => {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
      exit={{ opacity: 0 }}
      className="h-screen w-full bg-gradient-to-r from-orange-500 to-rose-500 text-slate-300"
    >
      <br />
      <br />
      <h1
        className="text-center font-satisfy text-xl font-bold tracking-widest text-black underline decoration-slate-900 
      underline-offset-4 md:text-2xl lg:text-6xl"
      >
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

      <div className="container flex flex-col items-center md:flex-row">
        <img
          className="mx-auto mb-2 md:flex flex-col md:flex-row"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSBV4_rqdSOp8nVPxC-XsU8MqaMJth5Pbi5w&usqp=CAU"
          alt="sunset-beach"
        />
        <img
          className="mx-auto flex mb-2 md:flex flex-col items-center md:flex-row"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxTgXFe3sILxoAr5hf1ZRyXFs16UhtDDp1fQ&usqp=CAU"
          alt="sunset-beach"
        />
        <img
          className="mx-auto flex flex-col items-center md:flex-row"
          src="data:image/jpeg;base64,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"
          alt="sunset-beach"
        />
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
