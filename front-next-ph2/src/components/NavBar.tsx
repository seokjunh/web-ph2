"use client";

import LocaleSwicher from "./LocaleSwicher";
import NavMenu from "./NavMenu";
// import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <header className="fixed z-20 w-full">
      <div className="flex h-[6.25rem] items-center justify-between bg-[#f4f4f6] opacity-90 lg:px-[5rem]">
        <Logo />
        <NavMenu />
        <LocaleSwicher />
      </div>
    </header>
  );
};

export default NavBar;
