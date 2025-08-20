import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Marquee from "react-fast-marquee";
// @ts-ignore
import "swiper/css";
import newArrivals1 from "../../assets/images/land1.webp";
import newArrivals2 from "../../assets/images/land2.webp";
import newArrivals3 from "../../assets/images/land3.webp";
import newArrivals4 from "../../assets/images/land4.webp";
import newArrivals5 from "../../assets/images/land5.jpg";
import ShopNow from "../common/ShopNow";

const ManNewArrival = () => {
  const images = [
    newArrivals1,
    newArrivals2,
    newArrivals3,
    newArrivals4,
    newArrivals5,
  ];

  return (
    <section className="w-full h-[720px] relative overflow-hidden">
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
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fixed Overlay Content */}
      <div className="absolute inset-0 bg-black/30 z-10 flex flex-col items-center justify-end text-white pb-12 pointer-events-none">
        <div className="text-3xl md:text-9xl font-semibold tracking-wide mb-3 pointer-events-auto">
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

export default ManNewArrival;
