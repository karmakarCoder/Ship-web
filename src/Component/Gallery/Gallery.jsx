import React from "react";
import img1 from "../../assets/Photo-Gallery/gallery1.png";
import img2 from "../../assets/Photo-Gallery/gallery2.png";
import img3 from "../../assets/Photo-Gallery/gallery3.png";
import img4 from "../../assets/Photo-Gallery/gallery4.png";
import img5 from "../../assets/Photo-Gallery/gallery5.png";
import { Fade } from "react-awesome-reveal";

const Gallery = () => {
  return (
    <>
      <div id="gallery" className="px-4 py-[60px] lg:px-0">
        <div className="container">
          <div>
            <Fade direction="up" triggerOnce="true">
              <h2 className="pb-8 text-center font-workSans text-[28px] font-light uppercase text-primaryFontColor md:text-[44px]">
                Photo Gallery
              </h2>
            </Fade>

            <div className="flex h-[564px] flex-col items-center justify-between gap-y-4 overflow-hidden rounded-[10px] sm:flex-row md:gap-y-0">
              <div className="flex h-full w-[100%] flex-wrap justify-between gap-y-4 overflow-hidden rounded-[10px] sm:w-[60%] md:w-[70%] md:gap-y-[31px]">
                <Fade
                  direction="left"
                  triggerOnce="true"
                  className="h-[47%] w-[60%] overflow-hidden rounded-[10px] bg-purple-500 "
                >
                  <img
                    src={img1}
                    alt={img1}
                    className="h-full w-full object-cover"
                  />
                </Fade>
                <Fade
                  direction="right"
                  triggerOnce="true"
                  className="h-[47%] w-[35%] overflow-hidden rounded-[10px] bg-yellow-500"
                >
                  <img
                    src={img2}
                    alt={img2}
                    className="h-full w-full object-cover"
                  />
                </Fade>
                <Fade
                  direction="left"
                  triggerOnce="true"
                  className="h-[47%] w-[35%] overflow-hidden rounded-[10px] bg-gray-900"
                >
                  <img
                    src={img4}
                    alt={img4}
                    className="h-full w-full object-cover"
                  />
                </Fade>
                <Fade
                  direction="right"
                  triggerOnce="true
                "
                  className="h-[47%] w-[60%] overflow-hidden rounded-[10px] bg-slate-600"
                >
                  <img
                    src={img3}
                    alt={img3}
                    className="h-full w-full object-cover"
                  />
                </Fade>
              </div>
              <Fade
                direction="right"
                triggerOnce="true"
                className=" h-full w-[100%] overflow-hidden  rounded-[10px] bg-[#ffffffc9] sm:w-[35%] md:w-[27%]"
              >
                <img
                  src={img5}
                  alt={img5}
                  className="h-full w-full object-cover"
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
