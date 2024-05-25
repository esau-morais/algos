import { expect, test } from "bun:test";
import { bubbleSort } from "./bubble-sort";

test("bubble sort", () => {
  const arr = [9, 3, 7, 4, 69, 420, 42];
  const sortedArr = bubbleSort(arr);

  expect(sortedArr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});
