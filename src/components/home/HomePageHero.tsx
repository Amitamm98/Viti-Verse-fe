import { Link } from "react-router-dom";
import bg2 from "../../assets/images/man.jpg";
import bg1 from "../../assets/images/women.jpg";
import WhatsappIcon from "../common/WhatsappIcon";

const HomePageHero = () => {
  return (
    <div className="relative w-screen h-auto overflow-hidden">
      <div className="fixed top-148 right-6 z-50 -translate-y-1/2">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
        >
         <WhatsappIcon/>
        </a>
      </div>

      {/* Main Hero Section */}
      <div className="flex w-full relative">
        <Link to="/women" className="w-1/2 relative block">
          <img
            src={bg1}
            alt="Woman"
            className="w-full h-[820px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white translate-y-[30%]">
            <h2 className="text-5xl heading-regular font-bold mb-4">WOMEN</h2>
            <button className="bg-black text-white px-8 py-4 font-semibold border rounded-2xl transition transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-200 hover:text-black hover:border-white">
              Shop Now
            </button>
          </div>
        </Link>

        <Link to="/man" className="w-1/2 relative block">
          <img src={bg2} alt="Man" className="w-full h-[820px] object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white translate-y-[30%]">
            <h2 className="text-5xl font-extrabold heading-regular mb-4">
              MAN
            </h2>
            <button className="bg-black text-white font-semibold border px-8 py-4 rounded-2xl transition transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-200 hover:text-black hover:border-white">
              Shop Now
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePageHero;
