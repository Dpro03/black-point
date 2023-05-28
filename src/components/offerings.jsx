import React from 'react';
import { motion as m } from 'framer-motion';

const Offerings = () => {
  const offerings = [
    {
      id: 1,
      name: 'Vanilla Bean Ice Cream',
      description: 'Creamy and rich, made with real vanilla beans.',
      price: 4.99,
      imageUrl:
        'https://ninakneadstobake.com/wp-content/uploads/2020/06/vanilla_bean_icecream_1200px_3.webp',
    },
    {
      id: 2,
      name: 'Chocolate Fudge Brownie Ice Cream',
      description: 'Chocolate ice cream with chunks of fudge brownie mixed in.',
      price: 5.99,
      imageUrl:
        'https://cdn.shopify.com/s/files/1/2255/5671/files/chocolate_at_home_will_torrent_grande.jpg?v=1504795669',
    },
    {
      id: 3,
      name: 'Strawberry Sorbet',
      description: 'Refreshing sorbet made with real strawberries.',
      price: 164.98,
      imageUrl:
        'data:image/jpeg;base64,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',
    },
    {
      id: 4,
      name: 'Mint Chip Ice Cream',
      description: 'Mint ice cream with chocolate chips.',
      price: 5.99,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREdlPzbMZHIYyBRaN30k0EN-y0j76R4G_Q9w&usqp=CAU',
    },
    {
      id: 5,
      name: 'Caramel Pecan Ice Cream',
      description: 'Caramel ice cream with pieces of pecans.',
      price: 6.99,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM5vH2ATgN6lwIZ1uuj4Gpqn42b1IcJF9yt44QItRiKzv_rcVj3nR-pfU-hdqiD3OYfXk&usqp=CAU',
    },
    {
      id: 6,
      name: 'Vanilla Bean Ice Cream',
      description: 'Creamy and rich, made with real vanilla beans.',
      price: 4.99,
      imageUrl:
        'https://ninakneadstobake.com/wp-content/uploads/2020/06/vanilla_bean_icecream_1200px_3.webp',
    },
    {
      id: 7,
      name: 'Chocolate Fudge Brownie Ice Cream',
      description: 'Chocolate ice cream with chunks of fudge brownie mixed in.',
      price: 5.99,
      imageUrl:
        'https://cdn.shopify.com/s/files/1/2255/5671/files/chocolate_at_home_will_torrent_grande.jpg?v=1504795669',
    },
  ];

  return (
    <m.div initial={{ opacity: 0, scale: 0.7 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.75, ease: 'easeInOut' }}
    exit={{ opacity: 0 }}
    className="h-full w-full bg-gradient-to-r from-indigo-500 to-red-700 text-slate-100">
      <div className="container mx-auto px-4 py-8 pb-24">
        <br />
        <h1 className="mb-8 text-center text-4xl font-bold underline decoration-yellow-300 underline-offset-8">
          Black Point Offerings!
        </h1>
        <br />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((offering) => (
            <div
              key={offering.id}
              className="border-shadow-md transform overflow-hidden rounded-2xl bg-lime-600 p-6 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 hover:shadow-xl hover:shadow-rose-800"
            >
              <img
                className="h-52 w-full object-cover"
                src={offering.imageUrl}
                alt={offering.name}
              />
              <div className="p-4">
                <h2 className="mb-2 text-2xl font-bold">{offering.name}</h2>
                <p className="text-base text-gray-700">
                  {offering.description}
                </p>
                <p className="mt-2 text-xl font-bold">
                  ${offering.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </m.div>
  );
};

export default Offerings;
