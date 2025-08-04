import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Events from './components/Events';
import Projects from './components/Projects';
import Team from './components/Team';
import Founder from './components/Founder';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navigation />
      <Header />
      <About />
      <Events />
      <Projects />
      <Team />
      <Founder />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;