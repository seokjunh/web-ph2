import { Link } from "@/i18n/routing";
import useNavMenuStore from "@/stores/NavMenuStore";
import { useTranslations } from "use-intl";

const NavDetailMenu = () => {
  const t = useTranslations("NavBar");
  const { setIsOpenNavMenu } = useNavMenuStore();

  const mouseLeaveHandler = () => {
    setIsOpenNavMenu(false);
  };

  return (
    <div
      className="flex justify-center space-x-[10rem] border-t border-t-gray-300 bg-white px-[10rem] py-5"
      onMouseLeave={mouseLeaveHandler}
    >
      <div className="space-y-2">
        <div className="flex flex-col space-y-1 text-gray-700">
          <Link href={"/"} className="hover:text-green-600">
            Smart Factory
          </Link>
          <Link href={"/"} className="hover:text-green-600">
            DI
          </Link>
          <Link href={"/"} className="hover:text-green-600">
            MES
          </Link>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex flex-col space-y-1 text-gray-700">
          <Link href={"/"} className="hover:text-green-600">
            CoreCode
          </Link>
          <Link href={"/"} className="hover:text-green-600">
            P2E
          </Link>
          <Link href={"/"} className="hover:text-green-600">
            Q2E
          </Link>
          <Link href={"/"} className="hover:text-green-600">
            S2E
          </Link>
          <Link href={"/"} className="hover:text-green-600">
            E2E
          </Link>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex flex-col space-y-1 text-gray-700">
          <Link href={"/"} className="hover:text-green-600">
            {t("company.items.name")}
          </Link>
          <Link href={"/"} className="hover:text-green-600">
            {t("company.items.greetings")}
          </Link>
          <Link href={"/"} className="hover:text-green-600">
            {t("company.items.vision")}
          </Link>
          <Link href={"/"} className="hover:text-green-600">
            {t("company.items.history")}
          </Link>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex flex-col space-y-1 text-gray-700">
          <Link href={"/"} className="hover:text-green-600">
            {t("support.items.dataRoom")}
          </Link>
          <Link href={"/"} className="hover:text-green-600">
            {t("support.items.directions")}
          </Link>
          <Link href={"/"} className="hover:text-green-600">
            {t("support.items.noticeBoard")}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NavDetailMenu;
