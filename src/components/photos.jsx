import React, { useState, useEffect } from 'react';
import { motion as m } from 'framer-motion';

const Photos = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleKeyDown = (event) => {
    if (event.keyCode === 37) {
      // Left Arrow Key
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    } else if (event.keyCode === 39) {
      // Right Arrow Key
      setCurrentImageIndex((prevIndex) =>
        prevIndex === totalImages - 1 ? prevIndex : prevIndex + 1
      );
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentImageIndex]);

  const images = [
    './src/assets/blackpoint1.jpeg',
    './src/assets/blackpoint2.jpeg',
    './src/assets/blackpoint3.jpeg',
    './src/assets/blackpoint4.jpeg',
    './src/assets/blackpoint5.jpeg',
    './src/assets/blackpoint6.jpeg',
    './src/assets/blackpoint7.jpeg',
    './src/assets/blackpoint8.jpeg',
    './src/assets/blackpoint9.jpeg',
    './src/assets/blackpoint10.jpeg',
    './src/assets/blackpoint11.jpeg',
    './src/assets/blackpoint12.jpeg',
    './src/assets/blackpoint13.jpeg',
    './src/assets/blackpoint14.jpeg',
    './src/assets/blackpoint15.jpeg',
  ];

  const totalImages = images.length;

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? prevIndex : prevIndex + 1
    );
  };

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
        <div className="flex justify-center relative">
          <button
            className="arrow-button left-arrow"
            onClick={handlePrevClick}
          >
            &lt;
          </button>
          <button
            className="arrow-button right-arrow"
            onClick={handleNextClick}
          >
            &gt;
          </button>
          <div className="mb-24 grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {images.map((image, index) => (
              <a
                key={index}
                href={image}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={`rounded-2xl ${
                    index === currentImageIndex ? 'border-4 border-blue-500' : ''
                  }`}
                  src={image}
                  alt={`Photo ${index + 1}`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default Photos;
