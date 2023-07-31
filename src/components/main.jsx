import React from 'react';
import { motion as m } from 'framer-motion';

const Main = () => {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
      exit={{ opacity: 0 }}
      className="h-full w-full bg-gradient-to-r from-blue-500 to-rose-500 text-slate-300"
    >
      <br />
      <br />
      <h1 className="text-center font-satisfy text-xl font-bold tracking-widest text-white underline decoration-sky-800 underline-offset-8 md:text-2xl lg:text-6xl">
        Black Point Market
      </h1>
      <br />
      <br />
      <p className="text-center font-satisfy text-lg font-bold text-white md:text-xl lg:text-3xl">
        We're Not Only A Market....
      </p>
      <p className="mx-auto max-w-6xl p-4 text-center text-sm text-black md:text-xl lg:text-3xl">
        Welcome to Black Point Market, your go-to destination for all things
        delightful in the heart of our beachside community. Nestled by our
        beautiful shore, we are proud to bring you a unique blend of flavors and
        experiences.
        <br />
        <br /> At Black Point Market, we offer a mouthwatering selection of
        premium ice cream, a sizzling grill, and a curated collection of
        sundries to cater to the diverse tastes and needs of our amazing beach
        residents. Indulge your senses with our creamy and delicious ice cream
        made with the finest ingredients. From classic favorites like chocolate
        and vanilla to inventive creations like sea salt caramel and tropical
        fruit medleys, our ice cream parlor is a haven for those seeking the
        perfect scoop to satisfy their cravings.
        <br />
        <br /> But that's not all - our grill is a haven for food enthusiasts
        looking for a hearty and satisfying meal. From juicy burgers and
        perfectly grilled cheesesteaks to refreshing salads and flavorful
        vegetarian options, our menu is designed to tantalize your taste buds
        while embracing the laid-back beach vibe. In addition to our culinary
        offerings, we also take pride in our selection of t-shirts, candy bars,
        chips and more.
        <br />
        <br /> We provide beach essentials and local goods to enhance your
        beach-going experience. From sunscreen and beach toys to locally sourced
        products and souvenirs, we have everything you need to make your time by
        the shore even more enjoyable. Black Point Market is more than just a
        place to eat and shop; it IS a community hub, a place where neighbors
        gather, friends connect, and memories are made.
        <br />
        <br /> Whether you're a local resident or a visitor passing through, we
        invite you to immerse yourself in the warm and inviting atmosphere, soak
        up the beach vibes, and indulge in the flavors that define our coastal
        haven. Join us at Black Point Market and let us be your destination for
        scrumptious treats, savory delights, and the essence of beach life. We
        look forward to serving you with a smile and creating memorable
        experiences along the way.{' '}
      </p>
      <p className="text-center text-sm text-stone-950  md:text-xl lg:text-3xl">
        You will LOVE it here!
        <br />
      </p>
      <br />
      <div className="flex flex-col items-center justify-center sm:flex-col md:flex-row lg:flex-row">
        <div className="flex flex-wrap justify-center">
          <img
            className="m-2 h-64 w-64"
            src="./src/assets/blackpoint7.jpeg"
            alt="store-shelf"
          />
          <img
            className="m-2 h-64 w-64"
            src="./src/assets/blackpoint9.jpeg"
            alt="front-of-store"
          />
          <img
            className="m-2 h-64 w-64"
            src="./src/assets/blackpoint5.jpeg"
            alt="chips"
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
