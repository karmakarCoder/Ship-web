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
      <div
        id="destination"
        className="bg-[#f8f8f842] px-4 py-10 md:py-20 lg:px-0"
      >
        <div className="container">
          <div className="pb-8 text-center">
            <Fade direction="down" triggerOnce="true">
              <p className="text-md pb-4 font-poppins font-semibold uppercase text-thirdColor md:text-lg">
                choose your next destination
              </p>
            </Fade>
            <Fade direction="up" triggerOnce="true">
              <h2 className="text-[32px] font-light uppercase text-primaryFontColor md:text-[44px]">
                Explore top destination
              </h2>
            </Fade>
          </div>
          <div className="flex flex-wrap items-end justify-end  gap-y-6 pb-8 sm:flex-nowrap  sm:items-center sm:justify-between md:gap-y-0">
            <div className="flex items-center overflow-hidden rounded-[20px] border-[7px] border-[#fef0ef] sm:w-[420px] md:w-[615px]">
              <div
                className={`w-[180px] cursor-pointer bg-primaryColor py-3 text-center md:w-[200px]  ${india ? "bg-thirdColor text-primaryColor" : "text-thirdColor"}`}
                onClick={HandleIndia}
              >
                <span className="text-sm font-semibold md:text-base">
                  India
                </span>
              </div>
              <div
                className={`w-[180px] cursor-pointer bg-primaryColor py-3 text-center md:w-[200px]  ${dubai ? "bg-thirdColor text-primaryColor" : "text-thirdColor"}`}
                onClick={HandleDubai}
              >
                <span className="text-sm font-semibold md:text-base">
                  Dubai
                </span>
              </div>
              <div
                className={`w-[180px] cursor-pointer bg-primaryColor py-3 text-center md:w-[200px]  ${sriLanka ? "bg-thirdColor text-primaryColor" : "text-thirdColor"}`}
                onClick={HandleSrilanka}
              >
                <span className="text-sm font-semibold md:text-base">
                  Sri Lanka
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-x-7">
                <div className="prev-arrow  z-10 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-[#F6F5F5] text-3xl text-thirdColor transition-all hover:bg-thirdColor hover:text-[#F6F5F5] md:h-[50px] md:w-[50px] md:text-4xl">
                  <RiArrowLeftSLine />
                </div>
                <div className="next-arrow z-10 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-[#F6F5F5] text-3xl text-thirdColor transition-all hover:bg-thirdColor  hover:text-[#F6F5F5] md:h-[50px] md:w-[50px] md:text-4xl">
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
              breakpoints={{
                250: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                375: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },

                420: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                734: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
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
              breakpoints={{
                250: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                375: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },

                420: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                734: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
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
              breakpoints={{
                250: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                375: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },

                420: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                734: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
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
