import React from "react";
import Gallery from "react-photo-gallery";

export default function Photography() {

  

  const photos = [
    {
      src: "./hammock.jpg",
      width: 4,
      height: 3
    },
    {
      src: "./sapa.jpg",
      width: 1,
      height: 1
    },
    {
      src: "./tall.jpeg",
      width: 3,
      height: 4
    },
    {
      src: "./tararoof.jpg",
      width: 3,
      height: 4
    },
    {
      src: "./pai.jpg",
      width: 3,
      height: 4
    },
    {
      src: "./cave.jpg",
      width: 4,
      height: 3
    },
    {
      src: "./side.png",
      width: 3,
      height: 4
    },
    {
      src: "./up.png",
      width: 4,
      height: 3
    },
    {
      src: "./smileside.png",
      width: 4,
      height: 3
    },
    {
      src: "./face1.png",
      width: 3,
      height: 4
    },
    {
      src: "./blue.png",
      width: 4,
      height: 3
    },
    {
      src: "./Bar.png",
      width: 4,
      height: 3
    },
    {
      src: "./barcelona.png",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
      width: 4,
      height: 3
    }
  ];

  const BasicRows = () => <Gallery
    direction={"column"}
   photos={photos} />;

  return (
    <section id="photos">
     <div className="text-center mb-20">
        
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Photography
          </h1>
      
    
    <div>
    <BasicRows/>
    </div>
  </div>
    </section>
  );
}