import { Link } from "@/i18n/routing";
import useNavMenuStore from "@/stores/NavMenuStore";
import { useTranslations } from "next-intl";

const NavMenu = () => {
  const t = useTranslations("NavBar");
  const { setIsOpenNavMenu } = useNavMenuStore();

  const mouseEnterHandler = () => {
    setIsOpenNavMenu(true);
  };

  return (
    <div className="hidden w-full sm:block">
      <div className="flex justify-center space-x-[10rem] text-[1.2rem] font-semibold">
        <Link
          href={"/business"}
          className="decoration-[0.2em] underline-offset-[1.9rem] hover:text-green-600 hover:underline"
          onMouseEnter={mouseEnterHandler}
        >
          {t("business.title")}
        </Link>
        <Link
          href={"/solution"}
          className="decoration-[0.2em] underline-offset-[1.9rem] hover:text-green-600 hover:underline"
          onMouseEnter={mouseEnterHandler}
        >
          {t("solution.title")}
        </Link>
        <Link
          href={"/company"}
          className="decoration-[0.2em] underline-offset-[1.9rem] hover:text-green-600 hover:underline"
          onMouseEnter={mouseEnterHandler}
        >
          {t("company.title")}
        </Link>
        <Link
          href={"/support"}
          className="decoration-[0.2em] underline-offset-[1.9rem] hover:text-green-600 hover:underline"
          onMouseEnter={mouseEnterHandler}
        >
          {t("support.title")}
        </Link>
      </div>
    </div>
  );
};
export default NavMenu;
