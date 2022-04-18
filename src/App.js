import React from "react";
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Photography from "./components/Photography";

export default function App() {
  return (
    <main class="font-link text-gray-400 bg-gray-900 body-font overflow-hidden">
      {/* <NavBar/> */}
      <About/>
      <Projects/>
      <Skills/>
      {/* <Blog/> */}
      <Photography/>
      <Contact/>
    </main>
  );
}
