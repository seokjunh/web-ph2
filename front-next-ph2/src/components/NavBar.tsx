"use client";

// import NavDetailMenu from "./NavDetailMenu";
import LocaleSwicher from "./LocaleSwicher";
import NavMenu from "./NavMenu";
// import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import useNavMenuStore from "@/stores/NavMenuStore";
import useGlobalScroll from "@/app/hooks/useGlobalScroll";

const NavBar = () => {
  const { isOpenNavMenu } = useNavMenuStore();
  const scroll = useGlobalScroll();

  // 배경 스타일 로직 간소화
  const getBackgroundStyle = () => {
    if (isOpenNavMenu) {
      return "bg-white text-black";
    } else if (scroll) {
      return "text-white backdrop-blur-md delay-150";
    } else {
      return "text-white delay-150";
    }
  };

  return (
    <header className="fixed z-20 w-full">
      <div
        className={`mx-auto flex items-center justify-between px-4 ${getBackgroundStyle()}`}
      >
        <Logo />
        <NavMenu />
        <LocaleSwicher />
      </div>

      {/* <div
        className={`relative -z-10 transition-all duration-500 ease-out ${
          isOpenNavMenu
            ? "top-0 opacity-100 delay-150"
            : "-top-[15.375rem] opacity-0"
        }`}
        aria-hidden={!isOpenNavMenu}
      >
        <NavDetailMenu />
      </div> */}
    </header>
  );
};

export default NavBar;
