import Marquee from "react-fast-marquee";
import jacketImg from "../../assets/images/img11.webp";
import mainImg from "../../assets/images/img8.webp";
import gloveImg from "../../assets/images/img9.webp";

const AboutSecondaryHero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row bg-black py-10 px-4 md:px-20 font-sans pb-110 ">
      {/* LEFT IMAGES */}
      <div className="w-full md:w-1/2 relative flex flex-col gap-6 items-start justify-center ">
        {/* MAIN LARGE IMAGE */}
        <div className="relative z-10">
          <img src={mainImg} alt="Main Jacket" className="w-[400px] rounded" />
          <div className="absolute top-4 -left-25 rotate-[-90deg] text-[12px] tracking-[4px] text-gray-500 uppercase ">
           <Marquee speed={10}> INNOVATION BRAND </Marquee>
          </div>
          {/* Vertical Icons */}
          <div className="absolute top-[80px] -left-16 flex flex-col gap-6">
            <div className="w-6 h-6 border rounded-full"></div>
            <div className="w-6 h-6 border rounded-full"></div>
            <div className="w-6 h-6 border rounded-full"></div>
            <div className="w-6 h-6 border rounded-full"></div>
          </div>
        </div>

        {/* OVERLAPPING BLACK & WHITE IMAGE */}
        <div className="absolute top-[170px] left-[260px] w-[170px] h-[230px] z-20 border-4 border-white shadow-lg">
          <img
            src={jacketImg}
            alt="Comet Jacket"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute top-2 -left-10 rotate-[-90deg] text-[10px] tracking-[3px] uppercase bg-white px-1">
           <Marquee speed={10} direction="right">   OUTSTANDING FABRIC... </Marquee>
          </div>
          <div className="absolute bottom-2 left-2 w-5 h-5 border border-white flex items-center justify-center text-[12px] font-bold cursor-pointer">
            ↑
          </div>
        </div>

        {/* GLOVE IMAGE */}
        <div className="absolute mt-[780px] z-10 px-10">
          <img
            src={gloveImg}
            alt="Glove"
            className="w-[260px] h-[380px] rounded"
          />
          <div className="absolute bottom-2 -left-10 rotate-[-90deg] text-[15px] px-10 tracking-[3px] uppercase text-white/50">
           <Marquee speed={10} direction="left">  BRANDED PRINTED T-SHIRTS </Marquee>
           
          </div>
        </div>
      </div> 

      {/* RIGHT TEXT CONTENT */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 px-0 md:px-12">
        <p className="text-xs uppercase text-white mb-1 tracking-[2px]">
          About Viti Verse
        </p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight border-b-[3px] border-b-white inline-block pb-1 mb-6 text-white">
          5 Years of <br />
          Innovation & Style
        </h2>

        <div className="space-y-4 text-white text-[15px] leading-relaxed">
          <p>
            Viti-Verse is where individuality meets design. We specialize in
            high-quality, customized t-shirts for both men and women—crafted not
            just to be worn, but to be felt. Whether you're building a personal
            brand, launching a creative campaign, or simply looking to express
            your unique style, our t-shirts are tailored to reflect your
            identity. From bold graphics to subtle details, every design speaks
            for itself. Our team blends comfort, creativity, and durability to
            ensure each piece stands out—no matter the occasion.
          </p>
          <p>
            At Viti-Verse, we believe that what you wear should represent who
            you are. That’s why we make it easy to customize every thread to
            your vibe. Whether it’s for streetwear, events, or everyday
            essentials, our tees are made to inspire, connect, and empower. Your
            vision. Your style. Viti-Verse brings it to life—one shirt at a
            time..
          </p>
        </div>

        <button className="mt-8 border border-white px-6 py-3 text-sm text-white uppercase tracking-widest hover:bg-gray-100 hover:text-black transition-all flex items-center gap-2">
          Explore Our T-shirts <span className="text-xl">+</span>
        </button>
      </div>
    </section>
  );
};

export default AboutSecondaryHero;
