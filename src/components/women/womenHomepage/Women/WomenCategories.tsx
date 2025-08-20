// src/components/MenCategorySection.jsx
import React from 'react';
import tshirtImg from '../../../../assets/images/envato-labs-ai-8993f1ea-45a9-4e61-a299-d501d318bcbd.jpg';
import shirtsImg from '../../../../assets/images/envato-labs-ai-1ef819f5-80f2-4a74-8b31-09606466e9f9.jpg';
import bottomsImg from '../../../../assets/images/envato-labs-ai-e33d1815-cf3c-4f73-b63a-a78dda76806c.jpg';
import shortsImg from '../../../../assets/images/fotor-ai-20250731221910.jpg';
import {Link} from "react-router-dom"
const categories = [
  { title: 'OVERSIZED T-SHIRTS', image: tshirtImg },
  { title: 'REGULAR FIT T-SHIRTS', image: shirtsImg },
  { title: 'GYM WEAR T-SHIRTS', image: bottomsImg },
  { title: 'POLO T-SHIRTS', image: shortsImg },
];

const WomenCategories = () => {
  return (
    <section className="w-full bg-[#f9f9f9] ">
      <div className="max-w-[1536px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
        {categories.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden w-full min-w-0 flex items-center justify-center bg-white shadow-2xl "
            style={{ height: '580px' }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Link to="/womengym">
              <button className="border-2 rounded-xl border-white px-9 py-4 text-white text-sm transition duration-300 group-hover:scale-105 hover:bg-white hover:text-black">
                {item.title}
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WomenCategories;