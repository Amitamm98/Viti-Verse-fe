import { useRef, useState } from 'react';
import Video1 from "../../../../assets/videos/video1.mp4";
import Video2 from "../../../../assets/videos/video2.mp4";
import Video3 from "../../../../assets/videos/video3.mp4";
import Video4 from "../../../../assets/videos/video4.mp4";
import Video5 from "../../../../assets/videos/video5.mp4";

const videoItems = [
  {
    title: "Superman Strength Oversized T-shirt",
    video: Video1,
    price: "₹999.00",
    originalPrice: "₹1,299.00",
    discount: "23%",
  },
  {
    title: "Black Rolling Stones Oversized T-shirt",
    video: Video2,
    price: "₹999.00",
    originalPrice: "₹1,199.00",
    discount: "17%",
  },
  {
    title: "Bat Emblem Faded Oversized T-shirt",
    video: Video3,
    price: "₹999.00",
    originalPrice: "₹1,199.00",
    discount: "17%",
  },
  {
    title: "Catanic Oversized T-shirt",
    video: Video4,
    price: "₹999.00",
    originalPrice: "₹1,199.00",
    discount: "17%",
  },
  {
    title: "Powder Lilac Supima Regular Fit T-shirt",
    video: Video5,
    price: "₹899.00",
    originalPrice: "₹1,299.00",
    discount: "31%",
  },
  
];

interface VideoItem {
  title: string;
  video: string;
  price: string;
  originalPrice: string;
  discount: string;
}

const VideoCard = ({ item }: { item: VideoItem }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  const handleMouseEnter = () => {
    const vid = videoRef.current;
    if (vid) {
      vid.currentTime = 0;
      vid.play();
    }
  };

  const handleMouseLeave = () => {
    const vid = videoRef.current;
    if (vid) {
      vid.pause();
      vid.currentTime = 0;
    }
  };

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-sm border bg-white">
      <div
        className="relative w-full h-[520px] overflow-hidden group cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          src={item.video}
          muted={muted}
          loop
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        <button
          onClick={() => setMuted(!muted)}
          className="absolute top-3 right-3 bg-white bg-opacity-70 text-black p-1 rounded-full text-xs font-bold z-10"
        >
          {muted ? "🔇" : "🔊"}
        </button>
      </div>

      <div className="px-3 py-4 text-sm">
        <p className="font-medium text-black mb-1">{item.title}</p>
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#e63946]">{item.price}</span>
          <span className="line-through text-gray-500">{item.originalPrice}</span>
          <span className="text-green-600 font-semibold">-{item.discount}</span>
        </div>
      </div>
    </div>
  );
};

const VideoCardSection = () => {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-[1750px] mx-auto px-4">
        <h2 className="text-xl font-semibold text-center mb-8">Her Style Story: Your Style, Defined!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {videoItems.map((item, index) => (
            <VideoCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoCardSection;