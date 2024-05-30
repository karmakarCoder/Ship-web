import React from "react";
import serve1 from "../../assets/Service/serve1.png";
import serve2 from "../../assets/Service/serve2.png";
import serve3 from "../../assets/Service/serve3.png";
import { Fade } from "react-awesome-reveal";

const Service = () => {
  return (
    <>
      <div className="overflow-hidden px-4 py-8 md:py-14 lg:px-0">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between">
            <Fade direction="left" triggerOnce="true">
              <div className="max-w-[286px]">
                <p className="text-md pb-5 font-poppins font-semibold text-thirdColor md:text-lg">
                  WHAT WE SERVE
                </p>
                <h3 className="pb-2 font-workSans text-[30px] font-light uppercase text-black md:pb-5 md:text-[44px]">
                  Top Values For You
                </h3>
                <p className="font-poppins text-sm font-normal text-[#191825] opacity-[75%] md:text-base">
                  Embrace life's vastness, venture forth,
                </p>
              </div>
            </Fade>
            <Fade direction="right" triggerOnce="true">
              <div className="flex items-center justify-between gap-x-[10px] pt-5 md:gap-x-0 md:pt-0">
                <div className="max-w-[286px]">
                  <img
                    src={serve1}
                    alt={serve1}
                    className="w-[72px] md:w-[100px]"
                  />
                  <h2 className="py-3 font-workSans text-[22px] font-normal text-black md:py-6 md:text-[28px]">
                    Lot of choices
                  </h2>
                  <p className="font-poppins text-xs font-normal leading-4 text-[#191825] opacity-[75%] md:text-base md:leading-normal">
                    Embrace life's vastness, venture forth,
                  </p>
                </div>
                <div className="max-w-[286px]">
                  <img
                    src={serve2}
                    alt={serve2}
                    className="w-[72px] md:w-[100px]"
                  />
                  <h2 className="py-3 font-workSans text-[22px] font-normal text-black md:py-6 md:text-[28px]">
                    Lot of choices
                  </h2>
                  <p className="font-poppins text-xs font-normal leading-4 text-[#191825] opacity-[75%] md:text-base md:leading-normal">
                    Embrace life's vastness, venture forth,
                  </p>
                </div>
                <div className="max-w-[286px]">
                  <img
                    src={serve3}
                    alt={serve3}
                    className="w-[72px] md:w-[100px]"
                  />
                  <h2 className="py-3 font-workSans text-[22px] font-normal text-black md:py-6 md:text-[28px]">
                    Lot of choices
                  </h2>
                  <p className="font-poppins text-xs font-normal leading-4 text-[#191825] opacity-[75%] md:text-base md:leading-normal">
                    Embrace life's vastness, venture forth,
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
