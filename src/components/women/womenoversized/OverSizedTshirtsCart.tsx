import React, { useState, useRef } from "react";
import image1 from "../../../assets/oversized content/oversized tshirts/71WYyZNOMKL._SX569_.jpg";
import image2 from "../../../assets/oversized content/oversized tshirts/71R1yiIfPPL._SX569_.jpg";
import image3 from "../../../assets/oversized content/oversized tshirts/61NpDFqlDRL._SX569_.jpg";
import image4 from "../../../assets/oversized content/oversized tshirts/61tVv6nfMSL._SY741_.jpg";
import image5 from "../../../assets/oversized content/oversized tshirts/61a3Zpr0BUL._SY741_.jpg";
import image6 from "../../../assets/oversized content/oversized tshirts/61MxLubv4KL._SY741_.jpg";
import image7 from "../../../assets/oversized content/oversized tshirts/41KsVz81ZDL._SX569_.jpg";
import image8 from "../../../assets/oversized content/oversized tshirts/41re9zmsIWL.jpg";
import image9 from "../../../assets/oversized content/oversized tshirts/41lpuZy3JGL.jpg";
import image10 from "../../../assets/oversized content/oversized tshirts/61ZmZCXla3L._SY741_.jpg";
import image11 from "../../../assets/oversized content/oversized tshirts/61JOX-w4RIL._SY741_.jpg";
import image12 from "../../../assets/oversized content/oversized tshirts/6189KcuMMiL._SY741_.jpg";


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
    id: 4,
    name: "DESERT STORM KNIT PREMIUM POLO",
    price: "Rs.1,499.00",
    originalPrice: "Rs.1,699.00",
    images: [image10, image11, image12],
  },
  {
    id: 4,
    name: "DESERT STORM KNIT PREMIUM POLO",
    price: "Rs.1,499.00",
    originalPrice: "Rs.1,699.00",
    images: [image10, image11, image12],
  },
  {
    id: 4,
    name: "DESERT STORM KNIT PREMIUM POLO",
    price: "Rs.1,499.00",
    originalPrice: "Rs.1,699.00",
    images: [image10, image11, image12],
  },
  {
    id: 4,
    name: "DESERT STORM KNIT PREMIUM POLO",
    price: "Rs.1,499.00",
    originalPrice: "Rs.1,699.00",
    images: [image10, image11, image12],
  },
];

const OverSizedTshirtsCart: React.FC = () => {
  return (
    <section className="w-full h-full px-4 bg-white -mt-[0px]">
      <h2 className="text-6xl font-semibold text-center py-18 mb-12">OVERSIZED Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <HoverCard key={product.id} product={product} />
        ))}
      </div>
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
  );
};

export default OverSizedTshirtsCart;