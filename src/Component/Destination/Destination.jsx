import React from "react";
import Card from "../../Common/Card";

const Destination = () => {
  return (
    <>
      <div className="bg-[#f8f8f842] py-20">
        <div className="container">
          <div className="pb-8 text-center">
            <p className="pb-4 font-poppins text-lg font-semibold uppercase text-thirdColor">
              choose your next destination
            </p>
            <h2 className="text-primaryFontColor text-[44px] font-light uppercase">
              Explore top destination
            </h2>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center overflow-hidden rounded-[20px] border-[6px] border-[#fef0ef]">
              <div className="w-[200px] cursor-pointer bg-thirdColor py-3 text-center">
                <span className="text-base font-semibold text-primaryColor">
                  India
                </span>
              </div>
              <div className="w-[200px] cursor-pointer bg-thirdColor py-3 text-center">
                <span className="text-base font-semibold text-primaryColor">
                  India
                </span>
              </div>
              <div className="w-[200px] cursor-pointer bg-thirdColor py-3 text-center">
                <span className="text-base font-semibold text-primaryColor">
                  India
                </span>
              </div>
            </div>
            <div></div>
          </div>

          <div className="flex items-center justify-between">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
