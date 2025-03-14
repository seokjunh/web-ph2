import { Link } from "@/i18n/routing";
import useNavMenuStore from "@/stores/NavMenuStore";
import { useTranslations } from "next-intl";

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
  const { setIsOpenNavMenu } = useNavMenuStore();

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
        {navMenus.map((item, idx) => (
          <li key={idx} className="relative text-center">
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
    </nav>
  );
};

export default NavMenu;
