import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import slide3 from "../../../assets/images/regularfits/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI1LTA3L3Jhd3BpeGVsb2ZmaWNlOF9waG90b19vZl9wb3J0cmFpdF9hX3lvdW5nX3dvbWVuX3Nob3J0X2FuZF9taWRpdV84ODlmOTA5ZS01NjY4LT.webp";
import slide1 from "../../../assets/images/regularfits/b2f2f46481749cc1b636d545a4bc278e.jpg";
import slide2 from "../../../assets/images/regularfits/Moon-Ga-Young.jpg";
import bgRightImg from "../../../assets/images/regularfits/2f9096310c57089f52a463429b23b1c0.jpg";

const RegularHero = () => {
  return (
    <section className="w-full flex flex-col md:flex-row h-screen overflow-hidden">
      <div className="w-full md:w-1/2 relative">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-full"
        >
          {[slide1, slide2, slide3].map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <img
                src={imgSrc}
                alt={`slide-${index}`}
                className="w-full h-full object-cover grayscale"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute z-20 inset-0 flex flex-col justify-center items-start px-6 md:px-16 py-12 bg-black/30 text-white">
          <h2 className="font-bold text-white italic mb-4 leading-tight">
            <span className="block text-8xl font-normal">Looks</span>
            <span className="block text-8xl font-normal">we love!</span>
          </h2>
          <p className="text-sm md:text-base max-w-md mb-6">
            Wear it now and wear it again.
            <br />A few tweaks here and there can really make a difference!
          </p>
          <button className="bg-white text-black px-6 py-3 text-sm font-semibold uppercase hover:bg-gray-100 transition">
            Shop the Collection
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="w-full md:w-1/2 relative bg-cover bg-center flex items-center justify-center   "
        style={{ backgroundImage: `url(${bgRightImg}) ` }}
      >
        <div className="sp-content w-full h-full relative text-white text-center">
          <div className="sp-globe"></div>

          <div className="sp-content font-bold text-5xl tracking-wider">
            <h2 className="frame-1">
              <span>AWESOME</span>
            </h2>
            <h2 className="frame-2">
              <span>REGULAR</span>
              <span className="text-pink-500">,WOMEN T-SHIRTS</span>
            </h2>
            <h2 className="frame-3">
              <span>STEP INTO</span>
              <span className="text-red-500">,STYLE</span>
            </h2>
            <h2 className="frame-4">
              <span className="text-pink-500">STEP INTO,</span>THE.
            </h2>
            <h2 className="frame-5 tracking-widest">
              <span>VITI-</span>
              <span className="">VERSE</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegularHero;
