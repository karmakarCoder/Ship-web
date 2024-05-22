import React from "react";
import img1 from "../../assets/Photo-Gallery/gallery1.png";
import img2 from "../../assets/Photo-Gallery/gallery2.png";
import img3 from "../../assets/Photo-Gallery/gallery3.png";
import img4 from "../../assets/Photo-Gallery/gallery4.png";
import img5 from "../../assets/Photo-Gallery/gallery5.png";

const Gallery = () => {
  return (
    <>
      <div className="py-[60px]">
        <div className="container">
          <div>
            <h2 className="pb-8 text-center font-workSans text-[44px] font-light uppercase text-primaryFontColor">
              Photo Gallery
            </h2>
            <div className="flex h-[564px] items-center justify-between overflow-hidden rounded-[10px]">
              <div className="flex h-full w-[70%] flex-wrap justify-between gap-y-[31px] rounded-[10px]">
                <div className="h-[47%] w-[60%] overflow-hidden rounded-[10px] bg-purple-500 ">
                  <img
                    src={img1}
                    alt={img1}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-[47%] w-[35%] overflow-hidden rounded-[10px] bg-yellow-500">
                  <img
                    src={img2}
                    alt={img2}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-[47%] w-[35%] overflow-hidden rounded-[10px] bg-gray-900">
                  <img
                    src={img4}
                    alt={img4}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-[47%] w-[60%] overflow-hidden rounded-[10px] bg-slate-600">
                  <img
                    src={img3}
                    alt={img3}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className=" h-full w-[27%]  overflow-hidden rounded-[10px] bg-[#ffffffc9]">
                <img
                  src={img5}
                  alt={img5}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
