import Image from "next/image";

const HomeItem4 = () => {
  return (
    <div className="h-[calc(100vh-6.25rem)] bg-blue-500">
      <div className="relative py-20 text-white">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <Image
            src="/image/achievement-background.jpg" // 배경 이미지
            alt="성과 배경"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>

        {/* 페이지 내용 */}
        <div className="relative z-10 container mx-auto text-center">
          <h2 className="mb-8 text-5xl font-bold">우리가 이룬 성과</h2>

          <p className="mb-12 text-lg md:text-xl">
            나무아이앤씨는 고객의 비즈니스 성장을 돕기 위해 다양한 혁신적인
            솔루션을 제공하며, 스마트팩토리 분야에서 중요한 성과를
            달성하였습니다.
          </p>

          {/* 성과 카드 1 */}
          <div className="flex flex-wrap justify-center gap-8">
            <div className="max-w-[400px] transform rounded-3xl bg-white p-6 shadow-xl transition-transform hover:scale-105">
              <div className="relative mb-4 h-48 w-full">
                <Image
                  src="/image/achievement1.png" // 성과 이미지 1
                  alt="성과 1"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <h3 className="mb-2 text-2xl font-semibold">스마트팩토리 혁신</h3>
              <p className="text-gray-700">
                혁신적인 스마트팩토리 솔루션을 통해 생산성 향상과 비용 절감을
                실현한 사례.
              </p>
            </div>

            {/* 성과 카드 2 */}
            <div className="max-w-[400px] transform rounded-3xl bg-white p-6 shadow-xl transition-transform hover:scale-105">
              <div className="relative mb-4 h-48 w-full">
                <Image
                  src="/image/achievement2.png" // 성과 이미지 2
                  alt="성과 2"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <h3 className="mb-2 text-2xl font-semibold">
                데이터 연결 및 표준화
              </h3>
              <p className="text-gray-700">
                데이터의 표준화를 통해 다양한 산업의 생산성을 높인 중요한
                프로젝트.
              </p>
            </div>

            {/* 성과 카드 3 */}
            <div className="max-w-[400px] transform rounded-3xl bg-white p-6 shadow-xl transition-transform hover:scale-105">
              <div className="relative mb-4 h-48 w-full">
                <Image
                  src="/image/achievement3.png" // 성과 이미지 3
                  alt="성과 3"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <h3 className="mb-2 text-2xl font-semibold">4차 산업혁명 선도</h3>
              <p className="text-gray-700">
                4차 산업혁명 기술을 활용하여 제조업의 패러다임을 혁신한 프로젝트
                사례.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeItem4;
