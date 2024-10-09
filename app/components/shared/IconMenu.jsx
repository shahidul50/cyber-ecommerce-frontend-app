"use client";
import Image from "next/image";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";

const IconMenu = ({ setShowMobileMenu, setPositionSearchBar }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  //this useEffect for Mobile Menu hide or show
  useEffect(() => {
    if (showMenu) {
      setShowMobileMenu("left-0");
      setPositionSearchBar("invisible opacity-0 top-[100px]");
      setShowSearchBar(false);
    } else {
      setShowMobileMenu("left-[-300px]");
    }
  }, [showMenu, setShowMobileMenu, setPositionSearchBar]);

  //this useEffect for SearchBar hide or show
  useEffect(() => {
    if (showSearchBar) {
      setPositionSearchBar("visible opacity-100 top-[81px]");
      setShowMobileMenu("left-[-300px]");
      setShowMenu(false);
    } else {
      setPositionSearchBar("invisible opacity-0 top-[100px]");
    }
  }, [showSearchBar, setShowMenu, setShowMobileMenu, setPositionSearchBar]);

  return (
    <div className="flex w-[220px] items-center justify-end lg:block lg:w-[144px]">
      <ul className="fixed bottom-0 left-0 grid h-[66px] w-full grid-cols-4 items-center justify-between border-t-[1px] border-t-slate-100 bg-white sm:static sm:justify-end sm:gap-0 sm:bg-transparent lg:grid-cols-3">
        <li
          className="flex h-[66px] cursor-pointer flex-col items-center justify-center border-r-0 hover:bg-blue-50 sm:h-auto sm:border-none sm:hover:bg-transparent lg:hidden"
          onClick={() =>
            showSearchBar === false
              ? setShowSearchBar(true)
              : setShowSearchBar(false)
          }
        >
          <FaMagnifyingGlass size={27} color="grey" />
          <span className="font-srProDisplay text-sm font-medium sm:hidden">
            Search
          </span>
        </li>

        <li className="flex h-[66px] cursor-pointer flex-col items-center justify-center border-r-0 hover:bg-blue-50 sm:h-auto sm:border-none sm:hover:bg-transparent">
          <div className="relative">
            <Link href="/favorite">
              <Image
                src="/images/Favorites.png"
                alt="favorites icon"
                width={32}
                height={32}
              />
              <span className="absolute -right-[3px] -top-[4px] rounded-full bg-red-600 px-1 text-[10px] font-semibold text-white">
                99
              </span>
            </Link>
          </div>
          <span className="mt-[-5px] font-srProDisplay text-sm font-medium sm:hidden">
            Favorites
          </span>
        </li>

        <li className="flex h-[66px] cursor-pointer flex-col items-center justify-center border-r-0 hover:bg-blue-50 sm:h-auto sm:border-none sm:hover:bg-transparent">
          <div className="relative">
            <Image
              src="/images/Cart.png"
              alt="cart icon"
              width={32}
              height={32}
            />
            <span className="absolute -right-[6px] -top-[4px] rounded-full bg-red-600 px-1 text-[10px] font-semibold text-white">
              99
            </span>
          </div>
          <span className="mt-[-5px] font-srProDisplay text-sm font-medium sm:hidden">
            Cart
          </span>
        </li>

        <li className="flex h-[66px] cursor-pointer flex-col items-center justify-center hover:bg-blue-50 sm:hover:bg-transparent">
          <Image
            src="/images/User.png"
            alt="user icon"
            width={32}
            height={32}
          />
          <span className="font-srProDisplay text-sm font-medium sm:hidden">
            User
          </span>
        </li>
      </ul>
      <li className="block cursor-pointer lg:hidden">
        <div
          className="flex h-9 w-9 items-center justify-center duration-300 ease-in-out"
          onClick={() =>
            showMenu === false ? setShowMenu(true) : setShowMenu(false)
          }
        >
          <RxHamburgerMenu
            size={32}
            color="black"
            className={showMenu ? "hidden" : "block"}
          />
          <IoCloseOutline
            size={36}
            color="black"
            className={showMenu ? "block" : "hidden"}
          />
        </div>
      </li>
    </div>
  );
};

export default IconMenu;
