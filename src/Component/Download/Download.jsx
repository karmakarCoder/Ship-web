import React from "react";
import appStore from "../../assets/Download section img/app_store.png";
import playStore from "../../assets/Download section img/play_store.png";
import dummyPhone from "../../assets/Download section img/phone.png";
import { Fade } from "react-awesome-reveal";

const Download = () => {
  return (
    <>
      <div className="overflow-hidden px-4 py-[60px] lg:px-0">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
            <Fade direction="left" triggerOnce="true">
              <div className="max-w-[640px]">
                <h3 className="pb-4 font-workSans text-[26px] font-light uppercase text-primaryFontColor md:pb-8 md:text-[44px]">
                  Download Cordelia Experience App
                </h3>

                <p className="font-poppins text-sm font-normal text-extraFontColor opacity-[75%] md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra nunc ante velit vitae. Est tellus vitae, nullam
                  lobortis enim.
                </p>
                <div className="mt-8 flex items-center justify-center gap-x-5 pb-7 sm:mt-4 sm:items-start sm:justify-start sm:pb-3 md:mt-8 md:items-center md:justify-center md:pb-7">
                  <img
                    src={appStore}
                    alt={appStore}
                    className="w-[150px] cursor-pointer md:w-[250px]"
                  />
                  <img
                    src={playStore}
                    alt={playStore}
                    className="w-[150px] cursor-pointer md:w-[250px]"
                  />
                </div>
              </div>
            </Fade>

            <Fade direction="right" triggerOnce="true">
              <img src={dummyPhone} alt={dummyPhone} className="w-[450px]" />
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
