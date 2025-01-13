import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <div className="px-4 pt-4 flex justify-between text-textGray font-bold border-b-[1px] border-borderGray">
        <Link
          className="pb-3 flex items-center border-b-4 border-iconBlue"
          href="/"
        >
          For You
        </Link>
        <Link className="pb-3 flex items-center" href="/">
          Following
        </Link>
        <Link className="pb-3 flex items-center" href="/">
          React
        </Link>
        <Link className="pb-3 flex items-center" href="/">
          Javascript
        </Link>
        <Link className="pb-3 flex items-center" href="/">
          Css
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
}
