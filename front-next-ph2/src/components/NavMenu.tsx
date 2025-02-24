import { Link } from "@/i18n/routing";
import { SetStateAction } from "react";
import { useTranslations } from "use-intl";

interface NavMenuProps {
  setIsOpenNavMenu: (value: SetStateAction<boolean>) => void;
}

const NavMenu = ({ setIsOpenNavMenu }: NavMenuProps) => {
  const t = useTranslations("NavBar");

  const mouseLeaveHandler = () => {
    setIsOpenNavMenu(false);
  };
  return (
    <div
      className="border-t border-gray-300 bg-white py-5"
      onMouseLeave={mouseLeaveHandler}
    >
      <div className="mx-auto flex max-w-4xl justify-between text-center">
        <div className="space-y-2">
          <div className="text-[1.3rem] font-medium">{t("business.title")}</div>
          <div className="flex flex-col space-y-1 text-gray-700">
            <Link
              href={"/"}
              className="hover:text-green-600 hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              Smart Factory
            </Link>
            <Link
              href={"/"}
              className="hover:text-green-600 hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              DI
            </Link>
            <Link
              href={"/"}
              className="hover:text-green-600 hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              MES
            </Link>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-[1.3rem] font-medium">{t("solution.title")}</div>
          <div className="flex flex-col space-y-1 text-gray-700">
            <Link
              href={"/"}
              className="hover:text-green-600 hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              CoreCode
            </Link>
            <Link
              href={"/"}
              className="hover:text-green-600 hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              P2E
            </Link>
            <Link
              href={"/"}
              className="hover:text-green-600 hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              Q2E
            </Link>
            <Link
              href={"/"}
              className="hover:text-green-600 hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              S2E
            </Link>
            <Link
              href={"/"}
              className="hover:text-green-600 hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              E2E
            </Link>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-[1.3rem] font-medium">{t("company.title")}</div>
          <div className="flex flex-col space-y-1 text-gray-700">
            <Link
              href={"/"}
              className="hover:text-green-600 hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              {t("company.items.name")}
            </Link>
            <Link
              href={"/"}
              className="hover:text-green-600 hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              {t("company.items.greetings")}
            </Link>
            <Link
              href={"/"}
              className="hover:text-green-600 hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              {t("company.items.vision")}
            </Link>
            <Link
              href={"/"}
              className="hover:text-green-600 hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              {t("company.items.history")}
            </Link>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-[1.3rem] font-medium">{t("support.title")}</div>
          <div className="flex flex-col space-y-1 text-gray-700">
            <Link
              href={"/"}
              className="hover:text-green-600 hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              {t("support.items.dataRoom")}
            </Link>
            <Link
              href={"/"}
              className="hover:text-green-600 hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              {t("support.items.directions")}
            </Link>
            <Link
              href={"/"}
              className="hover:text-green-600 hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              {t("support.items.noticeBoard")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavMenu;
