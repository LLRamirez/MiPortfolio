import React from "react";
import NavBar from '../src/components/NavBar';
import About from '../src/components/About';
import Projects from '../src/components/Projects';
import Skills from '../src/components/Skills';
import Contact from '../src/components/Contact';
import Blog from '../src/components/Blog';
import Photography from "../src/components/Photography";
import Gallery from "../src/components/Gallery";
import Toggle from '../src/components/Toggle';
import WaxOn from "../src/components/WaxOn";
import WaxOnC from "../src/components/WaxOnC";

export default function App() {
  return (
    <main class="font-link text-gray-400 bg-gray-900 body-font overflow-hidden">
      {/* <NavBar/> */}
      <About/>
      <Projects/>
      <Skills/>
      {/* <Blog/> */}
      {/* <Gallery/> */}
      {/* <Toggle/> */}
      {/* <WaxOn/>
      <WaxOnC/> */}
      <Photography/>
      <Contact/>
    </main>
  );
}
