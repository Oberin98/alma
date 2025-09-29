import { useMemo } from "react";

type CreateRangeParams = {
  rangeStep: number;
  page: number;
  minPage: number;
  maxPage: number;
};

function createRange({ rangeStep, page, minPage, maxPage }: CreateRangeParams) {
  let min = Math.max(page - rangeStep, minPage);
  let max = Math.min(page + rangeStep, maxPage);

  if (maxPage - page < rangeStep) {
    min = Math.max(min - (rangeStep + (page - maxPage)), minPage);
  }

  if (page - minPage < rangeStep) {
    max = Math.min(max + (rangeStep - (page - minPage)), maxPage);
  }

  const range = [];

  for (let i = min; i <= max; i += 1) {
    range.push(i);
  }

  return range;
}

function useRange({ rangeStep, page, minPage, maxPage }: CreateRangeParams) {
  return useMemo(() => {
    return createRange({
      rangeStep,
      page,
      minPage,
      maxPage,
    });
  }, [rangeStep, page, minPage, maxPage]);
}

export { useRange };
