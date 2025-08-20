import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import image2 from "../../assets/images/img10.webp";
import leftImg from "../../assets/images/img12.webp"; // Black & white image
import image3 from "../../assets/images/img8.webp";
import image1 from "../../assets/images/img9.webp";
import WhatsappIcon from "../common/WhatsappIcon";
// example images array
const images = [image1, image2, image3];

const ManRegularHero = () => {
  return (
    <section className="w-full flex flex-col md:flex-row overflow-hidden">
      <div className="fixed top-140 left-6 z-50 -translate-y-1/2">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
        >
          <WhatsappIcon />
        </a>
      </div>
      {/* --- Fixed Social Icons --- */}
      <div className="fixed top-1/2 right-6 z-50 -translate-y-1/2 flex flex-col gap-4">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black bg-white p-2 rounded-full shadow hover:text-blue-600 transition-all duration-300"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black bg-white p-2 rounded-full shadow hover:text-sky-500 transition-all duration-300"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black bg-white p-2 rounded-full shadow hover:text-pink-500 transition-all duration-300"
        >
          <FaInstagram size={20} />
        </a>
      </div>
      {/* Left Image with overlay text */}
      <div className="w-full md:w-1/2 relative">
        <img
          src={leftImg}
          alt="Looks we love"
          className="w-full h-full object-cover grayscale"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 py-12 bg-black/30 text-white">
          <h2 className=" font-bold text-black italic mb-4 leading-tight">
            <span className="block text-8xl  font-normal">Looks</span>
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

      {/* Right Image */}
      <div className="relative w-full md:w-1/2 h-full bg-black">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Product ${index + 1}`}
                className="w-full h-full object-cover opacity-80"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Overlay text */}
        <div className="absolute z-20 top-180 left-15  text-white  text-6xl font-bold py-2 rounded">
          Regular Man T-shirt
        </div>
      </div>
    </section>
  );
};

export default ManRegularHero;
