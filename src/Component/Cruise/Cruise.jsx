import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { BsUpload, BsDownload } from "react-icons/bs";
import { LuPencilLine } from "react-icons/lu";
import CruiseCard from "../../Common/CruiseCard";
import { CruiseInfo } from "../../../Data/Data";

const Cruise = () => {
  return (
    <>
      <div className="py-14">
        <div className="container">
          <div>
            <h2 className="text-center font-workSans text-[44px] font-light uppercase text-primaryFontColor">
              Upcoming Cruise
            </h2>
          </div>
          <div className="flex items-center gap-x-3 py-8">
            <p className="font-poppins text-xl font-medium text-secondaryFontColor">
              Short by:
            </p>
            <div className="flex cursor-pointer items-center gap-x-[10px] rounded-[10px] bg-additionalColor px-5 py-[12px] font-poppins text-base font-normal text-primaryColor">
              <BsCalendarDate className="text-xl" />
              <span className="leading-none">Date</span>
            </div>
            <div className="flex cursor-pointer items-center gap-x-[10px] rounded-[10px] border-2 border-[#92278f57] bg-additionalBgColor px-5 py-[12px] font-poppins text-base font-normal text-addiTionalFontColor">
              <BsUpload className="text-xl" />
              <span className="leading-none">price low to High</span>
            </div>
            <div className="flex cursor-pointer items-center gap-x-[10px] rounded-[10px] border-2 border-[#92278f57] bg-additionalBgColor px-5 py-[12px] font-poppins text-base font-normal text-addiTionalFontColor">
              <BsDownload className="text-xl" />
              <span className="leading-none">Price High to low</span>
            </div>
            <div className="flex cursor-pointer items-center gap-x-[10px] rounded-[10px] border-2 border-[#92278f57] bg-additionalBgColor px-5 py-[12px] font-poppins text-base font-normal text-addiTionalFontColor">
              <LuPencilLine className="text-xl" />
              <span className="leading-none">Name (A-z)</span>
            </div>
          </div>
          {/* all cruise info */}

          <div className="flex flex-wrap items-center justify-between gap-y-12">
            {CruiseInfo?.map((data) => (
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cruise;
