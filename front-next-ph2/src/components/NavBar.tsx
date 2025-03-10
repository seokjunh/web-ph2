"use client";

import NavDetailMenu from "./NavDetailMenu";
import LocaleSwicher from "./LocaleSwicher";
import NavMenu from "./NavMenu";
// import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import useSwiperStore from "@/stores/swiperStroe";
import useNavMenuStore from "@/stores/NavMenuStore";

const NavBar = () => {
  const { isOpenNavMenu } = useNavMenuStore();
  const { swiperIndex } = useSwiperStore();

  return (
    <div className="absolute z-20 w-full">
      <div
        className={`${swiperIndex === 0 ? (isOpenNavMenu ? "bg-white text-black" : "text-white") : "bg-white"}`}
      >
        <div className="flex items-center justify-between px-[10rem] py-5">
          <Logo />
          <NavMenu />
          <LocaleSwicher />
        </div>
      </div>
      <div
        className={`relative -z-10 transition-all duration-500 ease-out ${
          isOpenNavMenu ? "top-0 opacity-100" : "-top-96 opacity-0"
        }`}
      >
        <NavDetailMenu />
      </div>
    </div>
  );
};
export default NavBar;
