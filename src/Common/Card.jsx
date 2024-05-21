import React from "react";
import img from "../assets/Rectangle 1434 (8).png";
import { FaStar } from "react-icons/fa";

const Card = ({ title, placeimg, des, star }) => {
  return (
    <>
      <div
        id="card"
        className="relative h-[500px] max-w-[392px] overflow-hidden rounded-[20px] border-2  border-[#92278f5e] bg-primaryColor"
      >
        <img
          src={placeimg ? placeimg : img}
          alt={placeimg}
          className="h-[273px] w-full bg-cover"
        />
        <div className="absolute right-3 top-3 flex items-center gap-x-2 rounded-[10px] bg-[#22222241] px-5 py-2 shadow-inner backdrop-blur-md">
          <span className=" text-lg text-[#FFCD6B]">
            <FaStar />
          </span>
          <p className="font-poppins text-base font-medium leading-none">
            {" "}
            {star ? star : "5.0"}
          </p>
        </div>
        <div className="px-7 py-7">
          <h3 className="pb-3 font-workSans text-[28px] font-normal text-primaryFontColor">
            {title ? title : "Mumbai"}
          </h3>
          <p className="whitespace-wrap h-[52px] w-[290px] overflow-hidden text-ellipsis font-poppins text-base font-normal text-primaryFontColor opacity-[60%]">
            {des
              ? des
              : "Lorem Ipsum is simply dummy text of the printing and...see more"}
          </p>
        </div>
        <div className="flex items-center justify-between border-t-2 border-[#F1F1F1] px-7 py-5">
          <span className="text-base font-medium text-primaryFontColor"></span>
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
