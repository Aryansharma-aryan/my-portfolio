import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './components/About';
import Projects from './pages/projects';
import TechStack from './pages/TechStacks';
import Contact from './pages/contact';
import Footer from './pages/Footer';
import Education from './pages/Education';
import Experience from './pages/Experiance';
import Skills from './pages/Skills';



const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-black text-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Projects />
                <Skills/>
                <TechStack />
                <Experience/>

                <Education />
                <Contact />
              </>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/techstack" element={<TechStack />} />
                    <Route path="/skills" element={<Skills />} />


          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
