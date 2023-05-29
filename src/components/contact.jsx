import React from 'react';
import { motion as m } from 'framer-motion';

const Contact = () => {
  return (
    <m.div
      initial={{ opacity: 0, x: '-100vw' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
      exit={{ opacity: 0 }}
      className="flex min-h-screen flex-col items-center justify-center bg-zinc-600"
    >
      <h1 className="mb-6 text-xl text-rose-500 underline decoration-yellow-300 underline-offset-8 md:text-3xl lg:text-5xl">
        Contact Us!
      </h1>
      <div className="text-center">
        <p className="text-lg md:text-xl lg:text-2xl">
          <u>Our Address:</u>
        </p>
        <p className="text-lg md:text-xl lg:text-2xl">
          35 Nehantic Drive
          <br />
          Niantic, CT 06357
        </p>
        <br />
        <p className="text-lg md:text-xl lg:text-2xl">
          <u>Our email:</u>
          <br />
          <a href="mailto:test@test.net">lookItUp</a>
        </p>
        <br />
        <p className="text-lg md:text-xl lg:text-2xl">
          <u>Our Phone:</u>
          <br />
          <a href="tel:(321) 555-5555">(321) 555-5555</a>
        </p>
        <br />
        <p className="text-lg md:text-xl lg:text-2xl">
          <u className="text-yellow-300">Our Likes/Dislikes:</u>
          <br />
          <u className="text-pink-600">Hers:</u>
          <br />
          1.) Men in Black
          <br />
          2.) Long Sleeve T-Shirts
          <br />
          <u className='text-blue-500'>His:</u>
          <br />
          1.) X-L Anything!
          <br />
          2.) Guys who shotgun Bud Light🫦
        </p>
        <img
          className="mx-auto my-4 h-auto w-60 pb-20 md:w-60"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOvqyEw4VXe8ML-ordKHRxbdO1gljgurHmbg&usqp=CAU"
          alt="girlandicecream"
        />
      </div>
    </m.div>
  );
};

export default Contact;
