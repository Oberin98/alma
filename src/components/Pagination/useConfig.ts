import { useMemo } from "react";

function parseTotalPages(totalPages: number) {
  if (Number.isNaN(totalPages) || typeof totalPages !== "number") {
    return 1;
  }

  return Math.max(totalPages, 1);
}

function parseRangeSize(totalPages: number, maxSize: number, minSize: number) {
  return Math.max(Math.min(parseTotalPages(totalPages), maxSize), minSize);
}

function parseRangeStep(rangeSize: number) {
  return Math.floor(rangeSize / 2);
}

type UseConfigParams = {
  totalPages: number;
};

function useConfig({ totalPages }: UseConfigParams) {
  return useMemo(() => {
    const minPage = 1;
    const maxPage = parseTotalPages(totalPages);
    const rangeSize = parseRangeSize(totalPages, 5, 1);
    const rangeStep = parseRangeStep(rangeSize);

    return { rangeSize, rangeStep, minPage, maxPage };
  }, [totalPages]);
}

export { useConfig };
