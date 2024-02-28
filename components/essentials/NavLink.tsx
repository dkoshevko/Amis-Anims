import Link from "next/link";
import { FC } from "react";

type NavLinkProps = {
  url: string;
  title: string;
};

const NavLink: FC<NavLinkProps> = ({ url, title }) => {
  return (
    <Link
      href={`/${url}`}
      className="cursor-pointer text-black text-center border border-slate-300 rounded py-4 w-full lg:border-none lg:w-auto lg:active:bg-transparent active:bg-white active:border-white"
    >
      <li>{title}</li>
    </Link>
  );
};

export default NavLink;
