import Link from "next/link";
import Image from "next/image";

type GameCardProps = {
  title: string;
  linkTo: string;
  imageUrl: string;
  imageAlt: string;
};

export default function GameCard({
  title,
  linkTo,
  imageUrl,
  imageAlt,
}: GameCardProps) {
  return (
    <Link href={linkTo}>
      <div className="w-40 h-40 relative">
        <h4 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-11/12 text-white font-medium text-center text-wrap">
          {title}
        </h4>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill={true}
          className="relative rounded-xl object-cover"
        />
        <div className="absolute w-full h-full rounded-xl bg-black opacity-30"></div>
      </div>
    </Link>
  );
}
