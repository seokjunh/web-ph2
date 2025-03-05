import { Link } from "@/i18n/routing";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src="/image/ci.png"
        alt=""
        width={420}
        height={127}
        className="w-40 scale-75 sm:scale-100"
        priority
      />
    </Link>
  );
};
export default Logo;
