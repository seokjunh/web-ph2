import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface INoticePagination {
  currentPage: number;
  totalPages: number;
  last: boolean;
  first: boolean;
}

const NoticePagination = ({
  currentPage,
  totalPages,
  last,
  first,
}: INoticePagination) => {
  const getPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 5) {
        for (let i = 1; i <= 10; i++) {
          pageNumbers.push(i);
        }
      } else {
        for (let i = currentPage - 5; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      }
    }
    return pageNumbers;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`?page=${currentPage - 1}`}
            className={first ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
        {getPageNumbers().map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              href={`?page=${pageNumber}`}
              className={
                currentPage === pageNumber
                  ? "bg-[#78b237] text-white hover:bg-[#78b237]/90"
                  : ""
              }
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href={`?page=${currentPage + 1}`}
            className={last ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
export default NoticePagination;
