import Image from "next/image";
import { RiHeart3Line, RiHeart3Fill } from "react-icons/ri";
import Button from "./Button";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="mb-4 h-auto w-[163.5px] rounded-[9px] bg-[#f6f6f6] px-3 py-6 duration-500 hover:scale-[1.02] hover:shadow-md xs:w-[190px] sm:w-[298px] md:mb-0 md:h-[435px] md:w-[240px] md:px-4 xl:w-[268px]">
      <div className="flex flex-col gap-4">
        <div className="flex h-8 w-full justify-end">
          <Link href="#">
            <RiHeart3Line className="text-2xl" />
            {/* <RiHeart3Fill className="text-2xl text-red-600" /> */}
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <div className="h-[104px] w-[104px] md:h-[160px] md:w-[160px]">
            <Image
              src={product.image.url}
              alt={product.image.altText}
              height={0}
              width={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="h-[75px] sm:h-[50px]">
              <Link href="#">
                <h3 className="text-center font-srProDisplay text-base font-medium hover:text-indigo-600">
                  {`${product.name.slice(0, 40)} ${product.name.length <= 40 ? "" : "..."}`}
                </h3>
              </Link>
            </div>

            <div className="flex justify-center gap-2">
              <span className="font-figtree text-xl font-semibold">{`$${product.discountPrice}`}</span>
              {product.discountPrice && (
                <span className="font-figtree text-xl font-semibold text-[#808080] line-through">
                  {`$${product.originalPrice}`}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Button
              height="48px"
              width="183px"
              bgColor="black"
              textColor="white"
              textSize="14px"
              fontWeight="500"
              hoverBgColor="#1a1a1a"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
