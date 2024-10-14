"use client";
import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";

const BannerSection = () => {
  return (
    <section className="h-[448px] w-full bg-[url('/images/banner-2.png')] bg-cover bg-center bg-no-repeat md:bg-[url('/images/banner.png')]">
      <Wrapper className="flex h-[448px] items-center justify-center">
        <div>
          <h1 className="text-center font-srProDisplay text-[48px] font-thin text-white md:text-[72px]">
            Big Summer{" "}
            <span className="font-srProDisplay text-[48px] font-medium text-white md:text-[72px]">
              Sale
            </span>
          </h1>
          <p className="text-center font-srProDisplay text-base font-normal text-[#787878]">
            Commodo fames vitae vitae leo mauris in. Eu consequat.{" "}
          </p>
          <div className="mt-[40px] flex justify-center">
            <Button
              height="56px"
              width="184px"
              borderWidth="1px"
              borderColor="grey"
              textColor="white"
              hoverBgColor="#333333"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default BannerSection;
