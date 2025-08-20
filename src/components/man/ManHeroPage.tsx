import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

import bonkersHero from "../../assets/images/mansgroup.jpg";
import manbottom from "../../assets/images/normal tshits.jpg";
import manshirt from "../../assets/images/oversized.jpg";
import ShopNow from "../common/ShopNow";

const ManHeroPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scaleText = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden" ref={ref}>
      {/* Fixed background image */}
      <div className="fixed inset-0 -z-10">
        <img
          src={bonkersHero}
          alt="Bonkers Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* NEW IN Section */}
      <section className="h-screen flex flex-col items-center justify-center text-white text-center">
        <motion.h2
          style={{ scale: scaleText, opacity: opacityText }}
          className="text-7xl heading-regular tracking-wide mb-6"
        >
          NEW IN
        </motion.h2>
        <motion.div style={{ opacity: opacityText }} >
          <ShopNow />
          
        </motion.div>
      </section>

      {/* Over-sized & Regular T-shirts Section */}
      <section className="flex flex-col lg:flex-row w-full h-screen">
        {/* Over-sized */}
        <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full overflow-hidden group">
          <img
            src={manshirt}
            alt="Oversized Shirt"
            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
          />
          <Link
            to="/manoversized"
            className="absolute inset-0 flex flex-col items-center justify-end text-white pb-16 bg-black/20 hover:bg-black/30 transition"
          >
            <h2 className="text-5xl lg:text-6xl heading-regular mb-4">
              Over-Sized T-shirts
            </h2>
            <ShopNow />
          </Link>
        </div>

        {/* Regular */}
        <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full overflow-hidden group">
          <img
            src={manbottom}
            alt="Bottoms"
            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
          />
          <Link
            to="/manregular"
            className="absolute inset-0 flex flex-col items-center justify-end text-white pb-16 bg-black/20 hover:bg-black/30 transition"
          >
            <h2 className="text-5xl lg:text-6xl heading-regular mb-4">
              Regular T-shirts
            </h2>
            <ShopNow />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ManHeroPage;
