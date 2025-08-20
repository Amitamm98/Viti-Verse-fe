import Marquee from "react-fast-marquee";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import image2 from "../../assets/images/img10.webp";
import bgImage from "../../assets/images/img2.webp";
import image3 from "../../assets/images/img8.webp";
import image1 from "../../assets/images/img9.webp";

const images = [image1, image2, image3];

const CreyateExperienceSection: React.FC = () => {
  return (
    <section
      className="w-full h-[1120px] bg-cover bg-center bg-no-repeat text-white py-10 px-4"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* CENTER BOX WITH WHITE BORDER AND IMAGE */}
      <div className="max-w-3xl h-[850px] mx-auto border-4 border-amber-600 p-6 md:p-10 text-center relative bg-black/50 backdrop-blur-md">
        <div className="w-full max-w-xl mx-auto px-26 ">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="w-full h-full"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-cover opacity-80 border-b-8 border-amber-800"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="text-center">
          <h3 className="text-sm font-bold tracking-[0.25em] mb-2 text-white">
            VITI-<span className="text-amber-900">VERSE</span>
          </h3>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 leading-snug text-white">
            ANIME T-SHITS LOOKS LIKE NEVER BEFORE
          </h2>
          <p className="text-base leading-relaxed max-w-2xl mx-auto text-white">
            With Creyate, choose the best of fabrics sourced from international
            heritage mills. Personalise your suit just the way you want and
            we’ll deliver it to you. <br />
            <br />
            <span className="font-semibold text-white">
              Made in just one fit – yours.
            </span>
          </p>
        </div>

        {/* Offer Box */}
        <div className="mt-2 inline-block bg-white text-amber-800 px-6 py-3 text-sm font-semibold uppercase tracking-wide">
          Save up to 35% <span className="ml-2">Until Sept 31</span>
        </div>
      </div>

      {/* MARQUEE BOXES */}
      <Marquee className="overflow-hidden " direction="left" pauseOnHover>
        <div className="mt-9 ">
          <h1 className="text-5xl font-bold text-amber-500">Power Up Your Wardrobe with Iconic Anime T-Shirt Designs</h1>
          
        </div>
      </Marquee>
      <Marquee className="overflow-hidden " direction="right" pauseOnHover>
        <div className="mt-3  ">
          <p className="text-amber-600 text-2xl ">Stay comfy and stylish with your favorite anime printed on you.</p>
        </div>
      </Marquee>
    </section>
  );
};

export default CreyateExperienceSection;
