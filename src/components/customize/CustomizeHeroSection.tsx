import modelImg from ".././../assets/blogs/img12.png";
 {/* Dont touch any section comment it is remember to understand where need to changes  */}
const CustomizeHeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#1d1d1f] text-white font-sans overflow-hidden flex flex-col justify-center items-center">
      {/* Right Side Switch */}
      <div className="absolute top-16 right-8 flex items-center space-x-4">
        <span className="font-light">VITI</span>
        <span className="font-light opacity-60">VERSE</span>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 mt-20">
        {/* Left Text */}
        <div className="text-left py-10 ">
          <h1 className="text-2xl tracking-[0.3em] font-bold">
            STEP INTO THE VITI VERSE
          </h1>
          <h2 className="text-xl tracking-[0.3em] font-bold mt-2">
            WHERE STYLE BECOMES A STATEMENT
          </h2>
          <p className="uppercase text-sm tracking-[0.5em] mt-2 text-gray-300">
            Masterpieces & Fearless Innovation
          </p>
        </div>

        {/* Model Image */}
        <div className="relative">
          <img
            src={modelImg}
            alt="Model"
            className="max-w-[450px] object-cover"
          />
        </div>
      </div>

      {/* Bottom Circle Menu */}
      <div className="absolute bottom-12 w-full flex justify-center items-center gap-16 mb-12 ">
        {[
          { name: "Regular", color: "#9de0dc" },
          { name: "Oversized", color: "#c1a1d3" },
          { name: "Anime", color: "#e0b05a" },
          { name: "Customize", color: "#d1c3b2" },
          { name: "Man", color: "#e38a6c" },
          { name: "Women", color: "#8ea9d6" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            <div
              className="w-16 h-16 rounded-full border-2 bg-none hover:bg-amber-400 transition-all duration-300"
              style={{ borderColor: item.color }}
            ></div>
            <span
              className="text-sm tracking-widest uppercase"
              style={{ color: item.color }}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="absolute bottom-2 text-[10px] text-gray-400 uppercase tracking-widest text-center w-full">
        <p>Noida Sector-4, UttarPradesh,India</p>
        <p>VITI-VERSE Makes Passinate & Branded T-shits,Noida</p>
        <p className="mt-1">
          Access &nbsp; | &nbsp; Man &nbsp; | &nbsp; Women &nbsp; | &nbsp;
          Policies / Procedures
        </p>
        <p className="mt-1">© 2019 VITI-VERSE. Created by TechQilla</p>
      </div>
    </section>
  );
};

export default CustomizeHeroSection;
