import { memo } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/styles";

import { PaginationItem } from "./PaginationItem";
import { usePage } from "./usePage";
import { useRange } from "./useRange";
import { useConfig } from "./useConfig";

interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  totalPages: number;
  page?: number;
  defaultPage?: number;
  onPageChange?: (page: number) => void;
}

// TODO:
// - add keyboard support
// - add Accessibility
function Pagination({
  totalPages,
  page,
  defaultPage,
  onPageChange,
  className,
  ...props
}: PaginationProps) {
  const { rangeSize, rangeStep, minPage, maxPage } = useConfig({
    totalPages,
  });

  const [currentPage, setCurrentPage] = usePage({
    minPage,
    maxPage,
    page,
    defaultPage,
    onPageChange,
  });

  const pages = useRange({
    page: currentPage,
    rangeStep,
    minPage,
    maxPage,
  });

  const handleSetPageOnClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentPage(Number(ev.currentTarget.value));
  };

  return (
    <div
      className={cn(
        "flex min-w-0 shrink-0 items-center justify-center gap-1",
        className
      )}
      {...props}
    >
      <PaginationItem
        disabled={currentPage === minPage}
        value={currentPage - 1}
        onClick={handleSetPageOnClick}
      >
        <ChevronLeftIcon direction="left" className="size-3" strokeWidth={2.5} />
      </PaginationItem>

      {currentPage - rangeStep > minPage && maxPage !== rangeSize && (
        <PaginationItem value={minPage} onClick={handleSetPageOnClick}>
          {minPage}
        </PaginationItem>
      )}

      {currentPage - rangeStep - minPage >= rangeStep && maxPage > rangeSize && (
        <PaginationItem
          value={currentPage - rangeSize}
          onClick={handleSetPageOnClick}
        >
          …
        </PaginationItem>
      )}

      {pages.map((page) => (
        <PaginationItem
          key={page}
          value={page}
          selected={page === currentPage}
          onClick={handleSetPageOnClick}
        >
          {page}
        </PaginationItem>
      ))}

      {maxPage - currentPage - rangeStep >= rangeStep && maxPage > rangeSize && (
        <PaginationItem
          value={currentPage + rangeSize}
          onClick={handleSetPageOnClick}
        >
          …
        </PaginationItem>
      )}

      {currentPage + rangeStep < maxPage && maxPage !== rangeSize && (
        <PaginationItem value={maxPage} onClick={handleSetPageOnClick}>
          {maxPage}
        </PaginationItem>
      )}

      <PaginationItem
        disabled={currentPage === maxPage}
        value={currentPage + 1}
        onClick={handleSetPageOnClick}
      >
        <ChevronRightIcon direction="right" className="size-3" strokeWidth={2.5} />
      </PaginationItem>
    </div>
  );
}

export default memo(Pagination);
