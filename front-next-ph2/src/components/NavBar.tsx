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
      className={`absolute z-10 w-full ${isOpenNavMenu ? "bg-white text-black" : "text-white"}`}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between py-5 xl:max-w-[90rem]">
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
          className="flex items-center space-x-8 text-[1.2rem] font-semibold"
          onMouseEnter={mouseEnterHandler}
        >
          <Link href={"/business"}>{t("business.title")}</Link>
          <Link href={"/solution"}>{t("solution.title")}</Link>
          <Link href={"/company"}>{t("company.title")}</Link>
          <Link href={"/support"}>{t("support.title")}</Link>
          <LocaleSwicher />
        </div>
      </div>
      {isOpenNavMenu && <NavMenu setIsOpenNavMenu={setIsOpenNavMenu} />}
    </div>
  );
};
export default NavBar;
