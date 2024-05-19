import React from "react";
import logo from "../../assets/logo.png";

const Nav = () => {
  return (
    <>
      <div className="nav flex items-center justify-between py-7">
        <div>
          <img src={logo} alt={logo} />
        </div>
        <div>
          <ul className="flex items-center gap-x-8 font-workSans text-base font-normal text-primaryColor">
            <li>
              <a href="#">Offers</a>
            </li>
            <li>
              <a href="#">Destinations</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Web Check-in</a>
            </li>
          </ul>
        </div>
        <div>
          <button className="rounded-xl bg-thirdColor px-8 py-4 font-poppins text-sm font-semibold text-primaryColor transition-all hover:bg-[#7e2579]">
            Weekend Gateway
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
