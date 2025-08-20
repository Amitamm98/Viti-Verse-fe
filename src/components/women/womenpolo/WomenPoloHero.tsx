import React from 'react';
import modelHero from '../../../assets/images/polo t-shirts/polodp.avif'

const WomenPoloHero = () => {
  return (
    <section className="bg-[#283144] px-6 md:px-24 py-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center ">
        
        {/* Left Content */}
        <div className="text-center md:text-left ">
          <h1 className="text-5xl text-white font-serif font-semibold  leading-20 mb-4">
            POLO T-SHIRTS <br className="hidden md:block" /> CUSTOMIZED
          </h1>
          <p className=" text-lg mb-6 text-white">
            The new collection of clothing from the best brands this year.
          </p>
         
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end ">
          <img
            src={modelHero}
            alt="Hero Models"
            className="w-full h-[80vh] object-cover rounded-4xl"
          />
        </div>
      </div>

      
    </section>
  );
};

export default WomenPoloHero;
