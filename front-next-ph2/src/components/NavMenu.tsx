import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState } from "react";

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
  {
    href: "/product",
    title: "product.title",
    subMenu: ["CoreCode", "P2E", "Q2E", "S2E", "E2E"],
  },
  { href: "/company", title: "company.title", subMenu: ["adsfasd", "sdafas"] },
  { href: "/support", title: "support.title", subMenu: ["asdf", "asdfas"] },
];

const NavMenu = () => {
  const t = useTranslations("NavBar");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className="hidden sm:block" role="navigation" aria-label="메인 메뉴">
      <ul className="flex items-center justify-center font-bold lg:text-lg">
        {navMenus.map((item, idx) => (
          <li
            key={idx}
            className="relative text-center"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <button className="px-[1rem] py-4 lg:px-[2.5rem]">
              {t(item.title)}
            </button>
            {hoveredIndex === idx && (
              <ul className="absolute left-0 z-10 w-full rounded-xl bg-white py-2 shadow-md">
                {item.subMenu.map((subItem, subIdx) => (
                  <li key={subIdx} className="hover:bg-gray-100">
                    <Link
                      href={`${item.href}/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-4 py-2 text-sm"
                    >
                      {subItem}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
