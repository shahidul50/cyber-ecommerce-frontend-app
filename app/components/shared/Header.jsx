"use client";
import Link from "next/link";
import Wrapper from "./Wrapper";
import Image from "next/image";
import HeaderSearch from "./HeaderSearch";
import { FaAngleDown } from "react-icons/fa6";
import IconMenu from "./IconMenu";
import { useState, useEffect } from "react";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState("left-[-300px]");
  const [positionSearchBar, setPositionSearchBar] = useState(
    "invisible opacity-0 top-[100px]",
  );
  const [show, setShow] = useState("lg:translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShow("lg:translate-y-[-82px]");
      } else {
        setShow("shadow-md");
      }
    } else {
      setShow("lg:translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <header
      className={`fixed z-50 h-[82px] w-full bg-white shadow-md lg:sticky lg:left-0 lg:top-0 lg:transition-transform lg:duration-300 ${show}`}
    >
      <Wrapper className="flex h-[82px] items-center justify-between py-4 md:gap-3 xl:gap-8">
        {/* logo start */}
        <div className="w-[96px]">
          <Link href="/">
            <Image
              src="/images/logo_black.png"
              alt="logo"
              width={96}
              height={32}
            />
          </Link>
        </div>
        {/* logo end */}
        {/* search bar start */}
        <div
          className={`fixed left-0 ${positionSearchBar} w-full duration-500 ease-linear lg:visible lg:static lg:block lg:w-[401px] lg:opacity-100 lg:duration-0`}
        >
          <HeaderSearch />
        </div>
        {/* search bar end */}
        {/* Navigation start */}
        <div className="px-1 lg:w-[383px]">
          <ul
            className={`fixed top-[81px] z-50 flex h-screen w-[250px] flex-col items-start justify-start gap-0 bg-[#f1f1f1] p-2 font-srProDisplay text-base font-medium text-black *:w-full lg:static lg:h-auto lg:w-auto lg:flex-row lg:items-center lg:justify-center lg:gap-3 lg:bg-transparent lg:p-0 lg:text-gray-400 *:lg:text-center ${showMobileMenu} duration-500 ease-linear lg:duration-0`}
          >
            <li className="active block p-3 duration-300 hover:bg-blue-200 lg:p-0 hover:lg:bg-transparent hover:lg:text-black">
              <Link href="/">Home</Link>
            </li>
            <li className="flex cursor-pointer items-center justify-between p-3 hover:bg-blue-200 lg:gap-[2px] lg:p-0 hover:lg:bg-transparent hover:lg:text-black">
              Category
              <span className="">
                <FaAngleDown size={16} />
              </span>
            </li>
            <li className="block p-3 duration-300 hover:bg-blue-200 lg:p-0 hover:lg:bg-transparent hover:lg:text-black">
              <Link href="/about" className="block">
                About
              </Link>
            </li>
            <li className="block p-3 duration-300 hover:bg-blue-200 lg:p-0 hover:lg:bg-transparent hover:lg:text-black">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        {/* Navigation end */}
        {/* icons start */}
        <IconMenu
          setShowMobileMenu={setShowMobileMenu}
          setPositionSearchBar={setPositionSearchBar}
        />
        {/* icons end */}
      </Wrapper>
    </header>
  );
};

export default Header;
