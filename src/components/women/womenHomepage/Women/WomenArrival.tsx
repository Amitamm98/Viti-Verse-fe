import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Marquee from "react-fast-marquee";
// @ts-ignore
import "swiper/css";
import newArrivals1 from "../../../../assets/images/womennewarrival/pexels-eliasdecarvalho-1144834.jpg";
import newArrivals2 from "../../../../assets/images/womennewarrival/ChatGPT Image Aug 6, 2025, 12_22_58 PM.png";
import newArrivals3 from "../../../../assets/images/womennewarrival/ChatGPT Image Aug 6, 2025, 12_25_24 PM.png";

import newArrivals5 from "../../../../assets/images/womennewarrival/ChatGPT Image Aug 6, 2025, 12_00_02 PM.png";
import newArrivals6 from "../../../../assets/images/womennewarrival/ChatGPT Image Aug 6, 2025, 12_03_20 PM.png";
import newArrivals7 from "../../../../assets/images/womennewarrival/ChatGPT Image Aug 6, 2025, 12_05_53 PM.png";
import ShopNow from "../../../common/ShopNow";

const WomenArrival = () => {
  const images = [
    newArrivals1,
    newArrivals2,
    newArrivals3,
    newArrivals5,
    newArrivals6,
    newArrivals7,
    
  ];

  return (
    <section className="w-full h-[800px] relative overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`New Arrival ${index + 1}`}
              className="w-full h-[900px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fixed Overlay Content */}
      <div className="absolute inset-0 bg-black/30 z-10 flex flex-col items-center justify-end text-white pb-12 pointer-events-none">
        <div className="text-3xl md:text-6xl font-semibold tracking-wide mb-3 pointer-events-auto">
          <Marquee className="overflow-hidden " direction="right" pauseOnHover>
            New Arrivals
          </Marquee>
        </div>
        <div className="text-3xl md:text-5xl font-semibold tracking-wide mb-3 pointer-events-auto">
          <Marquee className="overflow-hidden  " direction="left" pauseOnHover>
            Step into the season with our newest collection of t-shirts and
            clothing — Oversized, Regular, GymFitting|
          </Marquee>
        </div>
        <div className="pointer-events-auto">
          <ShopNow />
        </div>
      </div>
    </section>
  );
};

export default WomenArrival;