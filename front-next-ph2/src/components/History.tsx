import Image from "next/image";

interface HistoryItem {
  year: number;
  month: string;
  title: string;
}

const historyData: HistoryItem[] = [
  {
    year: 2024,
    month: "03",
    title: "AI 기반 빅데이터 분석 플랫폼 개발 착수",
  },
  {
    year: 2023,
    month: "12",
    title: "클라우드 마이그레이션 프로젝트 완료",
  },
  {
    year: 2023,
    month: "08",
    title: "ISO 27001 인증 획득",
  },
  {
    year: 2023,
    month: "05",
    title: "해외 시장 진출 (동남아시아)",
  },
  {
    year: 2023,
    month: "01",
    title: "신규 R&D 센터 설립",
  },
  {
    year: 2022,
    month: "11",
    title: "기술 혁신상 수상",
  },
  {
    year: 2022,
    month: "07",
    title: "주요 특허 10건 등록",
  },
  {
    year: 2022,
    month: "03",
    title: "디지털 전환 컨설팅 사업 진출",
  },
  {
    year: 2021,
    month: "12",
    title: "연간 매출 1000억 달성",
  },
  {
    year: 2021,
    month: "09",
    title: "글로벌 파트너십 구축",
  },
  {
    year: 2021,
    month: "05",
    title: "신규 서비스 플랫폼 런칭",
  },
  {
    year: 2020,
    month: "12",
    title: "원격 근무 시스템 구축",
  },
  {
    year: 2020,
    month: "08",
    title: "디지털 서비스 확대",
  },
  {
    year: 2020,
    month: "03",
    title: "코로나19 대응 솔루션 개발",
  },
  {
    year: 2019,
    month: "11",
    title: "기업 문화 혁신 프로그램 도입",
  },
  {
    year: 2019,
    month: "07",
    title: "AI 기술 연구소 설립",
  },
  {
    year: 2019,
    month: "03",
    title: "신규 사업 영역 진출",
  },
  {
    year: 2018,
    month: "12",
    title: "기업 가치 평가 상승",
  },
  {
    year: 2018,
    month: "08",
    title: "주요 시장 점유율 1위 달성",
  },
  {
    year: 2018,
    month: "04",
    title: "기술 혁신 센터 설립",
  },
  {
    year: 2017,
    month: "11",
    title: "글로벌 기술 파트너십",
  },
  {
    year: 2017,
    month: "07",
    title: "신규 서비스 런칭",
  },
  {
    year: 2017,
    month: "03",
    title: "기술 특허 획득",
  },
  {
    year: 2016,
    month: "12",
    title: "연간 매출 500억 달성",
  },
  {
    year: 2016,
    month: "08",
    title: "해외 시장 진출",
  },
  {
    year: 2016,
    month: "04",
    title: "기술 혁신상 수상",
  },
  {
    year: 2015,
    month: "11",
    title: "주요 특허 등록",
  },
  {
    year: 2015,
    month: "07",
    title: "신규 사업 영역 진출",
  },
  {
    year: 2015,
    month: "03",
    title: "기업 문화 혁신",
  },
  {
    year: 2014,
    month: "12",
    title: "기술 연구소 설립",
  },
  {
    year: 2014,
    month: "08",
    title: "시장 점유율 확대",
  },
  {
    year: 2014,
    month: "04",
    title: "기업 가치 상승",
  },
  {
    year: 2013,
    month: "12",
    title: "글로벌 파트너십 구축",
  },
  {
    year: 2013,
    month: "08",
    title: "신규 서비스 런칭",
  },
  {
    year: 2013,
    month: "04",
    title: "기술 혁신",
  },
  {
    year: 2012,
    month: "12",
    title: "기업 성장",
  },
  {
    year: 2012,
    month: "08",
    title: "시장 확장",
  },
  {
    year: 2012,
    month: "04",
    title: "기술력 강화",
  },
  {
    year: 2011,
    month: "12",
    title: "조직 확대",
  },
  {
    year: 2011,
    month: "08",
    title: "서비스 안정화",
  },
  {
    year: 2011,
    month: "04",
    title: "초기 성장",
  },
  {
    year: 2010,
    month: "12",
    title: "기술 혁신",
  },
  {
    year: 2010,
    month: "08",
    title: "시장 진입",
  },
  {
    year: 2010,
    month: "04",
    title: "초기 고객 확보",
  },
  {
    year: 2009,
    month: "12",
    title: "기술 개발",
  },
  {
    year: 2009,
    month: "08",
    title: "조직 구축",
  },
  {
    year: 2009,
    month: "04",
    title: "서비스 기획",
  },
  {
    year: 2008,
    month: "12",
    title: "시장 조사",
  },
  {
    year: 2008,
    month: "08",
    title: "기술 연구",
  },
  {
    year: 2008,
    month: "04",
    title: "사업 계획 수립",
  },
  {
    year: 2007,
    month: "12",
    title: "기술 개발",
  },
  {
    year: 2007,
    month: "08",
    title: "조직 구축",
  },
  {
    year: 2007,
    month: "04",
    title: "서비스 기획",
  },
  {
    year: 2006,
    month: "12",
    title: "시장 조사",
  },
  {
    year: 2006,
    month: "08",
    title: "기술 연구",
  },
  {
    year: 2006,
    month: "04",
    title: "사업 계획 수립",
  },
  {
    year: 2005,
    month: "12",
    title: "회사 설립",
  },
  {
    year: 2005,
    month: "08",
    title: "초기 자본금 조달",
  },
  {
    year: 2005,
    month: "04",
    title: "사업 계획 수립",
  },
];

const History: React.FC = () => {
  // 연도별로 데이터 그룹화
  const groupedHistory = historyData.reduce(
    (acc, item) => {
      if (!acc[item.year]) {
        acc[item.year] = [];
      }
      acc[item.year].push(item);
      return acc;
    },
    {} as Record<number, HistoryItem[]>,
  );

  return (
    <div className="space-y-10 px-[3rem]">
      <div className="relative h-[25vh] overflow-hidden rounded-4xl md:h-[30vh] lg:h-[40vh]">
        <Image
          src="/image/com_1.jpg"
          alt="greeting"
          fill
          className="object-cover object-bottom brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="space-y-4 text-center text-white">
            <h1 className="text-4xl font-bold">
              지금의 나무아이앤씨가 나아온길
            </h1>
            <p className="text-xl">
              <strong>더 높은 곳을 향해 나아가는 나무아이앤씨</strong>가
              되겠습니다.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-12 rounded-4xl bg-white">
        <div className="mx-auto max-w-sm space-y-10 py-7 text-lg sm:max-w-xl sm:py-14 md:max-w-2xl lg:max-w-4xl">
          <div className="text-md text-center font-semibold">
            <div>HISTORY</div>
            <div>|</div>
          </div>
          <div className="space-y-10">
            {Object.entries(groupedHistory)
              .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
              .map(([year, items]) => (
                <div key={year} className="relative">
                  <div className="mb-4 flex items-center">
                    <div className="mr-4 h-3 w-3 rounded-full border-2 border-gray-800 bg-white"></div>
                    <h2 className="text-2xl font-bold">
                      {year}
                    </h2>
                  </div>
                  <div className="ml-8 space-y-4">
                    {items.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <span className="w-12 font-medium text-gray-600">
                          {item.month}
                        </span>
                        <p className="text-gray-700">{item.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
