import React from 'react';
import { motion as m } from 'framer-motion';

const History = () => {
  return (
    <m.div
      initial={{ opacity: 0, x: '100vw' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-r from-rose-600 to-rose-300 text-zinc-800"
    >
      <nav className="bg-gray-800 px-6 py-4 text-center font-satisfy text-xl text-white md:text-2xl lg:text-4xl">
        The History of the Black Point Market
        {/* Add your navbar content here */}
      </nav>
      <div className="container mx-auto p-8">
        <h1 className="mb-6 text-center text-2xl font-bold underline md:text-3xl lg:text-5xl">
          Our History
        </h1>
        <p className="text-md mx-auto max-h-[480px] overflow-auto text-center text-sm font-bold text-slate-900 md:text-lg lg:text-2xl">
          The Black Point Market has a great history here in the Black Point
          Beach section of Niantic, Connecticut. Built in 1928 and run by the
          Wollschlager family for many years, several generations of "The Black
          Pointers" have cherished memories of their visits to what was often
          referred to as "The Little Store". Through the years, operation of the
          Market passed through several other owners. Eventually, the building
          fell into disrepair and the business was closed for some time. In
          2010, the Market underwent a dramatic renovation and transformation
          and is once again a lively and integral part of the Black Point
          community. Neighbors and locals from Black Point and surrounding
          communities come to meet up with friends and share their company over
          coffee, a good meal, or a tasty treat. Service providers working
          locally stop in for a quick breakfast, lunch, or a snack break during
          their busy days. Parents, children, and grandchildren connect in
          shared moments spent relaxing on our deck and patio. Whatever the
          reason for your visit, we welcome you all and hope you will feel at
          home.
        </p>
      </div>
    </m.div>
  );
};

export default History;
