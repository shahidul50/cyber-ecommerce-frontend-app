import Link from "next/link";

const ViewMoreCard = () => {
  return (
    <div className="mb-4 ml-[2px] h-auto w-[163.5px] rounded-[9px] px-3 py-6 duration-500 hover:scale-[1.02] xs:w-[190px] sm:mb-0 sm:w-[298px] md:h-[435px] md:w-[240px] md:px-4 xl:w-[268px]">
      <div className="flex h-[355px] w-full flex-col items-center justify-center gap-4 sm:h-[330px] md:h-[390px]">
        <div className="flex items-center justify-center">
          <Link
            href="#"
            className="font-sm flex h-12 w-full items-center justify-center rounded-md border border-black px-5 font-srProDisplay font-medium hover:bg-[#1a1a1a] hover:text-white sm:w-[183px]"
          >
            View More...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewMoreCard;
