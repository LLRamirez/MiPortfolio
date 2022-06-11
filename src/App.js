import React from "react";
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Photography from "./components/Photography";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <main class="font-link text-gray-400 bg-gray-900 body-font overflow-hidden">
      {/* <NavBar/> */}
      <About/>
      <Projects/>
      <Skills/>
      {/* <Blog/> */}
      {/* <Gallery/> */}
      <Photography/>
      <Contact/>
    </main>
  );
}
