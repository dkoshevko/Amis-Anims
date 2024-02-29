import Image from "next/image";
import Link from "next/link";

type GameCategoryProps = {
  title: string;
  linkTo: string;
  imageUrl: string;
  imageAlt: string;
};

export default function GameCategory({ title, linkTo, imageUrl, imageAlt }: GameCategoryProps) {
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
