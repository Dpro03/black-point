import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="relative z-10 h-40 rounded border border-rose-400 py-4 pt-8"
      style={{
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGt5sjiCd52BnTrMJ4ibZkZivR1nTZ4rOgpg&usqp=CAU')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="h-18 h-18 border-rose-q100 md:w-7/8 lg:w-7/8 xl:w-7/8 container mx-auto w-1/2 rounded border-2 px-4 opacity-90 sm:w-3/4">
        <div className="flex h-full items-center justify-center">
          <div className="ml-2 mr-6 rounded-full py-2 pb-6 pt-6 text-center font-satisfy text-lg font-bold text-slate-800 hover:text-pink-600 md:mr-4 md:text-xl lg:mr-8 lg:text-4xl xl:text-5xl">
            <a href="/">Black Point Market 🍦 🍔</a>
          </div>
          <div className="block md:hidden">
            <button
              className="ml-2.5 flex items-center rounded border-2 border-gray-900 px-3 py-3 text-slate-300 hover:border-amber-300 hover:text-pink-600"
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
            <ul className="inline-flex">
              <li>
                <a
                  className="flex items-center px-4 py-2 font-satisfy text-md text-slate-100 hover:text-pink-600 md:text-lg lg:text-2xl"
                  href="/main"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  className="flex items-center px-4 py-2 font-satisfy text-lg text-slate-100 hover:text-pink-600 md:text-xl lg:text-2xl"
                  href="/welcome"
                >
                  Welcome
                </a>
              </li>
              <li>
                <a
                  className="flex items-center px-4 py-2 font-satisfy text-lg text-slate-100 hover:text-pink-600 md:text-xl lg:text-2xl"
                  href="/offerings"
                  onClick={toggleMenu}
                >
                  Offerings
                </a>
              </li>
              <li>
                <a
                  className="flex items-center px-4 py-2 font-satisfy text-lg text-slate-100 hover:text-pink-600 md:text-xl lg:text-2xl"
                  href="/history"
                  onClick={toggleMenu}
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  className="flex items-center px-4 py-2 font-satisfy text-lg text-slate-100 hover:text-pink-600 md:text-xl lg:text-2xl"
                  href="/contact"
                  onClick={toggleMenu}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className="flex items-center px-4 py-2 font-satisfy text-lg text-slate-100 hover:text-pink-600 md:text-xl lg:text-2xl"
                  href="/photos"
                  onClick={toggleMenu}
                >
                  Photos
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <ul className="flex flex-col bg-rose-700">
            <li>
              <a
                className="flex items-center px-4 py-2 text-white hover:text-sky-300"
                href="/main"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>

            <li>
              <a
                className="flex items-center px-4 py-2 text-white hover:text-sky-300"
                href="/welcome"
                onClick={toggleMenu}
              >
                Welcome
              </a>
            </li>
            <li>
              <a
                className="flex items-center px-4 py-2 text-white hover:text-sky-300"
                href="/offerings"
                onClick={toggleMenu}
              >
                Offerings
              </a>
            </li>
            <li>
              <a
                className="flex items-center px-4 py-2 text-white hover:text-sky-300"
                href="/history"
                onClick={toggleMenu}
              >
                Our Story
              </a>
            </li>

            <li>
              <a
                className="flex items-center px-4 py-2 text-white hover:text-sky-300"
                href="/contact"
                onClick={toggleMenu}
              >
                Contact Us
              </a>
            </li>

            <li>
              <a
                className="flex items-center px-4 py-2 text-white hover:text-sky-300"
                href="/photos"
                onClick={toggleMenu}
              >
                Photos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
