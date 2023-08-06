import React, { useState, useEffect } from 'react';
import { motion as m } from 'framer-motion';
import ReactDom from 'react-dom';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Offerings from './components/offerings';
import History from './components/history';
import Welcome from './components/welcome';
import Main from './components/main';
import Contact from './components/contact';
import Footer from './components/footer';
import Photos from './components/photos';
import Start from './components/start';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [showStartPage, setShowStartPage] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (showStartPage) {
      // Hide the start page after a delay
      const timeout = setTimeout(() => {
        setShowStartPage(false);
      }, 2750);

      return () => clearTimeout(timeout);
    }
  }, [showStartPage]);

  return (
    <div className="App">
      {showStartPage && location.pathname === '/' ? (
        <Start />
      ) : (
        <>
          <Navbar />
          <AnimatePresence>
            <Routes location={location}>
              <Route path="/" element={<Main />} />
              <Route path="/main" element={<Main />} />
              <Route path="/offerings" element={<Offerings />} />
              <Route path="/history" element={<History />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/start" element={<Start />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
