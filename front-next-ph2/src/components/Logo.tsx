import { Link } from "@/i18n/routing";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" aria-label="홈페이지로 이동">
      <div className="relative h-[7rem] w-[7rem] lg:h-[10rem] lg:w-[10rem]">
        <Image
          src="/image/ci.png"
          alt="회사 로고"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
