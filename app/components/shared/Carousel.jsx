"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CategoryCard from "./CategoryCard";

const Carousel = ({ categories }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <IoIosArrowBack color="black" />,
    nextArrow: <IoIosArrowForward color="black" />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "60px",
          rows: 3,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "90px",
          rows: 3,
          slidesPerRow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings} className="flex h-fit items-center md:h-[192px]">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
