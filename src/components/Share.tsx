"use client";

import Image from "next/image";
import { useState } from "react";

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  return (
    <div className="flex p-4 gap-4">
      {/* Avatar */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Image src="/icons/avatar.gif" alt="Avatar" width={100} height={100} />
      </div>
      {/* Others */}
      <div className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          placeholder="What's happening?"
          className="bg-transparent outline-none placeholder:text-textGray text-xl"
        />
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input
              type="file"
              name="file"
              id="file"
              onChange={handleMediaChange}
              className="hidden"
            />
            <label htmlFor="file">
              <Image
                src="icons/image.svg"
                alt=""
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </label>
            <Image
              src="icons/gif.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="icons/poll.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="icons/emoji.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="icons/schedule.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="icons/location.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
          <button className="bg-white text-black font-bold rounded-full px-4 py-22">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
