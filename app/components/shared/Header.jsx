import Link from "next/link";
import Wrapper from "./Wrapper";
import Image from "next/image";

const Header = () => {
  return (
    <header className="h-[88px] w-full bg-white shadow-md">
      <Wrapper className="flex items-center justify-between gap-8 py-4">
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
          Search
        </div>
        {/* search bar end */}
        {/* logo start */}
        <div className="w-[383px]">
          <ul className="flex items-center justify-between font-srProDisplay text-base font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Category</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        {/* logo end */}
        {/* icons start */}
        <div className="w-[144px]">
          <ul className="flex items-center justify-between">
            <li className="block cursor-pointer lg:hidden">
              <Image
                src="/images/Search.png"
                alt="Search icon"
                width={40}
                height={40}
              />
            </li>
            <li className="relative">
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
            </li>
            <li className="relative">
              <Image
                src="/images/Cart.png"
                alt="cart icon"
                width={32}
                height={32}
              />
              <span className="absolute -right-[6px] -top-[4px] rounded-full bg-red-600 px-1 text-[10px] font-semibold text-white">
                99
              </span>
            </li>
            <li>
              <Image
                src="/images/User.png"
                alt="user icon"
                width={32}
                height={32}
              />
            </li>
            <li className="block cursor-pointer lg:hidden">
              <Image
                src="/images/Burger.png"
                alt="burger icon"
                width={40}
                height={40}
              />
            </li>
          </ul>
        </div>
        {/* icons end */}
      </Wrapper>
    </header>
  );
};

export default Header;
