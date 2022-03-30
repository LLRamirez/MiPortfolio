import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Blog() {
  return (
    <section id="blog">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Dribbles
        </h1>
        <div className="flex flex-wrap m-4">
        
            <div className="p-4 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                {/* <TerminalIcon className="block w-8 text-gray-500 mb-4" /> */}
                {/* <p className="leading-relaxed mb-6">blogee</p> */}
                <div className="inline-flex items-center">
                
                  {/* <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div> */}


<div class="mx-auto px-4 py-4 max-w-xl my-auto">
    <div class="bg-gray-50 md:bg-white md:shadow-xl rounded-lg mb-6 ">
      
      <a target="_blank" rel="noreferrer noopener" href="https://timesofindia.indiatimes.com/india/international-space-station-to-retire-in-2030-will-fall-into-pacific-ocean-a-year-later-nasa/articleshow/89392862.cms">
        <div class="md:flex-shrink-0">

          <img src="https://static.toiimg.com/thumb/msid-89392914,width-1070,height-580,imgsize-104716,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" alt="uploaded cover image"
            class="object-cover h-full w-full rounded-lg rounded-b-none"/>

        </div>
      </a>
      
      <div class="py-1">
        <div class="p-4">
          <h2 class="truncate font-bold mb-2 md:mt-4 text-2xl text-gray-800 tracking-normal">International Space Station to retire in 2030, will fall into Pacific Ocean a year later: Nasa - Times of India</h2>
          
          <p class="break-words text-sm text-gray-700 px-2 mr-1">India News: The International Space Station (ISS), the world’s largest habitable artificial satellite in space being managed by five countries, will continue its .</p>
          
        </div>

        <div class="flex items-center justify-between p-2 md:p-4 md:mx-4">
          <a target="_blank" rel="noreferrer noopener" href="https://timesofindia.indiatimes.com/india/international-space-station-to-retire-in-2030-will-fall-into-pacific-ocean-a-year-later-nasa/articleshow/89392862.cms">
            <div class="flex items-center">
              <div class="text-sm ml-2">
                
                <p class="text-black leading-none">The Times of India</p>
                

                
                <p class="text-gray-700">February 6, 2022</p>
                
              </div>
            </div>
          </a>
          <a target="_blank" rel="noreferrer noopener" href="https://timesofindia.indiatimes.com/india/international-space-station-to-retire-in-2030-will-fall-into-pacific-ocean-a-year-later-nasa/articleshow/89392862.cms"
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