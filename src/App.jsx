import './styles.css'
import { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import Expertise from './components/Expertise';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import useCustomCursor from './hooks/UseCustomCursor.js';
import useRevealAnimation from './hooks/useRevealAnimation.js';

function App() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useCustomCursor(ringRef, dotRef)

  useRevealAnimation();

  return (
    <>
      <div ref={ringRef} className="cursor-ring"></div>
      <div ref={dotRef} className="cursor-dot"></div>
      

      <Header />
      <Hero />
      <Works />
      <Expertise />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;