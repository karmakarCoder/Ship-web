import React from "react";
import Nav from "../Nav/Nav";
import { CiLocationOn } from "react-icons/ci";
import { LuCalendar } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { GoArrowDown } from "react-icons/go";

const Banner = () => {
  return (
    <>
      <div id="banner" className="w-full bg-no-repeat pb-[85px]">
        <div className="container">
          {/* Navigation bar */}
          <div>
            <Nav />
          </div>
          {/* Hero  */}
          <div className="pt-16">
            <div
              className="flex items-center gap-x-8
            "
            >
              <div className="h-[2px] w-[72px] bg-primaryColor"></div>
              <h1 className="font-waterBrush text-[46px] font-normal text-primaryColor">
                Explorer and Travel
              </h1>
            </div>
            <h2 className="pb-8 font-workSans text-[86px] font-normal text-primaryColor">
              Let’s Go Now
            </h2>
            <p className="max-w-[580px] font-poppins text-base font-normal leading-6 text-primaryColor">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <div className="mt-8 flex max-w-[580px] items-center justify-between rounded-[20px] bg-[#ffffff1c] px-[10px] py-[11px] ">
              <div className="flex items-center gap-x-4">
                <div>
                  <CiLocationOn className="text-2xl text-white" />
                </div>
                <div>
                  <p className="font-workSans text-base font-normal text-primaryColor">
                    Location
                  </p>
                  <p className="font-poppins text-xl font-semibold text-primaryColor">
                    Thailand
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <div className="h-8 w-[1.5px] bg-primaryColor"></div>
                <div>
                  <LuCalendar className="text-2xl text-white" />
                </div>
                <div>
                  <p className="font-workSans text-base font-normal text-primaryColor">
                    Date
                  </p>
                  <p className="font-poppins text-xl font-semibold text-primaryColor">
                    13 May, 2023
                  </p>
                </div>
              </div>
              <div>
                <button className="flex h-[52px] w-[52px] items-center justify-center rounded-[20px] bg-gradient-to-tl from-[#a33090] to-[#e4539c] text-primaryColor">
                  <CiSearch className="text-4xl" />
                </button>
              </div>
            </div>

            <div className="mt-14 flex items-center gap-x-1">
              <p className="font-workSans text-lg font-bold text-primaryColor">
                scroll down
              </p>
              <span className="animate-bounce text-2xl">
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
