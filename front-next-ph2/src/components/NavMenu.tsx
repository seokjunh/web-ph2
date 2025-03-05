import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { SetStateAction } from "react";

interface NavMenuProps {
  setIsOpenNavMenu: (value: SetStateAction<boolean>) => void;
}

const NavMenu = ({ setIsOpenNavMenu }: NavMenuProps) => {
  const t = useTranslations("NavBar");
  const mouseEnterHandler = () => {
    setIsOpenNavMenu(true);
  };
  return (
    <>
      <div
        className="hidden items-center space-x-8 text-[1.2rem] font-semibold sm:block"
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
      </div>
    </>
  );
};
export default NavMenu;
