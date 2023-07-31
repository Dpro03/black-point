import React from 'react';
import { motion as m } from 'framer-motion';

const Photos = () => {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.75, ease: 'linear' }}
      exit={{ opacity: 0 }}
      className="flex min-h-screen w-full flex-col bg-gradient-to-r from-red-600 to-amber-500 text-indigo-800"
    >
      <div className="container mx-auto flex-grow items-center">
        <h1 className="mb-4 mt-4 text-center text-4xl font-bold tracking-widest text-slate-800">
          Photos
        </h1>
        <div className="flex justify-center">
          <div className="mb-24 grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <a
              href="./src/assets/blackpoint1.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-2xl"
                src="./src/assets/blackpoint1.jpeg"
                alt="Photo 1"
              />
            </a>
            <a
              href="./src/assets/blackpoint2.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-2xl"
                src="./src/assets/blackpoint2.jpeg"
                alt="Photo 2"
              />
            </a>
            <a
              href="./src/assets/blackpoint3.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-2xl"
                src="./src/assets/blackpoint3.jpeg"
                alt="Photo 3"
              />
            </a>
            <a
              href="./src/assets/blackpoint4.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-2xl"
                src="./src/assets/blackpoint4.jpeg"
                alt="Photo 4"
              />
            </a>
            <a
              href="./src/assets/blackpoint5.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-2xl"
                src="./src/assets/blackpoint5.jpeg"
                alt="Photo 5"
              />
            </a>
            <a
              href="./src/assets/blackpoint6.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-2xl"
                src="./src/assets/blackpoint6.jpeg"
                alt="Photo 6"
              />
            </a>
            <a
              href="./src/assets/blackpoint7.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-2xl"
                src="./src/assets/blackpoint7.jpeg"
                alt="Photo 7"
              />
            </a>
            <a
              href="./src/assets/blackpoint8.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-2xl"
                src="./src/assets/blackpoint8.jpeg"
                alt="Photo 8"
              />
            </a>
            <a
              href="./src/assets/blackpoint9.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-2xl"
                src="./src/assets/blackpoint9.jpeg"
                alt="Photo 9"
              />
            </a>
            <a
              href="./src/assets/blackpoint10.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-2xl"
                src="./src/assets/blackpoint10.jpeg"
                alt="Photo 10"
              />
            </a>
            <a
              href="./src/assets/blackpoint11.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-2xl"
                src="./src/assets/blackpoint11.jpeg"
                alt="Photo 11"
              />
            </a>
            <a
              href="./src/assets/blackpoint12.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-2xl"
                src="./src/assets/blackpoint12.jpeg"
                alt="Photo 12"
              />
            </a>
            <a
              href="./src/assets/blackpoint13.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-2xl"
                src="./src/assets/blackpoint13.jpeg"
                alt="Photo 13"
              />
            </a>
            <a
              href="./src/assets/blackpoint14.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-2xl"
                src="./src/assets/blackpoint14.jpeg"
                alt="Photo 14"
              />
            </a>
            <a
              href="./src/assets/blackpoint15.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-2xl"
                src="./src/assets/blackpoint15.jpeg"
                alt="Photo 15"
              />
            </a>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default Photos;
