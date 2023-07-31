import React from 'react';
import { motion as m } from 'framer-motion';

const Offerings = () => {
  const offerings = [
    {
      id: 1,
      name: "Stevo's amazing Philly Cheese Steak😜",
      description:
        'A real Philly cheese steak with your choice of Provolone or American cheese.',
      price: 11.75,
      imageUrl: './src/assets/phillycheese.jpg',
    },
    {
      id: 2,
      name: 'Foot-long Hot Dog',
      description: 'A delicious hot dog with your choice of toppings.',
      price: 6.25,
      imageUrl: './src/assets/hotdog.jpeg',
    },
    {
      id: 3,
      name: 'New England Clam Chowder',
      description: 'Thick, rich and hearty New England style clam chowder.',
      price: 5.48,
      imageUrl: './src/assets/chowder.jpeg',
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
    <m.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
      exit={{ opacity: 0 }}
      className="flex h-full w-full flex-col bg-gradient-to-r from-rose-600 via-indigo-600 to-cyan-400 text-white"
    >
      <div className="container mx-auto px-4 py-8 pb-24">
        <br />
        <h1 className="mb-8 text-center text-4xl font-bold text-rose-100 underline decoration-rose-500 underline-offset-8">
          Black Point Menu
        </h1>
        <p className="pb-6 text-center text-xl text-rose-100">
          Check below menu for more offers!
        </p>
        <img
          src={'./src/assets/blackpointmenu2.png'}
          alt="Menu Picture"
          style={{ width: '100%' }}
        />
        <img
          src={'./src/assets/blackpointmenu2.png'}
          alt="Menu Picture"
          style={{ width: '100%' }}
        />

        <h2 className="mt-3 text-center text-2xl font-bold text-rose-200 underline decoration-rose-500 underline-offset-8">
          Featured Offerings
        </h2>
        <br />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((offering) => (
            <div
              key={offering.id}
              className="border-shadow-md transform overflow-hidden rounded-2xl border-2 bg-rose-500 p-6 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-rose-700 hover:shadow-xl hover:shadow-rose-800"
            >
              <img
                className="h-52 w-full object-cover"
                src={offering.imageUrl}
                alt={offering.name}
              />
              <div className="p-4">
                <h2 className="mb-2 rounded-xl border-2 border-sky-100 bg-indigo-400 text-center text-2xl font-extrabold text-black">
                  {offering.name}
                </h2>
                <p className="mt-6 text-xl font-bold">{offering.description}</p>
                <p className="mt-6 text-xl font-bold text-black">
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
