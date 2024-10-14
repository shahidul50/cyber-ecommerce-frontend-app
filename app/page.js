import BannerSection from "./components/Home/BannerSection";
import HeroSection from "./components/Home/HeroSection";

export default function Home() {
  return (
    <div className="pt-[85px] lg:pt-0">
      <HeroSection />
      {/* banner section start */}
      <BannerSection />
      {/* banner section end */}
    </div>
  );
}
