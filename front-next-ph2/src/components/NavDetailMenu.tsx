import { Link } from "@/i18n/routing";
import useNavMenuStore from "@/stores/NavMenuStore";
import { useTranslations } from "use-intl";

const NavDetailMenu = () => {
  const { setIsOpenNavMenu, setIsHoverNavMenu, isHoverNavMenu } =
    useNavMenuStore();
  const t = useTranslations("NavBar");

  const mouseLeaveHandler = () => {
    setIsOpenNavMenu(false);
  };

  const mouseEnterHandler = () => {
    setIsHoverNavMenu(true);
    console.log(isHoverNavMenu);
  };

  return (
    <div
      className="animate-fadeInDown w-full border-t border-gray-300 bg-white py-5"
      onMouseLeave={mouseLeaveHandler}
    >
      <div className="flex justify-center space-x-[10rem] px-[10rem]">
        <div className="space-y-2">
          <div className="flex flex-col space-y-1 text-gray-700">
            <Link
              href={"/"}
              className="hover:text-green-600"
              onMouseEnter={mouseEnterHandler}
            >
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
    </div>
  );
};
export default NavDetailMenu;
