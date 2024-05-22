import React from "react";
import protocols1Img from "../../assets/Protocols/protocol1.png";
import protocols2Img from "../../assets/Protocols/protocol2.png";
import protocols3Img from "../../assets/Protocols/protocol3.png";

const Protocols = () => {
  return (
    <>
      <div className="bg-protocolsBgColor">
        <div className="container">
          <div className="py-[60px]">
            <h1 className="pb-8 font-workSans text-[44px] font-light uppercase text-primaryFontColor">
              Safety Protocols
            </h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <img src={protocols1Img} alt={protocols1Img} />
                <p className="text-protocolsFontColor w-[235px] font-poppins text-2xl font-light">
                  100% Fresh and Filtered Air
                </p>
              </div>
              <div className="flex items-center gap-x-3">
                <img src={protocols2Img} alt={protocols2Img} />
                <p className="text-protocolsFontColor w-[235px] font-poppins text-2xl font-light">
                  Completely Sanitized
                </p>
              </div>
              <div className="flex items-center gap-x-3">
                <img src={protocols3Img} alt={protocols3Img} />
                <p className="text-protocolsFontColor w-[235px] font-poppins text-2xl font-light">
                  Elevated Health Protocols
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Protocols;
