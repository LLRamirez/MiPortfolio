import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Blog() {
  return (
    <section id="blog">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Blog
        </h1>
        <div className="flex flex-wrap m-4 overflow-auto">
        
            <div className="p-4 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
               
                <div className="inline-flex items-center">
                



<div class="mx-auto px-4 py-4 max-w-xl my-auto">
    <div class="bg-gray-50 md:bg-white md:shadow-xl rounded-lg mb-6 ">
      
      <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/home?lang=en">
        <div class="md:flex-shrink-0">

          <img src="https://static.toiimg.com/thumb/msid-89392914,width-1070,height-580,imgsize-104716,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" alt="uploaded cover image"
            class="object-cover h-full w-full rounded-lg rounded-b-none"/>

        </div>
      </a>
      
      <div class="py-1">
        <div class="p-4">
          <h2 class="truncate font-bold mb-2 md:mt-4 text-2xl text-gray-800 tracking-normal">International Space Station to retire in 2030, will fall into Pacific Ocean a year later: Nasa - Times of India</h2>
          
          <p class="break-words text-sm text-gray-700 px-2 mr-1">The International Space Station (ISS), the world’s largest habitable artificial satellite in space being managed by five countries, will continue its .</p>
          
        </div>

        <div class="flex items-center justify-between p-2 md:p-4 md:mx-4">
          <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/home?lang=en">
            <div class="flex items-center">
              <div class="text-sm ml-2">
                
                <p class="text-black leading-none">The Times of India</p>
                

                
                <p class="text-gray-700">February 6, 2022</p>
                
              </div>
            </div>
          </a>
          <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/home?lang=en"
            class="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 py-2">
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>

  
  

                </div>
              </div>
            </div>
         
        </div>
      </div>
    </section>
  );
}