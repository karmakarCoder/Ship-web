import { React, useEffect, useState, useRef } from "react";
import quotesImg1 from "../../assets/Quotes/1.png";
import quotesImg2 from "../../assets/Quotes/2.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { reviewData } from "../../../Data/Data";
import img from "../../assets/Photo-Gallery/gallery2.png";
import dummyVideoImg from "../../assets/video/video.png";
import Slider from "react-slick";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "slick-carousel/slick/slick.css";

// import required modules
import { EffectCreative, Navigation, Pagination } from "swiper/modules";

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="group bg-primaryColor shadow-md transition-all hover:bg-thirdColor active:bg-[#6e2a6b]"
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50px",
        height: "50px",
        position: "absolute",
        top: "35px",
        right: "-13px",
        borderRadius: "50%",
        zIndex: "1",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <div className="text-2xl text-thirdColor group-hover:text-primaryColor">
        <FaAngleRight />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="group cursor-pointer bg-primaryColor shadow-md transition-all hover:bg-thirdColor active:bg-[#6e2a6b]"
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        height: "50px",
        width: "50px",
        position: "absolute",
        top: "35px",
        left: "-13px",
        zIndex: "1",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <div className="text-2xl text-thirdColor group-hover:text-primaryColor">
        <FaAngleLeft />
      </div>
    </div>
  );
}

const Review_Testimonials = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  var setting2 = {
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Fade
        direction="up"
        triggerOnce="true"
        className="px-4 py-[20px] md:py-[60px] lg:px-0"
      >
        <div className="container">
          <div>
            {/* heading */}
            <div className="flex flex-wrap  items-center justify-between">
              <div>
                <p className="text-md pb-4 font-poppins font-semibold uppercase text-thirdColor md:text-lg">
                  Review & Testimonials
                </p>
                <h2 className="pb-3 font-workSans text-[28px] font-light uppercase text-thirdFontColor md:pb-0 md:text-[44px]">
                  top reviews for etour
                </h2>
              </div>
              <div>
                <p className="max-w-[612px] font-poppins text-sm font-normal text-extraFontColor md:text-base">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
            {/* Reviews */}
            <div
              className="mt-8 flex flex-wrap items-center
             justify-between sm:flex-nowrap sm:gap-x-3 md:gap-x-0"
            >
              <div
                id="reviewCard"
                className=" h-[420px] w-[324px] rounded-[20px] bg-primaryColor p-5 shadow-lg md:h-[450px] md:w-[604px]"
              >
                <div>
                  <img src={quotesImg1} alt={quotesImg1} />
                </div>
                <div>
                  <Swiper
                    slidesPerView={1}
                    modules={[Pagination, Navigation]}
                    navigation={{
                      prevEl: ".prev-arrow",
                      nextEl: ".next-arrow",
                    }}
                  >
                    {reviewData?.map((data) => (
                      <SwiperSlide key={data.id}>
                        <p className="py-[15px] font-poppins text-sm font-normal text-primaryFontColor md:py-[50px] md:text-base">
                          {data.description}
                        </p>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="flex justify-end">
                  <img src={quotesImg2} alt={quotesImg2} />
                </div>
                <div className="mt-[20px] flex flex-wrap items-center justify-center md:mt-[50px] md:flex-nowrap md:justify-between">
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
                        origin: "left center",
                        translate: ["-5%", 0, -200],
                        rotate: [0, 100, 0],
                      },
                      next: {
                        origin: "right center",
                        translate: ["5%", 0, -200],
                        rotate: [0, -100, 0],
                      },
                    }}
                    modules={[EffectCreative, Navigation]}
                    className="mySwiper2"
                  >
                    {reviewData?.map((data) => (
                      <SwiperSlide
                        className="flex items-center gap-x-3"
                        key={data.id}
                      >
                        <div className="h-[60px] w-[60px] overflow-hidden rounded-full md:h-[80px] md:w-[80px]">
                          <img
                            src={data.image}
                            alt={data.image}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h2 className="whitespace-nowrap font-poppins text-xl font-semibold text-extraFontColor opacity-[75%] md:text-2xl">
                            {data.name}
                          </h2>
                          <p className="font-poppins text-sm font-semibold text-extraFontColor opacity-[75%] md:text-base">
                            {data.location}
                          </p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="flex items-center gap-x-3 pt-5 md:gap-x-9 md:pt-0">
                    <div className="prev-arrow z-40 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-[#F6F5F5] text-xl text-thirdColor shadow hover:bg-thirdColor hover:text-primaryColor active:bg-[#7c2a78] md:h-[50px] md:w-[50px] md:text-2xl">
                      <FaAngleLeft />
                    </div>
                    <div className="next-arrow z-40 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-[#F6F5F5] text-xl text-thirdColor shadow hover:bg-thirdColor hover:text-primaryColor active:bg-[#7c2a78] md:h-[50px] md:w-[50px] md:text-2xl">
                      <FaAngleRight />
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="reviewCard"
                className=" mt-6 h-[350px] w-[324px] rounded-[20px] bg-primaryColor p-5 shadow-lg sm:mt-0 sm:h-[420px] md:h-[450px] md:w-[604px]"
              >
                <Slider
                  {...settings}
                  asNavFor={nav2}
                  ref={(slider) => (sliderRef1 = slider)}
                  className="slide1"
                >
                  <div className="h-[200px] w-full overflow-hidden rounded-[10px] sm:h-[270px] md:h-[300px] ">
                    <img
                      src={dummyVideoImg}
                      alt=""
                      className="h-full w-full  object-cover"
                    />
                  </div>
                  <div className="h-[200px] w-full overflow-hidden rounded-[10px] sm:h-[270px] md:h-[300px]">
                    <img
                      src={dummyVideoImg}
                      alt=""
                      className="h-full w-full  object-cover"
                    />
                  </div>
                  <div className="h-[200px] w-full overflow-hidden rounded-[10px] sm:h-[270px] md:h-[300px]">
                    <img
                      src={dummyVideoImg}
                      alt=""
                      className="h-full w-full  object-cover"
                    />
                  </div>
                  <div className="h-[200px] w-full overflow-hidden rounded-[10px] sm:h-[270px] md:h-[300px]">
                    <img
                      src={dummyVideoImg}
                      alt=""
                      className="h-full w-full  object-cover"
                    />
                  </div>
                  <div className="h-[200px] w-full overflow-hidden rounded-[10px] sm:h-[270px] md:h-[300px]">
                    <img
                      src={dummyVideoImg}
                      alt=""
                      className="h-full w-full  object-cover"
                    />
                  </div>
                </Slider>

                <Slider
                  {...setting2}
                  asNavFor={nav1}
                  ref={(slider) => (sliderRef2 = slider)}
                  slidesToShow={4}
                  slidesToScroll={1}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  dots={false}
                  arrows={true}
                  className="slide2"
                  nextArrow={<SampleNextArrow />}
                  prevArrow={<SamplePrevArrow />}
                >
                  <div className="overflow-hidden">
                    <img
                      src={img}
                      alt=""
                      className="h-[90px]  w-[90px]  rounded-[10px] object-cover"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <img
                      src={img}
                      alt=""
                      className="h-[90px]  w-[90px]  rounded-[10px] object-cover"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <img
                      src={img}
                      alt=""
                      className="h-[90px]  w-[90px]  rounded-[10px] object-cover"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <img
                      src={img}
                      alt=""
                      className="h-[90px]  w-[90px]  rounded-[10px] object-cover"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <img
                      src={img}
                      alt=""
                      className="h-[90px]  w-[90px]  rounded-[10px] object-cover"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Review_Testimonials;
