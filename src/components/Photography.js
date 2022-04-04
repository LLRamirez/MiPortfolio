import React from "react";
// import Gallery from "react-photo-gallery";

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export default function Photography() {


const images = [
  // "https://picsum.photos/200/300?image=1050",
  // "https://picsum.photos/300/300?image=206",
  // "https://source.unsplash.com/pF1ug8ysTtY/600x400?image=206",
  "./subway.jpg",
  "./japantemple.jpg",
  "./up.png",
  "./mevegas.jpg",
  "./ayafire.jpg",
  "./treeEcua.jpg",
  "./mecave.jpg",
  "./sapa.jpg",
  "./camping.jpg",
  "./bkk.jpg",
  "./PRbooks.jpg",
  "./shama2.png",
  "./shaman.jpg",
  "./hammock.jpg",
  "./mebeacon.jpg",
  "./boyz2skool.jpg",
  "./ayabed.jpg",
  "./face1.png",
  "./crownb.jpg",
  "./pai.jpg",
  "./side.png",
  "./menmonkey.jpg",
  "./shama.png",
  "./songkran.jpg",
  "./DR.png",
  "./jcpark.jpg",
  "./menlonshaman.jpg",
  "./tall.jpeg",
  "./cave.jpg",
  "./Dadbeach.jpg",
  "./Bar.png",
  "./balconyDR.jpg",
  "./smileside.png",
  "./mencave.jpg",
  "./mofongo.jpg",
  "./dick.jpg",
  "./thaisoup.jpg",
  "./skii.jpg",
  "./maryblk.jpg"

  
]

  return (
    <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
  );
}



