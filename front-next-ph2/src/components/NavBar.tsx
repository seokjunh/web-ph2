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
    <div
      className={`absolute z-10 w-full ${swiperIndex === 0 ? (isOpenNavMenu ? "bg-white text-black" : "text-white") : "bg-white"}`}
    >
      <div>
        <div className="flex items-center justify-between px-[10rem] py-5">
          <Logo />
          <NavMenu />
          <LocaleSwicher />
        </div>
        {isOpenNavMenu && <NavDetailMenu />}
      </div>
    </div>
  );
};
export default NavBar;
