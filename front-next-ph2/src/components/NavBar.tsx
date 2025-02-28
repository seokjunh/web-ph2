"use client";

import NavMenu from "./NavMenu";
import { useState } from "react";
import Image from "next/image";
import LocaleSwicher from "./LocaleSwicher";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const NavBar = () => {
  const t = useTranslations("NavBar");

  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);

  const mouseEnterHandler = () => {
    setIsOpenNavMenu(true);
  };
  return (
    <div
      className={`absolute z-10 w-full ${isOpenNavMenu ? "slide-down bg-white text-black" : "text-white"}`}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between py-5 xl:max-w-[90rem]">
        <Link href={"/"}>
          <Image
            src="/image/ci.png"
            alt=""
            width={420}
            height={127}
            className="w-40"
            priority
          />
        </Link>
        <div
          className="flex items-center space-x-8 text-[1.2rem] font-semibold"
          onMouseEnter={mouseEnterHandler}
        >
          <Link href={"/business"} className="hover:text-green-600">
            {t("business.title")}
          </Link>
          <Link href={"/solution"} className="hover:text-green-600">
            {t("solution.title")}
          </Link>
          <Link href={"/company"} className="hover:text-green-600">
            {t("company.title")}
          </Link>
          <Link href={"/support"} className="hover:text-green-600">
            {t("support.title")}
          </Link>
          <LocaleSwicher />
        </div>
      </div>
      {isOpenNavMenu && <NavMenu setIsOpenNavMenu={setIsOpenNavMenu} />}
    </div>
  );
};
export default NavBar;
