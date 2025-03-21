import BusinessCarousel from "./BusinessCarousel";

const HomeItem3 = () => {
  return (
    <div className="h-[calc(100vh-6.25rem)]">
      <div className="pt-8 text-center">
        <div className="text-4xl font-extrabold text-[#303030]">BUSINESS</div>
      </div>
      <div className="h-full">
        <div className="absolute top-[15%] left-[20%] space-y-4">
          <div className="text-5xl font-bold">
            <div>산업용 데이터 연계 및 통합</div>
            <div>공장 자동화 디지털 전환</div>
          </div>
          <div className="text-lg text-gray-500">
            <div>
              나무아이앤씨는 공장 자동화 시스템 전반의 데이터를 연계하고
            </div>
            <div>
              통합 관리할 수 있는 플랫폼을 제공하여, 보다 효율적이고 스마트한
              제조 환경을 구축합니다.
            </div>
          </div>
        </div>
        <div className="absolute top-[65%] left-[50%] -translate-x-[50%] -translate-y-[65%]">
          <BusinessCarousel />
        </div>
      </div>
    </div>
  );
};

export default HomeItem3;
