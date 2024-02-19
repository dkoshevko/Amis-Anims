import Link from "next/link";
import { FC } from "react";

type NavLinkProps = {
  url: string;
  title: string;
};

const NavLink: FC<NavLinkProps> = ({ url, title }) => {
  return (
    <li className="uppercase text-black">
      <Link href={`/${url}`}>{title}</Link>
    </li>
  );
};

export default NavLink;
