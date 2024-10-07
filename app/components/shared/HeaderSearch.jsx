import Image from "next/image";
import React from "react";

const HeaderSearch = () => {
  return (
    <div className="flex items-center justify-start gap-2 bg-[#f5f5f5] p-4 shadow-md lg:rounded-lg lg:shadow-none">
      <Image
        src="/images/Search.png"
        alt="Search icon"
        height={24}
        width={24}
      />
      <input
        className="w-full bg-[#f5f5f5] p-1 font-srProDisplay text-sm font-medium text-black outline-none"
        type="search"
        id="search"
        placeholder="Search"
      />
    </div>
  );
};

export default HeaderSearch;
