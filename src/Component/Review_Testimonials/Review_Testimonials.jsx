import React from "react";
import quotesImg1 from "../../assets/Quotes/1.png";
import quotesImg2 from "../../assets/Quotes/2.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { reviewData } from "../../../Data/Data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { EffectCreative, Navigation, EffectFade } from "swiper/modules";

const Review_Testimonials = () => {
  return (
    <>
      <div className="py-[60px]">
        <div className="container">
          <div>
            {/* heading */}
            <div className="flex items-center justify-between">
              <div>
                <p className="pb-4 font-poppins text-lg font-semibold uppercase text-thirdColor">
                  Review & Testimonials
                </p>
                <h2 className="font-workSans text-[44px] font-light uppercase text-thirdFontColor">
                  top reviews for etour
                </h2>
              </div>
              <div>
                <p className="max-w-[612px] font-poppins text-base font-normal text-extraFontColor">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
            {/* Reviews */}
            <div className="mt-8 flex h-[450px] items-center justify-between">
              <div className="h-full w-[604px] rounded-[20px] bg-primaryColor p-5 shadow-lg">
                <div>
                  <img src={quotesImg1} alt={quotesImg1} />
                </div>
                <div>
                  <Swiper
                    effect={"fade"}
                    modules={[EffectFade, Navigation]}
                    navigation={{
                      prevEl: ".prev-arrow",
                      nextEl: ".next-arrow",
                    }}
                    className="fadeSwiper"
                  >
                    {reviewData?.map((data) => (
                      <SwiperSlide key={data.id}>
                        <p className="py-[50px] font-poppins text-base font-normal text-primaryFontColor">
                          {data.description}
                        </p>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="flex justify-end">
                  <img src={quotesImg2} alt={quotesImg2} />
                </div>
                <div className="mt-[50px] flex items-center justify-between">
                  <Swiper
                    slidesPerView={1}
                    effect={"creative"}
                    navigation={{
                      prevEl: ".prev-arrow",
                      nextEl: ".next-arrow",
                    }}
                    creativeEffect={{
                      prev: {
                        shadow: false,
                        translate: ["-120%", 0, -500],
                      },
                      next: {
                        shadow: false,
                        translate: ["120%", 0, -500],
                      },
                    }}
                    modules={[EffectCreative, Navigation]}
                    className="mySwiper2"
                  >
                    {reviewData?.map((data) => (
                      <SwiperSlide className="flex items-center gap-x-3">
                        <div className="h-[80px] w-[80px] overflow-hidden rounded-full">
                          <img
                            src={data.image}
                            alt={data.image}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h2 className="whitespace-nowrap font-poppins text-2xl font-semibold text-extraFontColor opacity-[75%]">
                            {data.name}
                          </h2>
                          <p className="font-poppins text-base font-semibold text-extraFontColor opacity-[75%]">
                            {data.location}
                          </p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="flex items-center gap-x-9">
                    <div className="prev-arrow z-40 flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-[#F6F5F5] text-2xl text-thirdColor shadow hover:bg-thirdColor hover:text-primaryColor active:bg-[#7c2a78]">
                      <FaAngleLeft />
                    </div>
                    <div className="next-arrow z-40 flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-[#F6F5F5] text-2xl text-thirdColor shadow hover:bg-thirdColor hover:text-primaryColor active:bg-[#7c2a78]">
                      <FaAngleRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review_Testimonials;
