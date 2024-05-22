import React from "react";
import { IoMdStar } from "react-icons/io";

const CruiseCard = ({ title, detail, rating, price, img, date, departure }) => {
  return (
    <div
      id="cruiseCard"
      className="h-[500px] w-[392px] overflow-hidden rounded-[20px]"
    >
      <div>
        <img
          src={
            img
              ? img
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPWbE5Qm8mN80pP-e_EkpAyb8nrMLmggfaXns-kXidRQ&s"
          }
          className="h-[273px] w-full object-cover"
          alt=""
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between pb-[10px]">
          {/* title */}
          <div>
            <h3 className="w-[300px] overflow-hidden text-ellipsis text-nowrap font-workSans text-2xl font-normal leading-none text-secondaryFontColor">
              {title ? title : "Cruise Ship"}
            </h3>
            <p className="font-poppins text-sm font-normal text-secondaryFontColor">
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
            <h4 className="font-poppins text-sm font-normal text-secondaryFontColor">
              Date
            </h4>
            <p className="font-poppins text-base font-normal text-secondaryFontColor">
              {date ? date : "M/DD/YYYY"}
            </p>
          </div>
          {/* Departure */}
          <div>
            <h4 className="font-poppins text-sm font-normal text-secondaryFontColor">
              Departure
            </h4>
            <p className="font-poppins text-base font-normal text-secondaryFontColor">
              {departure ? departure : "Place"}
            </p>
          </div>
        </div>
        {/* -----------line--------- */}
        <div className="h-[1px] w-full bg-[#FEF0EF]"></div>
        {/* price */}
        <div className="flex items-center justify-between py-5">
          <p className="font-workSans text-xl font-medium text-primaryFontColor">
            {price ? price : "$00"}
          </p>
          <a
            href="#"
            className="relative font-poppins text-sm font-semibold text-additionalColor after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:bg-additionalColor after:transition-transform hover:after:origin-right hover:after:scale-x-100"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CruiseCard;
