//In TSX we need props defination to get data

import Link from "next/link";

type Props = {
  category: string;
  isActive: boolean;
};

const NavLink = ({ category, isActive }: Props) => {
  return (
    <Link
      prefetch={false}
      className={`navLink ${
        isActive &&
        "underline decoration-gray-400 underline-offset-4 font-bold text-lg"
      }`}
      href={`/news/${category}`}
    >
      {category}
    </Link>
  );
};

export default NavLink;
