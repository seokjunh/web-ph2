import { Link } from "@/i18n/routing";
import { useTranslations } from "use-intl";

const NavDetailMenu = () => {
  const t = useTranslations("NavBar");

  // 메뉴 데이터 구조화
  const menuSections = [
    {
      id: "business",
      items: [
        { label: "Smart Factory", href: "/" },
        { label: "DI", href: "/" },
        { label: "MES", href: "/" },
      ],
    },
    {
      id: "solution",
      items: [
        { label: "CoreCode", href: "/" },
        { label: "P2E", href: "/" },
        { label: "Q2E", href: "/" },
        { label: "S2E", href: "/" },
        { label: "E2E", href: "/" },
      ],
    },
    {
      id: "company",
      items: [
        { label: t("company.items.name"), href: "/" },
        { label: t("company.items.greetings"), href: "/" },
        { label: t("company.items.vision"), href: "/" },
        { label: t("company.items.history"), href: "/" },
      ],
    },
    {
      id: "support",
      items: [
        { label: t("support.items.dataRoom"), href: "/" },
        { label: t("support.items.directions"), href: "/" },
        { label: t("support.items.noticeBoard"), href: "/" },
      ],
    },
  ];

  return (
    <nav
      className="border-t border-t-gray-300 bg-white py-8"
      aria-label="상세 메뉴"
    >
      <div className="mx-auto flex justify-center gap-20">
        {menuSections.map((section) => (
          <div key={section.id} className="w-36">
            <ul className="flex flex-col space-y-2 text-gray-700">
              {section.items.map((item, index) => (
                <li key={`${section.id}-${index}`}>
                  <Link
                    href={item.href}
                    className="block py-1 transition-colors hover:text-green-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavDetailMenu;
