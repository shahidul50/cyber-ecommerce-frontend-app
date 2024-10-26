"use client";
import Wrapper from "../shared/Wrapper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../shared/ProductCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ViewMoreCard from "../shared/ViewMoreCard";
import { useEffect, useState } from "react";

const ProductsSection = () => {
  const [value, setValue] = useState("New Arrival");
  const [slide, setSlide] = useState("");

  useEffect(() => {
    const slickSlide = document.querySelectorAll(".productTag .tab");
    slickSlide.forEach((item) => {
      item.addEventListener("click", () => {
        //remove active class if already exist
        document.querySelector(".activeTab").classList.remove("activeTab");
        //add active class on clicked nav item.
        item.classList.add("activeTab");
      });
    });
    console.log(slickSlide);
  }, []);

  const products = [
    {
      id: 1,
      name: "Apple iPhone 14 Pro Max 128GB Deep Purple(MQ9T3RX/A)",
      featureType: "New Arrival",
      originalPrice: "900",
      discountPrice: "",
      image: {
        url: "/images/Iphone-14-pro-purple.png",
        altText: "Iphone-14-pro-purple",
      },
    },
    {
      id: 2,
      name: "Blackmagic Pocket Cinema Camera 6k",
      featureType: "New Arrival",
      originalPrice: "2535",
      discountPrice: "",
      image: {
        url: "/images/Camera.png",
        altText: "Camera",
      },
    },
    {
      id: 3,
      name: "Apple Watch Series 9 GPS 41mm Starlight Aluminum Case",
      featureType: "New Arrival",
      originalPrice: "399",
      discountPrice: "",
      image: {
        url: "/images/Apple-Watch.png",
        altText: "Apple-Watch",
      },
    },
    {
      id: 4,
      name: "AirPods Max Silver",
      featureType: "New Arrival",
      originalPrice: "549",
      discountPrice: "",
      image: {
        url: "/images/Apple-airPods.png",
        altText: "Apple-airPods",
      },
    },
    {
      id: 5,
      name: "Samsung Galaxy Watch6 Classic 47mm Black",
      featureType: "New Arrival",
      originalPrice: "369",
      discountPrice: "",
      image: {
        url: "/images/Samsung-Watch.png",
        altText: "Samsung-Watch",
      },
    },
    {
      id: 6,
      name: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
      featureType: "New Arrival",
      originalPrice: "1799",
      discountPrice: "",
      image: {
        url: "/images/Galaxy-Z-Mobile.png",
        altText: "Galaxy-Z-Mobile",
      },
    },
    {
      id: 7,
      name: "Galaxy Buds FE Graphite",
      featureType: "New Arrival",
      originalPrice: "99.99",
      discountPrice: "",
      image: {
        url: "/images/Galaxy-buds-FE.png",
        altText: "Galaxy-buds-FE",
      },
    },
    {
      id: 8,
      name: "Apple iPad 9 10.2'' 64GB Wi-Fi Silver (MK2L3) 2021",
      featureType: "New Arrival",
      originalPrice: "398",
      discountPrice: "",
      image: {
        url: "/images/Apple-iPad.png",
        altText: "Apple-iPad",
      },
    },
    {
      id: 9,
      name: "Apple iPhone 11 128GB White (MQ233)",
      featureType: "New Arrival",
      originalPrice: "550",
      discountPrice: "",
      image: {
        url: "/images/Iphone-14-pro-white.png",
        altText: "Iphone-14-pro-white",
      },
    },
    {
      id: 10,
      name: "Apple iPhone 13 mini 128GB Pink (MLK23)",
      featureType: "New Arrival",
      originalPrice: "850",
      discountPrice: "",
      image: {
        url: "/images/Iphone-14-pro-pink.png",
        altText: "Iphone-14-pro-pink",
      },
    },
    {
      id: 11,
      name: "Apple iPhone 14 Pro 256GB Space Black (MQ0T3)",
      featureType: "Up Coming...",
      originalPrice: "N/A",
      discountPrice: "",
      image: {
        url: "/images/Iphone-14-pro-black.png",
        altText: "Iphone-14-pro-black",
      },
    },
    {
      id: 12,
      name: "Apple iPhone 14 Pro 256GB Silver (MQ103)",
      featureType: "Up Coming...",
      originalPrice: "1399",
      discountPrice: "",
      image: {
        url: "/images/Iphone-14-pro-silver.png",
        altText: "Iphone-14-pro-silver",
      },
    },
    {
      id: 13,
      name: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
      featureType: "Up Coming...",
      originalPrice: "1600",
      discountPrice: "",
      image: {
        url: "/images/Iphone-14-pro-gold.png",
        altText: "Iphone-14-pro-gold",
      },
    },
    {
      id: 14,
      name: "Samsung Headphone Red",
      featureType: "Up Coming...",
      originalPrice: "299",
      discountPrice: "",
      image: {
        url: "/images/Headphones.png",
        altText: "samsung headphones",
      },
    },
  ];

  const data = products.filter((item) => item.featureType === value);
  const productLength = data.length;

  //this function is for row size on screen size 768px to 1023px.
  const tabletRowSize = (productLength) => {
    const length = productLength;
    if (length >= 8) {
      return 3;
    }
    if (length > 4 && length <= 7) {
      return 2;
    }
    return 1;
  };
  //this function is for row size on screen size 360px to 767px.
  const mobileRowSize = (productLength) => {
    const length = productLength;
    if (length >= 8) {
      return 4;
    }
    if (length > 5 && length <= 7) {
      return 3;
    }
    if (length > 3 && length <= 5) {
      return 2;
    }
    return 1;
  };

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow !flex !items-center !justify-center" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <IoIosArrowBack color="black" />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow !flex !items-center !justify-center" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <IoIosArrowForward color="black" />
    </button>
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    rows: data.length > 6 ? 2 : 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          rows: tabletRowSize(productLength),
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: mobileRowSize(productLength),
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 359,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
          slidesPerRow: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="h-auto w-full">
      <Wrapper className="flex h-fit w-full flex-col gap-8 py-14">
        <div className="h-9 w-[250px] sm:w-[440px]">
          <Slider
            {...settings2}
            className="productTag !grid !h-9 !w-full !items-center pl-3"
          >
            <div
              className="cursor-pointer text-nowrap font-srProDisplay text-lg font-medium outline-none"
              onClick={(e) => setValue(e.target.innerText)}
            >
              <span className="tab activeTab">New Arrival</span>
            </div>
            <div
              className="cursor-pointer text-nowrap font-srProDisplay text-lg font-medium outline-none"
              onClick={(e) => setValue(e.target.innerText)}
            >
              <span className="tab">BestSeller</span>
            </div>
            <div
              className="cursor-pointer text-nowrap font-srProDisplay text-lg font-medium outline-none"
              onClick={(e) => setValue(e.target.innerText)}
            >
              <span className="tab">Up Coming...</span>
            </div>
          </Slider>
        </div>
        <Slider
          {...settings}
          className="products flex !h-fit w-full items-center pt-3 md:h-[455px]"
        >
          {productLength > 0 ? (
            data.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                className="mb-4 w-[163.5px] xs:w-[190px] sm:w-[298px] md:w-[240px] xl:w-[268px]"
              />
            ))
          ) : (
            <div className="mb-4 ml-[2px] h-auto w-[163.5px] rounded-[9px] px-3 py-6 duration-500 hover:scale-[1.02] xs:w-[190px] sm:mb-0 sm:w-[298px] md:h-[435px] md:w-[240px] md:px-4 xl:w-[268px]">
              <div className="flex h-[355px] w-full flex-col items-center justify-center gap-4 sm:h-[330px] md:h-[390px]">
                <div className="flex items-center justify-center font-figtree text-xl font-semibold">
                  No data found
                </div>
              </div>
            </div>
          )}
          {productLength >= 16 && <ViewMoreCard />}
        </Slider>
      </Wrapper>
    </section>
  );
};

export default ProductsSection;
