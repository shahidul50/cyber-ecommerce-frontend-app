import React from "react";
import Wrapper from "../shared/Wrapper";
import Carousel from "../shared/Carousel";

const BrowseCategorySection = () => {
  const data = [
    {
      id: 1,
      name: "Phones",
      slug: "phones",
      image: {
        url: "/images/Phones.png",
        altText: "Phone icon",
      },
    },
    {
      id: 2,
      name: "Smart Watches",
      slug: "smart-watches",
      image: {
        url: "/images/Smart-watches.png",
        altText: "Smart Watch icon",
      },
    },
    {
      id: 3,
      name: "Cameras",
      slug: "cameras",
      image: {
        url: "/images/Cameras.png",
        altText: "Cameras icon",
      },
    },
    {
      id: 4,
      name: "Headphones",
      slug: "headphones",
      image: {
        url: "/images/Headphone.png",
        altText: "Headphone icon",
      },
    },
    {
      id: 5,
      name: "Computers",
      slug: "computers",
      image: {
        url: "/images/Computers.png",
        altText: "Computer icon",
      },
    },
    {
      id: 6,
      name: "Gaming",
      slug: "gaming",
      image: {
        url: "/images/Gaming.png",
        altText: "Gaming icon",
      },
    },
    {
      id: 7,
      name: "Test-1",
      slug: "gaming",
      image: {
        url: "/images/Gaming.png",
        altText: "Gaming icon",
      },
    },
    {
      id: 7,
      name: "Test-2",
      slug: "gaming",
      image: {
        url: "/images/Gaming.png",
        altText: "Gaming icon",
      },
    },
  ];
  return (
    <section className="flex h-fit w-full items-center py-[80px] md:h-[352px]">
      <Wrapper className="relative h-fit px-3 md:h-[192px]">
        <h3 className="absolute left-3 top-[6px] font-srProDisplay text-2xl font-medium text-black lg:left-[10px]">
          Browser By Category
        </h3>
        <Carousel categories={data} />
      </Wrapper>
    </section>
  );
};

export default BrowseCategorySection;
