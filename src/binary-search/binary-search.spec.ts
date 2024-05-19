import { expect, test } from "bun:test";
import { binarySearch } from "./binary-search";

test("binary search", () => {
  const arr = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
  // NOTE: only works for sorted arrays
  const arr2 = ["hello", "hell", "hel", "he", "h"].toSorted();

  expect(binarySearch(arr, 69)).toEqual(true);
  expect(binarySearch(arr, 1336)).toEqual(false);
  expect(binarySearch(arr, 69420)).toEqual(true);
  expect(binarySearch(arr, 69421)).toEqual(false);
  expect(binarySearch(arr, 1)).toEqual(true);
  expect(binarySearch(arr, 0)).toEqual(false);
  expect(binarySearch(arr2, "hello")).toEqual(true);
});
