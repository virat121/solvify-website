import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import CodeAThon from './components/CodeAThon';
import About from './components/About';
import Events from './components/Events';
import Projects from './components/Projects';
import Team from './components/Team';
import Founder from './components/Founder';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navigation />
      <Header />
      <CodeAThon />
      <About />
      <Events />
      <Projects />
      <Team />
      <Founder />
      <Timeline />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;