"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

//Hooks run on component mount to window which can not be done inside server so use client component with hooks

const SearchBox = () => {
  const [text, setText] = useState("");
  const router = useRouter();

  const searchHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!text) return;
    router.push(`/search?keyword=${text}`);
  };

  return (
    <form
      onSubmit={searchHandler}
      className="max-w-6xl mx-auto flex justify-between items-center px-8"
    >
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
        type="text"
        placeholder="Search Keywords Live..."
        className="dark:text-white text-gray-700  w-full h-14 flex-1 rounded-sm placeholder:text-gray-500 outline-none bg-transparent sm:text-xl"
      />
      <button
        type="submit"
        className="text-gray-800 dark:text-white sm:text-xl"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
