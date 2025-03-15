"use client";

import LocaleSwicher from "./LocaleSwicher";
import NavMenu from "./NavMenu";
// import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <header className="fixed z-10 w-full">
      <div className="mx-auto flex max-w-[100rem] items-center justify-around bg-white">
        <Logo />
        <NavMenu />
        <LocaleSwicher />
      </div>
    </header>
  );
};

export default NavBar;
