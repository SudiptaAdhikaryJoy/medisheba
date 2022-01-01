import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        class="bg-white h-full dark:bg-gray-800 flex relative z-20 items-center overflow-hidden"
        style={{
          backgroundImage:
            "url(" +
            "https://image.freepik.com/free-vector/medical-science-banner-blue-color-shade_1017-24286.jpg" +
            ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div class="container mx-auto px-6 flex md:py-0 py-8 relative flex md:flex-row justify-center items-center">
          <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
            <h1 class="font-bebas-neue uppercase text-5xl sm:text-7xl font-black flex flex-col leading-none dark:text-white text-gray-800">
              Get The
              <span class="text-4xl sm:text-5xl">Right Medicine</span>
            </h1>
            <p class="text-sm sm:text-base text-gray-800 dark:text-white">
              Dimension of reality that makes change possible and
              understandable. An indefinite and homogeneous environment in which
              natural events and human existence take place.
            </p>
            <div class="flex mt-8">
              <a
                href="#nothing"
                class="uppercase py-2 px-4 rounded-lg bg-cyan-400 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
              >
                Get started
              </a>
              <a
                href="#nothing"
                class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-cyan-600 text-dark-700 dark:text-white hover:bg-cyan-500 hover:text-dark text-md"
              >
                Read more
              </a>
            </div>
          </div>
          <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
            <img
              src="https://o.remove.bg/downloads/38b9b41a-c352-4622-981f-1f8410db0075/handsome-young-doctor-isolated-white_87414-4917-removebg-preview.png"
              class="max-w-xs md:max-w-sm m-auto"
              alt="hero pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
