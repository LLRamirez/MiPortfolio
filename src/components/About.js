import React from "react";

export default function About() {
    return(
        <section id="about">
        <div className="container mx-auto flex flex-col-reverse pt-14 p-4 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            
              <div class="flex font-link-bold flex-col">
              <ul class="text-4xl text-white font-semibold pt-6 pb-3 md:pt-0">Hola, I'm</ul>
              <h1
              class="font-bold text-6xl md:text-8xl shadow"
              >Lindsey</h1>
               <h1 class="font-bold text-6xl md:text-8xl shadow"
               >Lidia</h1>
              </div>
              <br className="hidden lg:inline-block" />
              
              <div class="text-white pt-12">
             <ul class="text-4xl font-semibold pb-3">I Engineer</ul>
             <a href="#projects" class="hover:text-white">
                <li class="list-none text-xl font-extralight"><span class="blinking">_</span>Code (Sites +/ Apps)</li>
                <li class="list-none text-xl font-extralight"><span class="blinking">_</span>UI/UX (Infographics)</li>
                <li class="list-none text-xl font-extralight"><span class="blinking">_</span>E-commerce</li>
                </a>
                <ul class="text-4xl font-semibold pb-3 pt-6">I Write</ul>
                <a href="https://www.cweonline.org/">
                <li class="list-none text-xl font-extralight"><span class="blinking">_</span>Consultant </li>
                </a>
                {/* <a href="blog" class="hover:text-pink">
                <li class="list-none text-xl font-extralight">_Blog, Media </li> 
                </a> */}
                <ul class="text-4xl font-semibold pb-3 pt-6">I Travel</ul>
                <a href="#travel" class="hover:text-white">
                <li class="list-none text-xl font-extralight"><span class="blinking">_</span>Wax on, Wax off</li> 
                </a>
                <a href="#travel" class="hover:text-white">
                  <li class="list-none text-xl font-extralight"><span class="blinking">_</span>Model</li>
                </a>
                </div>
               
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="me-laying-down"
              src="./sideeye.png"
            />
          </div>
        </div>
      </section>
    );
}

