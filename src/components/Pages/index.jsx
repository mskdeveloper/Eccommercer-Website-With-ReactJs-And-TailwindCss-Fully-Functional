import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";

import heroImg from "../../assets/images/hero.png";
import heroImg2 from "../../assets/images/hero-2.png";
import heroImg3 from "../../assets/images/hero-3.png";

import banner1 from "../../assets/images/banner-1.jpg";
import banner2 from "../../assets/images/banner-2.jpg";
import banner3 from "../../assets/images/banner-3.jpg";
import banner4 from "../../assets/images/banner-4.jpg";
import banner5 from "../../assets/images/banner-5.jpg";

import ProductData from "../../assets/Data.json";

import bannerImg2 from "../../assets/images/banner.jpg";

import brand1 from "../../assets/images/dell.png";
import brand2 from "../../assets/images/samsung.png";
import brand3 from "../../assets/images/sanyo.png";
import brand4 from "../../assets/images/lenovo.png";
import brand5 from "../../assets/images/oppo.png";
import brand6 from "../../assets/images/panasonic.png";
import brand7 from "../../assets/images/asus.png";

import bannerCard1 from "../../assets/images/banner-card-3.jpg";
import { useNavigate } from "react-router";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
  return (
    <>
      <div className="bg-element"></div>
      {/* HERO */}
      <div className="hero-bg">
        <header className="py-20 container mx-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            modules={[Autoplay, EffectFade]}
            autoplay={{
              delay: 3000,
            }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
          >
            <SwiperSlide>
              <div className="hero flex gap-8">
                <div className="hero-content flex flex-col justify-start items-start w-1/2">
                  <h1 className="text-9xl font-bricolage">
                    THE NEW <br /> STANDARD
                  </h1>
                  <h5 className="font-bold text-xl">
                    Under FAVORABLE SMARTWATCHES
                  </h5>
                  <span className="hero-span text-3xl text-gray-800 font-semibold mt-3">
                    FROM <br />
                    <div className="text-6xl font-bold text-gray-800">
                      <sup>$</sup>
                      748
                      <sup>99</sup>
                    </div>
                  </span>
                  <button className="bg-yellow-400 p-3 rounded-md font-semibold text-xl mt-5 hover:bg-yellow-500 transition ">
                    Start Buying
                  </button>
                </div>
                <div className="hero-image hide w-1/2">
                  <img src={heroImg} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="hero flex gap-8">
                <div className="hero-content flex flex-col justify-start items-start w-1/2">
                  <h1 className="text-9xl font-bricolage">
                    THE NEW <br /> STANDARD
                  </h1>
                  <h5 className="font-bold text-xl">
                    Under FAVORABLE SMARTWATCHES
                  </h5>
                  <span className="hero-span text-3xl text-gray-800 font-semibold mt-3">
                    FROM <br />
                    <div className="text-6xl font-bold text-gray-800">
                      <sup>$</sup>
                      748
                      <sup>99</sup>
                    </div>
                  </span>
                  <button className="bg-yellow-400 p-3 rounded-md font-semibold text-xl mt-5 hover:bg-yellow-500 transition ">
                    Start Buying
                  </button>
                </div>
                <div className="hero-image hide w-1/2">
                  <img src={heroImg2} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="hero flex gap-8">
                <div className="hero-content flex flex-col justify-start items-start w-1/2">
                  <h1 className="text-9xl font-bricolage">
                    THE NEW <br /> STANDARD
                  </h1>
                  <h5 className="font-bold text-xl">
                    Under FAVORABLE SMARTWATCHES
                  </h5>
                  <span className="hero-span text-3xl text-gray-800 font-semibold mt-3">
                    FROM <br />
                    <div className="text-6xl font-bold text-gray-800">
                      <sup>$</sup>
                      748
                      <sup>99</sup>
                    </div>
                  </span>
                  <button className="bg-yellow-400 p-3 rounded-md font-semibold text-xl mt-5 hover:bg-yellow-500 transition ">
                    Start Buying
                  </button>
                </div>
                <div className="hero-image hide w-1/2">
                  <img src={heroImg3} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </header>
      </div>
      {/* Banners */}
      <div className="px-[8%] lg:px-[12%] py-20">
        <div
          className="container mx-auto banner-1 flex flex-col justify-center gap-5 bg-cover bg-center rounded-xl p-6 md:p-8 h-[350px] sm:h-[430px]"
          style={{ backgroundImage: `url(${banner5})` }}
        >
          <small className="bg-yellow-500 text-white text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
            EXCLUSIVE HEADPHONE
          </small>
          <h3 className="text-7xl font-semibold font-bricolage">
            Release Date & Price
          </h3>
          <p className="text-2xl">Today's Super Offer</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-12">
          {/* Baner1 */}
          <div
            className="flex flex-col gap-2 bg-cover bg-center rounded-xl p-6 md:p-8 h-[350px] sm:h-[430px]"
            style={{ backgroundImage: `url(${banner1})` }}
          >
            <small className="bg-yellow-500 text-white text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
              New Product
            </small>
            <h3 className="text-xl md:text-2xl font-semibold font-bricolage">
              Release Date & Price
            </h3>
            <p className="text-base md:text-lg">Today's Super Offer</p>
          </div>
          {/* Baner2 */}
          <div
            className="flex flex-col gap-2 bg-cover bg-center rounded-xl p-6 md:p-8 h-[350px] sm:h-[430px]"
            style={{ backgroundImage: `url(${banner2})` }}
          >
            <small className="bg-yellow-500 text-white text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
              New Product
            </small>
            <h3 className="text-xl md:text-2xl font-semibold font-bricolage">
              Release Date & Price
            </h3>
            <p className="text-base md:text-lg">Today's Super Offer</p>
          </div>
          {/* Baner3 */}
          <div
            className="flex flex-col gap-2 bg-cover bg-center rounded-xl p-6 md:p-8 h-[350px] sm:h-[430px]"
            style={{ backgroundImage: `url(${banner3})` }}
          >
            <small className="bg-yellow-500 text-white text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
              New Product
            </small>
            <h3 className="text-xl md:text-2xl font-semibold font-bricolage">
              Release Date & Price
            </h3>
            <p className="text-base md:text-lg">Today's Super Offer</p>
          </div>
          {/* Baner4 */}
          <div
            className="flex flex-col gap-2 bg-cover bg-center rounded-xl p-6 md:p-8 h-[350px] sm:h-[430px]"
            style={{ backgroundImage: `url(${banner4})` }}
          >
            <small className="bg-yellow-500 text-white text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
              New Product
            </small>
            <h3 className="text-xl md:text-2xl font-semibold font-bricolage">
              Release Date & Price
            </h3>
            <p className="text-base md:text-lg">Today's Super Offer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
