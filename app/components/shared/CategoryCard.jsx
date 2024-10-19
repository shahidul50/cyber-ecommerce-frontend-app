import Link from "next/link";
import Image from "next/image";

const CategoryCard = ({ category }) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="mb-3 !flex !h-[128px] !w-[160px] flex-col items-center justify-center gap-3 rounded-[15px] bg-[#ededed] py-4 text-white">
        <Image
          src={category.image.url}
          alt={category.image.altText}
          height={48}
          width={48}
        />
        <p className="font-srProDisplay font-medium text-black">
          {category.name}
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
