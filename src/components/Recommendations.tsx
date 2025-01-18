import Image from "next/image";
import Link from "next/link";
import React from "react";

const Recommendations = () => {
  return (
    <div className="p-4 border-[1px] border-borderGray rounded-2xl flex flex-col gap-4">
      {/* User card */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Image & Text */}
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image src="/icons/avatar.gif" alt="" width={100} height={100} />
          </div>
          <div className="">
            <h1 className="text-lg font-bold text-white">Jhon Doe</h1>
            <span className="text-textGray">@jhondoe</span>
          </div>
        </div>
        {/* Button */}
        <button className="font-semibold px-4 py-2 rounded-full bg-white text-black">
          Follow
        </button>
      </div>
      <Link href="/" className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
};

export default Recommendations;
