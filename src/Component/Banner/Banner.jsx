import React from "react";
import Nav from "../Nav/Nav";
import { CiLocationOn } from "react-icons/ci";
import { LuCalendar } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { GoArrowDown } from "react-icons/go";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <>
      <div
        id="banner"
        className="w-full bg-no-repeat px-4 pb-[50px] lg:px-0 lg:pb-[85px]"
      >
        <div className="container">
          {/* Navigation bar */}
          <div>
            <Nav />
          </div>
          {/* Hero  */}
          <div className="pt-10 md:pt-16">
            <div
              className="flex items-center gap-x-6 md:gap-x-8
            "
            >
              <div className="h-[2px] w-[36px] bg-primaryColor md:w-[72px]"></div>

              <h1 className="font-waterBrush text-xl font-normal text-primaryColor md:text-[46px]">
                Explorer and Travel
              </h1>
            </div>

            <h2 className="pb-4 font-workSans text-[40px] font-normal text-primaryColor md:pb-8 md:text-[86px]">
              Let’s Go Now
            </h2>

            <p className="max-w-[580px] font-poppins text-xs font-normal leading-5 text-primaryColor md:text-base md:leading-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <div className="mt-8 flex max-w-[580px] items-center justify-between rounded-[20px] bg-[#ffffff1c] px-[10px] py-[11px] ">
              <div className="flex items-center gap-x-2 md:gap-x-4">
                <div>
                  <CiLocationOn className="text-lg text-white md:text-2xl" />
                </div>
                <div>
                  <p className="font-workSans text-xs font-normal text-primaryColor md:text-base">
                    Location
                  </p>
                  <p className="font-poppins text-base font-semibold text-primaryColor md:text-xl">
                    Thailand
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-2 md:gap-x-4">
                <div className="hidden h-8 w-[1.5px] bg-primaryColor sm:block"></div>
                <div>
                  <LuCalendar className="text-lg text-white md:text-2xl" />
                </div>
                <div>
                  <p className="font-workSans text-xs font-normal text-primaryColor md:text-base">
                    Date
                  </p>
                  <p className="font-poppins text-base font-semibold text-primaryColor md:text-xl">
                    13 May, 2023
                  </p>
                </div>
              </div>
              <div>
                <button className="flex h-[36px] w-[36px] items-center justify-center rounded-[20px] bg-gradient-to-tl from-[#a33090] to-[#e4539c] text-primaryColor active:bg-[#a33090] md:h-[52px] md:w-[52px]">
                  <CiSearch className="text-2xl md:text-4xl" />
                </button>
              </div>
            </div>

            <div className="mt-14 flex items-center gap-x-1">
              <p className="font-workSans text-base font-bold text-primaryColor md:text-lg">
                scroll down
              </p>
              <span className="animate-bounce text-lg md:text-2xl">
                <GoArrowDown />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
