import React from "react";
import WomenPageHero from "./WomenPageHero";
import VideoCardSection from "./VideoCardSection";
import WomenCategories from "./WomenCategories";

import WomenArrival from "./WomenArrival";
import WomenPoloVideo from "./WomenPoloVideo";
import WomenCollection from "./WomenCollection";

const WomenPage = () => {
  return (
    <div>
      <WomenPageHero />
      <WomenPoloVideo/>
      
      <VideoCardSection />
      <WomenCategories />
      <WomenArrival/>
      
      <WomenCollection/>
    </div>
  );
};

export default WomenPage;
