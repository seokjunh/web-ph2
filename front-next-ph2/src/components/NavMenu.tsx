import { Link } from "@/i18n/routing";
import useNavMenuStore from "@/stores/NavMenuStore";
import { useTranslations } from "next-intl";

const NavMenu = () => {
  const { setIsOpenNavMenu } = useNavMenuStore();
  const t = useTranslations("NavBar");

  const mouseEnterHandler = () => {
    setIsOpenNavMenu(true);
  };

  return (
    <div className="hidden w-full sm:block">
      <div className="flex justify-center space-x-[10rem] text-[1.2rem] font-semibold">
        <Link
          href={"/business"}
          onMouseEnter={mouseEnterHandler}
          className="decoration-[0.2em] underline-offset-[2rem] hover:text-green-600 hover:underline"
        >
          {t("business.title")}
        </Link>
        <Link
          href={"/solution"}
          onMouseEnter={mouseEnterHandler}
          className="decoration-[0.2em] underline-offset-[2rem] hover:text-green-600 hover:underline"
        >
          {t("solution.title")}
        </Link>
        <Link
          href={"/company"}
          onMouseEnter={mouseEnterHandler}
          className="decoration-[0.2em] underline-offset-[2rem] hover:text-green-600 hover:underline"
        >
          {t("company.title")}
        </Link>
        <Link
          href={"/support"}
          onMouseEnter={mouseEnterHandler}
          className="decoration-[0.2em] underline-offset-[2rem] hover:text-green-600 hover:underline"
        >
          {t("support.title")}
        </Link>
      </div>
    </div>
  );
};
export default NavMenu;
