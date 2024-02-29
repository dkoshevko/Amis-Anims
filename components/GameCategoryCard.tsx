import Image from "next/image";
import Link from "next/link";

type GameCategoryCardProps = {
  title: string;
  linkTo: string;
  imageUrl: string;
  imageAlt: string;
};

export default function GameCategoryCard({
  title,
  linkTo,
  imageUrl,
  imageAlt,
}: GameCategoryCardProps) {
  return (
    <Link href={linkTo}>
      <div className="w-full h-40 relative rounded-lg">
        <h3 className="absolute top-2 left-2 z-10 bg-white rounded-full px-4 font-medium">
          {title}
        </h3>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill={true}
          className="rounded-xl object-cover"
        />
      </div>
    </Link>
  );
}
