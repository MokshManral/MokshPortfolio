import './styles.css';
import { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import Expertise from './components/Expertise';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TechStack from './components/TechStack.jsx';

import useCustomCursor from './hooks/UseCustomCursor.js';
import useRevealAnimation from './hooks/useRevealAnimation.js';
import Faq from './components/Faq.jsx';
import FunFacts from './components/FunFacts.jsx';
import LearningFeed from './components/LearningFeed.jsx';
import WhyWorkWithMe from './components/WhyWorkWithMe.jsx';
import Timeline from './components/Journey.jsx';
import Values from './components/Values.jsx';
import FutureGoals from './components/FutureGoals.jsx';
import Interests from './components/Interests.jsx';
import CurrentLearning from './components/CurrentLearning.jsx';

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
      <About />
      <Timeline />
      <Values />
      <TechStack />
      <Works />
      <LearningFeed />
      <Interests />
      <WhyWorkWithMe />
      <CurrentLearning/>
      <Expertise />
      <FutureGoals />
      <FunFacts />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default App;