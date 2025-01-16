import Image from "next/image";
import React from "react";

const Search = () => {
  return (
    <div className="flex items-center gap-4 rounded-full bg-inputGray px-4 py-2">
      <Image
        src="icons/explore.svg"
        alt="Explore"
        width={16}
        height={16}
        className="cursor-pointer"
      />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none placeholder:text-textGray"
      />
    </div>
  );
};

export default Search;
