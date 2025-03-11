import { Link } from "@/i18n/routing";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" aria-label="홈페이지로 이동">
      <div className="relative h-12 w-40 sm:h-[50px] sm:w-[168px]">
        <Image
          src="/image/ci.png"
          alt="회사 로고"
          fill
          sizes="(max-width: 640px) 160px, 168px"
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
