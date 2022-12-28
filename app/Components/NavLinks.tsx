"use client";

import { categories } from "../../constants";

import NavLink from "./NavLink";

//It is a Hook server component not allowed hooks we can change it.
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathName = usePathname();

  const isActive = (path: string) => {
    return pathName?.split("/").pop() === path;
  };

  return (
    <nav className="grid grid-cols-4 lg:grid-cols-7 gap-2 pb-2 max-w-6xl mx-auto border-b text-xs sm:text-base">
      {categories.map((item, index) => (
        <NavLink key={index} category={item} isActive={isActive(item)} />
      ))}
    </nav>
  );
};

export default NavLinks;
