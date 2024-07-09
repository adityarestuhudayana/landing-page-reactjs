import React from "react";

const Hero = () => {
  return (
    <div className="flex">
      <div className="w-[40%] pt-14">
        <div className="flex gap-4">
          <h1 className="text-orange-500 text-9xl font-bold flex items-end">
            Fast
          </h1>
          <p className="font-bold text-3xl lg:text-5xl flex items-center lg:items-end text-slate-800 lg:mb-2 relative ">
            <img
              src="images/arrow.png"
              alt="arrow.png"
              className="absolute w-[50%] top-[-40%] right-[-25%] lg:w-[60%]"
            />
            Food Delivery
          </p>
        </div>
        <p className="text-xl text-slate-500 mt-3 p-2 w-[400px] mx-0">
          Cumque illo nulla veniam odit quis corrupti voluptatum, hic aut!
          Neque? Perspiciatis laudantium.
        </p>
        <div className="flex p-2 my-5 justify-start">
          <a
            href="/"
            className="bg-slate-800 text-white py-3 px-6 rounded-full font-semibold"
          >
            Order Now
          </a>
          <a
            href="/"
            className="text-slate-800 px-6 font-bold flex items-center gap-2"
          >
            <span className="bg-white flex items-center justify-center rounded-full text-xl h-10 w-10">
              <ion-icon name="play-sharp"></ion-icon>
            </span>
            Watch Video
          </a>
        </div>
        <div className="">
          <p className="text-2xl text-yellow-400 flex gap-1 pl-1">
            <ion-icon name="star-sharp"></ion-icon>
            <ion-icon name="star-sharp"></ion-icon>
            <ion-icon name="star-sharp"></ion-icon>
            <ion-icon name="star-sharp"></ion-icon>
            <ion-icon name="star-sharp"></ion-icon>
          </p>
          <p className="px-2 font-semibold text-lg">5 star rating</p>
          <p className="px-2 text-lg text-slate-500">based on 1788 reviews</p>
        </div>
      </div>
      <div className="w-[60%] pt-2 text-center">
        <a href="/images/hero.png" className="inline-block">
          <img
            src="images/hero.png"
            alt="hero.png"
            className="w-3/4 mx-auto"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
