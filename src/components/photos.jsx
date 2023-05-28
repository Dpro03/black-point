import React from 'react';
import { motion as m } from 'framer-motion';

const Photos = () => {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.75, ease: 'linear' }}
      exit={{ opacity: 0 }}
      className="flex min-h-screen w-full flex-col bg-gradient-to-r from-violet-600 to-emerald-500 text-indigo-800"
    >
      <div className="container mx-auto flex-grow items-center">
        <h2 className="mb-4 text-center text-2xl font-bold tracking-widest text-rose-800">
          🌺Photos🌺
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <img
              className="h-48 object-cover"
              src="https://www.allrecipes.com/thmb/B1z_tl24FfEDtheuIgp-J9YUBV8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/435381-ice-cream-base-Pam-Ziegler-Lutz-4x3-1-88949560ccf04d0fae12225be5b83fc2.jpg"
              alt="Photo 1"
            />
            <img
              className="h-48 object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8ZhK02PAcufiXlJb0bhMSWdHMFGQvXLTbA&usqp=CAU"
              alt="Photo 2"
            />
            <img
              className="h-48 object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSliN4s4nRUG-i8bIOyyp3YBaXN17t9vsQWpZcmdhmkb6qTuXr1LLFAJZM4U5hp87q-WQw&usqp=CAU"
              alt="Photo 3"
            />
            <img
              className="h-48 object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPkAUoxhFR0_vp1x2_ImMbGtT4ImDba-NrTw&usqp=CAU"
              alt="Photo 4"
            />
            <img
              className="h-48 object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPkAUoxhFR0_vp1x2_ImMbGtT4ImDba-NrTw&usqp=CAU"
              alt="Photo 4"
            />
            <img
              className="h-48 object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSliN4s4nRUG-i8bIOyyp3YBaXN17t9vsQWpZcmdhmkb6qTuXr1LLFAJZM4U5hp87q-WQw&usqp=CAU"
              alt="Photo 3"
            />
            <img
              className="h-48 object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8ZhK02PAcufiXlJb0bhMSWdHMFGQvXLTbA&usqp=CAU"
              alt="Photo 2"
            />
            <img
              className="h-48 object-cover"
              src="https://www.allrecipes.com/thmb/B1z_tl24FfEDtheuIgp-J9YUBV8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/435381-ice-cream-base-Pam-Ziegler-Lutz-4x3-1-88949560ccf04d0fae12225be5b83fc2.jpg"
              alt="Photo 1"
            />
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default Photos;
