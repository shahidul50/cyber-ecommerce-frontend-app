import Link from "next/link";
import Wrapper from "./Wrapper";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mb-[66px] h-auto w-full bg-black text-white sm:mb-0 lg:h-[464px]">
      <Wrapper className="flex h-auto flex-col gap-8 py-12 md:gap-6 md:px-[64px] lg:py-[104px]">
        <div className="flex h-auto w-full flex-col items-center justify-start gap-8 md:flex-row md:items-start lg:h-[216px] lg:justify-between">
          <div className="basis-auto text-center md:text-left lg:basis-[384px]">
            <Link href="/" className="flex justify-center md:justify-start">
              <Image
                src="/images/logo_white.png"
                alt="logo"
                width={96}
                height={32}
              />
            </Link>
            <div className="mt-6 w-[295px] xl:w-full">
              <p className="font-srProDisplay text-base font-semibold">
                Location
              </p>
              <address className="h-[48px] font-srProDisplay text-sm font-light text-[#cfcfcf]">
                Head Office: 28 Kazi Nazrul Islam Ave, Navana Zohura Square,
                Dhaka 1000
              </address>
              <h4 className="font-srProDisplay text-base font-medium">
                Email:
              </h4>
              <p className="font-srProDisplay font-normal text-orange-400">
                webteam@cyber.com
              </p>
            </div>
          </div>
          <div className="flex basis-auto flex-col justify-between gap-8 text-center md:text-left lg:basis-[623px] lg:flex-row">
            <div className="max-w-[295px]">
              <h4 className="font-srProDisplay text-base font-medium">
                {" "}
                About Us
              </h4>
              <ul className="mt-2 font-srProDisplay text-sm font-light *:pb-2">
                <li>
                  <Link href="#">Payment Method</Link>
                </li>
                <li>
                  <Link href="#">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Refund & Return Policy</Link>
                </li>
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="max-w-[295px]">
              <h4 className="font-srProDisplay text-base font-medium">
                Support
              </h4>
              <div className="mt-2 flex items-center justify-start rounded-2xl border border-gray-700 p-2">
                <div className="border-r px-3">
                  <IoIosCall size={32} color="white" />
                </div>
                <div className="px-3">
                  <p className="font-srProDisplay text-sm font-thin text-gray-300">
                    9AM - 8PM
                  </p>
                  <p className="font-srProDisplay font-semibold text-orange-400">
                    16744
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer social icon section start */}
        <div className="mx-auto flex w-[173px] items-center justify-between md:mx-0 lg:h-[16px]">
          <Link href="#">
            <FaTwitter size={16} color="white" />
          </Link>
          <Link href="#">
            <FaFacebookF size={16} color="white" />
          </Link>
          <Link href="#">
            <FaTiktok size={16} color="white" />
          </Link>
          <Link href="#">
            <FaInstagram size={16} color="white" />
          </Link>
        </div>
        {/* footer social icon section end */}
      </Wrapper>
    </footer>
  );
};

export default Footer;
