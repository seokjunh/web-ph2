import { useLocale, useTranslations } from "next-intl";
import { routing, usePathname, useRouter } from "@/i18n/routing";
import Global from "../../public/svg/Global";

const LocaleSwicher = () => {
  const t = useTranslations("LocaleSwitcher");
  const router = useRouter();
  const pathName = usePathname();
  const locale = useLocale();

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(`/${pathName}`, { locale: nextLocale });
  };

  return (
    <div className="flex items-center">
      <Global />
      <select
        defaultValue={locale}
        aria-label="language"
        onChange={onSelectChange}
      >
        {routing.locales.map((cur) => (
          <option key={cur} value={cur}>
            {t("locale", { locale: cur })}
          </option>
        ))}
      </select>
    </div>
  );
};
export default LocaleSwicher;
