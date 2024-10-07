import Link from "next/link";
import Wrapper from "./Wrapper";
import Image from "next/image";
import HeaderSearch from "./HeaderSearch";
import { FaAngleDown, FaSistrix, FaMagnifyingGlass } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="h-[82px] w-full bg-white shadow-md">
      <Wrapper className="flex items-center justify-between py-4 md:gap-3 xl:gap-8">
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
        <div className="fixed left-0 top-[88px] w-full lg:static lg:w-[401px]">
          <HeaderSearch />
        </div>
        {/* search bar end */}
        {/* Navigation start */}
        <div className="px-1 lg:w-[383px]">
          <ul className="fixed left-0 top-[88px] z-10 flex h-screen w-[250px] flex-col items-start justify-start gap-0 bg-[#f1f1f1] p-2 font-srProDisplay text-base font-medium text-black *:w-full lg:static lg:h-auto lg:w-auto lg:flex-row lg:items-center lg:justify-center lg:gap-3 lg:bg-transparent lg:p-0 lg:text-gray-400">
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
        <div className="flex w-[220px] items-center justify-end lg:block lg:w-[144px]">
          <ul className="fixed bottom-0 left-0 grid h-[66px] w-full grid-cols-4 items-center justify-between bg-white shadow-md sm:static sm:h-auto sm:justify-end sm:gap-0 sm:bg-transparent sm:shadow-none lg:grid-cols-3">
            <li className="flex h-[66px] cursor-pointer flex-col items-center justify-center border-r sm:h-auto sm:border-none lg:hidden">
              <FaMagnifyingGlass size={27} color="grey" />
              <span className="font-srProDisplay text-sm font-medium sm:hidden">
                Search
              </span>
            </li>

            <li className="flex h-[66px] cursor-pointer flex-col items-center justify-center border-r sm:h-auto sm:border-none">
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

            <li className="flex h-[66px] cursor-pointer flex-col items-center justify-center border-r sm:h-auto sm:border-none">
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

            <li className="flex h-[66px] cursor-pointer flex-col items-center justify-center">
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
            <Image
              src="/images/Burger.png"
              alt="burger icon"
              width={40}
              height={40}
            />
          </li>
        </div>
        {/* icons end */}
      </Wrapper>
    </header>
  );
};

export default Header;
