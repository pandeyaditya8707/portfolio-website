import React from 'react';
import './App.css';
import Navbar from './assets/components/Navbar';
import Hero from './assets/components/Hero';
import About from './assets/components/About';
import Project from './assets/components/Project';
import Contact from './assets/components/Contact';
import Footer from './assets/components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
       <About/>
       <Project/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
