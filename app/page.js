import BannerSection from "./components/Home/BannerSection";
import BrowseCategorySection from "./components/Home/BrowseCategorySection";
import HeroSection from "./components/Home/HeroSection";
import Wrapper from "./components/shared/Wrapper";

export default function Home() {
  return (
    <div className="pt-[85px] lg:pt-0">
      {/* hero section start */}
      <HeroSection />
      {/* hero section end */}
      {/* browse category section start */}
      <BrowseCategorySection />
      {/* browse category section end */}
      {/* banner section start */}
      <BannerSection />
      {/* banner section end */}
    </div>
  );
}
