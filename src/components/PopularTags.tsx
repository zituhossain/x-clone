import Image from "next/image";
import React from "react";

const PopularTags = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      <h1 className="text-xl font-bold text-textGrayLight">
        {"What's"} Happening
      </h1>
      {/* Trend Event */}
      <div className="flex gap-4">
        <div className="relative w-20 h-20">
          <Image
            src="/general/post.jpeg"
            alt=""
            width={120}
            height={120}
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-textGrayLight">
            Nadal v Dederer Grand Slam
          </h2>
          <span className="text-textGray text-sm">Last Night</span>
        </div>
      </div>
      {/* Topics */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGrayLight text-sm">
            Technology . Trending
          </span>
          <Image
            src="/icons/infoMore.svg"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
        <div className="">
          <h2 className="text-textGrayLight font-bold">OpenAI</h2>
          <span className="text-textGray text-sm">20k posts</span>
        </div>
      </div>
      {/* Topics */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGrayLight text-sm">
            Technology . Trending
          </span>
          <Image
            src="/icons/infoMore.svg"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
        <div className="">
          <h2 className="text-textGrayLight font-bold">OpenAI</h2>
          <span className="text-textGray text-sm">20k posts</span>
        </div>
      </div>
      {/* Topics */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGrayLight text-sm">
            Technology . Trending
          </span>
          <Image
            src="/icons/infoMore.svg"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
        <div className="">
          <h2 className="text-textGrayLight font-bold">OpenAI</h2>
          <span className="text-textGray text-sm">20k posts</span>
        </div>
      </div>
      {/* Topics */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGrayLight text-sm">
            Technology . Trending
          </span>
          <Image
            src="/icons/infoMore.svg"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
        <div className="">
          <h2 className="text-textGrayLight font-bold">OpenAI</h2>
          <span className="text-textGray text-sm">20k posts</span>
        </div>
      </div>
    </div>
  );
};

export default PopularTags;
