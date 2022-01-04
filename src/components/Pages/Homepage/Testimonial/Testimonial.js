import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from "react-rating";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Testimonial.css";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://medi-sheba-backend.herokuapp.com/testimonials?limit=6")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-12">
      <div className="text-center ">
        <h1 className="text-2xl md:text-4xl font-bold text-cyan-500 md:justify-start mb-8">
          Let's listen what our clients say
        </h1>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          scale: 1,
        }}
        pagination={false}
        className="mySwiper mb-8 bg-gray-200"
      >
        {reviews.map((review) => {
          return (
            <div>
              <SwiperSlide>
                <div className="flex items-center justify-center px-5 py-5">
                  <div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
                    <div className=" w-16 pt-1 text-center pb-5 -mt-16 mx-auto">
                      <a href="#nothing" className="block relative">
                        <img
                          alt="profil"
                          src={review?.image}
                          className="mx-auto object-cover rounded-full "
                        />
                      </a>
                    </div>
                    <div className="w-full mb-4">
                      <p className="text-md text-cyan-500 font-bold text-center">
                        {review?.name}{" "}
                        <span className="text-gray-700 text-sm">
                          {" "}
                          {review?.address}
                        </span>
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-300 text-center"></p>
                      <p className="text-xs text-gray-500 dark:text-gray-300 text-center">
                        {" "}
                        <Rating
                          initialRating={review?.rating?.rate}
                          emptySymbol="far fa-star icon-color text-yellow-500"
                          fullSymbol="fas fa-star icon-color text-yellow-500"
                          readonly
                        ></Rating>
                      </p>
                    </div>
                    <div className="w-full">
                      <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
                        “
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                        {review?.rating?.review}
                      </p>
                      <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                        ”
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Testimonial;
