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
          <div className="overflow-hidden px-4 py-[60px] lg:px-0">
            <Fade direction="up" triggerOnce="true">
              <h1 className="pb-8 font-workSans text-[28px] font-light uppercase text-primaryFontColor md:text-[44px]">
                Safety Protocols
              </h1>
            </Fade>
            <Fade direction="up" triggerOnce="true" duration={"1500"}>
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center gap-x-3">
                  <img
                    src={protocols1Img}
                    alt={protocols1Img}
                    className="w-[80px] md:w-[140px]"
                  />
                  <p className="w-[235px] font-poppins text-xl font-light text-protocolsFontColor md:text-2xl">
                    100% Fresh and Filtered Air
                  </p>
                </div>
                <div className="flex items-center gap-x-3">
                  <img
                    src={protocols2Img}
                    alt={protocols2Img}
                    className="w-[80px] md:w-[140px]"
                  />
                  <p className="w-[235px] font-poppins text-xl font-light text-protocolsFontColor md:text-2xl">
                    Completely Sanitized
                  </p>
                </div>
                <div className="flex items-center gap-x-3">
                  <img
                    src={protocols3Img}
                    alt={protocols3Img}
                    className="w-[80px] md:w-[140px]"
                  />
                  <p className="w-[235px] font-poppins text-xl font-light text-protocolsFontColor md:text-2xl">
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
