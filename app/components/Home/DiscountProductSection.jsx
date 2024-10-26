"use client";
import Wrapper from "../shared/Wrapper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../shared/ProductCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ViewMoreCard from "../shared/ViewMoreCard";

const DiscountProductSection = () => {
  const data = [
    {
      id: 1,
      name: "Apple iPhone 14 Pro Max 512GB Gold(MQ233)",
      originalPrice: "1437",
      discountPrice: "1350",
      image: {
        url: "/images/Iphone-14-pro-gold.png",
        altText: "Iphone-14-pro-gold",
      },
    },
    {
      id: 2,
      name: "AirPods Max Silver",
      originalPrice: "549",
      discountPrice: "510",
      image: {
        url: "/images/Apple-airPods.png",
        altText: "Apple-airPods",
      },
    },
    {
      id: 3,
      name: "Apple Watch Series 9 GPS 41mm Starlight Aluminum Case",
      originalPrice: "399",
      discountPrice: "350",
      image: {
        url: "/images/Apple-Watch.png",
        altText: "Apple-Watch",
      },
    },
    {
      id: 4,
      name: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
      originalPrice: "1499",
      discountPrice: "1450",
      image: {
        url: "/images/Iphone-14-pro-Gold.png",
        altText: "Iphone-14-pro-Gold",
      },
    },
  ];

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: data.length > 3 ? 2 : 1,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 359,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
          slidesPerRow: 1,
        },
      },
    ],
  };
  return (
    <section className="h-auto w-full">
      <Wrapper className="flex h-fit w-full flex-col gap-8 py-[80px]">
        <div>
          <h3 className="font-srProDisplay text-2xl font-medium">
            Discountable Products
          </h3>
        </div>
        <Slider
          {...settings}
          className="discountProduct grid w-full items-center pt-3"
        >
          {data.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="mb-4 w-[163.5px] xs:w-[190px] sm:w-[298px] md:mb-0 md:w-[240px] xl:w-[268px]"
            />
          ))}
          {data.length >= 16 && <ViewMoreCard />}
        </Slider>
      </Wrapper>
    </section>
  );
};

export default DiscountProductSection;
