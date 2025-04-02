import { Link } from "@/i18n/routing";

interface IContent {
  id: number;
  title: string;
  writer: string;
  createdAt: string;
}

const NoticeBoardItem = ({ content }: { content: IContent[] }) => {
  return (
    <div>
      {content.map((item) => (
        <Link
          href={`/support/notice/${item.id}`}
          key={item.id}
          className="grid grid-cols-12 border-b border-b-gray-300 py-4 hover:bg-gray-50"
        >
          <div className="col-span-1 text-center">{item.id}</div>
          <div className="col-span-8 text-left">{item.title}</div>
          <div className="col-span-2 text-center">{item.writer}</div>
          <div className="col-span-1 text-center">2025-03-31</div>
        </Link>
      ))}
    </div>
  );
};
export default NoticeBoardItem;
