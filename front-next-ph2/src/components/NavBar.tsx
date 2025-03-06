"use client";

import NavDetailMenu from "./NavDetailMenu";
import { useState } from "react";
import LocaleSwicher from "./LocaleSwicher";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import useSwiperStore from "@/stores/swiperStroe";

const NavBar = () => {
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);
  const { swiperIndex } = useSwiperStore();

  return (
    <div
      className={`absolute z-10 w-full ${swiperIndex === 0 ? (isOpenNavMenu ? "bg-white text-black" : "text-white") : "bg-white"}`}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between py-5 xl:max-w-[90rem]">
        <Logo />
        <div className="flex sm:space-x-8">
          <NavMenu setIsOpenNavMenu={setIsOpenNavMenu} />
          <MobileMenu />
          <LocaleSwicher />
        </div>
      </div>
      {isOpenNavMenu && <NavDetailMenu setIsOpenNavMenu={setIsOpenNavMenu} />}
    </div>
  );
};
export default NavBar;
