import React from "react";
import cruise from "../../assets/CruiseDetailsEmail/ship.png";
import { FaTelegramPlane } from "react-icons/fa";

const Email = () => {
  return (
    <>
      <div className="bg-emailBgColor py-[60px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <img src={cruise} alt={cruise} />
            </div>
            <div className="max-w-[603px]">
              <h4 className="pb-4 font-workSans text-[40px] font-light uppercase text-primaryFontColor">
                Get Cruise deals Directly in your Inbox
              </h4>
              <p className="pb-10 font-poppins text-base font-normal text-extraFontColor opacity-[75%]">
                Lorem ipsum dolor sit amet consectetur. Egestas et feugiat purus
                enim facilisi nunc blandit nullam.
              </p>
              <div className="relative rounded-[10px] border-2 border-transparent focus:border-thirdColor">
                <input
                  type="text"
                  placeholder="Enter Your email address"
                  className="text-placeholderColor w-full rounded-[10px] bg-primaryColor py-[17px] pl-5 font-poppins text-xs font-normal"
                />
                <div className="absolute right-[5px] top-[5px] flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[10px] bg-thirdColor text-xl text-primaryColor active:bg-[#692867]">
                  <FaTelegramPlane />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;
