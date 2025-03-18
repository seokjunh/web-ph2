import Image from "next/image";

const HomeItem3 = () => {
  return (
    <div className="h-[calc(100vh-5.375rem)] bg-white">
      {/* BUSINESS Header */}
      <div className="flex flex-col items-center justify-center space-y-6 p-8 text-center">
        <h2 className="text-5xl font-extrabold text-[#303030]">BUSINESS</h2>
        <p className="mt-4 text-xl font-medium text-gray-700 opacity-80 sm:text-2xl">
          우리가 제공하는 스마트팩토리 솔루션과 혁신적인 비즈니스 모델을
          소개합니다.
        </p>
      </div>

      {/* Business Description */}
      <div className="mx-auto mb-16 max-w-4xl px-6 text-center">
        <p className="text-lg leading-relaxed text-gray-700 sm:text-xl md:text-2xl">
          나무아이앤씨는 스마트팩토리 솔루션, 데이터 표준화, 자동화 시스템
          구축에 있어 업계를 선도하는 기업입니다. 고객의 비즈니스 성장을
          지원하기 위해 첨단 기술과 전략적 접근을 통해 혁신적인 솔루션을
          제공합니다.
        </p>
      </div>

      {/* Services */}
      <div className="grid grid-cols-1 gap-12 px-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        <div className="transform overflow-hidden rounded-xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="relative h-56 w-full">
            <Image
              src="/image/img1.png"
              alt="서비스 1"
              fill
              sizes="(max-width: 768px) 100vw, 25rem"
              className="rounded-t-xl object-cover"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="mb-2 text-2xl font-semibold text-white">
              스마트팩토리 솔루션
            </h3>
            <p className="text-lg text-gray-100">
              고객의 제조 공정에 최적화된 스마트팩토리 솔루션을 제공합니다.
            </p>
          </div>
        </div>

        <div className="transform overflow-hidden rounded-xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="relative h-56 w-full">
            <Image
              src="/image/img1.png"
              alt="서비스 2"
              fill
              sizes="(max-width: 768px) 100vw, 25rem"
              className="rounded-t-xl object-cover"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="mb-2 text-2xl font-semibold text-white">
              데이터 표준화
            </h3>
            <p className="text-lg text-gray-100">
              다양한 데이터를 표준화하여 효율적으로 관리하고 활용합니다.
            </p>
          </div>
        </div>

        <div className="transform overflow-hidden rounded-xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="relative h-56 w-full">
            <Image
              src="/image/img1.png"
              alt="서비스 3"
              fill
              sizes="(max-width: 768px) 100vw, 25rem"
              className="rounded-t-xl object-cover"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="mb-2 text-2xl font-semibold text-white">
              자동화 시스템 구축
            </h3>
            <p className="text-lg text-gray-100">
              제조 공정의 효율성을 극대화하는 자동화 시스템을 구축합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeItem3;
