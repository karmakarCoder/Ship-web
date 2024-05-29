import React from "react";
import logo from "../../assets/logo.png";
import { Fade } from "react-awesome-reveal";

const Nav = () => {
  return (
    <>
      <div className="nav flex items-center justify-between py-7">
        <Fade direction="up" triggerOnce="true">
          <img src={logo} alt={logo} />
        </Fade>
        <Fade direction="down" triggerOnce="true">
          <ul className="flex items-center gap-x-8 font-workSans text-base font-normal text-primaryColor">
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
        </Fade>
        <Fade direction="up" triggerOnce="true">
          <button className="rounded-xl bg-thirdColor px-8 py-4 font-poppins text-sm font-semibold text-primaryColor transition-all hover:bg-[#7e2579]">
            Weekend Gateway
          </button>
        </Fade>
      </div>
    </>
  );
};

export default Nav;
