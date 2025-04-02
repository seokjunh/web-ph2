import { fetchNotice } from "@/lib/api";
import NoticeBoardItem from "./NoticeBoardItem";
import NoticePagination from "./NoticePagination";

const NoticeBoard = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page = "1" } = await searchParams;
  const result = await fetchNotice(page);

  const content = result.content;
  const currentPage = result.number + 1;
  const totalPages = result.totalPages;
  const last = result.last;
  const first = result.first;
  return (
    <div className="mx-8 mb-12 flex justify-center rounded-[4rem] bg-white">
      <div className="w-full max-w-[80rem] space-y-16 py-16">
        <div className="flex justify-center">
          <div className="w-[8rem] border-b-4 border-b-[#96cb4f] pb-6 text-center text-2xl font-bold">
            게시판
          </div>
        </div>
        <div>
          <div className="grid grid-cols-12 border-t border-b border-t-gray-700 border-b-gray-300 py-4">
            <div className="col-span-1 text-center">No</div>
            <div className="col-span-8 text-center">제목</div>
            <div className="col-span-2 text-center">작성자</div>
            <div className="col-span-1 text-center">작성일</div>
          </div>
          <NoticeBoardItem content={content} />
        </div>
        <div>
          <NoticePagination
            currentPage={currentPage}
            totalPages={totalPages}
            last={last}
            first={first}
          />
        </div>
      </div>
    </div>
  );
};
export default NoticeBoard;
