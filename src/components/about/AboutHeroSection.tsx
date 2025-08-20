import React from "react";
 {/* All comments only for developer to understand where need to changes, so dont change and remove the comment section,thankyou  */}
const AboutHeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-black text-white font-serif overflow-hidden custom-light-bg">
      {/* 3D  Cube section  */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cube-wrapper pointer-events-none z-0 mt-4">
        <div className="cube">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>

      {/* Top right circle Text + Rotating dot */}
      <div className="absolute top-10 right-10 z-10 mt-10">
        <div className="circle-text-container">
          <div className="circle-text">
            VITI VERSE BRAND · AUTHENTIC STYLE · ACCESS
          </div>
          <div className="rotating-orbit">
            <div className="rotating-dot"></div>
          </div>
        </div>
      </div>

      {/* Center Viti-Verse Text + Line with moving dot */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 mt-30">
        <h1 className="text-3xl md:text-5xl italic mb-4">VITI-VERSE</h1>
        <p className="max-w-md text-sm md:text-base text-gray-300">
          I call myself the soul of Viti-Verse to open up a conversation about streetwear
          and how it influences modern identity. I’m a full-spectrum t-shirt label for every vibe,
          supporting self-expression with bold threads.
        </p>

        <div className="relative mt-8 w-px h-[200px] bg-white overflow-hidden">
          <div className="line-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
