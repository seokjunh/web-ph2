"use client";

import Link from "next/link";
import NavMenu from "./NavMenu";
import { useState } from "react";
import Image from "next/image";
import Global from "../../public/svg/Global";

const NavBar = () => {
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);
  const mouseEnterHandler = () => {
    setIsOpenNavMenu(true);
  };
  return (
    <div className="absolute z-10 w-full">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between py-5 ${isOpenNavMenu ? "bg-white text-black" : "text-white"}`}
      >
        <Link href={"/"}>
          <Image
            src="/image/ci.png"
            alt=""
            width={420}
            height={127}
            className="w-40"
          />
        </Link>
        <div
          className="flex items-center space-x-8 text-[1.2rem]"
          onMouseEnter={mouseEnterHandler}
        >
          <Link href={"/"}>비즈니스</Link>
          <Link href={"/"}>솔루션</Link>
          <Link href={"/"}>회사소개</Link>
          <Link href={"/"}>고객지원</Link>
          <Global />
        </div>
      </div>
      {isOpenNavMenu && <NavMenu setIsOpenNavMenu={setIsOpenNavMenu} />}
    </div>
  );
};
export default NavBar;
