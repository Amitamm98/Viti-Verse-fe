import React, { useState, useRef } from "react";
import image1 from "../../../assets/oversized content/anime oversized/41zF5qkztFL.jpg";
import image2 from "../../../assets/oversized content/anime oversized/41zF5qkztFL.jpg";
import image3 from "../../../assets/oversized content/anime oversized/41zF5qkztFL.jpg";
import image4 from "../../../assets/oversized content/anime oversized/41zF5qkztFL.jpg";
import image5 from "../../../assets/oversized content/anime oversized/41zF5qkztFL.jpg";
import image6 from "../../../assets/oversized content/anime oversized/41zF5qkztFL.jpg";
import image7 from "../../../assets/oversized content/anime oversized/41zF5qkztFL.jpg";
import image8 from "../../../assets/oversized content/anime oversized/41zF5qkztFL.jpg";
import image9 from "../../../assets/oversized content/anime oversized/41zF5qkztFL.jpg";
import image10 from "../../../assets/oversized content/anime oversized/41zF5qkztFL.jpg";
import image11 from "../../../assets/oversized content/anime oversized/41zF5qkztFL.jpg";
import image12 from "../../../assets/oversized content/anime oversized/41zF5qkztFL.jpg";
import image13 from "../../../assets/oversized content/anime oversized/41zF5qkztFL.jpg";
import image14 from "../../../assets/oversized content/anime oversized/41zF5qkztFL.jpg";
import image15 from "../../../assets/oversized content/anime oversized/41zF5qkztFL.jpg";
import image16 from "../../../assets/oversized content/anime oversized/41zF5qkztFL.jpg";
import image17 from "../../../assets/oversized content/anime oversized/41zF5qkztFL.jpg";
import image18 from "../../../assets/oversized content/anime oversized/41zF5qkztFL.jpg";
import image19 from "../../../assets/oversized content/anime oversized/41zF5qkztFL.jpg";
import image20 from "../../../assets/oversized content/anime oversized/41zF5qkztFL.jpg";
import image21 from "../../../assets/oversized content/anime oversized/41zF5qkztFL.jpg";

import veirdoBanner from "../../../assets/oversized content/oversizedbg/94baa147-6f78-4e41-aa65-c4b553b17eb2._SL5000_CR0,0,5000,1000_SX1920_.jpeg"

const products = [
  {
    id: 1,
    name: "THE GREAT MANIFESTOR POLO",
    price: "Rs.1,199.00",
    originalPrice: "Rs.1,399.00",
    images: [image1, image2, image3],
  },
  {
    id: 2,
    name: "WARRIOR ALICORN OVERSIZED SHIRT",
    price: "Rs.1,499.00",
    originalPrice: "Rs.1,699.00",
    images: [image4, image5, image6],
  },
  {
    id: 3,
    name: "WHITE SPONGEBOB BE THE CHANGE T-SHIRT",
    price: "Rs.899.00",
    originalPrice: "Rs.1,199.00",
    images: [image7, image8, image9],
  },
  {
    id: 4,
    name: "DESERT STORM KNIT PREMIUM POLO",
    price: "Rs.1,499.00",
    originalPrice: "Rs.1,699.00",
    images: [image10, image11, image12],
  },
  {
    id: 5,
    name: "DESERT STORM KNIT PREMIUM POLO",
    price: "Rs.1,499.00",
    originalPrice: "Rs.1,699.00",
    images: [image13, image14, image15],
  },
  {
    id: 6,
    name: "DESERT STORM KNIT PREMIUM POLO",
    price: "Rs.1,499.00",
    originalPrice: "Rs.1,699.00",
    images: [image16, image17, image18],
  },
  {
    id: 7,
    name: "DESERT STORM KNIT PREMIUM POLO",
    price: "Rs.1,499.00",
    originalPrice: "Rs.1,699.00",
    images: [image19, image20, image21],
  },
  
];

const RegularAnimeCart = () => {
  return (
    <section className="w-full h-full px-4 bg-white -mt-[0px] ">
      <h2 className="text-5xl font-semibold text-center py-18 mb-12">Anime Over-Sized Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <HoverCard key={product.id} product={product} />
        ))}
      </div>
       <section className="w-[1536px] h-[380px] mx-auto overflow-hidden my-22 mb-[0px] ">
      <img
        src={veirdoBanner}
        alt="Vibrant Colors of Veirdo"
        className="w-full h-full object-contain"
      />
    </section>
    </section>
    

  );
};

const HoverCard: React.FC<{
  product: {
    name: string;
    price: string;
    originalPrice: string;
    images: string[];
  };
}> = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const width = rect.width;

    if (x < width / 3) {
      setCurrentImage(0);
    } else if (x < (2 * width) / 3) {
      setCurrentImage(1);
    } else {
      setCurrentImage(2);
    }
  };

  return (
    <>
    <div
      className="relative overflow-hidden group  shadow hover:shadow-xl transition duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setCurrentImage(0)}
      ref={cardRef}
    >
      <div className="relative">
        <img
          src={product.images[currentImage]}
          alt={product.name}
          className="w-full h-96 object-cover image-transition"
        />

        {/* ADD TO CART fixed at bottom with opacity change */}
        <button className="add-to-cart">ADD TO CART</button>
      </div>

      {/* Product Info */}
      <div className="p-4 text-center">
        <h3 className="text-md font-semibold">{product.name}</h3>
        <div className="text-sm text-gray-500 line-through">{product.originalPrice}</div>
        <div className="text-red-600 font-bold">{product.price}</div>
      </div>
    </div>
     
    </>
  );
};

export default RegularAnimeCart;
