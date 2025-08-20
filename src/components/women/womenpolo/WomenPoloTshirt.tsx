import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import model1 from "../../../assets/images/polo t-shirts/Custom_T-shirt_Banner_1_ (1).jpg";
import model2a from "../../../assets/images/polo t-shirts/d503513c530d427faa39153cca669fa7.jpg";
import model2b from "../../../assets/images/polo t-shirts/233126aec104999742fa04b1f4addf52.jpg";
import model2c from "../../../assets/images/polo t-shirts/Black-wallpapers-hd-1080p-Beautiful (1).jpg"; // Add as many as needed

const WomenPoloTshirt = () => {
  return (
    <section className="bg-[#e5e7ec] py-16 px-6 md:px-24 h-[105vh]">
      <div className="max-w-screen-xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          {/* Text Left */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-semibold text-black mb-4">
              POLO T-SHIRTS 
            </h1>
          

            <img
              src={model1}
              alt="Model 1"
              className="w-[60vw] h-[50vh] object-fill rounded-2xl shadow-md"
            />
          </div>

          {/* Swiper Image Right */}
          <div className="md:w-1/2 relative flex justify-center items-start">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              className="w-full h-[90vh] rounded-3xl overflow-hidden shadow-md"
            >
              {[model2a, model2b, model2c].map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Model ${index + 2}`}
                    className="w-full h-full object-center"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WomenPoloTshirt;
