import Image from "next/image";

const HomeItem2 = () => {
  return (
    <div className="h-[calc(100vh-6.25rem)]">
      <div className="pt-8 text-center">
        <div className="text-4xl font-extrabold text-[#303030]">About Us</div>
        <div className="mt-4 text-4xl font-medium sm:text-5xl md:text-4xl">
          고객의 가치를 중심으로, 지속 가능한 미래를 창조하는 나무아이앤씨
        </div>
        <div className="mx-auto mt-6 max-w-4xl space-y-4 text-gray-700 sm:text-lg md:text-xl">
          <div>
            나무아이앤씨는 고객의 가치를 연결하여 더욱 큰 가치를 창출하는
            스마트팩토리 솔루션 전문기업입니다.
          </div>
          <div>
            점점 복잡해지고 다양한 데이터를 표준화된 방식으로 연결합니다.
            <div>
              이를 통해, 더 지능적이고 편리한 세상을 만들어가는 혁신적인
              솔루션을 개발하고 있습니다.
            </div>
          </div>
          <div>
            자체 개발 특허 솔루션을 보유한 스마트팩토리 선도 기업으로서,4차
            산업혁명 시대 제조 산업의 혁신을 이끌며
            <div>고객의 비즈니스 성장을 지원합니다.</div>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {["고객", "가치", "성장"].map((title, index) => (
            <div
              key={index}
              className="relative transform overflow-hidden rounded-3xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative h-[22rem] w-full">
                <Image
                  src={`/image/img${index + 1}.png`}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25rem"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-4xl font-bold text-white">
                  {title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeItem2;
