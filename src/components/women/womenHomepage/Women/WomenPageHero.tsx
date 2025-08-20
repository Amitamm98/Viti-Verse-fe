import React from "react";
import womenhero from "../../../../assets/images/Black-wallpapers-hd-1080p-Beautiful (1).jpg";
import overtshirt from "../../../../assets/images/overfits/ChatGPT Image Aug 6, 2025, 11_32_06 AM.png";
import regulartshirt from "../../../../assets/images/overfits/pexels-mikoto-3539638.jpg";
import {Link } from "react-router-dom"


import ShopNow from "../../../common/ShopNow";


const WomenPageHero = () => {
  return (
    <div className="">
      <div>
        <img
          src={womenhero}
          alt=""
          className="object-cover relative h-[90vh] w-[100vw]"
        />
        <p className="absolute text-6xl text-white bottom-55 left-[45vw]">
          NEW IN
        </p>
        <div className="absolute bottom-35 left-[48vw] ">
          <ShopNow></ShopNow>
        </div>
      </div>
      <div className="flex relative ">
        <Link to="/womenoversized">
        
        <img
          src={overtshirt}
          alt=""
          className="object-cover w-[50vw] h-[100vh] "
        />
        
        <p className="absolute text-6xl text-white top-[80vh] left-[6vw] font-semibold">
          OVERSIZED T-SHIRT
        </p>
        <div className="absolute top-[90vh] left-[20vw] ">
          <ShopNow></ShopNow>
        </div>
        
        </Link>
        
        <Link to="/womenregular">
        
        <img
          src={regulartshirt}
          alt=""
          className="object-cover  w-[50vw] h-[100vh]  "
        />
        <p className="absolute text-6xl text-white top-[80vh] right-[8vw] font-semibold">
          REGULAR T-SHIRT
        </p>
        <div className="absolute top-[90vh] right-[20.2vw] ">
          <ShopNow></ShopNow>
        </div>
        </Link>
      </div>

     

          </div>
  );
};

export default WomenPageHero;
