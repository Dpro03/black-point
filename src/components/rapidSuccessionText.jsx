import React, { useEffect, useState } from 'react';

const RapidSuccessionText = ({ text }) => {
  const [visibleText, setVisibleText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    const animateText = () => {
      timeout = setTimeout(() => {
        setVisibleText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 110); // Adjust the delay (in milliseconds) to control the speed of the animation
    };

    if (currentIndex < text.length) {
      animateText();
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, text]);

  const words = text.match(/\S+/g) || []; // Split text into words using regex
  const coloredText = words.map((word, index) => {
    const isRed = index % 2 === 0;

    return (
      <span
        key={index}
        className={isRed ? 'text-red-700' : 'text-blue-700'}
        style={{ display: 'inline-block', marginRight: '2rem' }}
      >
        { word }
      </span>
    );
  });

  return (
    <div className="text-center text-lg font-bold md:text-4xl lg:text-6xl">
      {coloredText.slice(0, currentIndex)}
    </div>
  );
};

export default RapidSuccessionText;
