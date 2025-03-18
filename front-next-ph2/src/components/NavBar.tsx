"use client";

import LocaleSwicher from "./LocaleSwicher";
import NavMenu from "./NavMenu";
// import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <header className="fixed z-10 w-full">
      <div className="flex items-center justify-between px-[5rem] h-[6.25rem]">
        <Logo />
        <NavMenu />
        <LocaleSwicher />
      </div>
    </header>
  );
};

export default NavBar;
