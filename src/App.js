import React from "react";
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Photography from "./components/Photography";
import Gallery from "./components/Gallery";
import Toggle from './components/Toggle';

export default function App() {
  return (
    <main class="font-link text-gray-400 bg-gray-900 body-font overflow-hidden">
      {/* <NavBar/> */}
      <About/>
      <Projects/>
      <Skills/>
      {/* <Blog/> */}
      {/* <Gallery/> */}
      <Toggle/>
      <Photography/>
      <Contact/>
    </main>
  );
}
