import React from "react";
import { IoMdStar } from "react-icons/io";

const CruiseCard = ({ title, detail, rating, price, img, date, departure }) => {
  return (
    <div
      id="cruiseCard"
      className="h-[403px] w-[324px] overflow-hidden rounded-[20px] sm:w-[300px] md:h-[500px] md:w-[340px] lg:w-[392px]"
    >
      <div>
        <img
          src={
            img
              ? img
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPWbE5Qm8mN80pP-e_EkpAyb8nrMLmggfaXns-kXidRQ&s"
          }
          className="h-[214px]  w-full object-cover md:h-[273px]"
          alt=""
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between pb-[10px]">
          {/* title */}
          <div>
            <h3 className=" w-[195px] overflow-hidden text-ellipsis text-nowrap font-workSans text-xl font-normal leading-none text-secondaryFontColor md:w-[300px] md:text-2xl">
              {title ? title : "Cruise Ship"}
            </h3>
            <p className="font-poppins text-xs font-normal text-secondaryFontColor md:text-sm">
              {detail ? detail : "3 Days 4 Nights"}
            </p>
          </div>
          {/* rating star */}
          <div className="flex items-center gap-x-1 font-poppins text-sm font-light text-secondaryFontColor">
            <IoMdStar className="text-lg" />
            <span>{rating ? rating : "5.0"}</span>
          </div>
        </div>
        {/* ------------line-------- */}
        <div className="mb-[10px] h-[1px] w-full bg-[#FEF0EF]"></div>

        {/* Date */}
        <div className="flex items-center justify-between pb-5">
          <div>
            <h4 className="font-poppins text-xs font-normal text-secondaryFontColor md:text-sm">
              Date
            </h4>
            <p className="font-poppins text-sm font-normal text-secondaryFontColor md:text-base">
              {date ? date : "M/DD/YYYY"}
            </p>
          </div>
          {/* Departure */}
          <div>
            <h4 className="font-poppins text-xs font-normal text-secondaryFontColor md:text-sm">
              Departure
            </h4>
            <p className="font-poppins text-sm font-normal text-secondaryFontColor md:text-base">
              {departure ? departure : "Place"}
            </p>
          </div>
        </div>
        {/* -----------line--------- */}
        <div className="h-[1px] w-full bg-[#FEF0EF]"></div>
        {/* price */}
        <div className="flex items-center justify-between py-3 md:py-5">
          <p className="font-workSans text-lg font-medium text-primaryFontColor md:text-xl">
            {price ? price : "$00"}
          </p>
          <a
            href="#"
            className="relative font-poppins text-xs font-semibold text-additionalColor after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:bg-additionalColor after:transition-transform hover:after:origin-right hover:after:scale-x-100 md:text-sm"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CruiseCard;
