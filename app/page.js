import BannerSection from "./components/Home/BannerSection";
import BannerSectionOne from "./components/Home/BannerSectionOne";
import BrowseCategorySection from "./components/Home/BrowseCategorySection";
import DiscountProductSection from "./components/Home/DiscountProductSection";
import HeroSection from "./components/Home/HeroSection";

export default function Home() {
  return (
    <div className="pt-[85px] lg:pt-0">
      {/* hero section start */}
      <HeroSection />
      {/* hero section end */}
      {/* browse category section start */}
      <BrowseCategorySection />
      {/* browse category section end */}
      {/* banner section one start */}
      <BannerSectionOne />
      {/* banner section one start */}
      {/* banner section Two start */}
      <BannerSection />
      {/* banner section Two end */}
      {/* discount Product Section start */}
      <DiscountProductSection />
      {/* discount Product Section end */}
    </div>
  );
}
