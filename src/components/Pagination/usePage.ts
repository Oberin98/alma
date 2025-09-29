import { useEffect, useState } from "react";

type ParsePageParams = {
  page: number;
  minPage: number;
  maxPage: number;
};

function parsePage({ page, minPage, maxPage }: ParsePageParams) {
  if (Number.isNaN(page) || typeof page !== "number") {
    return minPage;
  }

  return Math.max(Math.min(maxPage, page), minPage);
}

type UsePaginationValueProps = {
  maxPage: number;
  minPage: number;
  page?: number;
  defaultPage?: number;
  onPageChange?: (page: number) => void;
};

function usePage({
  maxPage,
  minPage,
  page,
  defaultPage,
  onPageChange,
}: UsePaginationValueProps) {
  const [pageState, setPageState] = useState(() => {
    return parsePage({
      page: page ?? defaultPage ?? minPage,
      minPage,
      maxPage,
    });
  });

  useEffect(() => {
    if (page !== undefined) {
      setPageState(page);
    }
  }, [page]);

  const handleSetPage = (v: number) => {
    const nextPage = parsePage({
      page: v,
      minPage,
      maxPage,
    });

    if (page === undefined) {
      setPageState(nextPage);
    }

    onPageChange?.(nextPage);
  };

  return [pageState, handleSetPage] as const;
}

export { usePage };
