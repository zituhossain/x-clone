import Image from "next/image";
import Link from "next/link";

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];
const LeftBar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* Logo Menu Button */}
      <div className="flex flex-col gap-4 items-center xxl:items-start text-lg">
        {/* Logo */}
        <Link href="/">
          <Image
            src="icons/logo.svg"
            alt="Logo"
            width={30}
            height={30}
            className="bg-white"
          />
        </Link>
        {/* Menu */}
        <div className="flex flex-col gap-4">
          {menuList.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4"
            >
              <Image
                src={`/icons/${item.icon}`}
                alt={item.name}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="hidden xxl:inline text-white">{item.name}</span>
            </Link>
          ))}
        </div>
        {/* Button */}
        <Link
          href="/"
          className=" rounded-full w-12 h-12 flex items-center justify-center xxl:hidden"
        >
          <Image src="icons/post.svg" alt="Post" width={24} height={24} />
        </Link>
        <Link
          href="/"
          className="hidden xxl:block bg-white text-black rounded-full px-20 py-2 font-bold"
        >
          Post
        </Link>
      </div>
      {/* User */}
      <div className="flex items-center justify-between my-8">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative overflow-hidden">
            <Image src="/icons/avatar.gif" alt="Profile" fill />
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">Zitu Dev</span>
            <span className="text-sm text-textGray">@zitudev</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
};

export default LeftBar;
