"use client";
import Image from "next/image";
import Wrapper from "../components/shared/Wrapper";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../components/shared/Button";
import { useState } from "react";

const data = [
  {
    id: 1,
    productName: "Apple Iphone 14 Pro Max 128Gb Deep Purple black",
    productCode: "#25139526913984",
    originalPrice: 1399,
    imageUrl: "/images/iphone.png",
    imageAlt: "Iphone",
  },
  {
    id: 2,
    productName: "AirPods Max Silver",
    productCode: "#513952358345",
    originalPrice: 399,
    imageUrl: "/images/headphones.png",
    imageAlt: "red headphone",
  },
  {
    id: 3,
    productName: "Apple Iphone 13 Pro black",
    productCode: "#63632324",
    originalPrice: 999,
    imageUrl: "/images/product-image.png",
    imageAlt: "Iphone pro",
  },
];

const Cart = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < 99) {
      setCount((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <div className="pt-[85px] lg:pt-0">
      <Wrapper className="flex flex-col gap-10 px-4 py-10 md:flex-row">
        {/* left side start */}
        <div className="flex basis-[45%] flex-col gap-10">
          <h2 className="font-srProDisplay text-2xl font-semibold">
            Shopping Cart
          </h2>
          {/* Products Card start */}
          <ul className="">
            {data.map((d) => (
              <li
                key={d.id}
                className="mb-2 flex h-[182px] w-full items-center justify-start gap-[15px] border-b-[1px] border-[#d9d9d9] p-[0px_0px_32px_0px] last:border-b-0"
              >
                {/*card leftSide Start */}
                <div className="flex h-[182px] w-[150px] items-center justify-center">
                  <Image
                    src={d.imageUrl}
                    alt={d.imageAlt}
                    height={90}
                    width={90}
                  />
                </div>
                {/* card leftSide end */}
                {/* card rightSide Start */}
                <div className="flex w-full flex-col gap-2 bg-white pr-2">
                  <h3 className="font-srProDisplay text-base font-medium">
                    {d.productName}
                  </h3>
                  <p className="font-srProDisplay text-sm font-normal">
                    {d.productCode}
                  </p>
                  <div className="flex h-[48px] items-center justify-between gap-2">
                    <div className="flex items-center gap-1">
                      <Button
                        width="28px"
                        height="32px"
                        hoverBgColor="#efefef"
                        fontWeight="700"
                        clickEvent={handleDecrement}
                      >
                        -
                      </Button>
                      <span className="flex h-[32px] w-[40px] items-center justify-center">
                        <p className="rounded-md border px-2 py-1 font-srProDisplay text-base font-medium">
                          {count}
                        </p>
                      </span>
                      <Button
                        width="28px"
                        height="32px"
                        hoverBgColor="#efefef"
                        fontWeight="700"
                        clickEvent={handleIncrement}
                      >
                        +
                      </Button>
                    </div>
                    <p className="flex h-[32px] w-auto items-center justify-center overflow-hidden font-srProDisplay text-xl font-medium">
                      ${d.originalPrice}
                    </p>
                    {/* <span className="h-6 w-6 text-2xl text-black">
                      <IoCloseOutline />
                    </span> */}
                    <Button
                      height="32px"
                      textSize="21px"
                      hoverBgColor="#efefef"
                    >
                      <IoCloseOutline />
                    </Button>
                  </div>
                </div>
                {/* card rightSide end */}
              </li>
            ))}
          </ul>
          {/* Products Card start */}
        </div>
        {/* left side end */}

        {/* right side start */}
        <div className="flex h-[520px] basis-[45%] flex-col gap-10 rounded-lg border px-4 py-[42px]">
          <h3 className="font-srProDisplay text-xl font-bold">Order Summary</h3>
          <div className="flex flex-col gap-12">
            <div id="block" className="flex flex-col gap-6">
              <div id="fields" className="flex flex-col gap-6">
                <div className="flex flex-col">
                  <label className="mb-1 font-srProDisplay text-sm font-medium text-[#545454]">
                    Discount code/Promo code
                  </label>
                  <div className="flex items-center justify-between rounded-md border p-4">
                    <input
                      type="text"
                      placeholder="Code"
                      className="w-3/4font-srProDisplay h-9 outline-none placeholder:font-srProDisplay placeholder:text-sm placeholder:font-normal"
                    />
                    <Button
                      height="32px"
                      width="76px"
                      borderWidth="1px"
                      hoverTextColor=""
                      hoverBgColor="#f2f2f2"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
              <div id="price">
                <div className="flex items-center justify-between font-srProDisplay font-medium">
                  <span>Subtotal</span>
                  <span>$2347</span>
                </div>
                <div className="flex items-center justify-between py-2 font-srProDisplay font-normal text-[#545454]">
                  <span>Delivery Charge</span>
                  <span>$50</span>
                </div>
                <div className="flex items-center justify-between pb-3 font-srProDisplay font-normal text-[#545454]">
                  <span>Discount Price</span>
                  <span>$20</span>
                </div>
                <div className="flex items-center justify-between font-srProDisplay font-medium">
                  <span>Total</span>
                  <span>$2426</span>
                </div>
              </div>
            </div>
            <Button
              height="56px"
              width="100%"
              bgColor="black"
              textColor="white"
              fontWeight="500"
              hoverBgColor="#1a1a1a"
            >
              Checkout
            </Button>
          </div>
        </div>
        {/* right side end */}
      </Wrapper>
    </div>
  );
};

export default Cart;
