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
      <div id="footer" className="overflow-hidden">
        <div className="container">
          <div className="flex items-center justify-between py-[100px]">
            <Fade direction="left" triggerOnce="true">
              <div>
                <img src="/src/assets/footerlogo.png" alt="" />
                <p className="max-w-[285px] py-6 font-poppins text-base font-normal leading-7 text-primaryFontColor">
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
              <div className="flex items-center gap-x-20">
                <div>
                  <li className="pb-9 font-workSans text-2xl font-normal text-primaryFontColor">
                    Product
                  </li>
                  {footerProduct?.map((item, index) => (
                    <ul key={index}>
                      <li key={index} className="mb-4">
                        <a
                          href="#"
                          className="font-poppins text-base font-normal text-primaryFontColor hover:underline"
                        >
                          {item}
                        </a>
                      </li>
                    </ul>
                  ))}
                </div>
                <div>
                  <li className="pb-9 font-workSans text-2xl font-normal text-primaryFontColor">
                    Company
                  </li>
                  {footerCompany?.map((item) => (
                    <ul key={item}>
                      <li key={item} className="mb-4">
                        <a
                          href="#"
                          className="font-poppins text-base font-normal text-primaryFontColor hover:underline"
                        >
                          {item}
                        </a>
                      </li>
                    </ul>
                  ))}
                </div>
                <div>
                  <li className="pb-9 font-workSans text-2xl font-normal text-primaryFontColor">
                    Support
                  </li>
                  {footerSupport?.map((item) => (
                    <ul key={item}>
                      <li key={item} className="mb-4">
                        <a
                          href="#"
                          className="font-poppins text-base font-normal text-primaryFontColor hover:underline"
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
                <h4 className="pb-9 font-workSans text-2xl font-normal text-primaryFontColor">
                  Contacts us
                </h4>
                <div className="mb-9 flex items-center gap-x-1">
                  <HiOutlineMail className="text-xl text-additionalColor" />
                  <p className="font-poppins text-base font-normal text-primaryFontColor">
                    contact@company.com
                  </p>
                </div>
                <div className="mb-9 flex items-center gap-x-1">
                  <IoCallOutline className="text-xl text-additionalColor" />
                  <p className="font-poppins text-base font-normal text-primaryFontColor">
                    (xx) xxxx-xxxx
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <TiLocationOutline className="text-2xl text-additionalColor" />
                  <p className="font-poppins text-base font-normal text-primaryFontColor">
                    794 Mcallister St San Francisco, 94102
                  </p>
                </div>
              </div>
            </Fade>
          </div>
          {/* =========== */}
          <Fade triggerOnce="true">
            <div className="flex items-center justify-between border-t-2 py-[10px]">
              <div>
                <p className="font-poppins text-base font-normal text-primaryFontColor">
                  Copyright © 2023{" "}
                </p>
              </div>
              <div className="font-poppins text-base font-normal text-primaryFontColor">
                All Rights Reserved |{" "}
                <a href="/" className="text-additionalColor underline">
                  Terms and Conditions
                </a>{" "}
                |{" "}
                <a href="/" className="text-additionalColor underline">
                  Privacy Policy
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Footer;
