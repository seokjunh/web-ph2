import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface NavMenu {
  title: string;
  subMenu: { title: string; href: string }[];
}

const navMenus: NavMenu[] = [
  {
    title: "business",
    subMenu: [
      { title: "Smart Factory", href: "/support/notice" },
      { title: "DI", href: "/support/directions" },
      { title: "MES", href: "/support/directions" },
    ],
  },
  {
    title: "solution",
    subMenu: [
      { title: "CoreCode", href: "/support/notice" },
      { title: "P2E", href: "/support/directions" },
      { title: "Q2E", href: "/support/directions" },
      { title: "S2E", href: "/support/directions" },
      { title: "E2E", href: "/support/directions" },
    ],
  },
  {
    title: "product",
    subMenu: [
      { title: "CoreCode", href: "/support/notice" },
      { title: "P2E", href: "/support/directions" },
      { title: "Q2E", href: "/support/directions" },
      { title: "S2E", href: "/support/directions" },
      { title: "E2E", href: "/support/directions" },
    ],
  },
  {
    title: "company",
    subMenu: [
      { title: "인삿말", href: "/company/greeting" },
      { title: "연혁", href: "/company/history" },
      { title: "비전", href: "/company/vision" },
    ],
  },
  {
    title: "support",
    subMenu: [
      { title: "게시판", href: "/support/notice" },
      { title: "오시는 길", href: "/support/directions" },
    ],
  },
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
              {t(`${item.title}.title`)}
            </button>
            {hoveredIndex === idx && (
              <ul className="absolute left-0 z-10 w-full rounded-xl bg-white py-2 shadow-md">
                {item.subMenu.map((subItem, subIdx) => (
                  <li key={subIdx} className="hover:bg-gray-100">
                    <Link
                      href={`${subItem.href}`}
                      className="block px-4 py-2 text-sm"
                    >
                      {subItem.title}
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
