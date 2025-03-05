"use client";

import NavDetailMenu from "./NavDetailMenu";
import { useState } from "react";
import LocaleSwicher from "./LocaleSwicher";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

const NavBar = () => {
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);

  return (
    <div
      className={`absolute z-10 w-full ${isOpenNavMenu ? "slide-down bg-white text-black" : "text-white"}`}
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
