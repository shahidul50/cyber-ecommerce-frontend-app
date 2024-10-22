"use client";
import Image from "next/image";
import Button from "../shared/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSectionOne = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1173,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="overflow-none h-[640px] w-full">
      <Slider
        {...settings}
        className="bannerOne flex h-fit w-full items-center gap-1"
      >
        <div className="h-[640px] w-[360px] bg-white pb-[56px]">
          <div className="h-[338px] w-full overflow-hidden">
            <Image
              src="/images/Smart-watch.png"
              alt=""
              height={0}
              width={0}
              className="object-contain object-center"
              sizes="100vw"
              style={{ width: "100%", height: "338px" }}
            />
          </div>
          <div className="flex flex-col gap-4 p-[38px_32px_56px_32px]">
            <h3 className="text-center font-srProDisplay text-[33px] font-light text-black lg:text-left">
              Popular Products
            </h3>
            <p className="text-center font-srProDisplay text-sm font-medium text-[#909090] lg:text-left">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <div className="flex w-full items-center justify-center lg:justify-start">
              <Button
                height="56px"
                width="184px"
                borderWidth="1px"
                borderColor="#000"
                textColor="black"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>

        <div className="h-[640px] w-[360px] bg-[#f9f9f9] pb-[56px]">
          <div className="h-[338px] w-full overflow-hidden">
            <Image
              src="/images/apple-tablet.png"
              alt=""
              height={0}
              width={0}
              className="object-contain object-center"
              sizes="100vw"
              style={{ width: "100%", height: "338px" }}
            />
          </div>
          <div className="flex flex-col gap-4 p-[38px_32px_56px_32px]">
            <h3 className="text-center font-srProDisplay text-[33px] font-light text-black lg:text-left">
              Ipad Pro
            </h3>
            <p className="text-center font-srProDisplay text-sm font-medium text-[#909090] lg:text-left">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <div className="flex w-full items-center justify-center lg:justify-start">
              <Button
                height="56px"
                width="184px"
                borderWidth="1px"
                borderColor="#000"
                textColor="black"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>

        <div className="h-[640px] w-[360px] bg-[#eaeaea] pb-[56px]">
          <div className="h-[338px] w-full overflow-hidden">
            <Image
              src="/images/Apple-phone.png"
              alt=""
              height={0}
              width={0}
              className="object-contain object-center"
              sizes="100vw"
              style={{ width: "100%", height: "338px" }}
            />
          </div>
          <div className="flex flex-col gap-4 p-[38px_32px_56px_32px]">
            <h3 className="text-center font-srProDisplay text-[33px] font-light text-black lg:text-left">
              Samsung Galaxy
            </h3>
            <p className="text-center font-srProDisplay text-sm font-medium text-[#909090] lg:text-left">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <div className="flex w-full items-center justify-center lg:justify-start">
              <Button
                height="56px"
                width="184px"
                borderWidth="1px"
                borderColor="#000"
                textColor="black"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>

        <div className="h-[640px] w-[360px] bg-[#2c2c2c] pb-[56px]">
          <div className="h-[338px] w-full overflow-hidden">
            <Image
              src="/images/Macbook.png"
              alt=""
              height={0}
              width={0}
              className="object-contain object-center"
              sizes="100vw"
              style={{ width: "100%", height: "338px" }}
            />
          </div>
          <div className="flex flex-col gap-4 p-[38px_32px_56px_32px]">
            <h3 className="text-center font-srProDisplay text-[33px] font-light text-white lg:text-left">
              Macbook Pro
            </h3>
            <p className="text-center font-srProDisplay text-sm font-medium text-[#909090] lg:text-left">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <div className="flex w-full items-center justify-center lg:justify-start">
              <Button
                height="56px"
                width="184px"
                borderWidth="1px"
                borderColor="#fff"
                textColor="white"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default BannerSectionOne;
