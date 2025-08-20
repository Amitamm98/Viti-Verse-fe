import ShippingInfoSection from "../common/ShippingInfoSection";
import ManCategories from "./ManCategories";
import ManFeaturedCollection from "./ManFeaturedCollection";
import ManHeroPage from "./ManHeroPage";
import ManNewArrival from "./ManNewArrival";
import ManVideoSection from "./ManVideoSection";
import VideoCardSection from "./VideoCardSection";

const ManPage = () => {
  return (
    <>
      <ManHeroPage />
      <ManVideoSection />
      <ManCategories />
      <VideoCardSection />
      <ManNewArrival />
      <ManFeaturedCollection />
       <ShippingInfoSection/>
    </>
  );
};

export default ManPage;
