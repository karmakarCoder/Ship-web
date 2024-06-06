import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { TiLocationOutline } from "react-icons/ti";
import { Fade } from "react-awesome-reveal";

import {
  footerCompany,
  footerProduct,
  footerSupport,
} from "../../../Data/Data";
const Footer = () => {
  return (
    <>
      <div id="footer" className="overflow-hidden px-4 lg:px-0">
        <div className="container">
          <div className="flex flex-col flex-wrap items-start justify-between py-[50px] sm:flex-row sm:items-center md:flex-nowrap md:py-[100px]">
            <Fade direction="left" triggerOnce="true">
              <div>
                <img
                  src="/src/assets/footerlogo.png"
                  alt=""
                  className="w-[150px] md:w-[194px]"
                />
                <p className="max-w-[285px] py-4 font-poppins text-sm font-normal leading-7 text-primaryFontColor md:py-6 md:text-base">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
                </p>
                <div className="flex items-center gap-x-5 ">
                  <a
                    href=""
                    className="relative after:absolute after:-bottom-2 after:left-0 after:h-[2.5px] after:w-full after:bg-[#93288e36] after:transition-all hover:after:-bottom-1 hover:after:bg-[#93288e]"
                  >
                    <FaFacebookF className="text-2xl text-thirdColor" />
                  </a>
                  <a
                    href=""
                    className="relative after:absolute after:-bottom-2 after:left-0 after:h-[2.5px] after:w-full after:bg-[#93288e36] after:transition-all hover:after:-bottom-1 hover:after:bg-[#93288e]"
                  >
                    <FaTwitter className="text-2xl text-thirdColor" />
                  </a>
                  <a
                    href=""
                    className="relative after:absolute after:-bottom-2 after:left-0 after:h-[2.5px] after:w-full after:bg-[#93288e36] after:transition-all hover:after:-bottom-1 hover:after:bg-[#93288e]"
                  >
                    <FaLinkedinIn className="text-2xl text-thirdColor" />
                  </a>
                  <a
                    href=""
                    className="relative after:absolute after:-bottom-2 after:left-0 after:h-[2.5px] after:w-full after:bg-[#93288e36] after:transition-all hover:after:-bottom-1 hover:after:bg-[#93288e]"
                  >
                    <RiInstagramFill className="text-2xl text-thirdColor" />
                  </a>
                  <a
                    href=""
                    className="relative after:absolute after:-bottom-2 after:left-0 after:h-[2.5px] after:w-full after:bg-[#93288e36] after:transition-all hover:after:-bottom-1 hover:after:bg-[#93288e]"
                  >
                    <FaYoutube className="text-2xl text-thirdColor" />
                  </a>
                </div>
              </div>
            </Fade>
            <Fade direction="up" triggerOnce="true">
              <div className="flex items-center  justify-between gap-x-8 pt-10 md:gap-x-20">
                <div>
                  <li className="pb-3 font-workSans text-lg font-normal text-primaryFontColor md:pb-9 md:text-2xl">
                    Product
                  </li>
                  {footerProduct?.map((item, index) => (
                    <ul key={index}>
                      <li key={index} className="mb-4">
                        <a
                          href="#"
                          className="font-poppins text-xs font-normal text-primaryFontColor hover:underline md:text-base"
                        >
                          {item}
                        </a>
                      </li>
                    </ul>
                  ))}
                </div>
                <div>
                  <li className="pb-3 font-workSans text-lg font-normal text-primaryFontColor md:pb-9 md:text-2xl">
                    Company
                  </li>
                  {footerCompany?.map((item) => (
                    <ul key={item}>
                      <li key={item} className="mb-4">
                        <a
                          href="#"
                          className="font-poppins text-xs font-normal text-primaryFontColor hover:underline md:text-base"
                        >
                          {item}
                        </a>
                      </li>
                    </ul>
                  ))}
                </div>
                <div>
                  <li className="pb-3 font-workSans text-lg font-normal text-primaryFontColor md:pb-9 md:text-2xl">
                    Support
                  </li>
                  {footerSupport?.map((item) => (
                    <ul key={item}>
                      <li key={item} className="mb-4">
                        <a
                          href="#"
                          className="font-poppins text-xs font-normal text-primaryFontColor hover:underline md:text-base"
                        >
                          {item}
                        </a>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </Fade>

            <Fade direction="right" triggerOnce="true">
              <div>
                <h4 className="pb-3 font-workSans text-lg font-normal text-primaryFontColor md:pb-9 md:text-2xl">
                  Contacts us
                </h4>
                <div className="mb-4 flex items-center gap-x-1 md:mb-9">
                  <HiOutlineMail className="text-base text-additionalColor md:text-2xl" />
                  <p className="font-poppins text-xs font-normal text-primaryFontColor md:text-base">
                    contact@company.com
                  </p>
                </div>
                <div className="mb-4 flex items-center gap-x-1 md:mb-9">
                  <IoCallOutline className="text-base text-additionalColor md:text-2xl" />
                  <p className="font-poppins text-xs font-normal text-primaryFontColor md:text-base">
                    (xx) xxxx-xxxx
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <TiLocationOutline className="text-lg text-additionalColor md:text-2xl" />
                  <p className="font-poppins text-xs font-normal text-primaryFontColor md:text-base">
                    794 Mcallister St San Francisco, 94102
                  </p>
                </div>
              </div>
            </Fade>
          </div>
          {/* =========== */}
          <Fade triggerOnce="true">
            <div
              className="flex flex-col items-center justify-between
             border-t-2 py-[10px] sm:flex-row md:flex-row"
            >
              <div>
                <p className="font-poppins text-xs font-normal text-primaryFontColor md:text-base">
                  Copyright © 2023{" "}
                </p>
              </div>
              <div className="flex flex-col items-center font-poppins text-xs font-normal text-primaryFontColor sm:flex-row md:flex-row md:text-base">
                All Rights Reserved |{" "}
                <div>
                  <a href="/" className="text-additionalColor underline">
                    Terms and Conditions
                  </a>{" "}
                  |{" "}
                  <a href="/" className="text-additionalColor underline">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Footer;
