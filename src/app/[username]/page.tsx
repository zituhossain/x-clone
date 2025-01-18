import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserPage = () => {
  return (
    <div>
      {/* Profile Title */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
        <Link href={"/"}>
          <Image src="/icons/back.svg" alt="" width={24} height={24} />
        </Link>
        <h1 className="text-lg font-bold text-white">zitu Dev</h1>
      </div>
      {/* Info */}
      <div className="">
        {/* cover & avatar */}
        <div className="w-full relative">
          {/* cover */}
          <div className="w-full aspect-[3/1] relative">
            <Image src="/general/cover.jpg" alt="" width={600} height={100} />
          </div>
          {/* avatar */}
          <div className="w-auto aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-4 -translate-y-1/2">
            <Image src="/icons/avatar.gif" alt="" width={100} height={100} />
          </div>
        </div>
        {/* Icon */}
        <div className="flex items-center justify-end gap-2 p-2">
          <div className="w-9 h-9 rounded-full border-[1px] border-gray-500 flex items-center justify-center cursor-pointer">
            <Image
              src="/icons/more.svg"
              alt=""
              width={20}
              height={20}
              className=""
            />
          </div>
          <div className="w-9 h-9 rounded-full border-[1px] border-gray-500 flex items-center justify-center cursor-pointer">
            <Image
              src="/icons/explore.svg"
              alt=""
              width={20}
              height={20}
              className=""
            />
          </div>
          <div className="w-9 h-9 rounded-full border-[1px] border-gray-500 flex items-center justify-center cursor-pointer">
            <Image
              src="/icons/message.svg"
              alt=""
              width={20}
              height={20}
              className=""
            />
          </div>
          <button className="py-2 px-4 bg-white text-black rounded-full">
            Follow
          </button>
        </div>

        {/* User Details */}
        <div className="p-4 flex flex-col gap-2">
          {/* user name & handle */}
          <div>
            <h1 className="text-2xl text-white font-bold">zitu Dev</h1>
            <span className="text-textGray text-sm">@zitu_dev</span>
          </div>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          {/* Job & Location & Date */}
          <div className="flex gap-4 text-textGray text-[15px]">
            <div className="flex items-center gap-2">
              <Image
                src="/icons/userLocation.svg"
                alt=""
                width={20}
                height={20}
              />
              <span className="pt-0.5">BD</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/date.svg" alt="" width={20} height={20} />
              <span className="pt-0.5">Joined January 2022</span>
            </div>
          </div>

          {/* Followings & Followers */}
          <div className="flex items-center gap-4"></div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
