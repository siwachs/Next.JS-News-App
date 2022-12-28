import { Bars3Icon } from "@heroicons/react/24/solid";

import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-3 p-4 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <span className="underline decoration-4 decoration-gray-400">
              MediaStack
            </span>{" "}
            API News
          </h1>
        </Link>

        <div className="flex items-center justify-end space-x-2">
          <DarkModeButton />
          <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-3 rounded-full dark:bg-slate-800 lg:text-lg">
            Subscribe Now!
          </button>
        </div>
      </div>

      <NavLinks />

      <SearchBox />
    </header>
  );
};

export default Header;
