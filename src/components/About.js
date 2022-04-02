import React from "react";

export default function About() {
    return(
        <section id="about">
        <div className="container mx-auto flex p-4 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            
              <div class="flex font-link-bold flex-col">
              <h1
              class="font-bold text-8xl"
              >Lindsey</h1>
               <h1 class="font-bold text-8xl"
               >Lidia</h1>
              </div>
              <br className="hidden lg:inline-block" />
              
              <div class="text-white">
             <ul class="text-4xl font-semibold pb-3">I Engineer</ul>
             <a href="#projects" class="hover:text-white">
                <li class="list-none text-xl font-extralight">_Software (Sites + Apps)</li>
                
      
                <li class="list-none text-xl font-extralight">_Digital products (Infographics)</li>
                <li class="list-none text-xl font-extralight">_E-commerce + Crypto payments </li>
                </a>
                <ul class="text-4xl font-semibold pb-3 pt-6">I Write</ul>
                <a href="blog">
                <li class="list-none text-xl font-extralight">_Digital Nomad Consultant </li>
                </a>
                <a href="blog" class="hover:text-pink">
                <li class="list-none text-xl font-extralight">_Blog, Media </li> 
                </a>
                <ul class="text-4xl font-semibold pb-3 pt-6">I Travel</ul>
                <a href="#travel" class="hover:text-white">
                <li class="list-none text-xl font-extralight">_Wax on, Wax off of being</li> 
                </a>
                <a href="#photos" class="hover:text-white">
                  <li class="list-none text-xl font-extralight">_Model w <a href="https://www.statemgmt.com/new-york/lifestyle/women/all/1596959" target="_blank">StateMGMT NYC</a> </li>
                </a>
                </div>
               
            
            {/* <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex whitespace-nowrap text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Let's discuss
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex whitespace-nowrap text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                See My Past Work
              </a>
            </div> */}
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