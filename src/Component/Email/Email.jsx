import React from "react";
import cruise from "../../assets/CruiseDetailsEmail/ship.png";
import { FaTelegramPlane } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Email = () => {
  return (
    <>
      <div
        id="email"
        className="overflow-hidden bg-emailBgColor px-4 py-[20px] md:py-[60px] lg:px-0"
      >
        <div className="container">
          <div className="flex flex-col items-center justify-between sm:flex-row sm:gap-x-4 md:gap-x-0">
            <Fade direction="left" triggerOnce="true">
              <img
                src={cruise}
                alt={cruise}
                className="w-[250px] sm:w-[520px] md:w-[600px]"
              />
            </Fade>
            <div className="max-w-[603px]">
              <Fade direction="up" triggerOnce="true" duration={"1000"}>
                <h4 className="pb-4 pt-5 font-workSans text-[26px] font-light uppercase text-primaryFontColor md:pt-0 md:text-[40px]">
                  Get Cruise deals Directly in your Inbox
                </h4>
                <p className="pb-4 font-poppins text-sm font-normal text-extraFontColor opacity-[75%] md:pb-10 md:text-base">
                  Lorem ipsum dolor sit amet consectetur. Egestas et feugiat
                  purus enim facilisi nunc blandit nullam.
                </p>
              </Fade>

              <Fade direction="up" triggerOnce="true" duration={"1500"}>
                <div className="relative rounded-[10px] border-2 border-transparent focus:border-thirdColor">
                  <input
                    type="text"
                    placeholder="Enter Your email address"
                    className="w-full rounded-[10px] bg-primaryColor py-[17px] pl-5 font-poppins text-xs font-normal text-placeholderColor"
                  />
                  <div className="absolute right-[5px] top-[5px] flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[10px] bg-thirdColor text-xl text-primaryColor active:bg-[#692867]">
                    <FaTelegramPlane />
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;
