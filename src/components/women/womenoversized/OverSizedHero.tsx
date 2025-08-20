import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import veirdoBanner from "../../assets/images/womennewarrival/42799665-d691-435c-92a7-80b4573dd52b.__CR0,0,1464,600_PT0_SX1464_V1___.jpeg";
import Video from "../../assets/videos/v7.mp4";
import WhatsappIcon from "../../common/WhatsAppIcon";


const OverSizedHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scaleHeading = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);
  const opacityHeading = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden" ref={ref}>
      {/* --- Fixed WhatsApp icon --- */}
      <div className="fixed top-1/2 left-6 z-50 -translate-y-1/2">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
        >
          <WhatsappIcon/>
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

      {/* --- Fixed Background Video --- */}
      <div className="fixed inset-0 -z-10 bg-black">
        <video
          className="w-full h-full object-cover opacity-90"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* --- Hero Heading --- */}
      <section className="h-[600px] flex items-center justify-center text-white text-center">
        <motion.h1
          style={{ scale: scaleHeading, opacity: opacityHeading }}
          className="text-5xl md:text-6xl font-semibold"
        >
          Oversized T-Shirt<br></br><br></br><span className="text-green-500 font-bold py-20">  Scrolled Up</span>
        
        </motion.h1>
      </section>

      {/* --- Next Banner Section --- */}
      <section className="w-full h-full mx-auto overflow-hidden">
        <img
          src={veirdoBanner}
          alt="Vibrant Colors of Veirdo"
          className="w-full h-full object-cover"
        />
      </section>
    </div>
  );
};

export default OverSizedHero;