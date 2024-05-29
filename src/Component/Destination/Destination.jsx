import React, { useState } from "react";
import Card from "../../Common/Card";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { indiaData, dubaiData, srilankaData } from "../../../Data/Data";
import { Fade } from "react-awesome-reveal";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Destination = () => {
  const [dubai, setdubai] = useState(false);
  const [india, setindia] = useState(true);
  const [sriLanka, setsriLanka] = useState(false);
  const [indiadata, setindiadata] = useState(indiaData);
  const [dubaidata, setdubaidata] = useState(dubaiData);
  const [srilankadata, setsrilankadata] = useState(srilankaData);

  const HandleIndia = () => {
    setindia(true);
    setdubai(false);
    setsriLanka(false);
  };

  const HandleDubai = () => {
    setdubai(true);
    setindia(false);
    setsriLanka(false);
  };

  const HandleSrilanka = () => {
    setsriLanka(true);
    setindia(false);
    setdubai(false);
  };
  return (
    <>
      <div id="destination" className="bg-[#f8f8f842] py-20">
        <div className="container">
          <div className="pb-8 text-center">
            <Fade direction="down" triggerOnce="true">
              <p className="pb-4 font-poppins text-lg font-semibold uppercase text-thirdColor">
                choose your next destination
              </p>
            </Fade>
            <Fade direction="up" triggerOnce="true">
              <h2 className="text-[44px] font-light uppercase text-primaryFontColor">
                Explore top destination
              </h2>
            </Fade>
          </div>
          <div className="flex items-center justify-between pb-8">
            <div className="flex items-center overflow-hidden rounded-[20px] border-[7px] border-[#fef0ef]">
              <div
                className={`w-[200px] cursor-pointer bg-primaryColor py-3 text-center ${india ? "bg-thirdColor text-primaryColor" : "text-thirdColor"}`}
                onClick={HandleIndia}
              >
                <span className="text-base font-semibold">India</span>
              </div>
              <div
                className={`w-[200px] cursor-pointer bg-primaryColor py-3 text-center  ${dubai ? "bg-thirdColor text-primaryColor" : "text-thirdColor"}`}
                onClick={HandleDubai}
              >
                <span className="text-base font-semibold">Dubai</span>
              </div>
              <div
                className={`w-[200px] cursor-pointer bg-primaryColor py-3 text-center  ${sriLanka ? "bg-thirdColor text-primaryColor" : "text-thirdColor"}`}
                onClick={HandleSrilanka}
              >
                <span className="text-base font-semibold">Sri Lanka</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-x-7">
                <div className="prev-arrow  z-10 flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-[#F6F5F5] text-4xl text-thirdColor transition-all hover:bg-thirdColor hover:text-[#F6F5F5]">
                  <RiArrowLeftSLine />
                </div>
                <div className="next-arrow z-10 flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-[#F6F5F5] text-4xl text-thirdColor transition-all hover:bg-thirdColor hover:text-[#F6F5F5]">
                  <RiArrowRightSLine />
                </div>
              </div>
            </div>
          </div>

          {india && (
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              modules={[Navigation]}
              navigation={{
                prevEl: ".prev-arrow",
                nextEl: ".next-arrow",
              }}
            >
              {indiadata?.map((data) => (
                <SwiperSlide key={data.id}>
                  <Card
                    title={data.name}
                    placeimg={data.image}
                    des={data.description}
                    star={data.rating}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {dubai && (
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              modules={[Navigation]}
              navigation={{
                prevEl: ".prev-arrow",
                nextEl: ".next-arrow",
              }}
            >
              {dubaidata?.map((data) => (
                <SwiperSlide key={data.id}>
                  <Card
                    title={data.name}
                    des={data.description}
                    placeimg={data.image}
                    star={data.rating}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {sriLanka && (
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              modules={[Navigation]}
              navigation={{
                prevEl: ".prev-arrow",
                nextEl: ".next-arrow",
              }}
            >
              {srilankadata?.map((data) => (
                <SwiperSlide key={data.id}>
                  <Card
                    title={data.name}
                    placeimg={data.image}
                    des={data.description}
                    star={data.rating}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </>
  );
};

export default Destination;
