import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { BsUpload, BsDownload } from "react-icons/bs";
import { LuPencilLine } from "react-icons/lu";
import CruiseCard from "../../Common/CruiseCard";
import { CruiseInfo } from "../../../Data/Data";
import { Fade } from "react-awesome-reveal";

const Cruise = () => {
  return (
    <>
      <div id="UpcomingCruise" className="overflow-hidden px-4 py-14 lg:px-0">
        <div className="container">
          <Fade
            direction="down"
            triggerOnce="true
          "
          >
            <h2 className="text-center font-workSans text-[32px] font-light uppercase text-primaryFontColor md:text-[44px]">
              Upcoming Cruise
            </h2>
          </Fade>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-3 py-8 md:flex-nowrap md:gap-y-0">
            <Fade direction="left" triggerOnce="true">
              <p className="text-md font-poppins font-medium text-secondaryFontColor md:text-xl">
                Short by:
              </p>
            </Fade>
            <Fade direction="right" triggerOnce="true">
              <div className="flex cursor-pointer items-center gap-x-[10px] rounded-[10px] bg-additionalColor px-3 py-[10px] font-poppins text-sm font-normal text-primaryColor  md:px-5 md:py-[12px]  md:text-base">
                <BsCalendarDate className="text-md md:text-xl" />
                <span className="leading-none">Date</span>
              </div>
              <div className="flex cursor-pointer items-center gap-x-[10px] rounded-[10px] border-2 border-[#92278f57] bg-additionalBgColor px-3 py-[10px] font-poppins text-sm font-normal text-addiTionalFontColor  md:px-5 md:py-[12px] md:text-base">
                <BsUpload className="text-md md:text-xl" />
                <span className="leading-none">price low to High</span>
              </div>
              <div className="flex cursor-pointer items-center gap-x-[10px] rounded-[10px] border-2 border-[#92278f57] bg-additionalBgColor px-4 py-[10px] font-poppins text-sm font-normal text-addiTionalFontColor  md:px-5 md:py-[12px] md:text-base">
                <BsDownload className="text-md md:text-xl" />
                <span className="leading-none">Price High to low</span>
              </div>
              <div className="flex cursor-pointer items-center gap-x-[10px] rounded-[10px] border-2 border-[#92278f57] bg-additionalBgColor px-4 py-[10px] font-poppins text-sm font-normal text-addiTionalFontColor  md:px-5 md:py-[12px] md:text-base">
                <LuPencilLine className="text-md md:text-xl" />
                <span className="leading-none">Name (A-z)</span>
              </div>
            </Fade>
          </div>
          {/* all cruise info */}

          <div className="flex flex-wrap items-center justify-between gap-y-12">
            {CruiseInfo?.map((data) => (
              <Fade direction="up" triggerOnce="true">
                <CruiseCard
                  key={data.id}
                  title={data.name}
                  detail={data.description}
                  rating={data.rating}
                  date={data.date}
                  img={data.image}
                  departure={data.departure}
                  price={data.price}
                />
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cruise;
