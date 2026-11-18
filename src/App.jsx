import './styles.css';
import { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TechStack from './components/TechStack.jsx';

import useCustomCursor from './hooks/UseCustomCursor.js';
import useRevealAnimation from './hooks/useRevealAnimation.js';
import Faq from './components/Faq.jsx';
import LearningFeed from './components/LearningFeed.jsx';
import Timeline from './components/Journey.jsx';
import Interests from './components/Interests.jsx';
import CurrentLearning from './components/CurrentLearning.jsx';

function App() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const [theme, setTheme] = useState('dark');

  useCustomCursor(ringRef, dotRef)

  useRevealAnimation();

  useEffect(() => {
    document.body.classList.toggle('theme-light', theme === 'light');
    document.body.classList.toggle('theme-dark', theme === 'dark');
  }, [theme]);

  return (
    <>
      <div ref={ringRef} className="cursor-ring"></div>
      <div ref={dotRef} className="cursor-dot"></div>

      <Header theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Timeline />
      <Works />
      <TechStack />
      <LearningFeed />
      <Interests />
      <CurrentLearning/>
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
