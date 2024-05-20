import React from "react";
import img from "../assets/Rectangle 1434 (8).png";
import { FaStar } from "react-icons/fa";

const Card = () => {
  return (
    <>
      <div
        id="card"
        className="relative h-[500px] max-w-[392px] overflow-hidden rounded-[20px] bg-primaryColor "
      >
        <img src={img} alt={img} />
        <div className="absolute right-3 top-3 flex items-center gap-x-2 rounded-2xl bg-[#22222241] px-5 py-2 shadow-inner backdrop-blur-lg">
          <span className=" text-lg text-yellow-500">
            <FaStar />
          </span>
          <p className="font-poppins text-base font-medium leading-none">5.0</p>
        </div>
        <div className="px-7 py-7">
          <h3 className="pb-3 font-workSans text-[28px] font-normal text-primaryFontColor">
            Mumbai
          </h3>
          <p className="font-poppins text-base font-normal text-primaryFontColor opacity-[60%]">
            Lorem Ipsum is simply dummy text of the printing and...see more
          </p>
        </div>
        <div className="flex items-center justify-between border-t-2 border-[#F1F1F1] px-7 py-5">
          <span className="text-base font-medium text-primaryFontColor">
            Lorem Ipsum{" "}
          </span>
          <a
            href="#"
            className="text after:content:'' relative font-poppins text-base font-medium text-additionalColor after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:scale-x-0 after:bg-additionalColor after:transition-transform hover:after:scale-x-100"
          >
            See More
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
