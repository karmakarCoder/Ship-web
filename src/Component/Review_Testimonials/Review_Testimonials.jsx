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

  return (
    <>
      <Fade direction="up" triggerOnce="true" className="py-[60px]">
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
              <div
                id="reviewCard"
                className="h-full w-[604px] rounded-[20px] bg-primaryColor p-5 shadow-lg"
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
              <div
                id="reviewCard"
                className="h-full w-[604px] rounded-[20px] bg-primaryColor p-5 shadow-lg"
              >
                <Slider
                  {...settings}
                  asNavFor={nav2}
                  ref={(slider) => (sliderRef1 = slider)}
                  className="slide1"
                >
                  <div className="h-[300px] w-full overflow-hidden rounded-[10px]">
                    <img
                      src={dummyVideoImg}
                      alt=""
                      className="h-full w-full  object-cover"
                    />
                  </div>
                  <div className="h-[300px] w-full overflow-hidden rounded-[10px]">
                    <img
                      src={dummyVideoImg}
                      alt=""
                      className="h-full w-full  object-cover"
                    />
                  </div>
                  <div className="h-[300px] w-full overflow-hidden rounded-[10px]">
                    <img
                      src={dummyVideoImg}
                      alt=""
                      className="h-full w-full  object-cover"
                    />
                  </div>
                  <div className="h-[300px] w-full overflow-hidden rounded-[10px]">
                    <img
                      src={dummyVideoImg}
                      alt=""
                      className="h-full w-full  object-cover"
                    />
                  </div>
                  <div className="h-[300px] w-full overflow-hidden rounded-[10px]">
                    <img
                      src={dummyVideoImg}
                      alt=""
                      className="h-full w-full  object-cover"
                    />
                  </div>
                </Slider>

                <Slider
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
