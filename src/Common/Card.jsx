import React from "react";
import img from "../assets/Rectangle 1434 (8).png";
import { FaStar } from "react-icons/fa";

const Card = () => {
  return (
    <>
      <div className="relative h-[500px] max-w-[392px] overflow-hidden rounded-[20px] bg-primaryColor shadow-lg shadow-[#92278f44]">
        <img src={img} alt={img} />
        <div className="absolute right-2 top-2 flex items-center gap-x-2 rounded-2xl bg-[#22222244] px-5 py-1 backdrop-blur-sm">
          <span>
            <FaStar />
          </span>
          <p className="font-poppins font-medium">5.0</p>
        </div>
      </div>
    </>
  );
};

export default Card;
