import NoticeBoard from "@/components/NoticeBoard";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  return <NoticeBoard searchParams={searchParams} />;
};
export default page;
