import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`relative z-10 h-40 rounded border border-rose-400 bg-gradient-to-r from-rose-600 to-rose-400 py-4 pt-8 ${
        isMenuOpen ? 'flex items-center justify-center' : ''
      }`}
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/186840575/photo/blue-ocean-view-panorama.jpg?s=612x612&w=0&k=20&c=oXw8xIsLNTc1_HOKTEpi5rgGIa034KBw859qIuRqfv4=')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex h-full items-center justify-center">
        <div
          className="ml-1 mr-4 rounded-full py-2 pb-6 pt-6 text-center font-satisfy text-xl font-bold
             text-slate-800 hover:text-pink-600 md:mr-4 md:text-2xl lg:mr-4 lg:text-2xl xl:mr-4 xl:text-4xl"
        >
          <a
            href="/"
            className="inline-flex items-center gap-4 overflow-hidden opacity-100"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' }}
          >
            <span className="mr-4 text-5xl">⚓️</span>
            <span>Black Point Market</span>
          </a>
        </div>

        <div className="block md:hidden">
          <button
            className="ml-2.5 flex items-center rounded border-2 border-gray-900 px-3 py-3 text-slate-600 hover:border-rose-300 hover:text-pink-600"
            type="button"
            onClick={toggleMenu}
          >
            <svg
              className="hamburger-menu mt-1 h-4 w-4 fill-current text-black"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title className="nav-menu">Menu</title>
              <path
                className={`${isMenuOpen ? 'hidden' : 'block'}`}
                d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z"
              />
              <path
                className={`${isMenuOpen ? 'block' : 'hidden'}`}
                d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:block">
          <ul className="inline-flex bg-transparent">
            <li>
              <a
                className="text-md flex items-center px-4 py-2 font-satisfy text-slate-800 hover:text-pink-600 md:text-lg lg:text-2xl"
                href="/main"
              >
                Home
              </a>
            </li>

            <li>
              <a
                className="flex items-center px-4 py-2 font-satisfy text-lg text-slate-800 hover:text-pink-600 md:text-xl lg:text-2xl"
                href="/welcome"
              >
                Welcome
              </a>
            </li>
            <li>
              <a
                className="flex items-center px-4 py-2 font-satisfy text-lg text-slate-800 hover:text-pink-600 md:text-xl lg:text-2xl"
                href="/offerings"
                onClick={toggleMenu}
              >
                Offerings
              </a>
            </li>
            <li>
              <a
                className="flex items-center px-4 py-2 font-satisfy text-lg text-slate-800 hover:text-pink-600 md:text-xl lg:text-2xl"
                href="/history"
                onClick={toggleMenu}
              >
                Our Story
              </a>
            </li>
            <li>
              <a
                className="flex items-center px-4 py-2 font-satisfy text-lg text-slate-800 hover:text-pink-600 md:text-xl lg:text-2xl"
                href="/contact"
                onClick={toggleMenu}
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                className="flex items-center px-4 py-2 font-satisfy text-lg text-slate-800 hover:text-pink-600 md:text-xl lg:text-2xl"
                href="/photos"
                onClick={toggleMenu}
              >
                Photos
              </a>
            </li>
            <li>
              <span className="ml-12 text-3xl">🪁</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className="mb-0 ml-2 mr-2 mt-24 flex flex-col rounded-2xl border-2 border-black bg-rose-500">
          <li>
            <a
              className="flex items-center px-4 py-2 text-white hover:text-sky-400"
              href="/main"
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>

          <li>
            <a
              className="flex items-center px-4 py-2 text-white hover:text-sky-400"
              href="/welcome"
              onClick={toggleMenu}
            >
              Welcome
            </a>
          </li>
          <li>
            <a
              className="flex items-center px-4 py-2 text-white hover:text-sky-400"
              href="/offerings"
              onClick={toggleMenu}
            >
              Offerings
              <span className="ml-10">🍦</span>
              <span className="ml-4">🍔</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center px-4 py-2 text-white hover:text-sky-400"
              href="/history"
              onClick={toggleMenu}
            >
              Our Story<span className="ml-9">💤</span>
            </a>
          </li>

          <li>
            <a
              className="flex items-center px-4 py-2 text-white hover:text-sky-400"
              href="/contact"
              onClick={toggleMenu}
            >
              Contact Us
            </a>
          </li>

          <li>
            <a
              className="flex items-center px-4 py-2 text-white hover:text-sky-400"
              href="/photos"
              onClick={toggleMenu}
            >
              Photos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
