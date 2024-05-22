import React from "react";

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
                <h2 className="text-thirdFontColor font-workSans text-[44px] font-light uppercase">
                  top reviews for etour
                </h2>
              </div>
              <div>
                <p className="text-extraFontColor max-w-[612px] font-poppins text-base font-normal">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
            {/* Reviews */}
            <div className="mt-8 flex h-[450px] items-center justify-between">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review_Testimonials;
