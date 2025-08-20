import Video from "../../assets/videos/mixkit-t-shirts-on-hangers-at-fashion-store-34707-hd-ready.mp4";
import ShopNow from "../common/ShopNow";

const ManVideoSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center space-y-6 pointer-events-none top-90">
        <h1 className="text-white text-5xl md:text-6xl font-bold pointer-events-auto">
          Polo T-Shirts
        </h1>
        <div className="pointer-events-auto">
          <ShopNow />
        </div>
      </div>

      <div className="absolute inset-0 bg-black/25 z-0" />
    </section>
  );
};

export default ManVideoSection;
