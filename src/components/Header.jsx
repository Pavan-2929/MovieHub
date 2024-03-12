import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import MenuItem from "./MenuItem";
import Link from "next/link";

const Header = () => {
  return (
    <div className="py-4">
      <div className="container mx-auto flex justify-around items-center">
        <div className="text-xl font-bold hover:text-amber-500">
          <Link href={"/"}>MovieHub</Link>
        </div>
        <div className="flex gap-6 text-xl">
          <MenuItem Icon={AiFillHome} title="Home" address="/" />
          <MenuItem
            Icon={BsFillInfoCircleFill}
            title="About"
            address="/about"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
