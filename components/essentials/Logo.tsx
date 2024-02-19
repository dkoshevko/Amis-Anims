import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} >
      <Image src={"next.svg"} alt={"Logo Amis Anims"} width={100} height={50} />
    </Link>
  );
}
