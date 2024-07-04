import React from "react";
import protocols1Img from "../../assets/Protocols/protocol1.png";
import protocols2Img from "../../assets/Protocols/protocol2.png";
import protocols3Img from "../../assets/Protocols/protocol3.png";
import { Fade } from "react-awesome-reveal";

const Protocols = () => {
  return (
    <>
      <div className="bg-protocolsBgColor">
        <div className="container">
          <div className="overflow-hidden px-4 py-[50px] sm:py-[40px] lg:px-0 lg:py-[60px]">
            <Fade direction="up" triggerOnce="true">
              <h1 className="pb-8 font-workSans text-[28px] font-light uppercase text-primaryFontColor lg:text-[44px]">
                Safety Protocols
              </h1>
            </Fade>
            <Fade direction="up" triggerOnce="true" duration={"1500"}>
              <div className="flex flex-wrap items-center justify-between sm:flex-nowrap">
                <div className="flex items-center gap-x-2 sm:gap-x-1 md:gap-x-3">
                  <img
                    src={protocols1Img}
                    alt={protocols1Img}
                    className="w-[60px] lg:w-[140px]"
                  />
                  <p className="text-md w-[235px] font-poppins font-light text-protocolsFontColor md:text-2xl">
                    100% Fresh and Filtered Air
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img
                    src={protocols2Img}
                    alt={protocols2Img}
                    className="w-[60px] lg:w-[140px]"
                  />
                  <p className="text-md w-[235px] font-poppins font-light text-protocolsFontColor sm:w-[200px] md:w-[235] md:text-2xl">
                    Completely Sanitized
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img
                    src={protocols3Img}
                    alt={protocols3Img}
                    className="w-[50px] lg:w-[140px]"
                  />
                  <p className="text-md w-[235px] font-poppins font-light text-protocolsFontColor md:text-2xl">
                    Elevated Health Protocols
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

export default Protocols;
