import React from "react";
import serve1 from "../../assets/Service/serve1.png";
import serve2 from "../../assets/Service/serve2.png";
import serve3 from "../../assets/Service/serve3.png";
import { Fade } from "react-awesome-reveal";

const Service = () => {
  return (
    <>
      <div className="overflow-hidden py-14">
        <div className="container">
          <div className="flex items-center justify-between">
            <Fade direction="left" triggerOnce="true">
              <div className="max-w-[286px]">
                <p className="pb-5 font-poppins text-lg font-semibold text-thirdColor">
                  WHAT WE SERVE
                </p>
                <h3 className="pb-5 font-workSans text-[44px] font-light uppercase text-black">
                  Top Values For You
                </h3>
                <p className="font-poppins text-base font-normal text-[#191825] opacity-[75%]">
                  Embrace life's vastness, venture forth,
                </p>
              </div>
            </Fade>
            <Fade direction="right" triggerOnce="true">
              <div className="flex items-center justify-between">
                <div className="max-w-[286px]">
                  <img src={serve1} alt={serve1} />
                  <h2 className="py-6 font-workSans text-[28px] font-normal text-black">
                    Lot of choices
                  </h2>
                  <p className="font-poppins text-base font-normal text-[#191825] opacity-[75%]">
                    Embrace life's vastness, venture forth,
                  </p>
                </div>
                <div className="max-w-[286px]">
                  <img src={serve2} alt={serve2} />
                  <h2 className="py-6 font-workSans text-[28px] font-normal text-black">
                    Lot of choices
                  </h2>
                  <p className="font-poppins text-base font-normal text-[#191825] opacity-[75%]">
                    Embrace life's vastness, venture forth,
                  </p>
                </div>
                <div className="max-w-[286px]">
                  <img src={serve3} alt={serve3} />
                  <h2 className="py-6 font-workSans text-[28px] font-normal text-black">
                    Lot of choices
                  </h2>
                  <p className="font-poppins text-base font-normal text-[#191825] opacity-[75%]">
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
