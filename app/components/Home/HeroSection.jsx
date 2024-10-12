import React from "react";
import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";
import Image from "next/image";

//Dynamic Data for Hero Section
const data = {
  sectionBgColor: "",
  isGradient: true,
  gradientPosition: "to right",
  gradientFrom: "#211c24",
  gradientTo: "#211c24",
  left: {
    smallTitle: "Pro.Beyond",
    smallTitleColor: "#909090",
    bigTitle: "IPhone 14",
    bigTitleColor: "white",
    bigTitleBold: "Pro",
    bigTitleBoldColor: "white",
    description: "Created to change everything for the better. For everyone",
    descriptionColor: "#909090",
    isButton: true,
    button: {
      buttonText: "Shop Now",
      buttonTextColor: "white",
      buttonBorderWidth: "1px",
      buttonBorderType: "solid",
      buttonBorderColor: "white",
      buttonHoverBgColor: "#333333",
      buttonHoverTextColor: "",
    },
  },
  right: {
    imageUrl: "/images/iphone.png",
    imageAlt: "iphone",
  },
};

const bgGradient = (data) => {
  return `linear-gradient(${data.gradientPosition}, ${data.gradientFrom}, ${data.gradientTo})`;
};

const HeroSection = () => {
  return (
    <section
      className={`h-auto md:h-[472px] lg:h-[632px]`}
      style={{
        background: `${data.sectionBgColor !== "" && data.isGradient !== true ? data.sectionBgColor : ""}`,
        backgroundImage: `${data.isGradient === true ? bgGradient(data) : ""}`,
      }}
    >
      <Wrapper className="flex h-auto flex-col p-[88px_16px_0px_16px] md:h-[472px] md:flex-row md:gap-8 md:p-[0px_16px_0px_16px] lg:h-[632px] lg:gap-0">
        {/* left side start */}
        <div className="flex h-auto basis-[60%] flex-col justify-center gap-4 md:gap-8 md:px-2">
          <div className="flex flex-col text-center md:gap-3 md:text-left">
            <p
              className="font-figtree text-[25px] font-semibold"
              style={{ color: data.left.smallTitleColor }}
            >
              {data.left.smallTitle}
            </p>
            <h1
              className="font-srProDisplay text-[75px] font-thin leading-[1.1] md:text-[60px] md:leading-[0.7] lg:text-[96px]"
              style={{ color: data.left.bigTitleColor }}
            >
              {data.left.bigTitle}
              <span
                className="ml-2 font-srProDisplay font-semibold"
                style={{ color: data.left.bigTitleBoldColor }}
              >
                {data.left.bigTitleBold}
              </span>
            </h1>
          </div>
          <p
            className="text-wrap text-center font-srProDisplay text-[19px] font-medium md:pr-3 md:text-left md:text-lg lg:pr-0"
            style={{ color: data.left.descriptionColor }}
          >
            {data.left.description}
          </p>
          <div className="mt-4 flex w-full items-center justify-center md:justify-start">
            {data.left.isButton && (
              <Button
                className={`w-[181px] font-srProDisplay text-base font-medium text-[--text-color] hover:bg-[--hover-bg-color] hover:text-[--hover-text-color]`}
                style={{
                  border: `${data.left.button.buttonBorderWidth} ${data.left.button.buttonBorderType} ${data.left.button.buttonBorderColor}`,
                  "--hover-bg-color": data.left.button.buttonHoverBgColor,
                  "--hover-text-color":
                    data.left.button.buttonHoverTextColor !== ""
                      ? data.left.button.buttonHoverTextColor
                      : data.left.button.buttonTextColor,
                  "--text-color": data.left.button.buttonTextColor,
                }}
              >
                {data.left.button.buttonText}
              </Button>
            )}
          </div>
        </div>
        {/* left side end */}
        {/* right side start */}
        <div className="basis-[40%] overflow-hidden">
          <Image
            src={data.right.imageUrl}
            alt={data.right.imageAlt}
            width={404}
            height={632}
            className="h-[289px] w-full object-fill object-center xs:object-contain md:h-full md:object-fill lg:w-[343px]"
          />
        </div>
        {/* right side end */}
      </Wrapper>
    </section>
  );
};

export default HeroSection;
