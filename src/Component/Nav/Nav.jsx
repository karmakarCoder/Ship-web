import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Fade } from "react-awesome-reveal";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {
  const [openMenu, setopenMenu] = useState(false);
  const HandleMenu = () => {
    setopenMenu(true);
  };
  return (
    <>
      <div className="nav flex items-center justify-between overflow-hidden  py-7">
        <Fade direction="up" triggerOnce="true">
          <img
            src={logo}
            alt={logo}
            className="w-[132px] sm:w-[120px] md:w-[194px]"
          />
        </Fade>
        <Fade direction="down" triggerOnce="true">
          <div className="hidden sm:block">
            <ul className="flex items-center gap-x-8 font-workSans text-base font-normal text-primaryColor sm:gap-x-4 sm:text-xs md:gap-x-8 md:text-base">
              <li>
                <a href="#UpcomingCruise">Offers</a>
              </li>
              <li>
                <a href="#destination">Destinations</a>
              </li>
              <li>
                <a href="#gallery">Events</a>
              </li>
              <li>
                <a href="#footer">Contact</a>
              </li>
              <li>
                <a href="#email">Web Check-in</a>
              </li>
            </ul>
          </div>
        </Fade>

        <div
          className={`fixed right-0 top-0 z-50 h-full w-[60%]  bg-[#422b1c] pr-8 pt-10 ${openMenu ? "translate-x-[0%] transition-all duration-500" : "translate-x-[100%] transition-all"}`}
        >
          <div className="ml-2">
            <span onClick={() => setopenMenu(false)}>
              <RxCross2 className="cursor-pointer text-2xl hover:text-thirdColor" />
            </span>
          </div>
          <ul className="flex flex-col items-end gap-y-8 font-workSans text-base font-normal text-primaryColor">
            <li>
              <a href="#UpcomingCruise" onClick={() => setopenMenu(false)}>
                Offers
              </a>
            </li>
            <li>
              <a href="#destination" onClick={() => setopenMenu(false)}>
                Destinations
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={() => setopenMenu(false)}>
                Events
              </a>
            </li>
            <li>
              <a href="#footer" onClick={() => setopenMenu(false)}>
                Contact
              </a>
            </li>
            <li>
              <a href="#email" onClick={() => setopenMenu(false)}>
                Web Check-in
              </a>
            </li>
            <button
              className="rounded-lg bg-thirdColor px-3 py-3 font-poppins text-xs font-semibold text-primaryColor transition-all hover:bg-[#7e2579]"
              onClick={() => setopenMenu(false)}
            >
              Weekend Gateway
            </button>
          </ul>
        </div>

        {openMenu && (
          <div className="fixed left-0  top-0 z-10  h-full w-full bg-[#00000077]"></div>
        )}

        <Fade direction="up" triggerOnce="true">
          <button className="hidden whitespace-nowrap rounded-xl bg-thirdColor px-8 py-4 font-poppins text-sm font-semibold text-primaryColor transition-all hover:bg-[#7e2579] sm:block sm:px-2 sm:py-3 sm:text-[10px] md:py-4 md:text-base">
            Weekend Gateway
          </button>
        </Fade>
        <div
          className="block cursor-pointer text-2xl text-white sm:hidden"
          onClick={HandleMenu}
        >
          <span>
            <FaBars />
          </span>
        </div>
      </div>
    </>
  );
};

export default Nav;
