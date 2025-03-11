import { Link } from "@/i18n/routing";
import useNavMenuStore from "@/stores/NavMenuStore";
import { useTranslations } from "next-intl";
import NavDetailMenu from "./NavDetailMenu";

const navMenus = [
  {
    href: "/business",
    title: "business.title",
    subMenu: ["Smart Factory", "DI", "MES"],
  },
  {
    href: "/solution",
    title: "solution.title",
    subMenu: ["CoreCode", "P2E", "Q2E", "S2E", "E2E"],
  },
  { href: "/company", title: "company.title", subMenu: ["adsfasd", "sdafas"] },
  { href: "/support", title: "support.title", subMenu: ["asdf", "asdfas"] },
];

const NavMenu = () => {
  const t = useTranslations("NavBar");
  const { isOpenNavMenu, setIsOpenNavMenu } = useNavMenuStore();

  const handleMouseEnter = () => {
    setIsOpenNavMenu(true);
  };

  const handleMouseLeave = () => {
    setIsOpenNavMenu(false);
  };

  return (
    <nav
      className="hidden sm:block"
      role="navigation"
      aria-label="메인 메뉴"
      onMouseLeave={handleMouseLeave}
    >
      <ul className="flex items-center justify-center text-lg font-medium">
        {navMenus.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block border-b-2 border-transparent px-10 py-7 transition-all duration-200 hover:border-green-600 hover:font-extrabold hover:text-green-600"
              onMouseEnter={handleMouseEnter}
            >
              {t(item.title)}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className={`absolute left-0 -z-10 w-full transition-all duration-500 ease-out ${
          isOpenNavMenu
            ? "top-[5.375rem] opacity-100 delay-150"
            : "-top-[15.375rem] opacity-0"
        }`}
      >
        <NavDetailMenu />
      </div>
    </nav>
  );
};

export default NavMenu;
