import { SetStateAction } from "react";

interface NavMenuProps {
  setIsOpenNavMenu: (value: SetStateAction<boolean>) => void;
}

const NavMenu = ({ setIsOpenNavMenu }: NavMenuProps) => {
  const mouseLeaveHandler = () => {
    setIsOpenNavMenu(false);
  };
  return (
    <div
      className="border-t border-gray-300 bg-white py-5"
      onMouseLeave={mouseLeaveHandler}
    >
      <div className="mx-auto flex max-w-4xl justify-between text-[1.1rem]">
        <div>
          <div>비즈니스</div>
          <div>Smart Factory</div>
          <div>DI</div>
          <div>MES</div>
        </div>
        <div>
          <div>솔루션</div>
          <div>CoreCode</div>
          <div>P2E</div>
          <div>Q2E</div>
          <div>S2E</div>
          <div>E2E</div>
        </div>

        <div>
          <div>회사소개</div>
          <div>나무아이앤씨</div>
          <div>인사말</div>
          <div>비전</div>
          <div>연혁</div>
        </div>
        <div>
          <div>고객지원</div>
          <div>자료실</div>
          <div>오시는 길</div>
          <div>게시판</div>
        </div>
      </div>
    </div>
  );
};
export default NavMenu;
